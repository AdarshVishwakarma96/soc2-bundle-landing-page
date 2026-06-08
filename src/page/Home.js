import React from 'react';
import { Link } from 'react-router-dom';
import SOC2BundleIndustriesIMG1 from '../assets/media/SOC-2-Bundle-Industries-IMG-1.svg';
import SOC2BundleIndustriesIMG2 from '../assets/media/SOC-2-Bundle-Industries-IMG-2.svg';
import SOC2BundleIndustriesIMG3 from '../assets/media/SOC-2-Bundle-Industries-IMG-3.svg';
import SOC2BundleMastheadIMG from '../assets/media/SOC-2-Bundle-Masthead-IMG.svg';
import SOC2BundleMatterIMG from '../assets/media/SOC-2-Bundle-Matter-IMG.svg';
import ModalPopupsComponent from '../components/ModalPopupsComponent';
import DesktopNavigationMegaMenuComponent from '../components/DesktopNavigationMegaMenuComponent';
import MobileNavigationMegaMenuComponent from '../components/MobileNavigationMegaMenuComponent';
import Stat from '../components/CounterComponent';
import TestimonialsComponent from '../components/TestimonialsComponent';
import FAQComponent from '../components/FAQComponent';
 
function Home() {
    return (
    <>
    
        <header>
            <div className="top-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 col-sm-6 col-6">
                        <div className="top-header-links">
                            <ul>
                                <li><a href="https://www.linkedin.com/company/accorian/" target="_blank"><i className="bi bi-linkedin"></i></a></li>
                                <li><a href="https://www.youtube.com/@accorian" target="_blank"><i className="bi bi-youtube"></i></a></li>
                                <li><a href="https://medium.com/@accorian" target="_blank"><i className="bi bi-medium"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-6 col-6">
                        <div className="top-header-link" style={{float: "left"}}>
                            <ul>
                                <li><a href="https://www.accorian.com/multi-compliance-bundle/" target="_blank">Multi-Compliance Bundle</a></li>
                                <li><a href="https://www.accorian.com/soc2-bundle/" target="_blank">SOC 2 Bundle</a></li>
                            </ul>
                        </div>
                        <div className="top-header-links" style={{float: "right"}}>
                            <ul>
                                <li><a href="https://www.accorian.com/" target="_blank"><i className="bi bi-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="main-navigations">
                <div className="container header-navigations-bar">
                <div className="row desktop-navigations-bar">
                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <div className="header-logo">
                            <a href="https://www.accorian.com/" target="_blank">
                                <img src="https://www.accorian.com/wp-content/uploads/2026/02/Accorian-Logo.svg" alt="Accorian Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-6 col-6">
                        <DesktopNavigationMegaMenuComponent />
                    </div>
                </div>
                <div className="row mobile-navigations-bar">
                    <div className="col-12">
                        <MobileNavigationMegaMenuComponent />
                    </div>
                </div>
            </div>
            </div>
            
        </header>
        <main>
            <section className="masterhead-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="masterhead-content">
                                <h1 className="text-gradient-style">Accorian’s SOC 2 Bundle</h1>
                                <h2>Get Audit-Ready in Just 8 Weeks</h2>
                                <p>In a market where data integrity and operational resilience are non-negotiable, SOC 2 compliance is a prerequisite for securing enterprise partnerships, maintaining investor confidence, and achieving sustainable growth. Accorian’s SOC 2 Bundle—powered by our proprietary GRC platform, GORICO-delivers a rigorously structured, audit-ready pathway tailored for high-growth technology firms.</p>
                                <p>Our methodology combines automation, expert oversight, and precision testing to ensure your organization meets the Trust Services Criteria with speed and confidence.</p>
                                <button className="site-button" type="button" data-bs-toggle="modal" data-bs-target="#SiteFormModal">Get Your Free SOC 2 Readiness Consultation</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="masterhead-media">
                                <img src={SOC2BundleMastheadIMG} alt="SOC 2 Bundle" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="page-table-contents-style">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul>
                                <li><a href="#SOC2Bundlesection">SOC 2 Bundle</a></li>
                                <li><a href="#Benefitssection">Benefits</a></li>
                                <li><a href="#Industriessection">Industries</a></li>
                                <li><a href="#SOC2section">SOC 2</a></li>
                                <li><a href="#Strategicsection">Strategic</a></li>
                                <li><a href="#Approachsection">Approach</a></li>
                                <li><a href="#OurExpertssection">Our Experts</a></li>
                                <li><a href="#FAQssection">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <section id="SOC2Bundlesection">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-soc2-box">
                                <span className="site-index-ribbon-tag">SOC 2 Bundle</span>
                                <h2 className="site-section-title text-color">What’s Included in the <span className="text-gradient-style">SOC 2 Bundle</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-boxes">
                                <h4>GORICO Platform</h4>
                                <p>Automate compliance, risk assessments, and audit prep</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-boxes">
                                <h4>Gap Analysis</h4>
                                <p>Understand your compliance posture and identify control gaps</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-boxes">
                                <h4>Risk Assessment</h4>
                                <p>Map vulnerabilities before they escalate</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-boxes">
                                <h4>Penetration Testing</h4>
                                <p>Fortify systems against real-world threats</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-boxes">
                                <h4>Policy & Procedure Support</h4>
                                <p>Easy-to-use templates for policy creation</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-boxes">
                                <h4>Practitioner-led Support</h4>
                                <p>Dedicated specialists guide you through every phase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
            <section id="Benefitssection" className="soc2bundlegamechanger-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="site-soc-bundle-box">
                                <span className="site-index-ribbon-tag">Benefits</span>
                                <h2 className="site-section-title text-color">What Makes Accorian’s  <span className="text-gradient-style">SOC 2 Bundle a Game Changer</span></h2>
                                <p>A complete, streamlined package that’s helped 250+ SaaS, HealthTech, and FinTech brands achieve 100% SOC 2 success.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="benefits-boxes-full">
                    <div className="container">
                        <div className="row align-item-center">
                            <div className="col-lg-1 col-md-2 col-sm-2 col-12">
                                <div className="benefits-box-media">
                                    <img src="https://www.accorian.com/wp-content/uploads/2024/10/No-1-Box.svg" alt="Box No 1" />
                                </div>
                            </div>
                            <div className="col-lg-11 col-md-10 col-sm-10 col-12">
                                <div className="benefits-box-descp">
                                    <h4>One Bundle. Everything You Need.</h4>
                                    <p>From gap analysis to attestation, every step is covered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="benefits-boxes-full">
                    <div className="container">
                        <div className="row align-item-center">
                            <div className="col-lg-1 col-md-2 col-sm-2 col-12">
                                <div className="benefits-box-media">
                                    <img src="https://www.accorian.com/wp-content/uploads/2024/10/No-2-Box.svg" alt="Box No 2" />
                                </div>
                            </div>
                            <div className="col-lg-11 col-md-10 col-sm-10 col-12">
                                <div className="benefits-box-descp">
                                    <h4>Your Timeline. Your Pace.</h4>
                                    <p>Flexible framework lets you move fast, without pressure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="benefits-boxes-full">
                    <div className="container">
                        <div className="row align-item-center">
                            <div className="col-lg-1 col-md-2 col-sm-2 col-12">
                                <div className="benefits-box-media">
                                    <img src="https://www.accorian.com/wp-content/uploads/2024/10/No-3-Box.svg" alt="Box No 3" />
                                </div>
                            </div>
                            <div className="col-lg-11 col-md-10 col-sm-10 col-12">
                                <div className="benefits-box-descp">
                                    <h4>Expert Guidance. Every Step.</h4>
                                    <p>Practitioner-led support from seasoned SOC 2 professionals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="benefits-boxes-full mb-4">
                    <div className="container">
                        <div className="row align-item-center">
                            <div className="col-lg-1 col-md-2 col-sm-2 col-12">
                                <div className="benefits-box-media">
                                    <img src="https://www.accorian.com/wp-content/uploads/2024/10/No-4-Box.svg" alt="Box No 4" />
                                </div>
                            </div>
                            <div className="col-lg-11 col-md-10 col-sm-10 col-12">
                                <div className="benefits-box-descp">
                                    <h4>Built for Growth.</h4>
                                    <p>Scalable solutions tailored to evolving business needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h2 className="site-section-title text-gradient-style">Backed by Proven Metrics</h2>
                        </div>
                        <div className="col-12">
                            <Stat />
                            {/* <div className="stats">
                                <div className="stat"><div className="statbox"><span className="statnumber" data-target="100">0</span>%</div><p>Audit Success</p></div>
                                <div className="stat"><div className="statbox"><span className="statnumber" data-target="250">0</span>+</div><p>SOC 2 Clients in the past year</p></div>
                                <div className="stat"><div className="statbox"><span className="statnumber" data-target="50">0</span>%</div><p>Reduction in Time to Audit-Readiness</p></div>
                                <div className="stat"><div className="statbox"><span className="statnumber" data-target="40">0</span>%</div><p>Lower Compliance Costs</p></div>
                                <div className="stat"><div className="statbox"><span className="statnumber" data-target="80">0</span>%</div><p>Faster Evidence Gathering</p></div>
                            </div> */}
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-12 text-center">
                            <button className="site-button" type="button" data-bs-toggle="modal" data-bs-target="#SiteFormModal">Book My Free Readiness Call</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
            <section id="Industriessection" className="industries-section">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="sign-up-box">
                                <span className="site-index-ribbon-tag-white">Industries</span>
                                <h2 className="site-section-title text-white-color">Who Should Sign Up</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="signup-boxes">
                                <div className="signup-boxes-media">
                                    <img src={SOC2BundleIndustriesIMG1} alt="Start-ups and growth-stage companies" />
                                </div>
                                <div className="signup-boxes-text">
                                    <h5>Start-ups and growth-stage companies</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="signup-boxes">
                                <div className="signup-boxes-media">
                                    <img src={SOC2BundleIndustriesIMG2} alt="Service providers handling customer data" />
                                </div>
                                <div className="signup-boxes-text">
                                    <h5>Service providers handling customer data</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="signup-boxes">
                                <div className="signup-boxes-media">
                                    <img src={SOC2BundleIndustriesIMG3} alt="Global/US-Focused organizations" />
                                </div>
                                <div className="signup-boxes-text">
                                    <h5>Global/US-Focused organizations</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                            <div className="industries-lists">
                                <h3 className="text-gradient-style">Industries We Serve</h3>
                                <ul>
                                    <li>SaaS & Cloud Platforms</li>
                                    <li>FinTech & Digital Payments</li>
                                    <li>HealthTech & MedTech</li>
                                    <li>AdTech & MarTech</li>
                                    <li>AI/ML & Data Science</li>
                                    <li>B2B SaaS & Enterprise Software</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="industries-video-box">
                                <h3>Accorian’s SOC 2 Bundle - The Complete Tool for Compliance</h3>
                                <iframe src="https://www.youtube.com/embed/uMW_s8_zKhw"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
            <section id="SOC2section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-soc2-box">
                                <span className="site-index-ribbon-tag">SOC 2</span>
                                <h2 className="site-section-title text-color">What Is SOC 2 and <span className="text-gradient-style">Why Does It Matter</span></h2>
                                <p>SOC 2, developed by the American Institute of CPAs (AICPA), evaluates an organization’s controls related to:</p>
                            </div>
                        </div>
                    </div>
                    <div className="row about-soc2-hover-box-row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-hover-box">
                                <h4>Security</h4>
                                <p>Protection against unauthorized access</p>
                                <img src="https://www.accorian.com/wp-content/uploads/2025/01/Icons_data-security-and-compliance.svg" alt="SOC 2 Bundle Security" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-hover-box">
                                <h4>Availability</h4>
                                <p>System uptime and reliability</p>
                                <img src="https://www.accorian.com/wp-content/uploads/2025/01/icons-Recovered_adaptability-to-change.svg" alt="SOC 2 Bundle Availability" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-hover-box">
                                <h4>Processing Integrity</h4>
                                <p>Accuracy and completeness of operations</p>
                                <img src="https://www.accorian.com/wp-content/uploads/2025/01/Icons_ensure-compliance.svg" alt="SOC 2 Bundle Processing Integrity" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-hover-box">
                                <h4>Confidentiality</h4>
                                <p>Safeguarding sensitive information</p>
                                <img src="https://www.accorian.com/wp-content/uploads/2025/01/Icons_protect-int-prop.svg" alt="SOC 2 Bundle Confidentiality" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-hover-box">
                                <h4>Privacy</h4>
                                <p>Responsible handling of personal data</p>
                                <img src="https://www.accorian.com/wp-content/uploads/2025/01/Icons_trust-and-assets.svg" alt="SOC 2 Bundle Privacy" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="about-soc2-hover-img">
                                <img src={SOC2BundleMatterIMG} alt="About SOC 2 bundle" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="about-soc2-box">
                                <p>Achieving SOC 2 attestation signifies operational maturity, risk awareness, and a proactive security posture, which are essential for client acquisition, retention, and regulatory alignment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <div className="clearfix"></div>
            <section id="Strategicsection">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="strategic-title">
                                <span className="site-index-ribbon-tag">Strategic</span>
                                <h2 className="site-section-title text-color">Why Strategic SOC 2 Execution Drives <span className="text-gradient-style">Credibility, Velocity, and Scale</span></h2>
                                <p>In today’s market, SOC 2 isn’t optional—it’s the difference between closed deals and closed doors. Clients, investors, and partners expect trust, speed, and proof.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4 mb-4">
                        <div className="col-12">
                            <div className="strategic-contents">
                                <h4>Going DIY or piecemeal? Here’s what that costs:</h4>
                                <ul>
                                    <li>Missed deadlines <i className="bi bi-arrow-right"></i> Deals slip through</li>
                                    <li>Cookie-cutter policies <i className="bi bi-arrow-right"></i> Audits fall apart</li>
                                    <li>Disconnected tools <i className="bi bi-arrow-right"></i> Bloated costs, broken workflows</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="strategic-title">
                                <p>Our SOC 2 Bundle is built to prevent delays, failures, and inefficiencies—so you stay ahead.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
            <section id="Approachsection" className="approach-section">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="approach-title">
                                <span className="site-index-ribbon-tag">Approach</span>
                                <h2 className="site-section-title text-color">Let Our Time-Tested  <span className="text-gradient-style">Approach Empower You</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="approach-boxes">
                                <h3>01</h3>
                                <h4 className="text-gradient-style">Attract More Revenue</h4>
                                <p>SOC 2 builds trust and opens new opportunities.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="approach-boxes">
                                <h3>02</h3>
                                <h4 className="text-gradient-style">Remove Unnecessary Complexities</h4>
                                <p>No vendor coordination. No jargon. No surprises.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="approach-boxes">
                                <h3>03</h3>
                                <h4 className="text-gradient-style">Make It Straightforward & Stress-Free</h4>
                                <p>Streamlined process with clear deliverables.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="approach-boxes">
                                <h3>04</h3>
                                <h4 className="text-gradient-style">Enable Sustainable Growth</h4>
                                <p>Strengthen security, boost credibility, and fuel long-term success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                            <div className="download-guide-text">
                                <h4>Access Our <span className="text-gradient-style"> SOC 2 Bundle Brochure</span></h4>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                            <div className="download-guide-form-box">
                                <img src="https://www.accorian.com/wp-content/uploads/2025/04/SOC-2-Bundle-Brochure.svg" alt="SOC 2 Bundle Brochure" />
                                <div className="downlaod-guide-form-text">
                                    <h5>Fast-Track Your SOC 2 Compliance with Accorian’s SOC 2 Bundle</h5>
                                    <button className="site-button" type="button" data-bs-toggle="modal" data-bs-target="#SOC2BundleFormModal">Download Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="clearfix"></div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="timeline-boxes">
                                <span className="site-index-ribbon-tag">Timeline</span>
                                <h2 className="site-section-title text-color">Timeline to <span className="text-gradient-style">Audit-Readiness</span></h2>
                                <div className="table-container mt-4 mb-4">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Phase</th>
                                                <th>Duration</th>
                                                <th>Outcome</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Kickoff & Gap Analysis</td>
                                                <td>Week 1</td>
                                                <td>Clear roadmap</td>
                                            </tr>
                                            <tr>
                                                <td>Remediation & Risk</td>
                                                <td>Weeks 2–4</td>
                                                <td>Controls implemented</td>
                                            </tr>
                                            <tr>
                                                <td>Testing & Evidence</td>
                                                <td>Weeks 5–6</td>
                                                <td>Audit artifacts ready</td>
                                            </tr>
                                            <tr>
                                                <td>Final Prep</td>
                                                <td>Weeks 7–8</td>
                                                <td>Audit confidence</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h4>Total Time: 8 Weeks</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="includes-boxes">
                                <span className="site-index-ribbon-tag">About Accorian</span>
                                <h2 className="site-section-title text-color">Why <span className="text-gradient-style">Accorian?</span></h2>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Differentiator</th>
                                                <th>Impact</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>100% Audit Success Rate</td>
                                                <td>Trusted by over 250 clients in the past year alone</td>
                                            </tr>
                                            <tr>
                                                <td>Accelerated Compliance</td>
                                                <td>SOC 2 readiness in under 8 weeks, 50% faster than industry average</td>
                                            </tr>
                                            <tr>
                                                <td>Transparent Engagement Model</td>
                                                <td>Fixed pricing, no hidden fees, no vendor sprawl</td>
                                            </tr>
                                            <tr>
                                                <td>Scalable Architecture</td>
                                                <td>Designed for SaaS, FinTech, HealthTech, AdTech, and MarTech ecosystems</td>
                                            </tr>
                                            <tr>
                                                <td>Humanized Expertise</td>
                                                <td>Real consultants, not chatbots—delivering contextual, strategic guidance</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
            <section id="OurExpertssection" className="expert-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="experts-box">
                                <span className="site-index-ribbon-tag">Our Experts</span>
                                <h2 className="site-section-title text-color">Meet Your <span className="text-gradient-style">Compliance Architects</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="expert-boxes">
                                <img src="https://www.accorian.com/wp-content/uploads/2024/10/OM-Hazela-IMG.svg" alt="OM Hazela" />
                                <div className="expert-boxes-descp">
                                    <div className="expert-boxes-text">
                                        <h4>OM Hazela</h4>
                                        <p>Vice President & Head of General Compliance Services & CISO</p>
                                    </div>
                                    <div className="expert-boxes-social">
                                        <a href="https://www.linkedin.com/in/om-hazela-b91b3138/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="expert-boxes">
                                <img src="https://www.accorian.com/wp-content/uploads/2025/02/Eishu-Richhariya-IMG.svg" alt="Eishu Richhariya" />
                                <div className="expert-boxes-descp">
                                    <div className="expert-boxes-text">
                                        <h4>Eishu Richhariya</h4>
                                        <p>Team Lead & Senior Security Consultant</p>
                                    </div>
                                    <div className="expert-boxes-social">
                                        <a href="https://www.linkedin.com/in/eishu-richhariya-bbbbb618a" target="_blank"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonials-title">
                                <span className="site-index-ribbon-tag">Testimonials</span>
                                <h2 className="site-section-title text-color">Our <span className="text-gradient-style">Client Testimonials</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TestimonialsComponent />
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
            <section id="FAQssection">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonials-title">
                                <span className="site-index-ribbon-tag">FAQs</span>
                                <h2 className="site-section-title text-color">Frequently <span className="text-gradient-style">Asked Questions (FAQs)</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="site-accordion">
                                <FAQComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
            <section className="bottom-cta-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bottom-site-cta-box">
                                <h2 className="site-section-title text-white-color">Ready to Lead with Trust?</h2>
                                <p>Let’s make SOC 2 your competitive advantage.</p>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#SiteFormModal">Book My Free SOC 2 Call Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ModalPopupsComponent />
        </main>

    <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="footer-widget-logo">
                            <a href="https://www.accorian.com/">
                                <img src="https://www.accorian.com/wp-content/uploads/2024/09/Footer-Logo.webp" alt="Accorian White Logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h4>Security Compliance & Assessment Services</h4>
                            <ul>
                                <li><a href="https://www.accorian.com/gdpr/" target="_blank">GDPR</a></li>
                                <li><a href="https://www.accorian.com/hipaa/" target="_blank">HIPAA</a></li>
                                <li><a href="https://www.accorian.com/iso-27001/" target="_blank">ISO 27001</a></li>
                                <li><a href="https://www.accorian.com/nist-csf/" target="_blank">NIST CSF</a></li>
                                <li><a href="https://www.accorian.com/pci-dss/" target="_blank">PCI DSS</a></li>
                                <li><a href="https://www.accorian.com/soc-2/" target="_blank">SOC 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h4>Consulting & Assessment Services</h4>
                            <ul>
                                <li><a href="https://www.accorian.com/third-party-risk-management-tprm/" target="_blank">Managed TPRM</a></li>
                                <li><a href="https://www.accorian.com/posture-assessment/" target="_blank">Posture Assessment</a></li>
                                <li><a href="https://www.accorian.com/red-teaming/" target="_blank">Red Teaming</a></li>
                                <li><a href="https://www.accorian.com/risk-assessment/" target="_blank">Risk Assessment</a></li>
                                <li><a href="https://www.accorian.com/vciso/" target="_blank">vCiso & CISO Security Team</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h4>Contact Information</h4>
                            <ul>
                                <li><a href="mailto:info@accorian.com">E. info@accorian.com</a></li>
                                <li><a href="tel:+1-732-443-3468">T. +1-732-443-3468</a></li>
                            </ul>
                            <div className="footer-social">
                                <a href="https://www.linkedin.com/company/accorian/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                <a href="https://www.youtube.com/@accorian" target="_blank"><i className="bi bi-youtube"></i></a>
                                <a href="https://medium.com/@accorian" target="_blank"><i className="bi bi-medium"></i></a>
                            </div>
                            <ul>
                                <li><a href="https://www.accorian.com/privacy-policy/">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h4>Office Address</h4>
                            <h5>Accorian Head Office</h5>
                            <address>6, Alvin Ct, East Brunswick, NJ 08816 USA</address>
                            <h5>Accorian Canada</h5>
                            <address>Toronto</address>
                            <h5>Accorian India</h5>
                            <address>Ground Floor, 11, Brigade Terraces, Cambridge Rd, Halasuru, Udani Layout, Bengaluru, Karnataka 560008, India</address>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="mobile-footer-index-style">
            <input type="checkbox" id="tablemenuToggle" className="table-menu-toggle" />
            <label for="tablemenuToggle" className="table-floating-button"><i className="bi bi-plus-lg"></i></label>
            <div className="table-menu-container">
                <label for="tablemenuToggle" className="table-close-button"><i className="bi bi-x-lg"></i></label>
                <ul className="table-menu">
                    <li><a href="#SOC2Bundlesection">SOC 2 Bundle</a></li>
                    <li><a href="#Benefitssection">Benefits</a></li>
                    <li><a href="#Industriessection">Industries</a></li>
                    <li><a href="#SOC2section">SOC 2</a></li>
                    <li><a href="#Strategicsection">Strategic</a></li>
                    <li><a href="#Approachsection">Approach</a></li>
                    <li><a href="#OurExpertssection">Our Experts</a></li>
                    <li><a href="#FAQssection">FAQs</a></li>
                </ul>
            </div>
        </div>

        

      
      
    </>
     
    );
  }
 
export default Home;