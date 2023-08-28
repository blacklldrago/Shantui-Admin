import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Copyright from "../../components/Copyright";
import { saveToken } from "../../utils/token";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { axiosLogin } from "../../utils/axiosRequest";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "../../components/Alert";
const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [success, setSuccess] = React.useState(false);
  const [errorm, setErrorm] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const vertical = "bottom";
  const horizontal = "right";

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = {
      userName: event.target["userName"].value,
      password: event.target["password"].value,
    };

    try {
      const { data } = await axiosLogin.post("/Account/Login", user);
      if (data.data == " UserName or Password  is incorrect") {
        setMessage(data.data);
        setErrorm(true);
      } else {
        setSuccess(true);
        saveToken(data.data, event.target["remember"].checked);
        navigate("/panel")
      }
    } catch (e) {
      setErrorm(true);
    }
  };
  console.log(message);

  // Shahrom21212
  //  123Password
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={success}
            autoHideDuration={6000}
            onClose={() => setSuccess(false)}
          >
            <Alert
              onClose={() => setSuccess(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              Loged successfully
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={errorm}
            autoHideDuration={6000}
            onClose={() => setErrorm(false)}
          >
            <Alert
              onClose={() => setErrorm(false)}
              severity="error"
              sx={{ width: "100%" }}
            >
              {message}
            </Alert>
          </Snackbar>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "cornsilk" }}>
              <img height={30} src={logo} alt="" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Username"
                name="userName"
                autoComplete="userName"
                color="warning"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                color="warning"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={
                  <Checkbox value="remember" name="remember" color="warning" />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                color="warning"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
