import React, { useCallback, useState } from 'react';
import axios from 'axios';

export default function AvatarLoading({
  img, setImg, setAvatar,
}) {
  const sendFile = useCallback(async () => {
    const data = new FormData();
    data.append('avatar', img);
    console.log(data);
    axios.post('http://localhost:3002/upload/photoAvatar', data, {
      headers: {
        'Content-Type': 'mulpipart/form-data',
      },
      withCredentials: true,
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
