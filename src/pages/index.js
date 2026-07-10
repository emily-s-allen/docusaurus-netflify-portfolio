import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Technical writer focused on API and developer documentation">
      <main style={{maxWidth: '680px', margin: '80px auto', padding: '0 24px'}}>
        <h1>{siteConfig.title}</h1>
        <p style={{fontSize: '1.2rem', lineHeight: '1.6'}}>
          Technical writer with 7+ years of experience, currently focused on API and developer documentation.
        </p>
        <p>
          Browse my <Link to="/docs/portfolio">portfolio</Link>, read about my work on the <Link to="/blog">blog</Link>, or learn more <Link to="/about">about me</Link>.
        </p>
      </main>
    </Layout>
  );
}