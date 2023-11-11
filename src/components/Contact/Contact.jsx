import "./contact.css"
import github from "../../assets/github_original_wordmark_logo_icon_146506.ico"
import leetcode from "../../assets/leetcode_button_icon_151892.ico"
import twitter from "../../assets/twitter_x_new_logo_x_icon_256077.ico"
import linkedIn from "../../assets/in_linked_linkedin_media_social_icon_124259.ico"
import insta from "../../assets/instagram.png"

const Contact = () => {
    return (
        <section id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any collaboration ideas</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name"/>
                <input type="text" className="email" placeholder="Your Email Address"/>
                <textarea className="msg" name="message" rows="5" placeholder="Message....."></textarea>
                <button type="submit" value={'Send'} className="submitBtn">Submit</button>
                <div className="links">
                    <img src={github} alt="github" className="link" />
                    <img src={leetcode} alt="leetcode" className="link" />
                    <img src={twitter} alt="twitter" className="link" />
                    <img src={linkedIn} alt="linkedIn" className="link" />
                    <img src={insta} alt="insta" className="link" />
                </div>
            </form>
        </section>
    )
}

export default Contact