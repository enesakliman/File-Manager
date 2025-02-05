import React from "react";
import Main from "../layouts/Main/Main";
import { useFolderQuery, useFoldersQuery } from "../queries/useFolderQuery";
import { useParams } from "react-router";
import TreeMenu from "../components/tree-menu/TreeMenu";

const FolderView = () => {
  const params = useParams();
  const folder = useFolderQuery(params.id);
  const name = folder.find.data?.name

  const subFolders = useFoldersQuery({
    parentId: params.id || "null",
  });

  return (
    <Main
      folderName={params.id? name : "kök klasör"}
      sidebar={
        
          <TreeMenu parentId="null" />
        
      }
    />
  );
};

export default FolderView;
