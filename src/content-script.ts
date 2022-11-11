import hotkeys from "hotkeys-js";

hotkeys("alt+1", (event, handler) => {
  const menuItem1Selector =
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(1)";
  const menuItem1Element = document.querySelector(
    menuItem1Selector
  ) as HTMLElement;
  if (!menuItem1Element) {
    console.log("menuItem1Element was not found");
  } else {
    menuItem1Element.click();
  }
});

hotkeys("alt+2", (event, handler) => {
  const menuItem2Selector =
    "crm-menu > div.crmMenuLeft.fL > crm-tab > div.lyteMenuItems > div:nth-child(2)";
  const menuItem2Element = document.querySelector(
    menuItem2Selector
  ) as HTMLElement;
  if (!menuItem2Element) {
    console.log("menuItem2Element was not found");
  } else {
    menuItem2Element.click();
  }
});
