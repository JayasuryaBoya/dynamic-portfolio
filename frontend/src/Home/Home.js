import Projects from "../Components/projects/Project"
import Skills from '../Components/Skills/Skills'
import Hero from "../Components/Hero/Hero"
import About from "../Components/About/About"
function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
    </div>
  )
}
export default Home