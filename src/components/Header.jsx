import Nav from './Nav';
import "./styles.css"
import Banner from './Banner';
import headerMan from '../assets/human.png';
import top from "../assets/topImg.png";
import center from "../assets/centerImg.png";
import bottom from "../assets/bottomImg.png";
import Amanda from "../assets/headshot1.jpeg";
import William from "../assets/headshot2.jpeg";
import Saepul from "../assets/headshot3.jpeg";


const Header  = () => {
    return (
        <div className="Header">
        <Nav />
        <Banner />

        
        </div>
    )
}

export default Header;