import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import CtaPortfolio from '../components/CtaPortfolio'

const getImage = graphql`
  {
    file(relativePath: {eq: "portrait-thin.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const aboutImage = useStaticQuery(getImage)

  return (
    <Layout>
      <section className="page-about">
        <div className="page-header">
          <div className="container">
            <h1>About me</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <h3>Hi there, welcome to my site!</h3>
            <p>Now that you’ve reached my about page, you probably already know that I Design and Develop creative Data Visualizations. If you came to this page to know if my soft and technical skills and the tools I use match your project, the button below will bring you exactly to the right place.</p>
            <Link className="btn btn-skills " to="#quote-kian">Learn more about my skills</Link>
            <p>If you want to know more about me and my background, I condensed the info that might interest you in the following section.</p>
            
            <h2>My background and how I came to Data Visualizations, a long story short…</h2>
            <p>I grew up in Arvida, a small industrial town located in the province of Quebec, in Canada. As many kids, I thought for a very long time that I hated maths and that I would never even be good at them. I was more the literature and artsy type and thought that was it! But around the age of 14, one of my teachers was explaining maths so well that I started to actually enjoy them. I enjoyed them so much, that I ended up earning a B.Sc. in mechanical engineering. Let’s just say that this path sounded like a way to still do a fair amount of math, while opting for a “responsible” career. Since I see math and science problems like fun puzzles to solve, I really enjoyed my studies. But when came the time to consider dimensioning shafts for a living… let’s say this was less then attractive to me.</p>
            <div className="portrait-container">
              <svg className="portrait-bubbles-left" xmlns="http://www.w3.org/2000/svg" width="461" height="213"><defs><filter id="glow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g fill="none"><circle cx="367.221" cy="10.756" r="10.6" fill="#F25857" fill-opacity=".294" transform="rotate(90 367.221 10.756)"/><circle cx="401.673" cy="58.974" r="58.974" fill="#F25857" fill-opacity=".601" transform="rotate(90 401.673 58.974)"/><circle cx="192.392" cy="37.333" r="8.254" fill="#F25857" fill-opacity=".7" transform="rotate(90 192.392 37.333)"/><circle cx="171.896" cy="35.361" r="8.035" fill="#F25857" fill-opacity=".2" transform="rotate(90 171.896 35.36)"/><circle cx="197.541" cy="49.809" r="8.038" fill="#F25C69" fill-opacity=".5" transform="rotate(90 197.541 49.809)"/><circle cx="104.31" cy="10.565" r="8.003" fill="#5397A6" fill-opacity=".2" transform="rotate(90 104.31 10.565)"/><circle cx="348.323" cy="39.759" r="8.027" fill="#5397A6" fill-opacity=".875" transform="rotate(90 348.323 39.76)"/><circle cx="165.646" cy="86.423" r="34" fill="#F2BB9C" fill-opacity=".7" transform="rotate(90 165.646 86.423)"/><circle cx="204.996" cy="30.729" r="8.65" fill="#F25C69" transform="rotate(90 204.996 30.73)"/><circle cx="265.782" cy="58.094" r="23.6" fill="#F25C69" fill-opacity=".763" transform="rotate(90 265.782 58.094)"/><circle cx="183.646" cy="44.079" r="5" fill="#F2BB9C" fill-opacity=".6" transform="rotate(90 183.646 44.08)"/><circle cx="34" cy="178.324" r="34" fill="#F2BB9C" fill-opacity=".803" transform="rotate(90 34 178.324)"/><circle cx="152.05" cy="183.956" r="13.2" fill="#5397A6" transform="rotate(90 152.05 183.956)"/><circle cx="82.282" cy="37.609" r="10.6" fill="#F2BB9C" fill-opacity=".8" transform="rotate(90 82.282 37.609)"/><circle cx="116.581" cy="43.049" r="34" fill="#F25C69" fill-opacity=".704" transform="rotate(90 116.581 43.05)"/><circle cx="107.88" cy="138.949" r="60" fill="#5397A6" fill-opacity=".568" transform="rotate(90 107.88 138.949)"/><circle cx="68.294" cy="38.659" r="5" fill="#5397A6" fill-opacity=".7" transform="rotate(90 68.294 38.659)"/></g></svg>
              <Image className="portrait" fluid={aboutImage.file.childImageSharp.fluid} alt="Photo of Anne-Marie" />
              <svg className="portrait-bubbles-right" xmlns="http://www.w3.org/2000/svg" width="229" height="159"><g fill="none" transform="translate(.825)"><circle cx="50.467" cy="99.021" r="34" fill="#5397A6" fill-opacity=".715" transform="rotate(90 50.467 99.02)"/><circle cx="129.29" cy="71.699" r="60" fill="#F25C69" fill-opacity=".584" transform="rotate(90 129.29 71.699)"/><circle cx="38.408" cy="38.265" r="38.265" fill="#F25857" fill-opacity=".4" transform="rotate(90 38.408 38.265)"/><circle cx="158.749" cy="134.769" r="13.2" fill="#F25857" fill-opacity=".311" transform="rotate(90 158.75 134.77)"/><circle cx="83.35" cy="22.266" r="8.52" fill="#F25857" fill-opacity=".9" transform="rotate(90 83.35 22.266)"/><circle cx="194.165" cy="124.537" r="34" fill="#F2BB9C" fill-opacity=".3" transform="rotate(90 194.165 124.537)"/></g></svg>
            </div>
            <p>After my undergrad studies, I worked for 5 years in research, focusing on fluid dynamics simulations. That’s where I got exposed for the first time to the manipulation of large datasets. At the same time, I became a teaching assistant at my alma mater. This is one of the positions I loved the most in my career. Clarifying and making complex subjects accessible came naturally to me.</p>
            <p>Then, my partner and I had our first son. We decided it was time to realize one of our dreams and moved to Europe, more specifically to Budapest. I used this blank slate to reinvent my career a bit and learned frontend development. I then joined Inovae (link), a web agency based in Geneva. During the next 4 years, I learned the trade’s best practices and trained my eye for seamless user experiences (UX). In addition to working with a team with is still today very dear to my hearth, I had the chance to collaborate on projects for diverse NGOs and institutions, including the <a href="https://www.uicc.org/" target="_blank" rel="noreferrer">Union for International Cancer Control (UICC)</a>, the <a href="https://edb.wto.org/" target="_blank" rel="noreferrer">World Trade Organization (WTO)</a> and the <a href="https://www.ecolint.ch/" target="_blank" rel="noreferrer">International School of Geneva</a>.</p>
            <p>During these years at Inovae, I worked both as a frontend developer and as a project manager, collaborating directly with our clients and a team of developers and designers. I developed a balanced mind between the big picture of a project and the countless details that make all the difference. I learned the importance of being attentive to the needs of my clients, while keeping the end user central in my decision process.</p>
            <p>But, I knew from the beginning that web development wouldn’t be an end goal for me, but a vector toward something even more meaningful. I just didn’t know what, yet…</p>
            <p>What led me to data visualization is a global observation that our democracies are weakened by extreme polarization and by a broaden lost of thrust in science and journalism. My aim is to support organizations which are working to build a better, more fair world. Through my work in data visualization, I hope to create bridges between our different human realities. I hope to contribute to education on complex subject. I hope for my work to carry qualities such as transparency, humility, openness and a deep enthusiasm for life.</p>
            <p>In 2018, I stumbled across the work of <a href="https://www.visualcinnamon.com/" target="_blank" rel="noreferrer">Nadieh Bremer</a>, where I discovered that data visualizations could also be extremely creative. I knew right ahead that I HAD TO do something similar. It was the type of urge that is impossible to ignore. Having just had a new baby at the time, I took things slowly. Went back to the maths I had learned earlier and gained new skills like data analysis with python and data visualizations development with d3.js.</p>
            <p>With the pandemic that brought us all to a certain level of questioning in 2020, I made the leap. So here I am, pumped and excited for this new path.</p>
          
            <h2>How is it to work with me?</h2>
            <p>The quality which probably describes best my way of working is the enthusiasm I bring to my work. I simply love what I do and would probably do it as a hobby if it wasn’t my career. Creating an experience and a wow effect to users brings me a deep sense of satisfaction and I love spending time on these small details that make all the difference.</p>
            <p>I currently live in Budapest and I am used to collaborate with clients and team from all around the world. I am autonomous and enjoy working on my own. But I also cherish human connections and I am pleased to collaborating with teams to bring a common vision forward.</p> 
          </div>
          <div id="quote-kian" className="quote quote-full-width">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                  <p className="quote-content">I had the chance to work with Anne-Marie in my team for many years. She has multiple qualities, combining empathy, energy, creativity and professionalism. She is ready to face challenges outside of her comfort zone and, on top of that, she delivers with outstanding quality. I can only recommend her services to myself and around me.</p>
                  <div className="quote-author">Kian Rieben</div>
                  <div className="quote-organization"><a href="https://www.inovae.ch/" target="_blank" rel="noreferrer">Inovae</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h2>Now, about the types of projects that I do and the tools I use…</h2>
            <p>I specialize in creative data visualizations. What I mean by that is that I don’t provide basic visualizations like bar and line graphs for example. My work is a fine balance between data science and a more creative process where a unique piece is crafted. This work can meet your brand’s guidelines or have it’s own flair.</p>
            <p>I love to work on projects from A to Z. From raw data, to finding their hidden stories, to designing a visualization and finally to developing it for the web or an application. I am also a team-work enthusiast an can easily join your team at any step of the process, whether to guide your team toward the creation a visualization or to implement a project which has been previously designed.</p>
            <p>Here’s an overview of my stack. These are the tools I am the most comfortable and experienced using, but I’m always keeping an eye open for the tools that could best serve my clients and projects.</p>
            <div className="skills">
              <div className="skill skill-data">
                <h3>Data manipulation and Analysis</h3>
                <div className="list">SQL, Python</div>
              </div>
              <div className="skill skill-design">
                <h3>Design</h3>
                <div className="list">Sketch app, Adobe Illustrator, Good ol’ pen and paper</div>
              </div>
              <div className="skill skill-development">
                <h3>Development</h3>
                <div className="list">JavaScript, D3.js, React.js, GatsbyJS, Angular, GSAP, CSS3, SASS, HTML5</div>
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
            <a className="btn contact" href="/">Contact me</a>
          </div>
          <CtaPortfolio />
        </div>
      </section>
    </Layout>
  )
}

export default About;