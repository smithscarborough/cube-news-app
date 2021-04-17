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
            <h4>Tech</h4>
            <select onChange={changeOutlet}>
                <option key="Mashable" value="https://mashable.com/rss/">Mashable</option>
                <option key="Dev" value="https://dev.to/rss">DEV.to</option>
                <option key="Engadget" value="https://www.engadget.com/rss.xml">Engadget</option>
                <option key="CSS Tricks" value="https://css-tricks.com/feed/">CSS-Tricks</option>
                <option key="Wall Street Journal" value="https://feeds.a.dj.com/rss/RSSWSJD.xml">Wall Street Journal Tech</option>
                <option key="SF Gate" value="https://blog.sfgate.com/techchron/feed/">SF Gate Tech Blog</option>
                <option key="New York Times Tech" value="https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml">New York Times Tech</option>
            </select>
            {content.items.length ? (
        
                <Source content={content.items} title={content.title} />
            ) : (
                '     Loading... '
            )}
        </Container>
    )
}