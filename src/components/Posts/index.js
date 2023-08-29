import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import styles from './posts.module.css';
import Link from '@docusaurus/Link';

export default function BlogList(props) {
    const { siteConfig } = useDocusaurusContext();
    const allPosts = siteConfig.customFields.allPosts;

    return allPosts.map((post, index) => {
        // if consecutive posts have same year, don't show year
        var oldDate = null;
        const date = new Date(post.date);
        if (index != 0) {
            oldDate = new Date(allPosts[index - 1].date);
            if (oldDate.getFullYear() == date.getFullYear()) {
                return <BlogListCard
                    index={index}
                    className={`card ${index}`}
                    title={`${post.title} ${index}`}
                    description={post.description}
                    path={post.path}
                    date={post.date}
                />
            } else {
                return <div
                    key={index}>
                    <h2>{date.getFullYear()}</h2>
                    <BlogListCard
                        index={index}
                        className={`card ${index}`}
                        title={`${post.title} ${index}`}
                        description={post.description}
                        path={post.path}
                        date={post.date}
                    />
                </div>
            }
        } else {
            return <div>
                <h2>{date.getFullYear()}</h2>
                <BlogListCard
                    index={index}
                    className={`card ${index}`}
                    title={`${post.title} ${index}`}
                    description={post.description}
                    path={post.path}
                    date={post.date}
                />
            </div>
        }

    })
}

export function BlogListCard(props) {
    return <div key={props.index} className={styles.blogcard}>
        <div className="cardHeader">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        <div className="cardButton">
            <Link
                className="button button--secondary button--sm"
                to={props.path}>
                Read More
            </Link>
            <small>{props.date}</small>
        </div>
    </div>
}

