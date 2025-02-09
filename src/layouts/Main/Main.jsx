import "./Main.styles.css";
import React from "react";
import backend from "../../services/backend";
import useQureyFolder from "../../queries/useFolderQuery";
import { preview } from "vite";

const Main = ({ sidebar, folderName, toolbar, content, preview }) => {
  return (
    <div id="container">
      <div id="side-bar">{sidebar}</div>
      <div id="content-host">
        <div id="top-nav">
          <h1 id="folder-name">{folderName}</h1>
          <div id="search-host">
            <input />
          </div>
        </div>
        <div id="toolbar">{toolbar}</div>
        <div id="content-and-preview">
          <div id="content">{content}</div>
          <div id="preview">{preview}</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
