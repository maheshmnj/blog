import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import styles from './posts.module.css';
import Link from '@docusaurus/Link';

export default function BlogList(props) {
    const { siteConfig } = useDocusaurusContext();
    const allPosts = siteConfig.customFields.allPosts;
    return <div className={styles.blogList}>
        {allPosts.map((post, index) => {
            // if consecutive posts have same year, don't show year
            var oldDate = new Date(post.date)
            const date = new Date(post.date);
            if (index != 0) {
                oldDate = new Date(allPosts[index - 1].date);
            }
            if (oldDate.getFullYear() == date.getFullYear() && index != 0) {
                return <div key={index} className={styles.blogContainer}>
                    <BlogListCard
                        index={index}
                        title={`${post.title} ${index}`}
                        description={post.description}
                        path={post.path}
                        date={post.date}
                    />
                </div>
            } else {
                return <div key={index} className={styles.blogContainer}>
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
    </div>


}

export function BlogListCard(props) {
    const date = new Date(props.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",

    });
    return <Link to={props.path}>
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

