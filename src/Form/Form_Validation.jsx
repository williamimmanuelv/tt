import { useState } from 'react';
import './Form_Validation.css';

function Form_Validation() {
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");

  const [ans1, setans1] = useState(false);
  const [ans2, setans2] = useState(false);
  const [ans3, setans3] = useState(false);
  const [ans4, setans4] = useState(false);
  const [ans5, setans5] = useState(false);

  const val1 = (e) => {
    const val = e.target.value;
    const pattern = /^[a-z]{1,16}$/
    setState1(val);
    setans1(pattern.test(val));
    console.log(ans1);
  };

  const val2 = (e) => {
    const val = e.target.value;
    const pattern = /^[0-9]{10}$/
    setState2(val);
    setans2(pattern.test(val));
    console.log(ans2);
  };

  const val3 = (e) => {
    const val = e.target.value;
    const pattern = /^[a-zA-Z1-9_]{0,16}@[a-z]{2,5}\.[a-z]{2,5}$/;
    setState3(val);
    setans3(pattern.test(val));

    console.log(ans3);
  };

  const val4 = (e) => {
    const val = e.target.value;
    const pattern = /^[a-zA-Z_,.'":;]{1,22}$/
    setState4(val);
    setans4(pattern.test(val));
    console.log(ans4);
  };

  const val5 = (e) => {
    const val = e.target.value;
    const pattern = /^[a-zA-Z_,.'":;]{1,22}$/
    setState5(val);
    setans5(pattern.test(val));
    console.log(ans5);

  };

  const [fAns, setfAns] = useState(false);

  const check = () => {
    console.log('from 1' + ans1);
    console.log('from 2' + ans2);
    console.log('from 3' + ans3);
    console.log('from 4' + ans4);
    console.log('from 5' + ans5);

    const tf = ans1 && ans2 && ans3 && ans4 && ans5;

    if (tf === true) {
      console.log("ok true");
      setfAns(true)
      alert('ok')
      setState1("");
      setState2("");
      setState3("");
      setState4("");
      setState5("");
    } else if (tf === false) {
      console.log("ok false");
      alert('form data is not in the right format or not filled properly.Plese try again')
    }


  };

  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const newImgs = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));

    setImages((prev) => [...prev, ...newImgs]);
  };

  const deleteImage = (index) => {
    setImages((prev) => prev.filter((value, i) => i !== index));
  };


  return (
    <>
      <div className="main">
        <input value={state1} onChange={val1} type="text" placeholder="Enter Your name " />
        <input value={state2} onChange={val2} type="text" placeholder="Enter Your Phone Number " />
        <input value={state3} onChange={val3} type="email" placeholder="Enter Your Email " />
        <input value={state4} onChange={val4} type="text" placeholder="Enter your address " />
        <input value={state5} onChange={val5} type="text" placeholder="Enter your Profile " />

        <input type="file" onChange={handleImageChange} name="myFiles" multiple />

        <button className="check" onClick={check}> check </button>
      </div>
      {fAns ? <p className='rw'> you're right and can enter </p> : <p className='rw'>Enter your info!</p>}

      <div className='sub-main'>
        {images.map((img, index) => (
          <div key={index} >
            <img className="img1" src={img.url} />
            <button onClick={() => deleteImage(index)}> delete </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Form_Validation;
