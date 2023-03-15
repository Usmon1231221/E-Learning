import {BiCoinStack} from 'react-icons/bi'
import {AiOutlineFileExcel} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'
import {MdLeaderboard} from 'react-icons/md'
import {SiBookstack} from 'react-icons/si'
import {AiOutlineSmile} from 'react-icons/ai'
import { hover } from '@testing-library/user-event/dist/hover'


export const CardInfo = [
    {
        icon: <BiCoinStack size={50} color={"blue"}/>,
        title: "Finance for Non-Financial Menagers",
        cost: '350$',
        videos: '15',
        viewers: '4.5k'
    },
    {
        icon: <AiOutlineFileExcel size={50} color={"blue"}/>,
        title: "How to start processing of user experience",
        cost: '250$',
        videos: '15',
        viewers: '4.5k'
    },
    {
        icon: <FaUsers size={50} color={"blue"}/>,
        title: "Stakeholder Management & Psycology",
        cost: '150$',
        videos: '15',
        viewers: '4.5k'
    },
    {
        icon: <MdLeaderboard size={50} color={"blue"}/>,
        title: "Developing Good Employee Relations",
        cost: '130$',
        videos: '15',
        viewers: '4.5k'
    },
    {
        icon: <SiBookstack size={50} color={"blue"}/>,
        title: "Werehouse and Stock Practitioner Certification",
        cost: '100$',
        videos: '15',
        viewers: '4.5k'
    },
    {
        icon: <AiOutlineSmile size={50} color={"blue"}/>,
        title: "Introduction to Emotionel Intelligens",
        cost: '80$',
        videos: '15',
        viewers: '4.5k'
    },
]