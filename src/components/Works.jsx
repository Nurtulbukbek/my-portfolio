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
                <motion.div className="worksPart"
                ref={ref}
                initial={{y: 150}}
                animate={isInView ? {y: 0} : {}}
                transition={{ duration: 0.8, ease: "easeOut" }} >
                    <div className="textWorks">
                        <h3 className="worksh3">
                            Works
                        </h3>
                        <h1 className="worksh1">
                            My done projects
                        </h1>
                    </div>
                    <div className="banners">
                        <a href="https://pasabahce.netlify.app/"><img src="/pasabahce.svg" alt="" className="pasabahce" /></a>
                        <a href="https://nasa-space-app-blush.vercel.app/"><img src="/hackaton.svg" alt="" className="hackhaton" /></a>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Works