import pubImg1 from "../Attachments/Image/PublicHome/pubImg1.svg";
import companyPubH1 from "../Attachments/Image/PublicHome/pubCompany1.svg";
import logo from "../Attachments/Image/logo.svg";

import logo1 from "../Attachments/Image/PublicHome/Logos/logo1.svg";
import logo2 from "../Attachments/Image/PublicHome/Logos/logo2.svg";
import logo3 from "../Attachments/Image/PublicHome/Logos/logo3.svg";
import logo4 from "../Attachments/Image/PublicHome/Logos/logo4.svg";
import logo5 from "../Attachments/Image/PublicHome/Logos/logo5.svg";

import pubImg3 from "../Attachments/Image/PublicHome/pubImg3.svg";

import video1 from "../Attachments/Video/video.mp4";
import check from "../Attachments/Image/PublicHome/check.svg";
import pubImg4 from "../Attachments/Image/PublicHome/pubImg4.svg";
import pubImg4_2 from "../Attachments/Image/PublicHome/pubImg4-2.svg";

import pubImg5 from "../Attachments/Image/PublicHome/pubImg5.svg";
import pubImg5_2 from "../Attachments/Image/PublicHome/pubImg5-2.svg";
import pubList5_1 from "../Attachments/Image/PublicHome/Pub5List/list1.svg";
import pubList5_2 from "../Attachments/Image/PublicHome/Pub5List/list2.svg";
import pubList5_3 from "../Attachments/Image/PublicHome/Pub5List/list3.svg";

import pubList6_1 from "../Attachments/Image/PublicHome/Pub6List/list1.svg";
import pubList6_2 from "../Attachments/Image/PublicHome/Pub6List/list2.svg";
import pubList6_3 from "../Attachments/Image/PublicHome/Pub6List/list3.svg";
import pubList6_4 from "../Attachments/Image/PublicHome/Pub6List/list4.svg";
import pubImg6 from "../Attachments/Image/PublicHome/pubImg6.png";
import pubImg6_2 from "../Attachments/Image/PublicHome/pubImg6-2.png";
import pubImg6_3 from "../Attachments/Image/PublicHome/pubImg6-3.png";

import pubCarItem1 from "../Attachments/Image/PublicHome/Pub8Carousel/item1.png";
import pubCarItem2 from "../Attachments/Image/PublicHome/Pub8Carousel/item2.png";
import pubCarItem3 from "../Attachments/Image/PublicHome/Pub8Carousel/item3.png";
import pubCarItem4 from "../Attachments/Image/PublicHome/Pub8Carousel/item4.png";
import pubCarItem5 from "../Attachments/Image/PublicHome/Pub8Carousel/item5.png";

import pubImg9 from "../Attachments/Image/PublicHome/pubImg9.png";
import pubImg9_2 from "../Attachments/Image/PublicHome/quote.png";

