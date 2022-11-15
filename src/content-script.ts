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
  // "alt+e": "button#editRecordbtn",
  "alt+s": "button#crm_create_savebutn",
  // The following hot might not work on all circumstances. We should do some proper testing here.
  // We should find more explicit identifiers.
  // <a href="javascript:;" name="Delete2" data-zcqa="dvdeleteEntity" data-cid="deleteEntity" data-params="{&quot;module&quot;:&quot;Accounts&quot;,&quot;id&quot;:&quot;510691000000348104&quot;}">Delete</a>
  "alt+d": "a[data-cid=deleteEntity]",
  "alt+left": "img#detailPrevious",
  "alt+right": "img#detailNext",
  "alt+m": "#sendEntityMailLink",
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
    event.preventDefault;
  });
});

// hotkeys("alt+n", (event, handler) => {
//   if (location.href.includes("Accounts")) {
//     return;
//   }

//   location.href = "https://crm.zoho.eu/crm/tab/Accounts/create";
// });

hotkeys("alt+e", (event, handler) => {
  if (location.href.includes("Accounts")) {
    return;
  }

  location.href = "https://crm.zoho.eu/crm/tab/Accounts/edit";
});

hotkeys("shift+alt+a", (event, handler) => {
  if (location.href.includes("Accounts")) {
    return;
  }

  location.href = "https://crm.zoho.eu/crm/tab/Accounts";
});

hotkeys("shift+alt+c", (event, handler) => {
  if (location.href.includes("Contacts")) {
    return;
  }
  location.href = "https://crm.zoho.eu/crm/tab/Contacts";
});

hotkeys("shift+alt+d", (event, handler) => {
  if (location.href.includes("Deals")) {
    return;
  }
  location.href = "https://crm.zoho.eu/crm/tab/Deals";
});

hotkeys("shift+alt+l", (event, handler) => {
  if (location.href.includes("Leads")) {
    return;
  }
  location.href = "https://crm.zoho.eu/crm/tab/Leads";
});
