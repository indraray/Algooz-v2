import { useNavigate } from 'react-router-dom';
import './DemoAlgo.css'

function DemoAlgo() {
   const navigate = useNavigate();

   const demoAlgorithms = ()=>{
      navigate('/contact')
   }

   return (
      <>
         <div className='overall-div-div'>

            <div class="parent-demo-algorithm">
               <div class="div1-demo">
                  <p class="dive-into">
                     Dive Into
                  </p>
                  <p className='dive-description'>Making your learning Fun</p>
               </div>
               <div class="div2-demo"> <div className="explore">
                  <button onClick={demoAlgorithms} className="explore-button">Explore </button></div>
                  </div>
               <div class="div3-demo"> </div>
               <div class="div4-demo"> </div>
            </div>
         </div>
      </>
   );
}
export default DemoAlgo;