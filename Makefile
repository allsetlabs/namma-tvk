# Namma TVK — TVK Manifesto Website
# Port Configuration
WEB_PORT    := 4010
BACKEND_PORT := 3110
MOBILE_PORT  := 4011

.PHONY: setup install start stop

setup:
	@echo "Checking system dependencies..."
	@command -v node >/dev/null 2>&1 || { echo "Installing Node.js..."; brew install node; }
	@command -v tmux >/dev/null 2>&1 || { echo "Installing tmux..."; brew install tmux; }

install:
	@echo "No dependencies to install yet. CEO will set up the project."

start:
	@echo "Project managed by AI agents via DevBot schedulers."
	@echo "Web port: $(WEB_PORT) | Backend port: $(BACKEND_PORT) | Mobile port: $(MOBILE_PORT)"
	@echo "Check the company board: cat .board/companyboard.json"

stop:
	@lsof -ti:$(WEB_PORT) | xargs kill -9 2>/dev/null || true
	@lsof -ti:$(BACKEND_PORT) | xargs kill -9 2>/dev/null || true
	@lsof -ti:$(MOBILE_PORT) | xargs kill -9 2>/dev/null || true
