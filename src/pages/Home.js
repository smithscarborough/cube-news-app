import { Container, Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Source from '../components/Source';


export default function Home() {
    // use state to pass down news content from a given source to the SingleLineGridList component to display the content
    const [content, setContent] = useState({ items: [] });
    const [outlet, setOutlet] = useState('');

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

    //    const changeOutlet = (e) => {
    //     setOutlet(e.target.value)
    //    }


    return (
        <Container>
            <h3>Welcome to Cube News!</h3>
            <h4>What content would you like to see?</h4>
            <select>
                <option key="news" value={<Link to="./News.js"/>}>News</option>
                <option key="tech" value="./Tech.js">Tech</option>
                <option>Business</option>
                <option>Sports</option>
            </select>
            
            
            
            
            {/* <select onChange={changeOutlet}>
                <option key="Mashable" value="https://mashable.com/rss/">Mashable</option>
                <option key="Dev" value="https://dev.to/rss">DEV.to</option>
                <option key="Engadget" value="https://www.engadget.com/rss.xml">Engadget</option>
                <option key="CSS Tricks" value="https://css-tricks.com/feed/">CSS-Tricks</option>
            </select> */}
            {content.items.length ? (
        
                <Source content={content.items} title={content.title} />
            ) : (
                '     Loading... '
            )}
        </Container>
    )
}
