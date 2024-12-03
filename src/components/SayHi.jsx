import "../css/sayHi.css"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

function SayHi() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    
    return(
        <>
            <div className="container" ref={ref}>
                <div className="sayHi">
                    <h1 className="hiText">
                        Hi! I’m a front-end
                        developer
                    </h1>
                    <motion.div className="photo"
                    ref={ref}
                    initial={{y: 50}}
                    animate={isInView ? {y: 0} : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} >
                        <img className="myPhoto" src="./me.svg" alt="smth"/>
                        <div className="yellowSpace"></div>
                    </motion.div>
                    <motion.button className="letsWork" 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }} >
                            Let's work together!</motion.button>
                    </div>
              
            </div>
        </>
    )
}

export default SayHi