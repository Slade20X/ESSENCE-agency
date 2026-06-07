import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://essenceagency.pl'),
  title: {
    default: 'Essence | Agencja Marketingowa',
    template: '%s | ESSENCE Agency'
  },
  description: 'ESSENCE Agency to agencja marketingowa łącząca AI, kreatywność i dane. Oferujemy Performance Marketing, SEO, Branding, Web Design i AI Automation. Skalujemy marki od 120M+ przychodu. Gdańsk, Polska.',
  keywords: [
    'agencja marketingowa',
    'performance marketing',
    'SEO',
    'branding',
    'web design',
    'AI automation',
    'social media',
    'agencja marketingowa Gdańsk',
    'marketing Trójmiasto',
    'ESSENCE Agency',
    'skalowanie marek',
    'agencja reklamowa Gdańsk'
  ],
  authors: [{ name: 'ESSENCE Agency', url: 'https://essenceagency.pl' }],
  creator: 'ESSENCE Agency',
  publisher: 'ESSENCE Agency',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ESSENCE Agency | Skalujemy marki szybciej niż konkurencja',
    description: 'Agencja marketingowa z Gdańska. Performance Marketing, SEO, Branding, Web Design, AI Automation. 120M+ przychodu, 300+ klientów, 98% retencji.',
    url: 'https://essenceagency.pl',
    siteName: 'ESSENCE Agency',
    images: [
      {
        url: 'https://essenceagency.pl/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ESSENCE Agency - Agencja Marketingowa Gdańsk',
        type: 'image/jpeg',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESSENCE Agency | Skalujemy marki szybciej niż konkurencja',
    description: 'Agencja marketingowa z Gdańska. Performance Marketing, SEO, Branding, AI Automation.',
    images: ['https://essenceagency.pl/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://essenceagency.pl',
    languages: {
      'pl-PL': 'https://essenceagency.pl',
    },
  },
  category: 'marketing',
  classification: 'Agencja Marketingowa',
  verification: {
    google: 'dodaj-tutaj-kod-weryfikacji-google-search-console',
  },
  appleWebApp: {
    capable: true,
    title: 'ESSENCE Agency',
    statusBarStyle: 'black-translucent',
  },
  icons: {
  icon: [
    { url: '/favicon.ico', sizes: 'any' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    { url: '/favicon.svg', type: 'image/svg+xml' },
  ],
  apple: [
    { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="dark">
      <head>
        {/* Structured Data / Schema.org - Organizacja */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ESSENCE Agency",
              "url": "https://essenceagency.pl",
              "logo": "https://essenceagency.pl/logo.png",
              "image": "https://essenceagency.pl/og-image.jpg",
              "description": "Agencja marketingowa z Gdańska specjalizująca się w performance marketingu, SEO, brandingu i AI automation.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gdańsk",
                "addressRegion": "Pomorskie",
                "addressCountry": "Polska"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+48883758310",
                "contactType": "customer service",
                "email": "essence.agency77@gmail.com",
                "availableLanguage": ["Polish", "English"]
              },
              "foundingDate": "2019",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "12"
              },
              "areaServed": "Polska",
              "priceRange": "$$$"
            })
          }}
        />
        
        {/* LocalBusiness Schema - dla lokalnego SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ESSENCE Agency",
              "image": "https://essenceagency.pl/og-image.jpg",
              "telephone": "+48883758310",
              "email": "essence.agency77@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ul. Długa 1",
                "addressLocality": "Gdańsk",
                "addressRegion": "Pomorskie",
                "postalCode": "80-001",
                "addressCountry": "PL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 54.3520,
                "longitude": 18.6466
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "priceRange": "$$",
              "areaServed": "Gdańsk, Trójmiasto, Polska"
            })
          }}
        />
        
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Strona główna",
                  "item": "https://essenceagency.pl"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Usługi",
                  "item": "https://essenceagency.pl/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Case studies",
                  "item": "https://essenceagency.pl/#case-studies"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Kontakt",
                  "item": "https://essenceagency.pl/#contact"
                }
              ]
            })
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ESSENCE Agency",
              "url": "https://essenceagency.pl",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://essenceagency.pl/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Service Schema - lista usług */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Agencja Marketingowa",
              "provider": {
                "@type": "Organization",
                "name": "ESSENCE Agency"
              },
              "areaServed": "Gdańsk, Trójmiasto, Polska",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Usługi marketingowe",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Performance Marketing",
                      "description": "Kampanie Google i Meta z ROI 400%+"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO",
                      "description": "Pozycjonowanie stron w wyszukiwarkach"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Branding",
                      "description": "Tworzenie tożsamości marki"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Design",
                      "description": "Projektowanie stron internetowych"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Automation",
                      "description": "Automatyzacja z wykorzystaniem AI"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Social Media",
                      "description": "Prowadzenie profili społecznościowych"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}