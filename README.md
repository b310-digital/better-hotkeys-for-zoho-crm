# Zoho CRM Hotkeys as Chrome Browser Extension

## Development

```bash
docker compose up -d
docker compose exec hotkeys npm run build
```

For continuous bundling you can the `--watch` command

```bash
docker compose exec hotkeys npm run build -- --watch
```

Import the `public` directory in chrome to use it as an extension:

https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/

## Hotkey Overview

| Task                                                                                               | Hotkey                       | Hotkey if outside of Zoho CRM |
| -------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------- |
| Close the pop up small window                                                                      | Escape                       |                               |
| Compose email (Question: Just a new one with empty recipent or to the marked record?)              | Option + M                   |                               |
| Convert to potential                                                                               | Option + C + O               |                               |
| Create New Zoho CRM record, e.g. contact (C)                                                       | Option + C + N               |                               |
| Delete current record (Question: Is there a security question that prevents deleting by accident?) | Option + D                   |                               |
| Edit marked Zoho CRM record                                                                        | Option + E                   |                               |
| Global search                                                                                      | ALT (Option-Key) + Space Bar |                               |
| Jump to Account Module                                                                             | Option + A                   | Option + Z + A                |
| Jump to Contact Module                                                                             | Option + C                   | Option + Z + C                |
| Jump to Deal Module                                                                                | Option + D                   | Option + Z + D                |
| Jump to Lead Module                                                                                | Option + L                   | Option + Z + L                |
| Jump to Menu Item 1                                                                                | Option + 1                   |                               |
| Jump to Menu Item 2                                                                                | Option + 2                   |                               |
| Jump to Menu Item 3                                                                                | Option + 3                   |                               |
| Jump to Menu Item 4                                                                                | Option + 4                   |                               |
| Jump to Menu Item 5                                                                                | Option + 5                   |                               |
| Jump to Menu Item 6                                                                                | Option + 6                   |                               |
| Jump to Menu Item 7                                                                                | Option + 7                   |                               |
| Jump to Menu Item 8                                                                                | Option + 8                   |                               |
| Jump to Menu Item 9                                                                                | Option + 9                   |                               |
| Jump to next entry in CRM records                                                                  | Option + "+"                 |                               |
| Jump to notes in edit mode                                                                         | Option + N + O               |                               |
| Jump to previous entry in CRM records                                                              | Option + "-"                 |                               |
| Save Zoho CRM record                                                                               | Option + S                   |                               |
