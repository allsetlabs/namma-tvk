# Agent Conventions — Single Source of Truth

## Before Every Run

1. Read this file (CONVENTIONS.md)
2. Read your own `mistakes/` directory — never repeat past errors
3. Read your own `memory/` directory (recent files only) for context
4. Read your own `knowledge/` directory for accumulated knowledge
5. Read your own `current-path/` for current strategy
6. Read `.board/companyboard.json` for current task state

## After Every Run

1. **Memory**: Create a file in your `memory/` directory named with a human-readable timestamp in the local timezone: `YYYY-Mon-DD-HH-MMam.md` (e.g., `2026-Apr-17-02-30pm.md`). Log what you did — decisions made, tasks worked on, what changed.
2. **Knowledge**: If you learned something genuinely NEW (from web research, debugging, trial-and-error) that is NOT already documented in the codebase, add it to `knowledge/` as a descriptively-named .md file. Do NOT duplicate existing knowledge.
3. **Mistakes**: If a task failed or you made an error, document it in `mistakes/` with: what you tried, what went wrong, why it failed, and what to do differently.
4. **Current Path**: Update files in `current-path/` to reflect your current strategy and direction.

## Board Document Schemas

All `.board/` files are JSON. Every document follows these structures:

### companyboard.json

```json
{
  "document": "companyboard",
  "lastUpdated": "2026-Apr-17-02-30pm",
  "updatedBy": "ceo",
  "tasks": [
    {
      "id": "task-001",
      "title": "Short task title",
      "description": "Detailed description of what needs to be done",
      "status": "pending",
      "priority": "high",
      "createdBy": "ceo",
      "createdAt": "2026-Apr-17-02-30pm",
      "updatedAt": "2026-Apr-17-02-30pm",
      "assignedTo": null,
      "notes": []
    }
  ]
}
```

**Task statuses:** `pending` → `in-progress` → `completed` → `testing` → `test-success` / `test-failed`

### user-feedback.json / investor-feedback.json

```json
{
  "document": "user-feedback",
  "entries": [
    {
      "id": "uf-001",
      "prompt": "What the user/investor said",
      "status": "pending",
      "ceoAction": null,
      "movedTo": null,
      "createdAt": "2026-Apr-17-02-30pm"
    }
  ]
}
```

**Feedback statuses:** `pending` → `acknowledged` → `in-development` → `testing` → `completed` / `declined`

## Critical Rules

- **Always read before write.** Every document could be updated by another agent between your reads. Re-read immediately before writing.
- **Timestamps** use human-readable format in local timezone: `YYYY-Mon-DD-HH-MMam` (e.g., `2026-Apr-17-02-30pm`)
- **IDs** use the format `{prefix}-{number}` (e.g., `task-001`, `uf-001`, `if-001`). Increment from the highest existing ID.
- **JSON only** in `.board/` — never use Markdown for board documents
- **No duplication** — these conventions live HERE only, not in individual agent files

## Skills

All agents can discover and install skills at the project level:
- Use `/find-skills` to discover useful Claude Code skills
- Install with `npx @anthropic-ai/claude-code-skills add` at the project root
