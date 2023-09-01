import React from "react";

const Products = ({ name, imagePath ,updateItemCount}) => {
  const handleChange = (event) => {
    const currentValue = event.target.value;
    updateItemCount(name,currentValue);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={`http://localhost:4000/${imagePath}`}
        style={{ width: "75%" }}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>{name}</label>
        <input
          style={{ marginLeft: "7px" }}
          type="number"
          name="quantitu"
          min={0}
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Products;
