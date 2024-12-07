import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Import Images for Accomplishments
import badge1 from '../assets/accomplishments/badges/application-development-using-microservices-and-ser.png';
import badge2 from '../assets/accomplishments/badges/building-generative-ai-powered-applications-with-py.png';
import badge3 from '../assets/accomplishments/badges/cloud-native-devops-agile-nosql-essentials.png';
import badge4 from '../assets/accomplishments/badges/container-kubernetes-essentials-v2.png';
import badge5 from '../assets/accomplishments/badges/developing-applications-with-sql-databases-and-django.png';
import badge6 from '../assets/accomplishments/badges/front-end-development-with-react-v2.1.png';
import badge7 from '../assets/accomplishments/badges/full-stack-software-developer-assessment-v2.png';
import badge8 from '../assets/accomplishments/badges/generative-ai-prompt-engineering.png';
import badge9 from '../assets/accomplishments/badges/getting-started-with-front-end-and-web-development.png';
import badge10 from '../assets/accomplishments/badges/google-ux-design-professional-certificate.2.png';
import badge11 from '../assets/accomplishments/badges/ibm-ai-developer-professional-certificate.png';
import badge12 from '../assets/accomplishments/badges/ibm-front-end-developer-professional-certificate.png';
import badge13 from '../assets/accomplishments/badges/intermediate-front-end-web-development.png';
import badge14 from '../assets/accomplishments/badges/introduction-to-cloud-computing.png';
import badge15 from '../assets/accomplishments/badges/introduction-to-html-css-javascript.png';
import badge16 from '../assets/accomplishments/badges/meta-front-end-developer-certificate.png';
import badge17 from '../assets/accomplishments/badges/node-and-express-essentials.png';
import badge18 from '../assets/accomplishments/badges/python-for-data-science-and-ai.png';
import badge19 from '../assets/accomplishments/badges/python-project-for-ai-and-application-development.png';
import badge20 from '../assets/accomplishments/badges/software-engineering-essentials.png';
import badge21 from '../assets/accomplishments/badges/ibm-full-stack-application-development-capstone-project.png';
import badge22 from '../assets/accomplishments/badges/ibm-full-stack-software-developer-professional-cert.1.png';

