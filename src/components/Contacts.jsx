import "../css/contacts.css"
function Contacts() {

    return(
        <>
            <div className="container">
                <div className="worksPart">
                    <div className="textContacts">
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
                        <div className="socialMedia">
                            <a href="https://t.me/nurtulbek"><img src="../telegram.svg" alt="" className="socialItem" /></a>
                            <a href="https://www.instagram.com/nurtulbek/profilecard/?igsh=MXU5ZW5weDhqNmpzZw=="><img src="../instagram.svg" alt="" className="socialItem" /></a>
                            <a href="https://github.com/Nurtulbukbek"><img src="../github.svg" alt="" className="socialItem" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts
