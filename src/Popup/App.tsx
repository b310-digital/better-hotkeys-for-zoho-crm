import { string } from "prop-types";
import React, { SetStateAction, useEffect, useState } from "react";

export default function App() {
  const [selectedServerLocation, setServerLocation] = useState<
    string | undefined
  >();
  const [zohoOrgId, setZohoOrgId] = useState<string | undefined>();
  const [zohoLink, setZohoLink] = useState<string | undefined>();

  useEffect(() => {
    chrome.storage.local.get("location", (result) => {
      setServerLocation(result.location);
    });

    chrome.storage.local.get("zohoId", (result) => {
      setZohoOrgId(result.zohoId);
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

  const handleZohoUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") return;

    const regexp = new RegExp(
      /crm.zoho.(?<location>eu|com|com.au|com.cn|in|jp)\/crm\/(?<zohoId>org\d*)\/tab\//
    );
    const matches = regexp.exec(event.target.value);

    if (matches?.groups === undefined) return;

    const zohoId: string = matches?.groups?.zohoId || "";
    const zohoLocation: string = matches?.groups?.location || "";
    setZohoOrgId(zohoId);
    setServerLocation(zohoLocation);
    setZohoLink(event.target.value);
    saveData("zohoId", zohoId);
    saveData("location", zohoLocation);
  };

  return (
    <div className="columns is-centered">
      <div className="column">
        <h1 className="title">Zoho Settings</h1>
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
            Paste the zoho link to retrieve the needed information
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
          <label className="label">Server Location</label>
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
      </div>
    </div>
  );
}
