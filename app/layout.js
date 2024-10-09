import TeamCard from "./card/Home1/TeamCard";
import Service from "./components/Home1/service";
import Testimonials from "./components/Home1/Testimonials";
import About from "./components/Home2/About";
import Contact from "./components/Home2/Contact";
import Office from "./components/Home2/Office";
import Service2 from "./components/Home2/Service2";
import Support from "./components/Home2/Support";
import Team from "./components/Home2/Team";
import Testimonials2 from "./components/Home2/Testimonials2";
import Contact3 from "./components/Home3/Contact3";
import Team3 from "./components/Home3/Team3";
import Testimonials3 from "./components/Home3/Testimonials3";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Testimonials3 />
        <Contact3 />
        <Team3 />
        <Support />
        <About />
        <Contact />
        {/* <Office/> */}
        {/* <Service2/> */}
        {/* <Testimonials/> */}
        {/* <Team/> */}
        {/* <Service/> */}
        {/* <Testimonials2/> */}
      </body>
    </html>
  );
}
