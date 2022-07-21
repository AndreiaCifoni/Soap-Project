import React from "react";
import { Link } from "react-router-dom";
import "../layout/styles.css";

const SoapForm = ({ soap, setSoap, onSubmitHandler }) => {
  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(soap);
        }}
      >
        <div>
          <div>
            <label>Soap Title</label>
            <input
              className="form-input"
              type="text"
              value={soap.title}
              onChange={(e) => setSoap({ ...soap, title: e.target.value })}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              className="form-text"
              value={soap.description}
              onChange={(e) =>
                setSoap({ ...soap, description: e.target.value })
              }
            />
          </div>
          <div>
            <label>Ingredients</label>
            <textarea
              className="form-text"
              value={soap.ingredients}
              onChange={(e) =>
                setSoap({ ...soap, ingredients: e.target.value })
              }
            />
          </div>
          <div>
            <label>Soap Price</label>
            <input
              className="form-input"
              type="text"
              value={soap.price}
              placeholder="$"
              onChange={(e) => setSoap({ ...soap, price: e.target.value })}
            />
          </div>
          <div>
            <label>Image</label>
            <input
              className="form-input"
              type="text"
              value={soap.image}
              onChange={(event) =>
                setSoap({ ...soap, image: event.target.value })
              }
            />
          </div>
        </div>
        <input className="form-btn" type="submit" value="Submit" />
        <Link className="form-btn form-link" to="/soaplist">
          Back to list
        </Link>
      </form>
    </div>
  );
};

export default SoapForm;

//next lines were used in a part of the project to link whit Cloudinary, to be implemented in the future, will not be used right now

// import Axios from "axios";
// import { Image } from "cloudinary-react";
//   const onChangeFile = () => {
//     const formData = new FormData();
//     formData.append("file", soap);
//     formData.append("upload_preset", "yzjnn6ki");
//     console.log(formData);

//     Axios.post(
//       "https://api.cloudinary.com/v1_1/deiacifoni/image/upload",
//       formData
//     ).then((response) => {
//       console.log(response);
//     });
//   };

// <Image
// className="soap-form-img"
// cloudName="deiacifoni"
// publicId="https://res.cloudinary.com/deiacifoni/image/upload/v1654193215/mz2oi8upo89ffvcqy1bu.jpg"
// />
