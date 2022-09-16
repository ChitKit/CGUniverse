/* eslint-disable max-len */
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
import Comment from './components/Comment/Comment';
import AddPost from './components/FindComand/AddPost';
import SearchResult from './components/SearchResult/SearchResult';
import ModelUploader from './components/ModelUploader/ModelUploader';
import Footer from './components/Footer/Footer';
import FAvatarLoading from './components/AvatarLoading/FAvatarLoading';
import PrevAuth from './components/PrevAuth/PrevAuth';
import ForBusiness from './components/ForBusiness/ForBusiness';
import EditBiography from './components/EditBiography/EditBiography';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [wind, setwind] = useState('');
  const [modelId, setModelId] = useState(1);
  const [activeSearch, setActiveSearch] = useState(true);
  const [postFlag, setpostFlag] = useState(true);
  const [authCategory, setAuthCategory] = useState('Все категории');
  const [modelFlag, setModelFlag] = useState(false);

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
        modelFlag={modelFlag}
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
                  <AvatarLoading img={img} setImg={setImg} setAvatar={setAvatar} auth={auth} setModalActive={setModalActive} />
                ) : wind === 'onemodel'
                  ? (
                    <div className="api-convas-container-comment">
                      <SceneOneModel modelId={modelId} setModalActive={setModalActive} setModelFlag={setModelFlag} />
                      <Comment modelId={modelId} />
                    </div>
                  ) : wind === 'editProfile'
                    ? (
                      <EditProgile auth={auth} setModalActive={setModalActive} />
                    ) : wind === 'editBio'
                      ? (
                        <EditBiography auth={auth} setModalActive={setModalActive} />
                      ) : wind === 'modelUpload'
                        ? (
                          <ModelUploader auth={auth} setModalActive={setModalActive} />
                        ) : wind === 'addPost'
                          ? (
                            <AddPost setModalActive={setModalActive} />
                          ) : wind === 'Favatar'
                            ? (
                              <FAvatarLoading img={img} setImg={setImg} setAvatar={setAvatar} auth={auth} setModalActive={setModalActive} />
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
        setActiveSearch={setActiveSearch}
        setAuthCategory={setAuthCategory}
      />
      {
      (searchQuery.length !== 0 && activeSearch)
        && (
        <SearchResult
          setwind={setwind}
          setModelId={setModelId}
          setModalActive={setModalActive}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
        />
        )
        }
      <Routes>
        <Route path="/" element={<Main setModalActive={setModalActive} setwind={setwind} setModelId={setModelId} setModelFlag={setModelFlag} />} />
        <Route
          path="/page"
          element={(
            <PrevAuth>
              <Page
                setwind={setwind}
                setModelId={setModelId}
                setModalActive={setModalActive}
                setAuthCategory={setAuthCategory}
                authCategory={authCategory}
              />
            </PrevAuth>
)}
        />
        <Route path="/profile" element={<Profile setModalActive={setModalActive} setwind={setwind} avatar={avatar} setModelId={setModelId} />} />
        <Route path="/profileLike" element={<ProfileLike setModalActive={setModalActive} setwind={setwind} avatar={avatar} setModelId={setModelId} />} />
        <Route path="/findComand" element={<FindComand setModalActive={setModalActive} setwind={setwind} />} />
        <Route path="/prevauth" element={<PrevAuth />} />
        <Route path="/forbusiness" element={<ForBusiness />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
