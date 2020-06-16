import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects"
            description="Projects built by members of FOSS Community GEC."
        />
        <section className="pageTitle">
            <h2>Projects</h2>
        </section>

        <div className="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aut. Maiores autem doloremque quos, voluptate aliquid perspiciatis necessitatibus unde corrupti nulla blanditiis, voluptas veritatis ad architecto temporibus quisquam officia in.</p>
        </div>
    </Layout>
)

export default ProjectsPage