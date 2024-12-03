import "../css/techTools.css"
// import { motion } from "motion/react"
// import { useInView } from "motion/react"
// import { useRef } from "react"

function TechTools() {

        const tools = [
            {
                img: "./html.svg",
                description: "HTML",
            },
            {
                img: "./css.svg",
                description: "CSS",
            },
            {
                img: "./js.svg",
                description: "JS",
            },
            {
                img: "./react.svg",
                description: "REACT",
            },
            {
                img: "./figma.svg",
                description: "FIGMA",
            },
            {
                img: "./git.svg",
                description: "GIT",
            },
        ]
        // const ref = useRef(null)
        // const isInView = useInView(ref, { once: true })
    
    return(
        <>
            <div className="container">
                <div className="techTools"
                // ref={ref}
                // initial={{y: 150}}
                // animate={isInView ? {y: 0} : {}}
                // transition={{ duration: 0.8, ease: "easeOut" }} 
                >
                    <div className="text">
                        <h3 className="toolsh3">Tech tools</h3>
                        <h1 className="toolsh1">I can work with:</h1>
                    </div>
                    
                    <div className="tools">
                        {tools.map((tool, index)=> (
                            <div key={index}>
                                    <div className="toolItem">
                                        <div className="toolItemPhoto">
                                            <img src={tool.img} alt="" className="itemImage" />
                                        </div>
                                        <div className="description">
                                            <p>{tool.description}</p>
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechTools