import "../css/works.css"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
function Works() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return(
        <>
            <div className="container">
                <div className="worksPart" ref={ref}>
                    <motion.div className="textWorks" 
                    ref={ref}
                    initial={{y: 100}}
                    animate={isInView ? {y: 0} : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                        <h3 className="worksh3">
                            Works
                        </h3>
                        <h1 className="worksh1">
                            My done projects
                        </h1>
                    </motion.div>

                    <div className="banners">
                        <motion.a href="https://pasabahce.netlify.app/"
                        ref={ref}
                        initial={{y: 100}}
                        animate={isInView ? {y: 0} : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}>
                            <img src="/pasabahce.svg" alt="" className="pasabahce" />
                        </motion.a>

                        <motion.a href="https://nasa-space-app-blush.vercel.app/"
                        ref={ref}
                        initial={{y: 100}}
                        animate={isInView ? {y: 0} : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}>
                            <img src="/hackaton.svg" alt="" className="hackhaton" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works