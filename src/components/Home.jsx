import React, { useRef } from 'react';
import {animate, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight , BsChevronDown} from "react-icons/bs"
import me from '../assets/logo.png'

function Home() {


    const clientCount  = useRef(null);
    const projectCount  = useRef(null);

    const animationClientCount = ()=>{
        animate(0,100,{
            duration : 1,
            onUpdate:(v)=>(clientCount.current.textContent = v.toFixed()),
        } )
    }
    const animationProjectCount = ()=>{
        animate(0,20,{
            duration : 1,
            onUpdate:(v)=>(projectCount
                .current.textContent = v.toFixed()),
        } )
    }

    const animations = {
        h1:{
            initial : {
                x : "-100%",
                opacity : 0,
            } ,
            whileInView : {
                x : "0",
                opacity : 1,
            }
        },
        button:{
            initial : {
                y : "-100%",
                opacity : 0,
            } ,
            whileInView : {
                y : "0",
                opacity : 1,
            }
        }
    }
    
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1} >
                    Hi, I Am <br /> Prince Sharma 
                </motion.h1>

                <Typewriter 
                    options={{
                        strings : ['A Developer' , 'A Designer' , 'A Video Editor'],
                        autoStart : true,
                        loop : true,
                        wrapperClassName : "typewriterpara",
                        cursor: "",
                    }}
                /> 

            
                
            <div>
                <a href='mailto:prince12845sharma@gmail.com'> Hire Me </a>
                <a href='#work'> Projects <BsArrowUpRight /> </a>
            </div>
            
            <article>
                <p>
                    +<motion.span 
                    whileInView={animationClientCount}
                    ref={clientCount}>  </motion.span>
                </p>
                <span>Clients WorldWide</span>
            </article>

            <aside>
            <article>
                <p>
                    +<motion.span 
                    whileInView={animationProjectCount}
                    ref={projectCount}>  </motion.span>
                </p>
                <span>Projects Done</span>
            </article>
            <article data-special>
                <p>
                    Contact
                </p>
                <span>prince12845sharma@gmail.com</span>
            </article>
            </aside>
        </div>  
        </section>

        <section>
            <img src={me} alt='Prince' />
        </section>
        <a href='#footer'>
            <BsChevronDown />
        </a>
    </div>
  )
}

export default Home