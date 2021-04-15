// testing this component out in place of SingleLineGridList.js (a material-ui component)
import { Container } from '@material-ui/core'
import React from 'react'

export default function Source(props) {
    return (
        <div>
            <Container>
                {props.content.map((pieceOfContent) => {
                    const { title, creator } = pieceOfContent;

                    return (
                        <div>
                            <h5>{title}</h5>
                            <p>{creator}</p>
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}