const DataStorage = {
  Navbar: {
    logo: logo,
    menus: [
      {
        title: "About",
        link: "/About",
      },
      {
        title: "Services",
        link: "/Services",
      },
      {
        title: "Pricing",
        link: "/Pricing",
      },
      {
        title: "Blog",
        link: "/Blog",
      },
    ],
    button: {
      link: "/Contact",
      title: "Contact",
    },
  },
  PublicHome: {
    page_1: {
      img: pubImg1,
      header: "MODERN STUDIO",
      title: "We’re Help To Build Your Dream Project",
      subtitle:
        "Agency provides a full service range including technical skills, design, business understanding.",
      button1: "How We Work",
      button2: "Contact Us",
      companyPic: companyPubH1,
      companyName: "Meta Inc.",
      companyFeedback: `"Put themselves in the merchant's shoes"`,
    },
    page_2: [
      {
        img: logo1,
        title: "DigitalSide Logo",
      },
      {
        img: logo2,
        title: "Vortex Logo",
      },
      {
        img: logo3,
        title: "TravelExplorer Logo",
      },
      {
        img: logo4,
        title: "Fuzion Logo",
      },
      {
        img: logo5,
        title: "MediaFury Logo",
      },
    ],

    page_3: {
      img: pubImg3,
      header1: "ABOUT",
      title1: "An Experience Design Agency",
      sub: "Provides a full service range",
      paragraph1:
        "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.",
      button1: {
        title: "ABOUT US",
        link: "/About",
      },

      list1: [
        {
          title: "Years of experience",
          count: "42%",
        },
        {
          title: "Agency members",
          count: "72",
        },
        {
          title: "Projects complete",
          count: "5.000",
        },
      ],

      header2: "HOW WE WORK",
      title2: "Making Your Projects Look Awesome",
      paragraph2:
        "Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.",
      button2: {
        title: "Read More",
        link: "/",
      },

      list2: [
        {
          title: "Full service range including",
        },
        {
          title: "Technical skills, design, business",
        },
        {
          title: "Themselves in the merchant's",
        },
      ],
    },

    page_4: {
      video: video1,
      header1: "Video Reel",
      title1: "Unlock The Greatest Value Possible",
      subtitle1:
        "Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.",

      header2: "FEATURES",
      title2: "Give Your Site A New Look",
      subtitle2:
        "Service range including technical skills, design, business understanding.",
      list1: [
        {
          title: "Range including technical skills",
          dot: check,
        },
        {
          title: "Business understanding",
          dot: check,
        },
        {
          title: "Partner on the long run",
          dot: check,
        },
      ],
      img: pubImg4,

      header3: "FEATURES",
      subtitle3: "Long run, and work as an extension of the merchant's team.",
      button: {
        title: "Read More",
        link: "/",
      },
      list2: [
        {
          img: pubImg4_2,
          title: "Professional",
          subtitle: "Full service range including technical skills, design.",
          color: "bg-[#FFFFFF] border-[#F3D1BF] shadow-xl",
        },
        {
          img: "",
          title: "Accessibility",
          subtitle: "Business understanding, ability to put themselves.",
          color: "border-[#F3D1BF] bg-transparent shadow-none",
        },
      ],
    },

    page_5: {
      header: "SERVICE",

      title1: "Making Complex Digital Products",
      img: pubImg5,
      subtitle:
        "Agency provides a full service range including technical skills, design, business.",
      customer: {
        img: pubImg5_2,
        quote: `"Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."`,
        name: "Jenny Murtaugh",
      },
      button: {
        title: "Explore",
        link: "/",
      },

      title2: "How Our Agency Can Help",
      list: [
        {
          img: pubList5_1,
          title: "Design",
          subtitle:
            "Agency provides a full service range including technical skills, design.",
          buttonTitle: "Learn More",
          buttonLink: "/",
        },
        {
          img: pubList5_2,
          title: "Development",
          subtitle:
            "Full service range including technical skills, design, business.",
          buttonTitle: "Discover More",
          buttonLink: "/",
        },
        {
          img: pubList5_3,
          title: "Marketing",
          subtitle:
            "Technical skills, design, business understanding, ability.",
          buttonTitle: "Explore Now",
          buttonLink: "/",
        },
      ],
    },

    page_6: {
      header: "Portfolio",
      title: "Latest Work",

      gridList: [
        {
          img: pubList6_1,
          size: "col-start-1 row-start-1",
          title: "Sofa",
          tag: "Design",
        },

        {
          img: pubList6_2,
          size: "col-start-2 col-end-4 row-start-1",
          title: "Keyboard",
          tag: "Branding",
        },

        {
          img: pubList6_3,
          size: "col-start-1 col-end-3 row-start-2",
          title: "Work Media",
          tag: "Illustration",
        },

        {
          img: pubList6_4,
          size: "col-start-3 row-start-2",
          title: "DDDone",
          tag: "Motion",
        },
      ],

      filterList: [
        {
          title: "Show All",
          filter: "All",
        },
        {
          title: "Design",
          filter: "Design",
        },
        {
          title: "Branding",
          filter: "Branding",
        },
        {
          title: "Illustration",
          filter: "Illustration",
        },
        {
          title: "Motion",
          filter: "Motion",
        },
      ],

      button: {
        link: "/",
        title: "Explore more",
      },

      banner: {
        header: "Get started",
        title: "We Help Companies Move Faster",
        button: "Contact Us",
        img1: pubImg6,
        img2: pubImg6_2,
        img3: pubImg6_3,
      },
    },

    page_7: {
      header: "Events",
      title: "Explore Future Conferences",

      list: [
        {
          date: "3",
          year: "2021",
          month: "November",
          timeDuration: "9:00 am - 3:00 pm",
          title: "Design Weeks",
          subtitle:
            "Digital agency is a business you hire to outsource your digital.",
          button: {
            title: "Explore Now",
            link: "/",
          },
        },
        {
          date: "15",
          year: "2021",
          month: "November",
          timeDuration: "1:00 pm - 8:00 pm",
          title: "Interior Design",
          subtitle: "Marketing efforts, instead of handling in-house.",
          button: {
            title: "Explore Now",
            link: "/",
          },
        },
        {
          date: "2",
          year: "2021",
          month: "December",
          timeDuration: "10:00 am - 2:00 pm",
          title: "The F design events",
          subtitle:
            "Provide your business with a variety of digital solutions to promote.",
          button: {
            title: "Explore Now",
            link: "/",
          },
        },
      ],

      button: {
        title: "Explore More",
        link: "/",
      },
    },

    page_8: {
      title: "Team of Designers and Developers",
      header: "Our Team",

      carousel: [
        {
          img: pubCarItem1,
          name: "Azah Anyeni",
          role: "Designer",
        },
        {
          img: pubCarItem2,
          name: "Roelof Bekkenenks",
          role: "React Developer",
        },
        {
          img: pubCarItem3,
          name: "Leonardo Oliveira",
          role: "Illustrator",
        },
        {
          img: pubCarItem4,
          name: "Izabella Tabakova",
          role: "Product Designer",
        },
        {
          img: pubCarItem5,
          name: "Manilla Yadhavi",
          role: "3D Illustrator",
        },
      ],
    },

    page_9: {
      header: "Founder Words",
      title:
        "Digital agency is a business you hire to outsource your digital marketing efforts",
      background: pubImg9_2,

      name: "Ren Delan",
      role: "Founder",
      img: pubImg9,
    },

    page_10: {
      header: "Testimonial",
      title: "What our Clients Saying",

      button: {
        link: "",
        title: "See All",
      },

      card: [
        {
          rating: 5, // max 5 and round value only, ex: 4 

          comment: `A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. 
          They can provide your business with a variety of digital solutions to promote your product or service online and help you.`,
          name: "Alan Marti",
          company: "Meta.inc",
        },

        {
          rating: 5, // max 5 and round value only, ex: 4 

          comment: `Provide your business with a variety of digital solutions to promote your product or service online.`,
          name: "Richardo Kann",
          company: "Photogram",
        },

        {
          rating: 5, // max 5 and round value only, ex: 4 

          comment: `Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.`,
          name: "Graham Griffiths",
          company: "Twitor",
        },

        {
          rating: 5, // max 5 and round value only, ex: 4 

          comment: `Promote your product or service online and help you hit your marketing goals and grow your business.`,
          name: "Maria Trofimova",
          company: "Whochat",
        },
      ],
    },
  },
};

export { DataStorage };
