export default function RefundPolicy() {
  return (
    <section className="py-4">
      <div className="gap-12 px-4 mx-auto flex flex-col max-w-screen-xl text-gray-600 md:px-8 lg:flex">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            Refund Policy
          </h3>

          <div className="mt-8 space-y-8">
            <div>
              <p className="leading-relaxed">
                At Briggo, we provide automation services through a
                pay-as-you-go system. Our policy is designed to reflect the
                nature of plans purchases and the resources required to maintain
                these innovative automation solutions.
              </p>
              <p className="mt-4 font-medium text-gray-800">
                All plans and service purchases are considered final, with
                refunds available only in specific exceptional cases or where
                mandated by law.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                When Refunds Are Not Available
              </h4>

              <div className="mt-4">
                <h5 className="text-lg font-medium text-gray-800 mb-2">
                  Standard Exclusions
                </h5>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Changing your mind after purchase</li>
                  <li>Closing your account voluntarily</li>
                  <li>Account suspension due to violation of our terms</li>
                  <li>Plans that remain unused in your account</li>
                  <li>Updates or changes to our features and services</li>
                  <li>User dissatisfaction with results or performance</li>
                  <li>
                    Problems stemming from your device, network, or external
                    platforms
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-medium text-gray-800 mb-2">
                  Service Understanding
                </h5>
                <p className="leading-relaxed mb-2">
                  By purchasing plans, users acknowledge:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Automation technology has inherent limitations</li>
                  <li>
                    Service performance may be affected by third-party platform
                    changes
                  </li>
                  <li>
                    Results may vary based on your specific use case and
                    platform policies
                  </li>
                  <li>Plans are consumed upon use and cannot be reversed</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Exceptional Circumstances
              </h4>
              <p className="leading-relaxed mb-4">
                In rare situations, we may consider providing full or partial
                refunds at our discretion:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <span className="font-medium">Extended Outages:</span> When
                  our platform remains inaccessible for over 72 hours straight
                  due to our internal systems
                </li>
                <li>
                  <span className="font-medium">Payment Mistakes:</span> When we
                  accidentally charge an incorrect amount
                </li>
                <li>
                  <span className="font-medium">Double Billing:</span> When the
                  same purchase is processed multiple times
                </li>
                <li>
                  <span className="font-medium">
                    Critical Functionality Issues:
                  </span>{" "}
                  When major features become unusable for a prolonged duration
                </li>
                <li>
                  <span className="font-medium">Mandatory Compliance:</span>{" "}
                  When consumer protection regulations require it
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                How to Request a Refund
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Submit your request within one week of encountering the issue
                </li>
                <li>
                  Email{" "}
                  <a
                    href="mailto:support@briggo.in"
                    className="text-indigo-600 hover:text-indigo-400 font-medium"
                  >
                    support@briggo.in
                  </a>{" "}
                  with your purchase information and detailed explanation
                </li>
                <li>
                  Our team will review your case and reply within 10 business
                  days
                </li>
                <li>
                  Approved refunds are returned to your original payment method
                  within 15 business days
                </li>
                <li>
                  All refund decisions are made at Briggo's discretion and are
                  final
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Plan Management
              </h4>
              <p className="leading-relaxed">
                You can view your plan details at any time through your account
                dashboard. We recommend purchasing plans in amounts that align
                with your immediate automation needs. Since there are no
                subscriptions or recurring charges, you have complete control
                over when and how many plans you purchase. Plans do not expire
                and remain available until you use them.
              </p>
              <p className="mt-4 leading-relaxed">
                Please note that if your account is terminated for violating our
                terms, any remaining plans or payments are forfeited without
                refund.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Questions?
              </h4>
              <p className="leading-relaxed">
                For any questions about our refund policy or plan system, please
                contact us at{" "}
                <a
                  href="mailto:support@briggo.in"
                  className="text-indigo-600 hover:text-indigo-400 font-medium"
                >
                  support@briggo.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
