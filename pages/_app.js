import Header from '../components/header';
import { PageTransition } from 'next-page-transitions';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../css/tailwind.css';

const App = ({ Component, pageProps, router }) => (
  <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
    <div className="px-4 sm:px-6 lg:px-0 py-10 md:py-16 mx-auto max-w-5xl">
      <DefaultSeo {...SEO} />
      <Header />
      <PageTransition timeout={200} classNames="page-transition">
        <Component key={router.route} {...pageProps} />
      </PageTransition>
    </div>
    <style jsx global>{`
      .page-transition-enter {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
      }
      .page-transition-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: opacity 200ms, transform 300ms;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity 0ms;
      }
    `}</style>
  </div>
);
export default App;
