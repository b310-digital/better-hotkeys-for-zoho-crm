import { string } from "prop-types";
import React, { useEffect, useState } from "react";

export default function App() {
  const [selectedServerLocation, setServerLocation] = useState();
  const [zohoOrgId, setZohoOrgId] = useState();

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

  return (
    <div className="columns is-centered">
      <div className="column">
        <h1 className="title">Zoho Settings</h1>
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
                <option>eu</option>
                <option>com</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
