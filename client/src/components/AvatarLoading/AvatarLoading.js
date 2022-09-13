import React, { useCallback, useState } from 'react';
import axios from 'axios';

export default function AvatarLoading({ img, setImg, setAvatar }) {
//   const [img, setImg] = useState(null);
//   const [avatar, setAvatar] = useState(null);


  const sendFile = useCallback(() => {
    const data = new FormData();
    data.append('avatar', img);
    axios.post('http://localhost:3002/upload/photoAvatar', data, {
      headers: {
        'Content-Type': 'mulpipart/form-data',
      },
    })
      .then((res) => setAvatar(res.data.path));
  }, [img]);
  return (
    <>
      <div>AvatarLoading</div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button type="button" onClick={sendFile}>Save</button>
    </>
  );
}
