import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import ProjectCard from '../containers/ProjectCard';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Background, Header,
    HeaderDescription, HeaderTitle, IconWrapper
} from './styles';
import IProject from '../@types/IProject';

import handyZabbixImg from "../imgs/hz.png";
import sacImg from "../imgs/sac.png";
import fsImg from "../imgs/fs.png";
import tvImg from "../imgs/tv.png";

const projects: IProject[] = [
    {
        name: "Handy Zabbix",
        description: "Zabbix is an open-source software tool to monitor IT infrastructure such as networks, servers, virtual machines, and cloud services. The app is able to notify the user when a problem is created and display main features such as graphs and host informations",
        image: handyZabbixImg,
        linkTitle: "Home Page",
        link: "https://hz.kuhn.dev.br",
        codeTitle: "Google Play",
        code: "https://play.google.com/store/apps/details?id=br.dev.kuhn.handyzabbix",
        stackIcons: [['fab', 'github'], ["fab", 'react'], ["fab", "android"], ["fab", "google-play"]]
    },
    {
        name: "Sac App",
        description: "A simple prototype of an Customer Service mobile application built with React Native, NodeJS, Express, Sequelize and Typescript",
        image: sacImg,
        linkTitle: "Results",
        link: "https://github.com/jackanakin/sacapp#sac-app",
        codeTitle: "GitHub",
        code: "https://github.com/jackanakin/sacapp",
        stackIcons: [['fab', 'github'], ["fab", 'react'], ["fab", "android"], ["fab", "node-js"]]
    },
    {
        name: "Friendly System",
        description: "An web application built with ReactJS, NodeJS and Python that integrates a local ERP customer database with data collected with SNMP protocol on FiberHome devices allowing network admins to view customers premises equipments operational parameters such as signal level, online status",
        image: fsImg,
        linkTitle: "Results",
        link: "https://github.com/jackanakin/friendly-system#friendly-system",
        codeTitle: "GitHub",
        code: "https://github.com/jackanakin/friendly-system",
        stackIcons: [['fab', 'github'], ["fab", 'react'], ["fab", "node-js"], ["fab", "python"], ["fab", "internet-explorer"], ["fa", "network-wired"]]
    },
    {
        name: "TV App",
        description: "An Android app that uses the open-source libVLC (VLC Media Player) library to play remote streamings. Full project is on a private repo but the results and a sample can be found on the links bellow",
        image: tvImg,
        linkTitle: "Results",
        link: "https://github.com/jackanakin/ReactNativeBridgeVLC#preview",
        codeTitle: "Sample",
        code: "https://github.com/jackanakin/ReactNativeBridgeVLC",
        stackIcons: [['fab', 'github'], ["fab", "android"], ["fa", "tv"]]
    },
]

function HomePage() {
    return (
        <Background>
            <Header>
                <HeaderTitle>Hi, I'm Jardel Kuhn &#128075;</HeaderTitle>
                <div>
                    <IconWrapper href="https://linkedin.com/in/jardel-kuhn-74bb86a3">
                        <FontAwesomeIcon size="2x" color="#0a66c2" icon={faLinkedin} />
                    </IconWrapper>

                    <IconWrapper href="https://github.com/jackanakin">
                        <FontAwesomeIcon size="2x" color="#FFFFFF" icon={faGithub} />
                    </IconWrapper>

                    <IconWrapper href="mailto:jkuhn2@universo.univates.br">
                        <FontAwesomeIcon size="2x" color="#f44336" icon={faEnvelope} />
                    </IconWrapper>

                </div>
                <HeaderDescription>
                    These are the projects I created so far!
                </HeaderDescription>
            </Header>
            <Container>
                <Row>
                    {
                        projects.map(p =>
                            <Col><ProjectCard project={p} /></Col>
                        )
                    }
                </Row>
            </Container>
        </Background>
    );
}

export default HomePage;
