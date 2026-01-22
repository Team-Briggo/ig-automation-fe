import {
  MessageSquare,
  BarChart3,
  Users,
  Zap,
  CreditCard,
  Gift,
} from "lucide-react";

export default function AboutUs() {
  const services = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Comment Automation",
      description:
        "Automate responses to comments on your Instagram Reels and Posts with intelligent, customizable replies.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Story Replies Automation",
      description:
        "Never miss a story reply. Automate responses to engage with your audience instantly.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "DM Automation",
      description:
        "Send unlimited automated direct messages with custom keywords and personalized responses.",
    },
  ];

  const features = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pay-As-You-Go Pricing",
      description:
        "Only pay for what you use. No subscriptions, no commitments, no wasted money on unused services.",
      highlight: "1 Token = 1 DM",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Refer & Earn",
      description:
        "Earn 500 free DMs for every user you refer. Build your network and get rewarded.",
      highlight: "500 DMs per Referral",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Free Trial",
      description:
        "New users get 1,000 free DMs to explore all features and experience the power of automation.",
      highlight: "1,000 Free DMs",
    },
  ];

  const targetAudience = [
    {
      title: "Content Creators",
      description:
        "Engage with your growing audience effortlessly while focusing on creating amazing content.",
    },
    {
      title: "Small Businesses",
      description:
        "Automate customer interactions and save money with our flexible pay-as-you-go model.",
    },
    {
      title: "Influencers",
      description:
        "Manage thousands of messages and comments without missing a beat or hiring extra help.",
    },
    {
      title: "Marketing Agencies",
      description:
        "Scale client engagement across multiple accounts with unlimited automation capabilities.",
    },
    {
      title: "E-commerce Brands",
      description:
        "Convert Instagram engagement into sales with automated, personalized customer interactions.",
    },
    {
      title: "Personal Brands",
      description:
        "Build authentic connections with your community while automating repetitive tasks.",
    },
  ];

  return (
    <section className="py-12">
      <div className="px-4 mx-auto max-w-screen-xl md:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-800 sm:text-5xl">
            About Briggo
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Briggo revolutionizes Instagram engagement through intelligent
            automation. We help creators, businesses, and influencers scale
            their Instagram presence without the overhead of traditional
            subscription models.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We believe Instagram automation should be accessible, affordable,
              and flexible. That's why we built Briggo with a pay-as-you-go
              model, no subscriptions, no commitments, just powerful automation
              tools that you pay for only when you use them. This approach saves
              you money and gives you complete control over your Instagram
              engagement strategy.
            </p>
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            Why Briggo is Different
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-gray-100 text-gray-700 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive Instagram automation tools designed to save you time
            and grow your engagement
          </p>

          {/* Comment Automation */}
          <div className="mb-12 bg-white border border-gray-300 rounded-xl overflow-hidden">
            <div className="bg-gray-900 text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-7 h-7" />
                <h3 className="text-2xl font-semibold">Comment Automation</h3>
              </div>
              <p className="text-gray-300">
                Turn comments into conversations and drive action instantly
              </p>
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  How It Works
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        Set Your Keywords
                      </p>
                      <p className="text-gray-600 text-sm">
                        Choose trigger words like "link", "price", "info", or
                        any custom keyword
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        Activate on Your Posts
                      </p>
                      <p className="text-gray-600 text-sm">
                        Enable automation on any Reel or Post you publish
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        Automatic DM Response
                      </p>
                      <p className="text-gray-600 text-sm">
                        When users comment with your keyword, they instantly
                        receive a personalized DM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-md font-semibold text-gray-800 mb-3">
                  Real-World Example
                </h4>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Fashion Influencer:</span>{" "}
                  Posts a Reel showcasing a new outfit collection
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-1.5"></div>
                    <p className="text-gray-600">
                      Activates automation with keyword{" "}
                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-300">
                        "link"
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-1.5"></div>
                    <p className="text-gray-600">
                      Follower comments:{" "}
                      <span className="italic">"Love this! link please"</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-1.5"></div>
                    <p className="text-gray-600">
                      Briggo instantly sends a DM with product links, pricing,
                      and purchasing info
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-1.5"></div>
                    <p className="text-gray-600 font-semibold">
                      Result: Convert engagement into sales 24/7, even while you
                      sleep
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Replies Automation */}
          <div className="mb-12 bg-white border border-gray-300 rounded-xl overflow-hidden">
            <div className="bg-gray-800 text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-7 h-7" />
                <h3 className="text-2xl font-semibold">
                  Story Replies Automation
                </h3>
              </div>
              <p className="text-gray-300">
                Engage with story replies automatically and never miss an
                opportunity
              </p>
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  How It Works
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        Create Custom Responses
                      </p>
                      <p className="text-gray-600 text-sm">
                        Set up automated replies based on keywords or reply
                        types
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        Post Your Story
                      </p>
                      <p className="text-gray-600 text-sm">
                        Share your story with automation enabled in the
                        background
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        Instant Engagement
                      </p>
                      <p className="text-gray-600 text-sm">
                        Followers receive immediate, personalized responses to
                        their story replies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-md font-semibold text-gray-800 mb-3">
                  Real-World Example
                </h4>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Fitness Coach:</span> Posts a
                  story about a new workout program launch
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-1.5"></div>
                    <p className="text-gray-600">
                      Sets up automation for keywords like{" "}
                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-300">
                        "interested"
                      </span>
                      ,{" "}
                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-300">
                        "details"
                      </span>
                      ,{" "}
                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-300">
                        "price"
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-1.5"></div>
                    <p className="text-gray-600">
                      Follower replies to story:{" "}
                      <span className="italic">
                        "Interested! Send me details"
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-1.5"></div>
                    <p className="text-gray-600">
                      Briggo automatically sends program details, pricing, and
                      sign-up link
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-1.5"></div>
                    <p className="text-gray-600 font-semibold">
                      Result: Capture leads instantly without manual effort
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DM Automation */}
          <div className="bg-white border border-gray-300 rounded-xl overflow-hidden">
            <div className="bg-gray-700 text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-7 h-7" />
                <h3 className="text-2xl font-semibold">DM Automation</h3>
              </div>
              <p className="text-gray-300">
                Send unlimited personalized direct messages at scale
              </p>
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  How It Works
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        Design Your Message Template
                      </p>
                      <p className="text-gray-600 text-sm">
                        Create personalized message templates with variables and
                        custom content
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        Set Triggers or Schedule
                      </p>
                      <p className="text-gray-600 text-sm">
                        Choose when to send: based on user actions, keywords, or
                        scheduled campaigns
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        Automated Delivery
                      </p>
                      <p className="text-gray-600 text-sm">
                        Messages are sent automatically with intelligent timing
                        and personalization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-md font-semibold text-gray-800 mb-3">
                  Real-World Example
                </h4>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">E-commerce Brand:</span> Runs
                  a flash sale on Instagram
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-700 rounded-full mt-1.5"></div>
                    <p className="text-gray-600">
                      Creates a message template with discount code and product
                      links
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-700 rounded-full mt-1.5"></div>
                    <p className="text-gray-600">
                      Sets trigger: Send DM when user comments{" "}
                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-300">
                        "sale"
                      </span>{" "}
                      or{" "}
                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-300">
                        "discount"
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-700 rounded-full mt-1.5"></div>
                    <p className="text-gray-600">
                      Hundreds of followers engage with the post
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-700 rounded-full mt-1.5"></div>
                    <p className="text-gray-600">
                      Each receives a personalized DM with their name, exclusive
                      code, and direct purchase link
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-700 rounded-full mt-1.5"></div>
                    <p className="text-gray-600 font-semibold">
                      Result: Scale customer outreach without hiring a team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
            Who We Serve
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Briggo is built for anyone looking to scale their Instagram presence
            efficiently and affordably
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {targetAudience.map((audience, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
