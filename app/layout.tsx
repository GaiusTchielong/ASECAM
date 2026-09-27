import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets:['latin'], variable:'--font-inter', display:'swap' });
const sora = Sora({ subsets:['latin'], variable:'--font-sora', display:'swap' });
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://asecam.vercel.app'), title:{default:'ASECAM — Association des Étudiants Camerounais de Madagascar',template:'%s — ASECAM'}, description:"L'ASECAM réunit, accompagne et valorise les étudiants camerounais à Madagascar." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body className={`${inter.variable} ${sora.variable}`}>{children}</body></html>}
