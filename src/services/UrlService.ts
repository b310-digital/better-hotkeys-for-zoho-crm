export default class UrlService {
  private static leadsModuleRelative = "/tab/Leads";
  private static dealsModuleRelative = "/tab/Potentials";
  private static accountsModuleRelative = "/tab/Accounts";
  private static contactsModuleRelative = "/tab/Contacts";

  public static getZohoUrl = async (): Promise<string> => {
    const zohoLocation =
      (await chrome.storage.local.get("location")).location || "com";
    const zohoOrgId = (await chrome.storage.local.get("zohoId"))?.zohoId;
    const zohoCRMSystem =
      (await chrome.storage.local.get("zohoCRMSystem"))?.zohoCRMSystem || "crm";

    if (!zohoOrgId) {
      return `https://${zohoCRMSystem}.zoho.${zohoLocation}/crm`;
    }

    return `https://${zohoCRMSystem}.zoho.${zohoLocation}/crm/${zohoOrgId}`;
  };

  public static getZohoLeadModuleUrl = async () => {
    return (await this.getZohoUrl()) + this.leadsModuleRelative;
  };

  public static getZohoDealModuleUrl = async () => {
    return (await this.getZohoUrl()) + this.dealsModuleRelative;
  };

  public static getZohoAccountModuleUrl = async () => {
    return (await this.getZohoUrl()) + this.accountsModuleRelative;
  };

  public static getZohoContactModuleUrl = async () => {
    return (await this.getZohoUrl()) + this.contactsModuleRelative;
  };
}
