import hotkeys from "hotkeys-js";

class HotkeyCommand {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }
}

const hotKeyCommand = new HotkeyCommand("");
console.log(hotKeyCommand);

const mapping = {
  "alt+1":
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(1)",
  "alt+2":
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(2)",
  "alt+3":
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(3)",
  "alt+4":
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(4)",
  "alt+5":
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(5)",
  "alt+6":
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(6)",
  "alt+7":
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(7)",
  "alt+8":
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(8)",
  "alt+9":
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(9)",
};

Object.entries(mapping).forEach(([hotkey, xpath]) => {
  hotkeys(hotkey, (event, handler) => {
    const menuItem1Selector = xpath;
    const menuItem1Element = document.querySelector(
      menuItem1Selector
    ) as HTMLElement;
    if (!menuItem1Element) {
      console.log("menuItem1Element was not found");
    } else {
      menuItem1Element.click();
    }
  });
});
