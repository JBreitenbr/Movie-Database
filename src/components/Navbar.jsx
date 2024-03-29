import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return <Menu fixed="top" size="huge">
  <Menu.Item style={{fontSize:"0.9rem"}} as={Link} to="/">Home</Menu.Item>
    <Menu.Item style={{fontSize:"0.9rem"}} as={Link} to="/Movie-Database">Howdy</Menu.Item>
  <Menu.Item style={{fontSize:"0.9rem"}} as={Link} to="/rated">Rated Pages</Menu.Item>
  <Menu.Menu position="right">
    <Menu.Item style={{fontSize:"0.9rem"}} as={Link} to="/auth">Auth</Menu.Item>
  </Menu.Menu>
  </Menu>
}
export default Navbar;