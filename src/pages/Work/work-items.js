import Work1 from '../../assets/images/work1.jpg';
import Work2 from '../../assets/images/work2.jpg';
import Work3 from '../../assets/images/work3.png';
import Work4 from '../../assets/images/work4.png';
import Work5 from '../../assets/images/work5.png';

export const projects = [
    {
        title: 'Whisperwave',
        tagline: 'Connect seamlessly with real-time chat, anytime, anywhere.',
        description:
            'Whisperwave is an advanced real-time communication platform built with the MERN stack. It goes beyond basic messaging by featuring dynamic end-to-end encryption for ultimate privacy, WebRTC for seamless peer-to-peer media calls, and a Redis sliding-window cache for lightning-fast message retrieval. It delivers a premium user experience complete with live typing indicators, read receipts, advanced group management, and media sharing.',
        src: Work3,
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.io', 'WebRTC', 'Cloudinary'],
        viewLink: 'https://whisperwave.onrender.com/',
        codeLink: 'https://github.com/krazio-01/Whisperwave.git',
    },
    {
        title: 'AetherBot',
        tagline: 'Experience Intelligent Conversations: Your AI Chatbot. Ask, Upload, and Discover!',
        description:
            'AetherBot is a sophisticated full-stack AI chatbot web application built on Next.js 14 and powered by the Gemini API. This feature-rich platform offers context-aware AI responses and enables users to upload images for detailed inquiries. In addition to its robust functionality, AetherBot supports seamless social logins via GitHub and Discord, enhancing user convenience and security.',
        src: Work2,
        technologies: ['Next.js', 'Google Gemini API', 'MongoDB', 'Cloudinary'],
        viewLink: 'https://aether-bot.vercel.app/',
        codeLink: 'https://github.com/krazio-01/AetherBot.git',
    },
    {
        title: 'Envision',
        tagline: 'Stream your favorites with ease on our comprehensive entertainment hub.',
        description:
            'Envision is a full-stack streaming application built with React and Node.js. It delivers a Netflix-style experience directly in the browser, featuring instant media playback, smart AI recommendations powered by Google Gemini, automatic watch-time tracking, and secure JWT-based authentication. Users can effortlessly browse, bookmark, and stream their favorite movies and TV shows across any device.',
        src: Work4,
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Google Gemini API'],
        viewLink: 'https://envision-watch.vercel.app/',
        codeLink: 'https://github.com/krazio-01/Envision.git',
    },
    {
        title: 'Edulearn',
        tagline: 'Empowering education with an interactive and responsive platform.',
        description:
            'Edulearn is a platform designed to provide valuable educational content. Built using Pug, MongoDB, CSS, and JavaScript, this site offers users an interactive and user-friendly experience. With features like user registration and login, the site ensures personalized access to resources. Its responsive design guarantees optimal viewing across various devices, making learning accessible anytime, anywhere. Explore a wide range of static educational content tailored to enhance knowledge and skills. Join us today and embark on a journey of learning and growth!',
        src: Work5,
        technologies: ['Pug', 'MongoDB', 'CSS', 'JavaScript', 'Express.js'],
        viewLink: '',
        codeLink: 'https://github.com/krazio-01/Edulearn.git',
    },
    {
        title: 'Wor-k-Lock',
        tagline: 'Book your perfect workspace instantly with our user-friendly platform.',
        description:
            "Wor-k-Lock is an innovative online platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). It provides a seamless experience for users to book spaces or tables in nearby cafes. Whether you're looking for a spot to work, study, or meet with friends, Wor-k-Lock offers a variety of options to suit your needs, all with an easy-to-use interface and real-time availability.",
        src: Work1,
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe', 'Framer motion'],
        viewLink: 'https://worklock.netlify.app/',
        codeLink: 'https://github.com/krazio-01/worklock.git',
    },
];
