// src/components/HubspotForm.js
import { useEffect } from "react";

const HubspotForms = ({ portalId, formId, region, targetId }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.hbspt) {
        clearInterval(interval);
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${targetId}`,
        });
      }
    }, 100); // Keep checking if hbspt is loaded

    return () => clearInterval(interval);
  }, [portalId, formId, region, targetId]);

  return <div id={targetId}></div>;
};

export default HubspotForms;
