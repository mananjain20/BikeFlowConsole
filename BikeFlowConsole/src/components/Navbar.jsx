import '../styles/main.css';
import { FaBicycle } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <FaBicycle style={{ fontSize: '20px', marginRight: '8px' }} /> BikeFlow Console
      </div>
      <div className="navbar-live">
        <div className="live-dot"></div>
        Live
      </div>
    </div>
  );
}
