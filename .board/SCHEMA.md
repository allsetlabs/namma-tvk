# Board Document Schemas

Quick reference for all `.board/` JSON documents.

## companyboard.json

| Field | Type | Description |
|-------|------|-------------|
| document | string | Always `"companyboard"` |
| lastUpdated | string | Timestamp: `YYYY-Mon-DD-HH-MMam` |
| updatedBy | string | Agent name + role, e.g. `"Karthik (ceo)"` |
| tasks | array | Task objects |

### Task Object

| Field | Type | Description |
|-------|------|-------------|
| id | string | `task-NNN` format, incrementing |
| title | string | Short task title |
| description | string | Detailed description |
| status | string | `pending` → `in-progress` → `completed` → `testing` → `test-success` / `test-failed` |
| priority | string | `critical`, `high`, `medium`, `low` |
| createdBy | string | Agent who created it |
| createdAt | string | Timestamp |
| updatedAt | string | Timestamp |
| assignedTo | string/null | Agent role assigned to |
| notes | array | Freeform notes from any agent |

## user-feedback.json

| Field | Type | Description |
|-------|------|-------------|
| document | string | Always `"user-feedback"` |
| entries | array | Feedback entry objects |

### Feedback Entry

| Field | Type | Description |
|-------|------|-------------|
| id | string | `uf-NNN` format |
| prompt | string | What the user said |
| status | string | `pending` → `acknowledged` → `in-development` → `testing` → `completed` / `declined` |
| ceoAction | string/null | What the CEO decided to do |
| movedTo | string/null | Task ID if converted to a task |
| createdAt | string | Timestamp |

## investor-feedback.json

Same schema as user-feedback but with `if-NNN` IDs and `document: "investor-feedback"`.
