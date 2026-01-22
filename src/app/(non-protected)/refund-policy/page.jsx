export default function RefundPolicy() {
  return (
    <section className="py-4">
      <div className="gap-12 px-4 mx-auto flex flex-col max-w-screen-xl text-gray-600 md:px-8 lg:flex">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            Refund Policy
          </h3>
          {/* <p className="mt-3 text-center text-sm text-gray-500">
            Last updated: January 22, 2026
          </p> */}

          <div className="mt-8 space-y-8">
            <div>
              {/* <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Token-Based Payment Model
              </h4> */}
              <p className="leading-relaxed">
                At Briggo, we provide automation services through a
                pay-as-you-go system. Our policy is designed to reflect the
                nature of digital dm purchases and the resources required to
                maintain these innovative automation solutions.
              </p>
              <p className="mt-4 font-medium text-gray-800">
                We do not offer refunds under any circumstances.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Key Policy Points
              </h4>

              <div className="mt-4">
                <h5 className="text-lg font-medium text-gray-800 mb-2">
                  Non-Refundable
                </h5>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>All plans purchases are final and non-refundable</li>
                  {/* <li>Tokens are provided on an as-is basis</li> */}
                  <li>
                    Once plans are purchased, they cannot be refunded or
                    exchanged for cash
                  </li>
                  {/* <li>1 token equals 1 DM automation credit</li> */}
                </ul>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-medium text-gray-800 mb-2">
                  Service Understanding
                </h5>
                <p className="leading-relaxed mb-2">
                  By purchasing plan, users acknowledge:
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
                  <li>Plan are consumed upon use and cannot be reversed</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Policy Overview
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Plan purchases are final sale and cannot be refunded</li>
                <li>
                  Unused plan cannot be exchanged for cash or other services
                </li>
                <li>
                  Users are advised to carefully consider their needs before
                  purchasing plan
                </li>
                <li>
                  There are no subscription fees - you only pay for the plan you
                  purchase
                </li>
                <li>
                  Plan do not expire and remain in your account until used
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Plan Management
              </h4>
              <p className="leading-relaxed">
                You can view your plan balance at any time through your account
                dashboard. We recommend purchasing plan in amounts that align
                with your immediate automation needs. Since there are no
                subscriptions or recurring charges, you have complete control
                over when and how many plan you purchase.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Contact
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
