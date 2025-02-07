import React, { useState } from "react";
import "./ListView.styles.css";

const ListView = ({ files, folders }) => {
    

    const handleSelectionChange = (e, item) => {
      const val = e.currentTarget.checked;
      if (val) {
        setSelectedItems((prev) => [...prev, item]);
      } else {
        setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
      }
    };

  return (
    <div className="list-view">
      <div className="list-view-title list-view-item">
        <input type="checkbox" />
        <span>Name</span>
      </div>
      {folders?.map((f) => {
        return (
          <div key={f.id} className="list-view-item">
            <input
              type="checkbox"
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
            <input type="checkbox" />
            <img src={f.url} />
            <span>{f.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
