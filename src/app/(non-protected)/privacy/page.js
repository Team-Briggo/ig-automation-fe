import Link from "next/link";

const Privacy = () => {
  return (
    <div className="p-8 mx-auto max-w-4xl bg-white">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>

      <div className="space-y-6 leading-relaxed text-gray-800">
        <p>
          {`At Briggo Media Tech LLP ("Briggo", "we", "us", or "our"), a limited
          liability partnership registered under the laws of India with its
          registered office in Surat, Gujarat, we take the privacy and security
          of your personal data extremely seriously.`}
        </p>
        <p>
          This Privacy Policy describes how we collect, use, store, share, and
          protect personal information when you:
        </p>

        <ul className="mt-2 ml-8 space-y-1 list-disc">
          <li>
            {`Use our Instagram automation platform and related services (the
            "Services")`}
          </li>
          <li>{`Visit our website at briggo.in (the "Site")`}</li>
          <li>Use our mobile applications</li>
          <li>
            Interact with us through email, support channels, or other means
          </li>
        </ul>
        <p>
          By using our Services, you agree to the collection and use of
          information in accordance with this Privacy Policy. If you do not
          agree with this Privacy Policy, please do not use our Services.
        </p>
        <p>
          This Privacy Policy is incorporated into and forms part of our &nbsp;
          <Link href="/tnc" className="text-blue-500">
            Terms of Service
          </Link>
        </p>

        <h1 className="mb-6 text-3xl font-bold">1. Information We Collect</h1>

        <section className="space-y-6 leading-relaxed text-gray-800">
          <p>
            We collect and process the following categories of personal
            information:
          </p>

          <section>
            <h2 className="mt-8 mb-4 text-2xl font-semibold">
              1.1 Account Information
            </h2>
            <p>When you create an account with Briggo, we collect:</p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Password (encrypted)</li>
              <li>Business name and information</li>
              <li>Profile picture (if provided)</li>
              <li>Account preferences and settings</li>
              <li>
                Instagram, Facebook, and other social media account credentials
                and tokens (for integration purposes)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 mb-4 text-2xl font-semibold">
              1.2 Payment and Financial Information
            </h2>
            <p>To process payments for our Services, we collect:</p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>Credit/debit card information (last four digits only)</li>
              <li>UPI VPA details</li>
              <li>Bank account information (where applicable)</li>
              <li>Billing address</li>
              <li>Payment transaction history</li>
              <li>Invoice details</li>
              <li>Tax identification information (GSTIN, PAN, etc.)</li>
            </ul>
            <p>
              {`Important: We use third-party payment processors (Payment Service
              Providers or "PSPs") to handle payment transactions. Full payment
              card details are collected and stored by our PSPs, not by Briggo
              directly. We only retain limited payment information necessary for
              billing, refunds, and reconciliation purposes.`}
            </p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 text-2xl font-semibold">
              1.3 Contact and Communication Information
            </h2>
            <p>We collect information when you communicate with us:</p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>Support request details and correspondence</li>
              <li>Email communications</li>
              <li>Chat messages and attachments</li>
              <li>Feedback and survey responses</li>
              <li>Event registration information</li>
              <li>Newsletter subscription details</li>
              <li>Contact form submissions</li>
              <li>
                Phone call recordings (with your consent, for quality and
                training purposes)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 mb-4 text-2xl font-semibold">
              1.4 Usage Data and Technical Information
            </h2>
            <p>When you use our Services, we automatically collect:</p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system and device type</li>
              <li>Geographic location (city, state, country)</li>
              <li>Pages visited and features used</li>
              <li>Time spent on pages and features</li>
              <li>Click-through patterns and navigation paths</li>
              <li>Timestamps of actions and events</li>
              <li>Referral source (how you found our Site)</li>
              <li>Session duration and frequency</li>
              <li>API calls and responses</li>
              <li>Error logs and crash reports</li>
              <li>Performance metrics</li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 mb-4 text-2xl font-semibold">
              1.5 Customer Content and Automation Data
            </h2>
            <p>
              When you use our Services to create automation flows and interact
              with your end users:
            </p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>Chat flow content and automation scripts</li>
              <li>Templates and message content</li>
              <li>Subscriber and contact information that you upload</li>
              <li>Conversation logs and message history</li>
              <li>Media files (images, videos, documents)</li>
              <li>Analytics and engagement metrics</li>
              <li>Tags, labels, and custom fields</li>
              <li>Integration data from connected platforms</li>
            </ul>
            <p>
              Important: This is data that YOU collect from YOUR users through
              our platform. We process this data solely on your behalf as a data
              processor, and you remain the data controller. See Section 6 for
              more details.
            </p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 text-2xl font-semibold">
              1.6 Social Media Integration Data
            </h2>
            <p>
              When you connect third-party accounts (Instagram, Facebook,
              WhatsApp, etc.):
            </p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>Account IDs and profile information</li>
              <li>Access tokens and permissions</li>
              <li>Connected pages and accounts</li>
              <li>Follower counts and engagement metrics</li>
              <li>Posts, comments, and messages (as authorized)</li>
              <li>Profile pictures and public information</li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 mb-4 text-2xl font-semibold">
              1.7 Cookies and Similar Technologies
            </h2>
            <p>
              We use cookies, web beacons, pixels, and similar technologies to
              collect:
            </p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>Website usage patterns</li>
              <li>User preferences and settings</li>
              <li>Authentication information</li>
              <li>Analytics data</li>
              <li>Marketing and advertising effectiveness data</li>
            </ul>
            <p>See Section 11 for detailed information about cookies.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 text-2xl font-semibold">
              1.8 Information from Third Parties
            </h2>
            <p>We may receive information about you from:</p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>
                Payment processors (transaction status, payment verification)
              </li>
              <li>
                Social media platforms (profile information, authentication
                data)
              </li>
              <li>Marketing partners and analytics providers</li>
              <li>Business partners and affiliates</li>
              <li>Public databases and data aggregators</li>
              <li>Fraud prevention services</li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 mb-4 text-2xl font-semibold">
              1.9 Sensitive Personal Information
            </h2>
            <p>
              We explicitly request that you DO NOT provide us with sensitive
              personal information, including:
            </p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>
                Aadhaar card numbers or other government-issued identification
                numbers
              </li>
              <li>Financial account passwords or PINs</li>
              <li>Health or medical information</li>
              <li>Biometric or genetic data</li>
              <li>Racial or ethnic origin</li>
              <li>Political opinions or affiliations</li>
              <li>Religious or philosophical beliefs</li>
              <li>Trade union membership</li>
              <li>Sexual orientation or sexual life information</li>
              <li>Criminal history or offenses</li>
            </ul>
            <p>
              If you inadvertently provide such information, please contact us
              immediately at privacy@briggo.in so we can delete it.
            </p>
          </section>
        </section>
      </div>

      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">
          2. How We Collect Information
        </h1>
        <p>We collect information through the following methods:</p>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">2.1 Direct Collection</h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Information you provide when creating an account</li>
            <li>Details you enter when using the Services</li>
            <li>Data you submit through forms on our Site</li>
            <li>Information you provide in support requests</li>
            <li>Content you upload to the platform</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            2.2 Automatic Collection
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              Technical data collected automatically when you use the Services
            </li>
            <li>Cookies and tracking technologies on our Site</li>
            <li>Log files and server data</li>
            <li>Mobile device information when using our apps</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            2.3 Third-Party Sources
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              Integration platforms (Instagram, Facebook, WhatsApp, Google)
            </li>
            <li>Payment service providers</li>
            <li>Analytics and marketing tools</li>
            <li>Fraud prevention services</li>
            <li>Public databases</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            2.4 From Your Users (Customer Content)
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              Information your end users provide through chat interactions
            </li>
            <li>Subscriber data you import into the platform</li>
            <li>Engagement and analytics data from your campaigns</li>
          </ul>
        </section>
      </section>

      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">
          3. How We Use Your Information
        </h1>
        <p>We use your personal information for the following purposes:</p>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            3.1 To Provide and Operate the Services
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Create and manage your account</li>
            <li>Process your transactions and send billing invoices</li>
            <li>Deliver the Instagram automation features</li>
            <li>Enable integrations with third-party platforms</li>
            <li>Store and manage your content and data</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send service-related notifications and updates</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            3.2 To Improve and Develop the Services
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Analyze usage patterns and trends</li>
            <li>Conduct research and development</li>
            <li>Test new features and functionality</li>
            <li>Debug and fix technical issues</li>
            <li>Optimize performance and user experience</li>
            <li>Develop new products and services</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            3.3 To Communicate with You
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Send transactional emails (receipts, confirmations, alerts)</li>
            <li>Provide customer support and respond to requests</li>
            <li>Send service announcements and updates</li>
            <li>Notify you of security issues or policy changes</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Conduct surveys and request feedback</li>
            <li>Send event invitations and reminders</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            3.4 For Marketing and Promotional Purposes
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Send promotional emails and offers (you can opt-out)</li>
            <li>Display targeted advertisements</li>
            <li>Analyze marketing campaign effectiveness</li>
            <li>Conduct market research</li>
            <li>Promote new features and services</li>
            <li>
              {`You can opt-out of marketing communications at any time by
              clicking "unsubscribe" in emails or contacting privacy@briggo.in`}
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            3.5 For Security and Fraud Prevention
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Verify your identity and authentication</li>
            <li>Detect and prevent fraud, abuse, and illegal activity</li>
            <li>Monitor for security threats and vulnerabilities</li>
            <li>Enforce our Terms of Service</li>
            <li>Protect our rights, property, and safety</li>
            <li>Protect the rights and safety of our users and the public</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            3.6 For Legal and Compliance Purposes
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Comply with applicable laws and regulations</li>
            <li>Respond to legal processes (subpoenas, court orders)</li>
            <li>Cooperate with law enforcement and regulatory authorities</li>
            <li>Enforce our agreements and policies</li>
            <li>Resolve disputes and claims</li>
            <li>Maintain records as required by law</li>
            <li>Comply with tax and accounting obligations</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            3.7 For Business Operations
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Manage our relationship with business partners</li>
            <li>Conduct business transactions (mergers, acquisitions)</li>
            <li>Perform internal audits and quality control</li>
            <li>Maintain business records</li>
            <li>Exercise and defend legal rights</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">3.8 With Your Consent</h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              For any other purpose disclosed to you at the time of collection
            </li>
            <li>For purposes you explicitly consent to</li>
          </ul>
        </section>
      </section>

      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">
          4. How We Share Your Information
        </h1>
        <p>
          We do NOT sell your personal information to third parties for
          commercial or advertising purposes.
        </p>
        <p>We share your information only in the following circumstances:</p>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            4.1 Service Providers and Processors
          </h2>
          <p>
            We share data with third-party service providers who perform
            services on our behalf:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              <strong>Infrastructure and Hosting:</strong>
              <ul className="ml-6 space-y-1 list-disc">
                <li>Cloud storage providers (AWS, Google Cloud, etc.)</li>
                <li>Content delivery networks (CDNs)</li>
                <li>Server and infrastructure providers</li>
              </ul>
            </li>
            <li>
              <strong>Payment Processing:</strong>
              <ul className="ml-6 space-y-1 list-disc">
                <li>Payment gateways (Razorpay, Stripe, PayPal, etc.)</li>
                <li>Banking and financial institutions</li>
                <li>Fraud prevention services</li>
              </ul>
            </li>
            <li>
              <strong>Communication Services:</strong>
              <ul className="ml-6 space-y-1 list-disc">
                <li>
                  Email service providers (for sending transactional and
                  marketing emails)
                </li>
                <li>SMS gateway providers</li>
                <li>Push notification services</li>
                <li>Customer support platforms</li>
              </ul>
            </li>
            <li>
              <strong>Analytics and Monitoring:</strong>
              <ul className="ml-6 space-y-1 list-disc">
                <li>Analytics platforms (Google Analytics, Mixpanel, etc.)</li>
                <li>Performance monitoring tools</li>
                <li>Error tracking and debugging services</li>
              </ul>
            </li>
            <li>
              <strong>Marketing and Advertising:</strong>
              <ul className="ml-6 space-y-1 list-disc">
                <li>Marketing automation platforms</li>
                <li>Advertising networks (Google Ads, Facebook Ads)</li>
                <li>Social media platforms</li>
                <li>CRM systems</li>
              </ul>
            </li>
          </ul>
          <p>All service providers are contractually bound to:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Process data only for specified purposes</li>
            <li>Maintain appropriate security measures</li>
            <li>Comply with applicable data protection laws</li>
            <li>Not use your data for their own purposes</li>
          </ul>
          <p>
            [Link to list of current service providers:{" "}
            <a
              href="https://briggo.in/service-providers"
              className="text-blue-600 underline"
            >
              briggo.in/service-providers
            </a>
            ]
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            4.2 Third-Party Integrations
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>WhatsApp</li>
            <li>Google services</li>
            <li>Other messaging and social media platforms</li>
          </ul>
          <p>
            You control which platforms you connect and what data is shared
            through integration settings.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">4.3 Business Partners</h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Joint event organizers and co-marketing partners</li>
            <li>Resellers and distribution partners</li>
            <li>Technology partners and integrations</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            4.4 Professional Advisors
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Lawyers and legal counsel</li>
            <li>Accountants and auditors</li>
            <li>Tax advisors</li>
            <li>Insurance providers</li>
            <li>Business consultants</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            4.5 Corporate Transactions
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Merger, acquisition, or sale of assets</li>
            <li>Reorganization or bankruptcy</li>
            <li>Financing or investment transactions</li>
          </ul>
          <p>
            Your data may be transferred to the acquiring entity. You will be
            notified of any such transfer, and the new entity will be bound by
            this Privacy Policy.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            4.6 Legal Requirements and Protection
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>In response to court orders, subpoenas, or legal processes</li>
            <li>To comply with applicable laws and regulations</li>
            <li>
              To cooperate with law enforcement and regulatory authorities
            </li>
            <li>To enforce our Terms of Service and agreements</li>
            <li>To protect our rights, property, and safety</li>
            <li>
              To protect the rights, property, and safety of our users and the
              public
            </li>
            <li>
              To detect, prevent, or address fraud, security, or technical
              issues
            </li>
          </ul>
          <p>
            Before disclosing information to authorities, we carefully verify
            the legitimacy of requests and disclose only what is legally
            required.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">4.7 With Your Consent</h2>
          <p>
            We may share your information for any other purpose with your
            explicit consent or at your direction.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            4.8 Aggregated and Anonymized Data
          </h2>
          <p>
            We may share aggregated, de-identified, or anonymized data that
            cannot reasonably be used to identify you:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>For research and analytics purposes</li>
            <li>To describe our Services to partners and investors</li>
            <li>For marketing and promotional purposes</li>
            <li>For industry benchmarking</li>
          </ul>
        </section>
      </section>

      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">
          5. Data Processing for Customers
        </h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            5.1 Our Role as Data Processor
          </h2>
          <p>
            {`When you use our Services to collect and manage information about
            your end users, subscribers, or customers (collectively "Subscriber
            Data"):`}
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>You are the Data Controller responsible for Subscriber Data</li>
            <li>We are the Data Processor acting only on your instructions</li>
            <li>
              We process Subscriber Data solely to provide the Services to you
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            5.2 Your Responsibilities as Data Controller
          </h2>
          <p>As the Data Controller, you are responsible for:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Obtaining all necessary consents from your subscribers</li>
            <li>Providing appropriate privacy notices to your subscribers</li>
            <li>
              Ensuring lawful collection and processing of Subscriber Data
            </li>
            <li>Honoring subscriber rights (access, deletion, etc.)</li>
            <li>
              Complying with all applicable data protection laws (GDPR, CCPA,
              Indian laws, etc.)
            </li>
            <li>Implementing appropriate security measures</li>
            <li>Responding to data subject requests from your subscribers</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            5.3 Data Processing Terms
          </h2>
          <p>
            For customers who require a formal Data Processing Agreement (DPA):
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              We offer a standard DPA that incorporates Standard Contractual
              Clauses (where applicable)
            </li>
            <li>Request a DPA by contacting legal@briggo.in</li>
            <li>Enterprise customers may negotiate custom DPA terms</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            5.4 Subscriber Rights and Requests
          </h2>
          <p>
            We have no direct relationship with your subscribers. Any subscriber
            who wishes to:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Access their personal data</li>
            <li>Correct or update their information</li>
            <li>Delete their data</li>
            <li>Object to processing</li>
            <li>Exercise other privacy rights</li>
          </ul>
          <p>
            Should contact YOU directly as the Data Controller. You are
            responsible for responding to such requests within legally required
            timeframes.
          </p>
          <p>
            If a subscriber contacts us directly, we will refer them to you.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">5.5 Sub-Processors</h2>
          <p>
            We use sub-processors (third-party service providers) to help
            provide the Services. A list of current sub-processors is available
            at{" "}
            <a
              href="https://briggo.in/sub-processors"
              className="text-blue-600 underline"
            >
              briggo.in/sub-processors
            </a>
            .
          </p>
          <p>We will:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              Notify you of any new sub-processors (at least 30 days in advance
              where possible)
            </li>
            <li>
              Ensure all sub-processors have appropriate data protection
              agreements
            </li>
            <li>Remain liable for sub-processor compliance</li>
          </ul>
        </section>
      </section>

      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">
          6. International Data Transfers
        </h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            6.1 Where Your Data May Be Stored
          </h2>
          <p>Your personal data may be stored and processed in:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>India (our primary data centers and operations)</li>
            <li>
              Other countries where our service providers maintain facilities
            </li>
          </ul>
          <p>
            By using our Services, you acknowledge and consent to the transfer
            of your data to countries that may have different data protection
            laws than your jurisdiction.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            6.2 Transfers Outside India
          </h2>
          <p>
            When we transfer data outside India, we implement appropriate
            safeguards:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              Standard Contractual Clauses (SCCs) approved by regulatory
              authorities
            </li>
            <li>Adequacy decisions (where applicable)</li>
            <li>Binding Corporate Rules (where applicable)</li>
            <li>Certifications and codes of conduct</li>
            <li>Your explicit consent (where required)</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            6.3 Your Rights Regarding Transfers
          </h2>
          <p>
            If you have concerns about international data transfers, contact us
            at privacy@briggo.in to discuss available options.
          </p>
        </section>
      </section>
      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">7. Data Retention</h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            7.1 Active Account Data
          </h2>
          <p>We retain your personal data for as long as:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Your account remains active</li>
            <li>Necessary to provide the Services</li>
            <li>
              Required to fulfill the purposes described in this Privacy Policy
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            7.2 After Account Termination
          </h2>
          <p>When you terminate your account:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Active system data: Deleted within 90 days</li>
            <li>Backup systems: Data may persist up to 180 days</li>
            <li>Legal and compliance data: Retained as required by law</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            7.3 Specific Retention Periods
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              Account Information: Duration of account + 90 days (or longer if
              required by law)
            </li>
            <li>
              Financial Records: Minimum 7 years (as required by Indian tax and
              accounting laws)
            </li>
            <li>
              Communication Records: Duration of account + 1 year (or longer if
              needed to resolve disputes)
            </li>
            <li>
              Technical Logs: 12-24 months (for security and debugging purposes)
            </li>
            <li>
              Marketing Data: Until you opt-out or request deletion (whichever
              is earlier)
            </li>
            <li>
              Legal Hold Data: Duration of legal matter + applicable statute of
              limitations
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            7.4 Anonymized and Aggregated Data
          </h2>
          <p>We may retain anonymized or aggregated data indefinitely for:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Analytics and research</li>
            <li>Product development</li>
            <li>Business intelligence</li>
          </ul>
          <p>Such data cannot be used to identify you.</p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">7.5 Legal Obligations</h2>
          <p>We may retain data longer than specified periods when:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Required by applicable law or regulation</li>
            <li>Necessary to comply with legal obligations</li>
            <li>Required for litigation or dispute resolution</li>
            <li>Needed to protect rights, safety, or property</li>
            <li>Necessary to enforce our agreements</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            7.6 Data Deletion Requests
          </h2>
          <p>
            To request early deletion of your data, contact privacy@briggo.in.
            We will delete your data as soon as reasonably possible, subject to:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Technical feasibility</li>
            <li>Legal retention requirements</li>
            <li>Legitimate business needs</li>
            <li>Backup and disaster recovery cycles (up to 180 days)</li>
          </ul>
        </section>
      </section>

      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">8. Your Privacy Rights</h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            8.1 Rights Available to All Users
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              Access: You can request access to your personal data we hold.
            </li>
            <li>
              Correction: You can request correction of inaccurate or incomplete
              data.
            </li>
            <li>
              Deletion: You can request deletion of your personal data (subject
              to legal retention requirements).
            </li>
            <li>
              Data Portability: You can request a copy of your data in a
              structured, machine-readable format.
            </li>
            <li>
              Opt-Out of Marketing: You can opt-out of marketing communications
              at any time.
            </li>
            <li>
              Account Settings: You can update your account information and
              preferences directly in your account settings.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            8.2 How to Exercise Your Rights
          </h2>
          <p>To exercise any of these rights:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Email: privacy@briggo.in</li>
            <li>{`Subject Line: "Privacy Rights Request - [Type of Request]"`}</li>
            <li>
              Include:
              <ul className="ml-6 space-y-1 list-disc">
                <li>Your full name</li>
                <li>Email address associated with your account</li>
                <li>Account ID (if applicable)</li>
                <li>Specific request details</li>
                <li>
                  Proof of identity (we may request additional verification)
                </li>
              </ul>
            </li>
            <li>
              Response Time: We will respond within:
              <ul className="ml-6 space-y-1 list-disc">
                <li>30 days for most requests</li>
                <li>
                  45 days for complex requests (with notification of extension)
                </li>
                <li>
                  As required by applicable law (e.g., 1 month for GDPR
                  requests)
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            8.3 Identity Verification
          </h2>
          <p>
            To protect your privacy, we will verify your identity before
            processing requests. We may request:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Government-issued ID</li>
            <li>Confirmation of email ownership</li>
            <li>Answer to security questions</li>
            <li>Other verification methods</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            8.4 Limitations on Rights
          </h2>
          <p>Your rights may be limited or denied if:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Required by law or legal obligation</li>
            <li>Necessary for legal claims or defense</li>
            <li>Would adversely affect the rights of others</li>
            <li>Request is manifestly unfounded or excessive</li>
            <li>Data has been anonymized and cannot be re-identified</li>
          </ul>
          <p>We will explain the reason for any limitation or denial.</p>
        </section>
      </section>

      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">
          9. Cookies and Tracking Technologies
        </h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">9.1 What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit
            our Site. They help us provide, protect, and improve our Services.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            9.2 Types of Cookies We Use
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              Essential Cookies (Always Active):
              <ul className="ml-6 space-y-1 list-disc">
                <li>Authentication and security</li>
                <li>Account functionality</li>
                <li>Load balancing</li>
                <li>Fraud prevention</li>
              </ul>
              <p>
                These are necessary for the Site to function and cannot be
                disabled.
              </p>
            </li>
            <li>
              Functional Cookies (Always Active):
              <ul className="ml-6 space-y-1 list-disc">
                <li>Remember your preferences</li>
                <li>Provide enhanced functionality</li>
                <li>Remember language settings</li>
              </ul>
            </li>
            <li>
              Analytics Cookies (Can Be Disabled):
              <ul className="ml-6 space-y-1 list-disc">
                <li>Google Analytics</li>
                <li>Usage pattern analysis</li>
                <li>Performance monitoring</li>
                <li>Error tracking</li>
              </ul>
            </li>
            <li>
              Marketing Cookies (Can Be Disabled):
              <ul className="ml-6 space-y-1 list-disc">
                <li>Facebook Pixel</li>
                <li>Google Ads</li>
                <li>LinkedIn Insight</li>
                <li>Retargeting campaigns</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            9.3 Other Tracking Technologies
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              Web Beacons/Pixels: Small graphic images that track email opens
              and web page visits.
            </li>
            <li>
              Local Storage: Browser storage for preferences and temporary data.
            </li>
            <li>
              Session Storage: Temporary storage cleared when you close your
              browser.
            </li>
            <li>
              SDKs (in Mobile Apps): Software development kits for analytics and
              functionality.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            9.4 Third-Party Cookies
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Google Analytics</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Other analytics and advertising partners</li>
          </ul>
          <p>
            These third parties have their own privacy policies governing cookie
            use.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">9.5 Cookie Management</h2>
          <p>
            Browser Settings: You can control cookies through your browser
            settings:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Block all cookies</li>
            <li>Block third-party cookies</li>
            <li>Delete cookies</li>
            <li>Receive notifications when cookies are set</li>
          </ul>
          <p>
            Note: Disabling essential cookies may affect Site functionality.
          </p>
          <p>Opt-Out Tools:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Google Analytics Opt-Out: tools.google.com/dlpage/gaoptout</li>
            <li>
              Network Advertising Initiative: optout.networkadvertising.org
            </li>
            <li>Digital Advertising Alliance: optout.aboutads.info</li>
            <li>
              Email Tracking: To opt-out of email tracking pixels:
              <ul className="ml-6 space-y-1 list-disc">
                <li>Disable images in your email client</li>
                <li>Unsubscribe from marketing emails</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            9.6 Do Not Track Signals
          </h2>
          <p>
            {`Our Site does not currently respond to "Do Not Track" browser
            signals. However, you can use the opt-out tools above to control
            tracking.`}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">9.7 Cookie Policy</h2>
          <p>
            For detailed information, see our Cookie Policy at
            [briggo.in/cookie-policy]
          </p>
        </section>
      </section>

      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">
          10. Third-Party Services and Links
        </h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            10.1 Third-Party Websites and Services
          </h2>
          <p>
            Our Services may contain links to third-party websites, services,
            and applications:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Social media platforms</li>
            <li>Payment processors</li>
            <li>Integration partners</li>
            <li>Resource websites</li>
            <li>Partner sites</li>
          </ul>
          <p>We are not responsible for:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Privacy practices of third-party sites</li>
            <li>Content on third-party sites</li>
            <li>Security of third-party sites</li>
            <li>Terms of use of third-party sites</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            10.2 Third-Party Privacy Policies
          </h2>
          <p>
            Third-party services have their own privacy policies. We encourage
            you to review:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Instagram/Facebook: facebook.com/privacy</li>
            <li>Google: google.com/privacy</li>
            <li>WhatsApp: whatsapp.com/privacy</li>
            <li>{`Payment processors' privacy policies`}</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            10.3 Social Media Plugins
          </h2>
          <p>
            Our Site may use social media plugins (Facebook Like, Twitter Share,
            etc.). These plugins may:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Set cookies</li>
            <li>Track your browsing behavior</li>
            <li>Collect information about your visit</li>
          </ul>
          <p>
            We do not control these plugins. Review the privacy policies of
            respective platforms.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            10.4 Integration Risks
          </h2>
          <p>
            When you connect third-party accounts (Instagram, Facebook, etc.) to
            our Services:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              You grant us permission to access certain data from those
              platforms
            </li>
            <li>
              {`Those platforms' privacy policies govern what they share with us`}
            </li>
            <li>
              You can revoke access at any time through platform settings or our
              account settings
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">10.5 No Endorsement</h2>
          <p>
            Links to third-party sites do not constitute endorsement by Briggo.
          </p>
        </section>
      </section>
      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">11. {`Children's`} Privacy</h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">11.1 Age Restriction</h2>
          <p>
            Our Services are NOT intended for individuals under 18 years of age.
          </p>
          <p>
            We do not knowingly collect personal information from anyone under
            18.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            11.2 Parental Responsibility
          </h2>
          <p>We encourage parents and guardians to:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>{`Monitor their children's online activities`}</li>
            <li>Teach children about online privacy</li>
            <li>Use parental control tools</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            11.3 Accidental Collection
          </h2>
          <p>
            If we learn that we have collected personal information from someone
            under 18:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>We will delete that information promptly</li>
            <li>We will terminate the account</li>
            <li>We will not use the information for any purpose</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">11.4 Parental Rights</h2>
          <p>
            If you are a parent or guardian and believe your child under 18 has
            provided us with personal information:
          </p>
          <p>Contact us immediately at: privacy@briggo.in</p>
          <p>Include:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>{`Child's name and email`}</li>
            <li>Your relationship to the child</li>
            <li>Proof of parental authority</li>
          </ul>
          <p>
            We will investigate and take appropriate action within 48 hours.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            11.5 No Sale of Minor Data
          </h2>
          <p>
            We do not sell personal information of minors under 18 (nor do we
            sell any personal information).
          </p>
        </section>
      </section>
      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">12. Data Security</h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            12.1 Security Measures
          </h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your personal data:
          </p>
          <h3 className="mt-2 text-xl font-semibold">Technical Safeguards:</h3>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Encryption in transit (TLS/SSL)</li>
            <li>Encryption at rest for sensitive data</li>
            <li>Secure authentication mechanisms</li>
            <li>Regular security updates and patches</li>
            <li>Firewalls and intrusion detection systems</li>
            <li>Access controls and authentication</li>
            <li>Secure APIs and integrations</li>
          </ul>

          <h3 className="mt-2 text-xl font-semibold">
            Organizational Safeguards:
          </h3>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Employee training on data protection</li>
            <li>Background checks for employees with data access</li>
            <li>Confidentiality agreements with staff and contractors</li>
            <li>Access limited to need-to-know basis</li>
            <li>Regular security audits and assessments</li>
            <li>Incident response procedures</li>
            <li>Vendor security assessments</li>
          </ul>

          <h3 className="mt-2 text-xl font-semibold">Physical Safeguards:</h3>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Secure data center facilities (via hosting providers)</li>
            <li>Physical access controls</li>
            <li>Environmental controls</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">12.2 Payment Security</h2>
          <p>
            Payment information is processed by PCI-DSS compliant payment
            processors. We do not store full payment card details on our
            servers.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            12.3 Limitations of Security
          </h2>
          <p>
            Despite our efforts, no security measures are 100% secure. We cannot
            guarantee:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Absolute security of data transmission over the internet</li>
            <li>Prevention of all unauthorized access</li>
            <li>Protection against all security breaches</li>
          </ul>
          <p>
            We do not warrant or represent that your data will be protected
            against loss, misuse, or alteration by third parties.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            12.4 Your Security Responsibilities
          </h2>
          <p>You are responsible for:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Maintaining confidentiality of your password</li>
            <li>Using strong, unique passwords</li>
            <li>Not sharing your account credentials</li>
            <li>Logging out after using shared devices</li>
            <li>Keeping your contact information current</li>
            <li>Enabling two-factor authentication (where available)</li>
            <li>Reporting suspicious activity immediately</li>
            <li>Installing security updates on your devices</li>
            <li>Using secure networks when accessing the Services</li>
          </ul>
          <p>
            If you suspect unauthorized access to your account, immediately:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Change your password</li>
            <li>Contact us at security@briggo.in</li>
            <li>Review recent account activity</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            12.5 Third-Party Security
          </h2>
          <p>We cannot control or guarantee the security practices of:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              Third-party platforms you integrate (Instagram, Facebook, etc.)
            </li>
            <li>Payment processors</li>
            <li>Your own devices and networks</li>
            <li>{`Your end users' devices and networks`}</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            12.6 Security Questions
          </h2>
          <p>
            If you have questions about the security of your personal data,
            contact security@briggo.in.
          </p>
        </section>
      </section>

      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">
          13. Data Breach Notification
        </h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">13.1 Our Commitment</h2>
          <p>
            We take data breaches seriously and have incident response
            procedures in place.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">13.2 What We Will Do</h2>
          <p>
            In the event of a data breach that affects your personal
            information, we will:
          </p>
          <h3 className="mt-2 text-xl font-semibold">
            Immediate Actions (Within 24-48 Hours):
          </h3>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Contain and investigate the breach</li>
            <li>Assess the scope and impact</li>
            <li>Take steps to prevent further unauthorized access</li>
            <li>Preserve evidence</li>
          </ul>
          <h3 className="mt-2 text-xl font-semibold">
            Notification (As Required by Law):
          </h3>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              To Affected Users: Within 72 hours of discovering the breach (or
              as required by applicable law)
            </li>
            <li>
              To Authorities: As required by Indian law, GDPR, or other
              applicable regulations
            </li>
            <li>To Partners: If their data is affected</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            13.3 What We Will Tell You
          </h2>
          <p>Our breach notification will include:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Description of what happened</li>
            <li>Types of data involved</li>
            <li>Approximate number of affected individuals</li>
            <li>Potential consequences</li>
            <li>{`Measures we've taken to address the breach`}</li>
            <li>Steps you can take to protect yourself</li>
            <li>Contact information for questions</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            13.4 How We Will Notify You
          </h2>
          <p>We will notify you via:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Email to your registered address</li>
            <li>In-app notification</li>
            <li>Notice on our website</li>
            <li>Other appropriate methods as required by law</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            13.5 Your Responsibilities After a Breach
          </h2>
          <p>If we notify you of a breach:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Change your password immediately</li>
            <li>Monitor your accounts for suspicious activity</li>
            <li>Be alert for phishing attempts</li>
            <li>Review your account activity</li>
            <li>Consider enabling additional security measures</li>
            <li>Follow our recommended protective actions</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            13.6 Reporting Security Issues
          </h2>
          <p>If you discover a security vulnerability:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Email: security@briggo.in</li>
            <li>
              Include:
              <ul className="ml-6 space-y-1 list-disc">
                <li>Description of the vulnerability</li>
                <li>Steps to reproduce (if applicable)</li>
                <li>Potential impact</li>
                <li>Your contact information</li>
              </ul>
            </li>
          </ul>
          <p>
            We appreciate responsible disclosure and will investigate all
            reports promptly.
          </p>
        </section>
      </section>
      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">
          14. Changes to This Privacy Policy
        </h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">14.1 Right to Modify</h2>
          <p>
            We reserve the right to update or change this Privacy Policy at any
            time to reflect:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Changes in our Services or business practices</li>
            <li>Legal or regulatory requirements</li>
            <li>Technological developments</li>
            <li>Industry best practices</li>
            <li>Customer feedback</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            14.2 Notice of Material Changes
          </h2>
          <p>
            For material changes that significantly affect your privacy rights:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              We will notify you at least 30 days in advance via:
              <ul className="ml-6 space-y-1 list-disc">
                <li>Email to your registered address</li>
                <li>Prominent notice on our Site</li>
                <li>In-app notification</li>
              </ul>
            </li>
            <li>We will clearly explain what has changed</li>
            <li>We will provide the effective date of changes</li>
          </ul>
          <p>Material changes include:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>New purposes for data collection or use</li>
            <li>Sharing data with new categories of third parties</li>
            <li>Significant changes to your rights</li>
            <li>Changes to data retention periods</li>
            <li>New types of data collected</li>
            <li>Changes to security practices</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            14.3 Notice of Non-Material Changes
          </h2>
          <ul className="ml-6 space-y-1 list-disc">
            <li>
              For non-material changes (clarifications, minor updates,
              corrections):
            </li>
            <ul className="ml-6 space-y-1 list-disc">
              <li>
                {`We will update the "Last Updated" date at the top of this policy`}
              </li>
              <li>Changes will be effective immediately upon posting</li>
              <li>We may (but are not required to) notify you</li>
            </ul>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            14.4 Your Acceptance of Changes
          </h2>
          <p>
            By continuing to use the Services after changes take effect, you
            accept the updated Privacy Policy.
          </p>
          <p>If you do not agree to the changes:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Stop using the Services</li>
            <li>Close your account</li>
            <li>Contact us with concerns at privacy@briggo.in</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            14.5 Reviewing Changes
          </h2>
          <p>We encourage you to:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Review this Privacy Policy periodically</li>
            <li>{`Check the "Last Updated" date`}</li>
            <li>Read update notifications carefully</li>
            <li>Contact us with questions</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">14.6 Prior Versions</h2>
          <p>
            We may maintain prior versions of this Privacy Policy for your
            reference. Request previous versions by emailing privacy@briggo.in.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">14.7 Effective Date</h2>
          <p>
            This Privacy Policy was last updated on the date shown at the top of
            this document and is effective as of that date.
          </p>
        </section>
      </section>
      <section className="mt-8 mb-6">
        <h1 className="mb-4 text-3xl font-bold">15. Contact Us</h1>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            15.1 General Privacy Inquiries
          </h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or our privacy practices:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Email: privacy@briggo.in</li>
            <li>{`Subject Line: "Privacy Inquiry - [Brief Description]"`}</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">15.2 Security Issues</h2>
          <p>For security-related concerns or to report vulnerabilities:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Email: security@briggo.in</li>
            <li>{`Subject Line: "Security Issue - [Brief Description]"`}</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            15.3 Data Subject Rights Requests
          </h2>
          <p>
            To exercise your privacy rights (access, deletion, correction,
            etc.):
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Email: privacy@briggo.in</li>
            <li>{`Subject Line: "Privacy Rights Request - [Type of Request]"`}</li>
            <li>
              Include:
              <ul className="ml-6 space-y-1 list-disc">
                <li>Your full name</li>
                <li>Email address associated with your account</li>
                <li>Account ID (if applicable)</li>
                <li>Specific request details</li>
                <li>Verification information</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            15.4 Legal and Compliance
          </h2>
          <p>
            For legal notices, law enforcement requests, or compliance matters:
          </p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Email: legal@briggo.in</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-2xl font-semibold">
            15.5 General Customer Support
          </h2>
          <p>For non-privacy-related questions:</p>
          <ul className="ml-6 space-y-1 list-disc">
            <li>Email: contact@briggo.com or support@briggo.com</li>
            <li>Website: https://briggo.in/support</li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Privacy;
