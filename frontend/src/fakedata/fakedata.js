import playIcon from "/icons/play-button.png";
import articleIcon from "/icons/application.png";
import certificateIcon from "/icons/certificate.png";
import cardImg from "/images/card.jpg";
import cardImg2 from "/images/card2.jpg";
import cardImg3 from "/images/card3.jpg";
import showcaseImg from "/images/showcase.jpg";
import showcaseImg2 from "/images/showcase2.jpg";
import showcaseImg3 from "/images/showcase3.jpg";
import bannerImg1 from "/images/banners/banner1.jpg";
import bannerImg2 from "/images/banners/banner2.jpg";
import bannerImg3 from "/images/banners/banner3.jpg";
import teachIcon from "/icons/teach.png";
import askIcon from "/icons/ask.png";
import groupUsersIcon from "/icons/group-users.png";

const Learnings = {
  ttl: "What you'll learn",
  points: [
    "Create their own Python Programs",
    "Become an experienced Python Programmer",
    "Parse the Web and Create their own Games",
  ],
  // prefix: "✅",
};

const courseIncludes = [
  {
    id: 1,
    img: playIcon,
    txt: "14 hours of video",
  },
  {
    id: 2,
    img: articleIcon,
    txt: "4 articles + resources",
  },
  {
    id: 3,
    img: certificateIcon,
    txt: "Certificate of completion",
  },
];

const courseDetails = {
  secs: "15",
  lects: "146",
  duration: "14h 42m",
};

