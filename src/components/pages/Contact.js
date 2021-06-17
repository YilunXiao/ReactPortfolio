
const Contact = () => {

    return (
        <div>
        <form className="m-5">
            <div className="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"></input>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Details</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
        </div>
    )
}

export default Contact;