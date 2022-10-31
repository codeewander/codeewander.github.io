import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { loadableP5 as P5Wrapper } from '../components/loadable'
import sketch from '../components/sketch'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="homepage-container">
        <P5Wrapper sketch={sketch} />
        <div className="text-wrapper">
          <p>Hi, I am Kira</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
