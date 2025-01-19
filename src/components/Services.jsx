import React from "react";

const services = () => {
  return (
    <div className="container my-5" style={{ paddingTop: "70px", position: "relative" }}>
      {/* Background */}
      <div
        className="background"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "-1",
          backgroundImage: "linear-gradient(45deg, #ff6f61, #ffac61, #ffdc61)",
          opacity: "0.5",
          filter: "blur(15px)",
        }}
      ></div>

      {/* Services Section */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div
            className="card shadow-lg p-5 mb-5 bg-light rounded-lg"
            style={{
              transition: "all 0.3s ease-in-out",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <div className="card-body">
              <h2 className="text-center text-primary mb-4 font-weight-bold" style={{ fontSize: "2.5rem" }}>
                Our Creative Services
              </h2>
              <p className="lead text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                At <strong>Newsify</strong>, we believe in creative, innovative, and user-focused solutions. Our services are designed to help individuals and organizations stay updated with personalized, curated news content in real-time.
              </p>

              <div className="text-center mt-4">
                <h3 className="text-secondary mb-3 font-italic">Custom News Feeds</h3>
                <p className="text-muted" style={{ fontSize: "1.1rem" }}>
                  We offer custom news feed services that curate stories based on your preferences, allowing you to receive only the most relevant news.
                </p>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-secondary mb-3 font-italic">API Integration</h3>
                <p className="text-muted" style={{ fontSize: "1.1rem" }}>
                  Seamlessly integrate our news service into your applications with our easy-to-use API, providing access to the latest news from various global sources.
                </p>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-secondary mb-3 font-italic">Real-Time Alerts</h3>
                <p className="text-muted" style={{ fontSize: "1.1rem" }}>
                  Stay up-to-date with breaking news alerts sent directly to your device. Whether you're on the go or at home, you won't miss a headline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer
  className="text-center mt-4 py-2"
  style={{
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    fontSize: "0.85rem",
    letterSpacing: "0.2px",
    borderRadius: "8px",
    opacity: "0.8",
  }}
>
  <div className="container">
    <p className="m-0" style={{ fontWeight: "400", lineHeight: "1.6" }}>
      © 2025 Vishal Lokhande. All Rights Reserved.
    </p>
    <p className="m-0" style={{ fontWeight: "300", lineHeight: "1.6" }}>
      Powered by <span style={{ fontWeight: "400" }}>NewsData API</span>
    </p>
  </div>
</footer>

    </div>
  );
};

export default services;
