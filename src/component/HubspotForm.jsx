// HubspotForm.js
import { useEffect } from "react";

const HubspotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "242727617",
          formId: "beecfe10-8e86-4c64-8dba-8d78f5c7fab7",
          region: "na2",
          target: "#hubspotForm"
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return <div id="hubspotForm"></div>;
};

export default HubspotForm;
