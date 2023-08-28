import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Navbar from '../components/Navbar';
import styles from './index.module.css';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero', styles.heroBanner)}>
      <div className="container">
        <p> Hello there! I'm Mahesh. Welcome to my personal blog. Here, I share my insights and reflections on life, career, and the world of technology. Feel free to explore and enjoy!</p>
        <h2>I am still knitting some threads come back soon!</h2>
        <div className={styles.buttons}>
          <Button
            onClick={() => {
              window.open("https://maheshjamdade.com/", "_blank")
            }}>About Me</Button>
          <div style={{ width: 20 }}></div>
          <Button
            onClick={() => {
              window.open("https://twitter.com/maheshmnj", "_blank")
            }}
            className={styles.button}>Twitter</Button>
        </div>
      </div >
    </header >
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return <>
    {/* <PageLayout title="Mahesh Jamdade">
      <div className={clsx('content', styles.content)}>
        <HomepageHeader />
      </div>
    </PageLayout>
     */}
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  </>
}
export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="button button--secondary button--sm  ">
      {props.children}
    </button>
  );
}

export function Footer() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('footer', styles.footer)}>
    </div>
  );
}

export function PageLayout(props) {
  return (
    <div className="App">
      <Navbar
        title={props.title}
      />
      {props.children}
      <Footer />
    </div>
  )
}