import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useState } from 'react';
import styles from './posts.module.css';
import Link from '@docusaurus/Link';
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

    return <div className={styles.blogList}>
        {allPosts.map((post, index) => {
            // if consecutive posts have same year, don't show year
            var oldDate = new Date(post.date_modified)
            const date = new Date(post.date_modified);
            if (index != 0) {
                oldDate = new Date(allPosts[index - 1].date);
            }
            if (oldDate.getFullYear() == date.getFullYear() && index != 0) {
                return <div key={index} className={styles.blogContainer}>
                    <BlogListCard
                        index={index}
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

export function BlogListCard(props) {
    const date = new Date(props.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return <Link to={props.path}
        target={props.target || '_self'}>
        <div key={props.index} className={styles.blogcard}>
            <div className="cardHeader">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="cardButton">
                <small>{date}</small>
            </div>
        </div>
    </Link>

}

