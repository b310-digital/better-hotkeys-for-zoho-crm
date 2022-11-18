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
  "1": "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(1)",
  "2": "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(2)",
  "3": "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(3)",
  "4": "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(4)",
  "5": "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(5)",
  "6": "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(6)",
  "7": "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(7)",
  "8": "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(8)",
  "9": "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(9)",
  "e": "button#editRecordbtn", // prettier-ignore
  "n": "#table_row_1 > lyte-td.alignRight > span.customPluswithImpotBtnCon.pR.cPlusImportButton.vam > link-to > button", // prettier-ignore
  // The following hot might not work on all circumstances. We should do some proper testing here.
  // We should find more explicit identifiers.
  // <a href="javascript:;" name="Delete2" data-zcqa="dvdeleteEntity" data-cid="deleteEntity" data-params="{&quot;module&quot;:&quot;Accounts&quot;,&quot;id&quot;:&quot;510691000000348104&quot;}">Delete</a>
  "alt+d": "a[data-cid=deleteEntity]",
  "alt+c": "#conLink[data-zcqa=convert] > button",
  "alt+m": "#sendEntityMailLink",
  "alt+s": "button#crm_create_savebutn",
  "left": "img#detailPrevious", // prettier-ignore
  "right": "img#detailNext", // prettier-ignore
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
