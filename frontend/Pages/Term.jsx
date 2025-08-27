import React from "react";
import Footer from '/src/components/Footer';
import './Term.css';

const Term = () => {
  return (
    <div>
    <div className="term-container">
      <h1 className="page-title">Terms and Conditions</h1>

      <p>Welcome to our Online Compiler platform. By accessing or using our services, you agree to be bound by these Terms and Conditions.</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By using the online compiler, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, you must not use the platform.</p>

      <h2>2. Permitted Use</h2>
      <p>This platform is intended for educational and development purposes only. You agree not to use the compiler for any illegal, harmful, or malicious activities.</p>

      <h2>3. Code Execution & Limitations</h2>
      <p>You are solely responsible for the code you write and execute. We do not guarantee the accuracy, performance, or output of any code run on the platform.</p>

      <h2>4. User Data & Privacy</h2>
      <p>We do not collect or store any personal data or source code entered into the compiler unless explicitly stated. Please avoid entering sensitive or confidential data.</p>

      <h2>5. Intellectual Property</h2>
      <p>All content, design, and source code of the platform is protected by intellectual property rights. Do not copy, distribute, or reverse-engineer any part of the service.</p>

      <h2>6. Limitation of Liability</h2>
      <p>We are not liable for any losses, data corruption, or damages arising from use of the online compiler. Use the service at your own risk.</p>

      <h2>7. Termination of Access</h2>
      <p>We reserve the right to suspend or terminate your access to the platform at any time, especially in case of misuse or violation of terms.</p>

      <h2>8. Changes to Terms</h2>
      <p>We may update these terms at any time. Continued use after updates constitutes acceptance of the revised terms.</p>

      <h2>9. Contact Information</h2>
      <p>For any questions, concerns, or feedback, please contact us at <a href="mailto:katiyaransh955@gmail.com">support@yourcompiler.com</a>.</p>

      <p className="last-updated"><strong>Last Updated:</strong> August 26, 2025</p>
      </div>
      <Footer />
    </div>
  );
};

export default Term;
