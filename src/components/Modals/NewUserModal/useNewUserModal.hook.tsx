import { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { newUserModalStyle } from "./NewUserModal.style";

export const useNewUserModal = ({ open, addNewUser }) => {
  const defaultInputValues = {
    email: "",
    phone: "",
    userId: "",
  };

  const [values, setValues] = useState(defaultInputValues);
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const schema = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Email is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(phoneRegex, "Phone number is invalid"),
    userId: yup
      .string()
      .required()
      .min(6, "User ID must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (open) {
      setValues(defaultInputValues);
    }
  }, [open]);

  const addUser = (data) => {
    addNewUser(data);
  };

  const handleChange = (value) => {
    setValues(value);
  };

  const getContent = () => {
    return (
      <Box sx={newUserModalStyle.inputFields}>
        <TextField
          placeholder="E-mail"
          name="email"
          label="Email"
          required
          {...register("email")}
          error={errors.email ? true : false}
          helperText={errors.email ? errors.email.message : ""}
          onChange={(event) =>
            handleChange({ ...values, email: event.target.value })
          }
          value={values.email}
        />
        <TextField
          placeholder="Phone number"
          name="phone"
          label="Phone number"
          {...register("phone")}
          error={errors.phone ? true : false}
          helperText={errors.phone ? errors.phone.message : ""}
          onChange={(event) =>
            handleChange({ ...values, phone: event.target.value })
          }
          value={values.phone}
        />
        <TextField
          placeholder="User ID"
          name="userId"
          label="User ID"
          required
          {...register("userId")}
          error={errors.userId ? true : false}
          helperText={errors.userId ? errors.userId.message : ""}
          onChange={(event) =>
            handleChange({ ...values, userId: event.target.value })
          }
          value={values.userId}
        />
      </Box>
    );
  };

  return { getContent, addUser, register, handleSubmit, errors };
};
