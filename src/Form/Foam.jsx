import { useState } from "react";
import "./Foam.css";
import Image from "./Image";

function Foam() {
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");

  const [err1, setErr1] = useState("");
  const [err2, setErr2] = useState("");
  const [err3, setErr3] = useState("");
  const [err4, setErr4] = useState("");
  const [err5, setErr5] = useState("");

  const [ans1, setAns1] = useState(null);
  const [ans2, setAns2] = useState(null);
  const [ans3, setAns3] = useState(null);
  const [ans4, setAns4] = useState(null);
  const [ans5, setAns5] = useState(null);

  const val1 = (e) => {
    const val = e.target.value;
    setState1(val);

    const pattern = /^[a-zA-Z ]{3,16}$/;
    if (!pattern.test(val)) {
      setAns1(false);
      setErr1("Name must be 3–16 letters");
    } else {
      setAns1(true);
      setErr1("");
    }
  };

  const val2 = (e) => {
    const val = e.target.value.replace(/\D/g, ""); // only digits allowed
    setState2(val);

    const pattern = /^[0-9]{10}$/;
    if (!pattern.test(val)) {
      setAns2(false);
      setErr2("Phone number must be exactly 10 digits");
    } else {
      setAns2(true);
      setErr2("");
    }
  };

  const val3 = (e) => {
    const val = e.target.value;
    setState3(val);

    const pattern = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,5}$/;
    if (!pattern.test(val)) {
      setAns3(false);
      setErr3("Enter a valid email address");
    } else {
      setAns3(true);
      setErr3("");
    }
  };

  const val4 = (e) => {
    const val = e.target.value;
    setState4(val);

    const pattern = /^[a-zA-Z0-9 ,.'"-]{5,}$/;
    if (!pattern.test(val)) {
      setAns4(false);
      setErr4("Address must be at least 5 characters");
    } else {
      setAns4(true);
      setErr4("");
    }
  };

  const val5 = (e) => {
    const val = e.target.value;
    setState5(val);

    const pattern = /^[a-zA-Z ]{3,20}$/;
    if (!pattern.test(val)) {
      setAns5(false);
      setErr5("Profile must be 3–20 letters");
    } else {
      setAns5(true);
      setErr5("");
    }
  };

  const [fAns, setFAns] = useState(false);

  const check = () => {
    const ok = ans1 && ans2 && ans3 && ans4 && ans5;

    if (ok) {
      setFAns(true);
      alert("Form submitted successfully");
      setState1("");
      setState2("");
      setState3("");
      setState4("");
      setState5("");
    } else {
      alert("Form data invalid — fix your inputs");
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
    setImages((prev) => prev.filter((img, i) => i !== index));
  };

  return (
    <>
      <div className="form-container">

        <div className="input-group">
          <input
            value={state1}
            onChange={val1}
            className={err1 ? "input-error" : ""}
            type="text"
            placeholder="Enter Your Name"
          />
          {err1 && <span className="error-text">{err1}</span>}
        </div>

        <div className="input-group">
          <input
            value={state2}
            onChange={val2}
            className={err2 ? "input-error" : ""}
            type="text"
            placeholder="Enter Your Phone Number"
          />
          {err2 && <span className="error-text">{err2}</span>}
        </div>

        <div className="input-group">
          <input
            value={state3}
            onChange={val3}
            className={err3 ? "input-error" : ""}
            type="email"
            placeholder="Enter Your Email"
          />
          {err3 && <span className="error-text">{err3}</span>}
        </div>

        <div className="input-group">
          <input
            value={state4}
            onChange={val4}
            className={err4 ? "input-error" : ""}
            type="text"
            placeholder="Enter Your Address"
          />
          {err4 && <span className="error-text">{err4}</span>}
        </div>

        <div className="input-group">
          <input
            value={state5}
            onChange={val5}
            className={err5 ? "input-error" : ""}
            type="text"
            placeholder="Enter Your Profile"
          />
          {err5 && <span className="error-text">{err5}</span>}
        </div>

        <div className="input-group">
          <input type="file" onChange={handleImageChange} multiple />
        </div>

        <button className="submit-btn" onClick={check}>
          Submit
        </button>
      </div>

      {fAns ? (
        <p className="rw">You're right and can enter</p>
      ) : (
        <p className="rw">Enter your info!</p>
      )}

      <div className="sub-main">
        {images.map((img, i) => (
          <div key={i} className="img-box">
            <img className="img1" src={img.url} alt="" />
            <button onClick={() => deleteImage(i)}>Delete</button>
          </div>
        ))}
      </div>

      <Image />
    </>
  );
}

export default Foam;
