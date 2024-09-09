import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { modalStyles } from "./style";
import { CommonButton } from "../Button/Button";

export const BasicModal = ({
  open,
  onClose,
  title,
  subTitle,
  content,
  validate,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {subTitle}
        </Typography>
        {content}
        <Box sx={modalStyles.buttons}>
          <CommonButton
            validate={validate}
            variant="contained"
            onClick={validate}
            size="large"
          >
            Submit
          </CommonButton>
          <CommonButton variant="contained" onClick={onClose}>
            Cancel
          </CommonButton>
        </Box>
      </Box>
    </Modal>
  );
};
