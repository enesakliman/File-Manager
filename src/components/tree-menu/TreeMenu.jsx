import React from "react";
import TreeMenuItem from "./TreeMenuItem";
import  {useFolderQuery}  from "../../queries/useFolderQuery";
import "./TreeMenu.styles.css";

const TreeMenu = ({ parentId }) => {
  const folder = useFolderQuery(parentId);

  const items = folder.list.data;

  return (
    <div className="tree-menu">
      {items?.map((item) => (
        <TreeMenuItem
          key={item.id}
          name={item.name}
          id={item.id}
          parentId={item.parentId}
        />
      ))}
    </div>
  );
};

export default TreeMenu;
