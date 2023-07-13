import "./EditArea.css";
import picture from "./images.jpg";

function EditArea(){
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 rounded" id="display">
                    <img src={picture} className="rounded-circle"></img><br></br><br></br>
                    <p>Username</p><br></br><br></br>
                    <a href="https://github.com/YingLiuM">Link to Github</a><br></br><br></br>
                    <a href="https://www.linkedin.com/in/ying-liu-me/">Link to Linkedin</a><br></br><br></br>

                </div>
                <div className="col-lg-9 " id="right">

                <form>
                    <div className="rounded" id="edit">
                    Username:<br></br><input type="text" id="username"></input><br></br><br></br>
                    Email:<br></br><input type="email" id="email"></input><br></br><br></br>
                    Password:<br></br><input type="password" id="password"></input><br></br><br></br>
                    About Me:<br></br><textarea rows={10} cols={70} id="about"></textarea><br></br><br></br>
                    </div>
                    
                    
                </form>
                <input type="submit" value={"Save Change"} id="save" className="rounded-pill"></input>
                    <input type="submit" value={"Delete Account"} id="delete" className="rounded-pill"></input>
                </div>

            </div>
        </div>
        
        </>
    )
}

export default EditArea;