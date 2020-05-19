import Edo from "../assets/edo.jpg";
import Malcolm from "../assets/malcolm.jpg";

export const MentorsList = [
  {
    id: 1,
    firstName: "Edo",
    lastName: "Molhoek",
    role: "Campus Manager",
    profilePic: Edo,
    review: [],
  },
  {
    id: 2,
    firstName: "Malcolm R.",
    lastName: "Kente",
    role: "Lead Instructor",
    profilePic: Malcolm,
    review: [
      [
        "A great mix of individuals that make up this fantastic team of Junior Developers. I had the pleasure of guiding and mentoring them through the start of their journey in web development.",
      ],
      [
        "They have shown a desire to learn and become better. Managing to accomplish 5 months in the bootcamp and getting the adequate tools for full stack web development. In the end, they have knowledge of HTML, CSS, JavaScript, React.js, Node.js, SQL, and Agile practices (SCRUM).",
      ],
      [
        "I’m only positive that each one of them will make a great addition to any work environment!",
      ],
    ],
  },
];
