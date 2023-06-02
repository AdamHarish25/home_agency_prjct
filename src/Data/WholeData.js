import pubImg1 from '../Attachments/Image/PublicHome/pubImg1.svg';
import companyPubH1 from "../Attachments/Image/PublicHome/pubCompany1.svg";
import logo from '../Attachments/Image/logo.svg';

import logo1 from '../Attachments/Image/PublicHome/Logos/logo1.svg'
import logo2 from "../Attachments/Image/PublicHome/Logos/logo2.svg";
import logo3 from "../Attachments/Image/PublicHome/Logos/logo3.svg";
import logo4 from "../Attachments/Image/PublicHome/Logos/logo4.svg";
import logo5 from "../Attachments/Image/PublicHome/Logos/logo5.svg";

import pubImg3 from '../Attachments/Image/PublicHome/pubImg3.svg';

import video1 from '../Attachments/Video/video.mp4'
import check from '../Attachments/Image/PublicHome/check.svg';
import pubImg4 from '../Attachments/Image/PublicHome/pubImg4.svg';

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


    },
  },
};


export { DataStorage };