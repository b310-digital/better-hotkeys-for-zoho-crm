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

### Built-in Zoho CRM Hotkeys

| Command           | Hotkey on PC Keyboard | Hotkey on Apple Keyboard |
| ----------------- | --------------------- | ------------------------ |
| [x] Global search | `alt + space`         | `option + space`         |

### Navigation

| Command                                   | Hotkey on PC Keyboard | Hotkey on Apple Keyboard |
| ----------------------------------------- | --------------------- | ------------------------ |
| [x] Jump to Menu Item 1                   | `1`                   | `1`                      |
| [x] Jump to Menu Item 2                   | `2`                   | `2`                      |
| [x] Jump to Menu Item 3                   | `3`                   | `3`                      |
| [x] Jump to Menu Item 4                   | `4`                   | `4`                      |
| [x] Jump to Menu Item 5                   | `5`                   | `5`                      |
| [x] Jump to Menu Item 6                   | `6`                   | `6`                      |
| [x] Jump to Menu Item 7                   | `7`                   | `7`                      |
| [x] Jump to Menu Item 8                   | `8`                   | `8`                      |
| [x] Jump to Menu Item 9                   | `9`                   | `9`                      |
| [x] Jump to next entry in CRM records     | `→ (arrow right)`     | `→ (arrow right)`        |
| [x] Jump to previous entry in CRM records | `← (arrow left)`      | `← (arrow left)`         |

### Record Managment

| Command                                          | Hotkey on PC Keyboard | Hotkey on Apple Keyboard |
| ------------------------------------------------ | --------------------- | ------------------------ |
| [x] Convert to potential                         | `alt + c`             | `option + c`             |
| [x] Create New Zoho CRM record, e.g. contact (C) | `n`                   | `n`                      |
| [x] Delete current record                        | `alt + d`             | `option + d`             |
| [x] Compose email for current record             | `alt + m`             | `option + m`             |
| [x] Edit Zoho CRM record                         | `e`                   | `e`                      |
| [x] Save Zoho CRM record                         | `alt + s`             | `option + s`             |

### Hotkeys outside of any Zoho application

| Command                    | Hotkey on PC Keyboard | Hotkey on Apple Keyboard |
| -------------------------- | --------------------- | ------------------------ |
| [x] Jump to Account Module | `alt + shift + a`     | `option + shift + a`     |
| [x] Jump to Contact Module | `alt + shift + c`     | `option + shift + c`     |
| [x] Jump to Deal Module    | `alt + shift + d`     | `option + shift + d`     |
| [x] Jump to Lead Module    | `alt + shift + l`     | `option + shift + l`     |

### Upcoming hotkeys

| Task                           | Hotkey on PC Keyboard | Hotkey on Apple Keyboard |
| ------------------------------ | --------------------- | ------------------------ |
| [ ] Jump to notes in edit mode | `alt + n + o`         | `option + n + o`         |

## chrome web store

### Descriptions

> 'Better Hotkeys for Zoho CRM' provides easy keyboard hotkeys to make you the fastest Zoho CRM power user in your company.
>
> ## Feature Set
>
> - Quickly open a main Zoho CRM module in a new tab from anywhere
> - Easy keyboard hotkeys for navigating through Zoho CRM and editing records
> - Support for all Zoho CRM regions
> - Privacy-oriented implementation stores minimum data (only when really necessary)
> - Coming soon: Override and define custom key bindings for optimal personal usage

> ## Non-Affiliation statement
>
> This extension and the developers are not affiliated in any way with Zoho, meaning this extension is not official. The extension does not alter the Zoho CRM website's HTML, it merely adds hotkeys to trigger existing links and buttons.
>
> The official Zoho website can be found at https://www.zoho.com.
> "Zoho", Zoho logos, and other Zoho trademarks are trademarks or registered trademarks of Zoho Corporation or its affiliates in India, the U.S. and elsewhere.
>
> ## Privacy
>
> This extension only saves the Zoho Org Id, Zoho system type (crmsandbox or crm) and Zoho domain if given. The extension does not send data to any servers nor does it store more information than the zoho org id and zoho domain.
>
> Open Source Code: https://github.com/b310-digital/zoho-crm-hotkeys
>
> Zoho Brand information: https://www.zoho.com/branding/

### Logos

https://developer.chrome.com/docs/webstore/images/

- 128x128-pixel extension icon, with 96x96x being the real content
- 440x280-pixel promotional image
- Optional: Marquee with 1400x560 pixels

#### Banner

![Chrome Web Store](/public/images/chrome_web_store_logo_better_hotkeys.png)

#### Logo

SVG

![Logo](/public/images/zoho_better_hotkeys_icon.svg)

PNG

![Logo](/public/images/zoho_better_hotkeys_icon.png)

### Screenshots (1-5)

- Hero Video: https://youtu.be/dDnyZ4gi1Ho
- Screenshots (raw and 1280x800 dimensions) are located in `./public/images`

Note: Constraints for screenshots are documented in https://developer.chrome.com/docs/webstore/images/#screenshots , e.g.:

- Square corners, no padding (full bleed)
- 1280x800 or 640x400 pixels

# Links

Keyboard font by 212 Fonts: https://www.fontspace.com/212-keyboard-font-f34592

# License

Licensed under AGPL
