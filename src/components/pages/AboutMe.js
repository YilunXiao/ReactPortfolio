
const AboutMe = () => {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Biography</h1>
                <div >
                    <div className="card" style={{width: "18rem", float: "right"}}>
                        <img className="card-img-top" src="" alt="profile pic"></img>
                        <div className="card-body">
                            <h5 className="card-title">Profile</h5>
                            <div className="card-text">
                                <p>DOB: Aug 22, 1996</p>
                                <p>Address: Great Neck, NY</p>
                            </div>
                        </div>
                    </div>
                    <div>Aspiring web developer. Currently doing free-lance work. </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;