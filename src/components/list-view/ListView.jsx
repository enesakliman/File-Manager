import React, { useState } from "react";
import { useViewContext } from "../../context/view-context/view-context";
import "./ListView.styles.css";

const ListView = ({ files, folders }) => {
  const { select, deselect, clear, itemIsSelected, setSelection } =
    useViewContext();

  const handleSelectionChange = (e, item) => {
    const val = e.currentTarget.checked;
    if (val) {
      select(item);
    } else {
      deselect(item);
    }
  };

  const bulk = (e) => {
    const val = e.currentTarget.checked;
    if (val) {
      setSelection([...(folders || []), ...(files || [])]);
    } else {
      clear();
    }
  };
  return (
    <div className="list-view">
      <div className="list-view-title list-view-item">
        <input type="checkbox" onChange={bulk} />
        <span>Name</span>
      </div>
      {folders?.map((f) => {
        return (
          <div key={f.id} className="list-view-item">
            <input
              type="checkbox"
              checked={Boolean(itemIsSelected(f))}
              onChange={(e) => handleSelectionChange(e, f)}
            />
            <img src="/folder-blue.png" />
            <span>{f.name}</span>
          </div>
        );
      })}
      {files?.map((f) => {
        return (
          <div key={f.id} className="list-view-item">
            <input
              type="checkbox"
              checked={Boolean(itemIsSelected(f))}
              onChange={(e) => handleSelectionChange(e, f)}
            />
            <img src={f.url} />
            <span>{f.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
