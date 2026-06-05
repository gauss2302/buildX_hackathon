COMPOSE ?= docker compose
SERVICE ?= web

.DEFAULT_GOAL := help
.PHONY: help up down restart build rebuild logs ps shell clean

help: ## Show available targets
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

up: ## Start the stack in detached mode
	$(COMPOSE) up -d

down: ## Stop and remove containers (keeps images)
	$(COMPOSE) down

restart: ## Restart all services
	$(COMPOSE) restart

build: ## Build images using cache (fast — code changes only)
	$(COMPOSE) build

rebuild: ## Full clean rebuild: down + no-cache build + up
	$(COMPOSE) down
	$(COMPOSE) build --no-cache
	$(COMPOSE) up -d

logs: ## Tail logs from all services (Ctrl+C to exit)
	$(COMPOSE) logs -f --tail=100

ps: ## Show running containers
	$(COMPOSE) ps

shell: ## Open a shell in the web container
	$(COMPOSE) exec $(SERVICE) sh

clean: ## Stop containers and remove images + orphaned volumes
	$(COMPOSE) down --rmi local --volumes --remove-orphans
