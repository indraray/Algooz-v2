import { useNavigate } from "react-router-dom";
import DemoAlgo from "../components/DemoAlgo/DemoAlgo";
import PopText from "../components/PopText/PopText";
import StyledDescription from "../components/StyledDesc/StyledDescription";

import "./Home.css"
function Home() {
const navigate = useNavigate();

   const letsChat = ()=>{
      navigate('/contact')
   }

   return (
      <>
         <PopText />
         <StyledDescription />
         <DemoAlgo />
         <div className="lets-chat">
            <div class="parent-lets-chat">
               <div class="div1-lets-chat"><p>Let's Chat</p></div>
               <div class="div2-lets-chat">
                  Want to grab a virtual coffee and talk about your project?</div>
               <div className="div3-lets-chat">
                  <button className="image-button" onClick={letsChat}>
                     <div className="image-class"></div>
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
export default Home;