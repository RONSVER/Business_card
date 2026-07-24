import type { ProjectItem } from '@/entities/Project'

import Cigar from '@/pages/HomePage/assets/cigar.png'
import Diploma from '@/pages/HomePage/assets/diploma.png'
import Practice from '@/pages/HomePage/assets/practice.png'

import Letter_Recommendation_page_one from '@/pages/HomePage/assets/Letter_Recommendation_page_one.jpg'
import Letter_Recommendation_page_two from '@/pages/HomePage/assets/Letter_Recommendation_page_two.jpg'

import Screenshot_cigar_club from '@/pages/HomePage/assets/Screenshot_cigar_club.png'
import Screenshot_cigar_club_two from '@/pages/HomePage/assets/Screenshot_cigar_club_two.png'
import Screenshot_cigar_club_three from '@/pages/HomePage/assets/Screenshot_cigar_club_three.png'
import Screenshot_cigar_club_four from '@/pages/HomePage/assets/Screenshot_cigar_club_four.png'
import Screenshot_cigar_club_five from '@/pages/HomePage/assets/Screenshot_cigar_club_five.png'
import Screenshot_cigar_club_six from '@/pages/HomePage/assets/Screenshot_cigar_club_six.png'

import MechAi_Logo from '@/pages/HomePage/assets/MechAi_Logo.jpg'
import Screenshot_mechAi from '@/pages/HomePage/assets/Screenshot_mechAi.png'
import Screenshot_mechAi_two from '@/pages/HomePage/assets/Screenshot_mechAi_two.png'
import Screenshot_mechAi_three from '@/pages/HomePage/assets/Screenshot_mechAi_three.png'
import Screenshot_mechAi_four from '@/pages/HomePage/assets/Screenshot_mechAi_four.png'
import Screenshot_mechAi_five from '@/pages/HomePage/assets/Screenshot_mechAi_five.png'

import Luci_logo from '@/pages/HomePage/assets/Luci_logo.png'
import Luci_photo_one from '@/pages/HomePage/assets/Luci_photo_one.webp'
import luci_photo_two from '@/pages/HomePage/assets/luci_photo_two.webp'
import luci_photo_three from '@/pages/HomePage/assets/luci_photo_three.webp'
import luci_photo_four from '@/pages/HomePage/assets/luci_photo_four.webp'
import luci_photo_five from '@/pages/HomePage/assets/luci_photo_five.webp'

import Ibrahim_Chekmazov_Backend_EN_diploma from '@/pages/HomePage/assets/Ibrahim_Chekmazov_Backend_EN_diploma.jpg'
import Ibrahim_Chekmazov_Frontend_EN_diploma from '@/pages/HomePage/assets/Ibrahim_Chekmazov_Frontend_EN_diploma.jpg'

import AtlasDevLogo from '@/pages/HomePage/assets/AtlasDevLogo.jpg'

import chefAi from '@/pages/HomePage/assets/chefAi.png'
import ChefAi_demonstration from '@/pages/HomePage/assets/ChefAi_demonstration.png'
import chefAi_second_demo from '@/pages/HomePage/assets/chefAi_second_demo.png'

