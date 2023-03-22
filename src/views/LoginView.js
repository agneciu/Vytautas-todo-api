import React from "react";
import { Heading } from "../components/Heading";
import { Box } from "@mui/system";
import { Button, Divider, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/registerUser";

function LoginView() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Heading title="Login or Register" />
      <form method="">
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField label="E-mail" />
          <TextField label="Password" />

          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>

      <Divider sx={{ my: 6 }}></Divider>

      <form
        onSubmit={handleSubmit((formData) => {
          if (formData.password !== formData.passwordRepeat) {
            return;
          }
          console.log(formData);

          registerUser({
            email: formData.email,
            password: formData.password,
          }).catch(console.error)
        })}
      >
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField label="E-mail" {...register("email")} />
          <TextField label="Password" {...register("password")} />
          <TextField
            label="Password (repeat)"
            {...register("passwordRepeat")}
          />

          <Button variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </form>
    </>
  );
}

export default LoginView;
