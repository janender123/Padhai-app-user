// import node module libraries
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

const GeeksSEO = props => {
    const router = useRouter()
    const pageURL = process.env.baseURL + router.pathname;
    const { title, description } = props;
    return (
        <NextSeo
        title='Padhae-Learning starts here 🚀'
        description='Learning starts here'
        canonical={pageURL}
        openGraph={{
          url: pageURL,
          title: title,
          description: description,
          site_name: process.env.siteName,
          images: [
            {
              url: '/images/brands/logo/logo-padhae-2',
              width: 1200,
              height: 630,
              alt: 'Padhae app',
            },
          ],
        }}
      />
    )
}
export default GeeksSEO;