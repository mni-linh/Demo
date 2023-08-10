import React, {Component} from 'react'
import * as emailjs from "emailjs-com";


export class Contact extends Component{
// const Contact = () => {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "gmail",
                "template_x2zjovj",
                ".contact_form_class",
                "user_VLc5sALOU4wJo0Fnd4jJU"
            )
            .then()
            .catch();
        this.setState({
            name: "",
            phone: "",
            email: "",
            message: "",
        });
    };
    render(){
        return (
            <div className="footer-container">
                <div className="footer-center contact-left">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{color:'#3f3e3e'}}>
                        <span>
                            <i className="fas fa-map-marker-alt"></i>
                        </span> &nbsp;&nbsp;&nbsp;
                        280, An Duong Vuong, Ward 4, District 5, Ho Chi Minh City
                    </div>
                    <br/>
                    <br/>
                    <div style={{color:'#3f3e3e'}}>
                        <span> 
                            <i className="fas fa-phone"></i>
                        </span> &nbsp;&nbsp;&nbsp;
                        +84 123 456 789
                    </div>
                    <br/>
                    <br/>
                    <div style={{color: '#3f3e3e'}}>
                        <span>
                            <i className="fas fa-envelope"></i>
                        </span> &nbsp;&nbsp;&nbsp;
                        coffelake.webtech@gmail.com
                    </div>
                    <br/>
                    <br/>
                    <div style={{color:'#3f3e3e'}}>
                        <span>
                           <i className="fas fa-clock"></i>
                        </span> &nbsp;&nbsp;&nbsp;
                        Mon - Sun 8:00 AM to 9:00 PM
                    </div>
                    <br />
                    <br />
                    <div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.facebook.com/HCMUE.VN/" className="btn-social"><i className='bx bxl-facebook'></i></a>
                        <a href="https://twitter.com/reactjs" className="btn-social"><i className='bx bxl-twitter' ></i></a>
                        <a href="https://www.instagram.com/reactjsofficial/" className="btn-social"><i className='bx bxl-instagram' ></i></a>
                        <a href="https://www.pinterest.com/mni_linh28/_saved/" className="btn-social"><i className='bx bxl-pinterest-alt' ></i></a>
                    </div>
                </div>
                
                <div className="footer-center contact-right">
                    <div className="contact-form">
                        <h2 style={{fontSize: 40, marginBottom: 10, color: '#243a6f', fontFamily:'"Playfair Display", serif'}}>Contact Us</h2>
                        <form
                            onSubmit={this.handleSubmit.bind(this)}
                            className="contact_form_class"
                        >
                            <div>
                                <label>Name: </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Type your name here..."
                                    value={this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                    className="name underline"
                                ></input>
                            </div>
                            <p></p>
                            <label> Phone: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Type your phone here..."
                                value={this.state.phone}
                                onChange={this.handleChange.bind(this)}
                                className="phone underline"
                                pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
                                >
                            </input>
                            <p></p>

                            <label>Email: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Type your email here..."
                                value={this.state.email}
                                onChange={this.handleChange.bind(this)}
                                className="email underline"
                                pattern="[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}"
                            ></input>
                            <p></p>
                            <label>Message: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br/>
                            <br/>
                            <input
                                type="text"
                                id="message"
                                name="message"
                                placeholder="Type your message here..."
                                value={this.state.message}
                                onChange={this.handleChange.bind(this)}
                                className="message underline"
                            ></input>
                            <p></p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                type="submit"
                                value="Send"
                                className="submit nounderline"
                            ></input>
                        </form>
                    </div>
               </div>

            </div>            
        );
    }
}

export default Contact
