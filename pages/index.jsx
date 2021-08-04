import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { Header } from "./header";
import { Footer } from "./footer";
import { useState, useRef } from "react";

export default function Home() {
  const [modal, setModal] = useState(false)
  const modalRef = useRef()

  return (
    <div class="container">
      <Header />
      <div class="container">
        <div className="text-red-400">
          Hello World!
        </div>
      </div>
      <Footer />
    </div>
  )
}
