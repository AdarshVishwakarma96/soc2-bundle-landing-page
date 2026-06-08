// DesktopNavigationMegaMenuComponent.js
import React, { useEffect, useMemo, useState } from "react";
import BGRightArrow from '../assets/media/BG-Right-Arrow.svg';
/**
 * Props:
 * - bgRightArrowSrc: string (required) -> path to BGRightArrow image
 */
export default function DesktopNavigationMegaMenuComponent({ bgRightArrowSrc }) {
  // Which third-level panel is visible
  const [activePanel, setActivePanel] = useState("hitrust");

  // Optional: highlight top-level item if current URL matches (most are external anyway)
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  // ----- DATA -----
  const secondLevelItems = useMemo(
    () => [
      { key: "hitrust", label: "HITRUST®" },
      { key: "iso", label: "ISO Assessments" },
      { key: "nist", label: "NIST Assessments" },
      { key: "pci", label: "PCI DSS" },
      { key: "penetration", label: "Penetration Testing" },
      { key: "compliance", label: "Security Compliance" },
      { key: "consulting", label: "Security Consulting" },
      { key: "soc", label: "SOC 1 & SOC 2" },
      { key: "staffing", label: "Staffing as a Service" },
    ],
    []
  );

  const thirdLevelMap = useMemo(
    () => ({
      hitrust: [
        { href: "https://www.accorian.com/hitrust/", text: "HITRUST®" },
        { href: "https://www.accorian.com/hie/", text: "HIE" },
        { href: "https://www.accorian.com/hitrust-for-ai-systems/", text: "HITRUST For AI Systems" },
        { href: "https://www.accorian.com/hitrust-e1/", text: "HITRUST e1" },
        { href: "https://www.accorian.com/hitrust-i1/", text: "HITRUST i1" },
        { href: "https://www.accorian.com/hitrust-r2/", text: "HITRUST r2" },
      ],
      iso: [
        { href: "https://www.accorian.com/iso-certifications/", text: "ISO Assessments" },
        { href: "https://www.accorian.com/iso-22301-certification/", text: "ISO 22301 Certification" },
        { href: "https://www.accorian.com/iso-27001/", text: "ISO 27001 Certification" },
        { href: "https://www.accorian.com/iso-27017-certification/", text: "ISO 27017 Certification" },
        { href: "https://www.accorian.com/iso-27018-certification/", text: "ISO 27018 Certification" },
        { href: "https://www.accorian.com/iso-27701-certification/", text: "ISO 27701 Certification" },
        { href: "https://www.accorian.com/iso-31000-certification/", text: "ISO 31000 Certification" },
        { href: "https://www.accorian.com/iso-42001-certification/", text: "ISO 42001 Certification" },
      ],
      nist: [
        { href: "https://www.accorian.com/nist-csf/", text: "NIST CSF" },
        { href: "https://www.accorian.com/nist-ai-100-1/", text: "NIST AI 100-1" },
        { href: "https://www.accorian.com/nist-ai-rmf/", text: "NIST AI RMF" },
        { href: "https://www.accorian.com/nist-csf-2-0/", text: "NIST CSF 2.0" },
        { href: "https://www.accorian.com/nist-sp-800-30/", text: "NIST SP 800-30" },
        { href: "https://www.accorian.com/nist-sp-800-37/", text: "NIST SP 800-37" },
        { href: "https://www.accorian.com/nist-sp-800-53/", text: "NIST SP 800-53" },
        { href: "https://www.accorian.com/nist-sp-800-171/", text: "NIST SP 800-171" },
      ],
      pci: [
        { href: "https://www.accorian.com/pci-asv/", text: "PCI ASV" },
        { href: "https://www.accorian.com/pci-dss/", text: "PCI DSS" },
      ],
      penetration: [
        { href: "https://www.accorian.com/penetration-testing/", text: "Penetration Testing" },
        { href: "https://www.accorian.com/ai-chatbot-penetration-testing/", text: "AI Chatbot Penetration Testing" },
        { href: "https://www.accorian.com/devsecops/", text: "DevSecOps" },
        { href: "https://www.accorian.com/pci-asv/", text: "PCI ASV" },
        { href: "https://www.accorian.com/red-teaming/", text: "Red Teaming" },
        { href: "https://www.accorian.com/secure-code-review/", text: "Secure Code Review" },
        { href: "https://www.accorian.com/application-penetration-testing/", text: "Application Penetration Testing" },
        { href: "https://www.accorian.com/external-network-penetration-testing/", text: "External Network Penetration Testing" },
        { href: "https://www.accorian.com/internal-network-penetration-testing/", text: "Internal Network Penetration Testing" },
        { href: "https://www.accorian.com/phishing-vishing-social-engineering/", text: "Phishing/Vishing/Social Engineering" },
        { href: "https://www.accorian.com/wireless-network-security-assessment/", text: "Wireless Network Penetration Testing" },
        { href: "https://www.accorian.com/product-suite-security/", text: "Product Suite Security" },
      ],
      compliance: [
        { href: "https://www.accorian.com/cmmc/", text: "CMMC" },
        { href: "https://www.accorian.com/gdpr/", text: "GDPR" },
        { href: "https://www.accorian.com/hipaa/", text: "HIPAA" },
        { href: "https://www.accorian.com/eu-cra-cyber-resilience-act/", text: "EU CRA (EU Cyber Resilience Act)" },
      ],
      consulting: [
        { href: "https://www.accorian.com/amcf/", text: "Accorian’s Multi-Compliance Framework" },
        { href: "https://www.accorian.com/cloud-security/", text: "Cloud Security" },
        { href: "https://www.accorian.com/third-party-risk-management-tprm/", text: "Managed TPRM" },
        { href: "https://www.accorian.com/multi-compliance-bundle/", text: "Multi-Compliance Bundle" },
        { href: "https://www.accorian.com/posture-assessment/", text: "Posture Assessment" },
        { href: "https://www.accorian.com/ransomware-assessment/", text: "Ransomware Assessment" },
        { href: "https://www.accorian.com/risk-assessment/", text: "Risk Assessment" },
        { href: "#", text: "Security Strategy" },
        { href: "https://www.accorian.com/vciso/", text: "vCISO & vSecurity Team" },
      ],
      soc: [
        { href: "https://www.accorian.com/soc-1/", text: "SOC 1" },
        { href: "https://www.accorian.com/soc-2/", text: "SOC 2" },
        { href: "https://www.accorian.com/soc2-bundle/", text: "SOC 2 Bundle" },
      ],
      staffing: [{ href: "https://www.accorian.com/staffing/", text: "Staffing" }],
    }),
    []
  );

  // ----- EFFECTS -----
  // If you later want to set the active panel based on route, you can do it here.

  // ----- RENDER -----
  return (
    <div className="desktop-navigation">
      <nav id="mega-menu" className="mega-menu">
        <ul className="menu-first-level">
          <li>
            <a
              href="https://www.accorian.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={
                currentUrl === "https://www.accorian.com/"
                  ? { color: "#1426C5", borderBottom: "2px solid #1426C5" }
                  : undefined
              }
            >
              Home
            </a>
          </li>

          {/* SERVICES (mega) */}
          <li className="menu-item-has-children">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Services
            </a>

            <div className="mega-menu-dropdown mega-menu-dropdown-cus-width-full">
              <div className="menu-columns">
                {/* Second level */}
                <div className="menu-second-level">
                  <ul>
                    {secondLevelItems.map((item) => (
                      <li
                        key={item.key}
                        className={`menu-item-has-submenu${
                          activePanel === item.key ? " is-active" : ""
                        }`}
                      >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                          href="#"
                          data-target={item.key}
                          onClick={(e) => e.preventDefault()}
                          onMouseEnter={() => setActivePanel(item.key)}
                          onFocus={() => setActivePanel(item.key)}
                        >
                          {item.label}{" "}
                          <span>
                            <img
                              loading="lazy"
                              decoding="async"
                              src={BGRightArrow}
                              alt="Accorian right arrow icon"
                            />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Third level panels */}
                {secondLevelItems.map((item) => (
                  <div
                    key={item.key}
                    className="menu-third-level-content"
                    id={item.key}
                    style={{ display: activePanel === item.key ? "block" : "none" }}
                  >
                    <ul>
                      {(thirdLevelMap[item.key] || []).map((link, i) => (
                        <li key={i}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {/* Other top-level links */}
          <li><a href="https://www.accorian.com/securing-ai/"target="_blank"rel="noopener noreferrer">Securing AI</a></li>
          {/* <li><a href="https://www.accorian.com/soc2-bundle/" target="_blank" rel="noopener noreferrer">SOC 2 Bundle</a></li> */}
          <li><a href="https://www.accorian.com/gorico/" target="_blank" rel="noopener noreferrer">GORICO</a></li>

          {/* Resources (small mega) */}
          <li className="menu-item-has-children">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={(e) => e.preventDefault()}>Resources</a>
            <div className="mega-menu-dropdown mega-menu-dropdown-cus-width-small">
              <div className="menu-columns">
                <div className="menu-second-levels">
                  <ul>
                    <li><a href="https://www.accorian.com/articles-blogs/" target="_blank" rel="noopener noreferrer">Articles & Blogs</a></li>
                    <li>
                      <a
                        href="https://www.accorian.com/case-studies/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="https://www.accorian.com/download-vault/" target="_blank" rel="noopener noreferrer">Download Vault</a>
                    </li>
                    <li>
                      <a href="https://www.accorian.com/news/" target="_blank" rel="noopener noreferrer">
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.accorian.com/podcast/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Podcast
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.accorian.com/testimonials/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li><a href="https://www.accorian.com/threat-advisory/" target="_blank" rel="noopener noreferrer">Threat Advisory</a></li>
                    <li><a href="https://www.accorian.com/videos/" target="_blank" rel="noopener noreferrer">Webinars</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* About (small mega) */}
          <li className="menu-item-has-children">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={(e) => e.preventDefault()}>
              About
            </a>
            <div className="mega-menu-dropdown mega-menu-dropdown-cus-width-small">
              <div className="menu-columns">
                <div className="menu-second-levels">
                  <ul>
                    <li><a href="https://www.accorian.com/awards-accolades/" target="_blank" rel="noopener noreferrer">Awards & Accolades</a></li>
                    <li><a href="https://www.accorian.com/careers/" target="_blank" rel="noopener noreferrer">Careers</a></li>
                    <li><a href="https://www.accorian.com/leadership-team/" target="_blank" rel="noopener noreferrer">Leadership</a></li>
                    <li><a href="https://www.accorian.com/partner-with-us/" target="_blank" rel="noopener noreferrer">Partners</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><a href="https://www.accorian.com/contact-us/" target="_blank" rel="noopener noreferrer" className="cus-contact-menu">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
}
