import Title from "../components/Title";

export default function PrivacyPolicy() {
  return (
    <div className=' min-h-screen bg-[#F7FAFC] px-6 py-20 text-[#0F172A]'>
      <div className='max-w-6xl mx-auto auto margin'>
        <Title
          title1='Privacy & Security'
          title2='Privacy Policy'
          para='Your personal information is carefully protected and only used to enhance your booking and stay experience.'
        />

        <div className='mt-10 space-y-12'>
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              Introduction
            </h2>
            <p className='text-gray-600'>
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website, make a
              booking, or interact with any of our services. We are committed to
              protecting your privacy and ensuring that your personal
              information is handled responsibly, transparently, and in
              accordance with applicable data protection laws. By using our
              services, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              Information We Collect
            </h2>
            <p className='text-gray-600'>
              We collect several different types of information to provide and
              improve our services. This includes personal details such as your
              full name, email address, phone number, date of birth,
              nationality, and identification documents when required for legal
              verification. We may also collect booking history, payment
              information, preferences related to room types, amenities, dietary
              requirements, and communication records between you and our
              support team.
              <br />
              <br />
              In addition, our website automatically collects technical data
              such as IP address, browser type, device characteristics,
              referring URLs, and browsing behavior. These analytics help us
              maintain platform security, troubleshoot issues, and enhance
              overall user experience.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              How We Use Your Data
            </h2>
            <p className='text-gray-600'>
              The primary purpose of collecting your data is to ensure a smooth,
              personalized, and secure booking experience. Your information
              helps us confirm reservations, customize room arrangements based
              on your preferences, facilitate payment processing, and provide
              timely support when needed.
              <br />
              <br />
              We may also use non-identifiable data to analyze service
              performance, enhance internal operations, develop new features,
              and optimize our website’s functionality. Marketing emails or
              promotional messages are only sent if you have consented to
              receive them, and you may unsubscribe at any time.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              Data Storage and Protection
            </h2>
            <p className='text-gray-600'>
              All personal data is encrypted both in transit and at rest using
              industry-standard security protocols. We implement strict access
              controls, routinely update security systems, and conduct internal
              reviews to prevent unauthorized access, alteration, or disclosure
              of your information.
              <br />
              <br />
              We retain your data only as long as necessary to fulfill the
              purposes outlined in this policy unless a longer retention period
              is legally required. Once data is no longer needed, it is securely
              deleted or anonymized to prevent re-identification.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              Cookies and Tracking Technologies
            </h2>
            <p className='text-gray-600'>
              Our website uses cookies and similar technologies to improve
              functionality and personalize your browsing experience. These
              include essential cookies for navigation, analytical cookies for
              performance measurement, and preference cookies that remember your
              settings. You may modify your browser settings to disable cookies
              at any time, though certain features may become limited.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              Third-Party Sharing
            </h2>
            <p className='text-gray-600'>
              We do not sell or trade your personal information. However, we may
              share data with trusted partners who assist with payment
              processing, identity verification, website hosting, or customer
              support. These partners are contractually obligated to handle your
              data securely and only for the specific purpose required.
              <br />
              <br />
              In rare cases, we may disclose information if required by law,
              court order, or to protect the safety and rights of our customers,
              staff, and property.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              Your Rights
            </h2>
            <p className='text-gray-600'>
              You have the right to access, update, correct, or delete your
              personal information at any time. You may request a copy of the
              data we store about you, withdraw consent for marketing
              communications, or limit how your information is processed. If you
              believe your data has been mishandled, you may also file a
              complaint with the appropriate data protection authority.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              International Data Transfers
            </h2>
            <p className='text-gray-600'>
              Depending on your location and booking destination, your data may
              be transferred to servers located outside your country. All
              transfers are conducted in compliance with international privacy
              standards to ensure your information remains protected regardless
              of geographical boundaries.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              Updates to This Policy
            </h2>
            <p className='text-gray-600'>
              We may update this Privacy Policy periodically to reflect changes
              in technology, legal requirements, or service improvements. Any
              updates will be posted on this page with a revised effective date.
              Continued use of our services after updates implies your
              acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              Contact Us
            </h2>
            <p className='text-gray-600'>
              If you have questions, concerns, or requests related to your
              personal data, you are welcome to reach out to our privacy support
              team. We aim to respond to all inquiries in a timely and
              transparent manner.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
