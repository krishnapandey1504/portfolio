"use client";
import styles from "../../styles/Contact.module.css";
import {
  FileText,
  ArrowRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function ContactPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const options = [
    "Career Opportunity / Internship",
    "Freelance Project",
    "Collaboration",
    "General Inquiry"
  ];
  return (
    <>
    <Navbar/>
    <main className={styles.contactPage}>

      {/* HERO + LINKS */}

      <section className={styles.topSection}>

        <div className={styles.left}>

          <h1 className={styles.title}>
            INITIATE
            <br />
            <span>CONNECTION.</span>
          </h1>

          <p className={styles.description}>
            Open to technical challenges,
            architectural discussions,
            and high-impact engineering roles.
          </p>

          <div className={styles.status}>
            <span className={styles.statusDot}></span>
            AVAILABLE FOR INTERNSHIPS
          </div>

          <div className={styles.links}>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.linkItem}
            >
              <div className={styles.linkLeft}>
                <FaGithub size={16} />
                <span>GitHub Profile</span>
              </div>

              <ArrowRight size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.linkItem}
            >
              <div className={styles.linkLeft}>
                <FaLinkedin size={16} />
                <span>LinkedIn Network</span>
              </div>

              <ArrowRight size={18} />
            </a>

            <a
              href="/resume/Krishna_Pandey_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={styles.linkItem}
            >
              <div className={styles.linkLeft}>
                <FileText size={16} />
                <span>Download Resume</span>
              </div>

              <ArrowRight size={18} />
            </a>

          </div>
        </div>

        {/* FORM */}

        <div className={styles.formCard}>

          <div className={styles.formHeader}>
            <span>DIRECT MESSAGE PROTOCOL</span>
            <span>SYS.FORM.REQ_01</span>
          </div>

          <form className={styles.form}>

            <div className={styles.row}>

              <div className={styles.field}>
                <label>
                  Identification (Name)
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className={styles.field}>
                <label>
                  Return Address (Email)
                </label>

                <input
                  type="email"
                  placeholder="you@domain.com"
                />
              </div>

            </div>

            <div className={styles.field}>
              <label>Subject Matter</label>

              <div className={styles.customSelect} ref={dropdownRef}>
                
                <button
                  type="button"
                  className={styles.selectButton}
                  onClick={() => setOpen(!open)}
                >
                  {selected || "SELECT SUBJECT"}
                  <span className={`${styles.arrow} ${open ? styles.rotate : ""}`}>
                    ▾
                  </span>
                </button>

                {open && (
                  <div className={styles.dropdown}>
                    {options.map((item) => (
                      <div
                        key={item}
                        className={styles.option}
                        onClick={() => {
                          setSelected(item);
                          setOpen(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label>Payload (Message)</label>

              <textarea
                rows="7"
                placeholder="Detail your request here..."
              />
            </div>

            <div className={styles.buttonRow}>
              <button type="submit" className={styles.submitBtn}>
                TRANSMIT <ArrowRight />
              </button>
            </div>

          </form>

        </div>

      </section>

    </main>
    <Footer/>
    </>
  );
}