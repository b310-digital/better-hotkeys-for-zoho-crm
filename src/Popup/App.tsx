import React, { useEffect, useState } from "react";

export default function App() {
  const [selectedServerLocation, setServerLocation] = useState<
    string | undefined
  >("com");
  const [zohoOrgId, setZohoOrgId] = useState<string | undefined>();
  const [_zohoLink, setZohoLink] = useState<string | undefined>();
  const [zohoCRMSystem, setZohoCRMSystem] = useState<string | undefined>("crm");

  useEffect(() => {
    chrome.storage.local.get("location", (result) => {
      const location = result.location;
      if (!location) saveData("location", "com");
      setServerLocation(location);
    });

    chrome.storage.local.get("zohoId", (result) => {
      setZohoOrgId(result.zohoId);
    });

    chrome.storage.local.get("zohoCRMSystem", (result) => {
      setZohoCRMSystem(result.zohoCRMSystem);
    });
  }, []);

  const saveData = (key: string, value: string) => {
    const entry: any = {};
    entry[key] = value;
    chrome.storage.local.set(entry);
  };

  const handleServerLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setServerLocation(event.target.value);
    saveData("location", event.target.value);
  };

  const handleZohoOrgIdChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setZohoOrgId(event.target.value);
    saveData("zohoId", event.target.value);
  };

  const handleZohoCRMSystemChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setZohoCRMSystem(event.target.value);
    saveData("zohoCRMSystem", event.target.value);
  };

  const handleZohoUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") return;

    const regexp = new RegExp(
      /(?<system>crm|crmsandbox).zoho.(?<location>eu|com|com.au|com.cn|in|jp)\/crm\/(?<zohoId>org\d*)\/tab\//
    );
    const matches = regexp.exec(event.target.value);

    if (matches?.groups === undefined) return;

    const zohoId: string = matches?.groups?.zohoId || "";
    const zohoLocation: string = matches?.groups?.location || "";
    const zohoCRMSystem: string = matches?.groups?.system || "";
    setZohoOrgId(zohoId);
    setServerLocation(zohoLocation);
    setZohoLink(event.target.value);
    setZohoCRMSystem(zohoCRMSystem);
    saveData("zohoId", zohoId);
    saveData("location", zohoLocation);
    saveData("zohoCRMSystem", zohoCRMSystem);
  };

  return (
    <div>
      <nav
        className="navbar better-hotkeys-logo"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="https://github.com/b310-digital/zoho-crm-hotkeys"
          >
            <img
              src={chrome.runtime.getURL(
                "/images/zoho_better_hotkeys_icon.png"
              )}
            />
            Better Hotkeys for Zoho CRM
          </a>
        </div>
      </nav>
      <div className="columns is-centered">
        <div className="column">
          <h1 className="title">Zoho Settings</h1>
          <h2 className="subtitle">Optional, used for global zoho hotkeys</h2>
          <hr />
          <div className="field">
            <label className="label">Zoho Link</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="https://..."
                onChange={handleZohoUrlChange}
              />
            </div>
            <p className="help">
              Paste the zoho link to retrieve the zoho org id and zoho domain.
            </p>
          </div>
          <hr />
          <div className="field">
            <label className="label">Org ID</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="org..."
                onChange={handleZohoOrgIdChange}
                value={zohoOrgId}
              />
            </div>
            <p className="help">
              You can find this information in the URL (org...)
            </p>
          </div>
          <div className="field">
            <label className="label">Server Domain</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={handleServerLocationChange}
                  value={selectedServerLocation}
                >
                  <option></option>
                  <option>com.au</option>
                  <option>com.cn</option>
                  <option>com</option>
                  <option>eu</option>
                  <option>in</option>
                  <option>jp</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Server System</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={handleZohoCRMSystemChange}
                  value={zohoCRMSystem}
                >
                  <option></option>
                  <option>crmsandbox</option>
                  <option>crm</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column">
          <h1 className="title">Available Hotkeys</h1>
          <hr />
          <h2 className="subtitle">Built-in Zoho CRM Hotkeys</h2>
          <table className="table is-bordered is-striped is-hoverable">
            <thead>
              <tr>
                <th>Function</th>
                <th>Hotkey PC</th>
                <th>Hotkey Mac</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Search (global)</td>
                <td>
                  <kbd>Alt</kbd> <kbd>space</kbd>
                </td>
                <td>
                  <kbd>⌥ option</kbd> <kbd>space</kbd>
                </td>
              </tr>
            </tbody>
          </table>
          <h2 className="subtitle">Navigation</h2>
          <table className="table is-bordered is-striped is-hoverable">
            <thead>
              <tr>
                <th>Function</th>
                <th>Hotkey PC</th>
                <th>Hotkey Mac</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jump to Menu Item 1</td>
                <td>
                  <kbd>1</kbd>
                </td>
                <td>
                  <kbd>1</kbd>
                </td>
              </tr>
              <tr>
                <td>Jump to Menu Item 2</td>
                <td>
                  <kbd>2</kbd>
                </td>
                <td>
                  <kbd>2</kbd>
                </td>
              </tr>
              <tr>
                <td>Jump to Menu Item 3</td>
                <td>
                  <kbd>3</kbd>
                </td>
                <td>
                  <kbd>3</kbd>
                </td>
              </tr>
              <tr>
                <td>Jump to Menu Item 4</td>
                <td>
                  <kbd>4</kbd>
                </td>
                <td>
                  <kbd>4</kbd>
                </td>
              </tr>
              <tr>
                <td>Jump to Menu Item 5</td>
                <td>
                  <kbd>5</kbd>
                </td>
                <td>
                  <kbd>5</kbd>
                </td>
              </tr>
              <tr>
                <td>Jump to Menu Item 6</td>
                <td>
                  <kbd>6</kbd>
                </td>
                <td>
                  <kbd>6</kbd>
                </td>
              </tr>
              <tr>
                <td>Jump to Menu Item 7</td>
                <td>
                  <kbd>7</kbd>
                </td>
                <td>
                  <kbd>7</kbd>
                </td>
              </tr>
              <tr>
                <td>Jump to Menu Item 8</td>
                <td>
                  <kbd>8</kbd>
                </td>
                <td>
                  <kbd>8</kbd>
                </td>
              </tr>
              <tr>
                <td>Jump to Menu Item 9</td>
                <td>
                  <kbd>9</kbd>
                </td>
                <td>
                  <kbd>9</kbd>
                </td>
              </tr>
              <tr>
                <td>Jump to next entry in CRM records</td>
                <td>
                  <kbd>→ (arrow right)</kbd>
                </td>
                <td>
                  <kbd>→ (arrow right)</kbd>
                </td>
              </tr>
              <tr>
                <td>Jump to previous entry in CRM records</td>
                <td>
                  <kbd>← (arrow left)</kbd>
                </td>
                <td>
                  <kbd>← (arrow left)</kbd>
                </td>
              </tr>
            </tbody>
          </table>
          <h2 className="subtitle">Record Managment</h2>
          <table className="table is-bordered is-striped is-hoverable">
            <thead>
              <tr>
                <th>Function</th>
                <th>Hotkey PC</th>
                <th>Hotkey Mac</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Convert to potential</td>
                <td>
                  <kbd>Alt</kbd> <kbd>c</kbd>
                </td>
                <td>
                  <kbd>⌥ option</kbd> <kbd>c</kbd>
                </td>
              </tr>
              <tr>
                <td>Create New Zoho CRM record, e.g. contact (C)</td>
                <td>
                  <kbd>n</kbd>
                </td>
                <td>
                  <kbd>n</kbd>
                </td>
              </tr>
              <tr>
                <td>Delete current record</td>
                <td>
                  <kbd>Alt</kbd> <kbd>d</kbd>
                </td>
                <td>
                  <kbd>⌥ option</kbd> <kbd>d</kbd>
                </td>
              </tr>
              <tr>
                <td>Compose email for current record</td>
                <td>
                  <kbd>Alt</kbd> <kbd>m</kbd>
                </td>
                <td>
                  <kbd>⌥ option</kbd> <kbd>m</kbd>
                </td>
              </tr>
              <tr>
                <td>Edit Zoho CRM record</td>
                <td>
                  <kbd>e</kbd>
                </td>
                <td>
                  <kbd>e</kbd>
                </td>
              </tr>
              <tr>
                <td>Save Zoho CRM record</td>
                <td>
                  <kbd>Alt</kbd> <kbd>s</kbd>
                </td>
                <td>
                  <kbd>⌥ option</kbd> <kbd>s</kbd>
                </td>
              </tr>
            </tbody>
          </table>
          <h2 className="subtitle">Hotkeys outside of any Zoho application</h2>
          <table className="table is-bordered is-striped is-hoverable">
            <thead>
              <tr>
                <th>Function</th>
                <th>Hotkey PC</th>
                <th>Hotkey Mac</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Open Accounts Module (global)</td>
                <td>
                  <kbd>Alt</kbd> <kbd>⇧ shift</kbd> <kbd>a</kbd>
                </td>
                <td>
                  <kbd>⌥ option</kbd> <kbd>⇧ shift</kbd> <kbd>a</kbd>
                </td>
              </tr>
              <tr>
                <td>Open Deals Module (global)</td>
                <td>
                  <kbd>Alt</kbd> <kbd>⇧ shift</kbd> <kbd>d</kbd>
                </td>
                <td>
                  <kbd>⌥ option</kbd> <kbd>⇧ shift</kbd> <kbd>d</kbd>
                </td>
              </tr>
              <tr>
                <td>Open Contacts Module (global)</td>
                <td>
                  <kbd>Alt</kbd> <kbd>⇧ shift</kbd> <kbd>c</kbd>
                </td>
                <td>
                  <kbd>⌥ option</kbd> <kbd>⇧ shift</kbd> <kbd>c</kbd>
                </td>
              </tr>
              <tr>
                <td>Open Leads Module (global)</td>
                <td>
                  <kbd>Alt</kbd> <kbd>⇧ shift</kbd> <kbd>l</kbd>
                </td>
                <td>
                  <kbd>⌥ option</kbd> <kbd>⇧ shift</kbd> <kbd>l</kbd>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
