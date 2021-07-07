import React from 'react'
import Card from '../Card/card';

const cardListData = [
  {id:1,username: '@AlamFerrera', followers: '1483', up: '12', icon: 'images/icon-facebook.svg', card:'card facebook'},
  {id:2,username: '@AlamFerrera', followers: '1500', up: '10', icon: 'images/icon-twitter.svg', card:'card twitter'},
  {id:3,username: '@AlamFerrera', followers: '2600', up: '15', icon: 'images/icon-instagram.svg', card:'card instagram'},
  {id:4,username: '@AlamFerrera', followers: '2380', up: '35', icon: 'images/icon-youtube.svg', card:'card youtube'}
];

function TopCardList() {
    return(
    <section className="top-cards">
    <div className="wrapper">
      <div className="grid">
        {
          cardListData.map( user => {
            return(
              <Card username={user.username}
                    followers={user.followers}
                    up={user.up}
                    card = {user.card}
                    icon={user.icon}
                    key={user.id}/>
            );
          })
        }
        
      </div>
    </div>
  </section>
    );
}

export default TopCardList;