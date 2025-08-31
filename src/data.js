export const posts = [
  {
    id: 1,
    type: "Project",
    title: "Full-Stack PWA Task Manager",
    img: "https://placehold.co/600x400/1e293b/ffffff?text=PWA+Task+Manager",
    description:
      "A responsive and installable Progressive Web App for managing daily tasks, built with the MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "PWA"],
    githubUrl: "https://github.com/mdnm18/your-repo-link", // Replace with your actual repo link
    liveUrl: "https://your-live-link.com", // Replace with your actual live link
    content: `### Project Overview
This is a detailed description for the Full-Stack PWA Task Manager. You can describe the architecture, features, and challenges here.
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB`,
  },
  {
    id: 2,
    type: "Blog",
    title: "The Rise of Python: A Developer's Perspective",
    img: "https://placehold.co/600x400/4f46e5/ffffff?text=Python+Blog",
    description:
      "An in-depth look at why Python has become a dominant force in programming, from web development to AI/ML.",
    tags: ["Python", "AI/ML", "Web Development"],
    githubUrl: null,
    liveUrl: null,
    content: `
## The Unstoppable Momentum of Python

Python's journey from a scripting language to a global powerhouse is nothing short of remarkable. Its simplicity and readability have made it a favorite among beginners and experts alike.

### Key Areas of Dominance

1.  **Web Development:** Frameworks like Django and Flask have enabled rapid and secure web application development.
2.  **Data Science & AI/ML:** Libraries such as NumPy, Pandas, and TensorFlow are the industry standard for data analysis and machine learning.
3.  **Automation:** Its straightforward syntax makes it perfect for writing scripts to automate repetitive tasks.

### Code Example: A Simple Flask App

Here is a quick look at how easy it is to get a web server running with Flask:

\`\`\`python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

Python's versatile nature and the massive community supporting it ensure that it will remain a top choice for developers for years to come.
    `,
  },
  {
    id: 3,
    type: "Project",
    title: "IoT-Based Smart Security System",
    img: "https://placehold.co/600x400/059669/ffffff?text=IoT+Security",
    description:
      "A security system using IoT principles, featuring real-time alerts and sensor integration.",
    tags: ["IoT", "C++", "Hardware"],
    githubUrl: "https://github.com/mdnm18/your-repo-link", // Replace with your actual repo link
    liveUrl: null,
    content: `### Project Overview
This is a detailed description for the IoT-Based Smart Security System. You can describe the architecture, features, and challenges here.
- **Core Language:** C++
- **Hardware:** ESP32, PIR Sensors, etc.
- **Features:** Real-time mobile notifications.`,
  },
  {
    id: 4,
    type: "Blog",
    title: "Understanding DSA for Interviews",
    img: "https://placehold.co/600x400/b91c1c/ffffff?text=DSA+Blog",
    description:
      "Breaking down the essential Data Structures and Algorithms needed to ace technical interviews.",
    tags: ["DSA", "C++", "Java", "Interview Prep"],
    githubUrl: null,
    liveUrl: null,
    content: `## Mastering DSA for Technical Interviews
A strong foundation in Data Structures and Algorithms is crucial. This post covers the essentials.
- Arrays & Strings
- Linked Lists
- Stacks & Queues
- Trees & Graphs`,
  },
];
