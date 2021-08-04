import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { Header } from "./header";
import { Headog } from "./headog";
import { Footer } from "./footer";
import { useState, useRef } from "react";

export default function Home() {
  const [modal, setModal] = useState(false)
  const modalRef = useRef()

  return (
    <div className="container mx-auto">
      <Headog />
      <Header />
      <div className="container">
        <div className="text-red-400">
          Hello World!
        </div>
      </div>
      <Footer />
    </div>
  )
}
