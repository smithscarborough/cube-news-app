import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Source from '../components/Source';

export default function Tech() {
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
            <Container align="center">
                <h3>Hello, World...</h3>
                <h4>TECH</h4>
                <select onChange={changeOutlet}>
                    <option key="default" value="" disabled selected hidden>Select an outlet</option>
                    <option key="ars technica" value="https://arstechnica.com/feed/">ars technica</option>
                    <option key="CSS Tricks" value="https://css-tricks.com/feed/">CSS-Tricks</option>
                    <option key="The Denver Post" value="http://feeds.denverpost.com/dp-business-technology">The Denver Post: Tech</option>
                    <option key="Dev" value="https://dev.to/rss">DEV.to</option>
                    <option key="Engadget" value="https://www.engadget.com/rss.xml">Engadget</option>
                    <option key="Hacker News" value="https://hnrss.org/bestcomments">Hacker News: Best Comments</option>
                    <option key="Herald Sun" value="https://www.heraldsun.com.au/rss">Herald Sun: Tech</option>
                    <option key="Mashable" value="https://mashable.com/rss/">Mashable</option>
                    <option key="New York Times Tech" value="https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml">New York Times Tech</option>
                    <option key="Reddit: algorithms" value="https://www.reddit.com/r/algorithms/.rss">Reddit: r/algorithms</option>
                    <option key="Reddit: coding" value="https://www.reddit.com/r/coding/.rss">Reddit: r/coding</option>
                    <option key="Reddit: github" value="https://www.reddit.com/r/github/.rss">Reddit: r/github</option>
                    <option key="Reddit: javascript" value="https://www.reddit.com/r/javascript/.rss">Reddit: r/javascript</option>
                    <option key="Reddit: PosgreSQL" value="https://www.reddit.com/r/PostgreSQL/.rss">Reddit: r/PostgreSQL</option>
                    <option key="Reddit: programmer" value="https://www.reddit.com/r/programmer/.rss">Reddit: r/programmer</option>
                    <option key="Reddit: Programmer Humor" value="https://www.reddit.com/r/ProgrammerHumor/.rss">Reddit: r/ProgrammerHumor</option>
                    <option key="Reddit: react.js" value="https://www.reddit.com/r/reactjs/.rss">Reddit: r/react.js</option>
                    <option key="Reddit: three.js" value="https://www.reddit.com/r/threejs/.rss">Reddit: r/three.js</option>
                    <option key="Reddit: vscode" value="https://www.reddit.com/r/vscode/.rss">Reddit: r/vscode</option>
                    <option key="Reddit: webdev" value="https://www.reddit.com/r/webdev/.rss">Reddit: r/webdev</option>
                    <option key="Reuters: Tech" value="https://www.reutersagency.com/feed/?best-topics=tech&post_type=best">Reuters Tech</option>
                    <option key="SF Gate" value="https://blog.sfgate.com/techchron/feed/">SF Gate Tech Blog</option>
                    <option key="The Sydney Morning Herald" value="https://www.smh.com.au/rss/technology.xml">The Sydney Morning Herald: Tech</option>
                    <option key="WSJ Technology" value="https://feeds.a.dj.com/rss/RSSWSJD.xml">Wall Street Journal: Tech</option>
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
