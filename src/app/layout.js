import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

export const metadata = {
  title: 'Kings Club',
  description: 'Experience the ultimate ludo showdown in this trending and thrilling ludo game! Play with friends, roll the dice, and strategize your way to victory. Join the fun today and become the ludo master',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <script src="https://kit.fontawesome.com/ffd603c3cc.js" crossOrigin="anonymous" async ></script>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
