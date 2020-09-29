import Header from '../components/header';
import { PageTransition } from 'next-page-transitions';
import '../css/tailwind.css';

const App = ({ Component, pageProps, router }) => (
  <>
    <div className="px-4 sm:px-6 lg:px-0 my-10 md:my-16 mx-auto max-w-5xl font-sans text-gray-900 md:text-lg">
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
  </>
);
export default App;
