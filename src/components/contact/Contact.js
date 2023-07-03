import React from "react";
import "./contact.css";

function Contact({ sectionRef4 }) {
  return (
    <div className="contact__me" ref={sectionRef4}>
      <div className="contact__me__leftpart">
        <div className="contact__me__leftpart__text">
          <h2>Contact Me</h2>
          <h1>
            Keep in Touch <br /> with Me
          </h1>
          <p>
            If you are interested in hiring me, please feel free to contact me.
            I am excited about the possibility of joining a new team and
            contributing my skills as a React developer to your organization.
            You can reach out to me via email at ➡️ or by phone at ➡️. I am
            responsive and will make it a priority to get back to you promptly.
          </p>
        </div>
        <button>Read More</button>
      </div>
      <div className="contact__me__rightpart">
        <div className="col-1">
          <div className="roffer">
            <span>Role : </span>ReactJS Developer
          </div>
          <div className="salary">
            <span>Salary :</span> ******
          </div>
        </div>
        <div className="email">
          <span>Email :</span> divyavats2022@gmail.com
        </div>
        <div className="company">
          <span>Phone :</span> 8340551611
        </div>
        <div className="address">
          <span>Address :</span> Rahul Nagar Khabra, Muzaffarpur, Bihar
        </div>
        <div className="contact__me__btn">
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
