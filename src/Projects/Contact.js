import React from 'react'
import {FaFacebookF,FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'
const Contact = () => {
  return (
    <>
     <section class="contact" id="contact">
        <div class="max-width"  style={{color:"crimson"}}>
            <h2 class="title" style={{ fontWeight:900}}>Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text" style={{fontWeight:900}}>Get in Touch</div>
                    <p>If You Want me to Design and develop Web Application and Mobile Application</p>
                    <p>Hire ME</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Prem Tharu</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Kapilvastu, Nepal</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">Rayprem987@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form action="#">
                        <div class="fields">
                            <div class="field name">
                            <input type="text" placeholder="Name" required/>
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" required/>
                            </div>
                            </div>
                          <div class="field">
                            <input type="text" placeholder="Subject" required/>
                          </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
                        </div>
                      
                    </form>
                </div>
            </div>
        </div>
        <ul className="contactCircles">
        <a href="https://www.linkedin.com/in/prem-prasad-tharu-54a172186/">
                  <li>
                  <FaLinkedin className="headerIcon" />
                  </li></a>
                  <a href="https://github.com/RayPrem">
                  <li>
                    <FaGithub className="headerIcon" />
                  </li></a>
                  <a href="https://www.facebook.com/Ray.prem.31/">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li></a>
                  <a href="https://www.instagram.com/premdangoriya987/">

                  <li>
                    <FaInstagram className="headerIcon" />
                  </li></a>
              </ul>
    </section> 
    
    </>
  )
}

export default Contact
