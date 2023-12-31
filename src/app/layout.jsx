import { montserrat } from '@/utils/fonts';
import './globals.css';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`bg-[#F9FCFB] text-[#0F1020] px-4 ${montserrat.className}`}>{children}</body>
        </html>
    );
}
