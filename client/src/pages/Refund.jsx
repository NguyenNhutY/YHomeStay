import Title from "../components/Title";

export default function RefundPolicy() {
  return (
    <div className='min-h-screen bg-[#F7FAFC] px-6 py-20 text-[#0F172A]'>
      <div className='max-w-6xl mx-auto auto margin'>
        <Title
          title1='Booking Changes'
          title2='Refund & Cancellation'
          para='We aim to keep our policies fair, transparent, and flexible for every guest while ensuring room availability and service stability.'
        />

        <div className='mt-12 space-y-12'>
          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Introduction
            </h3>
            <p className='text-gray-600'>
              This Refund & Cancellation Policy outlines how changes,
              cancellations, refunds, and no-show situations are handled for all
              bookings. By completing a reservation, you acknowledge and accept
              the conditions described in this policy. Our goal is to provide a
              fair system that protects both guests and our accommodation
              availability, allowing us to maintain high-quality service for
              everyone.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Free Cancellation Period
            </h3>
            <p className='text-gray-600'>
              Guests may cancel their reservation at no cost up to 5 days prior
              to the scheduled check-in date. Refunds for qualifying
              cancellations are processed automatically through the original
              payment method. Processing times may vary depending on the guest’s
              bank or payment platform, typically ranging from 3 to 10 business
              days.
              <br />
              <br />
              Cancellations made during this free period allow us to reallocate
              rooms efficiently and provide availability for other travelers,
              especially during high-demand seasons.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Standard Late Cancellation
            </h3>
            <p className='text-gray-600'>
              For cancellations made less than 5 days before check-in, a partial
              charge may be applied to cover reserved room blocking,
              housekeeping preparation, and operational commitments already
              arranged for the stay.
              <br />
              <br />
              Depending on seasonal demand, holiday periods, or promotional
              rates, the late-cancellation fee typically ranges between 50% and
              100% of the total booking amount. Exact fee details will be shown
              during the booking process or in the confirmation email.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Peak Season & Special Event Cancellations
            </h3>
            <p className='text-gray-600'>
              During high-demand periods such as national holidays, weekends,
              festivals, or major local events, cancellation conditions may be
              stricter due to limited room availability.
              <br />
              <br />
              In these cases, free cancellation may not apply, or the
              cancellation window may be extended (e.g., 7–14 days before
              check-in). These conditions will always be stated clearly at the
              time of booking.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Non-Refundable Bookings
            </h3>
            <p className='text-gray-600'>
              Certain discounted, promotional, or last-minute rates are
              categorized as non-refundable. Once a booking under these terms is
              confirmed, no refunds are possible in the event of cancellation,
              date changes, or no-shows.
              <br />
              <br />
              These rates offer a reduced price in exchange for a fixed and
              confirmed reservation, making them ideal for guests with firm
              travel plans.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              No-Show Policy
            </h3>
            <p className='text-gray-600'>
              If a guest does not check in on the scheduled date and does not
              inform us in advance, the entire booking is considered a no-show.
              No-shows are fully non-refundable, as the room is held exclusively
              for the guest throughout the first night and cannot be resold.
              <br />
              <br />
              In special cases involving emergencies or documented travel
              disruptions, reconsideration may be possible upon review, but
              approval is not guaranteed.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Date Changes & Modifications
            </h3>
            <p className='text-gray-600'>
              Guests may request changes such as adjusting check-in dates,
              extending stays, or modifying room preferences. All changes are
              subject to room availability and potential rate differences.
              <br />
              <br />
              Modifications requested during the free cancellation period
              typically incur no penalty. Requests made afterward may be subject
              to partial fees or additional charges depending on availability
              and seasonality.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Early Check-Out
            </h3>
            <p className='text-gray-600'>
              If a guest decides to check out earlier than planned, unused
              nights are generally non-refundable. Early departure disrupts room
              inventory planning and may lead to unoccupied nights that cannot
              be rebooked. Exceptions may be granted in exceptional situations
              subject to management approval.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Refund Processing
            </h3>
            <p className='text-gray-600'>
              Approved refunds are issued through the same payment method used
              during booking. Processing times may vary depending on payment
              gateways, financial institutions, and international transaction
              policies.
              <br />
              <br />
              Once processed, you will receive a confirmation email including
              details of the refunded amount, reference ID, and expected
              timeline. Your bank may require additional time to finalize the
              posting, especially for international cards or cross-border
              transactions.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Force Majeure (Unforeseen Events)
            </h3>
            <p className='text-gray-600'>
              In the event of natural disasters, extreme weather, government
              restrictions, transportation shutdowns, or other circumstances
              beyond the guest’s control, cancellation fees may be waived or
              credits may be offered for future stays.
              <br />
              <br />
              Such cases are assessed individually, and supporting documentation
              may be required to process the request.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Travel Insurance Recommendation
            </h3>
            <p className='text-gray-600'>
              We strongly suggest that guests obtain travel insurance to protect
              against unexpected cancellations, medical issues, or travel
              disruptions. Insurance may cover costs that fall outside our
              refund policy, providing additional peace of mind when planning
              your trip.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Policy Updates
            </h3>
            <p className='text-gray-600'>
              We may revise or update this Refund & Cancellation Policy from
              time to time to reflect changes in industry practices, operational
              needs, or applicable laws. Updated versions will always be
              published on this page. Your continued use of our services
              constitutes acceptance of any modifications.
            </p>
          </section>

          <section>
            <h3 className='text-2xl font-semibold text-secondary mb-3'>
              Contact & Support
            </h3>
            <p className='text-gray-600'>
              For assistance regarding cancellations, refunds, or booking
              modifications, our support team is available to help. You may
              reach out via email, phone, or through the support form on our
              website. We aim to respond promptly and provide clear,
              comprehensive guidance for your inquiry.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
