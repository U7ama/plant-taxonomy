import React, { useState } from "react";
import plant from "../src/images/plant.svg";
import hand from "../src/images/hand.svg";
import desc from "../src/images/description.svg";
import Commom from "./Commom";
import './index.css';

const Home = () => {
  const [image, setImage] = useState({ preview: '', data: '' })
  // const [status, setStatus] = useState('')
  //const [process,setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    await fetch('http://localhost:5000/image', {
      method: 'POST',
      body: formData,
    })

    // if (response) {
    //   setStatus(response.statusText)}
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  return (
    <>
      <div style={{ position: "absolute", top: "220px", left: "120px" }} className="container">
        <div className="row" >
          <div className="ml-5 col-lg-12" >
            <form onSubmit={handleSubmit}>
              <input type='file' name='file' onChange={handleFileChange}></input>
              <button
                style={{ width: "160px", height: "40px", color: "white", fontSize: "12px", background: "#75b375", borderColor: "#75b375", borderRadius: "20px" }}
                type='submit'><strong>Select</strong>
              </button>
            </form>
          </div>
          <div className="col-lg-12">
            <img className="bgimg mt-3 ml-5" src={image.preview} width='320' height='140' style={{ borderRadius: "5px 5px 5px 5px" }} alt="ChoosePi" />
          </div>
        </div>
      </div>
      <Commom
        name="Identify Plant Species"
        imgsrc1={hand}
        imgsrc={plant}
        imgsrc2={desc}
        visit="/identify"
        btname="Identify"
      />


    </>
  );
};

export default Home;
