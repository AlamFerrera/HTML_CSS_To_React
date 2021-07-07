import React from 'react';
import './overview.css';
import CardSmall from '../Card-Small/card-small';

const cardSmallData = [
    {id:1, pageViews: 'Page Views',icon: 'images/icon-up.svg',sociaMedia: 'images/icon-facebook.svg', number: 87, grotwh: 3},
    {id:2, pageViews: 'Likes',icon: 'images/icon-up.svg',sociaMedia: 'images/icon-instagram.svg', number: 5462, grotwh: 2257},
    {id:3, pageViews: 'Profile Views',icon: 'images/icon-up.svg',sociaMedia: 'images/icon-instagram.svg', number: 52, grotwh: 1375},
    {id:4, pageViews: 'Retweets',icon: 'images/icon-up.svg',sociaMedia: 'images/icon-twitter.svg', number: 117, grotwh: 303},
    {id:5, pageViews: 'Likes',icon: 'images/icon-up.svg',sociaMedia: 'images/icon-twitter.svg', number: 507, grotwh: 553},
    {id:6, pageViews: 'Likes',icon: 'images/icon-down.svg',sociaMedia: 'images/icon-youtube.svg', number: 87, grotwh: 3},
    {id:7, pageViews: 'Total Views',icon: 'images/icon-down.svg',sociaMedia: 'images/icon-youtube.svg', number: 1407, grotwh: 12},
];

function Overview()
{
    return(
        <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                <div className="grid">
                    {
                        cardSmallData.map(user => {
                            return(
                                <CardSmall pageViews={user.pageViews}
                                            icon={user.icon}
                                            socialMedia={user.sociaMedia}
                                            number={user.number}
                                            key={user.id}
                                            growth={user.grotwh}/>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Overview;
