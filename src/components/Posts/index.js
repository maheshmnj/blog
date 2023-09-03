import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useState } from 'react';
import styles from './posts.module.css';
import { useEffect } from 'react';
import FeaturedList from './FeaturedList';
import Headline from './Headline';
import PostCard from './PostCard';

export default function BlogList(props) {
    const { siteConfig } = useDocusaurusContext();
    //  make a api call to get all posts
    const [allPosts, setPosts] = useState([])
    const [tags, setTags] = useState(['All'])
    const [selectedTag, setSelected] = useState(() => {
        return 'All'
    })
    const fetchPosts = async (tag) => {
        const feeds = await fetch('https://blog.maheshjamdade.com/blog/feed.json');
        feeds.json().then(data => {
            if (tag === 'All') {
                setPosts(data.items);
            } else {
                setPosts(data.items.filter(post => post.tags.includes(tag)));
            }
        });
    };
    console.log("posts=", allPosts);
    useEffect(() => {
        var localPosts = siteConfig.customFields.allPosts;
        localPosts.forEach((post) => {
            if (post.tags) {
                post.tags.forEach((tag) => {
                    if (!tags.includes(tag)) {
                        tags.push(tag);
                    }
                })
            }
        });
        fetchPosts(selectedTag)
    }, []);

    return <div className={`${styles.blogList} `}>
        <FeaturedList allPosts={allPosts} />
        <div style={{ height: '30px' }}></div>
        <div style={
            {
                display: 'flex',
                alignItems: 'center',
            }
        }>
            {console.log("tags=", tags)}
            <Headline title="All Posts" size="large" />
            <Tags
                selectedTag={selectedTag}
                tags={tags} onTagClick={(x) => {
                    console.log("tag clicked", x);
                    fetchPosts(x)
                    setSelected(x)
                }} />
        </div>
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


export function Tags(props) {
    const handleTagClick = (tag) => {
        props.onTagClick(tag);
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginLeft: '20px'
        }}>
            {props.tags.map((tag) => (
                <div className='tag' style={{
                    margin: '5px',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    border: '1px solid #ffffff',
                    background: props.selectedTag === tag ? '#ffffff' : null,
                    color: '#000000',
                    cursor: 'pointer'

                }}>
                    <a onClick={() => handleTagClick(tag)}>{tag}</a>
                </div>
            ))}
        </div>
    );
}