import certification1 from '../assets/accomplishments/certifications/duke-university-java-programming-arrays-lists-and-structured-data.jpeg';
import certification2 from '../assets/accomplishments/certifications/duke-university-java-programming-principles-of-software-design.jpeg';
import certification3 from '../assets/accomplishments/certifications/duke-university-java-programming-solving-problems-with-software.jpeg';
import certification4 from '../assets/accomplishments/certifications/duke-university-programming-foundations-with-javascript-html-and-css.jpeg';
import certification5 from '../assets/accomplishments/certifications/google-build-dynamic-user-interfaces-ui-for-websites.jpeg';
import certification6 from '../assets/accomplishments/certifications/google-build-wireframes-and-low-fidelity-prototypes.jpeg';
import certification7 from '../assets/accomplishments/certifications/google-conduct-ux-research-and-test-early-concepts.jpeg';
import certification8 from '../assets/accomplishments/certifications/google-create-high-fidelity-designs-and-prototypes-in-figma.jpeg';
import certification9 from '../assets/accomplishments/certifications/google-design-a-user-experience-for-social-good-and-prepare-for-jobs.jpeg';
import certification10 from '../assets/accomplishments/certifications/google-foundations-of-user-experience-ux-design.jpeg';
import certification11 from '../assets/accomplishments/certifications/google-start-the-ux-design-process-empathize-define-and-ideate.jpeg';
import certification12 from '../assets/accomplishments/certifications/ibm-application-development-using-microservices-and-serverless.jpeg';
import certification13 from '../assets/accomplishments/certifications/ibm-building-generative-ai-powered-applications-with-python.jpeg';
import certification14 from '../assets/accomplishments/certifications/ibm-designing-user-interfaces-and-experiences-ui-ux.jpeg';
import certification15 from '../assets/accomplishments/certifications/ibm-developing-ai-applications-with-python-and-flask.jpeg';
import certification16 from '../assets/accomplishments/certifications/ibm-developing-back-end-apps-with-nodejs-and-express.jpeg';
import certification17 from '../assets/accomplishments/certifications/ibm-developing-front-end-apps-with-react.jpeg';
import certification18 from '../assets/accomplishments/certifications/ibm-developing-websites-and-front-ends-with-bootstrap.jpeg';
import certification19 from '../assets/accomplishments/certifications/ibm-django-application-development-with-sql-and-databases.jpeg';
import certification20 from '../assets/accomplishments/certifications/ibm-flutter-and-dart-developing-ios-android-and-mobile-apps.jpeg';
import certification21 from '../assets/accomplishments/certifications/ibm-front-end-development-capstone-project.jpeg';
import certification22 from '../assets/accomplishments/certifications/ibm-full-stack-software-developer-assesment.jpeg';
import certification23 from '../assets/accomplishments/certifications/ibm-generative-ai-elevate-your-software-development.jpeg';
import certification24 from '../assets/accomplishments/certifications/ibm-generative-ai-introduction-and-applications.jpeg';
import certification25 from '../assets/accomplishments/certifications/ibm-generative-ai-prompt-engineering-basics.jpeg';
import certification26 from '../assets/accomplishments/certifications/ibm-get-started-with-cloud-native-devops-agile-and-nosql.jpeg';
import certification27 from '../assets/accomplishments/certifications/ibm-getting-started-with-front-end-and-web-development.jpeg';
import certification28 from '../assets/accomplishments/certifications/ibm-getting-started-with-git-and-github.jpeg';
import certification29 from '../assets/accomplishments/certifications/ibm-intermediate-web-and-front-end-development.jpeg';
import certification30 from '../assets/accomplishments/certifications/ibm-introduction-to-artificial-intelligence-ai.jpeg';
import certification31 from '../assets/accomplishments/certifications/ibm-introduction-to-cloudcomputing.jpeg';
import certification32 from '../assets/accomplishments/certifications/ibm-introduction-to-containers-with-docker-kubernetes-and-openshift.jpeg';
import certification33 from '../assets/accomplishments/certifications/ibm-introduction-to-html-css-and-javascript.jpeg';
import certification34 from '../assets/accomplishments/certifications/ibm-introduction-to-mobile-app-development.jpeg';
import certification35 from '../assets/accomplishments/certifications/ibm-introduction-to-software-engineering.jpeg';
import certification36 from '../assets/accomplishments/certifications/ibm-python-for-data-science-ai-and-development.jpeg';
import certification37 from '../assets/accomplishments/certifications/ibm-software-developer-career-guide-and-interview-preparation.jpeg';
import certification38 from '../assets/accomplishments/certifications/meta-advanced-react.jpeg';
import certification39 from '../assets/accomplishments/certifications/meta-capstone-react-app.jpeg';
import certification40 from '../assets/accomplishments/certifications/meta-coding-interview-preparation.jpeg';
import certification41 from '../assets/accomplishments/certifications/meta-front-end-developer-capstone.jpeg';
import certification42 from '../assets/accomplishments/certifications/meta-html-and-css-in-depth.jpeg';
import certification43 from '../assets/accomplishments/certifications/meta-introduction-to-front-end-development.jpeg';
import certification44 from '../assets/accomplishments/certifications/meta-introduction-to-mobile-development.jpeg';
import certification45 from '../assets/accomplishments/certifications/meta-principles-of-ux-ui-design.jpeg';
import certification46 from '../assets/accomplishments/certifications/meta-programming-with-javascript.jpeg';
import certification47 from '../assets/accomplishments/certifications/meta-react-basics.jpeg';
import certification48 from '../assets/accomplishments/certifications/meta-react-native.jpeg';
import certification49 from '../assets/accomplishments/certifications/meta-version-control.jpeg';
import certification50 from '../assets/accomplishments/certifications/meta-working-with-data.jpeg';
import certification51 from '../assets/accomplishments/certifications/skillup-edtech-get-started-with-android-app-development.jpeg';
import certification52 from '../assets/accomplishments/certifications/skillup-edtech-get-started-with-ios-app-development.jpeg';
import certification53 from '../assets/accomplishments/certifications/skillup-edtech-mobile-app-development-capstone-project.jpeg';
import certification54 from '../assets/accomplishments/certifications/skillup-edtech-mobile-app-notifications-databases-and-publishing.jpeg';
import certification55 from '../assets/accomplishments/certifications/skillup-edtech-react-native-developing-android-and-ios-apps.jpeg';
import certification56 from '../assets/accomplishments/certifications/university-of-michigan-capstone-retrieving-processing-and-visualizing-data-with-python.jpeg';
import certification57 from '../assets/accomplishments/certifications/university-of-michigan-programming-for-everybody-getting-started-with-python.jpeg';
import certification58 from '../assets/accomplishments/certifications/university-of-michigan-python-data-structures.jpeg';
import certification59 from '../assets/accomplishments/certifications/university-of-michigan-using-databases-with-python.jpeg';
import certification60 from '../assets/accomplishments/certifications/university-of-michigan-using-python-to-access-web-data.jpeg';
import certification61 from '../assets/accomplishments/certifications/ibm-full-stack-application-development-capstone-project.jpeg';

import specialization1 from '../assets/accomplishments/specializations/google-ux-design.jpeg';
import specialization2 from '../assets/accomplishments/specializations/ibm-ai-developer.jpeg';
import specialization3 from '../assets/accomplishments/specializations/ibm-front-end-developer.jpeg';
import specialization4 from '../assets/accomplishments/specializations/ibm-ios-and-android-mobile-app-developer.jpeg';
import specialization5 from '../assets/accomplishments/specializations/meta-front-end-developer.jpeg';
import specialization6 from '../assets/accomplishments/specializations/meta-react-native.jpeg';
import specialization7 from '../assets/accomplishments/specializations/python-for-everybody.jpeg';
import specialization8 from '../assets/accomplishments/specializations/ibm-full-stack-software-developer.jpeg';

// Define the accomplishment type
type Accomplishment = {
    title: string;
    description?: string;
    category: string;
    image: string;
    issuedBy: string; // "Issued by"
    skills: string[];  // Skills used
};

