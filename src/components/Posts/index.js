import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useState } from 'react';
import styles from './posts.module.css';
import BlogListCard from './FeaturedCard';
import { useEffect } from 'react';
import FeaturedList from './FeaturedList';
import Headline from './Headline';
import PostCard from './PostCard';

export default function BlogList(props) {
    const { siteConfig } = useDocusaurusContext();
    //  make a api call to get all posts
    const [allPosts, setPosts] = useState([])
    const fetchPosts = async () => {
        const feeds = await fetch('https://blog.maheshjamdade.com/blog/feed.json');
        feeds.json().then(data => {
            // setPosts(data[items]);
            // console.log("json data=", data['items']);
            setPosts(data['items']);
        });
    };
    console.log("posts=", allPosts);
    useEffect(() => {
        fetchPosts()
    }, []);

    const featured = allPosts.filter(post => post.tags.includes('featured'));

    return <div className={`${styles.blogList} `}>
        <FeaturedList featured={featured} allPosts={allPosts} />
        <div style={{ height: '30px' }}></div>
        <Headline title="All Posts" size="large" />
        <div className={`${styles.blogList} `}>
            {allPosts.map((post, index) => {
                // if consecutive posts have same year, don't show year
                var oldDate = new Date(post.date_modified)
                const date = new Date(post.date_modified);
                if (index != 0) {
                    oldDate = new Date(allPosts[index - 1].date_modified);
                }
                const yearEqual = oldDate.getFullYear() === date.getFullYear()
                if (yearEqual && index != 0) {
                    return <div key={index}>
                        <PostCard
                            index={index}
                            tags={post.tags}
                            title={`${post.title}`}
                            description={post.description}
                            path={post.url}
                            date={post.date_modified}
                        />
                    </div>
                } else {
                    return <div key={index}>
                        <h2>{date.getFullYear()}</h2>
                        <PostCard
                            index={index}
                            className={`card ${index}`}
                            tags={post.tags}
                            title={`${post.title}`}
                            description={post.description}
                            path={post.url}
                            date={post.date_modified}
                        />
                    </div>
                }

            })
            }
        </div>
    </div>
}
