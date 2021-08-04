import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { Header } from "../components/header";
import { Headog } from "../components/headog";
import { Footer } from "../components/footer";
import { useState, useRef } from "react";

function play() {
  const element1 = document.getElementById('haiku1');
  const element2 = document.getElementById('haiku2');
  const element3 = document.getElementById('haiku3');
  element1.className = "text-opacity-100";
  element2.className = "text-opacity-100";
  element3.className = "text-opacity-100";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      element1.className = "haiku fade-in-bottom text-4xl px-5 py-20";
      element2.className = "haiku fade-in-bottom text-4xl px-5 py-10";
      element3.className = "haiku fade-in-bottom text-4xl px-5 ";
    });
  });
}

export const Haiku = () => {
  const [haiku3, setHaiku3] = useState("ありますね");
  const [haiku2, setHaiku2] = useState("俳句は風情が");
  const [haiku1, setHaiku1] = useState("５７５");
  const [dogURL, setDogUrl] = useState("https://images.dog.ceo/breeds/cairn/n02096177_1596.jpg");

  return (
    <main className="container mx-auto">
    <div className="flex justify-center">
        <Image className={`haiku_image px-5`} src={dogURL} alt="dog" width={300} height={200}></Image>
        <div className="static flex justify-center px-5 py-10">
        <div id="haiku1" className={`haiku fade-in-bottom text-4xl px-5 py-20`}>{haiku3}</div>
        <div id="haiku2" className={`haiku fade-in-bottom text-4xl px-5 py-10`}>{haiku2}</div>
        <div id="haiku3" className={`haiku fade-in-bottom text-4xl px-5 `}>{haiku1}</div>
        </div>
    </div>
    <div className="flex justify-center py-20">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => fetch("https://haiku-hackathon-back.herokuapp.com/haiku/a")
            .then(response => response.json())
            .then((data) => {
            if (data.status === "success") {
                setHaiku3(data.message3)
                setHaiku2(data.message2)
                setHaiku1(data.message1)
                play()
            }
            })}
        >Press to Generate Haiku</button>
    </div>
    
    <div>
    <button
        onClick={() => fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then((data) => {
            if (data.status === "success") {
            setDogUrl(data.message)
            }
        })}
    >Press to Change Dog</button>
    </div>
    </main>
  )
}
