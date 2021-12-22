import React, { useEffect } from "react";
import MyNavbar from "../components/Navbar";
import "../style/About.css";
import img from "../routes/image.jpg";
const About = () => {
  useEffect(() => {
    document.title = "Calculator App";
  }, []);
  return (
    <>
      <MyNavbar></MyNavbar>

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
      <section id="header">
        <nav class="navbar navbar-light"></nav>
      </section>
      <section id="welcome">
        <div class="container">
          <div class="welcome text-center">
            <h1>About App</h1>
            <p>Online Calculator</p>
            <p>
              This app provides a facility to do calculation even without having
              a calculator. It is a simple yet easy to use calculator. You can
              also view your recent calculations by navigating to Recent page.
            </p>
          </div>
        </div>
      </section>
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center-center">
              <img src={img} alt="hard-work" class=" img-fluid" />
            </div>
            <div class="col-md-6 text-center-justify">
              <h3>Knowledge, Skills and Hard Work </h3>
              <p>
                Hard work is the most important key to success. Achievements
                without hard work are impossible. An idle person can never gain
                anything if they sit and wait for a better opportunity to come.
                The person who is working hard is able to gain success and
                happiness in life.
              </p>
              <h2>Technologies Used</h2>
              <p>
                This app is developed in ReactJS​, I have used Redux for state
                management. In redux I am using reducers that take previuos
                state as a parameter and returns, after performing some
                computations, the new updated state.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h3>Features</h3>
              <h4>Simple Calculation</h4>
              <p>Simple and easy to use app.</p>
            </div>
            <div class="col-md-4">
              <h4>Support input from keyboard</h4>
              <p>You can also use keyboard to enter the expression from.</p>
            </div>
            <div class="col-md-4">
              <h4>View recents</h4>
              <p>Store your recent calculations.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <p>© 2021 Manahil Ameer - All Rights Reserved</p>
            </div>

            <div class="col-md-3">
              <h4>Quick Contact</h4>
              <p>
                <i class="fa fa-phone-square">+92 3374961966</i>
              </p>

              <p>
                <i class="city">UET,Lahore</i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
