import React from 'react';

function FAQComponent() {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Q. What is included in the SOC 2 Bundle?</button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>A. The SOC 2 Bundle includes GORICO’s automation platform, gap and risk assessments, penetration testing, documentation support, and expert guidance through audit readiness and validation. It’s an all-in-one solution to streamline SOC 2 compliance.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Q. How quickly can I get SOC 2 attested with this bundle?</button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>A. By streamlining assessments and leveraging automation, Accorian’s SOC 2 Bundle reduces the time to attestation by up to 50%, ensuring a quicker path to compliance.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Q. Who is the SOC 2 Bundle best suited for?</button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>A. The SOC 2 Bundle is ideal for SaaS, healthcare, fintech, and BPO organizations. It’s designed for businesses that need a faster, cost-effective path to SOC 2 compliance.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Q. How does Accorian ensure audit readiness and success?</button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>A. Accorian ensures audit readiness with GORICO’s continuous monitoring, evidence mapping, and expert advisory support. This approach helps organizations pass SOC 2 audits with confidence.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Q. Are there hidden costs in the SOC 2 Bundle?</button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>A. No, Accorian offers transparent pricing for the SOC 2 Bundle. There are no hidden fees, so clients know exactly what they are paying for.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FAQComponent;