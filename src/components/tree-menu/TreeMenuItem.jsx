import React, { useCallback } from "react";
import { useState } from "react";
import useBoolean from "../../hooks/useBoolean";
import IconChevronRight from "../../assets/icons/IconChevronRight";
import IconChevronDown from "../../assets/icons/IconChevronDown";
import IconFolder from "../../assets/icons/IconFolder";
import IconFolderOpen from "../../assets/icons/IconFolderOpen";
import { useNavigate } from "react-router";

const TreeMenuItem = ({ name, id, parentId }) => {
  const expanded = useBoolean(false);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    console.log(id);

    navigate('/folder/' + id);
  }, [])
  return;
  <div className="tree-menu-item">
    {!expanded.value && (
      <div className="tree-menu-item-row">
        <button onClick={expanded.setTrue}>
          <IconChevronRight />
        </button>
        <span className="tree-menu-row-title" onClick={handleClick}>
          <IconFolder className="folder-icon" />
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
          <span className="tree-menu-row-title" onClick={handleClick}>
            <IconFolderOpen className="folder-icon" />
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
