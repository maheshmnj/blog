import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useState } from 'react';
import styles from './posts.module.css';
import BlogListCard from './BlogListCard';
import { useEffect } from 'react';

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
    // allPosts.sort((a, b) => {
    //     const date1 = new Date(a.date_modified);
    //     const date2 = new Date(b.date_modified);
    //     return date2 - date1;
    // });
    return <div className={styles.blogList}>
        {allPosts.map((post, index) => {
            // if consecutive posts have same year, don't show year
            var oldDate = new Date(post.date_modified)
            const date = new Date(post.date_modified);
            if (index != 0) {
                oldDate = new Date(allPosts[index - 1].date_modified);
            }
            const yearEqual = oldDate.getFullYear() === date.getFullYear()
            if (yearEqual && index != 0) {
                return <div key={index} className={styles.blogContainer}>
                    <BlogListCard
                        index={index}
                        tags={post.tags}
                        title={`${post.title}`}
                        description={post.description}
                        path={post.url}
                        date={post.date_modified}
                    />
                </div>
            } else {
                return <div key={index} className={styles.blogContainer}>
                    <h2>{date.getFullYear()}</h2>
                    <BlogListCard
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
}
