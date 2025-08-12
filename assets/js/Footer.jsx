import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setNotification({
        show: true,
        type: "error",
        message: "Email address is required.",
      });
      return;
    }

    if (!validateEmail(email)) {
      setNotification({
        show: true,
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setNotification({
        show: true,
        type: "success",
        message: "Subscription successful!訂閱成功！",
      });
      setEmail("");
      setIsSubmitting(false);

      // 5秒之後隱藏通知
      setTimeout(() => {
        setNotification({ show: false, type: "", message: "" });
      }, 5000);
    }, 1000);
  };

  const categories = [
    { name: "Women", href: "#" },
    { name: "Men", href: "#" },
    { name: "Kids", href: "#" },
    { name: "Pets", href: "#" },
  ];

  const collections = [
    { name: "Latest arrivals", href: "#" },
    { name: "Urban Oasis", href: "#" },
    { name: "Cozy Comfort", href: "#" },
    { name: "Fresh Fusion", href: "#" },
  ];

  const socialLinks = [
    {
      name: "YouTube",
      icon: "/assets/images/footer-icon/youtube.svg",
      href: "#",
    },
    {
      name: "Instagram",
      icon: "/assets/images/footer-icon/ig.svg",
      href: "#",
    },
    {
      name: "Facebook",
      icon: "/assets/images/footer-icon/fb.svg",
      href: "#",
    },
    {
      name: "GitHub",
      icon: "/assets/images/footer-icon/github.svg",
      href: "#",
    },
    { name: "X", icon: "/assets/images/footer-icon/x.svg", href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <section className="newsletter-section">
          <h2 className="newsletter-title">Join our newsletter</h2>
          <p className="newsletter-description">
            We'll send you a nice letter once per week. No spam.
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className={`newsletter-input ${
                notification.show && notification.type === "error"
                  ? "error"
                  : ""
              }`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="newsletter-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {/* Notification */}
          {notification.show && (
            <div className={`notification ${notification.type}`}>
              {notification.message}
            </div>
          )}
        </section>

        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="brand-section">
            <div className="brand-logo">
              <div className="brand-icon">S</div>
              <span className="brand-name">StyleNest</span>
            </div>
            <p className="brand-tagline">
              Craft stunning style journeys that weave more joy into every
              thread.
            </p>
          </div>

          {/* Shop Categories */}
          <div className="footer-section">
            <h3 className="footer-section-title">Shop Categories</h3>
            <ul className="footer-links">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href={category.href}>{category.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Collections */}
          <div className="footer-section">
            <h3 className="footer-section-title">Shop Collections</h3>
            <ul className="footer-links">
              {collections.map((collection, index) => (
                <li key={index}>
                  <a href={collection.href}>{collection.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 StyleNest, Inc. All rights reserved.
          </p>

          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-icon"
                title={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
