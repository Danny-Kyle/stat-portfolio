import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <main>
      <Navbar/>
      <Intro />
      {/* <Skills /> */}
      <Works />
      <Contact/>
    </main>
  )
}

export default App
