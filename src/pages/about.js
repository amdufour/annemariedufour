import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CtaPortfolio from '../components/CtaPortfolio'

const getImage = graphql`
  {
    file(relativePath: {eq: "portrait-thin.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 990, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const aboutImage = useStaticQuery(getImage)

  return (
    <Layout styleClass="header-with-gradient privacy">
      <SEO title="About" />
      <div className="page-about">
        <div className="small-header">
          <div className="logo-bg"></div>
          <div className="container">
            <h1>About me</h1>
          </div>
          <div className="header-bottom-triangles"></div>
        </div>
        <div className="page-content">
          <div className="container">
            <h3>Hi there, welcome to my site!</h3>
            <p>Now that you’ve reached my about page, you probably already know that I am a consultant in Creative Data Visualizations Design and Develop. If you came here to confirm if my soft skills, technical expertise, and main tools match the project you have in mind, the button below will bring you precisely to the right place.</p>
            <Link className="btn btn-teal btn-skills" to="#quote-kian">Learn more about my skills</Link>
            <p>If you want to learn more about me and my background, keep reading!</p>
            
            <h2>My background and how I came to Data Visualizations, a long story short</h2>
            <p>I grew up in Arvida, a small industrial town located in Québec's province, in Canada. Like many other kids, I was not too fond of maths and thought I would never even be good at them. I was more the literature and artsy type. But around the age of 14, one of my teachers explained maths so well that I started actually to like them. I enjoyed them so much that I ended up earning a B.Sc. in Mechanical Engineering. At the time, this path sounded like a way to still do a fair amount of math, while opting for a "responsible" career. Since I see math and science problems like fun puzzles to solve, I sincerely enjoyed my studies. But when came the time to consider dimensioning shafts for a living, my career path suddenly sounded far less than attractive.</p>
            <div className="portrait-container">
              <Image className="portrait" fluid={aboutImage.file.childImageSharp.fluid} alt="Photo of Anne-Marie" />
            </div>
            <p>After my undergrad studies, I worked for five years in research, focusing on fluid dynamics simulations. That's where I got exposed to the manipulation of large datasets for the first time. Parallelly, I became a teaching assistant at my alma mater. Teaching is one of the positions that I loved the most in my career. Making complex subjects accessible came naturally to me, and I relished to find ways to clarify them for my audience.</p>
            <p>Having just had our first son, my partner and I had decided then it was time to realize one of our dreams. We moved to Europe, more specifically to Budapest. I used this blank slate to reinvent my career and learned frontend development. I then joined <a href="https://www.inovae.ch/" target="_blank" rel="noreferrer">Inovae</a>, a web agency based in Geneva. During the next four years, I learned the trade's best practices and educated my eye to seamless user experiences (UX). In addition to working with a team which is still today very dear to my heart, I had the chance to collaborate on projects for diverse NGOs and institutions, including the <a href="https://www.uicc.org/" target="_blank" rel="noreferrer">Union for International Cancer Control (UICC)</a>, the <a href="https://edb.wto.org/" target="_blank" rel="noreferrer">World Trade Organization (WTO)</a>, and the <a href="https://www.ecolint.ch/" target="_blank" rel="noreferrer">International School of Geneva</a>.</p>
            <p>During these years at Inovae, I worked both as a frontend developer and as a project manager. I collaborated directly with our clients and a team of developers and designers. I developed a more balanced mind between the big picture of a project and the countless details that make all the difference. I learned the importance of being attentive to my clients' needs while keeping the end-user central in my decision process.</p>
            <p>But, I knew from the beginning that web development wouldn't be an end goal for me, but a vector toward something even more meaningful. I just didn't know what yet…</p>
            <p>What led me to data visualization is the observation that our democracies are currently weakened by extreme polarization and by a broad loss of thrust in science and journalism. I aim to support organizations working to build a better, more fair, and democratic world. Through my contribution to data visualization, I wish to create bridges between our different human realities. I aspire to educate people on complex subjects. I hope my work carries qualities such as transparency, humility, openness, and a deep enthusiasm for life.</p>
            <p>In 2018, I stumbled across the project <a href="http://www.datasketch.es/" target="_blank" rel="noreferrer">Data Sketches</a> by <a href="https://www.visualcinnamon.com/" target="_blank" rel="noreferrer">Nadieh Bremer</a> and <a href="https://sxywu.com/" target="_blank" rel="noreferrer">Shirley Wu</a>, where I discovered that data visualizations could also be extremely creative. I knew right ahead that I HAD to aim in that direction. It was the type of urge that is impossible to ignore. Having just had a new baby at the time, I took things slowly. I went back to the maths I had learned earlier and gained new skills like data analysis with python and data visualizations development with d3.js.</p>
            <p>In the midst of the 2020's pandemic that brought us all to question certain aspects of our life, I leaped. So here I am, pumped and excited for this new path.</p>
            
            <h2>How is it to work with me?</h2>
            <p>The quality which probably describes best my way of working is the enthusiasm I bring to my work. I love what I do and would probably do it as a hobby if it wasn't my career. Creating an experience and a wow effect to users brings me a deep sense of satisfaction, and I simply enjoy refining these small details that make all the difference.</p>
            <p>I currently live in Budapest, and I am used to collaborating with clients and teams worldwide. I am autonomous and enjoy working on my own. But I also cherish human connections, and I am pleased to collaborating with teams to bring a shared vision forward.</p> 
          </div>
          <div id="quote-kian" className="quote quote-full-width">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                  <p className="quote-content">I had the chance to work with Anne-Marie in my team for many years. She has multiple qualities, combining empathy, energy, creativity, and professionalism. She is ready to face challenges outside of her comfort zone, and, on top of that, she delivers outstanding quality. I can only recommend her services to myself and around me.</p>
                  <div className="quote-author">Kian Rieben</div>
                  <div className="quote-organization"><a href="https://www.inovae.ch/" target="_blank" rel="noreferrer">Inovae</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h2>Now, about the types of projects that I do and the tools I use</h2>
            <p>I specialize in creative data visualizations. My work is a delicate balance between data science and a more creative process where I craft a unique piece. My work can meet your brand's guidelines or have a style of its own.</p>
            <p>I love to work on projects from A to Z. From raw data to finding their hidden stories to designing visualization and finally to developing it for the web or an application. I am also a team-work enthusiast and can join your team at any step of the process, for hands-on work or to provide guidance.</p>
            <p>Here’s an overview of my stack. These are the tools I am the most comfortable and experienced using, but I’m always keeping an eye open for the tools that could best serve my clients and projects.</p>
            <div className="skills">
              <div className="skill skill-data">
                <h3>Data Manipulation and Analysis</h3>
                <div className="list">SQL, Python</div>
              </div>
              <div className="skill skill-design">
                <h3>Design</h3>
                <div className="list">Sketch app, Adobe Illustrator, Good ol’ pen and paper</div>
              </div>
              <div className="skill skill-development">
                <h3>Development</h3>
                <div className="list">JavaScript, D3.js, React.js, GatsbyJS, Angular, GSAP, Git, CSS3, SASS, HTML5</div>
              </div>
            </div>
            <h2>Other useful information</h2>
            <div className="info-other">
              <div className="skill skill-languages">
                <h3>Spoken Languages</h3>
                <div className="list">French (native), English (fluent), Hungarian (conversational)</div>
              </div>
              <div className="skill skill-location">
                <h3>Location</h3>
                <div className="list">Budapest (Hungary)</div>
                <div className="list">Collaborating with teams worldwide</div>
              </div>
            </div>
            <Link className="btn btn-teal contact" to="/contact">Contact me</Link>
          </div>
          <CtaPortfolio />
        </div>
      </div>
    </Layout>
  )
}

export default About;