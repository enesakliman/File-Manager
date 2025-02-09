import React from "react";
import { useViewContext } from "../../context/view-context/view-context";

const PreviewImage = () => {
  const viewContext = useViewContext();
  if (
    viewContext.previewEye ||
    (viewContext.selectedItems.length === 1 && viewContext.selectedItems[0].url)
  ) {
    const item = viewContext.previewEye || viewContext.selectedItems[0];
    return (
      <div className="preview-image-host">
        {viewContext.previewEye && (
          <div className="xmark">
            <button onClick={() => viewContext.setPreviewEye(undefined)}>
              X
            </button>
          </div>
        )}
        <img src={item.url} />
      </div>
    );
    if (viewContext.previewEye) {
      // kapatma butonu
    }
    // Önizleme
  } else if (viewContext.selectedItems.length > 0) {
    // seçimler listesi
    return (
      <div>
        {viewContext.selectedItems.map((item) => {
          return (
            <p
              onClick={() => {
                viewContext.deselect(item);
              }}
            >
              {item.name}
            </p>
          );
        })}
      </div>
    );
  } else null;
  return <div>PreviewImage</div>;
};

export default PreviewImage;
