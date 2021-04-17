import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Source from '../components/Source';


export default function Home() {
    // use state to pass down news content from a given source to the SingleLineGridList component to display the content
    const [content, setContent] = useState({ items: [] });
    const [outlet, setOutlet] = useState('https://www.realclearworld.com/index.xml');

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
            <h4>News</h4>
            <select onChange={changeOutlet}>
                <option key="The Hill" value="https://thehill.com/rss/syndicator/19110">The Hill</option>
                <option key="Real Clear World" value="https://www.realclearworld.com/index.xml">Real Clear World</option>
                <option key="Wall Street Journal" value="https://feeds.a.dj.com/rss/RSSWorldNews.xml">Wall Street Journal</option>
                <option key="New York Post" value="https://nypost.com/news/feed/">New York Post</option>
                <option key="Fox News" value="http://feeds.foxnews.com/foxnews/latest">FOX News</option>
                <option key="The Federalist" value="https://thefederalist.com/feed/">The Federalist</option>
                <option key="CNN" value="http://rss.cnn.com/rss/cnn_topstories.rss">CNN</option>
                <option key="Breitbart" value="http://feeds.feedburner.com/breitbart">Breitbart</option>
                <option key="New York Times" value="https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml">New York Times</option>
                <option key="Washington Examiner" value="https://www.washingtonexaminer.com/tag/news.rss">Washington Examiner</option>
                <option key="Houston Chronicle" value="https://www.chron.com/rss/feed/News-270.php">Houston Chronicle</option>
                <option key="SF Gate" value="https://www.sfgate.com/bayarea/feed/Bay-Area-News-429.php">SF Gate</option>
                <option key="Washington Post" value="http://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_43">Washington Post</option>
                <option key="One America News" value="https://www.oann.com/category/newsroom/feed/">OAN</option>
                {/* <option key="Mashable" value="https://mashable.com/rss/">Mashable</option>
                <option key="Dev" value="https://dev.to/rss">DEV.to</option>
                <option key="Engadget" value="https://www.engadget.com/rss.xml">Engadget</option>
                <option key="CSS Tricks" value="https://css-tricks.com/feed/">CSS-Tricks</option> */}
            </select>
            {content.items.length ? (
        
                <Source content={content.items} title={content.title} />
            ) : (
                '     Loading... '
            )}
        </Container>
    )
}
