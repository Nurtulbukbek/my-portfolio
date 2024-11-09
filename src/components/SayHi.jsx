import "../css/sayHi.css"

function Sayhi() {


    return(
        <>
            <div className="container">
                <div className="sayHi">
                    <h1 className="hiText">
                        Hi! I’m a front-end
                        developer
                    </h1>
                    <div className="photo">
                        <img className="myPhoto" src="/public/me.png" alt="me" />
                        <div className="yellowSpace"></div>
                    </div>
                    <button className="letsWork">Let's work together!</button>
                </div>
            </div>
        </>
    )
}

export default Sayhi