import About from "../About/about";
import Banner from "../Banner/banner";
import Contact from "../Contact/contact";
import Portfolio from "../Portfolio/portfolio"

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}