export const projectItems: ProjectItem[] = [
  {
    title: 'Cigar club from Trood',
    description:
      'At Trood, I worked as a Fullstack Developer on the Cigar Club app. I built the Frontend and also developed Backend triggers and internal architecture, using Firebase as the database. The project used Vue 3, TypeScript, Tailwind, Node.js, Express.js, and aimed to simplify the search and purchase of premium cigars. My involvement is confirmed by recommendation letters from Trood’s management.',
    globalDescription: `🚬 Cigar Club is a social platform for cigar enthusiasts that combines a social feed, content sharing, and discovery features into a single application.

I initially joined the project as a Frontend Developer, where I implemented the main page, feed system, search functionality, and other core application features.

During development, the project scope expanded, and after the backend developer left, I transitioned into a Full-Stack Developer role. I redesigned the feed architecture (Instagram-like, adapted specifically for cigar content), rebuilt the post system, and improved client–server communication.

I also worked extensively with Firebase, including database structure design, Cloud Functions development, backend logic implementation, and debugging production issues.

Additionally, I implemented a complete page based on a new design within a single night, ensuring it was production-ready, responsive, and fully integrated into the application.

🛠 Tech Stack

Vue 3, TypeScript, Pinia, Firebase, Cloud Functions, Node.js, Tailwind CSS`,
    image: Cigar,
    photos: [
      Letter_Recommendation_page_one,
      Letter_Recommendation_page_two,
      Screenshot_cigar_club,
      Screenshot_cigar_club_two,
      Screenshot_cigar_club_three,
      Screenshot_cigar_club_four,
      Screenshot_cigar_club_five,
      Screenshot_cigar_club_six,
    ],
  },
  {
    title: 'Experience in many Fullstack projects',
    description:
      'At Trood, I contributed to multiple applications, including an AI-powered dating app integrated with a Telegram bot for automated match notifications. I worked on Frontend and internal logic, gaining strong Frontend practice. I also received recommendation letter for project.',
    globalDescription: `💻 Full-Stack Projects Experience at Trood

During my time at Trood, I contributed to multiple Full-Stack projects with different levels of complexity, gaining valuable experience in modern web development.

One of the key projects was an AI-powered dating application integrated with a Telegram bot, designed to automate match notifications and improve user interaction. I worked on frontend development, application logic, and feature implementation, strengthening my skills in building real-world applications.

Through these projects, I gained practical experience in developing user interfaces, working with application architecture, integrating services, and solving real development challenges.

I also received a recommendation letter from Trood for my contribution and work on the projects.
`,
    image: Practice,
    photos: [Letter_Recommendation_page_one, Letter_Recommendation_page_two],
  },
  {
    title: 'Diploma projects',
    description:
      'I completed a two-year web development program at Tel-Ran School, where I built and defended two diploma projects. One Frontend and one Backend. Both projects are available on my GitHub and reflect the skills and knowledge gained during the course.',
    globalDescription: `🎓 Diploma Projects

I successfully completed a two-year Web Development program at Tel-Ran School, where I studied both frontend and backend development through practical, project-based learning.

As part of the graduation process, I independently designed, developed, and successfully defended two diploma projects. One focused on Frontend Development and the other on Backend Development. These projects allowed me to apply everything I had learned throughout the program, including application architecture, user interface development, API integration, database interaction, and clean code principles.

Throughout the course, I gained hands-on experience working with modern development tools, solving real-world programming challenges, and following professional development practices.

Both diploma projects are available on my GitHub and showcase my technical skills, problem-solving approach, and growth as a Full-Stack Developer.
`,
    image: Diploma,
    photos: [Ibrahim_Chekmazov_Backend_EN_diploma, Ibrahim_Chekmazov_Frontend_EN_diploma],
  },

  {
    title: 'Atlas Dev',
    description:
      'I am one of the co-founders of Atlas Dev, a team of software developers and 3D designers. Together, we build modern web applications, Telegram bots, and custom software solutions while continuously exploring new technologies and delivering projects for clients from different countries.',
    globalDescription: `🚀 Atlas Dev is a team of software developers and 3D designers dedicated to building modern digital products, exploring new technologies, and continuously improving our engineering skills.

Together with Aleksan Vartapetyan and Dmitriy Zdvortsov, I co-founded Atlas Dev to create a collaborative environment where we could develop innovative solutions, experiment with new technologies, and work on real commercial projects.

Over time, our team has successfully delivered multiple projects for companies and private clients from different countries. Among our work are large-scale web applications, a comprehensive cargo management platform, Telegram bots, business websites, and various custom software solutions tailored to client requirements.

As a Full-Stack Developer, I participated in designing application architecture, developing frontend and backend functionality, integrating APIs, implementing business logic, and collaborating closely with teammates throughout the entire development process.

Atlas Dev has given me valuable experience in teamwork, software architecture, solving real business problems, and delivering production-ready applications.

🛠 Areas of Expertise

• Full-Stack Web Development
• Frontend Development
• Backend Development
• Telegram Bot Development
• REST API Integration
• Software Architecture
• Team Collaboration
• Research & Development
• Custom Business Solutions`,
    image: AtlasDevLogo,
    photos: [],
  },

  {
    title: 'ChefAI from Atlas Dev',
    description:
      'ChefAI is an AI-powered SaaS application that helps users generate recipes, create personalized meal plans, and manage their nutrition using artificial intelligence. The project was developed in collaboration with Aleksan Vartapetyan as part of Atlas Dev.',
    globalDescription: `🍳 ChefAI is an AI-powered SaaS platform designed to become a personal cooking assistant. Instead of spending time searching for recipes or planning meals, users simply describe what they want, and the AI generates personalized recipes, meal plans, and cooking guidance.

The project was developed together with Aleksan Vartapetyan as part of Atlas Dev. Our goal was to create an intelligent application that combines modern frontend technologies with the power of artificial intelligence to simplify everyday cooking and nutrition planning.

ChefAI allows users to generate recipes from available ingredients, build personalized diet plans based on fitness or lifestyle goals, analyze food images, create grocery shopping lists, and communicate with an AI assistant in real time.

As a Full-Stack Developer, I participated in designing the application architecture, developing the frontend, integrating AI capabilities through the OpenAI API, implementing business logic, and building a fast, responsive, and user-friendly interface.

🛠 Tech Stack

Vue 3, TypeScript, Vue Router, Tailwind CSS v4, Vite, OpenAI API, Axios, Marked, DOMPurify, Node.js

💡 Key Features

• AI-powered recipe generation
• Personalized meal and nutrition planning
• Image-to-recipe recognition
• Smart grocery list generation
• AI cooking assistant with conversational interface
• Responsive SPA architecture
• Secure AI response rendering

🌍 Outcome

ChefAI demonstrates how artificial intelligence can simplify everyday life by transforming cooking, meal planning, and nutrition management into a simple conversation. The project showcases practical AI integration, modern frontend architecture, and the development of a production-ready SaaS application.`,
    image: chefAi,
    photos: [chefAi, ChefAi_demonstration, chefAi_second_demo],
    link: 'https://chef-ai-sigma-ten.vercel.app',
  },

  {
    title: 'MechAI from Atlas Dev',
    description:
      'MechAI is an AI-powered web application that helps users make smarter and safer vehicle purchasing decisions. The platform analyzes car listings, estimates ownership costs, and uses artificial intelligence to detect visible vehicle damage from uploaded images. The project was developed by the three co-founders of Atlas Dev.',
    globalDescription: `🚗 MechAI is an AI-powered web application built to simplify the car-buying process by providing users with intelligent insights, market analysis, and AI-assisted vehicle inspections.

The project was developed by the three co-founders of Atlas Dev — Ibrahim Chekmazov, Aleksan Vartapetyan, and Dmitriy Zdvortsov. Our goal was to create a smart assistant that helps users make faster, safer, and more informed vehicle purchasing decisions.

MechAI combines artificial intelligence with modern web technologies to analyze vehicle listings, compare available options, estimate ownership costs, and provide personalized recommendations based on user preferences.

One of the core features of the platform is AI-powered vehicle damage analysis. Users can upload photos of a vehicle, and the system identifies visible damages, highlights potential risks, and provides insights that can help with vehicle evaluation and price negotiations.

As a Full-Stack Developer, I contributed to the application architecture, frontend development, AI integration, implementation of application logic, and building a responsive interface focused on performance and usability.

🛠 Tech Stack

Vue 3, TypeScript, Vue Router, Tailwind CSS, Vite, OpenAI API, DOMPurify, Marked

💡 Key Features

• AI-powered vehicle analysis  
• Smart car comparison  
• Vehicle purchase recommendations  
• Ownership cost estimation  
• AI-based damage detection from images  
• Responsive SPA architecture  
• Secure rendering of AI-generated content  

🌍 Outcome

MechAI demonstrates how artificial intelligence can simplify complex purchasing decisions by transforming vehicle research and inspection into an interactive AI-assisted experience.

The project showcases practical AI integration, modern frontend architecture, and the development of a scalable MVP product.

🚀 Status

MechAI is currently in the MVP stage, with ongoing development and future plans to introduce more advanced AI analytics and improved vehicle recognition capabilities.`,
    image: MechAi_Logo,
    photos: [
      Screenshot_mechAi,
      Screenshot_mechAi_two,
      Screenshot_mechAi_three,
      Screenshot_mechAi_four,
      Screenshot_mechAi_five,
    ],
  },

  {
    title: 'Luci from Atlas Dev',
    description:
      'Luci is a mobile marketplace application for discovering and booking beauty services and massage providers in Thailand. Developed as part of Atlas Dev for an international client, the project included complete UI implementation, booking flows, payment integration, and real-time user interactions using React Native.',
    globalDescription: `📱 Luci is a mobile application designed to simplify the process of finding and booking beauty services, massage salons, and independent providers in Thailand.

The project was developed as part of Atlas Dev together with Aleksan Vartapetyan for an international client from the United States. The application was delivered through Fiverr and focused on creating a complete marketplace experience, from discovering services to booking appointments and completing payments.

Luci combines location-based service discovery, appointment scheduling, payment processing, and real-time communication into a single mobile platform.

As part of the development team, I was responsible for implementing the complete user interface, building the booking experience, creating service cards, developing user flows, and integrating frontend functionality with backend services.

The application provides users with a Tinder-like discovery experience, allowing them to explore nearby providers, view available services, select appointment times, and complete secure payments.

🛠 Tech Stack

React Native, Expo, TypeScript, React Navigation, Firebase, Firebase Cloud Functions, Socket.io, Stripe React Native SDK, Google Sign-In, Expo Location, React Native Geocoding

💡 Key Features

• Location-based service discovery
• Beauty salon and massage provider marketplace
• Tinder-style swipe interface
• Appointment booking system
• Calendar and availability management
• Stripe payment integration
• User authentication
• Real-time communication with Socket.io
• Service filtering and categorization
• Provider profiles and image galleries
• Push notifications and booking updates

⚙️ Architecture & Focus

The main focus of the project was building a scalable and user-friendly mobile marketplace with:

• High-performance React Native architecture
• Smooth mobile user experience
• Secure authentication and payments
• Real-time communication
• Location-aware discovery features

🌍 Outcome

Luci is a fully functional mobile marketplace application that connects customers with beauty and wellness providers in Thailand.

The project provided valuable experience in developing production-level mobile applications, integrating third-party services, implementing payment systems, and delivering a complete client solution for an international market.`,
    image: Luci_logo,
    photos: [Luci_photo_one, luci_photo_two, luci_photo_three, luci_photo_four, luci_photo_five],
  },
]

const aboutMe = `
I am a Full-Stack Developer with over 4 years of experience building modern web and mobile applications. My expertise includes frontend development, backend architecture, cloud solutions, and AI-powered products using technologies such as Vue.js, React, React Native, TypeScript, Node.js, and Firebase.

I completed an internship at Trood, where I worked with Vue 3, TypeScript, and Firebase. I later contributed as a Full-Stack Developer to the Cigar Club platform, developing core frontend features, backend functionality, improving application architecture, and implementing scalable Firebase solutions.

I hold two university diplomas in Software Engineering and have received recommendation letters recognizing my technical skills and professional contribution.

I am also a Co-founder of AtlasDev, alongside Aleksan Vartapetyan and Dmitriy Zdvortsov. Together, we design and develop AI-powered and custom software solutions for clients worldwide while actively building innovative products and seeking long-term partnerships and investment opportunities.
`
