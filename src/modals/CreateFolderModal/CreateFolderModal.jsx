import React from "react";
import { useFormik } from "formik";
import { useModal } from "../../context/modal-context/modal-context";
import * as yup from "yup";
import { useParams } from "react-router";

const validationSchema = yup.object({
  name: yupToFormErrors.string().required("Klasör adı zorunludur"),
});

const CreateFolderModal = ({ modalId, parentFolderId }) => {
  const modal = useModal();
  const folder = useFolderQuery(parentFolderId);
  const form = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema,
    onSubmit: (value) => console.log(value),
  });

  const parentId = parentFolderId === "null" ? null : parentFolderId || null;

  const handleOk = () => {
    form.validateForm().then((response) => {
      if (Object.keys(response).length) return;
      folder.addSubfolder.mutateAsync({ ...form.values, parentId }).then(() => {
        modal.hide(modalId);
      });
    });
  };
  return (
    <>
      <div className="modal-body">
        <form onSubmit={form.handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Klasör Adı</label>
            <input
              id="name"
              name="name"
              onChange={form.handleChange}
              value={form.values.email}
              placeholder="Bir isim sağlayın"
            />
            <span className="input-error">{form.errors.name}</span>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={handleOk}>Ok</button>
      </div>
    </>
  );
};

export default CreateFolderModal;
