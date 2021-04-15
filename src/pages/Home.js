import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Source from '../components/Source';


export default function Home() {
    // use state to pass down news content from a given source to the SingleLineGridList component to display the content
    const [content, setContent] = useState([]);

    // maybe the following should be useEffect instead...
    const getRSSContent = () => {
        fetch('https://cube-news-app.netlify.app/.netlify/functions/fetch-rss?url=https://mashable.com/rss/')
        .then((res) => res.json())
        .then((data) => {
            setContent(data.items);
        })
        .then((data) => console.log(data))
    };

       useEffect(() => {
        getRSSContent();
       }, []);

    return (
        <Container>
            <h3>Welcome to Cube News!</h3>
            <h4>Let's select some media outlets to follow:</h4>
            <select>
                <option key="Mashable">Mashable</option>
                <option key="Dev">DEV.to</option>
            </select>
            <Source content={content} />
            {/* <SingleLineGridList content={content} /> */}
        </Container>
    )
}
