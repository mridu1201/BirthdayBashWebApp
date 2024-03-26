import React from 'react';
import './privacy.css'; // Import your Tailwind CSS file here

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-pink-500 text-white py-8">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </header>

      <main className="container mx-auto py-8 px-4">
        <section className="prose max-w-none">
          <h2>Introduction</h2>
          <p>This privacy policy will explain how our organization uses the personal data we collect from you when you use our website.</p>
          <h2>What data do we collect?</h2>
          <p>We collect the following data:</p>
          <ul>
            <li>Personal identification information (Name, email address, etc.)</li>
            <li>Usage data (Pages visited, time spent on the site, etc.)</li>
            <li>Device information (IP address, browser type, etc.)</li>
          </ul>
          <h2>How do we collect your data?</h2>
          <p>We collect data through:</p>
          <ul>
            <li>Forms filled out by you on our website</li>
            <li>Tracking technologies such as cookies and web beacons</li>
            <li>Third-party analytics tools</li>
          </ul>
          <h2>How do we use your data?</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our services</li>
            <li>Communicate with you, either directly or through one of our partners</li>
          </ul>
          <h2>How do we store your data?</h2>
          <p>We securely store your data using industry-standard security measures.</p>
          <h2>What are your data protection rights?</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access, correction, or deletion of your personal data</li>
            <li>Object to or restrict processing of your personal data</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time for data processing</li>
          </ul>
          <h2>Changes to our privacy policy</h2>
          <p>We may update our privacy policy from time to time. Any changes will be posted on this page.</p>
          <h2>Contact us</h2>
          <p>If you have any questions about our privacy policy, please contact us:</p>
          <ul>
            <li>Email: privacy@example.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Privacy Lane, Privacy City, PC 12345</li>
          </ul>
        </section>
      </main>

      <footer className="bg-pink-500 text-white py-4 text-center">
        <p>&copy; 2024 Privacy Policy</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
