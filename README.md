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


## chrome web store

### Descriptions

> 'Better Hotkeys for Zoho CRM' provides easy keyboard hotkeys to make you the fastest Zoho CRM power user in your company.
>
> Feature Set
> --
> - Quickly open a main Zoho CRM module in a new tab from anywhere
> - Easy keyboard hotkeys for navigating through Zoho CRM and editing records
> - Support for all Zoho CRM regions
> - Privacy-oriented implementation stores minimum data (only when really necessary)
> - Coming soon: Override and define custom key bindings for optimal personal usage

> Non-Affiliation statement
> --
> This extension and the developers are not affiliated in any way with Zoho, meaning this extension is not official. The extension does not alter the Zoho CRM website's HTML, it merely adds hotkeys to trigger existing links and buttons.
>
> The official Zoho website can be found at https://www.zoho.com. 
> "Zoho", Zoho logos, and other Zoho trademarks are trademarks or registered trademarks of Zoho Corporation or its affiliates in India, the U.S. and elsewhere.
>
> Privacy
> ---
> This extension only saves the zoho org id and zoho domain if given. The extension does not send data to any servers nor does it store more information than the zoho org id and zoho domain.
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
Should have...

- Square corners, no padding (full bleed)
- 1280x800 or 640x400 pixels

# Links

Keyboard font by 212 Fonts: https://www.fontspace.com/212-keyboard-font-f34592

# License

Licensed under AGPL