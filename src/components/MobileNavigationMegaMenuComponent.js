import React, { useState } from "react";

export default function MobileNavigationMegaMenuComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  // Toggle hamburger
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Toggle accordion for any menu/submenu
  const toggleSubmenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="mobile-navigations-bar header">
      <nav className="mobile-navbar">
        <div className="mobile-logo">
          <a href="https://www.accorian.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.accorian.com/wp-content/uploads/2026/02/Accorian-Logo.svg"
              alt="Accorian Logo"
            />
          </a>
        </div>
        <div className="mobile-hamburger" onClick={toggleMenu}>
          <i
            className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}
            id="mobile-hamburger-icon"
          ></i>
        </div>
      </nav>

      <ul
        className="mobile-menu"
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        {/* Home */}
        <li>
          <a href="https://www.accorian.com/" target="_blank" rel="noreferrer">
            Home
          </a>
        </li>

        {/* Services */}
        <li
          className={`mobile-has-submenu ${
            openMenus.services ? "mobile-open" : ""
          }`}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleSubmenu("services");
            }}
          >
            Services
          </a>
          <ul
            className="mobile-submenu"
            style={{ display: openMenus.services ? "block" : "none" }}
          >
            {/* HITRUST */}
            <li
              className={`mobile-has-submenu ${
                openMenus.hitrust ? "mobile-open" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu("hitrust");
                }}
              >
                HITRUST®
              </a>
              <ul
                className="mobile-submenu"
                style={{ display: openMenus.hitrust ? "block" : "none" }}
              >
                <li>
                  <a href="https://www.accorian.com/hitrust/" target="_blank" rel="noreferrer">HITRUST®</a>
                </li>
                <li>
                  <a href="https://www.accorian.com/hie/" target="_blank" rel="noreferrer">HIE</a>
                </li>
                <li>
                  <a href="https://www.accorian.com/hitrust-for-ai-systems/" target="_blank" rel="noreferrer">HITRUST For AI Systems</a>
                </li>
                <li>
                  <a href="https://www.accorian.com/hitrust-e1/" target="_blank" rel="noreferrer">HITRUST e1</a>
                </li>
                <li>
                  <a href="https://www.accorian.com/hitrust-i1/" target="_blank" rel="noreferrer">HITRUST i1</a>
                </li>
                <li>
                  <a href="https://www.accorian.com/hitrust-r2/" target="_blank" rel="noreferrer">HITRUST r2</a>
                </li>
              </ul>
            </li>

            {/* ISO */}
            <li
              className={`mobile-has-submenu ${
                openMenus.iso ? "mobile-open" : ""
              }`}
            >
              <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("iso"); }}>ISO Assessments</a>
              <ul className="mobile-submenu" style={{ display: openMenus.iso ? "block" : "none" }}>
                <li><a href="https://www.accorian.com/iso-certifications/" target="_blank" rel="noreferrer">ISO Assessments</a></li>
                <li><a href="https://www.accorian.com/iso-22301-certification/" target="_blank" rel="noreferrer">ISO 22301 Certification</a></li>
                <li><a href="https://www.accorian.com/iso-27001/" target="_blank" rel="noreferrer">ISO 27001 Certification</a></li>
                <li><a href="https://www.accorian.com/iso-27017-certification/" target="_blank" rel="noreferrer">ISO 27017 Certification</a></li>
                <li><a href="https://www.accorian.com/iso-27018-certification/" target="_blank" rel="noreferrer">ISO 27018 Certification</a></li>
                <li><a href="https://www.accorian.com/iso-27701-certification/" target="_blank" rel="noreferrer">ISO 27701 Certification</a></li>
                <li><a href="https://www.accorian.com/iso-31000-certification/" target="_blank" rel="noreferrer">ISO 31000 Certification</a></li>
                <li><a href="https://www.accorian.com/iso-42001-certification/" target="_blank" rel="noreferrer">ISO 42001 Certification</a></li>
              </ul>
            </li>

            {/* NIST */}
            <li
              className={`mobile-has-submenu ${openMenus.nist ? "mobile-open" : ""}`}
            >
              <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("nist"); }}>NIST Assessments</a>
              <ul className="mobile-submenu" style={{ display: openMenus.nist ? "block" : "none" }}>
                <li><a href="https://www.accorian.com/nist-csf/" target="_blank" rel="noreferrer">NIST CSF</a></li>
                <li><a href="https://www.accorian.com/nist-ai-100-1/" target="_blank" rel="noreferrer">NIST AI 100-1</a></li>
                <li><a href="https://www.accorian.com/nist-ai-rmf/" target="_blank" rel="noreferrer">NIST AI RMF</a></li>
                <li><a href="https://www.accorian.com/nist-csf-2-0/" target="_blank" rel="noreferrer">NIST CSF 2.0</a></li>
                <li><a href="https://www.accorian.com/nist-sp-800-30/" target="_blank" rel="noreferrer">NIST SP 800-30</a></li>
                <li><a href="https://www.accorian.com/nist-sp-800-37/" target="_blank" rel="noreferrer">NIST SP 800-37</a></li>
                <li><a href="https://www.accorian.com/nist-sp-800-53/" target="_blank" rel="noreferrer">NIST SP 800-53</a></li>
                <li><a href="https://www.accorian.com/nist-sp-800-171/" target="_blank" rel="noreferrer">NIST SP 800-171</a></li>
              </ul>
            </li>

            {/* PCI DSS */}
            <li className={`mobile-has-submenu ${openMenus.pci ? "mobile-open" : ""}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("pci"); }}>PCI DSS</a>
              <ul className="mobile-submenu" style={{ display: openMenus.pci ? "block" : "none" }}>
                <li><a href="https://www.accorian.com/pci-asv/" target="_blank" rel="noreferrer">PCI ASV</a></li>
                <li><a href="https://www.accorian.com/pci-dss/" target="_blank" rel="noreferrer">PCI DSS</a></li>
              </ul>
            </li>

            {/* Penetration Testing */}
            <li className={`mobile-has-submenu ${openMenus.pen ? "mobile-open" : ""}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("pen"); }}>Penetration Testing</a>
              <ul className="mobile-submenu" style={{ display: openMenus.pen ? "block" : "none" }}>
                <li><a href="https://www.accorian.com/penetration-testing/" target="_blank" rel="noreferrer">Penetration Testing</a></li>
                <li><a href="https://www.accorian.com/ai-chatbot-penetration-testing/" target="_blank" rel="noreferrer">AI Chatbot Penetration Testing</a></li>
                <li><a href="https://www.accorian.com/devsecops/" target="_blank" rel="noreferrer">DevSecOps</a></li>
                <li><a href="https://www.accorian.com/pci-asv/" target="_blank" rel="noreferrer">PCI ASV</a></li>
                <li><a href="https://www.accorian.com/red-teaming/" target="_blank" rel="noreferrer">Red Teaming</a></li>
                <li><a href="https://www.accorian.com/secure-code-review/" target="_blank" rel="noreferrer">Secure Code Review</a></li>
                <li><a href="https://www.accorian.com/application-penetration-testing/" target="_blank" rel="noreferrer">Application Penetration Testing</a></li>
                <li><a href="https://www.accorian.com/external-network-penetration-testing/" target="_blank" rel="noreferrer">External Network Penetration Testing</a></li>
                <li><a href="https://www.accorian.com/internal-network-penetration-testing/" target="_blank" rel="noreferrer">Internal Network Penetration Testing</a></li>
                <li><a href="https://www.accorian.com/phishing-vishing-social-engineering/" target="_blank" rel="noreferrer">Phishing/Vishing/Social Engineering</a></li>
                <li><a href="https://www.accorian.com/wireless-network-security-assessment/" target="_blank" rel="noreferrer">Wireless Network Penetration Testing</a></li>
                <li><a href="https://www.accorian.com/product-suite-security/" target="_blank" rel="noreferrer">Product Suite Security</a></li>
              </ul>
            </li>

            {/* Security Compliance */}
            <li className={`mobile-has-submenu ${openMenus.seccomp ? "mobile-open" : ""}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("seccomp"); }}>Security Compliance</a>
              <ul className="mobile-submenu" style={{ display: openMenus.seccomp ? "block" : "none" }}>
                <li><a href="https://www.accorian.com/cmmc/" target="_blank" rel="noreferrer">CMMC</a></li>
                <li><a href="https://www.accorian.com/gdpr/" target="_blank" rel="noreferrer">GDPR</a></li>
                <li><a href="https://www.accorian.com/hipaa/" target="_blank" rel="noreferrer">HIPAA</a></li>
                <li><a href="https://www.accorian.com/eu-cra-cyber-resilience-act/" target="_blank" rel="noreferrer">EU CRA (Cyber Resilience Act)</a></li>
              </ul>
            </li>

            {/* Security Consulting */}
            <li className={`mobile-has-submenu ${openMenus.seccon ? "mobile-open" : ""}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("seccon"); }}>Security Consulting</a>
              <ul className="mobile-submenu" style={{ display: openMenus.seccon ? "block" : "none" }}>
                <li><a href="https://www.accorian.com/amcf/" target="_blank" rel="noreferrer">Accorian’s Multi-Compliance Framework</a></li>
                <li><a href="https://www.accorian.com/cloud-security/" target="_blank" rel="noreferrer">Cloud Security</a></li>
                <li><a href="https://www.accorian.com/third-party-risk-management-tprm/" target="_blank" rel="noreferrer">Managed TPRM</a></li>
                <li><a href="https://www.accorian.com/multi-compliance-bundle/" target="_blank" rel="noreferrer">Multi-Compliance Bundle</a></li>
                <li><a href="https://www.accorian.com/posture-assessment/" target="_blank" rel="noreferrer">Posture Assessment</a></li>
                <li><a href="https://www.accorian.com/ransomware-assessment/" target="_blank" rel="noreferrer">Ransomware Assessment</a></li>
                <li><a href="https://www.accorian.com/risk-assessment/" target="_blank" rel="noreferrer">Risk Assessment</a></li>
                <li><a href="#" target="_blank" rel="noreferrer">Security Strategy</a></li>
                <li><a href="https://www.accorian.com/vciso/" target="_blank" rel="noreferrer">vCISO & vSecurity Team</a></li>
              </ul>
            </li>

            {/* SOC */}
            <li className={`mobile-has-submenu ${openMenus.soc ? "mobile-open" : ""}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("soc"); }}>SOC 1 & SOC 2</a>
              <ul className="mobile-submenu" style={{ display: openMenus.soc ? "block" : "none" }}>
                <li><a href="https://www.accorian.com/soc-1/" target="_blank" rel="noreferrer">SOC 1</a></li>
                <li><a href="https://www.accorian.com/soc-2/" target="_blank" rel="noreferrer">SOC 2</a></li>
                <li><a href="https://www.accorian.com/soc2-bundle/" target="_blank" rel="noreferrer">SOC 2 Bundle</a></li>
              </ul>
            </li>

            {/* Staffing */}
            <li className={`mobile-has-submenu ${openMenus.staff ? "mobile-open" : ""}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("staff"); }}>Staffing as a Service</a>
              <ul className="mobile-submenu" style={{ display: openMenus.staff ? "block" : "none" }}>
                <li><a href="https://www.accorian.com/staffing/" target="_blank" rel="noreferrer">Staffing</a></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Other Main Links */}
        <li><a href="https://www.accorian.com/securing-ai/" target="_blank" rel="noreferrer">Securing AI</a></li>
        <li><a href="https://www.accorian.com/multi-compliance-bundle/" target="_blank" rel="noreferrer">Multi-Compliance Bundle</a></li>
        <li><a href="https://www.accorian.com/soc2-bundle/" target="_blank" rel="noreferrer">SOC 2 Bundle</a></li>
        <li><a href="https://www.accorian.com/gorico/" target="_blank" rel="noreferrer">GORICO</a></li>

        {/* Resources */}
        <li className={`mobile-has-submenu ${openMenus.resources ? "mobile-open" : ""}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("resources"); }}>Resources</a>
          <ul className="mobile-submenu" style={{ display: openMenus.resources ? "block" : "none" }}>
            <li><a href="https://www.accorian.com/articles-blogs/" target="_blank" rel="noreferrer">Articles & Blogs</a></li>
            <li><a href="https://www.accorian.com/case-studies/" target="_blank" rel="noreferrer">Case Studies</a></li>
            <li><a href="https://www.accorian.com/download-vault/" target="_blank" rel="noreferrer">Download Vault</a></li>
            <li><a href="https://www.accorian.com/news/" target="_blank" rel="noreferrer">News</a></li>
            <li><a href="https://www.accorian.com/podcast/" target="_blank" rel="noreferrer">Podcast</a></li>
            <li><a href="https://www.accorian.com/testimonials/" target="_blank" rel="noreferrer">Testimonials</a></li>
            <li><a href="https://www.accorian.com/threat-advisory/" target="_blank" rel="noreferrer">Threat Advisory</a></li>
            <li><a href="https://www.accorian.com/videos/" target="_blank" rel="noreferrer">Webinars</a></li>
          </ul>
        </li>

        {/* About */}
        <li className={`mobile-has-submenu ${openMenus.about ? "mobile-open" : ""}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu("about"); }}>About</a>
          <ul className="mobile-submenu" style={{ display: openMenus.about ? "block" : "none" }}>
            <li><a href="https://www.accorian.com/awards-accolades/" target="_blank" rel="noreferrer">Awards & Accolades</a></li>
            <li><a href="https://www.accorian.com/careers/" target="_blank" rel="noreferrer">Career</a></li>
            <li><a href="https://www.accorian.com/leadership-team/" target="_blank" rel="noreferrer">Leadership</a></li>
            <li><a href="https://www.accorian.com/partner-with-us/" target="_blank" rel="noreferrer">Partners</a></li>
          </ul>
        </li>

        {/* Contact */}
        <li><a href="https://www.accorian.com/contact-us/" target="_blank" rel="noreferrer">Contact Us</a></li>
      </ul>
    </div>
  );
}
