import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useRef } from "react";

export default function Home() {
  const [modal, setModal] = useState(false)
  const modalRef = useRef()

  return (
    <div>
      <div className="text-red-400">
        Hello World!
      </div>
      <div className={`modal_help_button_container`}>
        <button className={`modal_help_button`} onClick={() => setModal(true)}>?</button>
        <div className={`modal__overlay ${modal && "is-opened"}`} onClick={e => { if (modalRef.current === e.target) setModal(false) }} ref={modalRef}>
        <div className="modal__box">
          <button className="modal__closeBtn" onClick={() => setModal(false)}>×</button>
          <div className="m-4 text-lg text-white">使い方</div>
          <div className="m-1 ml-16 text-sm text-white">ようこそ。</div>
        <div className="m-4 text-lg text-white">Repository</div>
          <div className={styles.flex_row_container}>
            <div className="m-4 ml-16"><a href="https://github.com/Xeli0701/muda_language_next" rel="noreferrer" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Front(Next.js)</a></div>
            <div className="m-4 ml-16"><a href="https://github.com/Xeli0701/muda_language_api" rel="noreferrer" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Back(FastAPI)</a></div>
            <div className="m-4 ml-16"><a href="https://muda-language-api.herokuapp.com/docs" rel="noreferrer" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Back(API Document)</a></div>
          </div>
        <div className="m-4 text-lg text-white">作った人・連絡先</div>
        <div className="m-4 ml-16 text-white" >
          <a href="https://twitter.com/Xeli0701" rel="noreferrer" target="_blank" className="text-blue-500 font-bold rounded">Xeli0701</a>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
