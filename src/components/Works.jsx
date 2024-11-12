import "../css/works.css"
function Works() {

    return(
        <>
            <div className="container">
                <div className="worksPart">
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
                </div>
            </div>
        </>
    )
}

export default Works