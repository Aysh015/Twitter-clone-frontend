import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
                <SearchIcon className='widgets_searchIcon' />
                <input type='text' placeholder='Search Twitter' />
            </div>

            <div className='widgets_widgetContainer'>
                <h2>What's Happening</h2>
            
            <TwitterTweetEmbed
                tweetId={'1557187138352861186'}
            />
            <TwitterTimelineEmbed 
                sourceType='profile'
                screenName='elonmusk'
                options={{ height : 400 }}
            />
            </div>
        </div>
    )
}

export default Widgets;