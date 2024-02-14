import React from 'react'
import './MarqueeCard.css'
const Marquee = () => {
  return (
    <div className='marquee-container'>
      <div id="grid-container">
     <div class="grid">
          <div class="row forward">
               <div class="box fill1"></div>
               <div class="box fill2 "></div>
               <div class="box fill3"></div>
               <div class="box fill4 in-viewport"></div>
               {/* <!--duplicate the row to scroll infinitely from center to center--> */}
               <div class="box fill1"></div>
               <div class="box fill2"></div>
               <div class="box fill3"></div>
               <div class="box fill4"></div>
          </div>
          <div class="row backward">

               <div class="box fill1"></div>
               <div class="box fill2"></div>
               <div class="box fill3"></div>
               <div class="box fill4"></div>
               {/* <!--duplicate the row to scroll infinitely--> */}
               <div class="box fill1 "></div>
               <div class="box fill2"></div>
               <div class="box fill3"></div>
               <div class="box fill4"></div>

          </div>

     </div>
</div>
    </div>
  )
}

export default Marquee
