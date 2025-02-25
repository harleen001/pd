import { FC } from 'react';
import { AboutsectionData } from '../utils/Data';

interface AboutSectionProps {
    title: string;
    version?: string;
    data: AboutsectionData[];
}

const AboutSection: FC<AboutSectionProps> = ({ title, version, data }) => {
    return (
        <section className="grid gap-5 p-5 md:p-0">
            {/* Paragraph on top */}
            <p className="space-y-4 text-zinc-500 dark:text-slate-300">
                <p className="my-4 leading-loose text-justify">
                    I am currently an undergraduate student at {' '}
                    <a
                        className="font-medium underline transition duration-100 rounded-sm focusable text-zinc-800 decoration-blue-500 decoration-2 underline-offset-2 hover:text-blue-500 hover:decoration-sky-500/30 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40"
                        href="https://www.gndu.ac.in/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Guru Nanak Dev University
                    </a>
                    - studying a Bachelor degree in Electronics and Computer Science. During my time as
                    a student, I have always believed in a simple yet powerful philosophy;&nbsp;
                    <span className="font-medium underline transition duration-100 rounded-sm focusable text-zinc-800 decoration-rose-700 decoration-2 underline-offset-2 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white dark:decoration-amber-400 dark:hover:decoration-amber-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40">
                        the best way to grow as an individual is to throw yourself into new experiences and daily learnings.
                    </span>
                    &nbsp;Whether it be through taking on new hobbies like writing a book or competitive programming, or even experimenting with how international teams work, I&nbsp;
                    <span className="font-medium underline transition duration-100 rounded-sm focusable text-zinc-800 decoration-rose-700 decoration-2 underline-offset-2 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white dark:decoration-rose-400 dark:hover:decoration-rose-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40">
                        embrace challenges that push my boundaries
                    </span>&nbsp;to grow. Every new adventure teaches me valuable lessons about perseverance and the boundless potential of the human spirit!
                    <br /><br />
                </p>
            </p>

      
        </section>
    );
};

export default AboutSection;
