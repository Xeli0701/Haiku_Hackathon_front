import { Header } from "../components/header";
import { Headog } from "../components/headog";
import { Haiku } from "../components/haiku";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Headog />
      <Header />
      <Haiku />
      <Footer />
    </div>
  )
}
