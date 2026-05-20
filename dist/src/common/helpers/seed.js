"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = void 0;
const helpers_1 = require("../../common/helpers");
const config_1 = require("../../common/helpers/config");
const models_1 = require("../../models");
const skills = [
    ["TypeScript", "Languages"],
    ["JavaScript", "Languages"],
    ["Python", "Languages"],
    ["Go", "Languages"],
    ["React", "Frontend"],
    ["Vite", "Frontend"],
    ["Mantine", "Frontend"],
    ["Redux Toolkit", "Frontend"],
    ["Apollo Client", "Frontend"],
    ["Node.js", "Backend"],
    ["Express.js", "Backend"],
    ["Apollo GraphQL Server", "Backend"],
    ["REST APIs", "Backend"],
    ["MongoDB", "Databases"],
    ["Mongoose", "Databases"],
    ["MySQL", "Databases"],
    ["Firebase Firestore", "Databases"],
    ["Git", "Tools"],
    ["Firebase", "Tools"],
    ["Supabase", "Tools"],
    ["JWT Auth", "Security"],
    ["OAuth 2.0", "Security"],
];
const projects = [
    {
        title: "LivelyCura Pharmacy Platform",
        slug: "livelycura-pharmacy-platform",
        company: "LivelyCura",
        client: "LivelyCura",
        summary: "A healthcare operations platform with pharmacy, laboratory, courier, customer, and admin workflows.",
        problem: "Healthcare teams need operational tools that reduce manual work and keep pharmacy/lab workflows responsive.",
        role: "Software Engineer building responsive web portals and collaborating across backend and design.",
        stack: [
            "TypeScript",
            "React",
            "Mantine",
            "Apollo Client",
            "GraphQL",
            "MongoDB",
        ],
        features: [
            "Pharmacy dashboard workflows",
            "Lab dashboard workflows",
            "Responsive operational interfaces",
            "GraphQL-backed data operations",
        ],
        outcomes: [
            "Improved healthcare workflow visibility",
            "Built scalable UI patterns for repeated operational tasks",
        ],
        visibility: "PRIVATE_SUMMARY",
        status: "CLIENT_WORK",
        featured: true,
        order: 1,
        caseStudySections: [
            {
                title: "Role",
                body: "Worked on dashboard experiences that help healthcare operators handle daily pharmacy and lab tasks.",
                order: 1,
            },
            {
                title: "Careful Disclosure",
                body: "Public details are intentionally limited to role, stack, and business-safe outcomes.",
                order: 2,
            },
        ],
    },
    {
        title: "Bora Capital",
        slug: "bora-capital",
        company: "Kusantec",
        client: "Bora Capital",
        summary: "A finance platform backend and mobile experience for investment, accounts, goals, transactions, and user onboarding.",
        problem: "The product needs reliable financial workflows, secure user onboarding, and integrations with external services.",
        role: "Backend and product engineer working across API architecture and app support.",
        stack: [
            "TypeScript",
            "Express.js",
            "Apollo GraphQL Server",
            "MongoDB",
            "React Native",
        ],
        features: [
            "Auth and onboarding flows",
            "Portfolio and goal models",
            "Transaction services",
            "Notification integrations",
        ],
        outcomes: [
            "Created a structured backend foundation for financial product workflows",
        ],
        visibility: "PRIVATE_SUMMARY",
        status: "CLIENT_WORK",
        featured: true,
        order: 2,
        github: {
            repoUrl: "https://github.com/ACAZUMAH/bora-capital-backend",
            stars: 1,
            language: "TypeScript",
            pushedAt: "2026-04-05T12:34:46Z",
            defaultBranch: "staging",
        },
    },
    {
        title: "PizzaMan / K.E.K.S Operations",
        slug: "pizzaman-keks-operations",
        company: "C.A.Q.A",
        client: "PizzaMan",
        summary: "Operational admin and mobile tooling for restaurant workforce, call-center, and internal reporting workflows.",
        role: "Frontend engineer working on admin and operational web/mobile interfaces.",
        stack: [
            "TypeScript",
            "React",
            "Chakra UI",
            "React Router",
            "React Query",
            "Expo",
        ],
        features: [
            "Admin portal",
            "Call center workflows",
            "Mobile operations",
            "Reports",
        ],
        outcomes: [
            "Built interfaces for repeated operational work and internal visibility",
        ],
        visibility: "PRIVATE_SUMMARY",
        status: "CLIENT_WORK",
        featured: true,
        order: 3,
    },
    {
        title: "Homepal",
        slug: "homepal",
        summary: "A property listing platform for buying, renting, and managing real estate listings.",
        problem: "Property seekers and managers need a searchable platform that keeps listing discovery and management simple.",
        role: "Full-stack developer",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "GraphQL"],
        features: [
            "Property listings",
            "Secure authentication",
            "Search and browsing",
        ],
        outcomes: [
            "Created a full-stack real-estate project suitable for portfolio demonstration",
        ],
        visibility: "PUBLIC",
        status: "OPEN_SOURCE",
        featured: true,
        order: 4,
        links: [
            {
                label: "GitHub",
                url: "https://github.com/ACAZUMAH/Homepal-Customer-Portal",
                type: "GITHUB",
            },
        ],
    },
    {
        title: "FindJobs",
        slug: "findjobs",
        summary: "A job tracking backend and frontend for managing applications with authentication, search, and OTP verification.",
        role: "Full-stack developer",
        stack: ["TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "SMS API"],
        features: [
            "CRUD job entries",
            "Search by company, position, status, and salary",
            "JWT and bcrypt authentication",
            "OTP verification with SMS APIs",
        ],
        visibility: "PUBLIC",
        status: "OPEN_SOURCE",
        order: 5,
        links: [
            {
                label: "Frontend",
                url: "https://github.com/ACAZUMAH/Findjobs-frontEnd",
                type: "GITHUB",
            },
            {
                label: "Backend",
                url: "https://github.com/ACAZUMAH/findJobs",
                type: "GITHUB",
            },
        ],
    },
    {
        title: "Company Dashboard",
        slug: "company-dashboard",
        summary: "A centralized dashboard for business data processing, workflow visibility, and team collaboration.",
        role: "Frontend and dashboard engineer",
        stack: ["TypeScript", "React", "Dashboard UI"],
        features: [
            "Business data views",
            "Team collaboration surfaces",
            "Workflow dashboards",
        ],
        visibility: "PUBLIC",
        status: "OPEN_SOURCE",
        order: 6,
        links: [
            {
                label: "GitHub",
                url: "https://github.com/ACAZUMAH/Company-Dashboard",
                type: "GITHUB",
            },
        ],
    },
];
const seedDatabase = async () => {
    try {
        const passwordHash = await (0, helpers_1.hashPassword)(config_1.config.adminPassword);
        await models_1.AdminUserModel.updateOne({ email: config_1.config.adminEmail }, {
            $set: {
                name: "Caleb Azumah",
                passwordHash,
            },
        }, { upsert: true });
        if (await models_1.ProfileModel.countDocuments())
            await models_1.ProfileModel.deleteMany({});
        await models_1.ProfileModel.create({
            fullName: "Caleb Asakwin Azumah",
            title: "Software Engineer",
            headline: "I build scalable backend systems, modern web portals, and business-facing products with TypeScript, React, GraphQL, and MongoDB.",
            bio: "I am a passionate software engineer with two years of experience developing and implementing software solutions that drive business success. I enjoy turning operational problems into clean backend services, usable admin tools, and polished client experiences.",
            email: "calebazumah9@gmail.com",
            phone: "+233599832927",
            location: "Kumasi, Ghana",
            linkedInUrl: "https://www.linkedin.com/in/caleb-azumah-052620284/",
            githubUrl: "https://github.com/ACAZUMAH",
            twitterUrl: "https://x.com/DcWhizzberg",
            seo: {
                title: "Caleb Azumah | Software Engineer",
                description: "Portfolio of Caleb Azumah, a software engineer building backend systems, client portals, admin dashboards, and business software.",
                keywords: [
                    "Caleb Azumah",
                    "Software Engineer",
                    "React",
                    "GraphQL",
                    "MongoDB",
                ],
            },
        });
        if (await models_1.AvailabilityStatusModel.countDocuments())
            await models_1.AvailabilityStatusModel.deleteMany({});
        await models_1.AvailabilityStatusModel.create({
            label: "Open to software engineering roles and selected client projects",
            description: "Available for backend, frontend, full-stack, dashboard, and portal work.",
            acceptingWork: true,
        });
        if (await models_1.ExperienceModel.countDocuments())
            await models_1.ExperienceModel.deleteMany({});
        await models_1.ExperienceModel.bulkWrite([
            {
                role: "Software Engineer",
                company: "LivelyCura",
                location: "Kumasi, Ghana",
                workMode: "Hybrid",
                startDate: "February 2025",
                isCurrent: true,
                order: 1,
                highlights: [
                    "Developing and maintaining a comprehensive pharmacy system with pharmacy and lab dashboards.",
                    "Collaborating with backend engineers and designers to deliver responsive, scalable, user-friendly healthcare interfaces.",
                ],
            },
            {
                role: "Backend Developer Intern",
                company: "Ideation Axis",
                location: "Tarkwa, Ghana",
                workMode: "Remote",
                startDate: "September 2024",
                endDate: "November 2024",
                order: 2,
                highlights: [
                    "Designed and implemented RESTful APIs for web applications.",
                    "Built secure authentication with JWT, role-based access control, and OAuth 2.0.",
                ],
            },
            {
                role: "Software Developer Intern",
                company: "Go2Cod",
                location: "Addis Ababa, Ethiopia",
                workMode: "Remote",
                startDate: "November 2024",
                endDate: "December 2024",
                order: 3,
                highlights: [
                    "Built console-based Node.js and TypeScript applications for problem-solving practice.",
                    "Implemented CRUD flows in a phonebook manager plus games and utility applications.",
                ],
            },
        ].map((exp) => ({
            updateOne: {
                filter: { role: exp.role, company: exp.company },
                update: { $set: exp },
                upsert: true,
            },
        })));
        if (await models_1.EducationModel.countDocuments())
            await models_1.EducationModel.deleteMany({});
        await models_1.EducationModel.create({
            institution: "Kwame Nkrumah University of Science and Technology",
            program: "BSc. Computer Science",
            location: "Kumasi, Ghana",
            endDate: "Expected September 2026",
            order: 1,
        });
        if (await models_1.CertificationModel.countDocuments())
            await models_1.CertificationModel.deleteMany({});
        await models_1.CertificationModel.bulkWrite([
            {
                title: "Node.js & MongoDB: Developing Back-end Database Applications",
                issuer: "Coursera",
                date: "May 2024 - August 2024",
                order: 1,
            },
            {
                title: "Introduction to Databases",
                issuer: "Coursera",
                date: "January 2024 - May 2024",
                order: 2,
            },
            {
                title: "Introduction to Python",
                issuer: "Coursera",
                date: "January 2023 - May 2023",
                order: 3,
            },
        ].map((cert) => ({
            updateOne: {
                filter: { title: cert.title },
                update: { $set: cert },
                upsert: true,
            },
        })));
        if (await models_1.SkillModel.countDocuments())
            await models_1.SkillModel.deleteMany({});
        await models_1.SkillModel.bulkWrite(skills.map(([name, category], order) => ({
            updateOne: {
                filter: { name },
                update: { $set: { name, category, order, featured: order < 12 } },
                upsert: true,
            },
        })));
        await models_1.ProjectModel.bulkWrite(projects.map((project) => ({
            updateOne: {
                filter: { slug: project.slug },
                update: { $setOnInsert: project },
                upsert: true,
            },
        })));
        if (await models_1.ResumeAssetModel.countDocuments())
            await models_1.ResumeAssetModel.deleteMany({});
        await models_1.ResumeAssetModel.bulkWrite([
            {
                title: "Caleb Azumah Resume",
                url: "/resumes/caleb-azumah-resume.pdf",
                focus: "General software engineering",
                isDefault: true,
            },
            {
                title: "Caleb Azumah CV",
                url: "/resumes/caleb-azumah-cv.pdf",
                focus: "Detailed CV",
                isDefault: false,
            },
        ].map((resume) => ({
            updateOne: {
                filter: { title: resume.title },
                update: { $set: resume },
                upsert: true,
            },
        })));
        if (await models_1.TestimonialModel.countDocuments())
            await models_1.TestimonialModel.deleteMany({});
        await models_1.TestimonialModel.create({
            name: "Available on request",
            role: "Professional reference",
            company: "Portfolio",
            quote: "Testimonials can be added from the admin portal as client and teammate feedback becomes approved for publication.",
            isVisible: true,
            order: 1,
        });
    }
    catch (error) {
        console.error("Seeding error (likely concurrent upsert race condition):", error);
    }
};
exports.seedDatabase = seedDatabase;
