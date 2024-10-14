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
import About3 from "./components/Home3/About3";
import Contact3 from "./components/Home3/Contact3";
import Expert3 from "./components/Home3/Expert3";
import Hero3 from "./components/Home3/Hero3";
import Navbar from "./components/Home3/Navbar";
import TaxFile from "./components/Home3/TaxFile";
import TaxPlan from "./components/Home3/TaxPlan";
import Team3 from "./components/Home3/Team3";
import Testimonials3 from "./components/Home3/Testimonials3";
import Trusted from "./components/Home3/Trusted";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar />
        <Hero3 />
        <Trusted />
        <About3 />
        <TaxPlan />
        <TaxFile />
        <Expert3 />
        <Testimonials3 />
        <Contact3 />
        <Team3 />
        <Support />
        {/* <About /> */}
        {/* <Contact /> */}
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
