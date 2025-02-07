import React, { useCallback } from "react";
import { useState } from "react";
import useBoolean from "../../hooks/useBoolean";
import IconChevronRight from "../../assets/icons/IconChevronRight";
import IconChevronDown from "../../assets/icons/IconChevronDown";
import IconFolder from "../../assets/icons/IconFolder";
import IconFolderOpen from "../../assets/icons/IconFolderOpen";
import { useNavigate, useParams } from "react-router";

const TreeMenuItem = ({ name, id, parentId, defaultExpanded }) => {
  const expanded = useBoolean(defaultExpanded || false);
  const navigate = useNavigate();
  const params = useParams();

  const handleClick = useCallback(() => {
    console.log(id);

    navigate("/folder/" + id);
  }, []);

  const isCurrent = params.id === id;
  const Icon = isCurrent ? IconFolderOpen : IconFolder;
  const fontWeight = isCurrent ? "bold" : "normal";
  return;
  <div className="tree-menu-item">
    {!expanded.value && (
      <div className="tree-menu-item-row">
        <button onClick={expanded.setTrue}>
          <IconChevronRight />
        </button>
        <span
          className="tree-menu-row-title"
          style={{
            fontWeight,
          }}
          onClick={handleClick}
        >
          <Icon className="folder-icon" />
          {name}
        </span>
      </div>
    )}
    {!!expanded.value && (
      <>
        <div className="tree-menu-item-row">
          <button onClick={expanded.setFalse}>
            <IconChevronDown />
          </button>
          <span
            className="tree-menu-row-title"
            style={{
              fontWeight,
            }}
            onClick={handleClick}
          >
            <Icon className="folder-icon" />
            {name}
          </span>
        </div>
        <div className="tree-menu-sub">
          <TreeMenu parentId={id} />
        </div>
      </>
    )}
  </div>;
};

export default TreeMenuItem;
