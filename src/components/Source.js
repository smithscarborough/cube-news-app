// testing this component out in place of SingleLineGridList.js (a material-ui component)
import { Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Source(props) {
    return (
        <div>
            <Container>
                {props.content.map((pieceOfContent) => {
                    const { title, creator, link, pubDate, contentSnippet } = pieceOfContent;

                    return (
                        <div>
                            <Link to={link}><h4>{title}</h4></Link>
                            <p>{creator}</p>
                            <p>{pubDate}</p>
                            <p>{contentSnippet}</p>
                            --------------------
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}
