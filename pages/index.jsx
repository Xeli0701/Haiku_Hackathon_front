import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { Header } from "../components/header";
import { Headog } from "../components/headog";
import { Haiku } from "../components/haiku";
import { Footer } from "../components/footer";
import { useState, useRef } from "react";

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
