import React from 'react';
import FeaturedCard from './FeaturedCard';
import './FeaturedList.css';
import Headline from './Headline';
import siteConfig from '../../../docusaurus.config';

export default function FeaturedList(props) {
    var localPosts = siteConfig.customFields.allPosts;
    const featured = localPosts.filter(post => post.featured === true);
    if (featured.length === 0) {
        return <></>
    }
    else {
        return <div className='featuredContainer'>
            <Headline title="Featured" size="large" />
            {
                featured.map((post, index) => {
                    return <div key={index}>
                        <FeaturedCard
                            index={index}
                            tags={post.tags}
                            title={`${post.title}`}
                            description={post.description}
                            path={`/blog/${post.slug}`}
                            date={post.created_at}
                        />
                    </div>
                })
            }
        </div>
    }
}