import "./intro.css"
import meforwebsite from "../../img/meforwebsite.png"


const Intro = () => {
    return (
        <div className = "i">
            <div className="i-left">
                <div className = "i-left-wrapper">
                    <h2 className = "i-intro">Hello, my name is </h2>
                    <h2 className = "i-name">audrey</h2>
                    <div className = "i-title">
                        <div className = "i-title-wrapper">
                            <div className = "i-title-item">CS Student</div>
                            <div className = "i-title-item">Skill 1</div>
                            <div className = "i-title-item">Skill 2</div>
                            <div className = "i-title-item">Skill 3</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I'm currently a  junior and am excited to graduate in December 2023
                    </p>
                </div>
                
                

            </div>
            <div className = "i-right">
                <div className="i-bg"></div>
                <image src = {meforwebsite} alt = "me" className="i-img"/>
            </div>
        </div>
        )
}

export default Intro