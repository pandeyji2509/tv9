import React from 'react'
import './component.css'
function footer() {
  return (
   <footer class="py-4">
      <div class="container">
        <p class="text-center ">
          <a href="#" class="footer-link ms-2">About Us</a>
          <a href="#" class="footer-link ms-2">Archives</a>
          <a href="#" class="footer-link ms-2">Advertise</a>
          <a href="#" class="footer-link ms-2">Feedback</a>
          <a href="#" class="footer-link ms-2">Disclaimer</a>
          <br className='navvv'/>
          <a href="#" class="footer-link ms-2">Investor</a>
          <a href="#" class="footer-link ms-2">Complaint</a>
          <a href="#" class="footer-link ms-2">Redressal</a>
          <a href="#" class="footer-link ms-2">Careers</a>
          {/* <a href="#" class="footer-link ms-2">Service</a>
          <a href="#" class="footer-link ms-2">Terms</a>
          <a href="#" class="footer-link ms-2">Channel</a>
          <a href="#" class="footer-link ms-2">Distribution</a> */}
        </p>
        <hr/>
        <p class="text-center">© 2023 TV369. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default footer
