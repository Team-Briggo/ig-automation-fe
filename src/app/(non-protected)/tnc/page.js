import React from "react";

const TnC = () => {
  return (
    <div className="p-8 mx-auto max-w-4xl bg-white">
      <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>

      <div className="space-y-6 leading-relaxed text-gray-800">
        <p>
          {`These Terms of Service constitute a legally binding agreement between
          you and Briggo Media Tech LLP ("Briggo Media Tech LLP", "Briggo",
          "we," "our" or "us"), a limited liability partnership registered under
          the laws of India with its registered office in Surat, Gujarat,
          governing your use of our products, services, information, contents
          and tools, mobile application (the "App"), and website (the "Site" and
          collectively with the foregoing, the "Services").`}
        </p>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            AGREEMENT TO TERMS
          </h2>
          <p>
            {`YOU ACKNOWLEDGE AND AGREE THAT, BY CLICKING ON THE "I AGREE" OR
            SIMILAR BUTTON, REGISTERING FOR AN ACCOUNT, DOWNLOADING THE APP OR
            ANY APP UPGRADES, USING THE APP ON YOUR MOBILE DEVICE, VISITING THE
            SITE, ACCESSING OR USING THE SERVICES, OR PARTICIPATING IN AN
            ELECTRONIC CONVERSATION FACILITATED BY THE SERVICES (ANY SUCH
            PARTICIPANT, A "CONVERSATION PARTICIPANT"), YOU ARE INDICATING THAT
            YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY THESE TERMS OF
            SERVICE AND OUR PRIVACY POLICY, WHETHER OR NOT YOU HAVE REGISTERED
            VIA THE SITE OR THE APP. IF YOU DO NOT AGREE TO THESE TERMS OF
            SERVICE, THEN YOU HAVE NO RIGHT TO ACCESS OR USE THE SERVICES.`}
          </p>
          <p className="mt-4">
            {`These Terms of Service apply to all users of the Services, including
            without limitation browsers, vendors, customers, merchants,
            consumers, content contributors, Business Owners (as defined below)
            and Agencies (as defined below). These Terms of Service are
            effective as of the date you first click "I agree" (or similar
            button or checkbox) or use or access the Services, whichever is
            earlier.`}
          </p>
          <p className="mt-4">
            {`If you accept or agree to these Terms of Service on behalf of your
            employer or another legal entity, you represent and warrant that:
            (i) you have full legal authority to bind your employer or such
            entity to these Terms of Service; (ii) you have read and understand
            these Terms of Service; and (iii) you agree to these Terms of
            Service on behalf of the party that you represent. In such event,
            "you" and "your" will refer and apply to your employer or such other
            legal entity.`}
          </p>
          <p className="mt-4">
            {`Any personal data you submit to us or which we collect about you is
            governed by our Privacy Policy ("Privacy Policy"), available at
            https://briggo.in/privacy. You acknowledge that by using the
            Services, you have reviewed the Privacy Policy. The Privacy Policy
            is incorporated by reference into these Terms of Service and
            together form and are hereinafter referred to as this "Agreement."`}
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">1. OUR SERVICES</h2>
          <p>
            Briggo provides a platform that enables businesses and individuals
            to create automated chat flows for Instagram and other messaging
            platforms. Our Services include tools for automation, customer
            engagement, and business communication across various social media
            and third-party platforms.
          </p>
          <p className="mt-4 font-semibold">Service Description:</p>

          <div className="mt-2 ml-4 space-y-4">
            <div>
              <p className="mb-2 font-semibold">1. Automated Flow Creation</p>
              <p className="mb-2 ml-4">
                The Platform provides tools and interfaces that enable users to:
              </p>
              <ul className="ml-8 space-y-1 list-disc">
                <li>
                  Design, configure, and customize automated conversation flows
                  and message sequences
                </li>
                <li>
                  Create conditional logic and branching pathways based on user
                  inputs and behaviors
                </li>
                <li>
                  Establish trigger-based responses to specific user actions or
                  keywords
                </li>
                <li>
                  Configure and manage automated reply systems that operate
                  without manual intervention
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-2 font-semibold">
                2. Social Media Platform Integration
              </p>
              <p className="mb-2 ml-4">
                Briggo facilitates integration with third-party social media
                platform, including but not limited to:
              </p>
              <ul className="ml-8 space-y-1 list-disc">
                <li>
                  <span className="font-medium">Instagram:</span> Connection to
                  Instagram Business and Creator accounts for automated
                  communication features
                </li>
              </ul>
              <p className="mt-2 ml-4 italic">
                Users acknowledge that integration with third-party platforms is
                subject to the terms of service, API limitations, and policies
                of those respective platforms. Briggo operates within the
                parameters established by these third-party services and cannot
                guarantee uninterrupted access if platform policies change.
              </p>
            </div>

            <div>
              <p className="mb-2 font-semibold">3. Automation Features</p>

              <div className="ml-4 space-y-3">
                <div>
                  <p className="mb-1 font-medium">a) Comment Automation</p>
                  <ul className="ml-8 space-y-1 list-disc">
                    <li>
                      Automated detection and response to comments on posts,
                      images, reels, and other content published on connected
                      social media account
                    </li>
                    <li>
                      Customizable reply templates and conditional response
                      logic based on comment content
                    </li>
                    <li>Keyword-triggered automated responses</li>
                  </ul>
                </div>

                <div>
                  <p className="mb-1 font-medium">
                    b) Direct Message (DM) Automation
                  </p>
                  <ul className="ml-8 space-y-1 list-disc">
                    <li>
                      Automated responses to direct messages received on
                      connected social media account
                    </li>
                    <li>
                      Conversation routing and management based on predefined
                      rules
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="mb-1 font-medium">c) Story Reply Automation</p>
                  <ul className="ml-8 space-y-1 list-disc">
                    <li>
                      Automated detection and response to replies on Instagram
                      Stories and similar ephemeral content
                    </li>
                    <li>
                      Customizable automated responses to story interactions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-2 font-semibold">
                4. Analytics and Reporting Features
              </p>
              <p className="mb-2 ml-4">
                The Platform includes analytics capabilities that provide:
              </p>
              <ul className="ml-8 space-y-1 list-disc">
                <li>Message delivery and engagement metrics</li>
                <li>User engagement patterns and behavioral insights</li>
              </ul>
            </div>

            <div>
              <p className="mb-2 font-semibold">
                5. Token-Based Messaging System
              </p>
              <p className="mb-2 ml-4">
                Briggo operates on a token-based usage model wherein:
              </p>
              <ul className="ml-8 space-y-1 list-disc">
                <li>
                  Message transmission and certain automation features consume
                  platform tokens
                </li>
                <li>
                  tokens are purchased by users through separate token packages
                  or subscription plans
                </li>
                <li>
                  Different message types or features may consume varying
                  amounts of tokens
                </li>
                <li>
                  Token consumption rates and policies are outlined in the
                  applicable pricing documentation
                </li>
                <li>
                  Users are responsible for monitoring their token balance and
                  ensuring adequate tokens for desired service usage
                </li>
                <li>
                  Services may be limited or suspended if token balance is
                  insufficient
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-4">
            {`If you purchase or use our Services, you're doing so through Briggo,
            and such purchase and use is subject to this Agreement; provided,
            that if you've entered into a separate written agreement or order
            form with us governing the purchase or use of our Services, such
            separate agreement or order form will govern in the event of a
            conflict with this Agreement to the extent of such conflict.`}
          </p>
          <p className="mt-4 font-semibold">Service Modifications:</p>
          <p className="mt-2">
            Briggo reserves the right to modify, enhance, or discontinue any
            aspect of the Services at any time with or without notice. We will
            make reasonable efforts to notify you of material changes that
            substantially affect your use of the Services.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            2. ACCOUNT, PASSWORD AND SECURITY
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            2.1 Account Registration
          </h3>
          <p>
            {`You must register with Briggo and create an account to use the
            Services (an "Account"). As part of the registration process, you
            will be requested to provide certain information, including without
            limitation:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Full legal name</li>
            <li>Valid email address</li>
            <li>Phone number</li>
            <li>Business information (if applicable)</li>
          </ul>
          <p className="mt-4">
            You may also link certain third-party services, including Google,
            Instagram, or Facebook to your Account.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            2.2 Account Information Accuracy
          </h3>
          <p>By using the Services, you agree to:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Provide true, accurate, current and complete information as
              prompted by the registration process
            </li>
            <li>
              Maintain and promptly update the Account information to keep it
              accurate, current and complete
            </li>
            <li>Not provide false, misleading, or fraudulent information</li>
            <li>
              Not impersonate any person or entity or misrepresent your
              affiliation with any person or entity
            </li>
          </ul>
          <p className="mt-4">
            Providing false information may result in immediate account
            termination and potential legal action.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            2.3 Account Security
          </h3>
          <p>
            You are the sole authorized user of your Account. You are
            responsible for:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Maintaining the confidentiality of your login credentials and
              password
            </li>
            <li>
              All activities that occur under your password or Account, even if
              not authorized by you
            </li>
            <li>All content uploaded to your Account</li>
            <li>
              Immediately notifying Briggo if you suspect unauthorized access to
              your Account
            </li>
          </ul>
          <p className="mt-4">
            Briggo is not liable for any loss or damage arising from your
            failure to maintain account security. Should you suspect that any
            unauthorized party may be using your password or Account or you
            suspect any other breach of security, you must contact Briggo
            immediately at support@briggo.in.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            2.4 Account Representative
          </h3>
          <p>
            {`The person signing up for the Services will be the contracting party
            ("Account Representative") for the purposes of these Terms of
            Service and will be the person who is authorized to use any
            corresponding Account we provide; provided, however, that if you are
            signing up for the Services on behalf of your employer, your
            employer shall be the Account Representative. As the Account
            Representative, you are:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Solely responsible for complying with these Terms of Service
            </li>
            <li>
              The only party entitled to all benefits accruing under this
              Agreement
            </li>
            <li>
              Responsible for all charges and fees associated with the Account
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            2.5 Account Non-Transferability
          </h3>
          <p>
            {`Your Account is personal to you and may not be transferred, sold, or
            assigned to any other person or entity without Briggo's prior
            written consent. Any attempted transfer without consent is void.`}
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            2.6 Communication Consent
          </h3>
          <p>
            {`By providing your phone number and email address, you hereby
            affirmatively consent to Briggo's use of your contact information
            to:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Perform and improve upon the Services</li>
            <li>Facilitate the carrying out of our Services</li>
            <li>
              Provide you with information and reminders regarding:
              <ul className="mt-1 ml-6 space-y-1 list-circle">
                <li>Account registration and verification</li>
                <li>Service changes and updates</li>
                <li>Service outages or technical issues</li>
                <li>Security alerts</li>
                <li>Billing and payment notices</li>
                <li>Important legal or compliance notices</li>
                <li>
                  Promotional offers (you may opt-out of marketing
                  communications)
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            3. AGENCIES AND BUSINESS OWNERS
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">3.1 Definitions</h3>
          <p>
            {`"Business Owner" means any individual or entity that uses Briggo's
            Services to market, support, develop, or otherwise commercialize
            their business, services, or products.`}
          </p>
          <p className="mt-4">
            {`"Agency" means any service provider retained or hired by a Business
            Owner to create and/or manage a Briggo account and use the Services
            on the Business Owner's behalf. An Agency is not required for a
            Business Owner to use the Services.`}
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            3.2 Agency Obligations
          </h3>
          <p>
            If you are an Agency using our Services to provide services to a
            Business Owner, you:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Must correctly identify such Business Owner as an administrator on
              the Account
            </li>
            <li>
              Must identify the Business Owner as an administrator on applicable
              Facebook pages, Instagram pages, and any other applicable platform
              pages
            </li>
            <li>
              Confirm you are authorized to use the Services and the Account on
              behalf of the Business Owner
            </li>
            <li>
              Must maintain records of your authorization to act on behalf of
              the Business Owner
            </li>
            <li>
              Must have a written agreement with the Business Owner governing
              your relationship
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            3.3 Account Ownership
          </h3>
          <p>
            {`The Business Owner shall be the sole and exclusive account
            representative of any Account created on its behalf by an Agency;
            provided that the Agency shall maintain its rights and interests in
            and to all flows or other intellectual property associated with the
            automation work product created by such Agency for the Business
            Owner (such work product, the "Agency Content").`}
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            3.4 Agency-Business Owner Relationship Termination
          </h3>
          <p>
            In the event of a termination of the relationship between a Business
            Owner and its Agency:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              The Business Owner must promptly notify Briggo of such
              termination; OR
            </li>
            <li>
              The Business Owner must update access using the team members
              section on their dashboard
            </li>
          </ul>
          <p className="mt-4">
            Notice should be provided within 7 business days of termination
          </p>
          <p className="mt-4">
            Following transfer of an Account from an Agency to the Business
            Owner:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              The Business Owner shall be solely responsible for payment of any
              subscription plans and/or fees
            </li>
            <li>The Agency shall have 30 days to export any Agency Content</li>
            <li>
              Briggo shall not be liable for any disputes between Agency and
              Business Owner regarding access, content, or intellectual property
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            3.5 Agency Content Ownership
          </h3>
          <p>
            {`Unless otherwise agreed in writing between Agency and Business
            Owner, all automation flows, templates, and custom integrations
            created by the Agency ("Agency Content") remain the intellectual
            property of the Agency. The Business Owner receives a license to use
            such Agency Content only for the duration of the Agency
            relationship, unless otherwise agreed.`}
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            4. USER GENERATED CONTENT AND DATA OWNERSHIP
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            4.1 Definition of User Generated Content
          </h3>
          <p>
            {`"User Generated Content" means any content, information, and
            materials that may be textual, audio, or visual that you or any
            Conversation Participant provide, submit, upload, publish, or make
            otherwise available to the Services and our users, including but not
            limited to:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Chat flow content and automation scripts</li>
            <li>Text messages, images, videos, and audio files</li>
            <li>Customer data and contact information</li>
            <li>Analytics data and reports</li>
            <li>Any other data created or uploaded through the Services</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            4.2 Your Responsibilities
          </h3>
          <p>
            {`You are solely responsible for your and your Conversation
            Participants' User Generated Content. You acknowledge and agree that
            Briggo:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Is not involved in the creation or development of User Generated
              Content
            </li>
            <li>
              Acts merely as a passive conduit and technical service provider
              for your content
            </li>
            <li>
              Disclaims any responsibility for the accuracy, legality, or
              quality of User Generated Content
            </li>
            <li>
              Cannot be held liable for claims arising out of or relating to
              User Generated Content
            </li>
            <li>
              Is not obligated to monitor, review, edit, or remove User
              Generated Content
            </li>
            <li>
              Reserves the right to limit, remove, or restrict User Generated
              Content at its sole discretion for any reason, including suspected
              violations of this Agreement, applicable law, or third-party
              rights
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            4.3 User Generated Content Warranties
          </h3>
          <p>
            You hereby represent and warrant to Briggo that your User Generated
            Content:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Will not be false, inaccurate, incomplete, or misleading</li>
            <li>
              {`Will not infringe on any third party's copyright, patent,
              trademark, trade secret, or other proprietary right or rights of
              publicity, personality, or privacy`}
            </li>
            <li>
              Will not violate any law, statute, ordinance, or regulation,
              including those governing:
              <ul className="mt-1 ml-6 space-y-1 list-circle">
                <li>Export control</li>
                <li>Consumer protection</li>
                <li>Unfair competition or deceptive practices</li>
                <li>Anti-discrimination</li>
                <li>False advertising</li>
                <li>Anti-spam regulations (including TRAI regulations)</li>
                <li>Privacy and data protection</li>
                <li>Electronic communications</li>
              </ul>
            </li>
            <li>
              Will not be defamatory, libelous, unlawfully threatening, or
              unlawfully harassing
            </li>
            <li>
              Will not be obscene, contain pornography (including child
              pornography), or be harmful to minors
            </li>
            <li>
              Will not contain any viruses, Trojan horses, worms, time bombs,
              cancelbots, malware, or other malicious code
            </li>
            <li>
              Will not falsely represent you as being employed by, directly
              engaged by, or affiliated with Briggo
            </li>
            <li>
              Will not purport that you are authorized to act as a
              representative or agent of Briggo
            </li>
            <li>
              Will not create liability for Briggo or cause Briggo to lose
              services of its ISPs or other suppliers
            </li>
            <li>
              Will not violate the policies of Instagram, Facebook, or other
              connected platforms
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            4.4 License Grant to Briggo
          </h3>
          <p>
            By making available any User Generated Content through the Services,
            you hereby grant to Briggo a non-exclusive, worldwide, royalty-free,
            fully paid-up, transferable, sublicensable license to use, process,
            reproduce, distribute, display, and disclose such User Generated
            Content:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>On, through, or by means of the Services</li>
            <li>For the purposes of providing the Services to you</li>
            <li>For modifying, improving, and operating the Services</li>
            <li>
              For backup, disaster recovery, and business continuity purposes
            </li>
            <li>
              For complying with legal obligations and law enforcement requests
            </li>
            <li>As otherwise permitted by this Agreement</li>
          </ul>
          <p className="mt-4 font-semibold">
            IMPORTANT: We do not claim any ownership rights in your User
            Generated Content. Nothing in this Agreement will be deemed to
            restrict any rights that you may have to use and exploit your User
            Generated Content, subject to the license granted herein.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            4.5 Data Ownership
          </h3>
          <p>
            {`You retain full ownership of all data you submit to or create
            through the Services. Briggo's license to your data is limited to
            the purposes described in Section 4.4 and terminates upon deletion
            of your data or termination of your Account, except as required for:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Legal compliance and record-keeping obligations</li>
            <li>Backup and disaster recovery (up to 180 days)</li>
            <li>Resolution of disputes</li>
            <li>{`Protection of Briggo's rights`}</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            4.6 Data Portability
          </h3>
          <p>
            Upon request and subject to verification of your identity, Briggo
            will provide you with a copy of your User Generated Content in a
            standard, machine-readable format within 30 days. This right is
            available:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Once per calendar quarter</li>
            <li>Upon account termination (within 30 days of termination)</li>
            <li>As required by applicable law</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">4.7 Data Deletion</h3>
          <p>Upon termination or deletion of your Account:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Your User Generated Content will be deleted from active systems
              within 90 days
            </li>
            <li>Backup copies may persist for up to 180 days</li>
            <li>
              Data required for legal, regulatory, or legitimate business
              purposes may be retained longer
            </li>
            <li>Aggregated, anonymized data may be retained indefinitely</li>
          </ul>
          <p className="mt-4">
            You may request expedited deletion by contacting support@briggo.in,
            subject to verification and legal retention requirements.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            5. COMMUNICATION BY TEXT MESSAGE OR EMAIL
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            5.1 Compliance Requirements
          </h3>
          <p>
            {`If you use the Services to communicate with your users via text
            message or email, you hereby agree to the following Compliance and
            Indemnity Terms ("CIT").`}
          </p>
          <p className="mt-4">
            You are required to use the Services in full compliance with all
            applicable laws and regulations, including without limitation:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Information Technology Act, 2000 (as amended)</li>
            <li>
              Information Technology (Reasonable Security Practices and
              Procedures and Sensitive Personal Data or Information) Rules, 2011
            </li>
            <li>
              Telecom Commercial Communications Customer Preference Regulations,
              2018 (TRAI Regulations)
            </li>
            <li>National Do Not Call (DND) Registry requirements</li>
            <li>Consumer Protection Act, 2019</li>
            <li>Any other applicable central, state, or local laws</li>
          </ul>
          <p className="mt-4">
            {`(Collectively referred to as "Electronic Messaging Laws")`}
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            5.2 Your Warranties
          </h3>
          <p>
            By using the Services for electronic messaging, you expressly
            warrant that:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You are and shall continue to act in full compliance with all
              Electronic Messaging Laws
            </li>
            <li>
              You have obtained and will maintain all necessary consents from
              recipients
            </li>
            <li>
              You have registered all required headers and templates with
              applicable authorities
            </li>
            <li>
              You will honor all opt-out and unsubscribe requests immediately
            </li>
            <li>
              You will not send unsolicited commercial communications (spam)
            </li>
            <li>
              You will comply with all applicable content restrictions and
              guidelines
            </li>
            <li>
              You will not send messages to numbers registered on the National
              Do Not Call Registry without proper exemption
            </li>
            <li>
              You understand that state and local restrictions may be more
              stringent than central regulations
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            5.3 TRAI Compliance Specific Requirements
          </h3>
          <p>
            For communications sent within India, you specifically agree to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Register as a sender with authorized telecom service providers
            </li>
            <li>
              Obtain principal entity (PE) and header registrations as required
            </li>
            <li>Use only approved templates for promotional content</li>
            <li>
              Maintain records of consent for all promotional communications
            </li>
            <li>Implement and honor DND preferences</li>
            <li>
              Not send promotional content between 9:00 PM and 9:00 AM (unless
              recipient has explicitly opted in)
            </li>
            <li>
              Classify communications correctly (promotional, transactional,
              service)
            </li>
            <li>
              Include opt-out mechanisms in all promotional communications
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            5.4 Consent Management
          </h3>
          <p>
            You represent and warrant that before sending any communication
            through the Services, you have obtained and documented:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Express consent for promotional communications</li>
            <li>Implied or express consent for transactional communications</li>
            <li>
              Clear disclosure of the purpose and frequency of communications
            </li>
            <li>Easy opt-out mechanism clearly communicated to recipients</li>
          </ul>
          <p className="mt-4">
            You must maintain records of such consent for a minimum of 3 years
            and provide such records to Briggo upon request for compliance
            verification.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            5.5 Prohibited Communications
          </h3>
          <p>You may not use the Services to send:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Unsolicited commercial communications (spam)</li>
            <li>Fraudulent, deceptive, or misleading messages</li>
            <li>Content that violates recipient privacy</li>
            <li>
              Messages to recipients who have opted out or are on DND lists
              (without proper exemption)
            </li>
            <li>Malicious links or phishing attempts</li>
            <li>Content that violates applicable platform policies</li>
            <li>Any illegal or harmful content</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            {`5.6 Briggo's Role and Limitations`}
          </h3>
          <p className="font-semibold">
            IMPORTANT: Briggo provides technical infrastructure only. Briggo:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Does NOT provide legal advice regarding compliance with Electronic
              Messaging Laws
            </li>
            <li>
              Will NOT assume responsibility for ensuring your activities meet
              legal requirements
            </li>
            <li>
              Will NOT assume liability if you are held guilty or liable for
              violations of law
            </li>
            <li>
              Reserves the right to suspend or terminate accounts suspected of
              violations
            </li>
            <li>
              May report violations to appropriate authorities as required by
              law
            </li>
          </ul>
          <p className="mt-4">
            You should review all applicable regulations with your own legal
            counsel to ensure compliance.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            5.7 Monitoring and Enforcement
          </h3>
          <p>Briggo reserves the right, but has no obligation, to:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Monitor communications sent through the Services for compliance
            </li>
            <li>
              Implement filters or restrictions to prevent spam or illegal
              content
            </li>
            <li>
              Suspend or terminate accounts that violate Electronic Messaging
              Laws
            </li>
            <li>Report violations to regulatory authorities</li>
            <li>Cooperate with law enforcement investigations</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            5.8 Compliance Indemnification
          </h3>
          <p>
            {`You agree to indemnify, defend, and hold harmless Briggo, along with
            its owners, members, directors, officers, agents, employees,
            contractors, consultants, and vendors from and against any and all
            claims, suits, fines, penalties, costs, expenses, judgments, and
            fees, including reasonable attorney's fees and court costs, arising
            out of:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Any violation by you of Electronic Messaging Laws</li>
            <li>
              Claims alleging facts that constitute a breach of your warranties
              in this Section
            </li>
            <li>Your failure to obtain proper consent from recipients</li>
            <li>Your failure to honor opt-out requests</li>
            <li>
              Spam or DND violations attributed to your use of the Services
            </li>
            <li>
              Regulatory actions or penalties related to your messaging
              activities
            </li>
          </ul>
          <p className="mt-4">
            You will promptly indemnify, defend, or settle any such third-party
            claim, demand, lawsuit, investigation, or regulatory proceeding
            brought against Briggo. Briggo will:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Promptly notify you of such claim (where legally permissible)
            </li>
            <li>
              Provide reasonable information, assistance, and cooperation in
              defending the matter
            </li>
            <li>
              {`Give you control and authority over the defense and settlement,
              subject to Briggo's approval of any settlement that affects
              Briggo's rights or interests (such approval will not be
              unreasonably withheld)`}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            6. COMMUNICATION WITH BRIGGO AND ITS CLIENTS
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            6.1 Contact Information Verification
          </h3>
          <p>
            You verify that any contact information provided to Briggo and its
            clients, including, but not limited to, your phone number and email
            address, is:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>True, accurate, and current</li>
            <li>Owned or controlled by you</li>
            <li>
              Not fraudulent or belonging to another person without
              authorization
            </li>
          </ul>
          <p className="mt-4">
            You further verify that you are the telephone subscriber and/or
            email account holder, or you have explicit authorization to provide
            such contact information.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            6.2 Consent to Communications
          </h3>
          <p>
            By voluntarily providing your telephone numbers and/or email
            addresses to Briggo and its clients, you expressly agree to be
            contacted at the telephone numbers and/or email addresses you
            provide.
          </p>
          <p className="mt-4">
            You consent to receive the following types of communications:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Service Communications: Account notifications, security alerts,
              technical updates, service outages
            </li>
            <li>
              Transactional Communications: Billing notices, payment
              confirmations, subscription updates
            </li>
            <li>
              Administrative Communications: Terms of Service updates, Privacy
              Policy changes, compliance notices
            </li>
            <li>
              Marketing Communications: Promotional offers, new features,
              product updates (you may opt-out)
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            6.3 Communication Methods
          </h3>
          <p>
            You agree that Briggo and its authorized clients may contact you
            via:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Email messages</li>
            <li>SMS/text messages</li>
            <li>Pre-recorded voice messages</li>
            <li>Autodialed calls</li>
            <li>{`Push notifications (if you've enabled them)`}</li>
            <li>In-app messaging</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            6.4 Opt-Out Rights
          </h3>
          <p className="font-semibold">
            Marketing Communications: You may opt-out of marketing
            communications at any time by:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>{`Clicking "unsubscribe" in email communications`}</li>
            <li>{`Replying "STOP" to SMS messages`}</li>
            <li>Updating preferences in your Account settings</li>
            <li>Contacting support@briggo.in</li>
          </ul>
          <p className="mt-4 font-semibold">
            Service Communications: You cannot opt-out of essential service
            communications related to your Account, security, billing, or legal
            notices.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            6.5 Communication Costs
          </h3>
          <p>
            You are responsible for any charges imposed by your
            telecommunications provider for receiving communications from
            Briggo. Message and data rates may apply.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            7. PROHIBITED USES
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            7.1 General Prohibitions
          </h3>
          <p>
            In addition to other prohibitions set forth in these Terms of
            Service, you are prohibited from using the Services:
          </p>

          <p className="mt-4 font-semibold">Illegal Activities:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>For any unlawful purpose</li>
            <li>
              To conduct any unlawful acts or solicit others to perform or
              participate in any unlawful acts
            </li>
            <li>
              To violate any international, federal, state, provincial, or local
              regulations, rules, laws, or ordinances
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            Intellectual Property Violations:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              For any purpose or manner that infringes upon or violates the
              intellectual property rights of Briggo or any third party
            </li>
            <li>
              To copy, reproduce, distribute, or disclose any part of the
              Services in any medium other than as expressly allowed
            </li>
            <li>
              To attempt to decipher, decompile, disassemble, or reverse
              engineer any software or algorithms used in the Services
            </li>
          </ul>

          <p className="mt-4 font-semibold">Harmful or Abusive Conduct:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              To harass, abuse, insult, harm, defame, slander, stalk, threaten,
              disparage, or intimidate any person
            </li>
            <li>
              To discriminate based on gender, sexual orientation, religion,
              ethnicity, race, age, national origin, disability, or any
              protected characteristic
            </li>
            <li>
              To violate the legal rights of others, including privacy and
              publicity rights
            </li>
            <li>For any obscene, immoral, or inappropriate purpose</li>
          </ul>

          <p className="mt-4 font-semibold">Fraudulent Activities:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>To submit false or misleading information</li>
            <li>
              To impersonate another person or misrepresent your affiliation
              with any person or entity
            </li>
            <li>
              To conduct fraud, phishing, pharming, pretexting, or identity
              theft
            </li>
            <li>To hide or attempt to hide your identity</li>
            <li>
              To abuse trial offerings, rebate offerings, or payment systems
            </li>
          </ul>

          <p className="mt-4 font-semibold">Technical Violations:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>To upload or transmit viruses, malware, or malicious code</li>
            <li>
              To interfere with or circumvent security features of the Services
            </li>
            <li>To attempt to compromise system integrity or security</li>
            <li>
              To access unauthorized Accounts or collect personal information of
              others
            </li>
            <li>
              To use automated systems (robots, spiders, scrapers) except as
              expressly permitted
            </li>
            <li>
              To transmit spam, chain letters, or other unsolicited
              communications
            </li>
            <li>
              To forge packet headers or send altered source-identifying
              information
            </li>
            <li>
              To interfere with or disrupt the Services or servers/networks
              connected to the Services
            </li>
          </ul>

          <p className="mt-4 font-semibold">Platform Policy Violations:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              To violate the policies of Facebook, Instagram, WhatsApp, or any
              other platform with which Briggo integrates
            </li>
            <li>
              {`To use the Services in a manner that could result in suspension or
              termination of Briggo's access to third-party platforms`}
            </li>
          </ul>

          <p className="mt-4 font-semibold">Competitive Activities:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              To use the Services to develop competing products or services
            </li>
            <li>
              To benchmark the Services for competitive purposes without written
              permission
            </li>
            <li>
              To publicly disseminate performance or feature information about
              the Services
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            7.2 Unauthorized Access Prohibited
          </h3>
          <p>You may not:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              {`Access, tamper with, or use non-public areas of the Services or
              Briggo's computer systems`}
            </li>
            <li>
              Probe, scan, or test the vulnerability of any system or network
            </li>
            <li>
              Breach or circumvent any security or authentication measures
            </li>
            <li>
              Access or search the Services by any means other than through
              currently available, published interfaces provided by Briggo
              (NOTE: crawling publicly-accessible parts of the Services is
              permissible if done in accordance with the robots.txt file, but
              scraping without prior written consent is expressly prohibited)
            </li>
            <li>
              Use the Services to send altered, deceptive, or false
              source-identifying information
            </li>
            <li>
              Create an undue burden on the Services through excessive requests
              or resource consumption
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            7.3 Account Integrity
          </h3>
          <p>You agree not to:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Create multiple accounts to circumvent restrictions or suspensions
            </li>
            <li>Share or sell your account credentials</li>
            <li>{`Use another person's account without permission`}</li>
            <li>
              Maintain an account after it has been suspended or terminated
            </li>
            <li>
              Register under a false name or provide false registration
              information
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            7.4 Enforcement Rights
          </h3>
          <p>Briggo reserves the right to:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Terminate your use of the Services immediately for violating any
              prohibited use
            </li>
            <li>
              {`Limit or restrict access to the Services for users whose actions
              degrade the experience of other users, Briggo's employees,
              affiliates, partners, or platform partners`}
            </li>
            <li>
              Review, delete, and disclose any information as reasonably
              necessary to:
              <ul className="mt-1 ml-6 space-y-1 list-circle">
                <li>
                  Satisfy any applicable law, regulation, legal process, or
                  governmental request
                </li>
                <li>
                  Enforce this Agreement, including investigation of potential
                  violations
                </li>
                <li>
                  Detect, prevent, or address fraud, security, or technical
                  issues
                </li>
                <li>Respond to user support requests</li>
                <li>
                  Protect the rights, property, or safety of Briggo, its users,
                  and the public
                </li>
              </ul>
            </li>
          </ul>
          <p className="mt-4">
            Briggo does not disclose personally-identifying information to third
            parties except in accordance with our Privacy Policy and applicable
            law.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            7.5 Consequences of Prohibited Use
          </h3>
          <p>Violation of prohibited uses may result in:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Immediate account suspension or termination without refund</li>
            <li>Legal action, including civil and criminal prosecution</li>
            <li>Cooperation with law enforcement authorities</li>
            <li>Reporting to platform partners (Instagram, Facebook, etc.)</li>
            <li>Claims for damages and injunctive relief</li>
            <li>Permanent ban from creating new accounts</li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            8. REPRESENTATIONS AND WARRANTIES; COMPLIANCE WITH LAWS
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            8.1 General Representations
          </h3>
          <p>You represent and warrant that:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You are at least 18 years of age or of the legally required age in
              your jurisdiction
            </li>
            <li>
              You are otherwise capable of entering into binding contracts
            </li>
            <li>
              You have the right, authority, and capacity to enter into this
              Agreement
            </li>
            <li>
              You will abide by all terms and conditions of this Agreement
            </li>
            <li>
              If entering on behalf of a company or organization, you have
              authority to bind that entity to this Agreement
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            8.2 Compliance Representations
          </h3>
          <p>You further represent and warrant that:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You have read, understand, and agree to be bound by these Terms of
              Service and the Privacy Policy
            </li>
            <li>
              You will act professionally and responsibly in your interactions
              with other users
            </li>
            <li>
              When using or accessing the Services, you will act in accordance
              with all applicable local, state, and federal laws
            </li>
            <li>
              You will act in good faith and in accordance with industry best
              practices
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            8.3 Regulatory Suitability
          </h3>
          <p>
            You are solely responsible for determining whether the Services are
            suitable for you to use in light of any applicable regulations,
            including but not limited to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>EU Data Privacy Laws (GDPR)</li>
            <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
            <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
            <li>Industry-specific regulations applicable to your business</li>
          </ul>
          <p className="mt-4">
            If you are subject to such regulations and you use the Services,
            Briggo will not be liable if the Services do not meet those
            requirements. You assume all risk related to regulatory compliance.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            8.4 Lawful Use Commitment
          </h3>
          <p>You may not use the Services for any:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Unlawful activities</li>
            <li>Discriminatory activities</li>
            <li>
              Acts prohibited by the Federal Trade Commission Act, Fair Credit
              Reporting Act, Equal Credit Opportunity Act, or other
              commerce-related laws
            </li>
            <li>Activities that violate consumer protection laws</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            8.5 Data Collection Disclosure
          </h3>
          <p>You are responsible for:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Notifying end-users of data collection in connection with the
              Services, as required by applicable law
            </li>
            <li>Posting and maintaining an accurate privacy policy</li>
            <li>
              Obtaining all necessary consents for data collection and
              processing
            </li>
            <li>
              Complying with all applicable data protection and privacy laws
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            8.6 European Economic Area (EEA) Specific Representations
          </h3>
          <p className="font-semibold">
            CRITICAL NOTICE: The Services are currently NOT GDPR-compliant.
          </p>
          <p className="mt-4">
            If you are located in the EEA or serve end-users in the EEA market,
            you represent and warrant that:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You acknowledge that the Services are not currently GDPR-compliant
            </li>
            <li>
              By using the Services, you assume full responsibility for ensuring
              that your use complies with applicable data protection laws,
              including GDPR
            </li>
            <li>
              You will NOT use the Services to collect, manage, or process
              personal data of users in the EEA unless you have:
              <ul className="mt-1 ml-6 space-y-1 list-circle">
                <li>Obtained explicit, documented consent; AND</li>
                <li>
                  Implemented appropriate data protection measures independent
                  of the Services; AND
                </li>
                <li>Assumed full liability for GDPR compliance</li>
              </ul>
            </li>
            <li>
              You will ensure that your privacy policy accurately reflects the
              limitations of using a non-GDPR-compliant service
            </li>
            <li>
              You have collected, stored, used, and transferred all data
              relating to EEA individuals in compliance with all applicable data
              protection laws
            </li>
            <li>
              You understand that the Services do not offer GDPR-compliant data
              processing mechanisms
            </li>
            <li>
              You, as the data controller, bear full responsibility for lawful
              processing of customer data
            </li>
            <li>
              You will not use the Services to collect, manage, or process
              sensitive personal data (health, financial, biometric,
              government-issued identification, racial or ethnic origin,
              political opinions, religious beliefs, trade union membership,
              genetic data, or data concerning sex life or sexual orientation)
              without implementing additional safeguards
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            8.7 GDPR Liability Disclaimer
          </h3>
          <p>
            You agree that Briggo will not be responsible for ensuring GDPR
            compliance in connection with data you process using the Services.
            You remain fully liable for any:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Legal claims, penalties, or damages arising from non-compliance
              with GDPR
            </li>
            <li>Supervisory authority actions or fines</li>
            <li>Data subject rights requests that you fail to honor</li>
            <li>Data breaches resulting from inadequate safeguards</li>
            <li>
              Cross-border data transfers made without proper legal mechanisms
            </li>
          </ul>
          <p className="mt-4">
            Briggo strongly recommends that EEA-based businesses or businesses
            serving EEA customers consult with legal counsel before using the
            Services.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            8.8 Disclosure of Interests
          </h3>
          <p>
            You hereby warrant and represent that you will disclose in writing
            any motivation, status, or interest related to the use of the
            Services that Briggo may reasonably need to know, including whether
            you intend to use the Services for any:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Journalistic purposes</li>
            <li>Investigative purposes</li>
            <li>Competitive analysis</li>
            <li>Research purposes</li>
            <li>Any purpose that may create conflicts of interest</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            8.9 Indemnification for Representation Breaches
          </h3>
          <p>
            {`You agree to indemnify and hold Briggo and its officers, directors,
            employees, agents, and affiliates harmless from any claims, demands,
            losses, liabilities, and expenses, including reasonable attorney's
            fees, arising out of your breach of any representation or warranty
            in this Section 8.`}
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            9. BILLING, PAYMENT AND REFUND POLICY
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            9.1 Payment Processing
          </h3>
          <p>
            {`Unless separately agreed in writing, all payments for the Services
            must be made through the third-party payment service provider (the
            "PSP") indicated on the Services or through alternative payment
            methods approved by Briggo.`}
          </p>
          <p className="mt-4 font-semibold">
            Payment Service Provider Agreement:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You may be required to register with the PSP and agree to their
              terms of service
            </li>
            <li>
              You must provide payment details to the PSP and complete their
              verification process
            </li>
            <li>
              You acknowledge that you have reviewed and agreed to the PSP
              Services Agreement
            </li>
            <li>Briggo is not a party to the PSP Services Agreement</li>
            <li>
              Briggo has no obligations, responsibility, or liability under the
              PSP Services Agreement
            </li>
            <li>All payment disputes must be resolved directly with the PSP</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            9.2 Pricing and Currency
          </h3>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              All prices displayed on the Services are in Indian Rupees (INR)
              unless otherwise stated
            </li>
            <li>All payments must be made in Indian currency (INR)</li>
            <li>
              All prices are exclusive of applicable taxes, which will be
              calculated and added at the time of purchase
            </li>
            <li>
              Pricing is subject to change with notice as described in Section
              9.7
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">9.3 Taxes</h3>
          <p>
            {`All prices and fees are exclusive of applicable central, state, or
            other governmental sales, goods and services, or other taxes, fees,
            or charges now in force or enacted in the future ("Taxes").`}
          </p>
          <p className="mt-4 font-semibold">Tax Responsibilities:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Any applicable Taxes are based on the billing address you provide
            </li>
            <li>
              Taxes will be calculated at the time a transaction is charged to
              your Account
            </li>
            <li>You are responsible for all applicable taxes</li>
            <li>
              If you are tax-exempt, you must provide valid tax exemption
              certificates before purchase
            </li>
          </ul>
          <p className="mt-4 font-semibold">GST Compliance:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              {`If you are registered under India's Goods and Services Tax (GST),
              you must provide your valid GSTIN`}
            </li>
            <li>
              Briggo will issue GST-compliant invoices for all taxable
              transactions
            </li>
            <li>
              You are responsible for claiming input tax credits where
              applicable
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            9.4 Service Plans and Credit System
          </h3>
          <p>
            Briggo offers credit-based service plans for messaging and
            automation features:
          </p>
          <p className="mt-4 font-semibold">Credit Plans:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Tokens are purchased in advance and stored in your Account</li>
            <li>
              Tokens are consumed based on usage (messages sent, automation
              triggers, etc.)
            </li>
            <li>
              Credit pricing and consumption rates are displayed on the Site and
              may vary by feature
            </li>
            <li>
              Tokens are non-refundable once purchased (subject to Section 9.8)
            </li>
            <li>Tokens do not expire while your Account remains active</li>
            <li>
              Unused tokens will be forfeited upon Account termination or
              closure
            </li>
          </ul>
          <p className="mt-4 font-semibold">Plan Features:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Different plans may include different features, limits, and
              support levels
            </li>
            <li>
              Plan details, including inclusions and limitations, are described
              on the pricing page
            </li>
            <li>
              Briggo may offer different plans to different users based on
              factors including account history, location, and registration date
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            9.5 Payment Authorization
          </h3>
          <p>
            By providing payment information, you represent and warrant that:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>You are authorized to use the provided payment instrument</li>
            <li>All information provided is accurate and current</li>
            <li>You will maintain valid payment information</li>
            <li>
              You authorize Briggo or the PSP to charge the payment instrument
              for all applicable fees
            </li>
          </ul>
          <p className="mt-4">
            If a payment instrument expires, you must replace it with valid
            payment information. If we are unable to process your payment:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>We will attempt to contact you by email</li>
            <li>
              Your Account may be suspended until payment is successfully
              processed
            </li>
            <li>You remain responsible for all outstanding amounts</li>
            <li>Late payment fees may apply as permitted by law</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            9.6 Payment Processing Failures
          </h3>
          <p>If a payment is declined or fails:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Your access to certain Services may be suspended or restricted
            </li>
            <li>You will receive notification via email</li>
            <li>
              You have 7 days to update payment information and complete payment
            </li>
            <li>After 7 days, your Account may be suspended or terminated</li>
            <li>
              You remain liable for all amounts due, plus any collection costs
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">9.7 Price Changes</h3>
          <p>Briggo may change fees and pricing at any time by:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Posting a new pricing structure to the Site; AND/OR</li>
            <li>
              Sending notification by email at least 30 days before the change
              takes effect
            </li>
          </ul>
          <p className="mt-4 font-semibold">For existing customers:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Price changes will not affect tokens already purchased</li>
            <li>
              Price changes apply to new credit purchases made after the
              effective date
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">9.8 Refund Policy</h3>
          <p className="font-semibold">
            General Policy - No Refunds: All purchases of tokens and services
            are final and non-refundable except as expressly stated in this
            Section or as required by applicable law.
          </p>
          <p className="mt-4">
            Briggo does not offer refunds in the following circumstances:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>{`Change of mind or buyer's remorse`}</li>
            <li>Voluntary account closure or deletion</li>
            <li>Termination due to breach of this Agreement</li>
            <li>Unused tokens or services</li>
            <li>Service discontinuation or feature changes</li>
            <li>Dissatisfaction with service quality</li>
            <li>
              Technical issues caused by your equipment, internet connection, or
              third-party platforms
            </li>
          </ul>
          <p className="mt-4 font-semibold">
            {`Exceptions - Refunds at Briggo's Discretion: Briggo may, at its sole
            discretion, provide partial or full refunds in the following
            circumstances:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              {`Service Unavailability: If the Services are unavailable or
              non-functional for more than 72 consecutive hours due to issues
              within Briggo's control`}
            </li>
            <li>
              Billing Errors: If Briggo mistakenly charges you incorrect amounts
            </li>
            <li>
              Duplicate Charges: If you are charged multiple times for the same
              transaction
            </li>
            <li>
              Service Failure: If a material service failure prevents you from
              using core features for an extended period
            </li>
            <li>
              Legal Requirements: Where required by applicable consumer
              protection laws
            </li>
          </ul>
          <p className="mt-4 font-semibold">Refund Process:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Refund requests must be submitted within 7 days of the issue
              occurring
            </li>
            <li>
              Requests must be made to support@briggo.in with order details and
              explanation
            </li>
            <li>Briggo will investigate and respond within 10 business days</li>
            <li>
              Approved refunds will be processed to the original payment method
              within 15 business days
            </li>
            <li>{`Refund decisions are final and at Briggo's sole discretion`}</li>
          </ul>
          <p className="mt-4 font-semibold">
            Consumer Protection Act Compliance: Nothing in this refund policy
            excludes or limits your rights under the Consumer Protection Act,
            2019, or other applicable mandatory consumer protection laws. If you
            are entitled to a refund under applicable law, such legal rights
            supersede this policy.
          </p>
          <p className="mt-4 font-semibold">
            No Refunds Upon Termination: If Briggo terminates your access to the
            Services for breach of this Agreement, you are not entitled to any
            refund of unused tokens or fees paid.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            9.9 Trial Periods and Promotional Offers
          </h3>
          <p className="font-semibold">
            {`Trial Eligibility: From time to time, Briggo may offer trials of
            paid Services for a specified period without payment or at a reduced
            rate (a "Trial"). Briggo reserves the right to determine eligibility
            for any Trial, which may vary based on:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Services selected</li>
            <li>Account history</li>
            <li>How recently you redeemed a Trial</li>
            <li>Geographic location</li>
            <li>Account type (new vs. existing)</li>
            <li>Other factors at {`Briggo's`} discretion</li>
          </ul>
          <p className="mt-4 font-semibold">Trial Terms:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              {`Each Trial provides access to specified Services for an initial,
              introductory period (the "Trial Period")`}
            </li>
            <li>
              The Trial Period begins when you confirm acceptance by submitting
              valid payment details
            </li>
            <li>
              By submitting payment details, you confirm acceptance of the Trial
              and this Agreement
            </li>
            <li>
              Certain limitations may exist regarding combining Trials with
              other offers
            </li>
            <li>One Trial per user/account/household/payment method</li>
            <li>
              Briggo may require payment information even for free Trials to
              verify identity
            </li>
          </ul>
          <p className="mt-4 font-semibold">
            Trial Modifications: Except where prohibited by law, Briggo reserves
            the right to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Modify Trial terms at any time</li>
            <li>Suspend or terminate a Trial for any reason</li>
            <li>Refuse Trial enrollment to any user</li>
            <li>
              Not honor subsequent Trial enrollments if terms are violated
            </li>
          </ul>
          <p className="mt-4 font-semibold">Trial Cancellation:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You may cancel a Trial at any time during the Trial Period without
              charge
            </li>
            <li>
              To avoid charges, you must cancel before the Trial Period ends
            </li>
            <li>
              If you do not cancel before the end of the Trial Period, you may
              be automatically enrolled in a paid plan (if applicable)
            </li>
          </ul>
          <p className="mt-4">
            All information collected during any Trial will be processed in
            accordance with our Privacy Policy.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            9.10 In-Bot Payments and User Products
          </h3>
          <p className="font-semibold">
            {`User Products: The Services may include features enabling you to
            sell goods, products, content, media, and services ("User Products")
            through in-bot payments via your Account.`}
          </p>
          <p className="mt-4 font-semibold">
            Your Responsibilities: You are solely responsible for:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Content of communications with end users</li>
            <li>All User Products provided through the Services</li>
            <li>Payment-related activities and transactions</li>
            <li>Promotions and related content in your bot</li>
            <li>
              Compliance with all applicable laws regarding sales, taxes,
              consumer protection, and product safety
            </li>
          </ul>
          <p className="mt-4 font-semibold">
            {`Briggo's Role: Briggo merely provides the platform infrastructure.
            Briggo:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Is NOT involved in transactions between you and your end users
            </li>
            <li>Does NOT take responsibility for User Products</li>
            <li>Makes NO warranties regarding transactions</li>
            <li>
              Does NOT guarantee or assume liability for completed transactions
            </li>
            <li>
              Is NOT responsible for chargebacks, refunds, or disputes with
              customers
            </li>
          </ul>
          <p className="mt-4 font-semibold">
            Tax and Legal Compliance: By using payment features, you
            acknowledge, warrant, and agree that:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You are solely responsible for all taxes and fees related to
              selling User Products
            </li>
            <li>
              You will collect, report, and remit correct amounts to appropriate
              authorities
            </li>
            <li>
              You will provide customers with duly issued invoices as required
              by law
            </li>
            <li>
              You are responsible for all costs of procuring and delivering User
              Products
            </li>
            <li>
              You will provide products in a safe and professional manner
              consistent with industry standards
            </li>
            <li>
              You will provide true contact information for questions,
              complaints, or claims
            </li>
            <li>
              You will honor all warranties and support obligations to customers
            </li>
          </ul>
          <p className="mt-4 font-semibold">
            Prohibited Products: You may NOT offer or sell User Products that
            are:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Hazardous, dangerous, or unsafe</li>
            <li>Counterfeit, stolen, or fraudulent</li>
            <li>Prohibited for sale, distribution, or use</li>
            <li>Offensive or abusive</li>
            <li>
              In violation of intellectual property rights, consumer rights, or
              privacy rights
            </li>
            <li>
              Non-compliant with product safety, trade regulations, or sanctions
            </li>
            <li>
              In violation of Facebook, Instagram, or payment processor policies
            </li>
          </ul>
          <p className="mt-4 font-semibold">
            Transaction Security: You are solely responsible for:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Verifying the identity of users purchasing User Products</li>
            <li>Verifying the eligibility and validity of payment cards</li>
            <li>Securing transaction data on your systems</li>
            <li>
              Complying with all applicable payment card industry standards
            </li>
            <li>
              Providing customer service for all issues related to User Products
            </li>
          </ul>
          <p className="mt-4 font-semibold">Chargebacks and Reversals:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You are solely responsible for all reversed or charged back
              transactions
            </li>
            <li>
              Briggo may temporarily hold funds or deduct amounts from your
              Account to cover chargebacks
            </li>
            <li>
              Excessive chargebacks may result in account suspension or
              termination
            </li>
          </ul>
          <p className="mt-4 font-semibold">
            {`Briggo's Discretion: Briggo may, at any time and at its sole
            discretion:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Suspend or disable access to your bot or Account</li>
            <li>Remove User Products</li>
            <li>Refund customers and charge your Account</li>
            <li>Terminate payment processing capabilities</li>
            <li>Report suspicious activity to authorities</li>
          </ul>
          <p className="mt-4">
            Such actions may be taken without liability to you or your
            customers, including for any loss resulted therefrom.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            9.11 Payment Card Support
          </h3>
          <p>
            Briggo may add or remove supported payment card types at any time
            without prior notice to you. Currently supported payment methods are
            displayed during checkout.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            10. TERMINATION AND SUSPENSION
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            10.1 Termination by You
          </h3>
          <p>
            Unless otherwise agreed in writing between you and Briggo, you may
            terminate this Agreement at any time for any or no reason by:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Using the account deletion features in the Services</li>
            <li>Sending written notice to support@briggo.in</li>
          </ul>
          <p className="mt-4 font-semibold">
            Effect of Termination: Upon termination by you:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You will immediately lose access to your Account and all
              associated data
            </li>
            <li>
              You will not be entitled to any refund of unused tokens or prepaid
              fees
            </li>
            <li>
              Briggo will begin the data deletion process as described in
              Section 10.7
            </li>
            <li>
              All licenses granted to you under this Agreement will immediately
              terminate
            </li>
            <li>
              Your obligations under this Agreement that are intended to survive
              termination will continue
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            10.2 Termination by Briggo
          </h3>
          <p>
            Briggo may terminate or suspend your access to the Services
            immediately, without prior notice or liability, for any reason,
            including but not limited to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Breach of this Agreement</li>
            <li>Violation of applicable laws or regulations</li>
            <li>Fraudulent, abusive, or illegal activity</li>
            <li>Non-payment of fees</li>
            <li>Violation of third-party rights</li>
            <li>
              Actions that harm or may harm Briggo, other users, or third
              parties
            </li>
            <li>Extended period of inactivity (see Section 10.8)</li>
            <li>Business reasons, including discontinuation of Services</li>
            <li>Requests from law enforcement or regulatory authorities</li>
          </ul>
          <p className="mt-4 font-semibold">
            No Refunds Upon Briggo Termination: If Briggo terminates your
            Account for breach of this Agreement or for cause, you forfeit all
            unused tokens and are not entitled to any refund.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            10.3 Suspension of Services
          </h3>
          <p>
            Briggo reserves the right to suspend (temporarily restrict) your
            access to the Services without terminating your Account:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>While investigating suspected violations of this Agreement</li>
            <li>
              To comply with legal requirements or law enforcement requests
            </li>
            <li>To address security concerns or technical issues</li>
            <li>To prevent harm to Briggo, other users, or third parties</li>
            <li>For non-payment, pending payment resolution</li>
          </ul>
          <p className="mt-4">During suspension:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You will not be able to access certain or all features of the
              Services
            </li>
            <li>Your data will be retained</li>
            <li>You will not receive refunds for the suspension period</li>
            <li>You remain responsible for all fees and obligations</li>
          </ul>
          <p className="mt-4">
            {`Suspension may be converted to termination at Briggo's discretion.`}
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            10.4 Prohibition on Creating New Accounts
          </h3>
          <p>
            If Briggo terminates or suspends your Account for violation of this
            Agreement, you are permanently prohibited from:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Registering and creating a new Account under your name</li>
            <li>Creating an Account under a fake or borrowed name</li>
            <li>Creating an Account under the name of any third party</li>
            <li>Acting on behalf of a third party to create an Account</li>
          </ul>
          <p className="mt-4">Violation of this prohibition may result in:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Immediate termination of the new Account</li>
            <li>Legal action for breach of contract</li>
            <li>Referral to law enforcement if fraud is suspected</li>
            <li>Permanent IP-based blocking</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            10.5 Effect on Legal Rights
          </h3>
          <p>
            Even after termination or suspension, this Agreement remains
            enforceable against you. Briggo reserves the right to take
            appropriate legal action, including:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Pursuing arbitration in accordance with Section 17</li>
            <li>Seeking damages for breach of contract</li>
            <li>Obtaining injunctive relief</li>
            <li>Reporting violations to appropriate authorities</li>
            <li>Cooperating with law enforcement</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            10.6 Service Modification or Discontinuation
          </h3>
          <p>
            Briggo reserves the right to modify or discontinue, temporarily or
            permanently, all or any portion of the Services at its sole
            discretion, with or without notice.
          </p>
          <p className="mt-4">Briggo is not liable to you for any:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Modification of Services or features</li>
            <li>Discontinuance of Services</li>
            <li>Changes to pricing or plans</li>
            <li>Loss of data due to service changes</li>
            <li>Loss of functionality or access</li>
          </ul>
          <p className="mt-4">
            Briggo has the right to restrict anyone from completing registration
            if Briggo believes such person may threaten the safety and integrity
            of the Services, or if such restriction is necessary to address any
            reasonable business concern.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            10.7 Data Deletion Upon Termination
          </h3>
          <p>
            Following termination or cancellation of your Account, Briggo
            reserves the right to delete all your data, including User Generated
            Content, in the normal course of operation:
          </p>
          <p className="mt-4 font-semibold">Deletion Timeline:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Active system data: Deleted within 90 days of Account termination
            </li>
            <li>Backup systems: Data may persist up to 180 days</li>
            <li>Aggregated/anonymized data: May be retained indefinitely</li>
          </ul>
          <p className="mt-4 font-semibold">
            Data Recovery: Your data cannot be recovered once your Account is
            terminated or canceled and the deletion process is complete.
          </p>
          <p className="mt-4 font-semibold">
            Pre-Termination Data Export: You should export any data you wish to
            retain before terminating your Account. Upon request made before
            termination, Briggo will provide your data in a standard format
            within 30 days (subject to verification of your identity).
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            10.8 Inactive Account Policy
          </h3>
          <p>
            If there is no activity in your Account for at least 18 consecutive
            months, including:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>No login activity</li>
            <li>No conversation activity</li>
            <li>No payment transactions</li>
            <li>No planned broadcasts</li>
            <li>No API calls or integrations</li>
          </ul>
          <p className="mt-4">
            Briggo will endeavor to notify you by email or other means and
            provide the option to keep your Account open.
          </p>
          <p className="mt-4 font-semibold">Notice and Response:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You will receive notice at the email address associated with your
              Account
            </li>
            <li>
              You will have 30 days to respond and confirm you wish to keep your
              Account active
            </li>
            <li>
              If you do not respond within 30 days, Briggo reserves the right
              to:
              <ul className="mt-1 ml-6 space-y-1 list-circle">
                <li>Close your Account</li>
                <li>Delete all your data</li>
                <li>Forfeit any unused tokens</li>
              </ul>
            </li>
          </ul>
          <p className="mt-4 font-semibold">
            Limitation of Liability: Briggo will not be liable for:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Failure to deliver inactivity notices</li>
            <li>Data loss due to inactivity-based account closure</li>
            <li>Forfeiture of unused tokens</li>
          </ul>
          <p className="mt-4">
            To reactivate an inactive Account, you must contact
            support@briggo.in before the Account is closed.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            12. LINKS TO THIRD-PARTY WEBSITES; OPTIONAL THIRD-PARTY TOOLS
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            12.1 Third-Party Links
          </h3>
          <p>
            The Services may contain links (such as hyperlinks) to third-party
            websites, including external websites framed within the Services and
            advertisements.
          </p>

          <p className="mt-4 font-semibold">
            No Endorsement: Such links do NOT constitute:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Endorsement by Briggo</li>
            <li>Association with those websites</li>
            <li>Recommendation of their content or operators</li>
            <li>Warranty of their accuracy, legality, or quality</li>
          </ul>

          <p className="mt-4 font-semibold">
            Links Provided As-Is: Links are provided as an information service,
            for reference and convenience only. Briggo:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Does not control third-party websites</li>
            <li>
              Is not responsible for their availability, accuracy, or content
            </li>
            <li>
              Is not responsible for their advertising, products, or services
            </li>
            <li>Does not monitor or evaluate third-party websites</li>
            <li>
              Cannot be held liable for claims arising from third-party websites
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            Your Responsibility: It is your responsibility to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Evaluate the content and usefulness of information from
              third-party websites
            </li>
            <li>
              Review the terms of use and privacy policies of third-party
              websites
            </li>
            <li>Assess risks before using third-party websites or services</li>
            <li>Protect yourself from malicious content, scams, or fraud</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            12.2 Third-Party Website Terms
          </h3>
          <p>
            The use of any website controlled, owned, or operated by third
            parties is governed by the terms and conditions of use and privacy
            policies for those websites. You access such third-party websites at
            your own risk.
          </p>

          <p className="mt-4 font-semibold">
            Liability Disclaimer: Briggo expressly disclaims any liability
            arising in connection with your:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Use of third-party websites</li>
            <li>
              Viewing of any material associated with links on the Services
            </li>
            <li>Transactions conducted on third-party websites</li>
            <li>Data provided to third-party websites</li>
          </ul>

          <p className="mt-4">
            You hereby agree to hold Briggo harmless from any liability that may
            result from the use of links that may appear on the Services.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            12.3 Third-Party Accounts Integration
          </h3>
          <p>
            {`As part of the Services' functionality, you may link your Account
            with third-party service provider accounts, such as:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Google</li>
            <li>WhatsApp</li>
            <li>
              {`Other messaging or social media platforms (Each such account, a
              "Third-Party Account")`}
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            Integration Methods: You may integrate by either:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Providing your Third-Party Account login information through the
              Services; OR
            </li>
            <li>
              {`Allowing Briggo to access your Third-Party Account as permitted by
              that platform's terms`}
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            Your Authorization: You represent and warrant that you are entitled
            to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Disclose your Third-Party Account login information to Briggo
            </li>
            <li>Grant Briggo access to your Third-Party Account</li>
            <li>
              Authorize Briggo to use your Third-Party Account for the purposes
              described herein
            </li>
          </ul>

          <p className="mt-4">Such authorization must be:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              {`Without breach of the Third-Party Account's terms and conditions`}
            </li>
            <li>
              Without obligating Briggo to pay fees to the third-party provider
            </li>
            <li>
              Without making Briggo subject to usage limitations imposed by the
              third-party provider (beyond reasonable platform limitations)
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            Third-Party Content (SNS Content): By granting Briggo access to
            Third-Party Accounts, you understand that:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              {`Briggo may access, make available, and store content from your
              Third-Party Account ("SNS Content")`}
            </li>
            <li>
              SNS Content will be available through the Services via your
              Account
            </li>
            <li>
              Briggo may submit and receive additional information to/from your
              Third-Party Account
            </li>
            <li>You will be notified when such information exchange occurs</li>
            <li>
              Unless otherwise specified in these Terms, all SNS Content shall
              be considered User Generated Content subject to Section 5.
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            Privacy and Third-Party Access: Depending on your Third-Party
            Account privacy settings:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Personally identifiable information you post may be available
              through the Services
            </li>
            <li>
              Other users may be able to view information from your Third-Party
              Accounts
            </li>
            <li>
              You are responsible for managing privacy settings on Third-Party
              Accounts
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            {`Service Availability: If a Third-Party Account or associated service
            becomes unavailable, or if Briggo's access is terminated by the
            third-party provider:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>SNS Content may no longer be available through the Services</li>
            <li>Certain features may become unavailable</li>
            <li>Briggo is not liable for such unavailability</li>
          </ul>

          <p className="mt-4">
            Disconnection: You may disable the connection between your Account
            and Third-Party Accounts at any time through your Account settings.
          </p>

          <p className="mt-4 font-semibold">
            IMPORTANT NOTICE: YOUR RELATIONSHIP WITH THIRD-PARTY PROVIDERS
            ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR
            AGREEMENT(S) WITH SUCH THIRD-PARTY PROVIDERS.
          </p>

          <p className="mt-4">Briggo:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Makes no effort to review SNS Content for accuracy, legality, or
              non-infringement
            </li>
            <li>Is not responsible for any SNS Content</li>
            <li>
              Has no control over third-party platform policies, changes, or
              terminations
            </li>
            <li>
              Cannot guarantee continued availability of third-party
              integrations
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            12.4 Third-Party Tools
          </h3>
          <p>
            {`Briggo may provide access to third-party tools ("Third-Party Tools")
            which:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Briggo does not monitor</li>
            <li>Briggo has no control or input over</li>
            <li>Are provided by independent third parties</li>
          </ul>

          <p className="mt-4 font-semibold">
            Terms of Use: You acknowledge and agree that:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              {`Third-Party Tools are provided on an "as-is" and "as-available"
              basis`}
            </li>
            <li>
              Briggo provides NO warranties, representations, or conditions
              regarding Third-Party Tools
            </li>
            <li>Briggo provides NO endorsement of Third-Party Tools</li>
            <li>
              Briggo has NO liability arising from your use of Third-Party Tools
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            Your Risk: Any use of Third-Party Tools is entirely at your own risk
            and discretion. You should:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              {`Ensure you are familiar with the third-party provider's terms`}
            </li>
            <li>Approve of the terms before using Third-Party Tools</li>
            <li>Understand the risks and limitations of Third-Party Tools</li>
          </ul>

          <p className="mt-4 font-semibold">
            No Support: Briggo is not responsible for providing support,
            maintenance, or updates for Third-Party Tools. All support must be
            obtained from the third-party provider.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            13. OWNERSHIP AND INTELLECTUAL PROPERTY RIGHTS
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            13.1 Briggo&apos;s Proprietary Rights
          </h3>
          <p>
            All text, graphics, editorial content, data, formatting, graphs,
            designs, HTML, look and feel, photographs, music, sounds, images,
            software, videos, typefaces, logos, trademarks, service marks, and
            other content displayed on or through the Services (collectively
            &quot;Proprietary Material&quot;), excluding User Generated Content,
            is owned by or licensed to Briggo.
          </p>

          <p className="mt-4 font-semibold">
            Protection: Proprietary Material is protected by:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Indian copyright laws</li>
            <li>International copyright treaties and conventions</li>
            <li>Patent laws</li>
            <li>Trademark laws</li>
            <li>Trade secret laws</li>
            <li>Other intellectual property laws</li>
          </ul>

          <p className="mt-4">
            The Proprietary Material, including its coordination, selection,
            arrangement, and enhancement, constitutes a collective work
            protected under applicable copyright laws.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            13.2 Restrictions on Use
          </h3>
          <p>You may NOT:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Copy, download, reproduce, or distribute Proprietary Material
              without express written consent
            </li>
            <li>
              Use, redesign, reconfigure, or retransmit anything from the
              Services without prior written permission
            </li>
            <li>Create derivative works based on Proprietary Material</li>
            <li>Reverse engineer any aspect of the Services</li>
            <li>
              Remove, alter, or obscure any copyright, trademark, or other
              proprietary notices
            </li>
            <li>
              Use Proprietary Material for commercial purposes without
              authorization
            </li>
          </ul>

          <p className="mt-4">
            Any use of Proprietary Material not expressly permitted by this
            Agreement is strictly prohibited and may violate copyright,
            trademark, and other intellectual property laws.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            13.3 Ownership Clarification
          </h3>
          <p className="mt-2 font-semibold">
            Briggo Ownership: Briggo owns or has licensed rights to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>The Services platform and infrastructure</li>
            <li>Software, algorithms, and code underlying the Services</li>
            <li>Briggo branding, logos, and trademarks</li>
            <li>All content created by Briggo</li>
            <li>Improvements, modifications, and derivatives of the above</li>
          </ul>

          <p className="mt-4 font-semibold">
            User Ownership: You retain ownership of:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Your User Generated Content</li>
            <li>Your business data and customer information</li>
            <li>
              Your chat flows and automation content (subject to Agency
              provisions in Section 4)
            </li>
          </ul>

          <p className="mt-4">
            Agency Ownership: Agencies retain ownership of Agency Content as
            described in Section 4.5.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            13.4 License to Use Services
          </h3>
          <p>
            Subject to the terms and conditions of this Agreement, you are
            granted a limited, non-exclusive, non-transferable,
            non-sublicensable, revocable license to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Access and use the Services for your internal business purposes
            </li>
            <li>Use features and functionality as made available to you</li>
            <li>
              Download and use the mobile application on authorized devices
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            This license does NOT permit you to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Sell, license, rent, or transfer your access to the Services
            </li>
            <li>
              Publicly distribute, transmit, display, or perform content from
              the Services
            </li>
            <li>Modify, adapt, translate, or create derivative works</li>
            <li>
              Use the Services for the benefit of third parties (except as an
              Agency under Section 4)
            </li>
          </ul>

          <p className="mt-4">
            Briggo may terminate this license at any time for any reason or no
            reason, with or without notice.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            13.5 Feedback and Suggestions
          </h3>
          <p>
            If you choose to submit or Briggo invites you to submit comments,
            ideas, suggestions, or feedback about the Services, including how to
            improve the Services or products (&quot;Feedback&quot;), you agree
            that:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Your disclosure is gratuitous, unsolicited, and without
              restriction
            </li>
            <li>
              It will not place Briggo under any fiduciary or other obligation
            </li>
            <li>
              Briggo is free to use the Feedback without any additional
              compensation to you
            </li>
            <li>
              Briggo may disclose the Feedback to anyone on a non-confidential
              basis
            </li>
            <li>
              Briggo may implement, modify, or ignore the Feedback at its sole
              discretion
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            No Compensation: You acknowledge that by submitting Feedback:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Briggo does not waive any rights to use similar or related
              Feedback previously known to Briggo
            </li>
            <li>
              Briggo may develop products or features similar to your Feedback
              independently
            </li>
            <li>
              You have no expectation of compensation, credit, or consideration
            </li>
            <li>All Feedback becomes the exclusive property of Briggo</li>
          </ul>

          <p className="mt-4">
            Email and Correspondence: All email and other correspondence that
            you submit to Briggo shall become Briggo&apos;s sole and exclusive
            property.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            13.6 Intellectual Property Definitions
          </h3>
          <p>
            For purposes of this Agreement, &quot;Intellectual Property
            Rights&quot; means all:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Patent rights</li>
            <li>Copyright rights (including rights in software)</li>
            <li>Mask work rights</li>
            <li>Moral rights</li>
            <li>Rights of publicity</li>
            <li>Trademark, trade dress, and service mark rights</li>
            <li>Goodwill</li>
            <li>Trade secret rights</li>
            <li>
              Other intellectual property rights as may now exist or hereafter
              come into existence
            </li>
            <li>
              All applications, registrations, renewals, and extensions thereof
            </li>
            <li>
              Under the laws of any state, country, territory, or other
              jurisdiction
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            13.7 No Implied Rights
          </h3>
          <p>
            Nothing in this Agreement shall be deemed to create a license in or
            under any Intellectual Property Rights owned by Briggo, except as
            explicitly provided herein. All rights not expressly granted are
            reserved.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            13.8 Compliance with Platform Guidelines
          </h3>
          <p>
            Your use of the Services and the licenses granted hereunder are
            conditioned upon your strict adherence to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Third-party platform guidelines (Facebook, Instagram, WhatsApp,
              etc.)
            </li>
            <li>App store terms and conditions</li>
            <li>
              Any end-user license agreements associated with the Services
            </li>
            <li>Industry best practices and standards</li>
          </ul>
          <p className="mt-4">
            Briggo may modify such guidelines in its sole discretion at any
            time. Briggo reserves the right to terminate your Account if it
            determines that you have violated any applicable guidelines or
            platform terms.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            13.9 Trademark Usage
          </h3>
          <p>
            The Briggo name, logo, and all related names, logos, product and
            service names, designs, and slogans are trademarks of Briggo or its
            licensors.
          </p>

          <p className="mt-4 font-semibold">You may NOT:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Use Briggo trademarks without prior written permission</li>
            <li>
              Use Briggo trademarks in a way that suggests endorsement or
              affiliation (unless authorized)
            </li>
            <li>
              Register domain names, social media handles, or business names
              confusingly similar to Briggo marks
            </li>
            <li>Use Briggo marks in meta tags, keywords, or hidden text</li>
          </ul>

          <p className="mt-4">
            Unauthorized use of Briggo trademarks may violate trademark laws and
            is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            14. COPYRIGHT COMPLAINTS AND DMCA
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            14.1 Copyright Respect Policy
          </h3>
          <p>
            Briggo respects the intellectual property rights of others and
            expects users to do the same. If you believe, in good faith, that
            any materials provided on or in connection with the Services
            infringe upon your copyright or other intellectual property rights,
            you may submit a notice of infringement.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            14.2 Notice of Copyright Infringement
          </h3>
          <p>
            To submit a copyright infringement claim, please send the following
            information to Briggo at support@briggo.in:
          </p>

          <p className="mt-4 font-semibold">Required Information:</p>
          <ul className="mt-2 ml-8 space-y-2 list-disc">
            <li>
              <span className="font-semibold">
                Description of copyrighted work:
              </span>{" "}
              A description of the copyrighted work that you claim has been
              infringed, including the URL (Internet address) or other specific
              location on the Services where the allegedly infringing material
              is located. Include enough information to allow Briggo to locate
              the material and explain why you believe an infringement has taken
              place.
            </li>

            <li>
              <span className="font-semibold">
                Location of authorized copy:
              </span>{" "}
              A description of where the original or an authorized copy of the
              copyrighted work exists (e.g., the URL where it is posted or the
              name of the book in which it has been published).
            </li>

            <li>
              <span className="font-semibold">Your contact information:</span>{" "}
              Your full name, address, telephone number, and email address.
            </li>

            <li>
              <span className="font-semibold">Good faith statement:</span> A
              statement by you that you have a good faith belief that the
              disputed use is not authorized by the copyright owner, its agent,
              or the law.
            </li>

            <li>
              <span className="font-semibold">Accuracy statement:</span> A
              statement by you, made under penalty of perjury, that the
              information in your notice is accurate, and that you are the
              copyright owner or authorized to act on the copyright owner&apos;s
              behalf.
            </li>

            <li>
              <span className="font-semibold">Signature:</span> An electronic or
              physical signature of the owner of the copyright or the person
              authorized to act on behalf of the owner of the copyright
              interest.
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            14.3 Counter-Notice Procedure
          </h3>
          <p>
            If you believe that material you posted was removed or disabled by
            mistake or misidentification, you may file a counter-notice by
            providing the following information to support@briggo.in:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Your physical or electronic signature</li>
            <li>
              Identification of the material that has been removed or disabled
              and the location where it appeared before removal
            </li>
            <li>
              A statement under penalty of perjury that you have a good faith
              belief that the material was removed or disabled as a result of
              mistake or misidentification
            </li>
            <li>Your name, address, telephone number, and email address</li>
            <li>
              A statement that you consent to the jurisdiction of the courts in
              Surat, Gujarat, India, and that you will accept service of process
              from the person who filed the original infringement notice or
              their agent
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            14.4 Repeat Infringer Policy
          </h3>
          <p>
            Briggo will terminate the accounts of users who are repeat
            infringers of intellectual property rights in appropriate
            circumstances and at Briggo&apos;s sole discretion.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            14.5 No Legal Advice
          </h3>
          <p>
            Briggo cannot provide legal advice regarding copyright infringement
            claims. If you are unsure whether material infringes your copyright,
            you should consult with an attorney before filing a notice.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">14.6 False Claims</h3>
          <p>
            Please note that under applicable law, you may be held liable for
            damages if you make material misrepresentations in a copyright
            infringement notice. You should carefully consider whether material
            actually infringes your copyright before submitting a notice.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            15. CONFIDENTIAL INFORMATION
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            15.1 Definition of Confidential Information
          </h3>
          <p>
            &quot;Confidential Information&quot; means any and all trade
            secrets, confidential and proprietary information, and other
            information and data of Briggo that is not generally known to the
            public, including but not limited to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Technical data and know-how</li>
            <li>Research and development information</li>
            <li>Product plans, roadmaps, and strategies</li>
            <li>Services, features, and functionality details</li>
            <li>Customer lists, user data, and market information</li>
            <li>
              Software, source code, algorithms, and technical specifications
            </li>
            <li>
              Developments, inventions, processes, formulas, and technology
            </li>
            <li>Designs, drawings, and engineering information</li>
            <li>Hardware configuration information</li>
            <li>Marketing plans and strategies</li>
            <li>Financial information, pricing, and business plans</li>
            <li>Strategic plans and business information</li>
            <li>
              Information about Briggo&apos;s staff, partners, or business
              operations
            </li>
            <li>
              Any other proprietary or confidential information disclosed in
              writing, orally, by observation, or otherwise marked or identified
              as confidential
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            15.2 Confidentiality Obligations
          </h3>
          <p>You agree that you will NOT:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Disclose Confidential Information to any third party without
              Briggo&apos;s prior written consent
            </li>
            <li>
              Transfer or use Confidential Information for any purpose other
              than using the Services in accordance with this Agreement
            </li>
            <li>
              Induce others to disclose, transfer, or use Confidential
              Information
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            Permitted Disclosures: You may disclose Confidential Information to
            your authorized employees and agents who:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Have a legitimate need to know</li>
            <li>
              Are bound by confidentiality obligations at least as restrictive
              as those in this Agreement
            </li>
            <li>
              Have been informed of the confidential nature of the information
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            15.3 Protection Standards
          </h3>
          <p>You shall:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Use your best efforts to protect Confidential Information from
              unauthorized disclosure, transfer, or use
            </li>
            <li>
              Use at least the same degree of care you use to protect your own
              confidential information (but no less than reasonable care)
            </li>
            <li>
              Promptly notify Briggo in writing of any circumstances that may
              constitute unauthorized disclosure, transfer, or use of
              Confidential Information
            </li>
            <li>
              Cooperate with Briggo in protecting Confidential Information and
              mitigating any breach
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            15.4 Return of Confidential Information
          </h3>
          <p>Upon termination of this Agreement for any reason, you shall:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Immediately cease using all Confidential Information</li>
            <li>
              Return all originals and copies of materials containing
              Confidential Information to Briggo
            </li>
            <li>
              Destroy (with written certification) any Confidential Information
              that cannot be returned
            </li>
            <li>
              Confirm in writing that all Confidential Information has been
              returned or destroyed
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">15.5 Exceptions</h3>
          <p>Confidential Information does NOT include information that:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Was publicly known at the time of disclosure</li>
            <li>
              Becomes publicly known through no breach of this Agreement by you
            </li>
            <li>
              Was rightfully in your possession before disclosure by Briggo (as
              evidenced by written records)
            </li>
            <li>
              Is independently developed by you without use of or reference to
              Confidential Information (as evidenced by written records)
            </li>
            <li>
              Is rightfully received by you from a third party without breach of
              any confidentiality obligation
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            15.6 Compelled Disclosure
          </h3>
          <p>
            If you are legally compelled (by court order, subpoena, or other
            legal process) to disclose Confidential Information, you shall:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Provide Briggo with prompt written notice (unless prohibited by
              law)
            </li>
            <li>
              Cooperate with Briggo in seeking a protective order or other
              appropriate remedy
            </li>
            <li>
              Disclose only the minimum Confidential Information required by law
            </li>
            <li>Request confidential treatment of the disclosed information</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">15.7 Survival</h3>
          <p>
            Your confidentiality obligations shall survive termination of this
            Agreement for a period of 5 years or for as long as the information
            remains confidential and proprietary, whichever is longer.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            16. DISCLAIMER OF WARRANTIES
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">16.1 AS-IS Basis</h3>
          <p className="font-semibold">
            THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; BASIS WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
            EITHER EXPRESS OR IMPLIED.
          </p>
          <p className="mt-4 font-semibold">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BRIGGO DISCLAIMS
            ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT
            LIMITED TO:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>WARRANTIES OF MERCHANTABILITY</li>
            <li>WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE</li>
            <li>WARRANTIES OF NON-INFRINGEMENT</li>
            <li>WARRANTIES OF TITLE</li>
            <li>WARRANTIES OF ACCURACY, COMPLETENESS, OR RELIABILITY</li>
            <li>WARRANTIES OF QUIET ENJOYMENT</li>
            <li>WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            16.2 No Guarantees
          </h3>
          <p className="font-semibold">
            BRIGGO MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              The reliability, timeliness, quality, suitability, availability,
              accuracy, or completeness of the Services
            </li>
            <li>
              That the Services will be uninterrupted, secure, or error-free
            </li>
            <li>That defects will be corrected</li>
            <li>
              That the Services or servers are free of viruses or other harmful
              components
            </li>
            <li>The content provided by or transmitted via the Services</li>
            <li>The content of any sites linked to the Services</li>
            <li>The results that may be obtained from using the Services</li>
            <li>
              Any content provided through Third-Party Accounts or Third-Party
              Tools
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            16.3 Assumption of No Liability
          </h3>
          <p className="font-semibold">
            BRIGGO ASSUMES NO LIABILITY OR RESPONSIBILITY FOR:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              <span className="font-semibold">Errors or Mistakes:</span> Bugs,
              errors, mistakes, or inaccuracies in content, data, or Services
            </li>
            <li>
              <span className="font-semibold">
                Personal Injury or Property Damage:
              </span>{" "}
              Personal injury, property damage, or any other harm resulting from
              your access to or use of the Services
            </li>
            <li>
              <span className="font-semibold">Unauthorized Access:</span> Any
              unauthorized access to or use of our secure servers and/or any
              personal information, business information, or financial
              information stored therein
            </li>
            <li>
              <span className="font-semibold">Service Interruptions:</span> Any
              interruption or cessation of transmission to or from the Services
            </li>
            <li>
              <span className="font-semibold">Third-Party Conduct:</span> Any
              bugs, viruses, Trojan horses, or the like transmitted by any third
              party
            </li>
            <li>
              <span className="font-semibold">Content Errors:</span> Any errors
              or omissions in any content or for any loss or damage incurred
              from using content posted, emailed, transmitted, or otherwise made
              available via the Services
            </li>
            <li>
              <span className="font-semibold">Force Majeure Events:</span>{" "}
              Events beyond our reasonable control, including acts of God,
              natural disasters, pandemics, war, terrorism, riots, governmental
              actions, internet failures, telecommunications failures, or
              third-party platform failures
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            16.4 Third-Party Services
          </h3>
          <p className="font-semibold">BRIGGO IS NOT RESPONSIBLE FOR:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              The accuracy, reliability, or availability of third-party
              platforms (Facebook, Instagram, WhatsApp, etc.)
            </li>
            <li>Changes to third-party platform APIs, policies, or terms</li>
            <li>Termination of access to third-party platforms</li>
            <li>Third-party payment processor failures or issues</li>
            <li>Third-Party Tools or websites linked from the Services</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            16.5 No Warranty for Integrations
          </h3>
          <p>Briggo does not warrant that:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              The Services will integrate successfully with all third-party
              platforms
            </li>
            <li>
              Integrations will continue to function after third-party platform
              updates
            </li>
            <li>Third-party platforms will approve or maintain your access</li>
            <li>
              Data will transfer accurately between the Services and third-party
              platforms
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            16.6 Download and Usage Risks
          </h3>
          <p className="font-semibold">YOU ACKNOWLEDGE AND AGREE THAT:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>You download from or use the Services at your own risk</li>
            <li>
              You are solely responsible for any damage to your computer system
              or mobile device
            </li>
            <li>
              You are solely responsible for any loss of data that results from
              such download or use
            </li>
            <li>
              Briggo is not responsible for any damage caused by viruses or
              other technologically harmful material
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            16.7 Professional Advice Disclaimer
          </h3>
          <p className="font-semibold">
            THE SERVICES ARE NOT A SUBSTITUTE FOR PROFESSIONAL ADVICE.
          </p>
          <p>
            You should consult with appropriate professionals (legal, tax,
            business, technical) regarding:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Compliance with applicable laws and regulations</li>
            <li>Tax obligations related to your use of the Services</li>
            <li>Legal requirements specific to your business or industry</li>
            <li>Technical implementations and security measures</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            16.8 Jurisdictional Limitations
          </h3>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties
            or conditions. In such jurisdictions, the above exclusions may not
            apply to you to the extent prohibited by law. In such cases,
            Briggo&apos;s liability shall be limited to the maximum extent
            permitted by applicable law.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            16.9 Acknowledgment
          </h3>
          <p className="font-semibold">
            YOU ACKNOWLEDGE THAT YOU HAVE READ THIS SECTION, UNDERSTAND IT, AND
            AGREE TO BE BOUND BY ITS TERMS.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            17. LIMITATION OF LIABILITY
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            17.1 Exclusion of Damages
          </h3>
          <p className="font-semibold">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            BRIGGO, ITS AFFILIATES, CORPORATE PARTNERS, DIRECTORS, OFFICERS,
            EMPLOYEES, CONTRACTORS, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE
            FOR ANY:
          </p>

          <p className="mt-4 font-semibold">Indirect Damages:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Indirect damages</li>
            <li>Incidental damages</li>
            <li>Consequential damages</li>
            <li>Special damages</li>
            <li>Exemplary damages</li>
            <li>Punitive damages</li>
          </ul>

          <p className="mt-4 font-semibold">Economic Losses:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Lost profits or revenues</li>
            <li>Loss of business or anticipated savings</li>
            <li>Loss of goodwill or reputation</li>
            <li>Loss of opportunity</li>
            <li>Loss of data or information</li>
            <li>Loss of use of equipment or facilities</li>
          </ul>

          <p className="mt-4 font-semibold">Service Disruptions:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Service interruption</li>
            <li>Computer damage</li>
            <li>System failure</li>
            <li>
              Failure to store any information or content maintained or
              transmitted by Briggo
            </li>
            <li>Cost of substitute products or services</li>
            <li>Cost of procurement of replacement services</li>
          </ul>

          <p className="mt-4 font-semibold">Arising From or Relating To:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Your use of or inability to use the Services</li>
            <li>Any conduct or content of any user or third party</li>
            <li>Any content obtained from the Services</li>
            <li>
              Unauthorized access, use, or alteration of your transmissions or
              content
            </li>
            <li>Statements or conduct of any third party on the Services</li>
            <li>Any other matter relating to the Services</li>
          </ul>

          <p className="mt-4 font-semibold">Whether Based On:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Warranty</li>
            <li>Contract</li>
            <li>Tort (including negligence)</li>
            <li>Product liability</li>
            <li>Strict liability</li>
            <li>Statute</li>
            <li>Any other legal theory</li>
          </ul>

          <p className="mt-4 font-semibold">Even If:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Briggo has been advised of the possibility of such damages</li>
            <li>Such damages were reasonably foreseeable</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            17.2 Cap on Liability
          </h3>
          <p className="font-semibold">
            IF LIABILITY IS ESTABLISHED NOTWITHSTANDING THE FOREGOING, BRIGGO’S
            AGGREGATE LIABILITY SHALL NOT EXCEED THE GREATER OF:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              The total fees paid by you to Briggo during the six (6) months
              immediately preceding the event giving rise to the claim; or
            </li>
            <li>Ten Thousand Indian Rupees (₹10,000)</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            17.3 Allocation of Risk
          </h3>
          <p>
            The limitations and exclusions in this Section reflect a reasonable
            allocation of risk between you and Briggo and shall apply even if
            any limited remedy fails of its essential purpose.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            17.4 Basis of the Bargain
          </h3>
          <p>
            You acknowledge that Briggo has offered the Services, set its
            prices, and entered into this Agreement in reliance upon these
            disclaimers and limitations, which form an essential basis of the
            bargain between you and Briggo.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            17.5 Jurisdictional Limitations
          </h3>
          <p>
            Some jurisdictions do not allow certain exclusions or limitations.
            In such cases, these limitations apply to the fullest extent
            permitted by applicable law.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            17.6 Claims Must Be Filed Within One Year
          </h3>
          <p className="font-semibold">
            TO THE EXTENT PERMITTED BY LAW, ANY CLAIM ARISING OUT OF OR RELATING
            TO THIS AGREEMENT OR THE SERVICES MUST BE FILED WITHIN ONE (1) YEAR
            OR BE PERMANENTLY BARRED.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            17.7 No Liability for Force Majeure
          </h3>
          <p>
            Briggo shall not be liable for failures caused by events beyond its
            reasonable control, including those described in Section 23.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            17.8 Essential Terms
          </h3>
          <p className="font-semibold">
            YOU ACKNOWLEDGE THAT SECTIONS 16 AND 17 ARE ESSENTIAL TERMS AND THAT
            BRIGGO WOULD NOT PROVIDE THE SERVICES WITHOUT THESE LIMITATIONS.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            18. DISPUTE RESOLUTION – BINDING ARBITRATION
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.1 Agreement to Arbitrate
          </h3>
          <p className="font-semibold">
            PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS,
            INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
          </p>
          <p className="mt-4">
            You and Briggo agree that any dispute, claim, or controversy arising
            out of or relating to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              This Agreement or the breach, termination, enforcement,
              interpretation, or validity thereof
            </li>
            <li>Your access to or use of the Services</li>
            <li>Any aspect of your relationship with Briggo</li>
          </ul>
          <p className="mt-4">
            Shall be resolved through final and binding arbitration rather than
            in court, except that:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You may assert claims in small claims court if your claims qualify
              and remain in small claims court
            </li>
            <li>
              You or Briggo may seek equitable relief in court for infringement
              or other misuse of intellectual property rights
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.2 Arbitration Rules and Forum
          </h3>
          <ul className="mt-2 ml-8 space-y-2 list-disc">
            <li>
              <span className="font-semibold">Governing Law:</span> This
              Agreement and any dispute arising out of or related to it shall be
              governed by the laws of India, without regard to conflict of law
              principles.
            </li>
            <li>
              <span className="font-semibold">Arbitration Act:</span> Any
              arbitration shall be conducted in accordance with the Arbitration
              and Conciliation Act, 1996 (as amended).
            </li>
            <li>
              <span className="font-semibold">Seat of Arbitration:</span> Surat,
              Gujarat, India. All hearings shall take place in Surat unless
              mutually agreed otherwise.
            </li>
            <li>
              <span className="font-semibold">Language:</span> English
            </li>
          </ul>

          <p className="mt-4 font-semibold">Arbitrator Selection:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              A sole arbitrator mutually agreed upon within 15 days of the
              arbitration notice
            </li>
            <li>
              If no agreement is reached, appointment by the District Court of
              Surat, Gujarat in accordance with applicable law
            </li>
          </ul>

          <p className="mt-4 font-semibold">Arbitrator Qualifications:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Independent and impartial</li>
            <li>
              Expertise in commercial law and preferably technology services
              disputes
            </li>
            <li>No conflict of interest with either party</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.3 Arbitration Process
          </h3>
          <p className="font-semibold">Notice of Arbitration:</p>
          <p className="mt-2">
            Written notice must be sent by registered post or email:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              <span className="font-semibold">To Briggo:</span>{" "}
              support@briggo.in
            </li>
            <li>
              <span className="font-semibold">To You:</span> Email address
              associated with your Account
            </li>
          </ul>
          <p className="mt-4">The notice must include:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Description of the nature and basis of the dispute</li>
            <li>Specific relief sought</li>
            <li>Claimant contact information</li>
          </ul>

          <p className="mt-4">
            <span className="font-semibold">Response:</span> The responding
            party shall have 30 days to respond.
          </p>
          <p className="mt-2">
            <span className="font-semibold">Good Faith Negotiations:</span> The
            parties agree to attempt resolution for 30 days prior to initiating
            arbitration.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.4 Arbitration Procedures
          </h3>
          <ul className="mt-2 ml-8 space-y-2 list-disc">
            <li>
              <span className="font-semibold">Discovery:</span> Limited to what
              the arbitrator deems necessary for efficient resolution
            </li>
            <li>
              <span className="font-semibold">Confidentiality:</span> All
              proceedings and materials shall remain confidential except as
              required by law or to enforce the award
            </li>
            <li>
              <span className="font-semibold">Hearing:</span> Scheduled within
              90 days of arbitrator appointment (unless extended)
            </li>
            <li>
              <span className="font-semibold">Award:</span>
              <ul className="mt-2 ml-6 space-y-1 list-disc">
                <li>Written award within 60 days of hearing conclusion</li>
                <li>Includes findings of fact and conclusions of law</li>
                <li>Final and binding on both parties</li>
                <li>Enforceable in any court of competent jurisdiction</li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.5 Costs and Fees
          </h3>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Each party bears its own legal and related costs</li>
            <li>
              Arbitrator fees shared equally unless otherwise determined by the
              arbitrator
            </li>
            <li>
              Costs and attorney’s fees may be awarded to the prevailing party
              if warranted by law, bad faith, or frivolous claims
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.6 Class Action Waiver
          </h3>
          <p className="font-semibold">
            YOU AND BRIGGO AGREE THAT CLAIMS MAY BE BROUGHT ONLY IN AN
            INDIVIDUAL CAPACITY AND NOT AS PART OF ANY CLASS OR REPRESENTATIVE
            ACTION.
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>No consolidation of claims without written consent</li>
            <li>No class, representative, or consolidated proceedings</li>
            <li>Relief limited to the individual party seeking relief</li>
          </ul>
          <p className="mt-4">
            If this class action waiver is found unenforceable, the entire
            arbitration provision shall be null and void.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.7 Opt-Out Right
          </h3>
          <p>
            You may opt out of this arbitration provision by sending written
            notice within 30 days of acceptance or material change.
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              <span className="font-semibold">Email:</span> support@briggo.in
            </li>
            <li>Include full name, email, and Account information</li>
            <li>Clearly state intent to opt out</li>
          </ul>
          <p className="mt-4">
            If you opt out, all other terms remain in effect and disputes will
            be resolved in court as specified elsewhere in this Agreement.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">18.8 Severability</h3>
          <p>
            If any portion of this arbitration provision is unenforceable, it
            shall be severed without affecting the remainder, except that
            unenforceability of the class action waiver renders this entire
            provision void.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">18.9 Survival</h3>
          <p>
            This arbitration provision shall survive termination of your
            Account, termination of this Agreement, and cessation of Service
            use.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.10 Limitation Period
          </h3>
          <p>
            Any claim arising out of or relating to this Agreement or the
            Services must be filed within one (1) year of accrual or be
            permanently barred.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.11 Small Claims Court
          </h3>
          <p>
            You may bring qualifying individual claims in small claims court in
            Surat, Gujarat, provided the matter remains individual and
            non-representative.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.12 Equitable Relief
          </h3>
          <p>
            Either party may seek interim or preliminary equitable relief in
            courts of Surat, Gujarat to protect intellectual property, prevent
            irreparable harm, or preserve the status quo. Such action does not
            waive arbitration rights.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            18.13 Acknowledgment
          </h3>
          <p className="font-semibold">
            BY AGREEING TO THIS AGREEMENT, YOU ACKNOWLEDGE THAT YOU HAVE READ
            AND UNDERSTOOD THIS ARBITRATION PROVISION AND AGREE TO BINDING
            INDIVIDUAL ARBITRATION.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            19. INDEMNIFICATION
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            19.1 Your Indemnification Obligations
          </h3>
          <p>
            You agree to indemnify, defend, and hold harmless Briggo and its
            owners, members, managers, directors, officers, employees, agents,
            attorneys, insurers, successors, and assigns (collectively, the{" "}
            <span className="font-semibold">“Indemnified Parties”</span>) from
            and against any and all claims, demands, actions, suits,
            proceedings, losses, liabilities, damages, settlements, and costs
            and expenses (including reasonable attorneys’ fees, court costs, and
            expert witness fees) (collectively,{" "}
            <span className="font-semibold">“Liabilities”</span>) arising out of
            or relating to:
          </p>

          <ul className="mt-3 ml-8 space-y-1 list-disc">
            <li>Your use or inability to use the Services</li>
            <li>Your breach or violation of this Agreement</li>
            <li>
              Your violation of any law, rule, or regulation (including
              electronic messaging laws, TRAI regulations, data protection laws,
              consumer protection laws, or other applicable laws)
            </li>
            <li>
              Your violation of the rights of any user or third party, including
              intellectual property, privacy, or publicity rights
            </li>
            <li>
              Any content submitted by you or through your Account that
              infringes third-party rights or is unlawful
            </li>
            <li>Your User Generated Content</li>
            <li>
              Your use of software robots, spiders, crawlers, or similar data
              gathering tools
            </li>
            <li>
              Any action that imposes an unreasonable burden or load on Briggo’s
              infrastructure
            </li>
            <li>Your relationship or disputes with end users or customers</li>
            <li>
              Your sale of User Products or provision of services through the
              Services
            </li>
            <li>
              Chargebacks, payment disputes, or fraudulent transactions related
              to your Account
            </li>
            <li>
              Claims arising from your relationship with an Agency or Business
              Owner (if applicable)
            </li>
            <li>
              Any fraudulent, malicious, or illegal activity conducted through
              your Account
            </li>
            <li>
              Your failure to comply with platform policies of Facebook,
              Instagram, WhatsApp, or other integrated platforms
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            19.2 Defense and Settlement
          </h3>

          <p className="font-semibold">Defense Obligations</p>
          <p>
            You agree to promptly indemnify, defend, or settle any third-party
            claim, demand, lawsuit, investigation, or proceeding brought against
            the Indemnified Parties that is subject to indemnification under
            this Section.
          </p>

          <p className="mt-4 font-semibold">Briggo’s Rights</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Assume the exclusive defense and control of any matter otherwise
              subject to indemnification, at its own expense
            </li>
            <li>
              Require your reasonable cooperation in defending such claims
            </li>
            <li>
              Approve any settlement that affects Briggo’s rights or interests
            </li>
          </ul>

          <p className="mt-4 font-semibold">Briggo’s Cooperation</p>
          <p>
            If you are defending a claim subject to indemnification, Briggo
            will, where legally permissible:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Promptly notify you of the claim</li>
            <li>
              Provide reasonable information, assistance, and cooperation in the
              defense
            </li>
            <li>
              Allow you to control the defense and settlement, subject to
              Briggo’s prior approval of any settlement that:
              <ul className="mt-2 ml-6 space-y-1 list-disc">
                <li>Admits liability or wrongdoing on behalf of Briggo</li>
                <li>Imposes obligations or restrictions on Briggo</li>
                <li>
                  Affects Briggo’s rights, reputation, or business interests
                </li>
              </ul>
            </li>
          </ul>

          <p className="mt-4 font-semibold">Settlement Restrictions</p>
          <p>
            You may not settle any claim subject to indemnification in a manner
            that admits liability on behalf of Briggo, imposes obligations on
            Briggo, affects Briggo’s intellectual property rights, or otherwise
            impacts Briggo’s interests without Briggo’s prior written consent
            (which shall not be unreasonably withheld).
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            19.3 No Settlement Without Consent
          </h3>
          <p>
            You may not, under any circumstances, settle any claim or matter
            subject to indemnification without Briggo’s prior written consent.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">19.4 Cooperation</h3>
          <p>
            You agree to fully cooperate with Briggo in the defense of any claim
            by:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Providing access to relevant documents and information</li>
            <li>Making yourself available for depositions and testimony</li>
            <li>Assisting in developing defense strategy</li>
            <li>Preserving all relevant evidence</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">19.5 Survival</h3>
          <p className="font-semibold">
            Your indemnification obligations shall survive termination of this
            Agreement, termination of your Account, and your cessation of use of
            the Services.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            20. GOVERNING LAW AND JURISDICTION
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            20.1 Governing Law
          </h3>
          <p>
            This Agreement and your use of the Services shall be governed by and
            construed in accordance with the laws of India, without regard to
            its conflict of law principles.
          </p>
          <p className="mt-4">
            This choice of law provision is intended to specify the use of
            Indian law to interpret this Agreement and does not override any
            mandatory consumer protection laws that may apply in your
            jurisdiction.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            20.2 Jurisdiction for Non-Arbitrable Disputes
          </h3>
          <p>
            To the extent that the arbitration provision in Section 18 does not
            apply (including if you have validly opted out of arbitration), or
            for matters that are specifically excluded from arbitration:
          </p>
          <p className="mt-4 font-semibold">Exclusive Jurisdiction</p>
          <p>
            Any dispute, claim, or controversy shall be resolved exclusively in
            the courts located in Surat, Gujarat, India.
          </p>
          <p className="mt-4 font-semibold">Consent to Jurisdiction</p>
          <p>
            You irrevocably consent and submit to the personal jurisdiction of
            such courts and waive any objection to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>The jurisdiction of such courts</li>
            <li>The venue of such courts</li>
            <li>The inconvenience of such forum</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            20.3 Waiver of Jury Trial
          </h3>
          <p className="font-semibold">
            TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU AND BRIGGO WAIVE ANY
            RIGHT TO A JURY TRIAL IN CONNECTION WITH ANY ACTION OR LITIGATION IN
            ANY WAY ARISING OUT OF OR RELATED TO THIS AGREEMENT.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            20.4 Cooperation with Law Enforcement
          </h3>
          <p>
            Briggo respects the laws of India and submits itself to the
            jurisdiction of Indian authorities. Briggo will, where deemed
            necessary and legally appropriate:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Provide relevant information to law enforcement agencies</li>
            <li>Cooperate with law enforcement investigations</li>
            <li>Comply with lawful requests for user information</li>
            <li>
              Report suspected criminal activity to appropriate authorities
            </li>
          </ul>
          <p className="mt-4">
            All disclosures to law enforcement will be made in accordance with
            our Privacy Policy and applicable law.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            20.5 International Users
          </h3>
          <p>
            If you access the Services from outside India, you do so at your own
            risk and are responsible for compliance with the laws of your
            jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            21. DATA PROTECTION AND PRIVACY
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            21.1 Privacy Policy
          </h3>
          <p>
            Our Privacy Policy, available at{" "}
            <a
              href="https://briggo.in/privacy"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://briggo.in/privacy
            </a>
            , describes how we collect, use, store, and disclose your personal
            information. By using the Services, you consent to our Privacy
            Policy. The Privacy Policy is incorporated into this Agreement by
            reference.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            21.2 Data Processing
          </h3>
          <p>By using the Services, you acknowledge and agree that:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Briggo may collect, process, and store your personal information
              and business data
            </li>
            <li>
              Briggo may transfer data to third-party service providers (payment
              processors, cloud hosting providers, etc.) as necessary to provide
              the Services
            </li>
            <li>Briggo may process data in jurisdictions outside of India</li>
            <li>
              Data processing will be conducted in accordance with our Privacy
              Policy
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            21.3 Data Security
          </h3>
          <p>
            Briggo implements reasonable technical and organizational measures
            to protect your data. However:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>No method of transmission or storage is 100% secure</li>
            <li>Briggo cannot guarantee absolute security of your data</li>
            <li>
              You are responsible for maintaining the security of your Account
              credentials
            </li>
            <li>
              You should not transmit highly sensitive data (health records,
              financial account numbers, government IDs) through the Services
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            21.4 Data Retention
          </h3>
          <p>
            Briggo retains data as described in Section 11.7 and our Privacy
            Policy. In summary:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Active account data is retained during your Account lifecycle
            </li>
            <li>Deleted account data is purged within 90 days</li>
            <li>Backup data may persist up to 180 days</li>
            <li>
              Some data may be retained longer for legal or business reasons
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">21.5 Your Rights</h3>
          <p>
            Subject to applicable law, you may have certain rights regarding
            your personal data, including:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Right to access your data</li>
            <li>Right to correct inaccurate data</li>
            <li>
              Right to delete your data (subject to legal retention
              requirements)
            </li>
            <li>Right to data portability</li>
            <li>Right to opt out of marketing communications</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, contact{" "}
            <a
              href="mailto:support@briggo.in"
              className="text-blue-600 underline"
            >
              support@briggo.in
            </a>
            .
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            {`21.6 Children's Privacy`}
          </h3>
          <p>
            The Services are not intended for users under 18 years of age.
            Briggo does not knowingly collect personal information from children
            under 18. If you become aware that a child has provided us with
            personal information, please contact{" "}
            <a
              href="mailto:support@briggo.in"
              className="text-blue-600 underline"
            >
              support@briggo.in
            </a>
            , and we will take steps to delete such information.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            21.7 Data Breach Notification
          </h3>
          <p>
            In the event of a data breach that affects your personal
            information, Briggo will:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Investigate the breach promptly</li>
            <li>Take steps to mitigate the impact</li>
            <li>Notify affected users in accordance with applicable law</li>
            <li>
              Report the breach to relevant authorities as required by law
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            22. SERVICE LEVEL COMMITMENTS
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            22.1 Uptime Target
          </h3>
          <p>
            Briggo will use commercially reasonable efforts to maintain the
            Services with an uptime target of 99.5% per calendar month (the{" "}
            <span className="font-semibold">“Uptime Target”</span>), calculated
            as follows:
          </p>
          <p className="mt-2 font-mono">
            Uptime Percentage = (Total Minutes in Month - Downtime Minutes) /
            Total Minutes in Month × 100
          </p>

          <p className="mt-4 font-semibold">Exclusions from Downtime</p>
          <p>
            {`The following are NOT counted as "Downtime" for purposes of the
            Uptime Target:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>{`Scheduled maintenance (with at least 48 hours' notice)`}</li>
            <li>
              Emergency maintenance (necessary to prevent security issues or
              data loss)
            </li>
            <li>
              {`Downtime caused by factors outside Briggo's reasonable control,
              including:`}
            </li>
            <ul className="mt-1 ml-6 space-y-1 list-disc">
              <li>
                Third-party platform failures (Facebook, Instagram, WhatsApp
                outages)
              </li>
              <li>Internet service provider failures</li>
              <li>Denial of service attacks or other malicious activity</li>
              <li>
                Acts of God, natural disasters, pandemics, war, or terrorism
              </li>
            </ul>
            <li>Your equipment, internet connection, or software issues</li>
            <li>Your violation of this Agreement</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            22.2 Scheduled Maintenance
          </h3>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              {`Briggo will provide at least 48 hours' notice via email or in-app
              notification`}
            </li>
            <li>
              Maintenance will generally be scheduled during low-usage periods
              (where feasible)
            </li>
            <li>
              Briggo will use reasonable efforts to minimize the duration and
              impact of maintenance
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            22.3 Emergency Maintenance
          </h3>
          <p>
            Briggo may perform emergency maintenance without advance notice when
            necessary to:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Address critical security vulnerabilities</li>
            <li>Prevent data loss or corruption</li>
            <li>Restore service functionality</li>
            <li>Comply with legal or regulatory requirements</li>
          </ul>
          <p className="mt-2">
            Briggo will notify users of emergency maintenance as soon as
            practicable.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            22.4 No Service Level Credits
          </h3>
          <p>
            {`IMPORTANT: This Section 22 describes Briggo's service level
            commitments but does NOT entitle you to any service credits,
            refunds, or compensation if these targets are not met. Service level
            commitments are goals that Briggo strives to achieve but are not
            guaranteed service levels for which remedies are available.`}
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">22.5 No Warranty</h3>
          <p>
            {`Nothing in this Section 22 modifies or limits the disclaimer of
            warranties in Section 16. The Services are still provided "AS IS"
            and "AS AVAILABLE."`}
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            23. FORCE MAJEURE
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            23.1 Force Majeure Events
          </h3>
          <p>
            {`Neither party shall be liable to the other for any failure or delay
            in performing its obligations under this Agreement (except for
            payment obligations) to the extent such failure or delay is caused
            by events, circumstances, or causes beyond that party's reasonable
            control ("Force Majeure Event"), including but not limited to:`}
          </p>

          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              <span className="font-semibold">Natural Disasters:</span>
              Earthquakes, floods, tsunamis, hurricanes, typhoons, or other
              natural catastrophes; fires, explosions, or other environmental
              disasters; pandemics, epidemics, or outbreaks of infectious
              disease
            </li>
            <li>
              <span className="font-semibold">Acts of Government:</span>
              War (declared or undeclared), invasion, acts of foreign enemies,
              or military operations; terrorism or civil unrest; government
              orders, embargoes, blockades, or sanctions; changes in law or
              regulation that prevent performance
            </li>
            <li>
              <span className="font-semibold">Infrastructure Failures:</span>
              {`Internet backbone or routing failures; telecommunications or data
              network failures; power outages or electrical grid failures;
              failures of cloud hosting providers or data centers (beyond
              Briggo's control)`}
            </li>
            <li>
              <span className="font-semibold">
                Third-Party Platform Issues:
              </span>
              Changes to APIs or policies by Facebook, Instagram, WhatsApp, or
              other platforms; termination of access to third-party platforms;
              third-party platform outages or service degradation
            </li>
            <li>
              <span className="font-semibold">Cyber Events:</span>
              Distributed denial of service (DDoS) attacks; large-scale hacking
              or cyber-attacks; malware or virus outbreaks affecting internet
              infrastructure
            </li>
            <li>
              <span className="font-semibold">Other Events:</span>
              {`Strikes, lockouts, or labor disputes (beyond the affected party's
              organization); supplier failures or shortages of materials; any
              other cause beyond the reasonable control of the affected party`}
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            23.2 Notice of Force Majeure
          </h3>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Notify the other party as soon as reasonably practicable</li>
            <li>
              Provide details of the Force Majeure Event and its expected
              duration
            </li>
            <li>Provide updates on the status of the Force Majeure Event</li>
            <li>
              Resume performance as soon as the Force Majeure Event ceases
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            23.3 Mitigation Efforts
          </h3>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Use commercially reasonable efforts to mitigate the effects of the
              Force Majeure Event
            </li>
            <li>
              Use commercially reasonable efforts to find alternative means of
              performance
            </li>
            <li>Resume normal performance as soon as reasonably possible</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            23.4 Termination for Extended Force Majeure
          </h3>
          <p>
            If a Force Majeure Event continues for more than 60 consecutive
            days, either party may terminate this Agreement by providing written
            notice to the other party.
          </p>
          <p className="mt-2">Upon such termination:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              You may request a pro-rata refund of any prepaid, unused tokens or
              fees
            </li>
            <li>Briggo will process such refunds within 30 days</li>
            <li>
              All other provisions of this Agreement regarding termination shall
              apply
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            23.5 Payment Obligations
          </h3>
          <p>
            Notwithstanding the foregoing, Force Majeure does not excuse your
            obligation to pay fees that have already accrued or are otherwise
            due.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            24. NO AGENCY; NO EMPLOYMENT
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            24.1 Independent Contractor Relationship
          </h3>
          <p>
            No agency, partnership, joint venture, employer-employee, or
            franchiser-franchisee relationship is intended or created by this
            Agreement.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">24.2 No Authority</h3>
          <p>You have no authority to:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Bind Briggo to any contract or obligation</li>
            <li>Make any representations or warranties on behalf of Briggo</li>
            <li>Incur any liability on behalf of Briggo</li>
            <li>
              Represent yourself as an agent, employee, or representative of
              Briggo (unless explicitly authorized in writing)
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            24.3 Independent Business
          </h3>
          <p>You acknowledge and agree that:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>You are operating an independent business</li>
            <li>
              You are solely responsible for your business decisions and
              operations
            </li>
            <li>
              You are responsible for your own taxes, licenses, and regulatory
              compliance
            </li>
            <li>
              Briggo has no control over your business practices or decisions
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            25. GENERAL PROVISIONS
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            25.1 Entire Agreement
          </h3>
          <p>
            This Agreement (including the Privacy Policy and any other policies
            incorporated by reference) constitutes the complete and exclusive
            agreement between you and Briggo with respect to its subject matter
            and supersedes and governs all prior or contemporaneous agreements,
            communications, and understandings, whether written or oral.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">25.2 Amendments</h3>
          <p>
            Briggo reserves the right to modify this Agreement at any time in
            accordance with Section 26. Continued use of the Services after
            modifications constitutes acceptance of the modified Agreement.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">25.3 Waiver</h3>
          <p>
            The failure of Briggo to enforce any provision of this Agreement
            shall not be construed as a waiver of such provision or right. No
            waiver of any provision shall be effective unless in writing and
            signed by Briggo. Any waiver by Briggo of any breach or default
            shall not constitute a waiver of any subsequent breach or default.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">25.4 Severability</h3>
          <p>
            If any provision of this Agreement is found to be invalid, illegal,
            or unenforceable by a court of competent jurisdiction:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Such provision shall be modified or restructured to the extent
              necessary to render it valid, legal, and enforceable while
              preserving its intent to the maximum extent possible
            </li>
            <li>
              If such provision cannot be so modified, it shall be excised from
              this Agreement
            </li>
            <li>
              The remaining provisions of this Agreement shall remain in full
              force and effect
            </li>
          </ul>
          <p className="mt-2">The parties agree that:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              The invalidity or unenforceability of any provision shall not
              affect any other provision
            </li>
            <li>
              {`The court should endeavor to give effect to the parties'
              intentions as reflected in the provision`}
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">25.5 Assignment</h3>
          <p>
            <span className="font-semibold">By You:</span> You may NOT assign or
            transfer this Agreement or any of your rights or obligations under
            this Agreement without {`Briggo's`} prior written consent. Any
            attempted assignment or transfer without such consent shall be null
            and void.
          </p>
          <p className="mt-2">
            <span className="font-semibold">By Briggo:</span> Briggo may assign
            or transfer this Agreement or any of its rights or obligations under
            this Agreement without your consent or notice, including but not
            limited to assignments:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>To a parent company, subsidiary, or affiliated entity</li>
            <li>{`To an acquirer of Briggo's assets or business`}</li>
            <li>
              To any successor or acquirer in connection with a merger,
              acquisition, reorganization, or sale of substantially all assets
            </li>
            <li>To any other party for any business reason</li>
          </ul>
          <p className="mt-2">
            Any assignment in violation of this section shall be null and void.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            25.6 Binding Effect
          </h3>
          <p>
            This Agreement shall inure to the benefit of and be binding upon:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>The parties hereto</li>
            <li>Their respective successors and permitted assigns</li>
            <li>
              {`Briggo's affiliates, officers, directors, employees, agents, and
              service providers (who are third-party beneficiaries of Sections
              16, 17, 18, and 19)`}
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">25.7 Headings</h3>
          <p>
            The section and subsection headings in this Agreement are for
            convenience only and shall not affect the interpretation of this
            Agreement.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            25.8 Interpretation
          </h3>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>{`"Including" means "including without limitation"`}</li>
            <li>Singular includes plural and vice versa</li>
            <li>{`"Or" is not exclusive`}</li>
            <li>
              References to sections are to sections of this Agreement unless
              otherwise stated
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">25.9 Language</h3>
          <p>
            This Agreement is drafted in English. If this Agreement is
            translated into any other language, the English version shall
            prevail in case of any conflict or inconsistency.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            25.10 Counterparts
          </h3>
          <p>
            This Agreement may be executed in counterparts, each of which shall
            be deemed an original and all of which together shall constitute one
            and the same instrument.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            25.11 Electronic Signatures
          </h3>
          <p>
            You consent to electronic signatures and agree that electronic
            signatures have the same legal effect as handwritten signatures.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            26. CHANGES TO THIS AGREEMENT AND THE SERVICES
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            26.1 Right to Modify
          </h3>
          <p>
            Briggo reserves the right, at its sole and absolute discretion, to
            change, modify, add to, supplement, suspend, discontinue, or delete
            any of the terms and conditions of this Agreement (including these
            Terms of Service and Privacy Policy) at any time. Briggo may also
            review, improve, modify, or discontinue, temporarily or permanently,
            the Services or any content or information through the Services at
            any time, with or without notice.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            26.2 Notice of Material Changes
          </h3>
          <p>For material changes to this Agreement:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Briggo will endeavor to notify you by email at least 30 days
              before the changes take effect
            </li>
            <li>
              Notice will be sent to the email address associated with your
              Account
            </li>
            <li>Material changes will also be posted on the Site</li>
            <li>{`The updated Agreement will indicate the "Last Updated" date`}</li>
          </ul>
          <p className="mt-2">Material changes include:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Significant changes to pricing or billing</li>
            <li>Significant reductions in functionality or features</li>
            <li>Changes to data handling or privacy practices</li>
            <li>Changes to dispute resolution or arbitration provisions</li>
            <li>
              Changes that substantially increase your obligations or reduce
              your rights
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            26.3 Non-Material Changes
          </h3>
          <p>
            For non-material changes (such as clarifications, corrections, or
            minor updates):
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Briggo may implement changes immediately</li>
            <li>
              Notice may be provided through email, in-app notifications, or
              posting on the Site
            </li>
            <li>{`Briggo will update the "Last Updated" date`}</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            26.4 Acceptance of Changes
          </h3>
          <p>
            Your continued use of the Services following any revision to this
            Agreement constitutes your complete and irrevocable acceptance of
            any and all such changes.
          </p>
          <p className="mt-2">
            If any future changes to this Agreement are unacceptable to you or
            cause you to no longer be in compliance with this Agreement, you
            must:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Immediately stop using the Services</li>
            <li>Terminate your Account as described in Section 11</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            26.5 Responsibility to Review
          </h3>
          <p>
            You are responsible for reviewing this Agreement periodically.
            Briggo will not be liable for any failure on your part to review
            updated terms.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            26.6 Service Modifications
          </h3>
          <p>Briggo may also:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Impose limits on certain features or functionality</li>
            <li>Restrict your access to part or all of the Services</li>
            <li>Change pricing or fee structures</li>
            <li>Add, remove, or modify features</li>
          </ul>
          <p className="mt-2">
            Such changes may be made without notice or liability, except as
            required by law or as stated in Section 26.2.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            28. NO RIGHTS OF THIRD PARTIES
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            28.1 No Third-Party Beneficiaries
          </h3>
          <p>
            Except as expressly provided in Section 25.6, none of the terms of
            this Agreement are enforceable by any persons who are not a party to
            this Agreement. This Agreement is intended solely for the benefit of
            the parties hereto and is not intended to confer third-party
            beneficiary rights upon any other person or entity, except:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              {`Briggo's affiliates, officers, directors, employees, agents, and
              service providers (for purposes of Sections 16, 17, 18, and 19)`}
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            28.2 No Assignment of Rights
          </h3>
          <p>
            No third party may enforce or seek to enforce any provision of this
            Agreement unless expressly stated herein.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            29. NOTICES AND CONSENT TO RECEIVE NOTICES ELECTRONICALLY
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            29.1 Consent to Electronic Communications
          </h3>
          <p>
            {`You consent to receive any agreements, notices, disclosures, and
            other communications (collectively, "Notices") to which this
            Agreement refers electronically, including without limitation:`}
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>By email</li>
            <li>By posting Notices on the Site or in your Account dashboard</li>
            <li>Through in-app notifications</li>
            <li>By SMS (for critical security or account issues)</li>
          </ul>
          <p>
            You agree that all Notices that we provide to you electronically
            satisfy any legal requirement that such communications be in
            writing.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            29.2 Notice to You
          </h3>
          <p>
            Unless otherwise specified in this Agreement, all Notices from
            Briggo to you will be delivered:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              By email to the email address associated with your Account; OR
            </li>
            <li>By posting on the Site or in your Account dashboard</li>
          </ul>
          <p>It is your responsibility to:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Maintain a current and valid email address in your Account</li>
            <li>Check your email and Account dashboard regularly</li>
            <li>Ensure emails from Briggo are not filtered as spam</li>
          </ul>
          <p>
            Notices sent by email shall be deemed received 24 hours after
            sending, whether or not you actually receive or read the email.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            29.3 Notice to Briggo
          </h3>
          <p>
            All notices to Briggo shall be in writing and shall be deemed to
            have been duly given when received, if:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Personally delivered: Upon delivery</li>
            <li>Sent by registered mail: Upon receipt confirmation</li>
            <li>
              Sent by email: When receipt is electronically confirmed (during
              business hours)
            </li>
          </ul>
          <p>Notices to Briggo should be sent to:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Email: support@briggo.in</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            29.4 Notice Requirements
          </h3>
          <p>Notices must include:</p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>Your full name and Account information</li>
            <li>Clear subject line indicating the nature of the notice</li>
            <li>Detailed description of the matter</li>
            <li>Any supporting documentation (where applicable)</li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            29.5 Language of Notices
          </h3>
          <p>All Notices shall be in English.</p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">
            30. CONTACTING US
          </h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            30.1 Customer Support
          </h3>
          <p>
            If you have any questions about these Terms of Service or about the
            Services, please contact us:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>
              Website Support Portal:{" "}
              <a
                href="https://briggo.in/contact"
                className="text-blue-600 underline"
              >
                https://briggo.in/contact
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:support@briggo.in"
                className="text-blue-600 underline"
              >
                support@briggo.in
              </a>
            </li>
          </ul>

          <h3 className="mt-6 mb-3 text-xl font-semibold">
            30.2 Response Times
          </h3>
          <p>
            We strive to respond to all inquiries within the timeframes
            specified in Section 22.4, based on your plan level and the nature
            of your inquiry.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold">30.3 Feedback</h3>
          <p>
            We welcome your feedback about the Services. You can provide
            feedback through:
          </p>
          <ul className="mt-2 ml-8 space-y-1 list-disc">
            <li>The support portal</li>
            <li>
              Email to{" "}
              <a
                href="mailto:support@briggo.in"
                className="text-blue-600 underline"
              >
                support@briggo.in
              </a>
            </li>
          </ul>
          <p>
            By submitting feedback, you agree to the terms in Section 12.5
            (Feedback and Suggestions).
          </p>
        </section>
      </div>
    </div>
  );
};

export default TnC;
