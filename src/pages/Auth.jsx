import {Button,Grid,Header,Form,Segment} from 'semantic-ui-react';
import {useMutation} from '@tanstack/react-query';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
const Auth = () => {
  let [guestId,setGuestId] = useState("");
  let handleLogin = async () => {
  let headers={'Authorization':'Bearer '};
  const res=await fetch("https://api.themoviedb.org/3/authentication/guest_session/new",
{headers});
  const data = await res.json();
  setGuestId(data.guest_session_id);
  localStorage.setItem("guest_session_id",data.guest_session_id);
  return data;
  }
  return(<Grid textAlign="center" verticalAlign="middle" style={{height:"100vh"}}><Grid.Column style={{maxWidth:"450px"}}>
    <Header as="h2" color="teal" textAlign="center">Welcome,guest! {guestId}</Header><Form size="large"><Segment stacked><Button color="teal" size="large" fluid onClick={handleLogin}>Login</Button></Segment></Form>
  </Grid.Column></Grid>);
}

export default Auth;