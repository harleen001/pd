import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="">
           <p>Oh, hello there 👋
👨‍🎓 I’m Pratham Prasoon, a 18 year-old high school student.

👨‍💻 A self taught programmer, part time cook and a lover of all things tech.

⚒️ I mainly work with Python, JavaScript and Rust on a daily basis.

🏡 Currently living in the beautiful city of Mumbai in India.</p>
        </div>
    );
};

export default ProfilePic;
