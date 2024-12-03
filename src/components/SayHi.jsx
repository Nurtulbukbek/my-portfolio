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
                <motion.div className="sayHi" 
                ref={ref}
                initial={{y: 150}}
                animate={isInView ? {y: 0} : {}}
                transition={{ duration: 0.8, ease: "easeOut" }} >
                    <h1 className="hiText">
                        Hi! I’m a front-end
                        developer
                    </h1>
                    <div className="photo">
                        <img className="myPhoto" src="./me.svg" alt="smth"/>
                        <div className="yellowSpace"></div>
                    </div>
                    <motion.button className="letsWork" 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }} >
                            Let's work together!</motion.button>
                    </motion.div>
              
            </div>
        </>
    )
}

export default SayHi