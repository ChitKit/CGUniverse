/* eslint-disable no-nested-ternary */
// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BasketShop from './components/BasketShop/BasketShop';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Page from './components/Page/Page';
import Profile from './components/Profile/Profile';
import ProfileLike from './components/ProfileLike/ProfileLike';
import Favourite from './components/Favourite/Favourite';
import { setAuth } from './redux/actions/authActions';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import FindComand from './components/FindComand/FindComand';
import AvatarLoading from './components/AvatarLoading/AvatarLoading';
import SceneOneModel from './components/SceneOneModel/SceneOneModel';
import EditProgile from './components/EditProgile/EditProgile';
import SearchResult from './components/SearchResult/SearchResult';
import ModelUploader from './components/ModelUploader/ModelUploader';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [wind, setwind] = useState('');
  const [modelId, setModelId] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3002/auth/auth', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setAuth(res));
      });
  }, []);

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Scene />} />
      </Routes> */}
      {modalActive
      && (
      <Modal
        active={modalActive}
        setActive={setModalActive}
      >
        {wind === 'log'
          ? (
            <Login setModalActive={setModalActive} />
          ) : wind === 'reg'
            ? (
              <Registration setModalActive={setModalActive} />
            ) : wind === 'basket'
              ? (
                <BasketShop />
              ) : wind === 'avatar'
                ? (
                  <AvatarLoading img={img} setImg={setImg} setAvatar={setAvatar} auth={auth} />
                ) : wind === 'onemodel'
                  ? (
                    <SceneOneModel modelId={modelId} setModalActive={setModalActive} />
                  ) : wind === 'editProfile'
                    ? (
                      <EditProgile auth={auth} setModalActive={setModalActive} />
                    ) : wind === 'modelUpload'
                      ? (
                        <ModelUploader auth={auth} setModalActive={setModalActive} />
                      ) : (
                        <p />
                      )}
      </Modal>
      )}
      {/* <Page /> */}
      <Header
        setModalActive={setModalActive}
        setwind={setwind}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {
      (searchQuery.length !== 0)
        && (
        <SearchResult
          setwind={setwind}
          setModelId={setModelId}
          setModalActive={setModalActive}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        )
        }
      <Routes>
        <Route path="/" element={<Main setModalActive={setModalActive} setwind={setwind} />} />
        <Route path="/page" element={<Page />} />
        <Route path="/profile" element={<Profile setModalActive={setModalActive} setwind={setwind} avatar={avatar} setModelId={setModelId} />} />
        <Route path="/profileLike" element={<ProfileLike />} />
        <Route path="/findComand" element={<FindComand />} />
      </Routes>

    </div>
  );
}

export default App;
