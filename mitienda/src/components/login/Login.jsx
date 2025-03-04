import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useEffect, useState } from "react";
import "./Login.css";

function Login(props) {
  const userDataFromStorage =
    JSON.parse(localStorage.getItem("userData")) || {};
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(userDataFromStorage);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const { signIn } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function collectUserData(event) {
    event.preventDefault();
    if (userData.userEmail === "") {
      setEmailError(true);
    }

    if (userData.userName === "") {
      setNameError(true);
    }

    if (userData.userPassword === "") {
      setPasswordError(true);
    }
    signIn();
    handleClose();
  }

  

  return (
    <div className="login-user">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form autoComplete="off" onSubmit={collectUserData}>
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="userName"
              required={true}
              variant="outlined"
              name="userName"
              value={userData.userName}
              onChange={handleChange}
              label="User Name"
              type="text"
              fullWidth
              error={nameError}
            />
            <TextField
              margin="dense"
              id="userEmail"
              required={true}
              variant="outlined"
              name="userEmail"
              value={userData.userEmail}
              onChange={handleChange}
              label="Email Address"
              type="email"
              fullWidth
              error={emailError}
            />
            <TextField
              required={true}
              margin="dense"
              id="userPassword"
              name="userPassword"
              value={userData.userPassword}
              variant="outlined"
              onChange={handleChange}
              label="Password"
              type="password"
              fullWidth
              error={passwordError}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <p onClick={handleClickOpen}>Login</p>
    </div>
  );
}

export default Login;
