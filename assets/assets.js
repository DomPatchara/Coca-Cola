import blog_1 from './1.jpg'
import blog_2 from './2.jpg'
import blog_3 from './3.jpg'
import blog_4 from './4.jpg'
import fanta1 from './fanta1.png'
import fanta2 from './fanta2.png'
import fanta3 from './fanta3.png'
import juice from './juice.png'
import logo from './logo.png'
import splash from './splash.png'
import credit_cards from './credit-cards.webp'




export const assets = {
    blog_1,
    blog_2,
    blog_3,
    blog_4,
    fanta1,
    fanta2,
    fanta3,
    juice,
    logo,
    splash,
    credit_cards
}

export const HeroData = [
    {
        id:1,
        image: fanta1,
        title: "Orange Fanta",
        subtitle: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Labore suscipit quaerat ratione adipisci nisi alias accusamus quam quiaAssumenda esse magni eius voluptatum quod pariatur quibusdam molestias odio quam earum",
        price: "$40",
        modal: "Orange",
        bgColor: "#cf4f00",
        delay: 0.5
    },
    {
        id:2,
        image: fanta2,
        title: "Cola Zero",
        subtitle: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Labore suscipit quaerat ratione adipisci nisi alias accusamus quam quiaAssumenda esse magni eius voluptatum quod pariatur quibusdam molestias odio quam earum",
        price: "$100",
        modal: "Zero",
        bgColor: "#727272",
        delay: 0.8
    },
    {
        id:1,
        image: fanta3,
        title: "Coca Cola",
        subtitle: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Labore suscipit quaerat ratione adipisci nisi alias accusamus quam quiaAssumenda esse magni eius voluptatum quod pariatur quibusdam molestias odio quam earum",
        price: "$110",
        modal: "Cola",
        bgColor: "#ac1a00",
        delay: 1.1
    }
]

export const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#"
    },
    {
        id: 2,
        title: "Category",
        link: "#"
    },
    {
        id: 3,
        title: "Blog",
        link: "#"
    },
    {
        id: 4,
        title: "About",
        link: "#"
    },
    {
        id: 5,
        title: "Contact",
        link: "#"
    }
]

export const BlogsData = [
    {
        id:1,
        title: "Lorem ispas asdasdpa dasdpaksdasd asdad.",
        desc: "Lorem ispas asdasdpa dasdpaksdasd asdad. Lorem ispas asdasdpa dasdpaksdasd asdad. Lorem ispas asdasdpa dasdpaksdasd asdad.",
        link: "#",
        image: blog_1
    },
    {
        id:2,
        title: "Lorem ispas asdasdpa dasdpaksdasd asdad.",
        desc: "Lorem ispas asdasdpa dasdpaksdasd asdad. Lorem ispas asdasdpa dasdpaksdasd asdad. Lorem ispas asdasdpa dasdpaksdasd asdad.",
        link: "#",
        image: blog_2
    },
    {
        id:3,
        title: "Lorem ispas asdasdpa dasdpaksdasd asdad.",
        desc: "Lorem ispas asdasdpa dasdpaksdasd asdad. Lorem ispas asdasdpa dasdpaksdasd asdad. Lorem ispas asdasdpa dasdpaksdasd asdad.",
        link: "#",
        image: blog_3
    },
    {
        id:4,
        title: "Lorem ispas asdasdpa dasdpaksdasd asdad.",
        desc: "Lorem ispas asdasdpa dasdpaksdasd asdad. Lorem ispas asdasdpa dasdpaksdasd asdad. Lorem ispas asdasdpa dasdpaksdasd asdad.",
        link: "#",
        image: blog_4
    },
]

export const faqData = [
    {
      question: "What is Fanta?",
      answer:
        "Fanta is a popular fruit-flavored carbonated soft drink created by The Coca-Cola Company.",
    },
    {
      question: "What flavors does Fanta offer?",
      answer:
        "Fanta offers a variety of flavors including orange, grape, pineapple, and more!",
    },
    {
      question: "Is Fanta gluten-free?",
      answer:
        "Yes, Fanta is gluten-free, making it suitable for those with gluten intolerance.",
    },
    {
      question: "How many calories are in a can of Fanta?",
      answer: "A 12 oz can of Fanta Orange contains about 160 calories.",
    },
  ];