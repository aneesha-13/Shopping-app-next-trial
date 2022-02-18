import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Link,
} from '@material-ui/core';
// import {Form,Button} from 'react-bootstrap';
import NextLink from "next/link";
// import Link from 'next/link';
import axios from "axios";
import { useState } from "react";
import useStyles from '../utils/styles';
function login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const submitHandler= async (e)=>{
        e.preventDefault();
        try{
            const{data}=await axios.post('/api/users/login',{email,password});
            alert('successfully logged in');
        }
        catch(err){
            alert(err.response.data? err.response.data.message : err.message);
        }
    }
    const classes = useStyles();
    return (
        <div >
        <form className={classes.form} onSubmit={submitHandler}>
    <Typography component="h5" variant="h5">
      Login
    </Typography>
    <List>
      <ListItem>
        <TextField
          variant="outlined"
          fullWidth
          id="email"
          label="Email"
          inputProps={{ type: 'email' }}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
      </ListItem>
      <ListItem>
        <TextField
          variant="outlined"
          fullWidth
          id="password"
          label="Password"
          inputProps={{ type: 'password' }}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
      </ListItem>
      <ListItem>
        <Button variant="contained" type="submit" fullWidth color="primary">
          Login
        </Button>
      </ListItem>
      <ListItem>
        Don't have an account? &nbsp;
        <NextLink href="/register" passHref>
          <Link>Register</Link>
        </NextLink>
      </ListItem>
    </List>
  </form>
    </div>
    )

}
export default login;
