import "../css/whatIDo.css"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

function WhatIDo() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return(
        <>
            <div className="container">
                <div className="whatIDo">
                    <motion.div className="text"
                    ref={ref}
                    initial={{y: 50}}
                    animate={isInView ? {y: 0} : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} >
                            <h3 className="whatIDoh3">?</h3>
                            <h1 className="whatIDoh1">What I do:</h1>
                    </motion.div>

                    <div className="techs">
                        <div className="webDev techItem"
                        ref={ref}
                        initial={{y: 50}}
                        animate={isInView ? {y: 0} : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}>
                            <div className="webDevh1 techItemh1">
                                <h1> Web-development</h1>
                            </div>
                            <div className="webDevh3 techItemh3">
                                <h3>
                                    I bring websites to life by translating design concepts into interactive, responsive, 
                                    and functional experiences. Using technologies like HTML, CSS, JavaScript, and modern frameworks such as React, 
                                    I ensure your site looks great, performs flawlessly, and runs smoothly across all devices.
                                </h3>
                            </div>
                        </div>

                        <div className="ux techItem">
                            <div className="uxh1 techItemh1">
                                <h1>User interface design</h1>
                            </div>
                            <div className="uxh3 techItemh3">
                                <h3>
                                    I work to bridge the gap between design and functionality, ensuring that each interaction feels intuitive, smooth, and visually 
                                    compelling. By merging thoughtful design with responsive coding, I create interfaces that are as beautiful as they are easy to use, 
                                    no matter the device or screen size.
                                </h3>
                            </div>
                        </div>

                        <div className="webDes techItem">
                            <div className="webDesh1 techItemh1">
                                <h1>Web-design</h1>
                            </div>
                            <div className="webDesh3 techItemh3">
                                <h3>
                                    A successful web design balances aesthetics with functionality. As a front-end developer,
                                    my goal is to implement designs that are visually captivating yet simple to navigate. I work closely with
                                    designers to ensure the site not only looks great but also works flawlessly across all devices and platforms.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatIDo