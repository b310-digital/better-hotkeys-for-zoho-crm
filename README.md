# Zoho CRM Hotkeys as Chrome Browser Extension

## Development

```
docker compose up -d
docker compose exec hotkeys npm run build
```

Import the `public` directory in chrome to use it as an extension:

https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/

## Hotkey Overview

| Task                | Hotkey      | Hotkey if outside of Zoho CRM |
| -----------         | ----------- | -----------                   |
| Jump to Lead Module | Option + L  | Option + Z + L                |
| Jump to Deal Module | Option + D  | Option + Z + D                |
| Jump to Contact Module | Option + C  | Option + Z + C                |
| Jump to Account Module | Option + A  | Option + Z + A                |
| Jump to next entry in CRM records | Option + "+"  |                 |
| Jump to previous entry in CRM records | Option + "-"  |                 |
| Global search | ALT (Option-Key) + Space Bar  |                 |
| Close the pop up small window | Escape  |                 |
| Create New Zoho CRM record, e.g. contact (C) | Option + C + N  |                 |
| Edit marked Zoho CRM record | Option + E  |                 |
| Save Zoho CRM record | Option + S  |                 |
| Compose email (Question: Just a new one with empty recipent or to the marked record?) | Option + M  |                 |
| Delete current record (Question: Is there a security question that prevents deleting by accident?) | Option + D  |                 |
| Jump to notes in edit mode | Option + N + O  |                 |
| Convert to potential | Option + C + O  |                 |