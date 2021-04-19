import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Source from '../components/Source';


export default function Business() {
    // use state to pass down news content from a given source to the SingleLineGridList component to display the content
    const [content, setContent] = useState({ items: [] });
    const [outlet, setOutlet] = useState('https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml');

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
                <h3>Let's get down to business...</h3>
                <h4>BUSINESS</h4>
                <select onChange={changeOutlet}>
                    <option key="Business Insider" value="https://markets.businessinsider.com/rss/news">Business Insider</option>
                    <option key="Business Insider: Analyst Opinions" value="https://markets.businessinsider.com/rss/analysts-opinions">Business Insider: Analyst Opinions</option>
                    <option key="Financial Times" value="https://www.ft.com/news-feed">Financial Times</option>
                    <option key="Harvard Business Review" value="http://feeds.hbr.org/harvardbusiness">Harvard Business Review</option>
                    <option key="Las Vegas Sun: Business" value="https://lasvegassun.com/feeds/headlines/business/">Las Vegas Sun: Business</option>
                    <option key="Nasdaq Stocks" value="https://www.nasdaq.com/feed/rssoutbound?category=Technology">Nasdaq Stocks</option>
                    <option key="Reddit: bitcoin" value="https://www.reddit.com/r/Bitcoin/.rss">Reddit: r/bitcoin</option>
                    <option key="Reddit: dogecoin" value="https://www.reddit.com/r/dogecoin/.rss">Reddit: r/dogecoin</option>
                    <option key="Reddit: stocks" value="https://www.reddit.com/r/stocks/.rss">Reddit: r/stocks</option>
                    <option key="Reuters Business" value="https://www.reutersagency.com/feed/?best-topics=business-finance&post_type=best">Reuters Business & Finance</option>
                    <option key="WSJ Markets News" value="https://feeds.a.dj.com/rss/RSSMarketsMain.xml">Wall Street Journal: Markets News</option>
                    <option key="WSJ US Business" value="https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml">Wall Street Journal: US Business</option>
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
