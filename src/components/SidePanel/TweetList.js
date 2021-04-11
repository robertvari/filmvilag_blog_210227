import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./styles/TweetList.css"

function TweetCard(props){
    const {user, date, content} = props.data

    return(
        <div className="tweet-card-container">
            <div className="header">
                <img src={user.image} className="tweet-card-image" alt=""/>
                <small>{user.name}</small>
            </div>

            <div className="body">{content}</div>

            <div className="footer">{date}</div>
        </div>
    )
}

function TweetList(props) {
    const API_URL = process.env.REACT_APP_API_URL
    const [tweet_list, set_tweet_list] = useState([])

    const fetch = () => {
        axios({
            method: "get",
            url: `${API_URL}/tweets/`
        })
            .then(res => set_tweet_list(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch()
    }, [])


    return (
        <div className="tweet-list-container">
            <h3>Tweets</h3>
            {
                tweet_list.map(tweet_data => <TweetCard key={tweet_data.id} data={tweet_data}/>)
            }
        </div>
    );
}

export default TweetList;