/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vishnucharan S",
  title: "Hi all, I'm Vishnucharan",
  subTitle: emoji(
    "A passionate Computer Vision, AI and Robotics enthusiast 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/18zIG_pj3c3rMvldnI7MvL65dg9v5KVRg/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VishnucharanS",
  linkedin: "https://www.linkedin.com/in/vishnucharans/",
  gmail: "svc16122003@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What do I do",
  subTitle: "Passionate Computer Vision & Robotics Engineer, specialized in image and video perception",
  skills: [
    emoji(
      "⚡ Computer Vision & Deep Learning: Expertise in Vision, Deep Learning and AI models."
    ),
    emoji("🤖 Robotics Integration: Exploring the intersection of computer vision and robotics for intelligent systems."),
    emoji(
      "🌐 Research & Innovation: Developing cutting-edge solutions for industries."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Matlab",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "ROS2",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Photoshop",
      fontAwesomeClassname: "fas fa-image"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

  const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
      {
        schoolName: "National Institute of Technology Tiruchirappalli",
        logo: require("./assets/images/NITT_logo_transparent back.png"),
        subHeader: "Bachelor of Technology in Production Engineering (Major), & Computer science (Minor)",
        duration: "July 2021 - May 2025",
        desc: "Worked under professors for 3 research internships, 1 bachelor thesis.",
        descBullets: [ "Served as the Director of Campus Affairs, Technical Council, NITT", "Design head of NITTFEST'24, Cultural Fest", "Mentored School Children for national level competitive exams."
          
        ]
      },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Bachelor's Thesis",
      company: "NIT Trichy & CMTI",
      companylogo: require("./assets/images/image.png"),
      date: "October 2024 – Present",
      desc: "Detection and  Classification of Welding defects using Machine Vision",
      descBullets: [
        "Developed a Faster R-CNN model with ResNet-50 backbone with FPN for Defect Detection, and ResNet-18 for welding defect classification.",
        "Collaborating with CMTI – Govt. of India for further research."

      ]
    },
    {
      role: "Research Project - BharatamVerse",
      company: "NIT Trichy & NTNU, Norway",
      companylogo: require("./assets/images/NITT_logo_transparent back.png"),
      date: "October 2024 – Present",
      desc: "Bharatanatyam Pose correction for Somaesthetics",
      descBullets: ["Implementing an LSTM-based vision model for Bharatanatyam pose correction using skeletal keypoint extraction for real-time feedback "
      ]
    },
    {
      role: "Research intern - MCQ generation system",
      company: "UNSW Sydney",
      companylogo: require("./assets/images/UNSW-1-300x300.png"),
      date: "June 2024 – July 2024",
      desc: "MCQ generator based on Adaptive Learning",
      descBullets: ["Designed an adaptive learning MCQ generation system. Focused on implementing emotion recognition via Deep CNN with late fusion for facial expression analysis and eye-tracking for real-time monitoring."
      ]
    },
    {
      role: "Data Analsyt and Science intern",
      company: "Miranda Consortium",
      companylogo: require("./assets/images/Miranda Consortium.png"),
      date: "Jan 2024 – Aug 2024",
      desc: "Research and analysis of LIPIT Data",
      descBullets: ["Conducted in-depth research on LIPIT (Laser Induced Particle Impact Testing), understanding the phenomenon and its potential application using python and matlab libraries. Utilized latex, Origin Pro and excel for visualizations.",
      ]
    },
    {
      role: "Research Intern - Segmentation",
      company: "NIT Trichy",
      companylogo: require("./assets/images/NITT_logo_transparent back.png"),
      date: "Nov 2023 – Feb 2024",
      desc: "Enhancing FastSAM using tranasformers and adaptive learning",
      descBullets: ["Implementing an LSTM-based vision model for Bharatanatyam pose correction using skeletal keypoint extraction for real-time feedback "
      ]
    },
    {
      role: "Research Intern - Analysis of CPPS",
      company: "IIT Delhi",
      companylogo: require("./assets/images/iit-delhi-indian-institute-of-technology-delhi5001.webp"),
      date: "May 2023 – Aug 2023",
      desc: "Analysis of the enablers of CPPS",
      descBullets: ["Enhanced text-guided segmentation using multi-modal transformer (ClipSeg) and reduced misclassification and low confidence score using adaptive thresholding."
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const myProjectsSection = {
  title: "My Projects",
  subtitle: "Here are a few of my personal projects.",
  projects: [
    {
      projectName: "ROS2 Project",
      projectDesc: "ROS2-Based Multi-Robot Warehouse Automation.",
      points: [
        "Devloped a ROS2-based multi-robot warehouse system with YOLOv5 for object detection and AI-driven dynamic task allocation in Gazebo.",
        "Integrated Navigation Stack for path planning, collision avoidance, and inter-robot communication.",
      ],
      footerLink: [
        // {
        //   name: "View Project",
        //   url: "https://example.com",
        // },
      ],
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://drive.google.com/file/d/1TDQRU_EQ76Efc4NutrJWmpi_qoa_c2im/view?usp=sharing",
      ],
    },
  ],
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/cobra.webp"),
      projectName: "Photocobra",
      projectDesc: "An AI powered platform for Image Generation. Worked on the Reforge part of the website.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://photocobra.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 77089 51932",
  email_address: "svc16122003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  myProjectsSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
