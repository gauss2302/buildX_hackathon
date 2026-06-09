const ALLOWED_FORM_HOSTS = ["docs.google.com", "forms.gle"];

function sanitizeFormUrl(raw: string | undefined): string {
  if (!raw) return "";
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return "";
    if (!ALLOWED_FORM_HOSTS.includes(url.hostname)) return "";
    return url.toString();
  } catch {
    return "";
  }
}

export const formUrls = {
  team: sanitizeFormUrl(process.env.NEXT_PUBLIC_FORM_TEAM_URL),
} as const;
