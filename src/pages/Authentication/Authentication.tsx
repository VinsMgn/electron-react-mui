import { BasicCard } from "../../components/BasicCard/BasicCard";
import { useAuthentication } from "./useAuthentication.hook";
import { GridWrapper } from "../../components/GridWrapper/GridWrapper";
import { NewUserModal } from "../../components/Modals/NewUserModal/NewUserModal";

export const Authentication = () => {
  const { getHeader, getContent, open, onClose, addNewUser } =
    useAuthentication();

  return (
    <GridWrapper>
      <BasicCard content={getContent()} header={getHeader()} />
      <NewUserModal open={open} onClose={onClose} addNewUser={addNewUser} />
    </GridWrapper>
  );
};
