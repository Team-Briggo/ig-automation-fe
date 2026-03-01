import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Briggo – Instagram DM & Comment Automation | Pay-As-You-Grow Tool",
  description:
    "Automate Instagram DMs, comments & story replies with Briggo — pay only for engagement you get. Free 1000 tokens!",

  keywords: [
    "Instagram automation tool",
    "Instagram DM automation",
    "Instagram comment automation",
    "Instagram story reply automation",
    "Pay as you go Instagram automation",
    "No subscription Instagram automation",
  ],

  openGraph: {
    title: "Briggo – Instagram DM & Comment Automation | Pay-As-You-Grow Tool",
    description:
      "Automate Instagram DMs, comments & story replies with Briggo — pay only for engagement you get. Free 1000 tokens!",
    url: "https://briggo.in",
    siteName: "Briggo",
    images: [
      {
        url: "https://briggo.in/logo.png",
        width: 1200,
        height: 630,
        alt: "Briggo Instagram Automation Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Briggo – Instagram DM & Comment Automation | Pay-As-You-Grow Tool",
    description:
      "Automate Instagram DMs, comments & story replies with Briggo — pay only for engagement you get. Free 1000 tokens!",
    images: ["https://briggo.in/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MM3CDCN2');
            `,
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1CH34EJ4LB"
          strategy="afterInteractive"
        />
        <Script
          id="ga"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1CH34EJ4LB');
            `,
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Briggo",
              url: "https://briggo.in",
              logo: "https://briggo.in/logo.png",
              description:
                "Briggo is a pay-as-you-go Instagram automation platform offering DM automation, comment automation, story replies, keyword triggers, and analytics.",
              sameAs: [
                "https://www.instagram.com/briggo.in",
                "https://www.youtube.com/@BriggoSocial",
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Briggo",
              url: "https://briggo.in",
              description:
                "Pay-as-you-go Instagram automation tool for DMs, comments, story replies and analytics.",
            }),
          }}
        />

        {/* FAQ Schema */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Briggo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Briggo is a pay-as-you-go Instagram automation tool that helps creators and businesses automate DMs, comments, and story replies without any subscription.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Briggo pricing work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Briggo follows a token-based pricing model where 1 token equals 1 DM. Users only pay when they use the service.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Briggo offer free tokens?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, new users get 1000 free tokens, and users earn 500 tokens for every successful referral.",
                  },
                },
              ],
            }),
          }}
        />

        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MM3CDCN2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <div className="bg-salt">
          <main className="min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
