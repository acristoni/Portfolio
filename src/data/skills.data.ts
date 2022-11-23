import { skill } from "../types/skill.type"
import JavaScript from '../assets/logo/javascript.svg'
import NestJS from '../assets/logo/nestjs.svg'
import NextJS from '../assets/logo/nextjs.svg'
import NodeJS from '../assets/logo/nodejs.svg'
import ReactJS from '../assets/logo/react.svg'
import Storybook from '../assets/logo/storybook.svg'
import TypeScript from '../assets/logo/typescript.svg'

const skills: skill[] = [
    {
        title: 'JavaScript',
        logo: JavaScript,
        description: 'It is JavaScript on Front-End and Back-End, gone are the days when this was a form-validation language!'
    },
    {
        title: 'NestJS',
        logo: NestJS,
        description: 'A framework for building efficient back-end, scalable Node.js web applications.'
    },
    {
        title: 'NextJS',
        logo: NextJS,
        description: 'A React framework focused on production and efficiency that seeks to bring together several functionalities.  '
    },
    {
        title: 'NodeJS',
        logo: NodeJS,
        description: 'Thanks to V8, we have JavaScript in the Back-End'
    },
    {
        title: 'ReactJS',
        logo: ReactJS,
        description: 'The most used JavaScript library in Front-End, React!'
    },
    {
        title: 'Storybook',
        logo: Storybook,
        description: 'Front-end componentization and documentation in one place'
    },
    {
        title: 'TypeScript',
        logo: TypeScript,
        description: 'Strongly typed JavaScript, among other goodies... TypeScript!'
    },
]

export default skills