const accomplishments: Accomplishment[] = [
    // Badges
    {
        title: 'Application Development using Microservices and Serverless',
        category: 'Badges',
        image: badge1,
        issuedBy: 'Issued by: IBM',
        skills: ['Containers', 'cURL', 'Docker', 'Flask', 'GraphQL', 'Microservices', 'Postman', 'PWID-B0636600', 'REST', 'Serverless Computing', 'Swagger']
    },
    {
        title: 'Building Generative AI-Powered Applications with Python',
        category: 'Badges',
        image: badge2,
        issuedBy: 'Issued by: IBM',
        skills: ['Artificial Intelligence', 'Chatbots', 'Generative AI', 'PWID-B0930500', 'Python', 'Voice Assistants']
    },
    {
        title: 'Cloud Native, DevOps, Agile & NoSQL Essentials',
        category: 'Badges',
        image: badge3,
        issuedBy: 'Issued by: IBM',
        skills: ['Agile', 'Automated Tools', 'CI/CD', 'Cloudant', 'Cloud Native Application', 'DevOps', 'IBM Cloud', 'MongoDB', 'NoSQL', 'PWID-B0646300', 'ZenHub']
    },
    {
        title: 'Container & Kubernetes Essentials V2',
        category: 'Badges',
        image: badge4,
        issuedBy: 'Issued by: IBM',
        skills: ['Auto-Scaling', 'Cloud', 'Containers', 'Istio', 'Kubernetes', 'OpenShift', 'PWID-B0120700', 'ReplicaSets', 'YAML']
    },
    {
        title: 'Developing Applications with SQL, Databases, and Django',
        category: 'Badges',
        image: badge5,
        issuedBy: 'Issued by: IBM',
        skills: ['Cloud Database Fundamentals', 'CSS', 'Django', 'GitHub', 'HTML', 'Object-oriented Programming', 'Object Relational Mapping', 'PWID-B0616100', 'Python', 'SQL']
    },
    {
        title: 'Front-end Development with React V2',
        category: 'Badges',
        image: badge6,
        issuedBy: 'Issued by: IBM',
        skills: ['React', 'Redux (Toolkit, Thunk, Saga)', 'Hooks (useState, useEffect, Custom)', 'Component Design (States, Lifecycle, Composition)', 'Front-end Development', 'JavaScript & JSX', 'Data Fetching (Fetch, Forms)', 'Virtual DOM']
    },
    {
        title: 'Full Stack Software Developer Assessment V2',
        category: 'Badges',
        image: badge7,
        issuedBy: 'Issued by: IBM',
        skills: ['Cloud Computing', 'Django', 'JavaScript', 'Node.js', 'PWID-B0920400', 'Web Application']
    },
    {
        title: 'Generative AI: Prompt Engineering',
        category: 'Badges',
        image: badge8,
        issuedBy: 'Issued by: IBM',
        skills: ['Generative AI', 'Large Language Models', 'LLM', 'Prompt Engineering', 'Prompt Engineering Approaches', 'Prompt Patterns', 'PWID-B0901100', 'Tools for Prompt Engineering']
    },
    {
        title: 'Getting Started with Front-End and Web Development',
        category: 'Badges',
        image: badge9,
        issuedBy: 'Issued by: IBM',
        skills: ['Front-end Web Development', 'No-code', 'PWID-B0928100', 'UI/UX Designer', 'Web Development', 'WordPress']
    },
    {
        title: 'Google UX Design Professional Certificate',
        category: 'Badges',
        image: badge10,
        issuedBy: 'Issued by: Google',
        skills: ['Conducting Usability Studies', 'Figma Adobe XD', 'Prototyping', 'Sketching and Ideating', 'User Experience Design (UXD)', 'User Experience Research (UXR)', 'Wireframing']
    },
    {
        title: 'IBM AI Developer Professional Certificate',
        category: 'Badges',
        image: badge11,
        issuedBy: 'Issued by: IBM',
        skills: ['Artificial Intelligence', 'Chatbots', 'Deep Learning', 'Generative AI', 'Large Language Models', 'Machine Learning', 'Prompt Engineering', 'PWID-B0934500', 'Python Programming', 'Software Engineering']
    },
    {
        title: 'IBM Front-End Developer Professional Certificate',
        category: 'Badges',
        image: badge12,
        issuedBy: 'Issued by: IBM',
        skills: ['Agile and Scrum', 'CSS', 'Debugging', 'DevOps', 'Figma', 'Front-end Development', 'Git & GitHub', 'JavaScript', 'MongoDB', 'React', 'Responsive Design', 'SDLC', 'SEO', 'UI/UX Design', 'Web Development', 'Webpack', 'Wireframing', 'WordPress']
    },
    {
        title: 'Intermediate Front-end Web Development',
        category: 'Badges',
        image: badge13,
        issuedBy: 'Issued by: IBM',
        skills: ['Automate Tools', 'CMS', 'Debugging', 'Front-end Development', 'IBM Cloud', 'jasmine', 'JavaScript Frameworks', 'Mocha', 'PWID-B0642200', 'SEO', 'Webpack', 'Website Development', 'WordPress']
    },
    {
        title: 'Introduction to Cloud Computing',
        category: 'Badges',
        image: badge14,
        issuedBy: 'Issued by: IBM',
        skills: ['Architect', 'Cloud', 'Cloud Native', 'Containers', 'Developer', 'DevOps', 'Hybrid', 'IaaS', 'IBM Cloud', 'Multicloud', 'PaaS', 'PWID-B0163400', 'SaaS']
    },
    {
        title: 'Introduction to HTML, CSS, & JavaScript',
        category: 'Badges',
        image: badge15,
        issuedBy: 'Issued by: IBM',
        skills: ['Cascading Style Sheets (CSS)', 'HTML', 'HTML5', 'JavaScript', 'PWID-B0970300', 'React (Web Framework)', 'Web', 'Web Development']
    },
    {
        title: 'Meta Front-End Developer Certificate',
        category: 'Badges',
        image: badge16,
        issuedBy: 'Issued by: Meta',
        skills: ['Coding Interview Skills', 'CSS', 'Editing Images', 'HTML', 'JavaScript ES6', 'React.js', 'Version Control', 'Wireframes']
    },
    {
        title: 'Node and Express Essentials',
        category: 'Badges',
        image: badge17,
        issuedBy: 'Issued by: IBM',
        skills: ['Asynchronous Callbacks', 'Authentication', 'Authorization', 'Express', 'Middleware', 'Node.js', 'Node Package Manager (NPM)', 'Promises', 'PWID-B0615500', 'Routing', 'Templating']
    },
    {
        title: 'Python for Data Science and AI',
        category: 'Badges',
        image: badge18,
        issuedBy: 'Issued by: IBM',
        skills: ['Bokeh', 'Matplotlib', 'PWID-B0394900', 'Python']
    },
    {
        title: 'Python Project for AI and Application Development',
        category: 'Badges',
        image: badge19,
        issuedBy: 'Issued by: IBM',
        skills: ['Artificial Intelligence', 'Data Science', 'PWID-B0584300', 'Python']
    },
    {
        title: 'Software Engineering Essentials',
        category: 'Badges',
        image: badge20,
        issuedBy: 'Issued by: IBM',
        skills: ['Basic Programming Concepts', 'PWID-B0406200', 'SDLC', 'Software Architecture', 'Software Building Process', 'Software Development Lifecycle', 'Software Development Tools', 'Software Engineer', 'Software Engineering']
    },
    {
        title: 'IBM Full-Stack Application Development Capstone Project',
        category: 'Badges',
        image: badge21,
        issuedBy: 'Issued by: IBM',
        skills: ['Artificial Intelligence', 'Data Science', 'Machine Learning', 'Natural Language Processing', 'Python', 'TensorFlow', 'Web Development']
    },
    {
        title: 'IBM Full Stack Software Developer Professional Certificate (V5)',
        category: 'Badges',
        image: badge22,
        issuedBy: 'Issued by: IBM',
        skills: ['Artificial Intelligence', 'Data Science', 'Machine Learning', 'Natural Language Processing', 'Python', 'TensorFlow', 'Web Development']
    },
    // Certifications
    {
        title: 'Java Programming: Arrays, Lists, and Structured Data',
        category: 'Certifications',
        image: certification1,
        issuedBy: 'Issued by: Duke University',
        skills: ['Data Structure', 'Cryptography', 'Hash Table', 'Java Programming']
    },
    {
        title: 'Java Programming: Principles of Software Design',
        category: 'Certifications',
        image: certification2,
        issuedBy: 'Issued by: Duke University',
        skills: ['Programming Principles', 'Interfaces', 'Software Design', 'Java Programming']
    },
    {
        title: 'Java Programming: Solving Problems with Software',
        category: 'Certifications',
        image: certification3,
        issuedBy: 'Issued by: Duke University',
        skills: ['Algorithms', 'Problem Solving', 'String (Computer Science)', 'Java Programming']
    },
    {
        title: 'Programming Foundations with JavaScript, HTML and CSS',
        category: 'Certifications',
        image: certification4,
        issuedBy: 'Issued by: Duke University',
        skills: ['HTML', 'HTML5', 'JavaScript', 'Cascading Style Sheet (CSS)']
    },
    {
        title: 'Build Dynamic User Interfaces (UI) for Websites',
        category: 'Certifications',
        image: certification5,
        issuedBy: 'Issued by: Google',
        skills: ['Usability Testing', 'User Experience (UX)', 'Prototype', 'User Experience Design (UXD)']
    },
    {
        title: 'Build Wireframes and Low-Fidelity Prototypes',
        category: 'Certifications',
        image: certification6,
        issuedBy: 'Issued by: Google',
        skills: ['User Experience (UX)', 'Prototype', 'Wireframe', 'User Experience Design (UXD)', 'UX Research']
    },
    {
        title: 'Conduct UX Research and Test Early Concepts',
        category: 'Certifications',
        image: certification7,
        issuedBy: 'Issued by: Google',
        skills: ['Usability Testing', 'User Experience (UX)', 'Prototype', 'User Experience Design (UXD)', 'UX Research']
    },
    {
        title: 'Create High-Fidelity Designs and Prototypes in Figma',
        category: 'Certifications',
        image: certification8,
        issuedBy: 'Issued by: Google',
        skills: ['User Experience (UX)', 'Prototype', 'Mockup', 'User Experience Design (UXD)', 'Figma']
    },
    {
        title: 'Design a User Experience for Social Good & Prepare for Jobs',
        category: 'Certifications',
        image: certification9,
        issuedBy: 'Issued by: Google',
        skills: ['Usability Testing', 'User Experience (UX)', 'UX Design Jobs', 'Prototype', 'User Experience Design (UXD)']
    },
    {
        title: 'Foundations of User Experience (UX) Design',
        category: 'Certifications',
        image: certification10,
        issuedBy: 'Issued by: Google',
        skills: ['User Experience (UX)', 'Prototype', 'Wireframe', 'User Experience Design (UXD)', 'UX Research']
    },
    {
        title: 'Start the UX Design Process: Empathize, Define, and Ideate',
        category: 'Certifications',
        image: certification11,
        issuedBy: 'Issued by: Google',
        skills: ['User Experience (UX)', 'Prototype', 'Wireframe', 'User Experience Design (UXD)', 'UX Research']
    },
    {
        title: 'Application Development using Microservices and Serverless',
        category: 'Certifications',
        image: certification12,
        issuedBy: 'Issued by: IBM',
        skills: ['Representational State Transfer (REST)', 'Cloud Applications', 'OpenShift', 'Microservices', 'Serverless']
    },
    {
        title: 'Building Generative AI-Powered Applications with Python',
        category: 'Certifications',
        image: certification13,
        issuedBy: 'Issued by: IBM',
        skills: ['Voice Assistants', 'Chatbots', 'Python Programming']
    },
    {
        title: 'Designing User Interfaces and Experiences (UI/UX)',
        category: 'Certifications',
        image: certification14,
        issuedBy: 'Issued by: IBM',
        skills: ['Website Wireframe', 'User Interface Design (UI Design)', 'Progressive Web Development', 'Figma', 'User Experience (UX)']
    },
    {
        title: 'Developing AI Applications with Python and Flask',
        category: 'Certifications',
        image: certification15,
        issuedBy: 'Issued by: IBM',
        skills: ['Python Programming', 'Application Development', 'Web Application', 'Flask', 'Artificial Intelligence (AI)']
    },
    {
        title: 'Developing Back-End Apps with Node.js and Express',
        category: 'Certifications',
        image: certification16,
        issuedBy: 'Issued by: IBM',
        skills: ['Server-side JavaScript', 'Back-end Development', 'Computer Science', 'Web Development', 'Express']
    },
    {
        title: 'Developing Front-End Apps with React',
        category: 'Certifications',
        image: certification17,
        issuedBy: 'Issued by: IBM',
        skills: ['React (Web Framework)', 'Front-end Development', 'Web Development', 'JavaScript', 'User Interface']
    },
    {
        title: 'Developing Websites and Front-Ends with Bootstrap',
        category: 'Certifications',
        image: certification18,
        issuedBy: 'Issued by: IBM',
        skills: ['Responsive', 'Bootstrap', 'Grid System', 'Web Development Framework', 'Front-end Web Development']
    },
    {
        title: 'Django Application Development with SQL and Databases',
        category: 'Certifications',
        image: certification19,
        issuedBy: 'Issued by: IBM',
        skills: ['Django (Web Framework)', 'Object Relational Mapping (ORM)', 'Relational Database (RDBMS)', 'SQL', 'Back-end Applications']
    },
    {
        title: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps',
        category: 'Certifications',
        image: certification20,
        issuedBy: 'Issued by: IBM',
        skills: ['iOS Applications', 'Software Development', 'Android Apps']
    },
    {
        title: 'Front-End Development Capstone Project',
        category: 'Certifications',
        image: certification21,
        issuedBy: 'Issued by: IBM',
        skills: ['Software Development', 'React (Web Framework)', 'Front-end Development', 'Font-end Design', 'Web Development']
    },
    {
        title: 'Full Stack Software Developer Assessment',
        category: 'Certifications',
        image: certification22,
        issuedBy: 'Issued by: IBM',
        skills: ['Software Development', 'Front-end Development', 'Back-end Development', 'Web Development']
    },
    {
        title: 'Generative AI: Elevate your Software Development Career',
        category: 'Certifications',
        image: certification23,
        issuedBy: 'Issued by: IBM',
        skills: ['Software Engineering', 'Software Development', 'Code Generation', 'AI Prompts', 'Generative AI']
    },
    {
        title: 'Generative AI: Introduction and Applications',
        category: 'Certifications',
        image: certification24,
        issuedBy: 'Issued by: IBM',
        skills: ['Artificial Intelligence (AI)', 'ChatGPT', 'Large Language Models (LLM)', 'Naural Language Generation', 'Generative AI']
    },
    {
        title: 'Generative AI: Prompt Engineering Basics',
        category: 'Certifications',
        image: certification25,
        issuedBy: 'Issued by: IBM',
        skills: ['Artificial Intelligence (AI)', 'Prompt Engineering', 'ChatGPT', 'Prompt Patterns', 'Generative AI']
    },
    {
        title: 'Get Started with Cloud Native, DevOps, Agile, and NoSQL',
        category: 'Certifications',
        image: certification26,
        issuedBy: 'Issued by: IBM',
        skills: ['Continuous Integration', 'Continuous Delivery', 'MongoDB', 'Agile', 'DevOps']
    },
    {
        title: 'Getting Started with Front-End and Web Development',
        category: 'Certifications',
        image: certification27,
        issuedBy: 'Issued by: IBM',
        skills: ['Web Development', 'WordPress', 'Front-end Web Developer', 'UI/UX Designer', 'No-code']
    },
    {
        title: 'Getting Started with Git and GitHub',
        category: 'Certifications',
        image: certification28,
        issuedBy: 'Issued by: IBM',
        skills: ['Distributed Version Control Systems (DVCS)', 'Git (Software)', 'GitHub', 'Open Source', 'Cloning and Forking']
    },
    {
        title: 'Intermediate Web and Front-End Development',
        category: 'Certifications',
        image: certification29,
        issuedBy: 'Issued by: IBM',
        skills: ['Webpack', 'Search Engine Optimization (SEO)', 'JavaScript Library', 'Debugging', 'WordPress']
    },
    {
        title: 'Introduction to Artificial Intelligence (AI)',
        category: 'Certifications',
        image: certification30,
        issuedBy: 'Issued by: IBM',
        skills: ['Generative AI', 'AI Ethics', 'Naural Language Processing', 'Machine Learning', 'Artificial Intelligence']
    },
    {
        title: 'Introduction to Cloud Computing',
        category: 'Certifications',
        image: certification31,
        issuedBy: 'Issued by: IBM',
        skills: ['Cloud Computing', 'Hybrid Multicloud', 'DevOps', 'IaaS', 'PaaS', 'SaaS', 'Cloud Native']
    },
    {
        title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
        category: 'Certifications',
        image: certification32,
        issuedBy: 'Issued by: IBM',
        skills: ['OpenShift', 'Docker', 'Kubernetes', 'Containers', 'Cloud Native']
    },
    {
        title: 'Introduction to HTML, CSS, & JavaScript',
        category: 'Certifications',
        image: certification33,
        issuedBy: 'Issued by: IBM',
        skills: ['Web Development', 'JavaScript', 'Web', 'Cascading Style Sheets (CSS)']
    },
    {
        title: 'Introduction to Mobile App Development',
        category: 'Certifications',
        image: certification34,
        issuedBy: 'Issued by: IBM',
        skills: ['Mobile Applications', 'Mobile App Development Tools', 'iOS', 'Android', 'Mobile App Development Frameworks']
    },
    {
        title: 'Introduction to Software Engineering',
        category: 'Certifications',
        image: certification35,
        issuedBy: 'Issued by: IBM',
        skills: ['Software Engineering', 'Software Architecture', 'Python Programming', 'Agile and Scrum', 'Software Development Lifecycle (SDLC)']
    },
    {
        title: 'Python for Data Science, AI & Development',
        category: 'Certifications',
        image: certification36,
        issuedBy: 'Issued by: IBM',
        skills: ['Data Science', 'Data Analysis', 'Python Programming', 'Numpy', 'Pandas']
    },
    {
        title: 'Software Developer Career Guide and Interview Preparation',
        category: 'Certifications',
        image: certification37,
        issuedBy: 'Issued by: IBM',
        skills: ['Career', 'Software Engineer', 'Coding Challenge', 'Interview Preparation', 'Full Stack Developer']
    },
    {
        title: 'Advanced React',
        category: 'Certifications',
        image: certification38,
        issuedBy: 'Issued by: Meta',
        skills: ['Unit Testing', 'React (Web Framework)', 'Front-end Web Development']
    },
    {
        title: 'Capstone (React App)',
        category: 'Certifications',
        image: certification39,
        issuedBy: 'Issued by: Meta',
        skills: ['GitHub', 'UX and UI', 'React (Web Framework)', 'SQL', 'Figma']
    },
    {
        title: 'Coding Interview Preparation',
        category: 'Certifications',
        image: certification40,
        issuedBy: 'Issued by: Meta',
        skills: ['Data Structure', 'Computer Science', 'Algorithms', 'Communication', 'Pseudocode']
    },
    {
        title: 'Front-End Developer Capstone',
        category: 'Certifications',
        image: certification41,
        issuedBy: 'Issued by: Meta',
        skills: ['React (Web Framework)', 'JavaScript', 'Front-end Web Development', 'User Interface']
    },
    {
        title: 'HTML and CSS in depth',
        category: 'Certifications',
        image: certification42,
        issuedBy: 'Issued by: Meta',
        skills: ['HTML and CSS', 'React (Web Framework)', 'Debugging', 'JavaScript', 'User Interface']
    },
    {
        title: 'Introduction to Front-End Development',
        category: 'Certifications',
        image: certification43,
        issuedBy: 'Issued by: Meta',
        skills: ['Web Development Tools', 'HTML and CSS', 'Responsive Web Design', 'Front-end Web Development', 'User Interface']
    },
    {
        title: 'Introduction to Mobile Development',
        category: 'Certifications',
        image: certification44,
        issuedBy: 'Issued by: Meta',
        skills: ['HTML and CSS', 'React (Web Framework)', 'Web Development', 'JavaScript', 'Mobile Development']
    },
    {
        title: 'Principles of UX/UI Design',
        category: 'Certifications',
        image: certification45,
        issuedBy: 'Issued by: Meta',
        skills: ['Web Design', 'Accessibility', 'Front-end Web Development', 'User Experience (UX)']
    },
    {
        title: 'Programming with JavaScript',
        category: 'Certifications',
        image: certification46,
        issuedBy: 'Issued by: Meta',
        skills: ['Test-Driven Development', 'JavaScript', 'Front-end Web Development', 'Object-Oriented Programming (OOP)']
    },
    {
        title: 'React Basics',
        category: 'Certifications',
        image: certification47,
        issuedBy: 'Issued by: Meta',
        skills: ['React (Web Framework)', 'Application Development', 'Web Application', 'Front-end Web Development']
    },
    {
        title: 'React Native',
        category: 'Certifications',
        image: certification48,
        issuedBy: 'Issued by: Meta',
        skills: ['React (JavaScript Library)', 'Application Development', 'React', 'Mobile Development']
    },
    {
        title: 'Version Control',
        category: 'Certifications',
        image: certification49,
        issuedBy: 'Issued by: Meta',
        skills: ['Version Control', 'GitHub', 'Bash (Unix Shell)', 'Web Development', 'Linux']
    },
    {
        title: 'Working with Data',
        category: 'Certifications',
        image: certification50,
        issuedBy: 'Issued by: Meta',
        skills: ['React (JavaScript Library)', 'Application Development', 'Data Management', 'REST APIs']
    },
    {
        title: 'Get Started with Android App Development',
        category: 'Certifications',
        image: certification51,
        issuedBy: 'Issued by: SkillUp EdTech',
        skills: ['Android App Design', 'Android Emulator', 'Mobile App Development', 'Android Studio', 'Android']
    },
    {
        title: 'Get Started with iOS App Development',
        category: 'Certifications',
        image: certification52,
        issuedBy: 'Issued by: SkillUp EdTech',
        skills: ['Xcode', 'Swift and SwiftUI', 'iOS Simulators', 'iOS', 'Mobile App Development']
    },
    {
        title: 'Mobile App Development Capstone Project',
        category: 'Certifications',
        image: certification53,
        issuedBy: 'Issued by: SkillUp EdTech',
        skills: ['Software Development', 'Front-end Development', 'Flutter', 'React Native', 'Figma (Design Software)', 'Mobile Application Development']
    },
    {
        title: 'Mobile App Notifications, Databases, & Publishing',
        category: 'Certifications',
        image: certification54,
        issuedBy: 'Issued by: SkillUp EdTech',
        skills: ['Android Applications', 'iOS Applications', 'Mobile App Development', 'Firebase', 'Back-end Services', 'Mobile App Development']
    },
    {
        title: 'React Native: Developing Android and iOS Apps',
        category: 'Certifications',
        image: certification55,
        issuedBy: 'Issued by: SkillUp EdTech',
        skills: ['Software Development', 'Android Apps', 'React Native', 'Mobile App Development', 'iOS Apps']
    },
    {
        title: 'Capstone: Retrieving, Processing, and Visualizing Data with Python',
        category: 'Certifications',
        image: certification56,
        issuedBy: 'Issued by: University of Michigan',
        skills: ['Data Analysis', 'Python Programming', 'Database (DBMS)', 'Data Visualization']
    },
    {
        title: 'Programming for Everybody (Getting Started with Python)',
        category: 'Certifications',
        image: certification57,
        issuedBy: 'Issued by: University of Michigan',
        skills: ['Python Syntax And Semantics', 'Basic Programming Language', 'Computer Programming', 'Python Programming']
    },
    {
        title: 'Python Data Structures',
        category: 'Certifications',
        image: certification58,
        issuedBy: 'Issued by: University of Michigan',
        skills: ['Python Syntax And Semantics', 'Data Structure', 'Tuple', 'Python Programming']
    },
    {
        title: 'Using Databases with Python',
        category: 'Certifications',
        image: certification59,
        issuedBy: 'Issued by: University of Michigan',
        skills: ['Python Programming', 'Database (DBMS)', 'Sqlite', 'SQL']
    },
    {
        title: 'Using Python to Access Web Data',
        category: 'Certifications',
        image: certification60,
        issuedBy: 'Issued by: Google',
        skills: ['JSON', 'Xml', 'Python Programming', 'Web Scraping']
    },
    {
        title: 'IBM Full Stack Application Development Capstone Project',
        category: 'Certifications',
        image: certification61,
        issuedBy: 'Issued by: IBM',
        skills: ['Full-Stack Development', 'Web Development', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'React Native', 'Python', 'Databases', 'MySQL', 'MongoDB', 'IBM Cloud']
    },
    // Specializations
    {
        title: 'Google UX Design',
        category: 'Specializations',
        image: specialization1,
        issuedBy: 'Issued by: Google',
        skills: ['User Experience Design', 'User Interface Design', 'Prototyping', 'Wireframing', 'Visual Design', 'Information Architecture', 'Design Thinking', 'Design Principles', 'Design Tools']
    },
    {
        title: 'IBM AI Developer',
        category: 'Specializations',
        image: specialization2,
        issuedBy: 'Issued by: IBM',
        skills: ['Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Machine Learning Frameworks', 'TensorFlow', 'PyTorch', 'Keras', 'PyTorch', 'TensorFlow']
    },
    {
        title: 'IBM Front-End Developer',
        category: 'Specializations',
        image: specialization3,
        issuedBy: 'Issued by: IBM',
        skills: ['Web Development', 'Front-End Development', 'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'SCSS/SASS', 'LESS', 'jQuery', 'Bootstrap', 'Material-UI']
    },
    {
        title: 'IBM iOS and Android Mobile App Developer',
        category: 'Specializations',
        image: specialization4,
        issuedBy: 'Issued by: IBM, SkillUp EdTech',
        skills: ['Mobile Apps', 'React (JavaScript Library)', 'React Native', 'Cross-platform', 'iOS', 'Mobile Development', 'Android']
    },
    {
        title: 'Meta Front-End Developer',
        category: 'Specializations',
        image: specialization5,
        issuedBy: 'Issued by: Meta',
        skills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Expo', 'Next.js', 'Vue.js', 'Nuxt.js', 'TailwindCSS', 'Three.js', 'HTML5', 'CSS3', 'SCSS/SASS', 'LESS', 'jQuery', 'Bootstrap', 'Material-UI']
    },
    {
        title: 'Meta React Native',
        category: 'Specializations',
        image: specialization6,
        issuedBy: 'Issued by: Meta',
        skills: ['React Native', 'JavaScript', 'TypeScript', 'Node.js', 'Expo']
    },
    {
        title: 'Python for Everybody',
        category: 'Specializations',
        image: specialization7,
        issuedBy: 'Issued by: University of Michigan',
        skills: ['JSON', 'Xml', 'Python Programming', 'Database (DBMS)']
    },
    {
        title: 'IBM Full-Stack Software Developer',
        category: 'Specializations',
        image: specialization8,
        issuedBy: 'Issued by: IBM',
        skills: ['Web Development', 'Front-End Development', 'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'SCSS/SASS', 'LESS', 'jQuery', 'Bootstrap', 'Material-UI']
    }
];

const categories = ['Badges', 'Certifications', 'Specializations'];

const allSkills = Array.from(
    new Set(accomplishments.flatMap((accomplishment) => accomplishment.skills))
);

const AccomplishmentsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [visibleAccomplishments, setVisibleAccomplishments] = useState<Accomplishment[]>([]);
    const [page, setPage] = useState(1);

    const itemsPerPage = 9;

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const filteredAccomplishments = accomplishments.filter((accomplishment) => {
        const matchesCategory =
            !selectedCategory || accomplishment.category === selectedCategory;
        const matchesSkill =
            !selectedSkill || accomplishment.skills.includes(selectedSkill);
        const matchesSearch =
            !searchTerm ||
            accomplishment.title.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSkill && matchesSearch;
    });

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const newItems = filteredAccomplishments.slice(0, startIndex + itemsPerPage);
        setVisibleAccomplishments(newItems);
    }, [page, filteredAccomplishments]);

    useEffect(() => {
        if (inView && visibleAccomplishments.length < filteredAccomplishments.length) {
            setPage((prev) => prev + 1);
        }
    }, [inView, visibleAccomplishments, filteredAccomplishments]);

    return (
        <section id="all-accomplishments" className="py-16 px-4 bg-gray-800 text-gray-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                    All Accomplishments
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                    <div className="flex-1 min-w-[200px]">
                        <input
                            type="text"
                            placeholder="Search accomplishments..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 rounded bg-gray-700 border border-gray-500 text-white"
                        />
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <select
                            value={selectedCategory || ''}
                            onChange={(e) => setSelectedCategory(e.target.value || null)}
                            className="w-full p-2 rounded bg-gray-700 border border-gray-500 text-white"
                        >
                            <option value="">All Categories</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <select
                            value={selectedSkill || ''}
                            onChange={(e) => setSelectedSkill(e.target.value || null)}
                            className="w-full p-2 rounded bg-gray-700 border border-gray-500 text-white"
                        >
                            <option value="">All Skills</option>
                            {allSkills.map((skill) => (
                                <option key={skill} value={skill}>
                                    {skill}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Accomplishments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAccomplishments.map((accomplishment, index) => {
                        const [isLoaded, setIsLoaded] = useState(false); // Track loading state for each image

                        return (
                            <div
                                key={index}
                                className="p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 flex flex-col"
                            >
                                {/* Placeholder container */}
                                <div className="relative w-full h-40 bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                                    <img
                                        src={accomplishment.image}
                                        alt={accomplishment.title}
                                        loading="lazy"
                                        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        onLoad={() => setIsLoaded(true)} // Set loaded state to true once image loads
                                    />
                                    {/* Placeholder Blur */}
                                    {!isLoaded && (
                                        <div className="absolute inset-0 bg-gray-800 blur-sm animate-pulse"></div>
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold text-white mt-4">
                                    {accomplishment.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-2">{accomplishment.issuedBy}</p>
                                <div className="flex flex-wrap gap-2">
                                    {accomplishment.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Infinite Scroll Trigger */}
                {visibleAccomplishments.length < filteredAccomplishments.length && (
                    <div ref={ref} className="h-10"></div>
                )}
            </div>
        </section>
    );
};

export default AccomplishmentsPage;