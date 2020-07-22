import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types'

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <Author author={tweet.author}/>
                <Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
                <Comment author='somebody' message='a likable message' likes={1}/>
                <Comment author='mr_unpopular' message='unlikable message'/>
                <Comment author='mr_unpopular' message='another message' likes={0}/>
                <Comment author='error_missing_message'/>
                <Comment author={43}/> {/* Error since wrong type */}
                <Comment message='mystery author'/>
            </div>
        </div>
    )
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar"/>
    );
}

function Message({ text }) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

function Author({ author }) {
    const { name, handle } = author;
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    );
}

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

function getRetweetCount(count) {
    if (count > 0)
    {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    }
    else
    {
        return null;
    }
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
    </span>
);

const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 &&
         <span className="like-count">
             {count}
         </span>}
    </span>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

const testTweet = {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 4,
    timestamp: "2016-07-30 21:24:37"
};

function Comment({ author, message, likes }) {
    return (
        <div>
            <div className='author'>{author}</div>
            <div className='message'>{message}</div>
            <div className='likes'>
                {likes > 0 ? likes : 'No'} likes
            </div>
        </div>
    );
}

Comment.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number
}

ReactDOM.render(<Tweet tweet={testTweet}/>,
                document.querySelector('#root'));