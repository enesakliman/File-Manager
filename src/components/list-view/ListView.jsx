import React, { useState } from "react";
import ListViewItem from "./ListViewItem";
import { useViewContext } from "../../context/view-context/view-context";
import "./ListView.styles.css";
import useFolderQuery from "../../queries/useFolderQuery";
import { useNavigate, useParams } from "react-router";

const ListView = ({ files, folders }) => {
  const navigate = useNavigate();
  const params = useParams();
  const folder = useFolderQuery(params.id);
  const { clear, itemIsSelected, setSelection } = useViewContext();

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

      <div key="parent folder" className="list-view-item">
        <img src="/folder-blue.png" style={{ marginLeft: "30px" }} />
        <span>..</span>
      </div>
      {[...(folders || []), ...(files || [])].map((f) => {
        return <ListViewItem item={f} />;
      })}
    </div>
  );
};

export default ListView;