const courseData = [
  {
    id: "t1",
    ttl: "Getting Started",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t11",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
        resources: [
          {
            id: "t111",
            text: "css file",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: false,
          },
        ],
      },
      {
        id: "t12",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
        resources: [
          {
            id: "t112",
            text: "css file",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: true,
          },
        ],
      },
      {
        id: "t13",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
        resources: [
          {
            id: "t113",
            text: "css file",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: false,
          },
          {
            id: "t114",
            text: "html file",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: false,
          },
        ],
      },
      {
        id: "t14",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t15",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t16",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t17",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t18",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t2",
    ttl: "Javascript Refresherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t21",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t22",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t23",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t24",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t25",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t26",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t27",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t28",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t3",
    ttl: "Javascript Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t31",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t32",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t33",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t34",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t35",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t36",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t37",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t38",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t4",
    ttl: "Javascript Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t41",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t42",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t43",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t44",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t45",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t46",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t47",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t48",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t5",
    ttl: "Javascript Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t51",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t52",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t53",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t54",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t55",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t56",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t57",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t58",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t6",
    ttl: "Javascript Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t61",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t62",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t63",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t64",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t65",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t66",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t67",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t68",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t7",
    ttl: "Javascript Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t71",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t72",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t73",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t74",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t75",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t76",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t77",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t78",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
  {
    id: "t8",
    ttl: "Javascript Refresher",
    lects: "10",
    dur: "41min",
    list: [
      {
        id: "t81",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t82",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t83",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t84",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t85",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "doc",
        desc: "This is a sample document description.",
      },
      {
        id: "t86",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: true,
        type: "video",
        desc: "",
      },
      {
        id: "t87",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "video",
        desc: "",
      },
      {
        id: "t88",
        ttl: "Welcome to the Course!",
        dur: "01:04",
        preview: false,
        type: "query",
        desc: "This is a sample document description.",
      },
    ],
  },
];

const courseReq = {
  ttl: "Requirements",
  reqs: [
    "JavaScript + HTML + CSS fundamentals are absolutely required",
    "You DON'T need to be a JavaScript expert to succeed in this course!",
    "ES6+ JavaScript knowledge is beneficial but not a must-have",
    "NO prior React or any other JS framework experience is required!",
  ],
};

const desc = `The standard Lorem Ipsum passage, used since the 1500s
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  
  1914 translation by H. Rackham
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  
  Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  
  1914 translation by H. Rackham
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."`;

const featuredReviewUserData = {
  img: "",
  name: "Obada Q.",
  courses: 23,
  reviews: 12,
  rated: 5,
  date: "Sun Apr 04 2020",
  cmmt: "An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards",
};

const instructorData = [
  {
    id: 1,
    img: "",
    name: "Avinash",
    desc: "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
    courses: 23,
    reviews: 12,
    rating: 5,
    students: 200,
    date: "Sun Apr 04 2020",
    cmmt: "An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards, An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards, An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards",
  },
];

const moreCourses = [
  {
    id: "1",
    instructor: "Avinash",
    link: "/",
    courses: [
      {
        id: "c1",
        img: cardImg,
        ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
        authDet: "Koushil Mankali, Nani",
        prc: 649,
        oldprc: 1338,
        stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
        noOfRats: 9,
      },
      {
        id: "c2",
        img: cardImg,
        ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
        authDet: "Koushil Mankali, Nani",
        prc: 649,
        oldprc: 1338,
        stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
        noOfRats: 9,
      },
    ],
  },
  {
    id: "2",
    instructor: "The codex",
    link: "/",
    courses: [
      {
        id: "c21",
        img: cardImg,
        ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
        authDet: "Koushil Mankali, Nani",
        prc: 649,
        oldprc: 1338,
        stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
        noOfRats: 9,
      },
    ],
  },
];

const courseDetData = {
  path: "/",
  img: cardImg,
  id: 1,
  ttl: "Learn Python: The Complete Python Programming Course",
  desc: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
  price: 600,
  discPrice: 3299,
  disc: 85,
  tmLeft: 7,
  rating: 4.3,
  rats: 3788,
  enrolled: 21000,
  authors: ["Avinash", "The Codex"],
  lastUpdated: new Date(),
  lang: "English",
  subTtl: "English",
};

const crsData = {
  path: "/",
  img: cardImg,
  id: 1,
  ttl: "Learn Python: The Complete Python Programming Course",
  authDet:
    "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more",
  prc: 600,
  oldprc: 3299,
  stars: { a: 2, b: 3, c: 5, d: 8, e: 9 },
  noOfRats: 5,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1000000,
  level: "Beginner Level",
  crsSubtxt:
    "Python For Beginners : This course is meant for absolute beginners in programming or in python.",
};
const crsData2 = {
  path: "/",
  img: cardImg2,
  id: 1,
  ttl: "Learn Python: The Complete Python Programming Course",
  authDet:
    "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more",
  prc: 600,
  oldprc: 3299,
  stars: { a: 2, b: 3, c: 5, d: 8, e: 9 },
  noOfRats: 5,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1000000,
  level: "Beginner Level",
  crsSubtxt:
    "Python For Beginners : This course is meant for absolute beginners in programming or in python.",
};
const crsData3 = {
  path: "/",
  img: cardImg3,
  id: 1,
  ttl: "Learn Python: The Complete Python Programming Course",
  authDet:
    "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more",
  prc: 600,
  oldprc: 3299,
  stars: { a: 2, b: 3, c: 5, d: 8, e: 9 },
  noOfRats: 5,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1000000,
  level: "Beginner Level",
  crsSubtxt:
    "Python For Beginners : This course is meant for absolute beginners in programming or in python.",
};

const coursesData = [
  crsData,
  crsData,
  crsData,
  crsData,
  crsData,
  crsData,
  crsData,
  crsData,
  crsData,
  crsData,
  crsData,
  crsData,
];
const coursesData2 = [
  crsData2,
  crsData2,
  crsData2,
  crsData2,
  crsData2,
  crsData2,
  crsData2,
  crsData2,
  crsData2,
  crsData2,
  crsData2,
  crsData2,
];
const coursesData3 = [
  crsData3,
  crsData3,
  crsData3,
  crsData3,
  crsData3,
  crsData3,
  crsData3,
  crsData3,
  crsData3,
  crsData3,
  crsData3,
  crsData3,
];

const crsDataWO = {
  path: "/course/view/video",
  img: cardImg3,
  id: 1,
  ttl: "Learn Python: The Complete Python Programming Course Learn Python: The Complete Python Programming Course",
  author: "Koushil Mankali",
  ratings: 2.5,
  courseCoveredPercent: 22.4,
};

const courseDataWithOptions = [
  crsDataWO,
  { ...crsDataWO, id: 2 },
  { ...crsDataWO, id: 3 },
  { ...crsDataWO, id: 4 },
  { ...crsDataWO, id: 5 },
  { ...crsDataWO, id: 6 },
];

const det = {
  ttl: "Become an instructor",
  desc: "Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.",
  btnTxt: "Start teaching today",
  btnLink: "/start-teaching",
  img: showcaseImg,
  dir: "left",
};
const det2 = {
  ttl: "Udemy Bussiness",
  desc: "Get unlimited access to 17,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.",
  btnTxt: "Get Udemy Business",
  btnLink: "/start-teaching",
  img: showcaseImg2,
  dir: "right",
};
const det3 = {
  ttl: "Transform your life through education",
  desc: "Learners around the world are launching new careers, advancing in their fields, and enriching their lives.",
  btnTxt: "Find out how",
  btnLink: "/start-teaching",
  img: showcaseImg3,
  dir: "left",
};

const bannerData = [
  {
    id: 1,
    img: bannerImg1,
    link: null,
    boxData: {
      ttl: "Learning that gets you",
      desc: "Skills for your present (and your future). Get started with us.",
    },
  },
  {
    id: 2,
    img: bannerImg2,
    link: "/request-a-demo",
    boxData: {
      ttl: "Unlock the power of your people",
      desc: "Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.",
    },
  },
  {
    id: 3,
    img: bannerImg3,
    link: null,
    boxData: {
      ttl: "Code your future",
      desc: "Take control of your career. Learn the latest skills in web development.",
    },
  },
];

const categoriesData = [
  {
    id: 1,
    link: "/",
    txt: "React Js",
  },
  {
    id: 2,
    link: "/",
    txt: "MongoDB",
  },
  {
    id: 3,
    link: "/",
    txt: "Node Js",
  },
  {
    id: 4,
    link: "/",
    txt: "Express Js",
  },
  {
    id: 5,
    link: "/",
    txt: "Flask",
  },
  {
    id: 6,
    link: "/",
    txt: "SQL",
  },
  {
    id: 7,
    link: "/",
    txt: "JavaScript",
  },
  {
    id: 8,
    link: "/",
    txt: "Web Development",
  },
  {
    id: 9,
    link: "/",
    txt: "TypeScript",
  },
  {
    id: 10,
    link: "/",
    txt: "Nest Js",
  },
  {
    id: 11,
    link: "/",
    txt: "Next Js",
  },
  {
    id: 12,
    link: "/",
    txt: "Web HTML",
  },
  {
    id: 13,
    link: "/",
    txt: "CSS",
  },
  {
    id: 14,
    link: "/",
    txt: "Python",
  },
];

const categoriesSubCategoriesData = [
  {
    id: 1,
    ttl: "Development",
    link: "/",
    subCatId: "subCat-1",
    sub: [
      { id: 1, ttl: "Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 2,
    ttl: "Business",
    link: "/",
    subCatId: "subCat-2",
    sub: [
      { id: 1, ttl: "Business", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
      { id: 7, ttl: "Web Development", link: "/" },
    ],
  },
  {
    id: 3,
    ttl: "Finance & Accounting",
    link: "/",
    subCatId: "subCat-3",
    sub: [
      { id: 1, ttl: "Finance & Accounting", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
      { id: 7, ttl: "Web Development", link: "/" },
    ],
  },
  {
    id: 4,
    ttl: "IT & Software",
    link: "/",
    subCatId: "subCat-4",
    sub: [
      { id: 1, ttl: "Web Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 5,
    ttl: "Office Productivity",
    link: "/",
    subCatId: "subCat-5",
    sub: [
      { id: 1, ttl: "Web Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 6,
    ttl: "Personal Development",
    link: "/",
    subCatId: "subCat-6",
    sub: [
      { id: 1, ttl: "Personal Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 7,
    ttl: "Game Development",
    link: "/",
    subCatId: "subCat-7",
    sub: [
      { id: 1, ttl: "Personal Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 8,
    ttl: "Data Science",
    link: "/",
    subCatId: "subCat-8",
    sub: [
      { id: 1, ttl: "Personal Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 9,
    ttl: "Software Development Tools",
    link: "/",
    subCatId: "subCat-9",
    sub: [
      { id: 1, ttl: "Personal Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 10,
    ttl: "No-code Development",
    link: "/",
    subCatId: "subCat-10",
    sub: [
      { id: 1, ttl: "Personal Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
];

const categorySubCategoriesData = {
  id: 1,
  ttl: "Development",
  link: "/",
  subCatId: "subCat-1",
  sub: [
    { id: 1, ttl: "Development", link: "/" },
    { id: 2, ttl: "Mobile Development", link: "/" },
    { id: 3, ttl: "Game Development", link: "/" },
    { id: 4, ttl: "App Development", link: "/" },
    { id: 5, ttl: "Cinema", link: "/" },
    { id: 6, ttl: "Photoshope", link: "/" },
    { id: 7, ttl: "Python", link: "/" },
    { id: 8, ttl: "Javascript", link: "/" },
    { id: 9, ttl: "HTML", link: "/" },
    { id: 10, ttl: "CSS", link: "/" },
    { id: 11, ttl: "PHP", link: "/" },
    { id: 12, ttl: "Camera", link: "/" },
    { id: 13, ttl: "Cinema", link: "/" },
    { id: 14, ttl: "Photoshope", link: "/" },
    { id: 15, ttl: "Python", link: "/" },
    { id: 16, ttl: "Javascript", link: "/" },
    { id: 17, ttl: "HTML", link: "/" },
    { id: 18, ttl: "CSS", link: "/" },
    { id: 19, ttl: "PHP", link: "/" },
    { id: 20, ttl: "Camera", link: "/" },
  ],
};

const coursesInCartData = [
  {
    id: 1,
    ttl: "Learn Python: The Complete Python Programming Course",
    img: cardImg,
    price: "3399",
  },
  {
    id: 2,
    ttl: "Learn Python: The Complete Python Programming Course",
    img: cardImg,
    price: "3399",
  },
];

const countryOptions = [
  { txt: "Bhutan", value: "bhutan" },
  { txt: "India", value: "india" },
];
const stateOptions = [
  { txt: "Telangana", value: "telangana" },
  { txt: "Andhra Pradesh", value: "andhra pradesh" },
];

const BigVerticalCourseCardData = [
  {
    id: 1,
    img: cardImg,
    ttl: "Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols",
    desc: "Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying",
    author: "Koushil Mankali",
    lastUpdated: new Date(),
    dur: 12,
    lectures: 22,
    level: "Intermediate",
    rats: 4.2,
    rated: 266,
    tag: "Highest Rated",
    price: 389,
    oPrice: 3499,
  },
  {
    id: 2,
    img: cardImg2,
    ttl: "Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols",
    desc: "Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying",
    author: "Koushil Mankali",
    lastUpdated: new Date(),
    dur: 12,
    lectures: 22,
    level: "Intermediate",
    rats: 4.2,
    rated: 266,
    tag: "Highest Rated",
    price: 389,
    oPrice: 3499,
  },
  {
    id: 3,
    img: cardImg3,
    ttl: "Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols",
    desc: "Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying",
    author: "Koushil Mankali",
    lastUpdated: new Date(),
    dur: 12,
    lectures: 22,
    level: "Intermediate",
    rats: 4.2,
    rated: 266,
    tag: "Highest Rated",
    price: 389,
    oPrice: 3499,
  },
];

const popularInstructorsData = [
  {
    id: 1,
    name: "Koushil Mankali",
    img: cardImg,
    majorLang: ["React Js", "React Native"],
    rating: 4.2,
    students: 39000,
    courses: 40,
  },
  {
    id: 2,
    name: "Nani Mankali",
    img: cardImg,
    majorLang: ["Python", "MySql"],
    rating: 3.8,
    students: 21000,
    courses: 22,
  },
  {
    id: 3,
    name: "Koushil Mankali",
    img: cardImg,
    majorLang: ["React Js", "React Native"],
    rating: 4.2,
    students: 39000,
    courses: 40,
  },
  {
    id: 4,
    name: "Nani Mankali",
    img: cardImg,
    majorLang: ["Python", "MySql"],
    rating: 3.8,
    students: 21000,
    courses: 22,
  },
  {
    id: 5,
    name: "Koushil Mankali",
    img: cardImg,
    majorLang: ["React Js", "React Native"],
    rating: 4.2,
    students: 39000,
    courses: 40,
  },
  {
    id: 6,
    name: "Nani Mankali",
    img: cardImg,
    majorLang: ["Python", "MySql"],
    rating: 3.8,
    students: 21000,
    courses: 22,
  },
  {
    id: 7,
    name: "Koushil Mankali",
    img: cardImg,
    majorLang: ["React Js", "React Native"],
    rating: 4.2,
    students: 39000,
    courses: 40,
  },
  {
    id: 8,
    name: "Nani Mankali",
    img: cardImg,
    majorLang: ["Python", "MySql"],
    rating: 3.8,
    students: 21000,
    courses: 22,
  },
  {
    id: 9,
    name: "Koushil Mankali",
    img: cardImg,
    majorLang: ["React Js", "React Native"],
    rating: 4.2,
    students: 39000,
    courses: 40,
  },
  {
    id: 10,
    name: "Nani Mankali",
    img: cardImg,
    majorLang: ["Python", "MySql"],
    rating: 3.8,
    students: 21000,
    courses: 22,
  },
];

const filtersData = [
  {
    id: "fd-1",
    title: "Ratings",
    slug: "ratings",
    type: "radio",
    filtersData: [
      { txt: "4.5 & up", count: "9998", stars: true, value: "4.5" },
      { txt: "4.0 & up", count: "10000", stars: true, value: "4.0" },
      { txt: "3.5 & up", count: "10000", stars: true, value: "3.5" },
      { txt: "3.0 & up", count: "10000", stars: true, value: "3.0" },
    ],
  },
  {
    id: "fd-2",
    title: "Video Duration",
    slug: "duration",
    type: "checkbox",
    filtersData: [
      { txt: "0-1 Hour", count: "1442", stars: false, value: "extraShort" },
      { txt: "1-3 Hours", count: "6918", stars: false, value: "short" },
      { txt: "3-6 Hours", count: "7240", stars: false, value: "medium" },
      { txt: "6-7 Hours", count: "8498", stars: false, value: "large" },
      { txt: "17+ Hours", count: "3502", stars: false, value: "extraLarge" },
    ],
  },
  {
    id: "fd-3",
    title: "Topic",
    slug: "topic",
    type: "checkbox",
    filtersData: [
      { txt: "Python", count: "1442", stars: false, value: "Python" },
      { txt: "JavaScript", count: "6918", stars: false, value: "JavaScript" },
      { txt: "React", count: "7240", stars: false, value: "React" },
      { txt: "NodeJs", count: "8498", stars: false, value: "NodeJs" },
      { txt: "Remix", count: "3502", stars: false, value: "Remix" },
    ],
  },
];

const toolsResources = [
  {
    id: "tr-1",
    icon: teachIcon,
    ttl: "Test Video",
    txt: "Get free feedback from Udemy video experts on your audio, video, and delivery.",
  },
  {
    id: "tr-2",
    icon: groupUsersIcon,
    ttl: "Marketplace Insights",
    txt: "Get Udemy-wide market data to create successful courses.",
  },
  {
    id: "tr-3",
    icon: askIcon,
    ttl: "Bulk coupon creation",
    txt: "Create multiple coupons at once via CSV upload.",
  },
];
const helpResources = [
  {
    id: "hr-1",
    icon: teachIcon,
    ttl: "Teaching Center",
    txt: "Find articles on Udemy teaching — from course creation to marketing.",
  },
  {
    id: "hr-2",
    icon: groupUsersIcon,
    ttl: "Instructor Community",
    txt: "Share your progress and ask other instructors questions in our community.",
  },
  {
    id: "hr-3",
    icon: askIcon,
    ttl: "Help and Support",
    txt: "Can’t find what you need? Our support team is happy to help.",
  },
];

export {
  toolsResources,
  helpResources,
  filtersData,
  popularInstructorsData,
  BigVerticalCourseCardData,
  coursesInCartData,
  coursesData2,
  coursesData3,
  courseDataWithOptions,
  countryOptions,
  stateOptions,
  categoriesData,
  categoriesSubCategoriesData,
  categorySubCategoriesData,
  bannerData,
  det,
  det2,
  det3,
  coursesData,
  Learnings,
  courseIncludes,
  courseDetails,
  courseData,
  courseReq,
  desc,
  courseDetData,
  moreCourses,
  instructorData,
  featuredReviewUserData,
};
