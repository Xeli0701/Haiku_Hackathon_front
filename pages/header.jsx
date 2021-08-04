import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { useState, useRef } from "react";

export const Header = () => {
  return (
    <div class="container">
      <Head>
        <title>mudaLang</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Haiku_hackathon_front" />
        <meta property="og:description" content="俳句自動作成の何か" />
        <meta property="og:site_name" content="Haiku" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Xeli0701" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`header`}>
        <Link href="/">
          <a>
            <Image
              src={"/logo.png"}
              alt="ロゴ"
              width={400}
              height={100}
            />
          </a>
        </Link>
        <nav>
          <div>写真をアップロードしたら俳句を作成します</div>
        </nav>
      </header>
    </div>
  )
}
