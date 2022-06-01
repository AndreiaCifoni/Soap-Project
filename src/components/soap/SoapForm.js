import React from "react";

const SoapForm = ({ soap, setSoap }) => {
  return (
    <div>
      <form>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            value={soap.product}
            onChange={(e) => setSoap({ ...soap, product: e.target.value })}
          />
        </div>
        <div>
          <label>Img</label>
          <img
            src={soap.url}
            alt=""
            onChange={(e) => setSoap({ ...soap, url: e.target.value })}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={soap.description}
            onChange={(e) => setSoap({ ...soap, description: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default SoapForm;
