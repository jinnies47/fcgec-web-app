import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

import BlogStyles from './blog.module.scss'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                filter:{fields:{type:{eq:"blog"}}},
                sort: {fields: [frontmatter___date], order: DESC}
                ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            author
                        }
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="Blog"
                description="Blog posts by members of FOSS Community GEC."
            />

            <section className="pageTitle">
                <h2>Blog</h2>
            </section>

            <div className="container">
                <div className={BlogStyles.postGrid}>
                    {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <div key={edge.node.fields.slug} className={BlogStyles.post}>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h3>{edge.node.frontmatter.title}</h3>
                                    <p>{edge.node.frontmatter.date}</p>
                                    <p>By {edge.node.frontmatter.author}</p>
                                    <p>{edge.node.excerpt}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default BlogPage
