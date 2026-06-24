"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  House,
  FolderKanban,
  Terminal,
  Route,
  Brain,
  Mail,
  Info
} from "lucide-react";

import styles from "./css/Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: House },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "Open Source", path: "/open-source", icon: Terminal },
    { name: "Skills", path: "/skills", icon: Brain },
    { name: "Contact", path: "/contact", icon: Mail },
    { name: "About", path: "/about", icon: Info },
  ];

  return (
    <>
      <nav className={styles.container}>
        <Link href="/" className={styles.logo}>
          K.PANDEY
        </Link>

        <div className={styles.desktopNav}>
          {navLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.link} ${pathname === item.path ? styles.active : ""
                  }`}
              >
                <Icon size={16} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          className={styles.resume}
        >
          Resume
        </a>

        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      <>
  <div
    className={`${styles.overlay} ${
      isOpen ? styles.overlayOpen : ""
    }`}
    onClick={() => setIsOpen(false)}
  />

  <aside
    className={`${styles.mobileMenu} ${
      isOpen ? styles.mobileMenuOpen : ""
    }`}
  >
    <div className={styles.mobileHeader}>
      <button
        className={styles.closeBtn}
        onClick={() => setIsOpen(false)}
      >
        <X size={24} />
      </button>
    </div>

    <div className={styles.mobileLinks}>
      {navLinks.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setIsOpen(false)}
            className={`${styles.mobileLink} ${
              pathname === item.path
                ? styles.mobileActive
                : ""
            }`}
          >
            <Icon size={18} />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>

    <a
      href="/resume.pdf"
      target="_blank"
      className={styles.mobileResume}
    >
      Resume
    </a>
  </aside>
</>
    </>
  );
};

export default Navbar;