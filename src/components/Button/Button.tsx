import Button from "@mui/material/Button";

export const CommonButton = ({
  children,
  //   color,
  variant,
  //   disabled,
  //   size,
  sx,
}) => {
  return (
    <Button
      //   color={color}
      variant={variant}
      //   disabled={disabled}
      //   size={size}
      sx={sx}
    >
      {children}
    </Button>
  );
};
