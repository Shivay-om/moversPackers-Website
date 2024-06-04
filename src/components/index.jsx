import truck from "../images/truck.png"
import airplane from "../images/airplane.png"
import ship from "../images/ship.png"
import s1 from "../images/s1.png"
import s2 from "../images/s2.png"
import s3 from "../images/s3.png"
import s4 from "../images/s4.png"
import service1 from "../images/service1.jpg"
import service2 from "../images/service2.jpg"
import service3 from "../images/service3.jpg"
import service4 from "../images/service4.jpg"
import { BookServices, PackIcon, TruckIcon, DelieveryIcon } from '../images/Svg.jsx'
import { Address, callUs, Email, WorkHour } from '../images/Svg.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faVolumeControlPhone, faMap, faEnvelope, faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
import team4 from '../images/team4.jpg'
import client1 from '../images/client_1.jpg'
import client2 from '../images/client_2.jpg'
import client3 from '../images/client_3.jpg'


export const cards = [
    {
        image: truck,
        p: "Road Way",
        Description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
    },
    {
        image: airplane,
        p: "Air Way",
        Description: "But I must explain to you how all this mistaken idea of denouncing pleasure"
    },
    {
        image: ship,
        p: "Ocean Way",
        Description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    },
];

export const List = [
    {
        image: s1,
        p: "Pack Your Things",
        Description: "Do eiusmod tempor incididunt ut labore et dolore magna"
    },
    {
        image: s2,
        p: "Book Your Order",
        Description: "Do eiusmod tempor incididunt ut labore et dolore magna"
    },
    {
        image: s3,
        p: "Move Your Things",
        Description: "Do eiusmod tempor incididunt ut labore et dolore magna"
    },
    {
        image: s4,
        p: "Deliver Your Things",
        Description: "Do eiusmod tempor incididunt ut labore et dolore magna"
    },
];


export const Services = [
    {
        image: service1,
        title: "Poineers in Domestic Shifting",
        description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        read: "Read More..."
    },
    {
        image: service2,
        title: "Household/Car/Bike Shifting",
        description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        read: "Read More..."
    },
    {
        image: service3,
        title: "International Shifting",
        description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        read: "Read More..."
    },
    {
        image: service4,
        title: "Corporate Shifting",
        description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        read: "Read More..."
    },

];

export const ProcessList = [
    {
        image: BookServices,
        title: "Book Services",
        Description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
        image: PackIcon,
        title: "Packing",
        Description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
        image: TruckIcon,
        title: "Safely Moving",
        Description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
        image: DelieveryIcon,
        title: "Doorstep Delivery",
        Description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
];

export const ConatctList = [
    {
        image: Address,
        title: "Book Services",
        Description: "7336 Wintergreen Ave. Montclair, NJ 07042"
    },
    {
        image: callUs,
        title: "Packing",
        Description: "(+1800) 12345-6789 (+1800) 12345-6789"
    },
    {
        image: Email,
        title: "Safely Moving",
        Description: "info@mover.com info@mover.com"
    },
    {
        image: WorkHour,
        title: "Doorstep Delivery",
        Description: "Mon - Fri 10:00AM Sunday - Closed"
    },
];

export const CardSvg = () => {
    return (
        <svg
            width="100px"
            height="100px"
            fill= "none"
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink"
            transform="rotate(180)"
            className="iconCard"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            style={{ enableBackground: 'new 0 0 512 512' }}
        >   
            <g>
                <path
                    className="transition duration-300"
                    d="M4.7 17.7c-1-1.1-1.6-2.3-1.6-4.3 0-3.5 2.5-6.6 6-8.2l.9 1.3c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.9-.3 1.8.2 3.2 1.6 3.2 3.5 0 .9-.4 1.8-1 2.5-.7.7-1.5 1-2.5 1-1.1 0-2.1-.5-2.7-1.1zm10 0c-1-1.1-1.6-2.3-1.6-4.3 0-3.5 2.5-6.6 6-8.2l.9 1.3c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.9-.3 1.8.2 3.2 1.6 3.2 3.5 0 .9-.4 1.8-1 2.5s-1.5 1-2.5 1c-1.1 0-2.1-.5-2.7-1.1z" />
            </g>
        </svg>

    )
}

export const cardsData = [
    {
        imageUrl: client1,
        name: 'John Doe',
        role: 'Developer',
        about: 'How about if I sleep a little bit longer and forget all nonsense", he thought, but that was something he was unable to do.',
        svgIcon: <CardSvg />
    },
    {
        imageUrl: client2,
        name: 'Ingredia Nutrisha',
        role: 'HR Manager',
        about: 'How about if I sleep a little bit longer and forget all nonsense", he thought, but that was something he was unable to do.',
        svgIcon: <CardSvg />
    },
    {
        imageUrl: client3,
        name: 'Tommy Milliam',
        role: 'SEO Manager',
        about: 'How about if I sleep a little bit longer and forget all nonsense", he thought, but that was something he was unable to do.',
        svgIcon: <CardSvg />
    },

];


// for footer section
export const SocialIcons = [
    { img: <FontAwesomeIcon icon={faFacebookF} /> },
    { img: <FontAwesomeIcon icon={faTwitter} /> },
    { img: <FontAwesomeIcon icon={faLinkedinIn} /> },
    { img: <FontAwesomeIcon icon={faInstagram} /> }
]



export const teamData = [
    {
        imageUrl: team1,
        title: 'Bailey Wonger',
        subtitle: 'Delivery boy'
    },
    {
        imageUrl: team2,
        title: 'Pelican Steve',
        subtitle: 'Driver'
    },
    {
        imageUrl: team3,
        title: 'Phillip Anthropy',
        subtitle: 'CEO'
    },
    {
        imageUrl: team4,
        title: 'Gustav Purpleson',
        subtitle: 'Manager'
    }
]

// for footer section
const icon = <FontAwesomeIcon icon={faCircleNotch} />
export const serviceLinks = [
    { icon: icon, name: 'Corporate Relocation' },
    { icon: icon, name: 'Moving Overseas' },
    { icon: icon, name: 'Moving Locally' },
    { icon: icon, name: 'Commercial Reloaction' },
    { icon: icon, name: 'Services' }
];

export const quickLinks = [
    { icon: icon, name: 'Additional Services' },
    { icon: icon, name: 'Contact Us' },
    { icon: icon, name: 'Storage' },
    { icon: icon, name: 'Insurence' },
    { icon: icon, name: 'Quality Policy Statment' }
];

export const contactInfo = [
    {
        icon: <FontAwesomeIcon icon={faMap} />,
        text: '2718 Ashwood Drive Bedford, IA 50833'
    },
    {
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        text: 'Phone: (123) 456-7890'
    },
    {
        icon: <FontAwesomeIcon icon={faVolumeControlPhone} />,
        text: '+1-404-555-0154'
    },
];