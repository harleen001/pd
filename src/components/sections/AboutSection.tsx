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
        <p className="mb-4 text-lg text-justify max-w-prose">{
            "I'm a Cloud enthusiast and web advocate, I value tools that enhance efficiency and flexibility in my work, allowing me to organize and optimize workflows effectively for personal viewing preferences. This extends to my support for static typing, where its early error detection ensures cleaner code, and my preference for dark mode, which eases long coding sessions by reducing eye strain."}</p>
      
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
  <div className="p-4 rounded-lg bg-cardPrimary">
    <div className="mb-4 font-mono text-primary">➢ Website Coordinator at GNDU Regional Campus, Jalandhar</div>
    <div className="mb-4 font-mono text-primary">➢ Mentor at Tools Workshop on Linux 2023 for Zphisher & T-Bomb</div>
    <div className="mb-4 font-mono text-primary">➢ Speaker & Presented Paper at National Conference ETLT-2023</div>
  </div>
  <div className="p-4 rounded-lg bg-cardPrimary">
    <div className="mb-4 font-mono text-primary">➢ 1st Position for Project of Unreal Engine at Inter-College Fest</div>
    <div className="mb-4 font-mono text-primary">➢ Backdrop Builder for PrecisonLib240 Library at V3 Kickoff 2024</div>
    <div className="mb-4 font-mono text-primary">➢ Winner of Campus Mock Placement 2024 at GNDU Regional Campus</div>
  </div>
</div>





      </section>
      
    );
};

export default AboutSection;