import { LogoReact } from '@styled-icons/ionicons-solid/LogoReact';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { Redux } from '@styled-icons/simple-icons/Redux';
import { Express } from '@styled-icons/simple-icons/Express';
import { Postgresql } from '@styled-icons/simple-icons/Postgresql';
import { Apollographql } from '@styled-icons/simple-icons/Apollographql';
import { Graphql } from '@styled-icons/simple-icons/Graphql';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { v4 } from "uuid";
import { Mongodb } from '@styled-icons/simple-icons/Mongodb';
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs';
import { Scrumalliance } from '@styled-icons/simple-icons/Scrumalliance';

export const technologies = [
    { id: v4(), name: 'React', logo: LogoReact },
    { id: v4(), name: 'Javascript', logo: Javascript },
    { id: v4(), name: 'Redux', logo: Redux },
    { id: v4(), name: 'Express', logo: Express },
    { id: v4(), name: 'Apollo', logo: Apollographql },
    { id: v4(), name: 'GraphQl', logo: Graphql },
    { id: v4(), name: 'HTML', logo: Html5 },
    { id: v4(), name: 'CSS', logo: Css3 },
    { id: v4(), name: 'MongoDB', logo: Mongodb },
    { id: v4(), name: 'NodeJS', logo: Nodejs },
    { id: v4(), name: 'Scrum', logo: Scrumalliance },
]