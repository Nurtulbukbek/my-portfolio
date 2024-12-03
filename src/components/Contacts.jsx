import "../css/contacts.css"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

function Contacts() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return(
        <>
            <div className="container">
                <motion.div className="worksPart"
                ref={ref}
                initial={{y: 100}}
                animate={isInView ? {y: 0} : {}}
                transition={{ duration: 0.8, ease: "easeOut" }} >
                    <mdiv className="textContacts">
                        <h1 className="texth1">
                            Have a <span className="yellowText">questions?</span>
                        </h1>
                        <h1 className="texth2">
                            You can <span className="yellowText">email</span> me at:
                        </h1>
                        <h1 className="texth1">
                            owezresul0@gmail.com
                        </h1>
                        <h1 className="texth2">
                            <span className="yellowText">or</span>
                        </h1>
                        <motion.div className="socialMedia" >
                            <a href="https://t.me/nurtulbek"><img src="../telegram.svg" alt="" className="socialItem" /></a>
                            <a href="https://www.instagram.com/nurtulbek/profilecard/?igsh=MXU5ZW5weDhqNmpzZw=="><img src="../instagram.svg" alt="" className="socialItem" /></a>
                            <a href="https://github.com/Nurtulbukbek"><img src="../github.svg" alt="" className="socialItem" /></a>
                        </motion.div>
                    </mdiv>
                </motion.div>
            </div>
        </>
    )
}

export default Contacts
