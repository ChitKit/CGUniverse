import React, { useState } from 'react';
import './ModelUploader.css';

export default function ModelUploader({ setModalActive }) {
//   const [drag, setDrag] = useState(false);

  //   const dragStartHandler = (e) => {
  //     e.preventDefault();
  //     setDrag(true);
  //   };

  //   const dragLeaveHandler = (e) => {
  //     e.preventDefault();
  //     setDrag(false);
  //   };
  //   const onDropHandler = (e) => {
  //     e.preventDefault();
  //     const files = [...e.dataTransfer.files];

  //     setDrag(false);
  //   };

  return (
    <div className="uploader">
      <form>
        <label>Модель</label>
        <input />
      </form>
      {/* <div className="uploadImageModel">Перетащите изображение модели сюда</div> */}
    </div>
  );
}
