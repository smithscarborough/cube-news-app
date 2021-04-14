import { Container } from '@material-ui/core';
import { useEffect } from 'react';


export default function Home() {

    // maybe the following should be useEffect instead...
    const getRSSContent = () => {
        fetch('https://mashable.com/rss/')
        .then(res => res.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => console.log(data))
    }

       useEffect(() => {
        getRSSContent()
       }, [])

    return (
        <Container>
            <h3>Welcome to Cube News!</h3>
            <h4>Let's select some media outlets to follow:</h4>
            <select>
                <option key="Mashable">Mashable</option>
                <option key="Dev">DEV.to</option>
            </select>
        </Container>
    )
}
