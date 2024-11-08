import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Section from "./components/Section"

function App() {

  return (
    <div>
      <NavBar/>
      <Hero/>
      <Section/>
    <footer className="bg-black text-white w-full h-full">
      Footer
    </footer>
    </div>
  )

}

export default App
