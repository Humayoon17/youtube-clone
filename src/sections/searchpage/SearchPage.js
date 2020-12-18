import React from 'react';
import ChannelRow from '../../components/channelRow/ChannelRow';
import VideoRow from "../../components/videoRow/VideoRow";
import images from "../../images";

import "./SearchPage.css"

const SearchPage = () => {
    return (
        <div className="SearchPage">
            <ChannelRow
            image="https://yt3.ggpht.com/yti/ANoDKi5SxKL5kB5x2bV9LCZ6NQDUjTVMYdNhO5ShEGt49g=s88-c-k-c0x00ffffff-no-rj-mo"
            channelName="Smart Developer"
            subscriber="120K"
            isSubscribed={true}
            numberOfVideos={1230}
            description="Every thing about the programming languages and technologies"
             />
             <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwniiX3ufCTpvgVjPdQ0tPFfBV-atFkOKFwBQKELspQ=s176-c-k-c0x00ffffff-no-rj-mo"
            channelName="Tolo TV"
            subscriber="961K"
            isSubscribed={false}
            numberOfVideos={12661}
            description="Afghanistan’s most popular TV which publishes weekly entertainment content on YouTube.
Enjoy your time with your favorite Afghan shows on TOLO TV YouTube channel.
Subscribe for getting updates on your favorite content when it is published!"
             />
             <h4 className="latest_videos">Latest from <p>Tolo TV</p> </h4>
             <div className="SearchPage_video">
                {images.map(image=>{
                    return <VideoRow
                        image={image.image}
                        title={image.title}
                        views={image.views}
                        timestamp={image.timestamp}
                        channelName={image.channelName}
                        channelLogo={image.channelLogo}
                        description={image.description}
                        isNew={image.isNew}
                     />
                })}
                <hr className="searchPage_line" />
                <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s176-c-k-c0x00ffffff-no-rj-mo"
            channelName="Programming With Mosh"
            subscriber="1.45M"
            isSubscribed={true}
            numberOfVideos={154}
            description="I train professional software engineers that companies love to hire. "
             />
                 <h4 className="latest_videos">Latest from <p>Mosh</p> </h4>
                 <VideoRow
                        image="https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNBdcBTHgMuN_LwoxChPzFvzLunQ"
                        title="Python Tutorial - Python for Beginners [Full Course]"
                        views="15.2M"
                        timestamp="1 year ago"
                        channelName="Programming With Mosh"
                        channelLogo="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s176-c-k-c0x00ffffff-no-rj-mo"
                        description="Python tutorial - Python for beginners 
🚀 Learn Python programming for a career in machine learning, data science & web development.
🔥 Want to master Python? Get my Python mastery course: http://bit.ly/35BLHHP"
                        isNew={false}
                     />
                     <VideoRow
                        image="https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNBdcBTHgMuN_LwoxChPzFvzLunQ"
                        title="Python Tutorial - Python for Beginners [Full Course]"
                        views="15.2M"
                        timestamp="1 year ago"
                        channelName="Programming With Mosh"
                        channelLogo="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s176-c-k-c0x00ffffff-no-rj-mo"
                        description="Python tutorial - Python for beginners 
🚀 Learn Python programming for a career in machine learning, data science & web development.
🔥 Want to master Python? Get my Python mastery course: http://bit.ly/35BLHHP"
                        isNew={false}
                     />
                     <VideoRow
                        image="https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNBdcBTHgMuN_LwoxChPzFvzLunQ"
                        title="Python Tutorial - Python for Beginners [Full Course]"
                        views="15.2M"
                        timestamp="1 year ago"
                        channelName="Programming With Mosh"
                        channelLogo="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s176-c-k-c0x00ffffff-no-rj-mo"
                        description="Python tutorial - Python for beginners 
🚀 Learn Python programming for a career in machine learning, data science & web development.
🔥 Want to master Python? Get my Python mastery course: http://bit.ly/35BLHHP"
                        isNew={false}
                     />
                     <VideoRow
                        image="https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNBdcBTHgMuN_LwoxChPzFvzLunQ"
                        title="Python Tutorial - Python for Beginners [Full Course]"
                        views="15.2M"
                        timestamp="1 year ago"
                        channelName="Programming With Mosh"
                        channelLogo="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s176-c-k-c0x00ffffff-no-rj-mo"
                        description="Python tutorial - Python for beginners 
🚀 Learn Python programming for a career in machine learning, data science & web development.
🔥 Want to master Python? Get my Python mastery course: http://bit.ly/35BLHHP"
                        isNew={false}
                     />
                     <VideoRow
                        image="https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNBdcBTHgMuN_LwoxChPzFvzLunQ"
                        title="Python Tutorial - Python for Beginners [Full Course]"
                        views="15.2M"
                        timestamp="1 year ago"
                        channelName="Programming With Mosh"
                        channelLogo="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s176-c-k-c0x00ffffff-no-rj-mo"
                        description="Python tutorial - Python for beginners 
🚀 Learn Python programming for a career in machine learning, data science & web development.
🔥 Want to master Python? Get my Python mastery course: http://bit.ly/35BLHHP"
                        isNew={false}
                     />
                     
             </div>
        </div>
        
    );
}

export default SearchPage;
