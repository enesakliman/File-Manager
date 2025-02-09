import React from "react";
import Main from "../layouts/Main/Main";
import TreeMenuItem from "../components/tree-menu/TreeMenuItem";
import ListView from "../components/list-view/ListView";
import GridView from "../components/grid-view/GridView";
import Toolbar from "../components/toolbar/Toolbar";
import PreviewImage from "../components/preview-image/PreviewImage";
import { useFolderQuery } from "../queries/useFolderQuery";
import { useParams } from "react-router";
import { useModal } from "../context/modal-context/modal-context";
import CreateFolderModal from "../modals/CreateFolderModal/CreateFolderModal";
import { useViewContext } from "../context/view-context/view-context";

const FolderView = () => {
  const viewContext = useViewContext();
  const { select, deselect, clear } = useViewContext();
  const modal = useModal();
  const params = useParams();
  const folder = useFolderQuery(params.id);
  const name =
    !params.id || params.id === "null" ? "Kök Klasör" : folder.find.data?.name;

  const handleClickCreate = () => {
    modal.appear({
      title: "Yeni Klasör",
      cildren: (props) => (
        <CreateFolderModal {...props} parentFolderId={params.id} />
      ),
    });
  };

  return (
    <Main
      preview={<PreviewImage />}
      toolbar={<Toolbar />}
      folderName={name}
      sidebar={
        <>
          <button onClick={handleClickCreate} className="create-button">
            Create
          </button>
          <TreeMenuItem name="Kök Klasör" id="null" defaultExpanded={true} />
        </>
      }
      content={
        viewContext.type === "list" ? (
          <ListView files={folder.files.data} folders={folder.list.data} />
        ) : <GridView files={folder.files.data} folders={folder.list.data} />
      }
    />
  );
};

export default FolderView;
