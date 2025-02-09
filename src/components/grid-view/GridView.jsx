import React, { useState } from "react";
import GridViewItem from "./GridViewItem";
import { useViewContext } from "../../context/view-context/view-context";
import "./GridView.styles.css";
import useFolderQuery from "../../queries/useFolderQuery";
import { useNavigate, useParams } from "react-router";

const GridView = ({ files, folders }) => {
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
    <div className="grid-view">
      

      <div key="parent folder" className="grid-view-item">
        <img src="/folder-blue.png" style={{ marginLeft: "30px" }} />
        <span>..</span>
      </div>
      {[...(folders || []), ...(files || [])].map((f) => {
        return <GridViewItem item={f} />;
      })}
    </div>
  );
};

export default GridView;
