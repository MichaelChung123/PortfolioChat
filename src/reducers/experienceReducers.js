import {
    GET_PROJECTS
} from "../actions/types.js";

const initialState = {
    projects: [
        {
            src: require('../styles/de_bug/dbg.gif'),
            title: "De_bug",
            desc: "Full-stack bug tracking web app.",
            techstack: ["React", "JavaScript", "Node", "PostgreSQL", "Bootstrap"]
        },
        {
            src: require('../styles/ontime/ot.gif'),
            title: "OnTime",
            desc: "Full-stack scheduling web app.",
            techstack: ["React", "JavaScript", "Rails", "PostgreSQL"]
        },
        {
            src: require('../styles/bjuk/bjuk.png'),
            title: "Bjük",
            desc: "User driven resource wall that promotes educational sharing.",
            techstack: ["JavaScript", "Node", "PostgreSQL", "Bootstrap", "jQuery"]
        }
    ],
    employment: [
        {
            src: require('../styles/firepr.png'),
            role: "Web Developer",
            title: "Fire PR",
            desc: "Developed software solutions for WordPress websites. Involved in tasks such as project management, website design, and developing web applications. Integrated new updates to client websites to improve their business's SEO and overall web presence."
        },
        {
            src: require('../styles/freelance.png'),
            role: "Developer",
            title: "Freelance",
            desc: "Responsible for software application development (user requirement gathering, designing and developing code). A part of decision making meetings with clients for deciding any technical specifications to be used across their solution."
        },
        {
            src: require('../styles/ea.png'),
            role: "QA Development Support",
            title: "Electronic Arts (EA)",
            desc: "Delivered meaningful feedback to the EA Developers by reviewing and testing specific game flow for FIFA 2020. Expanded my project management skills working with a large team of developers, and am thus able to resolve many hindering bugs to strengthen the product for launch."
        },
        {
            src: require('../styles/squirrel.png'),
            role: "Support Agent",
            title: "Squirrel Systems",
            desc: "Assisted customers in troubleshooting and maintaining their restaurant POS (Point of Sale) Systems.  Built valuable product service skills by collaborating with customers remotely and over the phone."
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                state
            }
        default:
            return state;
    }
}