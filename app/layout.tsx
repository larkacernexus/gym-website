import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'FitLife Fitness Gym - Valencia | All In One Gym For All Your Goals',
  description:
    'Your Fitness. Your Community. Your Transformation. Weight Training, Boxing, Muaythai, Zumba, Asian Mat Pilates & HIIT. Q Square Building, Barok, Valencia City.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}