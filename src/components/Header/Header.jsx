import Logo from '../../images/logo.jpg'
import { LogoHeader } from './Header.styled';
export const Header = () => {
    return (
      <header>
        <a><LogoHeader src={Logo} alt='logo'/>
        </a>
      </header>
    );
  };