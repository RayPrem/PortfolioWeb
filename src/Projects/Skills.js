import React from 'react'
import { NavLink } from 'react-router-dom'
//import { skill } from './Data'

const Skills = () => {
    return (
        <>
           <section className="skills" id="skills">
        <div className="max-width" style={{background:"Black"}}>
            <h2 className="title" style={{color:"crimson", fontweight:" 900"}}>My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text" style={{color:"crimson" ,font:'25px'}}>My creative skills & experiences.</div>
                    <p></p>
                    <NavLink to="#"></NavLink>
                </div>
               
                    <div className="column right">
                   
                    <div className="bars">
                    <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                            </div>
                           
                            <div className='line html '></div>
                    </div> 
                    <div className="bars">
                    <div className="info">
                            <span>CSS</span>
                            <span>70%</span>
                            </div>
                           
                            <div className='line html '></div>
                    </div>
                    <div className="bars">
                    <div className="info">
                            <span>React JS</span>
                            <span>90%</span>
                            </div>
                           
                            <div className='line html '></div>
                            </div>
                    <div className="bars">
                    <div className="info">
                            <span>Python(Django)</span>
                            <span>80%</span>
                            </div>
                           
                            <div className='line dj '></div>
                    </div>
                    <div className="bars">
                    <div className="info">
                            <span>React Native</span>
                            <span>90%</span>
                            </div>
                           
                            <div className='line html '></div>
                   
                    </div>
                    <div className="bars">
                    <div className="info">
                            <span>FireBase</span>
                            <span>85%</span>
                            </div>
                           
                            <div className='line fb '></div>
                    </div>
                    <div className="bars">
                    <div className="info">
                            <span>MySQL</span>
                            <span>65%</span>
                            </div>
                           
                            <div className='line mysql '></div>
                    </div>
                    <div className="bars">
                    <div className="info">
                            <span>Digital Marketing</span>
                            <span>70%</span>
                            </div>
                           
                            <div className='line dm '></div>
                    </div>
                    <div className="bars">
                    <div className="info">
                            <span>Python(Tkinter)</span>
                            <span>75%</span>
                            </div>
                           
                            <div className='line tk'></div>
                    </div>
                    <div className="bars">
                    <div className="info">
                            <span>JAVA</span>
                            <span>60%</span>
                            </div>
                           
                            <div className='line jv '></div>
                    </div>
                    <div className="bars">
                    <div className="info">
                            <span>MangoDB</span>
                            <span>80%</span>
                            </div>
                           
                            <div className='line md '></div>
                    </div>
                    <div className="bars">
                    <div className="info">
                            <span>System Administration</span>
                            <span>90%</span>
                            </div>
                           
                            <div className='line html'> </div>
                    </div>
                
               
                
                  
                    
                    
                    
                    
                    
                </div>
            </div>
        </div>
    </section> 
        </>
    )
}

export default Skills
