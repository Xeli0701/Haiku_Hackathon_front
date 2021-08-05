import Image from 'next/image'
import { useState, useRef } from "react";

function play() {
  const element1 = document.getElementById('haiku1');
  const element2 = document.getElementById('haiku2');
  const element3 = document.getElementById('haiku3');
  const element4 = document.getElementById('haiku_image');
  element1.className = "text-opacity-100";
  element2.className = "text-opacity-100";
  element3.className = "text-opacity-100";
  element4.className = "haiku_image";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      element1.className = "haiku fade-in-bottom  text-left   text-4xl px-5 pb-10";
      element2.className = "haiku fade-in-bottom2 text-center text-4xl px-5 py-10";
      element3.className = "haiku fade-in-bottom3 text-right  text-4xl px-5 pt-10";
      element4.className = "haiku_image fade-in-bottom3 px-5";
    });
  });
}

function readHaiku() {
  const element1 = document.getElementById('haiku1');
  const element2 = document.getElementById('haiku2');
  const element3 = document.getElementById('haiku3');
  return element1.textContent + "、" + element2.textContent + "、" + element3.textContent
}

export const Haiku = () => {
  const [userImage, setImage] = useState("https://images.dog.ceo/breeds/cairn/n02096177_1596.jpg");
  const [haiku3, setHaiku3] = useState("ありますね");
  const [haiku2, setHaiku2] = useState("俳句は風情が");
  const [haiku1, setHaiku1] = useState("ごおしちご");

  return (
    <main id="main_container" className="container mx-auto">
      <div className="w-full h-full mx-auto py-96 shutter">
        <div className="flex fade-in-bottom2 justify-evenly">
          <Image src={"/logo.webp"} alt="ロゴ" width={400} height={100} />
        </div>
      </div>

      <div className="flex justify-evenly py-10">
          <Image id="haiku_image" className={`haiku_image fade-in-bottom3 px-5`} src={userImage} alt="俳句のイメージ" width={400} height={400}></Image>
          <div className="static flex px-5 py-10">
              <div id="haiku3" className={`haiku fade-in-bottom3 text-right  text-4xl px-5 pt-10`}>{haiku3}</div>
              <div id="haiku2" className={`haiku fade-in-bottom2 text-center text-4xl px-5 py-10`}>{haiku2}</div>
              <div id="haiku1" className={`haiku fade-in-bottom  text-left   text-4xl px-5 pb-10`}>{haiku1}</div>
          </div>
      </div>

      <div className="flex justify-evenly">
        <button className="text-base leading-normal w-32 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150"
          onClick={() => {
            let uttr = new SpeechSynthesisUtterance(readHaiku())
            speechSynthesis.speak(uttr)
          }
        }>音声再生
        </button>
      </div>

      <div className="flex justify-evenly py-10">
        <button className="text-base leading-normal w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150"
        onClick={() => fetch("https://haiku-hackathon-back.herokuapp.com/haiku/a")
            .then((response) => response.json())
            .then((data) => {
            if (data.status === "success") {
                setHaiku3(data.message3)
                setHaiku2(data.message2)
                setHaiku1(data.message1)
                setTimeout(play(),500)
            }
            })}
        >Press to Generate Haiku</button>

        <label
        className="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150" >
          <i className="fas fa-cloud-upload-alt fa-3x"></i>
          <span className="text-base leading-normal">Select Picture File</span>
          <input id="file" name="file" type="file" className="hidden"
            onChange = {() => fetch("https://haiku-hackathon-back.herokuapp.com/haiku/a")
              .then((response) => response.json())
              .then((data) => {
                if (data.status === "success") {
                  var img = document.getElementById('file').files[0];
                  let reader = new FileReader()
                  if (img !== undefined){
                    reader.readAsDataURL(img)
                    reader.onload = function() {
                      setImage(reader.result)
                    }
                  }
                  setHaiku3(data.message3)
                  setHaiku2(data.message2)
                  setHaiku1(data.message1)
                  setTimeout(play(),500)
                }
              }
            )}
          />
        </label>
      </div>
    </main>
  )
}
