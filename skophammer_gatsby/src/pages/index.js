import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const headShot = require('../dist/images/forest-headshot.jpg')
const balanceAppScreenshot = require('../dist/images/BalanceAppScreenshot.jpg')
const namakanScreenshot = require('../dist/images/NamakanScreenshot.jpg')
const dinetteScreenshot = require('../dist/images/DinetteScreenshot.jpg')
const picknicScreenshot = require('../dist/images/PicknicScreenshot.jpg')
const wutangScreenshot = require('../dist/images/WutangScreenshot.jpg')

const IndexPage = () => (
  <Layout>
    <SEO title="Jordan Skophammer" />
    <div className="parallax">
        <div className="row">
            <div className="col m3"></div>
            <div className="col m6">
                <div className="container-text">
                    <div className="title-header">
                        <h3><strong>JORDAN SKOPHAMMER</strong></h3>
                        <h4><i>WEB DEVELOPER</i></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="about" className="row" style={{marginBottom: '0px'}}></div>
    <div className="container">
        <div className="row">
            <div className="col m12">
                <div className="container-text"> 
                    <div className="fixed-action-btn">
                        <a className="waves-effect waves-light btn-floating btn-large social github" href="https://github.com/jordan-skophammer" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>Sign in with github
                        </a>
                        <a className="waves-effect waves-light btn-floating btn-large social linkedin" href="https://www.linkedin.com/in/jordan-skophammer" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i> Sign in with linkedin
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Navbar --> */}
    <div className="navbar-fixed">
        <nav className="nav1">
            <div className="nav-wrapper">
                <a href={{__html: 'foo'}} className="brand-logo" />
                <a href={{__html: 'foo'}} className="dropdown-trigger" data-target="dropdown1"><i className="material-icons menu-icon">menu</i></a>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a id="projectslink" href={{__html: 'foo'}}><strong>Projects</strong></a></li>
                    <li><a id="aboutlink" href={{__html: 'foo'}}><strong>About</strong></a></li>
                    <li><a id="contactlink" href={{__html: 'foo'}}><strong>Contact</strong></a></li>
                </ul>
            </div>
        </nav>
    </div>
    {/* <!-- Title --> */}
    <div className="container">
    {/* <!-- About --> */}
        <div className="row">
            <div className="row">
                <div className="col m12">
                    <h4><u>About</u></h4>
                </div>
            </div>
            <div className="row">
                <div className="col m4">
                    <img className="headshot2" src={headShot} alt="headshot-forest" />
                </div>
                <div className="col m8 about-body">
                    I’m Jordan Skophammer, I’m a natural problem solver and passionate about web development. I enjoy using my creative and technical skills to engineer productive, intuitive, and innovative applications.
                <br /><br />
                    I enjoy web development because I constantly learning new skills and collaborating with new people.  
                </div>
            </div>
            <div className="row">
                <div className="col m12">
                    <h4><u>Contact</u></h4>
                    <div className="about-contact"><a href="mailto: jordan.skophammer@gmail.com">jordan.skophammer@gmail.com</a></div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Projects --> */}
    <div className="parallax"></div>
    <div className="container">
        <div id="projects"></div><br />
        <h4><u>Latest Projects</u></h4>
        <div className="row">
            <div className="col m6">
                <div className="card">
                    <div className="card-image">
                        <img className="project-img" src={balanceAppScreenshot} alt="BalanceAppScreenshot" />
                    </div>
                    <div className="card-content">
                        <i className="material-icons activator right">description</i>
                        <a href="http://whispering-shelf-92626.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h5>Balance App</h5></a>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title"><strong>Balance App</strong><i className="material-icons right">close</i></span>
                        <p>A financial budgeting app made in React. The app dynamically represents amount via a chart. Users are able to add, delete, or modify descriptions and amounts.</p>
                        <p>
                            <h6><strong>Future Features:</strong></h6>
                            <ul>
                                <li>Add database to hold user data</li>
                                <li>Add account login and authentication</li>
                            </ul>
                        </p>
                        <p><strong>Technologies used:</strong> React, Chart.js, React-Materialize</p>
                        <p><a href="https://github.com/jordan-skophammer/balance-app" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
                    </div>
                </div>
            </div>
            <div className="col m6">
                <div className="card">
                    <div className="card-image">
                        <img className="project-img" src={namakanScreenshot} alt="Namakan-Screenshot" />
                    </div>
                    <div className="card-content">
                        <i className="material-icons activator right">description</i>
                        <a href="https://namakanfur.com" target="_blank" rel="noopener noreferrer"><h5>Namakan Fur</h5></a>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title"><strong>Namakan Fur</strong><i className="material-icons right">close</i></span>
                        <p>A small business retail website using Shopify. The goal of using Shopify is for the client to be able to add content easily without any coding knowledge.</p>
                        <p><strong>Technologies used: </strong> Shopify, HTML and Liquid</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col m6">
                <div className="card">
                    <div className="card-image">
                        <img className="project-img" src={dinetteScreenshot} alt="Dinette-Screenshot" />
                    </div>
                    <div className="card-content">
                        <i className="material-icons activator right">description</i>
                        <a href="https://lit-oasis-87145.herokuapp.com" target="_blank" rel="noopener noreferrer"><h5>Dinette</h5></a>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title"><strong>Dinette</strong><i className="material-icons right">close</i></span>
                        <p>A restaurant search and ballot application. Search for restaurants based on city, zip code, or landmark. From the search results, learn more details about desired restaurants, then add restaurants to your ballot. Friends and family can search for your ballot based on your username and vote. Once voting results are in, the ballot creator can close the ballot. The result will determined by using ranked choice voting.</p>
                        <p><strong>Technologies used: </strong> React.js, Firebase, MongoDB, Google Places API, and Bootstrap</p>
                        <p><a href="https://github.com/jordan-skophammer/dinette-app" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
                    </div>
                </div>
            </div>
            <div className="col m6">
                <div className="card">
                    <div className="card-image">
                        <img className="project-img" src={picknicScreenshot} alt="Picknic-Screenshot" />
                    </div>
                    <div className="card-content">
                        <i className="material-icons activator right">description</i>
                        <a href="https://frozen-atoll-29378.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h5>Picknic</h5></a>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title"><strong>Picknic</strong><i className="material-icons right">close</i></span>
                        <p>A recipe sharing application. Users are able to search by categories, keywords, and chef. Also users can add recipes to the Picknic database and create a favorites list.</p>
                        <p><strong>Technologies used: </strong>Node.js, Vue.js, MySQL, and BootStrap</p>
                        <p><a href="https://github.com/lwerner27/Recipe-Catalog">Github Repo</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col m6">
                <div className="card">
                    <div className="card-image">
                        <img className="project-img" src={wutangScreenshot} alt="Namakan-Screenshot" />
                    </div>
                    <div className="card-content">
                        <i className="material-icons activator right">description</i>
                        <a href="https://jordan-skophammer.github.io/react-game/" target="_blank" rel="noopener noreferrer"><h5>Wu-Tang Match Game</h5></a>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title"><strong>Wu-Tang Match Game</strong><i className="material-icons right">close</i></span>
                        <p>A matching game utilizing React. Every time a card is clicked the state is changed, then props are passed to the card and scoreboard components.</p>
                        <p><strong>Technologies used: </strong> React.js and materialize</p>
                        <p><a href="https://github.com/jordan-skophammer/react-game" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
                    </div>
                </div>
            </div>   
        </div>
    </div>
{/* <!-- Contact --> */}
    <div className="parallax"></div>
    <div className="container">
        <div id="contact" className="row"></div>
        <div className="row">
            <div className="col m12">
                <h4><u>Contact</u></h4>
                <form id="contact-form" method="POST">
                    <div className="row">
                        <div className="form-group input-field col s12">
                        <input id="name" name="name" type="text" className="validate" required="required" />
                        <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group input-field col s12">
                        <input id="email" name="email" type="email" className="validate" required="required" />
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group input-field col s12">
                            <textarea id="message" name="message" className="materialize-textarea validate" required="required"></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="g-recaptcha" data-sitekey="6LeVvKUUAAAAACas44PQpVGrS1InO-TXiYmSF5qH" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                        <input className="form-control d-none callback-response" data-recaptcha="true" required data-error="Please complete the Captcha" style={{display:'none'}} />
                        <div className="help-block with-errors"></div>
                    </div>
                    <div id="success_message" style={{width:'100%',height:'100%', display:'none'}}>
                        <h4>Success! Your Message was Sent.</h4>
                    </div>
                    <button id="submit" className="btn waves-effect waves-light" disabled="disabled" name="submit" type="submit">Send</button>
                </form><br />
            </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
