import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import State from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <br />
    <br />
    <br />
    <Trips heading="Our Favourite Destinations" />
    <Testimonials />
    <State />
    <Email />
  </Layout>
)

export default IndexPage

