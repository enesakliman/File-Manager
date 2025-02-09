import React from "react";
import "./Toolbar.styles.css";
import { useViewContext } from "../../context/view-context/view-context";
import IconTrash from "../../assets/icons/IconTrash";
import { useParams } from "react-router";
import { useFolderQuery } from "../../queries/useFolderQuery";
import CreateFolderModal from "../../modals/CreateFolderModal/CreateFolderModal";
import CreateFileModal from "../../modals/CreateFileModal/CreateFileModal";
import { useModal } from "../../context/modal-context/modal-context";

const Toolbar = () => {
  const viewContext = useViewContext();
  const params = useParams();
  const folder = useFolderQuery(params.id);
  const modal = useModal();

  const handleClickCreate = () => {
    modal.appear({
      title: "Yeni Klasör",
      cildren: (props) => (
        <CreateFolderModal {...props} parentFolderId={params.id} />
      ),
    });
  };

  const handleClickCreateFile = () => {
    modal.appear({
      title: "Yeni Klasör",
      cildren: (props) => (
        <CreateFileModal {...props} parentFolderId={params.id} />
      ),
    });
  };

  const handleRemoveSelected = () => {
    const files = viewContext.selectedItems.filter(i => Boolean(i.url))
    const folders = viewContext.selectedItems.filter(i => !Boolean(i.url))
    files.forEach((file) => {
      folder.removeFile.mutateAsync(file.id);
    })
    folders.forEach((f) => {
      folder.removeFolder.mutateAsync(f.id);
    })
  }

  const isSelected = Boolean(viewContext.selectedItems.length);
  return (
    <div className="toolbar">
      <button onClick={handleClickCreate}>
          Create Folder
        </button>
        <button onClick={handleClickCreateFile}>
          Create File
        </button>
      {isSelected && (
        <button onClick={handleRemoveSelected}>
          <IconTrash />
        </button>
      )}
    </div>
  );
};

export default Toolbar;
