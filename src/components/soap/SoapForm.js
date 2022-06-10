import React from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";
import "../layout/styles.css";

const SoapForm = ({ soap, setSoap }) => {
  const onChangeFile = () => {
    const formData = new FormData();
    formData.append("file", soap);
    formData.append("upload_preset", "yzjnn6ki");
    console.log(formData);

    Axios.post(
      "https://api.cloudinary.com/v1_1/deiacifoni/image/upload",
      formData
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="soap-form">
      <form>
        <div>
          <div className="soap-input">
            <label>Product Name</label>
            <input
              type="text"
              value={soap.product}
              onChange={(e) => setSoap({ ...soap, product: e.target.value })}
            />
          </div>
          <div className="soap-input">
            <label>Url</label>
            <input
              type="file"
              value={soap.url}
              onChange={(event) => setSoap(event.target.files[0])}
              multiple
            />
            <Image
              className="soap-form-img"
              cloudName="deiacifoni"
              publicId="https://res.cloudinary.com/deiacifoni/image/upload/v1654193215/mz2oi8upo89ffvcqy1bu.jpg"
            />
          </div>
          <div className="soap-input">
            <label>Description</label>
            <textarea
              value={soap.description}
              onChange={(e) =>
                setSoap({ ...soap, description: e.target.value })
              }
            />
          </div>
        </div>
        <input
          className="soap-form-btn"
          onClick={onChangeFile}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SoapForm;
