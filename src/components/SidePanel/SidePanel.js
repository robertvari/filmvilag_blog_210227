import React from 'react';
import About from "./About";
import AddList from "./AddList";
import TweetList from "./TweetList";

function SidePanel(props) {
    return (
        <div>
            <About/>
            <AddList/>
            <TweetList/>
        </div>
    );
}

export default SidePanel;