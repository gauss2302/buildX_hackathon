"use client";

import { useEffect, useRef, useState } from "react";

type Props = { className?: string };

export function AnimatedX({ className = "" }: Props) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

    let cancelled = false;
    let cleanup: (() => void) | null = null;

    const init = async () => {
      const THREE = await import("three");
      if (cancelled) return;

      let width = wrap.clientWidth;
      let height = wrap.clientHeight;
      if (width === 0 || height === 0) {
        await new Promise<void>((r) => requestAnimationFrame(() => r()));
        width = wrap.clientWidth;
        height = wrap.clientHeight;
      }
      if (cancelled || width === 0 || height === 0) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        });
      } catch {
        return; // WebGL unavailable — keep text X visible
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr);
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(width, height, false);

      let aspect = width / height;
      const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 10);
      camera.position.z = 2;

      const scene = new THREE.Scene();

      const halfW = aspect * 0.72;
      const halfH = 0.7;
      const diagLen = 2 * Math.sqrt(halfW * halfW + halfH * halfH);
      const innerR = 0.08;
      const glowR = 0.2;

      // Brand accent + slate for contrast on the light app background.
      const colors = ["#aed500", "#1f2937"]; // --accent, --text-primary
      const slope = Math.atan2(halfH, halfW);
      const angles = [slope, -slope]; // "/" and "\"
      const groups: import("three").Group[] = [];
      const disposables: Array<{ dispose: () => void }> = [];

      for (let i = 0; i < 2; i++) {
        const color = new THREE.Color(colors[i]);

        const innerGeom = new THREE.CylinderGeometry(innerR, innerR, diagLen, 24);
        const glowGeom = new THREE.CylinderGeometry(glowR, glowR, diagLen, 24);
        const capGeom = new THREE.SphereGeometry(innerR, 16, 12);
        const innerMat = new THREE.MeshBasicMaterial({ color });
        // Soft halo around each stroke — normal blending so it reads on light bg.
        const glowMat = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.18,
          depthWrite: false,
        });
        disposables.push(innerGeom, glowGeom, capGeom, innerMat, glowMat);

        const inner = new THREE.Mesh(innerGeom, innerMat);
        const glow = new THREE.Mesh(glowGeom, glowMat);
        const cap1 = new THREE.Mesh(capGeom, innerMat);
        const cap2 = new THREE.Mesh(capGeom, innerMat);
        cap1.position.y = diagLen / 2;
        cap2.position.y = -diagLen / 2;

        const group = new THREE.Group();
        group.add(glow, inner, cap1, cap2);
        group.rotation.z = angles[i] - Math.PI / 2;
        scene.add(group);
        groups.push(group);
      }

      // Lines arrive perpendicular to their own axis — "/" from upper-left,
      // "\" from upper-right — sliding diagonally into position.
      const D = 2.6;
      const start1 = new THREE.Vector3(-Math.sin(slope), Math.cos(slope), 0).multiplyScalar(D);
      const start2 = new THREE.Vector3(Math.sin(slope), Math.cos(slope), 0).multiplyScalar(D);
      const end = new THREE.Vector3(0, 0, 0);

      if (prefersReducedMotion) {
        groups[0].position.copy(end);
        groups[1].position.copy(end);
      } else {
        groups[0].position.copy(start1);
        groups[1].position.copy(start2);
      }

      const ro = new ResizeObserver(() => {
        const w = wrap.clientWidth;
        const h = wrap.clientHeight;
        if (w === 0 || h === 0) return;
        aspect = w / h;
        camera.left = -aspect;
        camera.right = aspect;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
        renderer.render(scene, camera);
      });
      ro.observe(wrap);

      const duration = prefersReducedMotion ? 0 : 1300;
      const delay = prefersReducedMotion ? 0 : 200;

      let rafId = 0;
      let startTs = 0;
      const tick = (now: number) => {
        if (!startTs) startTs = now;
        const elapsed = Math.max(now - startTs - delay, 0);
        const t = duration === 0 ? 1 : Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3.5);

        groups[0].position.lerpVectors(start1, end, eased);
        groups[1].position.lerpVectors(start2, end, eased);

        renderer.render(scene, camera);

        if (t < 1) rafId = requestAnimationFrame(tick);
      };

      setActive(true);
      rafId = requestAnimationFrame(tick);

      cleanup = () => {
        cancelAnimationFrame(rafId);
        ro.disconnect();
        renderer.dispose();
        for (const d of disposables) d.dispose();
      };
    };

    void init();

    return () => {
      cancelled = true;
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <span ref={wrapRef} className={`relative inline-block ${className}`}>
      <span
        style={{
          opacity: active ? 0 : 1,
          transition: "opacity 220ms ease-out",
        }}
      >
        X
      </span>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
    </span>
  );
}
