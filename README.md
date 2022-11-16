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

| Task                                                                                      | Hotkey                       | Hotkey if outside of Zoho CRM |
| ----------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------- |
| [ ] Close the pop up small window                                                         | Escape                       |                               |
| [x] Compose email (Question: Just a new one with empty recipent or to the marked record?) | Option + M                   |                               |
| [ ] Convert to potential                                                                  | Option + C + O               |                               |
| [ ] Create New Zoho CRM record, e.g. contact (C)                                          | Option + C + N               |                               |
| [x] Delete current record                                                                 | Option + D                   |                               |
| [x] Edit Zoho CRM record                                                                  | Option + E                   |                               |
| [x] Global search                                                                         | ALT (Option-Key) + Space Bar |                               |
| [x] Jump to Account Module                                                                | Option + Shift + A           | Option + Shift + A            |
| [x] Jump to Contact Module                                                                | Option + Shift + C           | Option + Shift + C            |
| [x] Jump to Deal Module                                                                   | Option + Shift + D           | Option + Shift + D            |
| [x] Jump to Lead Module                                                                   | Option + Shift + L           | Option + Shift + L            |
| [x] Jump to Menu Item 1                                                                   | Option + 1                   |                               |
| [x] Jump to Menu Item 2                                                                   | Option + 2                   |                               |
| [x] Jump to Menu Item 3                                                                   | Option + 3                   |                               |
| [x] Jump to Menu Item 4                                                                   | Option + 4                   |                               |
| [x] Jump to Menu Item 5                                                                   | Option + 5                   |                               |
| [x] Jump to Menu Item 6                                                                   | Option + 6                   |                               |
| [x] Jump to Menu Item 7                                                                   | Option + 7                   |                               |
| [x] Jump to Menu Item 8                                                                   | Option + 8                   |                               |
| [x] Jump to Menu Item 9                                                                   | Option + 9                   |                               |
| [x] Jump to next entry in CRM records                                                     | Option + →                   |                               |
| [x] Jump to previous entry in CRM records                                                 | Option + ←                   |                               |
| [ ] Jump to notes in edit mode                                                            | Option + N + O               |                               |
| [x] Save Zoho CRM record                                                                  | Option + S                   |                               |
