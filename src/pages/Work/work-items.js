import Work1 from '../../assets/images/work1.png';
import Work2 from '../../assets/images/work2.png';
import Work3 from '../../assets/images/work3.png';
import Work4 from '../../assets/images/work4.png';

export const projects = [
    {
        title: 'Whisperwave',
        tagline: 'Real-time chat with per-chat encryption, WebRTC calls, and Redis-backed history.',
        note: 'the encryption is actually real',
        stamp: 'Shipped',
        description:
            'A real-time chat platform built on the MERN stack. Every conversation is encrypted with its own HMAC-derived AES key, voice and video calls run peer-to-peer over WebRTC, and a Redis sliding-window cache keeps recent messages in memory so chats open without waiting on MongoDB. Typing indicators, read receipts, group management, and image sharing round it out.',
        shotCaptions: [
            'No phone number required — identity is a username, sessions are just JWTs.',
            'Someone\u2019s watching you type — underneath, sensitive changes need their own verification.',
            'Image sharing and read receipts, pushed live over Socket.io the moment they happen.',
            'The group info panel — edit rights are role-gated, so only the admin sees that icon.',
            'An incoming call — audio and video are raw WebRTC peer connections, no SDK wrapper.',
        ],
        highlights: [
            {
                title: 'Per-chat encryption keys',
                description:
                    'Every conversation encrypts with its own AES key, derived via HMAC-SHA256 — no single shared secret across the app.',
            },
            {
                title: 'WebRTC voice & video',
                description:
                    'Calls run as peer-to-peer connections on the browser\u2019s WebRTC APIs — no third-party video SDK.',
            },
            {
                title: 'Redis sliding-window cache',
                description:
                    'Recent messages live in a Redis list; MongoDB is only queried when you scroll past what\u2019s cached.',
            },
            {
                title: 'Group chat management',
                description:
                    'Auto-assigned admins, renaming, and adding or removing members — real control over a group, not just membership.',
            },
            {
                title: 'Live typing & read receipts',
                description:
                    'See when someone\u2019s typing and when a message\u2019s actually been read, in both one-on-one and group chats.',
            },
        ],
        src: Work3,
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.io', 'WebRTC', 'Cloudinary'],
        viewLink: 'https://whisperwave.onrender.com/',
        codeLink: 'https://github.com/krazio-01/Whisperwave',
    },
    {
        title: 'AetherBot',
        tagline: 'A production ready AI chat workspace with multimodal input, in-chat code execution, and live charts.',
        note: 'yes, it really draws the charts',
        stamp: 'Shipped',
        description:
            'A full-stack AI chat app built with Next.js and the Gemini API. Token streaming runs through a custom engine that bypasses React entirely, image and PDF uploads are analyzed by Gemini Vision, charts render in Recharts with auto-picked types, and code executes live in Sandpack sandboxes inside the chat. NextAuth handles auth, MongoDB stores conversations, and light/dark theming swaps via CSS variables.',
        shotCaptions: [
            'The front door — the one static page in an app built around streaming.',
            'The workspace — tokens stream into the DOM via requestAnimationFrame, skipping React.',
            'Attach an image or a PDF and ask about it — Gemini Vision reads the file itself.',
            'That code block isn\u2019t a screenshot — Sandpack is running it live, inside the reply.',
            'It parsed the reply\u2019s JSON, saw a trend, and picked a line chart over a bar on its own.',
            'Share Chat — every conversation can mint its own unique link, straight to the clipboard.',
        ],
        highlights: [
            {
                title: 'Token streaming outside React',
                description:
                    'A vanilla TypeScript service pipes tokens into the DOM on a requestAnimationFrame loop, so high-frequency chunks never trigger re-renders.',
            },
            {
                title: 'Image & PDF analysis',
                description:
                    'Uploads go straight to Gemini Vision, so questions can reference what\u2019s inside the file, not just typed text.',
            },
            {
                title: 'Code that actually runs',
                description:
                    'Sandpack renders live UI components and JDoodle compiles and executes code in multiple languages — both inline in the chat, not printed as static text.',
            },
            {
                title: 'Auto-selected chart types',
                description:
                    'Recharts parses the model\u2019s JSON and picks line for trends, bar for categories — themed with CSS variables, no JS theme provider.',
            },
            {
                title: 'Falls back when Gemini doesn\u2019t',
                description:
                    'If the primary endpoint fails, requests retry automatically and reroute to a backup model instead of dropping the conversation.',
            },
        ],
        src: Work2,
        technologies: ['Next.js', 'Google Gemini API', 'Zustand', 'Recharts', 'MongoDB', 'NextAuth'],
        viewLink: 'https://aether-bot.vercel.app/',
        codeLink: 'https://github.com/krazio-01/AetherBot',
    },
    {
        title: 'Envision',
        tagline: 'A Netflix-style streaming app — browse, stream, and let Gemini pick your next watch.',
        note: 'an AI actually picked this for you',
        stamp: 'Shipped',
        description:
            'A full-stack streaming app built with React and Node.js. TMDB supplies the catalog, Vidsrc supplies the streams, and Google Gemini turns watch history into recommendations. Watch time is tracked automatically to mark titles Completed or Dropped, bookmarks build a personal library, and JWT auth covers sign-up, email verification, and password reset.',
        shotCaptions: [
            'The hero slot is whatever TMDB says is trending — and browsing needs no account.',
            'Typed \u2018action adventure\u2019 — Gemini returned a shortlist with reasons, not a genre dump.',
            'The player — episode rail on the right for shows, plus backup servers if one drags.',
            'Hover a poster, get the preview card — yes, like that other streaming site. On purpose.',
            'Explore — filter and sort from the top right, for when you know your own taste.',
        ],
        highlights: [
            {
                title: 'History-aware AI search',
                description:
                    'Gemini weighs what you\u2019ve finished or dropped — not just genre tags — before suggesting what\u2019s next.',
            },
            {
                title: 'Backup streaming servers',
                description: 'Playback can switch to a fallback source mid-stream instead of leaving you buffering.',
            },
            {
                title: 'Automatic watch tracking',
                description: 'Watch time marks titles Completed or Dropped on its own — nothing to update by hand.',
            },
            {
                title: 'TMDB + Vidsrc + Gemini',
                description:
                    'Catalog metadata, stream sources, and recommendations each come from a different API, composed into one UI.',
            },
        ],
        src: Work4,
        technologies: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB',
            'TMDB',
            'Vidsrc',
            'Google Gemini API',
            'Cloudinary',
        ],
        viewLink: 'https://envision-watch.vercel.app/',
        codeLink: 'https://github.com/krazio-01/Envision',
    },
    {
        title: 'QuizPortal',
        tagline: 'A freelance build for League Of Logic — quiz registration, payments, and certificates in one portal.',
        note: 'yeah, this one actually paid me',
        stamp: 'Client Work',
        description:
            'Freelance project for League Of Logic to run their student quiz events end to end. I built the registration flow, integrated PayGlocal for one-time entry payments, and set up on-the-spot certificate generation with pdf-lib once a student completes a quiz. The dashboard also shows upcoming quiz schedules, with NextAuth handling login, Cloudinary storing certificate assets, and Nodemailer sending confirmation emails throughout.',
        shotCaptions: [
            'The client\u2019s brand and palette, not mine — that\u2019s the discipline of client work.',
            'A practice quiz open to guests — the only gate here is the reCAPTCHA in the corner.',
            'Vouchers and a robotics camp for toppers; every finisher\u2019s certificate comes from pdf-lib.',
            'The \u2018why join\u2019 pitch — benefits, a logic teaser, grade-wise invites to compete.',
        ],
        highlights: [
            {
                title: 'Registration & validation flow',
                description:
                    'Register, pay, take the quiz on the external provider — the return trip validates participation automatically.',
            },
            {
                title: 'Personalized PDF certificates',
                description: 'pdf-lib builds a personalized certificate the moment participation is confirmed.',
            },
            {
                title: 'PayGlocal payment gate',
                description:
                    'Handles the one-time entry fee, with reCAPTCHA sitting in front of the registration form.',
            },
            {
                title: 'Automated confirmations',
                description: 'Nodemailer sends the confirmation email as soon as registration goes through.',
            },
        ],
        src: Work1,
        technologies: ['Next.js', 'MongoDB', 'NextAuth', 'PayGlocal', 'pdf-lib', 'Cloudinary', 'Framer Motion'],
        viewLink: 'https://quizy-tan.vercel.app/',
        codeLink: 'https://github.com/krazio-01/quiz-registration-portal',
    },
];
