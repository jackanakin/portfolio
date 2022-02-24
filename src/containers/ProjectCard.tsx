import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

import IProject from '../@types/IProject';

interface Props {
    project: IProject;
}

function ProjectCard({ project }: Props) {
    return (
        <Card style={{ width: '18rem', height: '46rem', margin: 4 }}>
            <div style={{ height: '42rem' }}>
                <Card.Img variant="top" height={300} src={project.image} />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>

                    <Card.Text>
                        {
                            project.stackIcons.map(icon =>
                                <FontAwesomeIcon style={{ margin: 3 }} size="2x" icon={icon} />
                            )
                        }
                    </Card.Text>

                    <Card.Text>{project.description}</Card.Text>
                </Card.Body>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button style={{ backgroundColor: "#f44336", borderColor: "#f42430" }}
                    href={project.link} >{project.linkTitle}</Button>
                <Button style={{ backgroundColor: "black", borderColor: "gray" }}
                    href={project.code}>{project.codeTitle}</Button>
            </div>
        </Card>
    );
}

export default ProjectCard;
