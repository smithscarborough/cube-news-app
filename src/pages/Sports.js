import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Source from '../components/Source';


export default function Sports() {
    // use state to pass down news content from a given source to the SingleLineGridList component to display the content
    const [content, setContent] = useState({ items: [] });
    const [outlet, setOutlet] = useState('https://www.espn.com/espn/rss/news');

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
            <Container align="center">
                <h3>Next up...</h3>
                <h4>SPORTS</h4>
                <select onChange={changeOutlet}>
                    <option key="default" value="" disabled selected hidden>Select an outlet</option>
                    <option key="ESPN" value="https://www.espn.com/espn/rss/news">ESPN</option>
                    <option key="FOX Sports" value="https://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU">FOX Sports</option>
                    <option key="Yahoo! Sports" value="https://sports.yahoo.com/rss/">Yahoo! Sports</option>
                    <option key="Reuters Sports" value="https://www.reutersagency.com/feed/?best-topics=sports&post_type=best">Reuters Sports</option>
                    <option key="The Sydney Morning Herald: Sport" value="https://www.smh.com.au/rss/sport.xml">The Sydney Morning Herald: Sport</option>
                </select>
            </Container>
            {content.items.length ? (
        
                <Source content={content.items} title={content.title} />
            ) : (
                '     Loading... '
            )}
        </Container>
    )
}
