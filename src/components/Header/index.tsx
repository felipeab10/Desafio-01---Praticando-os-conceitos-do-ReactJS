import './header.css';
import Logo from '/src/assets/Logo.png';

export function Header(){
  return(
    <div className="header">
      <img src={Logo}/>
    </div>
  )
}