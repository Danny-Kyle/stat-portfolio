import "./works.css"
import portfolio2 from "../../assets/port2.png"
import portfolio3 from "../../assets/port3.png"
import portfolio4 from "../../assets/port4.png"
import portfolio5 from "../../assets/port5.png"
import portfolio6 from "../../assets/port6.png"

const Works = () =>{
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="workDesc">I love giving as much attention as possible to the little details to ensure my work is pixel perfect. I am excited to contribute to the actualisation of business goals and aid in creating a strong online presence with the use of my skills and experience</span>
            <div className="worksImgs">
                <img src={portfolio2} alt="" className="worksImg" />
                <img src={portfolio3} alt="" className="worksImg" />
                <img src={portfolio4} alt="" className="worksImg" />
                <img src={portfolio5} alt="" className="worksImg" />
                <img src={portfolio6} alt="" className="worksImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    )
}

export default Works;