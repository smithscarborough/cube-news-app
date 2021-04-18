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
            <h3>Let's get down to business...</h3>
            <h4>BUSINESS</h4>
            <select onChange={changeOutlet}>
                <option key="Business Insider" value="https://markets.businessinsider.com/rss/news">Business Insider</option>
                <option key="Business Insider: Analyst Opinions" value="https://markets.businessinsider.com/rss/analysts-opinions">Business Insider: Analyst Opinions</option>
                <option key="Las Vegas Sun: Business" value="https://lasvegassun.com/feeds/headlines/business/">Las Vegas Sun: Business</option>
                <option key="Reuters Business" value="https://www.reutersagency.com/feed/?best-topics=business-finance&post_type=best">Reuters Business & Finance</option>
                <option key="WSJ Markets News" value="https://feeds.a.dj.com/rss/RSSMarketsMain.xml">Wall Street Journal: Markets News</option>
                <option key="WSJ US Business" value="https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml">Wall Street Journal: US Business</option>
            </select>
            {content.items.length ? (
        
                <Source content={content.items} title={content.title} />
            ) : (
                '     Loading... '
            )}
        </Container>
    )
}
