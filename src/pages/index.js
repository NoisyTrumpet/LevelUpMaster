import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBarLevel from "../components/levelUpNav"
import "bootstrap/dist/css/bootstrap.min.css"
import Hero from "../components/hero"
import About from "../components/about"
import Courses from "../components/courses"
import Federal from "../components/federal"
import Contact from "../components/contact"

const IndexPage = () => {
	return (
		<Layout>
			<SEO />
			<NavBarLevel />
			<Hero />
			<About />
			<Courses />
			<Federal />
			<Contact />
		</Layout>
	)
}

export default IndexPage
