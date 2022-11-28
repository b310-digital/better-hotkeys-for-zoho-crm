<<<<<<< HEAD

# Hotkeys for Zoho CRM as Chrome Browser Extension

=======

# Better Hotkeys for Zoho CRM - Chrome Browser Extension

> > > > > > > 0970161 (docs: Apply the correct title of the chrome extension everywhere)

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

### Built-in Zoho CRM Hotkeys

| Command       | Hotkey (PC)   | Hotkey (Apple)   |
| ------------- | ------------- | ---------------- |
| Global search | `alt + space` | `option + space` |

### Navigation

| Command                  | Hotkey (PC)       | Hotkey (Apple)    |
| ------------------------ | ----------------- | ----------------- |
| Jump to Menu Item 1      | `1`               | `1`               |
| Jump to Menu Item 2      | `2`               | `2`               |
| Jump to Menu Item 3      | `3`               | `3`               |
| Jump to Menu Item 4      | `4`               | `4`               |
| Jump to Menu Item 5      | `5`               | `5`               |
| Jump to Menu Item 6      | `6`               | `6`               |
| Jump to Menu Item 7      | `7`               | `7`               |
| Jump to Menu Item 8      | `8`               | `8`               |
| Jump to Menu Item 9      | `9`               | `9`               |
| Jump to next records     | `→ (arrow right)` | `→ (arrow right)` |
| Jump to previous records | `← (arrow left)`  | `← (arrow left)`  |

### Record Managment

| Command               | Hotkey (PC) | Hotkey (Apple) |
| --------------------- | ----------- | -------------- |
| Compose email         | `alt + m`   | `option + m`   |
| Convert to potential  | `alt + c`   | `option + c`   |
| Delete current record | `alt + d`   | `option + d`   |
| Edit Zoho CRM record  | `e`         | `e`            |
| New Zoho CRM record   | `n`         | `n`            |
| Save Zoho CRM record  | `alt + s`   | `option + s`   |

### Hotkeys outside of any Zoho application

| Command                                 | Hotkey (PC)       | Hotkey (Apple)       |
| --------------------------------------- | ----------------- | -------------------- |
| Open Zoho CRM Account Module in new tab | `alt + shift + a` | `option + shift + a` |
| Open Zoho CRM Contact Module in new tab | `alt + shift + c` | `option + shift + c` |
| Open Zoho CRM Deal Module in new tab    | `alt + shift + d` | `option + shift + d` |
| Open Zoho CRM Lead Module in new tab    | `alt + shift + l` | `option + shift + l` |

### Upcoming hotkeys

| Task                       | Hotkey (PC)   | Hotkey (Apple)   |
| -------------------------- | ------------- | ---------------- |
| Jump to notes in edit mode | `alt + n + o` | `option + n + o` |

## Links

Keyboard font by 212 Fonts: https://www.fontspace.com/212-keyboard-font-f34592

## License

Licensed under AGPL

## Chrome Web Store

The directory `./chrome-web-store` contains all text, assets and other content used in the Google Chrome Web Store, e.g. [./chrome-web-store/CHROME_WEB_STORE_CONFIGURATION.md](./chrome-web-store/CHROME_WEB_STORE_CONFIGURATION.md) We want to keep it up to date.
