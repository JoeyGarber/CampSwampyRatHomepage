import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <Navbar.Brand>
        <Link style={{ textDecoration: 'none' }} to='/'>Leaf Scouts</Link>
      </Navbar.Brand>
    </Navbar>
  )
  
}