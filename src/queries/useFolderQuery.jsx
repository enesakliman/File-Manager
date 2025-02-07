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

  const addSubfolder = useMutation({
    mutationFn: (values) => backend.folderService.create(values),
    onSuccess: ({ data }, values, unknown2) => {
      queryClient.invalidateQueries({ queryKey: ["folders", { _query }] });
      console.log(data, values, unknown2);
    },
  });
  return { find, list, addSubfolder };
};

export default useFolderQuery;
