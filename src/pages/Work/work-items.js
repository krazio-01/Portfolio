import Work1 from "../../assets/images/work1.jpg";
import Work2 from "../../assets/images/work2.jpg";
import Work3 from "../../assets/images/work3.jpg";
import Work4 from "../../assets/images/work4.png";

export const projects = [
    {
        title: "Whisperwave",
        tagline: "Connect seamlessly with real-time chat, anytime, anywhere.",
        description:
            "Whisperwave is a feature-rich chatting application developed using the MERN stack. It leverages WebSockets through socket.io to enable real-time communication between users. This application is perfect for staying connected with friends, family, and colleagues, offering a smooth and intuitive chatting experience with various features such as group chats, file sharing, and instant notifications.",
        src: Work2,
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary"],
        viewLink: "https://whisperwave.onrender.com/",
        codeLink: "https://github.com/krazio-01/Whisperwave.git",
    },
    {
        title: "Edulearn",
        tagline: "Empowering education with an interactive and responsive platform.",
        description:
            "Edulearn is a platform designed to provide valuable educational content. Built using Pug, MongoDB, CSS, and JavaScript, this site offers users an interactive and user-friendly experience. With features like user registration and login, the site ensures personalized access to resources. Its responsive design guarantees optimal viewing across various devices, making learning accessible anytime, anywhere. Explore a wide range of static educational content tailored to enhance knowledge and skills. Join us today and embark on a journey of learning and growth!",
        src: Work4,
        technologies: ["Pug", "MongoDB", "CSS", "JavaScript"],
        viewLink: "",
        codeLink: "https://github.com/krazio-01/Edulearn.git",
    },
    {
        title: "Envision",
        tagline: "Stream your favorites with ease on our comprehensive entertainment hub.",
        description:
            "Envision is a comprehensive online streaming platform built using React. It offers users access to a vast library of movies and TV shows, ranging from the latest blockbusters to classic hits. The site is designed to provide a high-quality streaming experience with user-friendly navigation, personalized recommendations, and options for creating watchlists. Dive into endless entertainment with Envision.",
        src: Work3,
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
        viewLink: "",
        codeLink: "https://github.com/krazio-01/Envision.git",
    },
    {
        title: "Wor-k-Lock",
        tagline: "Book your perfect workspace instantly with our user-friendly platform.",
        description:
            "Wor-k-Lock is an innovative online platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). It provides a seamless experience for users to book spaces or tables in nearby cafes. Whether you're looking for a spot to work, study, or meet with friends, Wor-k-Lock offers a variety of options to suit your needs, all with an easy-to-use interface and real-time availability.",
        src: Work1,
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
        viewLink: "https://worklock.netlify.app/",
        codeLink: "https://github.com/krazio-01/worklock.git",
    },
];
