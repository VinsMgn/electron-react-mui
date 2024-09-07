import { BasicCard } from "../../components/BasicCard/BasicCard";
import { useAuthentication } from "./useAuthentication.hook";
import { GridWrapper } from "../../components/GridWrapper/GridWrapper";

export const Authentication = () => {
  const { getHeader, getContent } = useAuthentication();

  return (
    <GridWrapper>
      <BasicCard content={getContent()} header={getHeader()} />
    </GridWrapper>
  );
};
