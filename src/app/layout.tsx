import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
import ContactForm from '@/components/ContactForm';
import { ContactFormProvider, MenuProvider } from '@/components/Provider';
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
    title: 'Harleen Singh',
    description: 'Workfolio for Harleen Singh',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                
                <MenuProvider>
                    <ContactFormProvider>
                        <ContactForm />
                        <Toaster />
                        <div className="flex">
                            
                            <main className="flex-1">
                             
                                {children}
                            </main>
                        </div>
                    </ContactFormProvider>
                </MenuProvider>
                <Analytics/>
                <SpeedInsights/>
            </body>
        </html>
    );
}
