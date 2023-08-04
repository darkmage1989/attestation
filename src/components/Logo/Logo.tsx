import logo from '../../fonts/img/free-png.ru-688.png'
interface LogoProps {
  
}
 
const Logo: React.FunctionComponent<LogoProps> = () => {
  return ( <img style={{height:'150px', width: '400px'}} src={logo} alt="logo" /> );
}
 
export default Logo;