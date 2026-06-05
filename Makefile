DEV  ?= docker compose -f docker-compose.dev.yml
PROD ?= docker compose -f docker-compose.prod.yml

.DEFAULT_GOAL := help
.PHONY: help \
        dev dev-up dev-down dev-build dev-rebuild dev-logs dev-ps dev-shell dev-clean \
        prod prod-up prod-down prod-build prod-rebuild prod-logs prod-ps prod-shell prod-clean \
        cert-init cert-renew

help: ## Show available targets
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# ─── Development ────────────────────────────────────────────────────────────
dev: dev-up ## Alias for dev-up

dev-up: ## Start dev stack (next dev + nginx on :8080)
	$(DEV) up -d

dev-down: ## Stop dev stack
	$(DEV) down

dev-build: ## (Re)build dev images
	$(DEV) build

dev-rebuild: ## Full dev rebuild: down + no-cache build + up
	$(DEV) down
	$(DEV) build --no-cache
	$(DEV) up -d

dev-logs: ## Tail dev logs
	$(DEV) logs -f --tail=100

dev-ps: ## List dev containers
	$(DEV) ps

dev-shell: ## Open shell in dev web container
	$(DEV) exec web sh

dev-clean: ## Remove dev containers, images, volumes
	$(DEV) down --rmi local --volumes --remove-orphans

# ─── Production ─────────────────────────────────────────────────────────────
prod: prod-up ## Alias for prod-up

prod-up: ## Start prod stack (nginx 80/443 + standalone build)
	$(PROD) up -d

prod-down: ## Stop prod stack
	$(PROD) down

prod-build: ## Build prod images using cache
	$(PROD) build

prod-rebuild: ## Full prod rebuild: down + no-cache build + up
	$(PROD) down
	$(PROD) build --no-cache
	$(PROD) up -d

prod-logs: ## Tail prod logs
	$(PROD) logs -f --tail=100

prod-ps: ## List prod containers
	$(PROD) ps

prod-shell: ## Open shell in prod web container
	$(PROD) exec web sh

prod-clean: ## Remove prod containers, images, volumes
	$(PROD) down --rmi local --volumes --remove-orphans

# ─── Certificates (Let's Encrypt) ───────────────────────────────────────────
cert-init: ## Issue initial cert for hackathon.buildx.uz (requires DNS pointing to host)
	docker run --rm -p 80:80 \
	  -v /etc/letsencrypt:/etc/letsencrypt \
	  certbot/certbot:latest certonly --standalone \
	  -d hackathon.buildx.uz \
	  --agree-tos --no-eff-email --email admin@buildx.uz

cert-renew: ## Force renew (auto-renews via certbot container otherwise)
	$(PROD) exec certbot certbot renew --webroot -w /var/www/certbot
	$(PROD) exec nginx nginx -s reload
