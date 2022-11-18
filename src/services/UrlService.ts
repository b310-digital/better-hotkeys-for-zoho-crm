export default class UrlService {
  private static leadsModuleRelative = "/tab/Leads";
  private static dealsModuleRelative = "/tab/Potentials";
  private static accountsModuleRelative = "/tab/Accounts";
  private static contactsModuleRelative = "/tab/Contacts";

  public static getZohoUrl = async (): Promise<string> => {
    const zohoLocation =
      (await chrome.storage.local.get("location")).location || "com";
    const zohoOrgId = (await chrome.storage.local.get("zohoId")).zohoId;

    if (!zohoOrgId) {
      return `https://crm.zoho.${zohoLocation}/crm`;
    }

    return `https://crm.zoho.${zohoLocation}/crm/${zohoOrgId}`;
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
