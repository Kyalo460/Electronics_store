import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='logo'>
        <h3><Link to='/'>Electronics Store</Link></h3>
      </div>
      <div className='nav-container'>
        <ul className='nav'>
          <li><Link to='/Profile'>Profile</Link></li>
          <li><Link to='/Cart'>Cart</Link></li>
          <li><Link to='/Sell'>Sell</Link></li>
        </ul>
      </div>
    </div>
  )
}