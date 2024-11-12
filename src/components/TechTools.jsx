import "../css/techTools.css"

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

    return(
        <>
            <div className="container">
                <div className="techTools">
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