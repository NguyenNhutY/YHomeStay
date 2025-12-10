import Title from "../components/Title";

export default function TermsOfService() {
  return (
    <div className='min-h-screen bg-[#F7FAFC] px-6 py-20 text-[#0F172A]'>
      <div className='max-w-4xl mx-auto'>
        <Title
          title1='Legal Agreement'
          title2='Terms of Service'
          para='By booking or using our services, you agree to the full set of terms below. These policies protect guests, hosts, property owners, and ensure a safe, transparent, and enjoyable stay for everyone.'
        />

        <div className='space-y-14 mt-12'>
          {/* SECTION 1 */}
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              1. Acceptance of Terms
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              By accessing our website, browsing listings, submitting inquiries,
              or making a reservation, you confirm your understanding and
              acceptance of these Terms of Service. These terms apply to all
              users, including guests, visitors, and any party interacting with
              our platform. If you do not agree with any part of the Terms, you
              must discontinue use of the website and refrain from booking our
              services.
            </p>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              2. Booking, Payment & Confirmation
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              All bookings are subject to availability. Guests must provide
              truthful personal details and valid contact information. Some
              reservations may require upfront deposits, and peak-season stays
              may require full payment upon booking. We reserve the right to
              cancel any reservation found to contain fraudulent, incomplete, or
              suspicious data. Payment methods may include bank transfer, credit
              card, or third-party platforms.
            </p>
            <p className='text-gray-600 leading-relaxed mt-2'>
              A booking is considered confirmed only after payment has been
              successfully processed and the guest receives an official
              confirmation email or message. Rates are subject to change based
              on demand, holidays, or local regulations.
            </p>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              3. Guest Obligations & House Rules
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              Guests agree to use the property responsibly and respect all rules
              provided before or during the stay. This includes noise
              restrictions, visitor limits, sanitation guidelines, and proper
              use of appliances and amenities. Illegal activities— including
              drug use, gambling, or unauthorized parties—are strictly forbidden
              and may result in immediate eviction without refund.
            </p>
            <p className='text-gray-600 leading-relaxed mt-2'>
              Any damages, missing items, or violation of house policies may
              incur additional charges. The guest agrees to notify us
              immediately of any accidents, maintenance issues, or safety
              concerns.
            </p>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              4. Check-in, Check-out & Stay Extensions
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              Standard check-in and check-out times vary by location and will be
              clearly stated in the booking details. Late check-out may incur
              extra charges unless approved in advance. Guests wishing to extend
              their stay must request availability early; extensions are not
              guaranteed and depend on upcoming reservations.
            </p>
          </section>

          {/* SECTION 5 */}
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              5. Refunds, Cancellations & No-Show Policy
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              Cancellation terms depend on the rate type, season, and specific
              property policies. Refund eligibility may range from fully
              refundable to non-refundable. No-shows are treated as
              cancellations with no refund. We reserve the right to refuse
              refund requests that violate the stated timelines or guidelines.
            </p>
            <p className='text-gray-600 leading-relaxed mt-2'>
              In exceptional events such as natural disasters or government
              restrictions, alternative solutions such as rescheduling may be
              offered at our discretion.
            </p>
          </section>

          {/* SECTION 6 */}
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              6. Privacy & Data Handling
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              We collect basic personal information for booking and
              identification purposes. Information is stored securely and never
              sold to third parties. However, guest data may be shared with
              local authorities when required by law, especially for tourism
              reporting, tax compliance, or public safety.
            </p>
          </section>

          {/* SECTION 7 */}
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              7. Safety, Security & Liability Limitations
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              Guests are responsible for securing their belongings. We are not
              liable for theft, lost items, accidents, or injuries resulting
              from negligence, misuse of facilities, or unforeseeable
              circumstances. Force majeure events such as storms, power outages,
              or local infrastructure failures are beyond our control, and
              associated inconveniences are not eligible for compensation.
            </p>
          </section>

          {/* SECTION 8 */}
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              8. Use of Website & Intellectual Property
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              All content, designs, images, texts, and branding on this website
              are protected by intellectual property law. Users may not
              reproduce, copy, extract, or redistribute any content without
              written permission. Unauthorized use may result in legal action.
            </p>
          </section>

          {/* SECTION 9 */}
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              9. Modifications to Terms
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              We may revise or update these Terms at any time. Changes take
              effect immediately upon being posted on this page. Guests are
              responsible for reviewing the latest version before booking or
              staying.
            </p>
          </section>

          {/* SECTION 10 */}
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-3'>
              10. Contact & Support
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              For clarification, complaints, or assistance regarding these
              Terms, guests may contact our support team through email, phone,
              or the contact form on the website. Responses are typically
              provided within 24–48 hours depending on workload.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
