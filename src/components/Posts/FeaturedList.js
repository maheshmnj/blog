import React from 'react';
import FeaturedCard from './FeaturedCard';
import Headline from './Headline';

export default function FeaturedList(props) {
    const featured = props.allPosts.filter(post => post.tags.includes('featured'));
    if (featured.length === 0) {
        return <></>
    }
    else {
        return <>
            <Headline title="Featured" size="large" />
            {
                featured.map((post, index) => {
                    return <div key={index}>
                        <FeaturedCard
                            index={index}
                            tags={post.tags}
                            title={`${post.title}`}
                            description={post.description}
                            path={post.url}
                            date={post.date_modified}
                        />
                    </div>
                })
            }
        </>
    }
}