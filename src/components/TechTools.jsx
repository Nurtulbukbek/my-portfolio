import "../css/techTools.css"

function TechTools() {


    return(
        <>
            <div className="container">
                <div className="techTools">
                    <div className="text">
                        <h3 className="toolsh3">Tech tools</h3>
                        <h1 className="toolsh1">I can work with:</h1>
                    </div>
                    <div className="tools">
                        <div className="toolItem">
                            <img src="./html.png" alt="" className="itemImage" />
                            <p>HTML</p>
                        </div>
                        <div className="toolItem">
                            <img src="./css.png" alt="" className="itemImage" />
                            <p>CSS</p>
                        </div>
                        <div className="toolItem">
                            <img src="./javascript.png" alt="" className="itemImage" />
                            <p>JS</p>
                        </div>
                        <div className="toolItem">
                            <img src="./react.png" alt="" className="itemImage" />
                            <p>REACT</p>
                        </div>
                        <div className="toolItem">
                            <img src="./figma.png" alt="" className="itemImage" />
                            <p>FIGMA</p>
                        </div>  
                        <div className="toolItem">
                            <img src="./git.png" alt="" className="itemImage" />
                            <p>GIT</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechTools