import React, { useState } from "react";

export default function Card({ name, img, options }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <div key={name} className="card" onClick={() => setShow(!show)}>
        {show ? (
          <Frontcard name={name} img={img} />
        ) : (
          <Info options={options} />
        )}
      </div>
    </>
  );
}

function Info({ options }) {
  return (
    <ul>
      {options.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Frontcard({ img, name }) {
  return (
    <div>
      <img src={img} alt="" />
      <h4>{name}</h4>
    </div>
  );
}
