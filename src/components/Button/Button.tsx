import Button from "@mui/material/Button";

export const CommonButton = ({
  children,
  color,
  disabled,
  size,
  sx,
  variant,
  onClick,
}: any) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
