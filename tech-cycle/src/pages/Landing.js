import LandingSec from "./LandingSec";
import Device from "./Device";
import Mechanism from "./Mechanism";
import Apply from './Apply'
import Subs from "./Subs";
import Footer from "./Footer";


function Landing() {
  return (
    <div>
    <LandingSec/>
    <Device/>
    <Mechanism varbg={'#f2fff4'}/>
    <Apply/>
    <Subs/>
    <Footer/>
    </div>
    )
}

export default Landing