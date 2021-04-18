import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Source from '../components/Source';


export default function News() {
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
            <h3>Good news...</h3>
            <h4>NEWS</h4>
            <select onChange={changeOutlet}>
                <option key="Breitbart" value="http://feeds.feedburner.com/breitbart">Breitbart</option>
                <option key="Chicago Tribune" value="https://www.chicagotribune.com/arcio/rss/category/news/?query=display_date:%5Bnow-2d+TO+now%5D+AND+revision.published:true&sort=display_date:desc#nt=instory-link">Chicago Tribune</option>
                <option key="CNN" value="http://rss.cnn.com/rss/cnn_topstories.rss">CNN</option>
                <option key="The Daily Telegraph" value="https://www.dailytelegraph.com.au/news/breaking-news/rss">The Daily Telegraph</option>
                <option key="The Denver Post" value="http://feeds.feedburner.com/dp-news-breaking">The Denver Post</option>
                <option key="The Federalist" value="https://thefederalist.com/feed/">The Federalist</option>
                <option key="Fox News" value="http://feeds.foxnews.com/foxnews/latest">FOX News</option>
                <option key="Herald Sun" value="https://www.heraldsun.com.au/rss">Herald Sun</option>
                <option key="The Hill" value="https://thehill.com/rss/syndicator/19110">The Hill</option>
                <option key="Houston Chronicle" value="https://www.chron.com/rss/feed/News-270.php">Houston Chronicle</option>
                <option key="Huffington Post" value="https://chaski.huffpost.com/us/auto">Huffington Post</option>
                <option key="Huffington Post: Weird News" value="https://chaski.huffpost.com/us/auto/vertical/weird-news">Huffington Post: Weird News</option>
                <option key="Las Vegas Sun" value="https://lasvegassun.com/feeds/headlines/all/index.html">Las Vegas Sun</option>
                <option key="Los Angeles Times" value="https://www.latimes.com/world-nation/rss2.0.xml#nt=1col-7030col1">Los Angeles Times</option>
                <option key="NBC News" value="https://feeds.nbcnews.com/nbcnews/public/news">NBC News</option>
                <option key="New York Post" value="https://nypost.com/news/feed/">New York Post</option>
                <option key="New York Times" value="https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml">New York Times</option>
                <option key="Independent Online" value="https://rss.iol.io/iol/news/south-africa">IOL: South Africa</option>
                <option key="One America News" value="https://www.oann.com/category/newsroom/feed/">OAN</option>
                <option key="Real Clear World" value="https://www.realclearworld.com/index.xml">Real Clear World</option>
                <option key="Reuters" value="https://www.reutersagency.com/feed/?taxonomy=best-topics&post_type=best">Reuters</option>
                <option key="SF Gate" value="https://www.sfgate.com/bayarea/feed/Bay-Area-News-429.php">SF Gate</option>
                <option key="The Sydney Morning Herald" value="https://www.smh.com.au/rss/feed.xml">The Sydney Morning Herald</option>
                <option key="Wall Street Journal" value="https://feeds.a.dj.com/rss/RSSWorldNews.xml">Wall Street Journal</option>
                <option key="Washington Examiner" value="https://www.washingtonexaminer.com/tag/news.rss">Washington Examiner</option>
                <option key="Washington Post" value="http://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_43">Washington Post</option>
            </select>
            {content.items.length ? (
        
                <Source content={content.items} title={content.title} />
            ) : (
                '     Loading... '
            )}
        </Container>
    )
}
