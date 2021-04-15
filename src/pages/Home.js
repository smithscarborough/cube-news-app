import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Source from '../components/Source';


export default function Home() {
    // use state to pass down news content from a given source to the SingleLineGridList component to display the content
    const [content, setContent] = useState({ items: [] });
    const [outlet, setOutlet] = useState('https://mashable.com/rss/');

    // maybe the following should be useEffect instead...
    const getRSSContent = (url) => {
        setContent({ 
            title: 'Loading...',
            items: []
        })
        fetch(`https://cube-news-app.netlify.app/.netlify/functions/fetch-rss?url=${url}`)
        .then((res) => res.json())
        .then((data) => {
            setContent(data);
        })
        .then((data) => console.log(data))
    };

       useEffect(() => {
        getRSSContent(outlet);
       }, [outlet]);

       const changeOutlet = (e) => {
        setOutlet(e.target.value)
       }

    return (
        <Container>
            <h3>Welcome to Cube News!</h3>
            <h4>Let's select some media outlets to follow:</h4>
            <select onChange={changeOutlet}>
                <option key="Mashable" value="https://mashable.com/rss/">Mashable</option>
                <option key="Dev" value="https://dev.to/rss">DEV.to</option>
            </select>
            {content.items.length ? (
        
                <Source content={content.items} title={content.title} />
            ) : (
                '     Loading...'
            )}
            {/* <SingleLineGridList content={content} /> */}
        </Container>
    )
}
