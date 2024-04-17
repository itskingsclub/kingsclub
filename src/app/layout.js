import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { ToastContainer } from 'react-toastify';
import Header from './CommenSection/Header';
import Footer from './CommenSection/footer';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from './auth-provider';

export const metadata = {
  title: 'Kings Club',
  description: 'Experience the ultimate ludo showdown in this trending and thrilling ludo game! Play with friends, roll the dice, and strategize your way to victory. Join the fun today and become the ludo master',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/ffd603c3cc.js" crossOrigin="anonymous" async ></script>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider>
          <ToastContainer
            position="bottom-left"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
