import React from "react";
import { useViewContext } from "../../context/view-context/view-context";
import { useNavigate } from "react-router";
import IconEye from "../../assets/icons/IconEye";

const GridViewItem = ({ item }) => {
  const { select, deselect, itemIsSelected, clear, setPreviewEye } =
    useViewContext();
  const navigate = useNavigate();
  const handleSelectionChange = (e, _item) => {
    const val = e.currentTarget.checked;
    if (val) {
      select(_item);
    } else {
      deselect(_item);
    }
  };
  return (
    <div
    onClick={item.url ? () => {
      setPreviewEye(item);
    }: undefined}
      key={item.id}
      className="grid-view-item"
      onDoubleClick={
        !item.url
          ? () => {
              clear();
              navigate("/folder/" + item.id || "null");
            }
          : undefined
      }
    >
      <input
        type="checkbox"
        checked={Boolean(itemIsSelected(item))}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {

          handleSelectionChange(e, item)}}
      />
      <img src={item.url || "/folder-blue.png"} />
      <span>{item.name}</span>
      
    </div>
  );
};

export default GridViewItem;
