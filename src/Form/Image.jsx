import { useRef, useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import "./Image.css";

export default function Image() {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);

    const mapped = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));

    setImages((prev) => [...prev, ...mapped]);
  };

  const removeImage = (url) => {
    setImages((prev) => prev.filter((img) => img.url !== url));
  };

  return (
    <div className="upload-container">
      <h3>Upload your images</h3>

      <div className="grid-wrapper">
        {images.map((img) => (
          <div className="img-box" key={img.url}>
            <img src={img.url} alt="" className="img-content" />

            <div
              className="delete-overlay"
              onClick={() => removeImage(img.url)}
            >
              <FaTrash size={28} />
            </div>
          </div>
        ))}

        <div
          className="img-box add-box"
          onClick={() => fileInputRef.current.click()}
        >
          <FaPlus size={36} />
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFiles}
        multiple
      />
    </div>
  );
}