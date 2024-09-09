import React from "react";
import { BasicModal } from "../../BasicModal/BasicModal";
import { useNewUserModal } from "./useNewUserModal.hook";

export const NewUserModal = ({ open, onClose, addNewUser }) => {
  const { getContent, addUser, register, handleSubmit, errors } =
    useNewUserModal({ open, addNewUser });

  return (
    <BasicModal
      title={"New user"}
      subTitle={"Fill out inputs and hit submit button. "}
      open={open}
      onClose={onClose}
      content={getContent()}
      validate={handleSubmit(addUser)}
    ></BasicModal>
  );
};
