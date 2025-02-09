import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import backend from "../services/backend";

const useFolderQuery = (id) => {
  const queryClient = useQueryClient();
  const find = useQuery({
    queryKey: ["folder", id],
    queryFn: () => backend.folderService.find(id).then((res) => res.data),
    enabled: Boolean(id) && id !== "null",
  });

  const _query = { parentId: id || "null" };
  const list = useQuery({
    queryKey: ["folders", { _query }],
    queryFn: () =>
      backend.folderService.list(_query).then((res) => res.data.result),
  });

  const files = useQuery({
    queryKey: ["files", { _query }],
    queryFn: () =>
      backend.fileService.list(_query).then((res) => res.data.result),
  });

  const addSubfolder = useMutation({
    mutationFn: (values) => backend.folderService.create(values),
    onSuccess: ({ data }, values, unknown2) => {
      queryClient.invalidateQueries({ queryKey: ["folders", { _query }] });
    },
  });

  const addFile = useMutation({
    mutationFn: (values) => backend.fileService.create(values),
    onSuccess: ({ data }, values, unknown2) => {
      queryClient.invalidateQueries({ queryKey: ["files", { _query }] });
    },
  });

  const removeFolder = useMutation({
    mutationFn: (id) => backend.folderService.remove(id),
    onSuccess: ({ data }, values, unknown2) => {
      queryClient.invalidateQueries({ queryKey: ["folders", { _query }] });
    },
  });

  const removeFile = useMutation({
    mutationFn: (id) => backend.fileService.remove(id),
    onSuccess: ({ data }, values, unknown2) => {
      queryClient.invalidateQueries({ queryKey: ["files", { _query }] });
    },
  });
  return { find, files, list, addSubfolder, addFile, removeFolder, removeFile };
};

export default useFolderQuery;
