// src/components/ModalPopupsComponent.js
import React from "react";
import HubspotForms from "./HubspotForms";

const ModalPopupsComponent = () => {
  return (
    <>
      {/* First Modal - Site Form */}
      <div className="modal fade" id="SiteFormModal" tabIndex={-1} aria-labelledby="SiteFormModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="siteformmodal">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <img src="https://www.accorian.com/wp-content/uploads/2024/12/White-Close-Icon.svg" alt="Close Icon" />
              </button>
              <div className="row  align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="siteformmodaltitle">
                    <h2>Focus On Your Business While We Focus On <span className="text-gradient-style">Your Security</span></h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="siteformmodalbody">
                    <h5>Start Here</h5>
                    <HubspotForms portalId="45421430" formId="f5d77256-d00e-465f-a9ab-76bb77b04b5b" region= "na1" targetId="hubspot-form-speak-to-an-expert" />
                    </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Second Modal - SOC2 Bundle Form */}
      <div className="modal fade" id="SOC2BundleFormModal" tabIndex={-1} aria-labelledby="SOC2BundleFormModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="custom-modal-header">
              <h5>Download <span className="text-gradient-style"> Our SOC 2 Bundle Brochure</span>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <img src="https://www.accorian.com/wp-content/uploads/2024/12/Dark-Close-Icon.svg" alt="Close Icon" />
              </button>
              </h5>
            </div>
            <div className="custom-modal-body">
              <HubspotForms portalId="45421430" formId="9479e16f-27c9-4f23-8cc6-7ad2cf1b4fd6" region="na1" targetId="hubspot-form-soc2-bundle" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopupsComponent;
