import "./about.css"
import Me from "../../img/mewithcomputer.jpg"

const About = () => {
    return (
        <div className = "a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src = {Me} alt = "computer" className="a-img"/>
                </div>

            </div>
            <div className="a-right">
            <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I am from Decatur, IL. I have an interest in many tech related fields as well
                    as artistic and creative interests. I enjoy playing and creating music....
                </p>
                <p className = "a-dec">
                    This is a description of what I stated above.
                </p>
                <div className="a-award">
                    {/* 30:43- :00 Award section and ion got nun */}
                </div>
            </div>
        </div>
    )
}

export default About