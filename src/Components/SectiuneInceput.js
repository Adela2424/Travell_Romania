import React from 'react';
import './SectiuneInceput.scss';


function SectiuneInceput() {
    return (
        <div>
            <div className="background_fundal" style={{ backgroundImage:  "  linear-gradient(135deg, rgba(0, 0, 0, 0.363) 30%, #115E6780 90%),  url('/images/casa_poporului1.jpg') " }}>
              <div className="content">
                <div className="text">
                  <div className="titlu">
                     <div className="titlu_bara">
                        <hr className="hr_titlu"/>
                        <h1 > Descoperă  </h1>
                        <h1> România </h1>
                        <hr />
                     </div>
                  </div>
                   <p className="content_p" >  Descoperă România împreună cu noi, Vezi cele mai frumoase și liniștite locuri din Europa. </p>
              </div>
           </div>
       </div>
         
     </div>
    )
}

export default SectiuneInceput;
