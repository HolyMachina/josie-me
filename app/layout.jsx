import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
 
export const metadata = {
   title: {
    default: 'About Josie',
    template: '%s | About Josie'
  },
  generator: 'Next.js',
  applicationName: 'Nextra',
  authors: [{name: "Josephine Troiani"},{name: "Josie Troiani"}],
  openGraph: {
    siteName: 'About Josie',
    locale: 'en_US',
    image: '',
    type: 'website'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

const navbar = (
  <Navbar
    logo={
    <>
      <span><b>About Josie</b></span>
    </>
    }
    projectLink='https://bsky.app/profile/lastcontact.space'
    projectIcon={
      <svg width="24" height="24">
      <image width="24" height="24" href="/images/bluesky-logo.png" alt="Mastodon Logo" />
      </svg>
    }
    chatLink='https://linkedin.com/in/jotroian'
    chatIcon={
      <svg width="24" height="24">
      <image width="24" height="24" href="/images/linkedin-logo.png" alt="LinkedIn Logo" />
      </svg>
    }
  />
)

const footer = (
  <Footer>
    <span>
        Hit me up on <a rel="me" href="https://lgbtqia.space/@holymachina">Mastodon</a>, <a href="https://bsky.app/profile/lastcontact.space" rel="nofollow">Bluesky</a>, or <a href="https://www.linkedin.com/in/jotroian" rel="nofollow">LinkedIn</a>.
      </span>
  </Footer>
)
 
export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{hue: 351, saturation: 100, lightness: {light: 32, dark: 76}}}>
        {
        /* Your additional tags should be passed as `children` of `<Head>` element */
        <meta name="rating" content="14 years" />
        }
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/HolyMachina/josie-me/tree/main"
          editLink={null}
          feedback={
            {
              content:"Website error or typographical error? Yell at Josie here."
            }
          }
          sidebar={
            {
              defaultMenuCollapseLevel: 1,
              autoCollapse: true
            }
          }
          footer={footer}
          navigation={false}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}