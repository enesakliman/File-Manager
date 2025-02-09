import React from "react";
import { useFormik } from "formik";
import { useModal } from "../../context/modal-context/modal-context";
import * as yup from "yup";
import { useParams } from "react-router";

const validationSchema = yup.object({
  name: yup.string().required("Klasör adı zorunludur"),
  url: yup.string().required("Url zorunludur"),
});

const CreateFileModal = ({ modalId, parentFolderId }) => {
  const modal = useModal();
  const folder = useFolderQuery(parentFolderId);
  const form = useFormik({
    initialValues: {
      name: "",
      url: "",
    },
    validationSchema,
    onSubmit: (value) => console.log(value),
  });

  const parentId = parentFolderId === "null" ? null : parentFolderId || null;

  const handleOk = () => {
    form.validateForm().then((response) => {
      if (Object.keys(response).length) return;
      folder.addFile.mutateAsync({ ...form.values, parentId }).then(() => {
        modal.hide(modalId);
      });
    });
  };
  return (
    <>
      <div className="modal-body">
        <form onSubmit={form.handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Dosya Adı</label>
            <input
              id="name"
              name="name"
              onChange={form.handleChange}
              value={form.values.name}
              placeholder="Bir isim sağlayın"
            />
            <span className="input-error">{form.errors.name}</span>
          </div>
          <div className="input-group">
            <label htmlFor="name">URL</label>
            <input
              id="url"
              name="url"
              onChange={form.handleChange}
              value={form.values.url}
              placeholder="Bir url sğlayın"
            />
            <span className="input-error">{form.errors.url}</span>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={handleOk}>Ok</button>
      </div>
    </>
  );
};

export default CreateFileModal;
