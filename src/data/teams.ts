// Centralized team and member data

export interface MemberCV {
    slug: string;
    name: string;
    photo: string;
    role: string;
    status: "ACTIVE" | "INACTIVE" | "ALUMNI";
    email: string;
    phone: string;
    location: string;
    bio: string;
    shortDesc: string;
    tags: string[];
    education: { degree: string; institution: string; year: string; gpa: string }[];
    experience: { title: string; company: string; period: string; description: string }[];
    skills: { name: string; level: number }[];
    projects: { name: string; description: string; tech: string[] }[];
    achievements: string[];
    social: { github?: string; linkedin?: string; instagram?: string; web?: string };
}

export interface Team {
    slug: string;
    name: string;
    fullName: string;
    logo: string;
    category: string;
    description: string;
    longDescription: string;
    members: MemberCV[];
}

export const teams: Team[] = [
    {
        slug: "drone",
        name: "Drone Astra Versa",
        fullName: "IoT Drone System",
        logo: "/logos/drone.png",
        category: "Robotics & Computer Vision",
        description: "F450-based IoT drone for Indodefence 2024. Features real-time control, human detection, surveillance capabilities, and web-based visualization dashboard for tracking and monitoring.",
        longDescription: "The Drone Astra Versa team develops F450-based IoT drones integrated with AI for the 'friend and foe' detection concept. Our systems feature real-time control, human detection, surveillance capabilities, and web-based visualization dashboards for tracking and monitoring applications.",
        members: [
            {
                slug: "shafira",
                name: "Shafira Kurnia Fasya",
                photo: "/members/shafira.png",
                role: "Chief of Digital Media",
                status: "ACTIVE",
                email: "shafirakf@gmail.com",
                phone: "+62 896 3002 5755",
                location: "Bandung, Indonesia",
                bio: "Dedicated and enthusiastic fourth-year Informatics student with a solid understanding in Artificial Intelligence, Internet of Things (IoT), UI/UX Design, and Website Development. Known for excellent problem-solving abilities, strong analytical skills, and a collaborative team player with effective communication skills.",
                shortDesc: "High Interest in Robotics and AI Implementation through Robotics. Drone Team Leader for a year.",
                tags: ["Robotics", "AI", "Front End Developer"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology (ITENAS)", year: "2022 - Present", gpa: "3.97/4.00" },
                ],
                experience: [
                    { title: "IoT Engineer (Intern)", company: "PT. Coune Labworks", period: "Jan 2026 - Present", description: "Working on IoT solutions and embedded systems development for Art and Tech Industries." },
                    { title: "IoT & Electrical Engineer (Intern)", company: "2.8 Billion Bio-CNG Research", period: "Nov 2024 - Dec 2025", description: "Industrial-scale Bio-CNG system development, managing sensors, actuators, and control/monitoring systems." },
                    { title: "Front-end Developer (Intern)", company: "PT. Ekosistem Geospasial Mandiri", period: "Sep 2024 - Jan 2025", description: "Developed geospatial web application (eGeos) integrated with AI using React, Vite, and Tailwind." },
                    { title: "Chief of Digital Media", company: "Innovative Laboratory I-WILL", period: "2024 - Present", description: "Lead and managed the Digital Media Team, responsible for documentation, publication, and design. Ensuring efficient collaboration, clear communication, and successful completion of tasks." },
                    { title: "Lab Assistant IoT Programming", company: "ITENAS", period: "2025 - 2026", description: "Teaching IoT communication protocols (MQTT, HTTP, WebSocket) and end-to-end IoT hardware/software development, from device-level programming to data communication and system integration." },
                    { title: "Lab Assistant Computer Network", company: "ITENAS", period: "2024 - 2025", description: "Teaching network fundamentals, topologies, and hands-on practice using eNSP (Enterprise Network Simulation Platform)." },
                    { title: "Lab Assistant Basic Programming", company: "ITENAS", period: "2024 - 2026", description: "Teaching Python programming fundamentals, API development, Flask-based web applications, and Raspberry Pi integration." },
                    { title: "Lab Assistant Database Programming", company: "ITENAS", period: "2024 - 2025", description: "Delivering lessons on database principles, supervising practical sessions, and offering mentorship to enhance technical skills." },
                    { title: "Lab Assistant Object Oriented Programming", company: "ITENAS", period: "2024 - 2025", description: "Teaching OOP concepts with Java and Java-based web development fundamentals." },
                ],
                skills: [
                    { name: "Python", level: 80 },
                    { name: "React / Vite / Tailwind", level: 75 },
                    { name: "IoT (Arduino/ESP32)", level: 90 },
                    { name: "UI/UX Design", level: 80 },
                    { name: "HTML / CSS / JavaScript", level: 88 },
                ],
                projects: [
                    { name: "Drone for Indo Defence 2024", description: "IoT drone with AI 'friend and foe' detection system using camera for enemy location detection", tech: ["Python", "IoT", "AI", "OpenCV"] },
                    { name: "AI Speech Evaluation", description: "Web app integrated with AI to evaluate speeches based on 7 parameters: articulation, filler words, gestures, head/eye movement, emotion, and intonation", tech: ["Python", "AI", "Web"] },
                    { name: "eGeos Website", description: "Geospatial web application for PT Ekosistem Geospasial Mandiri integrated with AI", tech: ["React", "Vite", "Tailwind", "AI"] },
                    { name: "Bio-CNG Project (2.8B)", description: "Industrial-scale Bio-CNG system managing sensors, actuators, and control/monitoring system", tech: ["IoT", "Python", "Sensors"] },
                    { name: "16 AR Cikapundung Village", description: "Created 16 Augmented Reality effects using Spark AR by Meta for community service project", tech: ["Spark AR", "Meta"] },
                    { name: "inCube", description: "IoT-integrated egg incubator with control, monitoring, and reporting via website and mobile app", tech: ["IoT", "UI/UX", "Arduino"] },
                    { name: "Anthrobo", description: "Tomato ripeness detection application using KNN, OpenCV, and PyQt5", tech: ["Python", "OpenCV", "KNN", "PyQt5"] },
                    { name: "Smart Farm Lembang Agri", description: "Smart farm system demonstration and implementation for young farmers education", tech: ["IoT", "Sensors"] },
                    { name: "The Oasis", description: "Fashion e-commerce website with admin dashboard", tech: ["PHP", "Laravel", "MySQL"] },
                ],
                achievements: [
                    "Huawei ICT Competition 2024 - National Level (Network Category)",
                ],
                social: {
                    github: "https://github.com/nainxav",
                    linkedin: "https://linkedin.com/in/shafira-kurnia",
                    instagram: "https://instagram.com/shafirakf",
                },
            },
            {
                slug: "zufar",
                name: "Muhammad Zufar Dafy",
                photo: "/members/zufar.jpg",
                role: "IoT System Integrator",
                status: "ACTIVE",
                email: "zufar.dafy@mhs.itenas.ac.id",
                phone: "+62 812 0000 0002",
                location: "Bandung, Indonesia",
                bio: "Passionate about drone technology and IoT systems. Contributing to the Drone Astra Versa project with focus on system integration.",
                shortDesc: "Working on drone system integration and IoT development.",
                tags: ["IoT", "Drone", "Systems"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "-" },
                ],
                experience: [
                    { title: "IoT System Integrator", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan dan mengintegrasikan sistem IoT serta komunikasi pada Drone Astra Versa." },
                    { title: "Drone Team Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Contributing to drone system development and testing." },
                ],
                skills: [
                    { name: "Python", level: 90 },
                    { name: "Arduino/ESP32", level: 78 },
                    { name: "IoT Systems", level: 75 },
                    { name: "Drone Technology", level: 72 },
                    { name: "Backend Development", level: 90 },
                ],
                projects: [
                    { name: "Drone Astra Versa", description: "IoT drone system for surveillance applications", tech: ["Python", "IoT", "Sensors"] },
                ],
                achievements: ["Drone Astra Versa Team Member"],
                social: { github: "https://github.com/zufar", linkedin: "https://linkedin.com/in/zufar" },
            },
            {
                slug: "zakhwa",
                name: "Zakhwa Aliya Maryam",
                photo: "members/zakhwa.png",
                role: "Drone Researcher & 3D Designer",
                status: "ACTIVE",
                email: "zakhwa.aliya@mhs.itenas.ac.id",
                phone: "+62 813 4567 8901",
                location: "Bandung, Indonesia",
                bio: "Informatics student with a strong interest in robotics and the broader world of IT. Quick to understand new material and highly motivated to explore and learn new technologies, especially in robotics and innovation with I-WILL.",
                shortDesc: "Informatics student passionate about robotics and learning new IT technologies.",
                tags: ["Robotics", "Informatics", "Leadership", "UI/UX", "Social Media"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2024 - Present", gpa: "" },
                    { degree: "High School (Science)", institution: "SMA Negeri 1 Baleendah", year: "2022 - 2024", gpa: "" },
                ],
                experience: [
                    { title: "Drone Researcher & 3D Designer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Tim peneliti untuk Drone Astra Versa dan desain mekanik 3D Drone Astra Versa." },
                    {
                        title: "Participant - Bootcamp Codespace (UI/UX Division)",
                        company: "Codespace",
                        period: "2024",
                        description: "Mengikuti pelatihan dan praktik di bidang UI/UX design."
                    },
                    {
                        title: "Participant - JuaraGCP Season 11",
                        company: "Google",
                        period: "2024",
                        description: "Mengikuti bootcamp cloud dan teknologi Google."
                    },
                    {
                        title: "Best Innovators - ICSIT 2025",
                        company: "-",
                        period: "2025",
                        description: "Mengikuti kompetisi riset pengembangan pembaharuan teknologi tingkat internasional dengan fokus pada AI dan IoT."
                    }
                ],
                skills: [
                    { name: "Robotics Fundamentals", level: 79 },
                    { name: "Basic Programming", level: 78 },
                    { name: "UI/UX Design (Figma)", level: 85 },
                ],
                projects: [],
                achievements: ["Drone Astra Versa Team Member"],
                social: { github: "https://github.com/cheese-voyager", linkedin: "https://linkedin.com/in/zakhwa" },
            },
            {
                slug: "farhan",
                name: "Farhan Kamil",
                photo: "/members/farhan.jpg",
                role: "AI & Backend Engineer",
                status: "ACTIVE",
                email: "farhan.kamil@mhs.itenas.ac.id",
                phone: "+62 812 0000 0004",
                location: "Bandung, Indonesia",
                bio: "Informatics student with a strong interest in Artificial Intelligence, data science, and backend engineering. Experienced in building AI/ML-powered systems, retrieval-augmented generation (RAG), and graph-based AI applications using modern Python ecosystems and cloud tools.",
                shortDesc: "AI and backend-focused Informatics student working on applied AI systems.",
                tags: ["AI", "Machine Learning", "Backend", "Data Science"],
                education: [
                    { degree: "Bachelor of Informatics Engineering", institution: "Institut Teknologi Nasional (ITENAS)", year: "2024 - Present", gpa: "3.94/4.00" },
                ],
                experience: [
                    { title: "AI & Backend Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun sistem AI, RAG, dan arsitektur backend untuk pemrosesan data Drone Astra Versa." },],
                skills: [
                    { name: "Python", level: 88 },
                    { name: "SQL", level: 85 },
                    { name: "JavaScript / Java", level: 80 },
                    { name: "FastAPI / Flask / MCP", level: 85 },
                    { name: "LangGraph / LangChain / RAG", level: 90 },
                ],
                projects: [
                    { name: "GraphWeaver", description: "AI-powered forensic investigator system dengan multi-agent workflow menggunakan LangGraph dan Neo4j untuk knowledge graph reasoning.", tech: ["Python", "LangGraph", "Neo4j", "Llama-3"] },
                    { name: "SecondBrain (ScholarSync)", description: "Sistem RAG untuk document intelligence dengan chunking, vector database retrieval, dan jawaban berbasis sitasi.", tech: ["Python", "LangChain", "Vector DB"] },
                    { name: "Farmile", description: "Platform ekosistem karier berbasis AI multi-agent dengan ATS checker, CV builder, dan AI interviewer.", tech: ["Python", "AI", "RAG"] },
                ],
                achievements: [
                    "Top 20 Finalist - AI Talent Hub 2025",
                    "Research grant Prokimnas untuk Computer Vision pada drone penebar benih"
                ],
                social: { github: "https://github.com/cheese-voyager", linkedin: "-" },
            },
            {
                slug: "najwa",
                name: "Najwa Hikmatyar",
                photo: "/members/najwa.png",
                role: "Multimedia & Simulator Developer",
                status: "ACTIVE",
                email: "najwa@mhs.itenas.ac.id",
                phone: "+62 814 5678 9012",
                location: "Bandung, Indonesia",
                bio: "Informatics undergraduate student at Institut Teknologi Nasional Bandung with a strong interest in multimedia and game development. Actively developing skills in C# programming, Unity game development, and video editing with DaVinci Resolve while contributing as a member of the Drone team at I-WILL Laboratory.",
                shortDesc: "Informatics student focused on Unity game development and multimedia.",
                tags: ["C#", "Unity", "Multimedia", "Video Editing"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "3.60/4.00" },
                ],
                experience: [
                    { title: "Multimedia & Simulator Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan simulasi game engine (Unity) dan materi video/multimedia untuk Drone Astra Versa." },
                    {
                        title: "Anggota – Tim Drone | Arc-01",
                        company: "Innovative Workingspace Integrated Living Laboratory (I-WILL)",
                        period: "2023 - Present",
                        description: "Berpartisipasi dalam pengembangan sistem drone dan aktivitas laboratorium inovasi."
                    }
                ],
                skills: [
                    { name: "C#", level: 85 },
                    { name: "Unity Game Engine", level: 80 },
                    { name: "DaVinci Resolve", level: 78 },
                ],
                projects: [],
                achievements: ["Drone Astra Versa Team Member"],
                social: { github: "https://github.com/najwa", linkedin: "https://linkedin.com/in/najwa" },
            },
        ],
    },
    {
        slug: "rover",
        name: "R.O.V.E.R",
        fullName: "Remote Operated Vehicle for Environmental Reconnaissance",
        logo: "/logos/rover.png",
        category: "IoT & Computer Vision",
        description: "Remote Operated Vehicle for Environmental Reconnaissance. A multifunctional RC car with cameras, distance sensors, and web/mobile control for area mapping, human tracking, and obstacle detection.",
        longDescription: "R.O.V.E.R (Remote Operated Vehicle for Environmental Reconnaissance) is a multifunctional RC car equipped with cameras, distance sensors, and web/mobile control capabilities. The team focuses on developing autonomous systems for area mapping, human tracking, and obstacle detection in various terrains and environments.",
        members: [
            {
                slug: "deden",
                name: "Deden Roga",
                photo: "/members/deden.jpg",
                role: "Team Leader & Hardware Specialist",
                status: "ACTIVE",
                email: "deden.roga@mhs.itenas.ac.id",
                phone: "+62 812 0000 0001",
                location: "Bandung, Indonesia",
                bio: "Informatics student with a strong interest in programming and technology development. Coming from a social sciences (IPS) high school background, highly motivated to keep learning and growing in IT through projects, online courses, and organizational experience.",
                shortDesc: "Informatics student passionate about programming and technology development.",
                tags: ["Programming", "Team Leadership", "Creativity"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "2024 - Present", gpa: "" },
                    { degree: "High School (IPS)", institution: "SMA Negeri 3 Rambah Hilir", year: "2021 - 2024", gpa: "" },
                ],
                experience: [
                    { title: "Team Leader & Hardware Specialist", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin tim R.O.V.E.R dan menangani perbaikan infrastruktur perangkat keras." },
                    {
                        title: "Team Leader / Project Member",
                        company: "I-WILL Laboratory Projects",
                        period: "2024 - Present",
                        description: "Berperan sebagai pemimpin dan anggota tim dalam berbagai proyek IoT, web, dan game seperti R.O.V.E.R, StreamForte, Ruang Seduh, dan Echoes of The Deep: First Descent."
                    }
                ],
                skills: [
                    { name: "Electronics & Hardware Prototyping", level: 80 },
                    { name: "Team Leadership in Tech Projects", level: 82 },
                    { name: "IoT Development", level: 80 },
                ],
                projects: [
                    { name: "R.O.V.E.R", description: "Proyek kendaraan IoT untuk eksplorasi dan pengintaian.", tech: ["IoT", "Robotik"] },
                    { name: "StreamForte", description: "Proyek berbasis web.", tech: ["Web", "Programming"] },
                    { name: "Ruang Seduh", description: "Platform web bertema kedai/kopi.", tech: ["Web", "Programming"] },
                    { name: "Echoes of The Deep: First Descent", description: "Proyek gabungan IoT dan game.", tech: ["IoT", "Game"] },
                ],
                achievements: ["R.O.V.E.R Team Leader"],
                social: { github: "https://github.com/deden", linkedin: "https://linkedin.com/in/deden" },
            },
            {
                slug: "dzakiyya",
                name: "Dzakiyya Puteri Aulia",
                photo: "/members/dzakiyya.JPG",
                role: "Navigation & SLAM Engineer",
                status: "ACTIVE",
                email: "dzakiyya@mhs.itenas.ac.id",
                phone: "+62 858 0134 6628",
                location: "Bandung, Indonesia",
                bio: "Contributing to R.O.V.E.R development with focus on navigation and mapping systems.",
                shortDesc: "Working on navigation and SLAM systems for R.O.V.E.R.",
                tags: ["Navigation", "SLAM", "Python"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.80/4.00" }],
                experience: [
                    { title: "Navigation & SLAM Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan sistem navigasi pemetaan presisi tinggi (SLAM) untuk R.O.V.E.R." }, { title: "R.O.V.E.R Team Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Developing navigation and mapping systems." }],
                skills: [{ name: "Python", level: 82 }, { name: "SLAM", level: 78 }, { name: "ROS", level: 75 }, { name: "Computer Vision", level: 72 }],
                projects: [{ name: "Mapping System", description: "Real-time environment mapping using SLAM", tech: ["ROS", "Cartographer", "LiDAR"] }],
                achievements: ["R.O.V.E.R Team Member"],
                social: { github: "https://github.com/dzakiyya", linkedin: "https://linkedin.com/in/dzakiyya" },
            },
            {
                slug: "asri",
                name: "Asri Tanisha R.",
                photo: "/members/asri.JPG",
                role: "Computer Vision Engineer",
                status: "ACTIVE",
                email: "asri.tanisha@mhs.itenas.ac.id",
                phone: "+62 812 0000 0003",
                location: "Bandung, Indonesia",
                bio: "Dedicated Informatics student focusing on Computer Vision, Artificial Intelligence, and Mobile Development. Experienced in YOLO-based detection, MobileNetV2+LSTM violence detection, and remote-controlled ROVER systems. Actively participating in national and international technology competitions.",
                shortDesc: "Informatics student specializing in computer vision, AI, and mobile development.",
                tags: ["Computer Vision", "AI", "Mobile Development", "YOLO", "LSTM"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "2023 - 2027", gpa: "3.64/4.00" }],
                experience: [
                    { title: "Computer Vision Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengimplementasikan model deteksi objek (YOLO) pada robot R.O.V.E.R." },
                    {
                        title: "Research Division Member",
                        company: "I-WILL Laboratory",
                        period: "2024 - Present",
                        description: "Berpartisipasi dalam penelitian berbasis computer vision dan AI."
                    }
                ],
                skills: [
                    { name: "Python", level: 85 },
                    { name: "YOLO", level: 82 },
                    { name: "CNN / LSTM", level: 82 },
                    { name: "OpenCV", level: 80 },
                    { name: "Java", level: 75 },
                    { name: "JavaScript", level: 75 },
                    { name: "Data Analysis / MySQL", level: 78 },
                ],
                projects: [
                    { name: "Rover – Augmented Security Patrol System", description: "Sistem keamanan berbasis AI dan monitoring jarak jauh dengan teknologi Python, YOLO, MQTT, dan Raspberry Pi.", tech: ["Python", "YOLO", "MQTT", "Raspberry Pi"] },
                    { name: "Violence Detection System", description: "Deteksi kekerasan real-time menggunakan CNN (MobileNetV2) dan LSTM.", tech: ["Python", "MobileNetV2", "LSTM", "OpenCV"] },
                ],
                achievements: ["R.O.V.E.R Team Member"],
                social: { github: "https://github.com/asri", linkedin: "https://linkedin.com/in/asri" },
            },
            {
                slug: "matilde",
                name: "Matilde Ina",
                photo: "/members/matilde.JPG",
                role: "IoT & Web Developer",
                status: "ACTIVE",
                email: "matilde.ina@mhs.itenas.ac.id",
                phone: "+62 812 0000 0004",
                location: "Bandung, Indonesia",
                bio: "Active 6th-semester Informatics student at ITENAS Bandung with strong interest in Internet of Things (IoT), web development, and digital image processing. Experienced with Python, Java, JavaScript, Node.js, React.js, C++, Pascal, and hands-on projects using Arduino and Raspberry Pi.",
                shortDesc: "Informatics student focusing on IoT, web development, and digital image processing.",
                tags: ["IoT", "Web Development", "Digital Image Processing", "UI/UX"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional (ITENAS) Bandung", year: "2023 - Present", gpa: "" }],
                experience: [
                    { title: "IoT & Web Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun dashboard web pemantauan jarak jauh dan integrasi IoT untuk R.O.V.E.R." },
                    {
                        title: "R.O.V.E.R Team Member",
                        company: "I-WILL Laboratory",
                        period: "2024 - Present",
                        description: "Mengembangkan sistem R.O.V.E.R berbasis IoT untuk eksplorasi dan reconnaissance."
                    }
                ],
                skills: [
                    { name: "Python", level: 85 },
                    { name: "Java", level: 80 },
                    { name: "JavaScript / Node.js / React.js", level: 82 },
                    { name: "C++ / Pascal", level: 78 },
                    { name: "SQL / Database Programming", level: 80 },
                    { name: "Arduino / Raspberry Pi", level: 82 },
                ],
                projects: [
                    { name: "Automatic Cigarette Smoke Detection and Air Purification", description: "Prototype sistem deteksi asap rokok dan pemurnian udara menggunakan Arduino Uno.", tech: ["Arduino", "Sensors", "IoT"] },
                    { name: "Distance Warning System", description: "Sistem peringatan jarak menggunakan sensor ultrasonik dan inframerah dengan Raspberry Pi 4.", tech: ["Raspberry Pi", "Sensors"] },
                    { name: "Violence Detection Using MobileNetV2 and TSM", description: "Deteksi kekerasan real-time dengan MobileNetV2 dan Temporal Shift Module.", tech: ["Python", "MobileNetV2", "TSM"] },
                    { name: "Indonesian Supreme Court Decision Retrieval (BM25 + BERT)", description: "Sistem information retrieval untuk putusan MA menggunakan BM25 dan BERT.", tech: ["Python", "BM25", "BERT"] },
                    { name: "Skysense Mobile Application", description: "Aplikasi mobile Skysense untuk informasi cuaca dan lingkungan.", tech: ["Mobile", "IoT"] },
                ],
                achievements: ["R.O.V.E.R Team Member"],
                social: { github: "https://github.com/matilde", linkedin: "https://linkedin.com/in/matilde" },
            },
        ],
    },
    {
        slug: "angklungine-x",
        name: "Angklungine X",
        fullName: "Smart Robotic Angklung System",
        logo: "/logos/angklungine-x.png",
        category: "IoT & AI",
        description: "An innovative robotic system that modernizes the traditional West Javanese angklung by combining IoT and AI. Designed to preserve and promote Indonesia's cultural heritage through smart, automated performances.",
        longDescription: "Angklungine X is an innovative robotic system that modernizes the traditional West Javanese angklung by combining IoT and AI technologies. The project aims to preserve and promote Indonesia's cultural heritage through smart, automated performances while making the instrument accessible to a wider audience.",
        members: [
            {
                slug: "shandy",
                name: "Shandy Handika",
                photo: "/members/shandy.JPG",
                role: "Team Leader & Automation Engineer",
                status: "INACTIVE",
                email: "shandy.handika@mhs.itenas.ac.id",
                phone: "+62 812 1111 0001",
                location: "Bandung, Indonesia",
                bio: "Leading the Angklungine X team to create an innovative robotic angklung system that combines tradition with IoT and AI.",
                shortDesc: "Leading the development of smart robotic angklung system.",
                tags: ["IoT", "Robotics", "Cultural Tech"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.78/4.00" }],
                experience: [
                    { title: "Team Leader & Automation Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin Angklungine X dan merekayasa kontrol servo otomatisasi melalui Arduino." }, { title: "Angklungine X Team Leader", company: "I-WILL Laboratory", period: "2024 - Present", description: "Leading the development of automated angklung performance system." }],
                skills: [{ name: "Arduino/ESP32", level: 90 }, { name: "Python", level: 85 }, { name: "Servo Control", level: 88 }, { name: "MIDI", level: 75 }],
                projects: [{ name: "Angklungine X v1.0", description: "Automated angklung with multiple notes", tech: ["Arduino", "Servo", "MIDI"] }],
                achievements: ["Angklungine X Team Leader", "Cultural Innovation Award"],
                social: { github: "https://github.com/shandy", linkedin: "https://linkedin.com/in/shandy" },
            },
            {
                slug: "rainova",
                name: "Rainova",
                photo: "/members/rainova.JPG",
                role: "Mechanical & Hardware Engineer",
                status: "ACTIVE",
                email: "rainova@mhs.itenas.ac.id",
                phone: "+62 812 1111 0002",
                location: "Bandung, Indonesia",
                bio: "Contributing to the Angklungine X project with focus on hardware and mechanical systems.",
                shortDesc: "Working on mechanical systems for automated angklung.",
                tags: ["Hardware", "Mechanical", "Arduino"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.72/4.00" }],
                experience: [
                    { title: "Mechanical & Hardware Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Merancang aktuator fisik, komponen mekanik, dan cetakan 3D pada Angklungine X." }, { title: "Angklungine X Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Hardware development for robotic angklung." }],
                skills: [{ name: "Arduino", level: 82 }, { name: "Servo Motors", level: 80 }, { name: "3D Printing", level: 75 }, { name: "Mechanical Design", level: 72 }],
                projects: [{ name: "Actuator System", description: "Servo-based mechanism for angklung", tech: ["Servo", "Arduino", "3D Print"] }],
                achievements: ["Angklungine X Team Member"],
                social: { github: "https://github.com/rainova", linkedin: "https://linkedin.com/in/rainova" },
            },
            {
                slug: "melvina",
                name: "Melvina",
                photo: "/members/melvina.JPG",
                role: "Control Software Engineer",
                status: "ACTIVE",
                email: "melvina@mhs.itenas.ac.id",
                phone: "+62 812 1111 0003",
                location: "Bandung, Indonesia",
                bio: "Developing software and control systems for the Angklungine X project.",
                shortDesc: "Building control software for robotic angklung.",
                tags: ["Software", "Python", "Control"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.75/4.00" }],
                experience: [
                    { title: "Control Software Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan perangkat lunak kendali MIDI dan serial Python untuk Angklungine X." }, { title: "Angklungine X Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Software development for robotic angklung." }],
                skills: [{ name: "Python", level: 85 }, { name: "MIDI", level: 78 }, { name: "React", level: 75 }, { name: "Serial Comm", level: 72 }],
                projects: [{ name: "Music Controller", description: "Software control for angklung performance", tech: ["Python", "MIDI", "Serial"] }],
                achievements: ["Angklungine X Team Member"],
                social: { github: "https://github.com/melvina", linkedin: "https://linkedin.com/in/melvina" },
            },
            {
                slug: "yuddha-angklung",
                name: "Yuddha",
                photo: "/members/yuddha.JPG",
                role: "Backend & Embedded Engineer",
                status: "ACTIVE",
                email: "yuddha@mhs.itenas.ac.id",
                phone: "+62 812 1111 0004",
                location: "Bandung, Indonesia",
                bio: "Informatics student with strong interest and experience in software development and Internet of Things (IoT). Used to designing and developing backend web applications as well as microcontroller-based systems integrated with sensors and actuators.",
                shortDesc: "Backend and IoT-oriented Informatics student working on full-stack and embedded systems.",
                tags: ["Backend Development", "IoT", "Embedded Systems"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2024 - Present", gpa: "" }],
                experience: [
                    { title: "Backend & Embedded Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Menghubungkan mikrokontroler dengan backend system untuk operasional mandiri Angklungine X." },
                    {
                        title: "Software & IoT Developer",
                        company: "Independent / Academic Projects",
                        period: "2021 - Present",
                        description: "Merancang dan mengembangkan aplikasi backend berbasis web serta sistem mikrokontroler terintegrasi sensor dan aktuator."
                    }
                ],
                skills: [
                    { name: "PHP / JavaScript / Python", level: 82 },
                    { name: "REST API Development", level: 80 },
                    { name: "SQL & Database Design", level: 80 },
                    { name: "Object-Oriented Programming", level: 80 },
                    { name: "Git Version Control", level: 78 },
                    { name: "ESP32 / Arduino & Sensor Integration", level: 82 },
                ],
                projects: [],
                achievements: ["Angklungine X Team Member"],
                social: { github: "https://github.com/yuddha", linkedin: "https://linkedin.com/in/yuddha" },
            },
        ],
    },
    {
        slug: "smart-train",
        name: "Smart Train Simulator",
        fullName: "AI-Powered Railway Simulation System",
        logo: "/logos/smartTrain.png",
        category: "AI & Computer Vision",
        description: "SmartTrain is an automated miniature train project. It uses AI technology to detect vehicles and automatically manage crossing barriers and live cameras in real-time, improving safety and efficiency at railway crossings.",
        longDescription: "SmartTrain is an automated miniature train project. It uses AI technology to detect vehicles and automatically manage crossing barriers and live cameras in real-time, improving safety and efficiency at railway crossings.",
        members: [
            {
                slug: "hasby",
                name: "Muhammad Hasby As-Shiddiqy",
                photo: "/members/hasby.png",
                role: "Team Leader",
                status: "ACTIVE",
                email: "by1frost.business@gmail.com",
                phone: "+6285174370106",
                location: "Bandung, Indonesia",
                bio: "Dedicated Computer Science Student experienced in leading technical projects from planning to implementation. Skilled in Digital Image Processing and designing efficient Computer Vision algorithms using Python for intelligent systems. Combines rigorous mathematical understanding with effective communication skills, fully prepared to mentor students and troubleshoot technical issues in a laboratory environment.",
                shortDesc: "A dynamic, adaptive individual passionate about developing technology-based solutions. Has a strong interest in IoT and Data Science, actively seeking opportunities to implement innovative ideas into actual practice.",
                tags: ["IoT", "Data Science", "Technology Development", "Innovation"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "3.70/4.00" },
                    { degree: "High School Diploma (Bilingual/Science)", institution: "SMA Laboratorium Percontohan UPI", year: "2020 - 2023", gpa: "-" }
                ],
                experience: [
                    {
                        title: "Member / SmartTrain Project Lead",
                        company: "Innovative Workingspace Integrated Living Laboratory (I-WILL)",
                        period: "April 2025 - Present",
                        description: "● Led 6 people and architected a SmartTrain Miniature Project. An IoT-based embedded solution integrating ESP32 microcontrollers, AI-powered vehicle detection (YOLO), and real-time barrier control via MQTT/HTTP."
                    },
                    {
                        title: "Publication and Documentation",
                        company: "INKU Itenas",
                        period: "2024 - Present",
                        description: "● Created promotional posters and documented events organized by INKU."
                    },
                    {
                        title: "Member of Robotics Extracurricular",
                        company: "SMA Laboratorium Percontohan UPI",
                        period: "2021 - 2022",
                        description: "● Participated in unique IoT learning activities and STEM Center activities building RC car frames."
                    },
                    {
                        title: "Member of Music Extracurricular",
                        company: "SMA Laboratorium Percontohan UPI",
                        period: "2021 - 2022",
                        description: "● Participated in music training for playing the piano."
                    }
                ],
                skills: [
                    { name: "Programming: Python, JavaScript, Java, SQL, C++", level: 0 },
                    { name: "Frameworks: TensorFlow, PyTorch, scikit-learn, OpenCV, React.js", level: 0 },
                    { name: "Databases: MySQL, MongoDB", level: 0 },
                    { name: "Tools: Git, GitHub, Figma, Google Colab, Kaggle", level: 0 },
                    { name: "Soft Skills: Leadership, Analytical Thinking, Mentoring, Problem Solving", level: 0 }
                ],
                projects: [
                    {
                        name: "KainVision – Fabric Type Classification",
                        description: "Built an end-to-end image classification pipeline to identify fabric types using classical computer vision techniques. Evaluated Random Forest, SVM, and KNN classifiers, and implemented a Tkinter desktop GUI for real-time fabric prediction.",
                        tech: ["Python", "scikit-learn", "OpenCV", "scikit-image"]
                    },
                    {
                        name: "Car Obstacle Detection Mobile",
                        description: "Developed a real-time Android vehicle safety system using Kotlin and TensorFlow Lite, integrating a quantized YOLOv5su model and OpenCV-based focal length distance estimation.",
                        tech: ["Kotlin", "TensorFlow Lite", "YOLOv5su", "OpenCV"]
                    },
                    {
                        name: "ForUStudio Platform",
                        description: "Full-Stack Web Application for creative project management. Features include a ticketing system, project file management, multi-method payment processing, and role-based access control (RBAC).",
                        tech: ["JavaScript", "Express.js", "React.js", "MongoDB"]
                    },
                    {
                        name: "Itenas Youth Innovation Platform (IYIP)",
                        description: "Full-Stack Web Application for academic management. Features include event management, digital journal publication, community groups, and an approval workflow with JWT authentication.",
                        tech: ["JavaScript", "Express.js", "React.js", "MongoDB"]
                    },
                    {
                        name: "Weather Monitoring System",
                        description: "Developed a microcontroller-based weather monitoring system to measure wind speed and direction in real-time, utilizing time-based logic and data visualization on a 16x2 LCD interface.",
                        tech: ["C++", "Microcontroller", "Sensors"]
                    }
                ],
                achievements: [
                    "Dibimbing Indonesia - dibimbing.id DSF 36 “Data Science” (Online Bootcamp, 2025)",
                    "Codespace Itenas - Codespace Batch 2.0 \"Machine Learning\" (Campus Bootcamp, 2024)"
                ],
                social: { github: "https://github.com/hasbyas1", linkedin: "https://linkedin.com/in/hasbyas1", web: "", instagram: "https://instagram.com/runosby1_" }
            },
            {
                slug: "hickham",
                name: "Hickham Amwala Koswara",
                photo: "/members/hickham.jpg",
                role: "Drafter",
                status: "ACTIVE",
                email: "hickham04@gmail.com",
                phone: "+6283195907673",
                location: "Bandung, Indonesia",
                bio: "Has an interest and experience in parametric-based 3D design for the development of technical and functional objects. Accustomed to arranging precision models for prototyping and mechanical component needs, with a structured and optimizable design approach. A commitment to accuracy, design efficiency, and manufacturing readiness is the main focus in every design process.",
                shortDesc: "Has an interest and experience in parametric-based 3D design for the development of technical and functional objects. Accustomed to arranging precision models for prototyping and mechanical component needs, with a structured and optimizable design approach. A commitment to accuracy, design efficiency, and manufacturing readiness is the main focus in every design process.",
                tags: ["3D Modeling", "Parametric Design", "Prototyping", "Technical Design"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "-" }
                ],
                experience: [
                    {
                        title: "Technical Experience: 3D Design of Functional Components",
                        company: "-",
                        period: "2025 - Present",
                        description: "● Created 3D designs for mechanical and structural components for academic assignments and prototype development.\n● Iterated designs based on evaluations of function, precision, and ease of assembly.\n● Integrated 3D designs with 3D printing processes to validate form and function.\n● Documented design results as part of technical reports and project presentations."
                    },
                    {
                        title: "Training & Development",
                        company: "-",
                        period: "-",
                        description: "● Self-learning in 3D design and modeling for academic needs and functional component development.\n● Explored parametric design techniques, prototyping, and design validation through university assignments.\n● Developed technical design skills outside the formal curriculum through continuous practice and self-study.\n● Applied a problem-solving approach in adapting designs to functional needs and manufacturing constraints."
                    }
                ],
                skills: [
                    { name: "3D Modeling for Academic Projects", level: 0 },
                    { name: "Basic Mechanical Component Design", level: 0 },
                    { name: "Parametric Design", level: 0 },
                    { name: "Prototyping Using 3D Printing", level: 0 },
                    { name: "Technical Documentation and Presentation", level: 0 }
                ],
                projects: [],
                achievements: [],
                social: { github: "", linkedin: "", web: "" }
            },
            {
                slug: "eka",
                name: "Eka Fajar Rahmansyah",
                photo: "/members/eka.JPG",
                role: "Embedded Hardware Engineer",
                status: "ACTIVE",
                email: "ekahr8@gmail.com",
                phone: "+6285156441077",
                location: "Kp. Babakan Pandan, Ds. Cimekar, Kec. Cileunyi",
                bio: "An active Mechanical Engineering student at Itenas Bandung with organizational experience, possessing leadership, communication, teamwork, and problem-solving skills, ready to contribute positively in both academic and professional environments.",
                shortDesc: "An active Mechanical Engineering student at Itenas Bandung with organizational experience, possessing leadership, communication, teamwork, and problem-solving skills, ready to contribute positively in both academic and professional environments.",
                tags: ["Mechanical Engineering", "Automotive", "Problem Solving", "Team Leadership"],
                education: [
                    { degree: "Bachelor of Mechanical Engineering", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "-" },
                    { degree: "High School Equivalent (Automotive Light Vehicle Engineering)", institution: "SMK Bandung Timur", year: "2020 - 2023", gpa: "-" }
                ],
                experience: [
                    {
                        title: "Industrial Work Practice",
                        company: "Kondang Jaya Motor Workshop",
                        period: "January 2022 - March 2022",
                        description: "● Performed periodic maintenance on engines and workshop tools.\n● Ensured the availability of spare parts in the workshop was always controlled.\n● Performed tune-ups and overhauls on vehicles."
                    }
                ],
                skills: [
                    { name: "Teamwork", level: 0 },
                    { name: "Public Speaking", level: 0 },
                    { name: "Problem Solving", level: 0 },
                    { name: "DSLR/Mirrorless Camera Mastery", level: 0 }
                ],
                projects: [],
                achievements: [],
                social: { github: "", linkedin: "", web: "", instagram: "https://instagram.com/ekafjar_" }
            },
        ],
    },
    {
        slug: "netradump",
        name: "NetraDUMP",
        fullName: "Intelligent Waste Management System",
        logo: "/logos/netradump.png",
        category: "IoT & Computer Vision",
        description: "0.2% of waste remains unmanaged, creating serious environmental and health risks, and NetraDUMP directly addresses this gap as an AI-powered robot that detects, sorts, and manages waste in real time. By enabling zero-contact handling, precision steering control, and live dashboard monitoring, NetraDUMP makes waste management safer, smarter, and ready for modern cities.",
        longDescription: "0.2% of waste remains unmanaged, creating serious environmental and health risks, and NetraDUMP directly addresses this gap as an AI-powered robot that detects, sorts, and manages waste in real time. By enabling zero-contact handling, precision steering control, and live dashboard monitoring, NetraDUMP makes waste management safer, smarter, and ready for modern cities.",
        members: [
            {
                slug: "malendra",
                name: "Malendra Sahla Rizky",
                photo: "/members/malendra.JPG",
                role: "Team Leader & AI and Website Designer",
                status: "ACTIVE",
                email: "malendra.rzk@gmail.com",
                phone: "+6281386881171",
                location: "Bandung, Indonesia",
                bio: "Inquisitive undergraduate student majoring in computer science. Proficient in Python, able to make websites based on Flask and FastAPI. Learned C, C++, HTML, CSS, and a little bit of JavaScript.",
                shortDesc: "Informatics student focusing on Python, data science, and backend APIs.",
                tags: ["Python", "Data Science", "FastAPI", "Flask"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "Sep 2024 - Present", gpa: "3.88/4.00" },
                    { degree: "High School Diploma (Rekayasa Perangkat Lunak)", institution: "SMK Negeri 2 Bandung", year: "Jun 2021 - Jun 2024", gpa: "85.21/100.00" },
                ],
                experience: [
                    {
                        title: "Data Science Intern",
                        company: "PT. Kazee Digital Indonesia",
                        period: "Jan 2023 – Jun 2023",
                        description: "● Increasing the accuracy of the current face recognition service for online attendance application.\n● Led the team to build a new API using FastAPI framework for several data science models and upscaling efficiency by 50%.\n● Increasing the data model’s accuracy by 25% with labeling more than 2000 images and more than 10000 texts."
                    },
                    {
                        title: "Project Controller Manager",
                        company: "AIESEC in Bandung",
                        period: "Feb 2026 – Present",
                        description: "● Controlling all projects ran by conducting project hearing and audits. Ensuring project sustainability for the entity."
                    },
                    {
                        title: "Quality Assurance Team Leader of Engagement",
                        company: "AIESEC in Bandung",
                        period: "Feb 2025 – Jan 2026",
                        description: "● Contributed to 1 agenda rundown and a budget plan for a 2.5 months event called AIESEC Future Leaders.\n● Collaborated with 19 other functional colleagues and 100+ local committee members."
                    },
                    {
                        title: "Researcher",
                        company: "I-WILL Laboratory",
                        period: "Jun 2025 – Aug 2025",
                        description: "● Managed project’s software for the project NetraDUMP."
                    },
                    {
                        title: "Human Resource Management Staff",
                        company: "Himpunan Mahasiswa Informatika Itenas",
                        period: "Dec 2024 – Dec 2025",
                        description: "● Tracking and managing 60+ organization members’ development."
                    }
                ],
                skills: [
                    { name: "Python", level: 90 },
                    { name: "Flask / FastAPI", level: 88 },
                    { name: "HTML / CSS / Express JS", level: 85 },
                    { name: "Pandas / SQL", level: 80 },
                    { name: "PHP / C / C++", level: 80 },
                    { name: "English (Professional) / German (Elementary)", level: 85 },
                ],
                projects: [
                    {
                        name: "NetraDUMP – Raspberry Pi-powered Trash-picking Robot",
                        description: "Remotely operated waste collection robot with a robotic arm for hazardous/toxic (B3) waste handling, integrated with multiple webcams for real-time vision and planned YOLOv8 object detection. Controlled via PC steering wheel with bidirectional Python Flask & WebSocket communication for low-latency telemetry streaming.",
                        tech: ["Python", "Flask", "WebSocket", "Raspberry Pi", "YOLOv8"]
                    },
                    {
                        name: "Presense – Event Attendance Tracker",
                        description: "Event attendance tracking system. Link: https://presense.malendra.com/",
                        tech: ["Python", "Web", "Flask"]
                    },
                ],
                achievements: [
                    "Finalist of University Level Scientific Paper Competition – PIKIR 2025",
                    "Online Scholarship Competition (OSC) – Undergraduate Fully Funded (2023)",
                    "Harvard’s CS50x Intro to Computer Science & CS50P Intro to Python",
                    "TOEIC Score: 925"
                ],
                social: { github: "", linkedin: "https://linkedin.com/in/malendra", web: "https://malendra.com" },
            },
            {
                slug: "ari",
                name: "Ari Ferdiana",
                photo: "/members/ari.jpg",
                role: "Hardware and Electrical Engineer",
                status: "ACTIVE",
                email: "ari.ferdiana@mhs.itenas.ac.id",
                phone: "+6285860535626",
                location: "Bandung, Indonesia",
                bio: "Informatics undergraduate student with a strong passion for computer networks, IoT, and creative design. I highly value the continuous learning process and actively explore new technologies—from software development to microcontrollers. Backed by experience in IT support, I am driven to develop my skills, share knowledge with others, and build impactful and useful technological solutions.",
                shortDesc: "Informatics student leading IoT and computer network-based projects.",
                tags: ["IoT", "Computer Networks", "UI/UX", "Raspberry Pi", "Arduino"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "2024 - Present", gpa: "-" },
                    { degree: "High School Diploma (Teknik Komputer dan Jaringan/Computer and Network Major)", institution: "SMK NEGERI 2 BALEENDAH", year: "2020 - 2023", gpa: " 87.13/100.00" }
                ],
                experience: [
                    // { title: "Team Leader & IoT Architect", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin strategi sistem operasi, navigasi, dan infrastruktur IoT terpadu untuk NetraDUMP." },
                    {
                        title: "IT Support Intern",
                        company: "Hotel Holiday Inn Pasteur",
                        period: "Aug 2022 – Dec 2022",
                        description: "● Daily technical support for hardware, software, and network systems to ensure smooth hotel operations.\n● Assisted in maintaining the hotel’s network infrastructure, including troubleshooting internet connectivity and point-of-sale (POS) systems.\n● Performed software installation, configuration, and updates on staff computers and internal hotel systems.\n● Collaborated with the operations team to handle technical requests during the internship, improving IT response efficiency."
                    },
                    {
                        title: "Human Resource Management Staff",
                        company: "Himpunan Mahasiswa Informatika Itenas",
                        period: "Dec 2024 – Dec 2025",
                        description: "● Tracking and managing 200+ organization members’ development."
                    }
                ],
                skills: [
                    { name: "Python, PHP, HTML, CSS, Laravel", level: 82 },
                    { name: "Raspberry Pi, Arduino, ESP32, Actuators Integration", level: 82 },
                    { name: "Network Troubleshooting", level: 80 },
                    { name: "Figma & Creative Design", level: 80 },
                    { name: "MySQL, Git, GitHub", level: 80 },
                    { name: "Native in Indonesian, Intermediate Proficiency in English.", level: 80 },
                ],
                projects: [
                    { name: "NetraDUMP – Remote Trash Collection Mobile Robot", description: "○ Developed a remote-controlled mobile robot equipped with a robotic arm and an AI camera, specifically designed for remote trash collection. \n○ Configured and programmed a Raspberry Pi to control the mobility motors, robotic arm movements, and integrate the AI vision system", tech: ["Raspberry Pi", "Motors", "AI Camera"] },
                    { name: "Smart Parking System", description: "○ Developed an automated smart parking system utilizing RFID technology for access control. \n○ Designed the system to automatically open the parking gate upon successful RFID scanning and actively direct drivers to available empty parking spaces", tech: ["Arduino", "RFID", "Sensors"] },
                    { name: "ecoGrow (Plant Care App UI/UX)", description: "○ Designed a comprehensive UI/UX concept using Figma for a plant care mobile application.\n ○ Created interactive prototypes featuring a care agenda, disease scanning capability, and an AI chat interface.", tech: ["Figma"] },
                    { name: "Itenas Resource Center (Inventory Web App)", description: "○ Built a web-based inventory management system using the Laravel framework and MySQL database.\n ○ Implemented CRUD operations and database seeders to efficiently manage rooms, items, and categories.", tech: ["Laravel", "MySQL"] },
                    { name: "Automated 3D Scanner", description: "○ Built a 3D scanning device utilizing an ESP32 microcontroller and a stepper motor for precise rotational control.\n ○ Developed a laser detection algorithm in Python using the OpenCV library to capture and process scanning data.", tech: ["Laravel", "MySQL"] },
                ],
                achievements: [
                    "Online Scholarship Competition (OSC) – Fully Funded Undergraduate Scholarship (2023)",
                ],
                social: { github: "https://github.com/AriFerdiana", linkedin: "" },
            },
            {
                slug: "lingga",
                name: "Muhamad Lingga Darmawan",
                photo: "/members/lingga.jpg",
                role: "Mechanical Systems Engineer",
                status: "ACTIVE",
                email: "muhamad.lingga@mhs.itenas.ac.id",
                phone: "+6281321763162",
                location: "Bandung, Indonesia",
                bio: "Detail-oriented and curious undergraduate Computer Science student with hands-on experience in IT infrastructure and network administration. Skilled in configuring LAN, basic server setup, and network security. Demonstrated leadership in team projects and student organizations. Fast learner, adaptable to new technologies, and able to work both independently and in a team environment.",
                shortDesc: "Detail-oriented and curious undergraduate Computer Science student with hands-on experience in IT infrastructure and network administration",
                tags: ["Network Administration", "IT Infrastructure", "Server Management", "DevOps"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "Sep 2024 - Present", gpa: "-" },
                    { degree: "High School Diploma (Computer and Network Major)", institution: "SMK Prakarya Internasional", year: "Jul 2021 - Jul 2024", gpa: "89.51/100.00" }
                ],
                experience: [
                    {
                        title: "IT Support Intern",
                        company: "PT. Sarana Pactindo Bandung",
                        period: "Jan 2023 – 2023",
                        description: "● Monitor and record the performance of servers and networks to ensure system availability and stability, while detecting potential issues early.\n● Diagnose and repair faulty hardware and software, provide technical support, and ensure systems are running optimally.\n● Perform regular maintenance and inspections on gensets and UPS to ensure optimal backup power availability and prevent operational disruptions."
                    },
                    {
                        title: "Student Representative Council Staff",
                        company: "Himpunan Mahasiswa Informatika Itenas",
                        period: "Jan 2025 – Present",
                        description: "● Representing students' voices, bridging communication between students and the campus authorities, organizing activities, and advocating for students' rights and interests regarding policies, facilities, and programs that affect them."
                    },
                    {
                        title: "Paskibra",
                        company: "-",
                        period: "2019 – 2024",
                        description: "● Active member for 6 years during junior high and vocational high school, involved in regular training, ceremony executions, and marching competitions at school, district national levels."
                    }
                ],
                skills: [
                    { name: "Computer and network setup and configuration (Cisco, mikrotik OS, server)", level: 0 }
                ],
                projects: [
                    { name: "LAMP & LEMP Stack (2024)", description: "Set up Apache/Nginx, MySQL, and PHP on Linux to host dynamic websites.", tech: [] },
                    { name: "Nextcloud (2024)", description: "Deployed private cloud storage with SSL and device sync.", tech: [] },
                    { name: "Laravel DevOps (2024)", description: "Automated Laravel deployment with CI/CD tools.", tech: [] }
                ],
                achievements: [],
                social: { github: "", linkedin: "", web: "" },
            },
        ],
    },
    {
        slug: "sarah",
        name: "S.A.R.A.H & Citra",
        fullName: "Search And Rescue Autonomous Hexapod",
        logo: "/logos/sarah.png",
        category: "Robotics",
        description: "A Search And Rescue Autonomous Hexapod built to navigate complex terrains with stability and intelligence. With advanced locomotion, LiDAR mapping, obstacle avoidance, and voice control, S.A.R.A.H is designed to assist where human access is limited and time is critical.",
        longDescription: "A Search And Rescue Autonomous Hexapod built to navigate complex terrains with stability and intelligence. With advanced locomotion, LiDAR mapping, obstacle avoidance, and voice control, S.A.R.A.H is designed to assist where human access is limited and time is critical.",
        members: [
            {
                slug: "viktorikus",
                name: "Viktorikus Nokia Laksamana Febrianto",
                photo: "/members/viktor.JPG",
                role: "Team Leader & Hardware Developer",
                status: "ACTIVE",
                email: "victorrikus@gmail.com",
                phone: "+6282121373459",
                location: "Bandung, Indonesia",
                bio: "I am interested in pursuing an opportunity as a Firmware or Hardware Engineer (or Embedded Systems Engineer) because I have a strong passion for Robotics, IoT, and bridging the gap between software and physical hardware. During my studies in Informatics at ITENAS, I have applied my programming foundation directly to hands-on projects, including developing Hexapod robots and integrated IoT systems using microcontrollers and sensors. Through this opportunity, I aim to deepen my technical skills in firmware development, hardware-software integration, and control logic, while learning industry-standard best practices. This experience will prepare me to grow into a professional engineer capable of building robust, intelligent, and scalable hardware solutions.",
                shortDesc: "Firmware or Hardware Engineer (or Embedded Systems Engineer) because I have a strong passion for Robotics, IoT, and bridging the gap between software and physical hardware.",
                tags: ["Robotics", "IoT", "Embedded Systems", "HRI"],
                education: [
                    { degree: "Bachelor’s Degree in Informatics", institution: "Institut Teknologi Nasional", year: "September 2023 – Present", gpa: "3.38/4.00" }
                ],
                experience: [
                    {
                        title: "Tabletop-bot Companion Robot",
                        company: "IFAC - International Federation (Lecturer Project)",
                        period: "2026",
                        description: "● Contributed to research and development of a companion robot project affiliated with IFAC (International Federation of Automatic Control)\n● Designed and implemented a Human-Robot Interaction (HRI) system to enable responsive and communicative robot behavior (Status: Ongoing).\n● Integrated IMU sensors and motor actuators using the ESP32-S3 Audio Board as the main hardware control unit (Status: Ongoing).\n● Conducted hardware prototyping and iterative algorithm testing to ensure system stability and reliability.\n● Implemented ChatGPT as a Natural Language Processing (NLP) engine to analyze conversational context, enabling the robot to understand and respond to human language naturally (Status: Ongoing)."
                    },
                    {
                        title: "S.A.R.A.H - Search And Rescue Adaptive Hexapod",
                        company: "Freelance IoT and Robotic Project",
                        period: "2025",
                        description: "● Developed a six-legged (hexapod) robot based on Raspberry Pi, wirelessly controlled via teleoperation using a PS4 controller.\n● Implemented the Tripod Gait algorithm to produce smooth walking cycles and maintain robot balance during movement.\n● Programmed kinematic logic to support complex motion maneuvers, including omnidirectional walking (forward and backward), in-place rotation, and body posture control (standing and crouching)."
                    },
                    {
                        title: "AI-Based Adaptive Learning System for Solving Three-Variable Linear Equation Systems (SPLTV)",
                        company: "Freelance AI Engineering",
                        period: "2025",
                        description: "● Developed an adaptive learning system for mathematics (Systems of Linear Equations in Three Variables / SPLTV) by integrating a Random Forest model to predict students’ learning strategies in real time.\n● Designed a Breadth-First Search (BFS) algorithm for curriculum flow management, ensuring logical transitions from foundational concepts to advanced topics.\n● Implemented a Rule-Based System to detect procedural versus conceptual errors, providing targeted and specific feedback to learners.\n● Built a backend architecture that processes dynamic problem content transformation based on student profiles and performance."
                    },
                    {
                        title: "Astronomy Document Search Using Keyword-Based Retrieval",
                        company: "Freelance Information Retrieval Project",
                        period: "2025",
                        description: "● Developed an Information Retrieval (IR) system for astronomy journal search using the Vector Space Model with TF-IDF weighting and Cosine Similarity for relevance ranking.\n● Designed a comprehensive Natural Language Processing (NLP) pipeline, including PDF text extraction, tokenization, stopword removal, and stemming (Porter Stemmer) to optimize search indexing.\n● Implemented an automatic extractive summarization feature that generates document summaries by weighting the most important sentences using TF-IDF scores.\n● Built a corpus dataset containing over 1,200 astrophysics research papers, automatically collected through web scraping using the arXiv API.\n● Evaluated system performance using Precision and Recall metrics to ensure the accuracy of information retrieval results."
                    },
                    {
                        title: "Core Team Member",
                        company: "KRAI - Kontes Robot Abu Indonesia 2025",
                        period: "2025",
                        description: "● National Competition Participation: Selected as a core team member of CREON (Creative Robotics Engineers of ITENAS) to represent Institut Teknologi Nasional in the prestigious ABU Robocon Indonesia (KRAI) 2025, organized by the Ministry of Higher Education, Science, and Technology."
                    }
                ],
                skills: [
                    { name: "Programming Languages: C, Java, Python, C#", level: 0 },
                    { name: "Web Technologies: HTML, CSS, JavaScript", level: 0 },
                    { name: "Development Tools: Arduino, Visual Studio Code, Thonny Python IDE", level: 0 },
                    { name: "Databases: MySQL", level: 0 },
                    { name: "Operating Systems: Windows, Linux", level: 0 },
                    { name: "Soft Skills: Teamwork, Problem-solving, Time management, patience", level: 0 }
                ],
                projects: [
                    {
                        name: "Tabletop-bot Companion Robot",
                        description: "A companion robot project affiliated with IFAC featuring Human-Robot Interaction (HRI), integrated IMU sensors and motor actuators using ESP32-S3 Audio Board, and ChatGPT for NLP.",
                        tech: ["ESP32-S3", "IMU sensors", "ChatGPT", "NLP"]
                    },
                    {
                        name: "S.A.R.A.H (Search And Rescue Adaptive Hexapod)",
                        description: "A six-legged robot based on Raspberry Pi, wirelessly controlled via teleoperation using a PS4 controller, utilizing Tripod Gait algorithm and complex kinematic logic.",
                        tech: ["Raspberry Pi", "Tripod Gait", "Kinematics"]
                    },
                    {
                        name: "AI-Based Adaptive Learning System (SPLTV)",
                        description: "An adaptive learning system integrating Random Forest to predict learning strategies, BFS algorithm for curriculum flow, and Rule-Based System for targeted error feedback.",
                        tech: ["Random Forest", "BFS Algorithm", "Rule-Based System"]
                    },
                    {
                        name: "Astronomy Document Search",
                        description: "An Information Retrieval (IR) system for astronomy journals using Vector Space Model, TF-IDF weighting, Cosine Similarity, and an automatic extractive summarization feature.",
                        tech: ["Vector Space Model", "TF-IDF", "Cosine Similarity", "NLP"]
                    }
                ],
                achievements: [],
                social: { github: "https://github.com/Viktorikus", linkedin: "https://www.linkedin.com/in/viktorikus-febrianto-b1b111297", web: "" },
            },
            {
                slug: "yuddha-sarah",
                name: "Yuddha Wastu Pramukha",
                photo: "/members/yuddha.JPG",
                role: "Software Developer",
                status: "ACTIVE",
                email: "wastupramukha@gmail.com",
                phone: "+6282117993766",
                location: "Bandung, Indonesia",
                bio: "Informatics undergraduate student with a strong interest and experience in software development and Internet of Things (IoT) systems. Accustomed to designing and developing web-based backend applications as well as building microcontroller-based systems integrated with sensors and actuators. Possesses a systematic approach to problem-solving, from requirements analysis and software architecture design to circuit design (wiring), implementation, and system testing. End-to-end solution oriented, bridging physical devices to digital systems.",
                shortDesc: "Informatics undergraduate student with a strong interest and experience in software development and Internet of Things (IoT) systems. Accustomed to designing and developing web-based backend applications as well as building microcontroller-based systems integrated with sensors and actuators.",
                tags: ["Backend Development", "IoT", "Embedded Systems", "REST API Development", "Hardware Integration"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2024 - Present", gpa: "-" },
                    { degree: "Vocational High School Degree (Software Engineering)", institution: "SMKN 4 Bandung", year: "2021 - 2024", gpa: "-" }
                ],
                experience: [],
                skills: [
                    { name: "Software Development: PHP / JavaScript / Python", level: 0 },
                    { name: "SQL & Database Design", level: 0 },
                    { name: "REST API Development", level: 0 },
                    { name: "Object-Oriented Programming", level: 0 },
                    { name: "Git Version Control", level: 0 },
                    { name: "IoT & Embedded Systems: ESP32 / Arduino", level: 0 },
                    { name: "Sensor Integration (DHT22, LDR, etc.)", level: 0 },
                    { name: "Digital & Analog Input Processing", level: 0 },
                    { name: "Basic Electronics & Wiring", level: 0 },
                    { name: "IoT Platform Integration (Blynk)", level: 0 }
                ],
                projects: [
                    {
                        name: "Queue Ticketing System (Four Vision Media - 2024)",
                        description: "Developed a cooperative website featuring an online queue taking and booking system.",
                        tech: []
                    }
                ],
                achievements: [],
                social: { github: "", linkedin: "", web: "" },
            },
            {
                slug: "alfarabi",
                name: "Alfarabi Putra Bisono",
                photo: "/members/alfarabi.JPG",
                role: "Hardware and Software Developer",
                status: "ACTIVE",
                email: "bisonoalfarabi@gmail.com",
                phone: "+6285392195834",
                location: "Bandung, Indonesia",
                bio: "Informatics student at ITENAS with a strong interest in the Internet of Things (IoT), programming, and databases. Highly curious about technology and actively building skills through projects and training. Ready to contribute to a team with sound technical and communication skills.",
                shortDesc: "Informatics student at ITENAS with a strong interest in the Internet of Things (IoT), programming, and databases. Highly curious about technology and actively building skills through projects and training. Ready to contribute to a team with sound technical and communication skills.",
                tags: ["IoT", "Database Development", "Multimedia Design", "Video Production"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional (ITENAS)", year: "2024 - Present", gpa: "-" },
                    { degree: "High School Diploma", institution: "SMA Negeri 19 Bandung", year: "2021 - 2024", gpa: "-" },
                ],
                experience: [
                    {
                        title: "Head of Multimedia Division",
                        company: "OSIS SMAN 19 Bandung",
                        period: "2022 - 2023",
                        description: "● Created visual content for school events.\n● Served as chief organizer for a technology-themed webinar.\n● Documented all student council (OSIS) activities during the term."
                    },
                    {
                        title: "Vice Head of Multimedia Division",
                        company: "IKREMA SMAN 19 Bandung",
                        period: "2022 - 2023",
                        description: "● Documented all religious and social activities for IKREMA.\n● Created visual content for preaching (dakwah) purposes and school events."
                    }
                ],
                skills: [
                    { name: "Graphic Design: Adobe Photoshop, Adobe Illustrator", level: 0 },
                    { name: "Video Editing: Adobe Premiere, Adobe After Effects", level: 0 },
                    { name: "Other: Time Management, Team Collaboration", level: 0 }
                ],
                projects: [
                    {
                        name: "SMA Negeri 19 Class of 2024 Documentary Film",
                        description: "● Designed the batch documentary film.\n● Served on the documentary production team.\n● Accommodated all needs during the production period.",
                        tech: []
                    }
                ],
                achievements: [
                    "3rd Place Short Film Competition FLS2N at Bandung City Level (2023)",
                    "Participant in Short Film Competition FLS2N at Bandung City Level (2022)"
                ],
                social: { github: "", linkedin: "", web: "" },
            },
        ],
    },
    {
        slug: "donimal",
        name: "Donimal",
        fullName: "Interactive Educational Toy",
        logo: "/logos/donimal.png",
        category: "Educational IoT",
        description: "DONIMAL is an interactive IoT-based educational doll that uses RFID and audio to support children’s development in a fun way. It is designed to create an engaging learning experience by allowing children to interact with physical cards or objects that trigger specific sounds, stories, or educational content. By combining technology with play, DONIMAL encourages cognitive growth, language development, and curiosity while maintaining a safe and child-friendly environment.",
        longDescription: "DONIMAL is an interactive IoT-based educational doll that uses RFID and audio to support children’s development in a fun way. It is designed to create an engaging learning experience by allowing children to interact with physical cards or objects that trigger specific sounds, stories, or educational content.",
        members: [
            {
                slug: "ikrima",
                name: "Ikrima Nurul Hikmah",
                photo: "/members/ikrima.jpg",
                role: "Team Leader & Software Developer",
                status: "ACTIVE",
                email: "ikrimanurul2@gmail.com",
                phone: "+6283821056697",
                location: "Bandung, Indonesia",
                bio: "Informatics undergraduate student with a strong interest in software development and artificial intelligence. Experienced in building mobile applications using Flutter, developing computer vision models based on CNN and YOLOv8, and designing microcontroller-based IoT systems. Understands computer network fundamentals and is accustomed to working on projects end-to-end, from design to implementation. Highly motivated to grow in the fields of Software Engineering and Artificial Intelligence.",
                shortDesc: "Informatics student focused on mobile, IoT, and AI-based educational systems.",
                tags: ["Mobile Development", "IoT", "Computer Vision", "AI", "Software Engineering"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "-" },
                    { degree: "High School Diploma (Science)", institution: "SMA Negeri 23 Bandung", year: "2021 - 2023", gpa: "-" }
                ],
                experience: [
                    {
                        title: "Mobile Developer",
                        company: "Donimal – Interactive Learning Application",
                        period: "2025 - Present",
                        description: "● Developed mobile applications and educational websites for early childhood using Flutter.\n● Designed a child-friendly and interactive interface.\n● Implemented learning modules for colors, shapes, and numbers."
                    },
                    {
                        title: "Freelance Marketing Influencer",
                        company: "Freelance",
                        period: "2025 - Present",
                        description: "● Communicated and negotiated with influencers for digital campaigns.\n● Analyzed content performance and compiled evaluation reports."
                    }
                ],
                skills: [
                    { name: "Mobile Development: Flutter", level: 0 },
                    { name: "Networking: Routing and Switching Fundamentals", level: 0 },
                    { name: "Programming: Python, Java, PHP", level: 0 },
                    { name: "IoT: Arduino, Raspberry Pi, Sensor Integration", level: 0 },
                    { name: "AI: CNN, YOLOv8, Image Processing, Object Detection", level: 0 },
                    { name: "Web Development: HTML, Laravel, Spring Boot", level: 0 },
                    { name: "Tools: VS Code, Arduino IDE, Laragon, HeidiSQL, MS Office", level: 0 }
                ],
                projects: [
                    {
                        name: "Brain Tumor Detection Using CNN (2025)",
                        description: "● Performed pre-processing of MRI images.\n● Built and trained a Convolutional Neural Network model.\n● Evaluated model performance using accuracy metrics.",
                        tech: []
                    },
                    {
                        name: "Organic and Inorganic Waste Classification Using YOLOv8 (2024)",
                        description: "● Trained YOLOv8 model with custom datasets.\n● Implemented a bounding box-based object detection system.\n● Tested system performance for real-time classification.",
                        tech: []
                    },
                    {
                        name: "IoT-Based Water Level Monitoring System (2024)",
                        description: "● Integrated sensors with microcontrollers.\n● Provided real-time data monitoring.",
                        tech: []
                    },
                    {
                        name: "Arduino-Based Robotic Arm",
                        description: "● Developed a servo motor control system.\n● Integrated hardware and software components.",
                        tech: []
                    }
                ],
                achievements: [
                    "Huawei ICT Competition 2025-2026",
                    "Scientific Paper Writing Competition PIKIR 2025 Makassar"
                ],
                social: { github: "", linkedin: "", web: "" },
            },
            {
                slug: "sondang",
                name: "Sondang Anjelina",
                photo: "/members/sondang.jpg",
                role: "Hardware Engineer",
                status: "ACTIVE",
                email: "sondanganjelina3@gmail.com",
                phone: "+6283821616329",
                location: "Bandung, Indonesia",
                bio: "Informatics student with strong enthusiasm for learning and trying new things. Actively participates in academic activities, with a keen interest in programming, Internet of Things (IoT), and project development. Experienced in teamwork for innovative projects. Open to various opportunities, including part-time positions, to continue learning and contributing.",
                shortDesc: "Informatics student enthusiastic about IoT, programming, and innovative project development.",
                tags: ["IoT", "Arduino", "Programming", "Embedded Systems"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional (ITENAS) Bandung", year: "2023 - Present", gpa: "-" }
                ],
                experience: [
                    {
                        title: "Hardware Engineer",
                        company: "DONIMAL Project",
                        period: "2024 - Present",
                        description: "● Developed an interactive educational doll based on Arduino Uno to help children learn alphabets, numbers, colors, and animal sounds.\n● Implemented an RFID card system as an interaction medium.\n● Integrated a mobile application to control LED strips, music, and children's story features."
                    },
                    {
                        title: "Scientific Paper Author",
                        company: "PIKIR 2025 National Competition",
                        period: "2025",
                        description: "● Designed and developed the concept of an interactive educational doll based on Raspberry Pi.\n● Authored a scientific paper that won 1st Honorable Mention (Juara Harapan 1) at the national level."
                    }
                ],
                skills: [
                    { name: "Programming Languages: C, Python, HTML, PHP (basic)", level: 0 },
                    { name: "Tools: Arduino IDE, VSCode, HeidiSQL, XAMPP, Proteus, Delphi-7", level: 0 },
                    { name: "Additional Skills: Microsoft Office (Word, Excel, PowerPoint)", level: 0 }
                ],
                projects: [
                    {
                        name: "DONIMAL Project",
                        description: "Developed an interactive educational doll based on Arduino Uno to help children learn alphabets, numbers, colors, and animal sounds. The system uses an RFID card as an interaction medium, equipped with a mobile application to control LED strips, as well as music and children's story features that can be played via random buttons.",
                        tech: ["Arduino Uno", "Python", "RFID", "Mobile App", "LED Strip"]
                    },
                    {
                        name: "Scientific Paper: Raspberry-Based Animal Educational Doll",
                        description: "Designed and developed the concept of an interactive educational doll.",
                        tech: []
                    }
                ],
                achievements: [
                    "1st Honorable Mention (Juara Harapan 1) in National Student Scientific Paper Writing Competition PIKIR 2025"
                ],
                social: { github: "", linkedin: "", web: "" },
            },
        ],
    },
    {
        slug: "skysense",
        name: "SkySense",
        fullName: "Intelligent Weather Monitoring",
        logo: "/logos/skysense.png",
        category: "IoT",
        description: "Empowering smarter environmental monitoring with real-time weather intelligence. From today’s data collection to tomorrow’s AI-powered predictions and disaster prevention systems, Skysense aims to make the environment more understandable and safer for everyone.",
        longDescription: "Empowering smarter environmental monitoring with real-time weather intelligence. From today’s data collection to tomorrow’s AI-powered predictions and disaster prevention systems, Skysense aims to make the environment more understandable and safer for everyone.",
        members: [
            {
                slug: "rida",
                name: "Rida Rahmaniah El Sya’bani",
                photo: "/members/rida.png",
                role: "Team Leader & Hardware Developer",
                status: "ACTIVE",
                email: "rida.rahmaniah@mhs.itenas.ac.id",
                phone: "+6289636510501",
                location: "Bandung, Indonesia",
                bio: "Informatics student with a keen interest in digital image processing and programming. Experienced in image processing using basic techniques such as grayscale, histogram, filtering, edge detection, and image transformation. Disciplined, meticulous, communicative, and ready to support the smooth running of practical sessions as a Laboratory Assistant.",
                shortDesc: "Informatics student with a keen interest in digital image processing and programming. Experienced in image processing using basic techniques such as grayscale, histogram, filtering, edge detection, and image transformation.",
                tags: ["Image Processing", "Programming", "Python", "JavaScript"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "-" },
                    { degree: "High School Diploma (Science)", institution: "SMA Negeri 1 Soreang", year: "2020-2023", gpa: "-" }
                ],
                experience: [
                    {
                        title: "River Cleaner",
                        company: "Advanced Algorithm Course Project",
                        period: "Semester 2",
                        description: "● Developed a river trash cleaning device as a major assignment."
                    },
                    {
                        title: "Home Security Alarm",
                        company: "Introduction to IoT Course Project",
                        period: "Semester 2",
                        description: "● Developed an IoT-based home security alarm system."
                    }
                ],
                skills: [
                    { name: "Programming Languages: Python, C, HTML, PHP, Java (basic)", level: 0 },
                    { name: "Tools: Visual Studio Code, Delphi 7, HeidiSQL, Raspberry Pi", level: 0 },
                    { name: "Other: Microsoft Office (Word, Excel, PowerPoint)", level: 0 },
                    { name: "Indonesian (Active)", level: 0 },
                    { name: "English (Passive/Intermediate)", level: 0 }
                ],
                projects: [
                    { name: "Home Security Alarm / Thief Detector (Semester 2)", description: "An Introduction to IoT project functioning as a home security alarm system.", tech: [] },
                    { name: "River Cleaner (Semester 2)", description: "River trash cleaning device, developed as a major assignment for the Advanced Algorithm course.", tech: [] },
                    { name: "Car Rental Application (Semester 3)", description: "", tech: [] },
                    { name: "Educational Website (Semester 3)", description: "", tech: [] },
                    { name: "Cookingkos Website (Semester 4)", description: "", tech: [] },
                    { name: "Polyclinic Security System (Semester 4)", description: "", tech: [] },
                    { name: "Drum Rust Classification (Semester 4)", description: "", tech: [] },
                    { name: "SkySense", description: "", tech: [] }
                ],
                achievements: [],
                social: { github: "", linkedin: "", web: "" }
            },
            {
                slug: "angeline",
                name: "Angelina Geronsiana Yudrikewati",
                photo: "/members/angel.jpg",
                role: "Software Developer",
                status: "ACTIVE",
                email: "angelina.geronsiana@mhs.itenas.ac.id",
                phone: "+6282237154719",
                location: "Bandung, Indonesia",
                bio: "An active Informatics student at ITENAS. Currently pursuing studies in Informatics with a strong interest in technology, particularly in the development of Internet of Things (IoT) devices.",
                shortDesc: "An active Informatics student at ITENAS. Currently pursuing studies in Informatics with a strong interest in technology, particularly in the development of Internet of Things (IoT) devices.",
                tags: ["IoT", "Database Development", "Computer Vision", "Multimedia"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung (ITENAS)", year: "2023 - Present", gpa: "-" }
                ],
                experience: [],
                skills: [
                    { name: "Programming Languages: Python, C, PHP, Java (basic)", level: 0 },
                    { name: "Tools: Arduino IDE, VSCode, HeidiSQL, XAMPP, Proteus, Delphi-7", level: 0 },
                    { name: "Additional Skills: Microsoft Office (Word, Excel, PowerPoint)", level: 0 }
                ],
                projects: [
                    {
                        name: "Automatic Clothesline System Integrated with Blynk App",
                        description: "A clothesline that utilizes Internet of Things (IoT) technology, weather sensors, and automatic control systems to automatically adjust its position based on detected weather conditions. When rain is detected, the system provides a notification to the user and automatically retracts the clothesline. Conversely, when the weather clears up, the user is notified that it is safe to hang clothes again.",
                        tech: []
                    },
                    {
                        name: "Book Borrowing Application Using Delphi7",
                        description: "A desktop application designed to help manage library administration, including book data processing, user management, as well as borrowing and returning transactions. The system aims to improve efficiency, note-taking accuracy, and reduce errors that frequently occur in manual processes.",
                        tech: []
                    },
                    {
                        name: "Visual Extraction Implementation for Plastic, Paper, and Organic Waste Classification",
                        description: "This visual extraction implementation aims to identify and classify plastic, paper, and organic waste based on visual image characteristics. The methods used include the extraction of color, shape, and texture features, which are then processed in the classification stage to automatically determine the type of waste.\nLink: https://youtu.be/23JD6Roh86I?si=fLqXnobCvTR1EC2O",
                        tech: []
                    },
                    {
                        name: "SkySense: IoT-Based Local Weather Monitoring and Prediction System",
                        description: "This IoT-based local weather monitoring and prediction system aims to provide real-time weather information as well as short-term weather predictions that can be used as a basis for agricultural decision-making. The system utilizes environmental sensors and an IoT platform to collect, process, and display weather data in an integrated manner.",
                        tech: []
                    },
                    {
                        name: "Real-Time Violence Detection in Surveillance Video Using MobileNetV2 and TSM",
                        description: "This research developed a real-time violence detection system for surveillance videos using MobileNetV2 and Temporal Shift Module (TSM). The system classifies fighting activities based on spatial and temporal features, implemented in a CPU-based real-time environment, and sends automatic notifications via Telegram bot when violence is detected to support security responses.",
                        tech: []
                    },
                    {
                        name: "Interactive Solar System Learning",
                        description: "Interactive Solar System Exploration is an educational multimedia application designed to help the natural science learning process, specifically Solar System materials. This application presents visualizations of planets, orbits, rotation, and revolution in the form of interactive animations equipped with sound and user navigation. Through this learning media, students can understand Solar System concepts in a way that is more engaging, dynamic, and easier to comprehend compared to conventional learning methods.",
                        tech: []
                    }
                ],
                achievements: [],
                social: { github: "", linkedin: "", web: "" }
            },
            {
                slug: "shafira-aprillia",
                name: "Shafira Aprillia",
                photo: "/members/shafira_aprilia.jpg",
                role: "Software Developer",
                status: "ACTIVE",
                email: "shafiraaprillia572@gmail.com",
                phone: "-",
                location: "Bandung, Indonesia",
                bio: "An active Informatics student with a strong interest in software development and innovative technology. During my studies, I have worked on various projects, ranging from web-based applications and IoT-based automatic garden lights to automated parking barrier systems using algorithmic structures. Accustomed to using programming languages such as Python, Java, HTML, and C++. I enjoy learning new things, am capable of working in a team as well as independently, and have a high enthusiasm for continuous growth in the IT world.",
                shortDesc: "An active Informatics student with a strong interest in software development and innovative technology. During my studies, I have worked on various projects, ranging from web-based applications and IoT-based automatic garden lights to automated parking barrier systems using algorithmic structures.",
                tags: ["Software Development", "Web Development", "IoT Development", "UI/UX Design"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "-", gpa: "-" }
                ],
                experience: [
                    {
                        title: "Administration / Customer Service Intern",
                        company: "Mandalawangi Village Office",
                        period: "-",
                        description: "● Managed incoming and outgoing mail and input SDGs data."
                    },
                    {
                        title: "Staff of Media and Publication Division",
                        company: "Informatics Student Association",
                        period: "-",
                        description: "● Created Instagram feed designs for the Informatics Student Association."
                    },
                    {
                        title: "Department Manager of Human Resource Development Division",
                        company: "Informatics Student Association",
                        period: "-",
                        description: "● Managed attendance and activity inputs, and acted as a liaison for related departments."
                    }
                ],
                skills: [
                    { name: "Programming: Python, Java, C++, PHP", level: 0 },
                    { name: "Software & Tools: Visual Studio Code, Figma, Github, Canva", level: 0 },
                    { name: "Personality: Leadership, Teamwork, Problem Solving, Social Skills", level: 0 },
                    { name: "Hobbies: Design, Photography, Reading, Writing", level: 0 }
                ],
                projects: [
                    {
                        name: "Administration / Customer Service Intern",
                        description: "Managed incoming and outgoing mail and input SDGs data at Mandalawangi Village Office.",
                        tech: []
                    },
                    {
                        name: "Media and Publication Design",
                        description: "Created Instagram feed designs for the Informatics Student Association.",
                        tech: ["Design", "Instagram"]
                    },
                    {
                        name: "Human Resource Data Management",
                        description: "Managed attendance and activity inputs, and acted as a liaison for related departments at the Informatics Student Association.",
                        tech: ["Management"]
                    }
                ],
                achievements: [],
                social: { github: "", linkedin: "", web: "", instagram: "https://instagram.com/shfiraprillia" }
            },
        ],
    },
    {
        slug: "carrymate",
        name: "CarryMate",
        fullName: "Following Robot Assistant",
        logo: "/logos/carrymate.png",
        category: "IoT & AI",
        description: "A trolley robot that follows its owner using camera detection integrated with Raspberry Pi. Perfect for supermarkets or suitcases, carrying items without manual pushing or lifting.",
        longDescription: "CarryMate is a trolley robot that follows its owner using camera detection integrated with Raspberry Pi. It's designed to be perfect for use in supermarkets or as an automated suitcase, carrying items without the need for manual pushing or lifting.",
        members: [
            {
                slug: "rifqi",
                name: "M. Rifqi Yusufi",
                photo: "/members/yusuf.jpg",
                role: "Team Leader & Lead CV Engineer",
                status: "ACTIVE",
                email: "rifqi@mhs.itenas.ac.id",
                phone: "+62 812 7777 0001",
                location: "Bandung, Indonesia",
                bio: "Sixth-semester Informatics student with deep interest in artificial intelligence, computer vision, and robotics. Experienced in building real-time tracking systems, deep learning pipelines, and perception systems integrated with hardware using Python, C++, TensorFlow, and OpenCV.",
                shortDesc: "AI and computer-vision focused student leading CarryMate development.",
                tags: ["Computer Vision", "Deep Learning", "Robotics", "Python"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional, Bandung", year: "2023 - Present", gpa: "3.90/4.00" }],
                experience: [
                    { title: "Team Leader & Lead CV Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin deteksi penglihatan komputer (DeepSORT/YOLOv8) untuk sistem troli otomatis CarryMate." },
                    {
                        title: "Lead Developer – CarryMate",
                        company: "I-WILL Laboratory",
                        period: "Sep 2025 – Jan 2026",
                        description: "Merancang arsitektur navigasi AI CarryMate dan mengoordinasikan pengembangan modul persepsi, kontrol motor, dan AI."
                    },
                    {
                        title: "Machine Learning Developer – Sistem Pendeteksi Kematangan Pisang",
                        company: "Academic Project",
                        period: "Dec 2024 – Jan 2025",
                        description: "Mengembangkan sistem deteksi tingkat kematangan pisang berbasis fitur warna RGB/HSV dan KNN dengan akurasi tinggi."
                    },
                    {
                        title: "Machine Learning Engineer – Sistem Pendeteksi Bahasa Isyarat",
                        company: "Academic Project",
                        period: "Jul 2025 – Aug 2025",
                        description: "Membangun model LSTM untuk klasifikasi 59 variasi bahasa isyarat secara real-time dengan pipeline berbasis MediaPipe."
                    },
                    {
                        title: "Asisten Praktikum Pemrograman Basis Data",
                        company: "ITENAS",
                        period: "Oct 2025 – Jan 2026",
                        description: "Mendampingi praktikum pemrograman basis data dan membantu mahasiswa memahami konsep database."
                    }
                ],
                skills: [
                    { name: "Python", level: 90 },
                    { name: "TensorFlow / Keras", level: 88 },
                    { name: "OpenCV / MediaPipe", level: 85 },
                    { name: "C++ / JavaScript", level: 80 },
                    { name: "ESP32 / Raspberry Pi", level: 82 },
                ],
                projects: [
                    { name: "CarryMate – Sistem Troli Pintar", description: "Sistem human-following real-time menggunakan YOLOv8n, DeepSORT, dan estimasi jarak/sudut geometris.", tech: ["Python", "YOLOv8", "DeepSORT", "OpenCV"] },
                    { name: "Sistem Pendeteksi Kematangan Pisang", description: "Deteksi tingkat kematangan pisang dengan KNN dan fitur warna RGB/HSV.", tech: ["Python", "KNN", "Image Processing"] },
                    { name: "Sistem Pendeteksi Bahasa Isyarat", description: "Klasifikasi bahasa isyarat real-time berbasis LSTM dan keypoint MediaPipe.", tech: ["Python", "LSTM", "MediaPipe"] },
                ],
                achievements: ["CarryMate Team Leader"],
                social: { github: "https://github.com/rifqi", linkedin: "https://linkedin.com/in/rifqi" },
            },
            {
                slug: "luthfiandi",
                name: "Luthfiandi Rizki Kurnia",
                photo: "/members/luthfi.png",
                role: "Computer Vision Engineer",
                status: "ACTIVE",
                email: "luthfiandi@mhs.itenas.ac.id",
                phone: "+62 812 7777 0002",
                location: "Bandung, Indonesia",
                bio: "Developing computer vision systems for person detection and tracking.",
                shortDesc: "Building person detection and tracking systems.",
                tags: ["Computer Vision", "Tracking", "Python"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.76/4.00" }],
                experience: [
                    { title: "Computer Vision Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Menjalankan pemrosesan citra pelacakan objek geometris spasial untuk CarryMate." }, { title: "CarryMate Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Computer vision development." }],
                skills: [{ name: "Python", level: 85 }, { name: "Object Detection", level: 82 }, { name: "OpenCV", level: 85 }, { name: "Tracking", level: 80 }],
                projects: [{ name: "Person Tracking", description: "Person detection and tracking system", tech: ["Python", "YOLO", "DeepSORT"] }],
                achievements: ["CarryMate Team Member"],
                social: { github: "https://github.com/luthfiandi", linkedin: "https://linkedin.com/in/luthfiandi" },
            },
            {
                slug: "rizky",
                name: "Muhammad Rizky",
                photo: "/members/rizky.jpg",
                role: "Software & Web Developer",
                status: "ACTIVE",
                email: "rizky@mhs.itenas.ac.id",
                phone: "+62 812 7777 0003",
                location: "Bandung, Indonesia",
                bio: "Informatics student with strong passion for coding, innovation, and software engineering. Experienced in app development, IoT systems, and web-based solutions using PHP/Laravel and JavaScript stacks.",
                shortDesc: "Software engineer in training focusing on web apps and IoT systems.",
                tags: ["Web Development", "Laravel", "IoT", "Backend"],
                education: [
                    { degree: "Bachelor of Computer Science (Software Engineering)", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "3.76/4.00" },
                    { degree: "High School", institution: "SMK Bakti Nusantara 666", year: "2020 - 2023", gpa: "" },
                ],
                experience: [
                    { title: "Software & Web Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan aplikasi website antarmuka pengguna berbasis PHP/Laravel untuk CarryMate." },
                    {
                        title: "Software Developer – CarryMate",
                        company: "I-WILL Laboratory",
                        period: "Sep 2025 – Present",
                        description: "Mengembangkan komponen software untuk sistem troli pintar dan integrasi sistem."
                    },
                    {
                        title: "Full Stack Developer – Aplikasi Pengaduan Masyarakat",
                        company: "SMK Bakti Nusantara 666",
                        period: "Jan 2023 – Feb 2023",
                        description: "Membangun aplikasi pengaduan masyarakat berbasis Laravel dengan autentikasi dan dashboard pelaporan."
                    },
                    {
                        title: "Full Stack Developer – Computer Assisted Test (CAT)",
                        company: "PRIMKOPPOL SATBRIMOB POLDA JABAR",
                        period: "Aug 2023 – Dec 2023",
                        description: "Mengembangkan sistem ujian berbasis web dengan bank soal, timer, scoring otomatis, dan manajemen pengguna."
                    }
                ],
                skills: [
                    { name: "PHP / Laravel / CodeIgniter", level: 85 },
                    { name: "HTML / CSS / JavaScript / Bootstrap", level: 85 },
                    { name: "MySQL", level: 82 },
                    { name: "Python / C++ / Pascal", level: 75 },
                ],
                projects: [
                    { name: "CarryMate – Smart Trolley System", description: "Kontributor software pada sistem troli pintar berbasis visi komputer.", tech: ["Python", "Web", "IoT"] },
                    { name: "Aplikasi Pengaduan Masyarakat", description: "Sistem pelaporan publik dengan manajemen pengaduan dan autentikasi.", tech: ["Laravel", "MySQL", "Bootstrap"] },
                    { name: "Computer Assisted Test Web Application", description: "Aplikasi ujian berbantuan komputer dengan manajemen soal dan peserta.", tech: ["Laravel", "MySQL"] },
                ],
                achievements: ["CarryMate Team Member"],
                social: { github: "https://github.com/rizky", linkedin: "https://linkedin.com/in/rizky" },
            },
            {
                slug: "nizar",
                name: "Nizar Abdul Malik",
                photo: "/members/nizar.jpg",
                role: "Mobile App & Control Developer",
                status: "ACTIVE",
                email: "nizar@mhs.itenas.ac.id",
                phone: "+62 812 7777 0004",
                location: "Bandung, Indonesia",
                bio: "Developing control software and mobile app for CarryMate.",
                shortDesc: "Building control software and mobile application.",
                tags: ["Python", "Mobile App", "IoT"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.74/4.00" }],
                experience: [
                    { title: "Mobile App & Control Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun aplikasi kendali mobile jarak dekat via Bluetooth/WiFi untuk operasional CarryMate." }, { title: "CarryMate Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Software and app development." }],
                skills: [{ name: "Python", level: 85 }, { name: "Flutter", level: 80 }, { name: "Bluetooth/WiFi", level: 78 }, { name: "REST APIs", level: 75 }],
                projects: [{ name: "CarryMate App", description: "Mobile app for robot control", tech: ["Flutter", "Bluetooth", "Firebase"] }],
                achievements: ["CarryMate Team Member"],
                social: { github: "https://github.com/nizar", linkedin: "https://linkedin.com/in/nizar" },
            },
        ],
    },
    {
        slug: "vending-machine",
        name: "Vending Machine",
        fullName: "Smart Retail System",
        logo: "/logos/vending-machine.png",
        category: "IoT & AI",
        description: "Student entrepreneurship training system with automation, QRIS/Virtual Account payments, and integrated web dashboard. Features stock monitoring and product sales analytics for MSMEs.",
        longDescription: "The Vending Machine project is a student entrepreneurship training system featuring automation, QRIS/Virtual Account payments, and an integrated web dashboard. It includes stock monitoring and product sales analytics designed specifically for MSMEs.",
        members: [
            {
                slug: "erlangga",
                name: "Erlangga Dwi",
                photo: "/members/erlangga.png",
                role: "Team Leader & IoT Business Integrator",
                status: "ACTIVE",
                email: "erlangga@mhs.itenas.ac.id",
                phone: "+62 812 8888 0001",
                location: "Bandung, Indonesia",
                bio: "Leading the Vending Machine team in creating smart retail solutions for MSMEs.",
                shortDesc: "Leading smart vending machine development.",
                tags: ["IoT", "Business", "Automation"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.78/4.00" }],
                experience: [
                    { title: "Team Leader & IoT Business Integrator", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin perancangan purwarupa otomasi mesin penjual otomatis cerdas dengan integrasi kapabilitas bisnis." }, { title: "Vending Machine Team Leader", company: "I-WILL Laboratory", period: "2024 - Present", description: "Leading smart vending machine development." }],
                skills: [{ name: "Project Management", level: 85 }, { name: "Python", level: 82 }, { name: "IoT", level: 80 }, { name: "Business", level: 78 }],
                projects: [{ name: "Smart Vending v1.0", description: "Vending machine with payment integration", tech: ["Arduino", "Servo", "LCD"] }],
                achievements: ["Vending Machine Team Leader", "Student Entrepreneurship Award"],
                social: { github: "https://github.com/erlangga", linkedin: "https://linkedin.com/in/erlangga" },
            },
            {
                slug: "zulfan",
                name: "Muhammad Zulfan",
                photo: "/members/zulfan.png",
                role: "Payment Systems Engineer",
                status: "ACTIVE",
                email: "zulfan@mhs.itenas.ac.id",
                phone: "+62 812 8888 0002",
                location: "Bandung, Indonesia",
                bio: "Working on payment integration for the vending machine.",
                shortDesc: "Integrating payment systems for vending machine.",
                tags: ["Payment", "API", "FinTech"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.72/4.00" }],
                experience: [
                    { title: "Payment Systems Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengimplementasikan gateway pembayaran QRIS, Virtual Account, dan Node.js API pada Vending Machine." },
                    { title: "Vending Machine Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Payment integration development." },
                    { title: "Software Development Intern", company: "PT Dwi Purwa Teknologi", period: "Jul 2025 - Sep 2025", description: "R&D of digital solutions, feature implementation, and performance testing." },
                    { title: "Database & OOP Lab Assistant", company: "ITENAS", period: "Mar 2024 - Jan 2025", description: "Instructor for database concepts, Delphi-7, and Java OOP principles." }
                ],
                skills: [{ name: "Payment APIs", level: 85 }, { name: "Node.js", level: 82 }, { name: "QRIS", level: 80 }, { name: "Security", level: 78 }],
                projects: [{ name: "QRIS Payment", description: "QRIS payment integration", tech: ["Node.js", "QRIS API", "QR Code"] }],
                achievements: ["Vending Machine Team Member"],
                social: { github: "https://github.com/zulfan", linkedin: "https://linkedin.com/in/zulfan" },
            },
            {
                slug: "dedrick",
                name: "Mohamad Dedrick Finnegan",
                photo: "/members/dedrick.png",
                role: "Hardware & Dispensing Engineer",
                status: "ACTIVE",
                email: "dedrick@mhs.itenas.ac.id",
                phone: "+62 812 8888 0003",
                location: "Bandung, Indonesia",
                bio: "Building the hardware and dispensing mechanisms for the vending machine.",
                shortDesc: "Designing hardware and dispensing systems.",
                tags: ["Hardware", "Mechanics", "Arduino"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.70/4.00" }],
                experience: [
                    { title: "Hardware & Dispensing Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Menangani mekanika dispenser, motor servo/stepper, dan perancangan sirkuit Arduino pada Vending Machine." }, { title: "Vending Machine Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Hardware and mechanical development." }],
                skills: [{ name: "Arduino", level: 88 }, { name: "Servo/Motor", level: 85 }, { name: "Sensors", level: 82 }, { name: "Mechanical", level: 80 }],
                projects: [{ name: "Dispensing System", description: "Product dispensing mechanism", tech: ["Servo", "DC Motor", "Arduino"] }],
                achievements: ["Vending Machine Team Member"],
                social: { github: "https://github.com/dedrick", linkedin: "https://linkedin.com/in/dedrick" },
            },
            {
                slug: "faiz",
                name: "Faiz Fazdlih Dwi",
                photo: "/members/faiz.png",
                role: "Web Dashboard Developer",
                status: "ACTIVE",
                email: "faiz@mhs.itenas.ac.id",
                phone: "+62 812 8888 0004",
                location: "Bandung, Indonesia",
                bio: "Developing the web dashboard for vending machine monitoring and analytics.",
                shortDesc: "Building web dashboard and analytics.",
                tags: ["React", "Node.js", "Dashboard"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.76/4.00" }],
                experience: [
                    { title: "Web Dashboard Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun dasbor antarmuka analitik web menggunakan React dan integrasi basis data pada Vending Machine." }, { title: "Vending Machine Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Dashboard and analytics development." }],
                skills: [{ name: "React", level: 85 }, { name: "Node.js", level: 82 }, { name: "MongoDB", level: 80 }, { name: "Tailwind", level: 85 }],
                projects: [{ name: "Admin Dashboard", description: "Vending machine management dashboard", tech: ["React", "Node.js", "MongoDB"] }],
                achievements: ["Vending Machine Team Member"],
                social: { github: "https://github.com/faiz", linkedin: "https://linkedin.com/in/faiz" },
            },
            {
                slug: "riza",
                name: "Riza Maulana",
                photo: "/members/riza.png",
                role: "IoT Cloud & MQTT Integrator",
                status: "ACTIVE",
                email: "riza@mhs.itenas.ac.id",
                phone: "+62 812 8888 0005",
                location: "Bandung, Indonesia",
                bio: "Working on IoT connectivity and cloud integration for the vending machine.",
                shortDesc: "Connecting hardware to cloud systems.",
                tags: ["IoT", "MQTT", "Cloud"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.72/4.00" }],
                experience: [
                    { title: "IoT Cloud & MQTT Integrator", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun gateway telemetri dan integrasi protokol MQTT antara perangkat keras dan cloud layanan Vending Machine." }, { title: "Vending Machine Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "IoT and cloud integration." }],
                skills: [{ name: "MQTT", level: 85 }, { name: "ESP32", level: 82 }, { name: "AWS IoT", level: 78 }, { name: "Python", level: 80 }],
                projects: [{ name: "IoT Gateway", description: "Cloud connectivity for vending machine", tech: ["ESP32", "MQTT", "WiFi"] }],
                achievements: ["Vending Machine Team Member"],
                social: { github: "https://github.com/riza", linkedin: "https://linkedin.com/in/riza" },
            },
        ],
    },
];

// Helper functions
export function getTeamBySlug(slug: string): Team | undefined {
    return teams.find(team => team.slug === slug);
}

export function getMemberBySlug(teamSlug: string, memberSlug: string): MemberCV | undefined {
    const team = getTeamBySlug(teamSlug);
    return team?.members.find(member => member.slug === memberSlug);
}

export function getAllTeamSlugs(): string[] {
    return teams.map(team => team.slug);
}

export function getTeamsWithMembers(): Team[] {
    return teams.filter(team => team.members.length > 0);
}
