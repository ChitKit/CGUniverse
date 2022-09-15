/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserModels from '../UserModels/UserModels';
import { getModels_THUNK } from '../../redux/actions/modelAction';
import { getLike_THUNK } from '../../redux/actions/likeAction';


export default function Profile({
  setModalActive, setwind, setModelId,
}) {
  const auth = useSelector((state) => state.auth);
  const like = useSelector((state) => state.like);
  const model = useSelector((state) => state.model);
  const dispatch = useDispatch();

  // загрузка фото

  // добавить в танк из useSelector auth
  useEffect(() => {
    if (auth) {
      dispatch(getModels_THUNK(auth?.id));
      dispatch(getLike_THUNK(auth?.id));
    }
  }, [auth]);

  console.log(auth);


  return (
    <div className="profile-general-container">
      <div className="profile-first-container">
        <div className="profile-photo-name-and-btn">
          <div
            className="profile-photo-contener"
            onClick={() => {
              setwind('avatar');
              setModalActive(true);
            }}
          >
            <span className="profile-photo-text">Изменить фотографию</span>
            {
          (auth?.avatar)
            ? <img className="profile-photo" src={`http://localhost:3002/${auth?.avatar}`} alt="пустое фото" />
            : <img className="profile-photo" src="profile-photo.jpeg" alt="пустое фото" />
          }
          </div>
          <div className="profile-name-btn">
            <h1 className="profile-name-h1">
              <a className="profile-name-a" href="#">
                <span className="profile-name-span">{auth?.name}</span>
              </a>
            </h1>
            <div className="profile-btn-edit-profile">
              <p
                onClick={() => {
                  setwind('editProfile');
                  setModalActive(true);
                }}
                className="profile-btn-edit-profile-a"
              >
                EDIT PROFILE

              </p>
            </div>
          </div>
        </div>
        <div className="profile-5-btn">
          <ul className="profile-5-btn-ul">
            {/* <li className="profile-one-btn">
              <a className="profile-third-btn-a" href="#">
                SUMMARY
              </a>
            </li> */}
            <li className="profile-one-btn">
              <Link to="/profile" className="profile-second-btn-a">
                <span className="profile-second-btn-span">
                  {`${model.length}`}
                  {' '}
                </span>
                Models
              </Link>
            </li>
            {/* <li className="profile-one-btn">
              <a className="profile-third-btn-a" href="#">Collection</a>
              <ul className="profile-third-btn-ul">
                <li className="profile-third-btn-li">
                  <a className="profile-third-btn-a" href="#">
                    <span className="header-third-btn-span">0</span>
                    created
                  </a>
                </li>
                <li className="profile-third-btn-li">
                  <a className="profile-third-btn-a" href="#">
                    <span className="header-third-btn-span">0</span>
                    subscribed
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="profile-one-btn">
              <Link to="/profileLike" className="profile-forth-btn-a">
                <span className="header-forth-btn-span">
                  {' '}
                  {`${like.length}`}
                  {' '}
                </span>
                Like
              </Link>
            </li>
            <li className="profile-one-btn">
              <Link
                className="profile-fifth-btn-a"
                to="/profile"
                onClick={() => {
                  setwind('modelUpload');
                  setModalActive(true);
                }}
              >
                Загрузить модель

              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-two-sides">
        <div className="profile-two-sides-left">
          <div className="profile-two-sides-left-popular-and-view">
            <h2 className="profile-two-sides-left-popular-h2">
              POPULAR 3D MODELS
            </h2>
            {/* <h2 className="profile-two-sides-left-view">
              <a className="profile-two-sides-left-view-a" href="#">
                View all(
                <span className="profile-two-sides-left-view-a-span">
                  0
                </span>
                )
              </a>
            </h2> */}
          </div>
          <div>
            {(model.length !== 0) ? (
              <div className="profile-two-sides-left-results-grid">
                {model?.map((el) => (
                  <UserModels
                    setModelId={setModelId}
                    setwind={setwind}
                    setModalActive={setModalActive}
                    key={el.id}
                    el={el}
                  />
                ))}
              </div>
            ) : (
              <span className="profile-two-sides-left-results"> No results </span>
            ) }
          </div>
        </div>
        <div className="profile-two-sides-right">
          <div className="profile-two-sides-right-table">
            <h3 className="profile-two-sides-first-tabel-title"> ABOUT</h3>
            <p className="profile-two-sides-first-tabel-p">{auth?.bio}</p>
            <a
              className="profile-two-sides-first-tabel-links"
              href="#"
              onClick={() => {
                setwind('editBio');
                setModalActive(true);
              }}
            >
              Edit your biography
            </a>
            {/* <h3 className="profile-two-sides-first-tabel-title"> CATEGORY</h3>
            <p className="profile-two-sides-first-tabel-p">Individual / Other</p> */}
            {/* <h3 className="profile-two-sides-first-tabel-title"> WEBSITE</h3>
            <a className="profile-two-sides-first-tabel-links">
              Add a link
            </a> */}
            <h3 className="profile-two-sides-first-tabel-title"> MEMBER SINCE</h3>
            <p className="profile-two-sides-first-tabel-p">DATA</p>
            {/* <h3 className="profile-two-sides-first-tabel-title"> STATS</h3>
            <div className="profile-two-sides-right-table-vltv">
              <img className="profile-two-sides-right-table-icons" src="" alt="icon" />
              <p className="profile-two-sides-right-table-title">
                <span className="profile-two-sides-right-second-table-number"> 0 </span>
                likes
              </p>
            </div> */}
          </div>
          {/* <div className="profile-two-sides-right-table">
            <h3 className="profile-two-sides-first-tabel-title"> STATS</h3>
            <div className="profile-two-sides-right-table-vltv">
              <img className="profile-two-sides-right-table-icons" src="" alt="icon" />
              <p className="profile-two-sides-right-table-title">
                <span className="profile-two-sides-right-second-table-number"> 0 </span>
                views
              </p>
            </div>
            <div className="profile-two-sides-right-table-vltv">
              <img className="profile-two-sides-right-table-icons" src="" alt="icon" />
              <p className="profile-two-sides-right-table-title">
                <span className="profile-two-sides-right-second-table-number"> 0 </span>
                likes
              </p>
            </div>
            <div className="profile-two-sides-right-table-vltv">
              <img className="profile-two-sides-right-table-icons" src="" alt="icon" />
              <p className="profile-two-sides-right-table-title">
                <span className="profile-two-sides-right-second-table-number"> 0 </span>
                triangles
              </p>
            </div>
            <div className="profile-two-sides-right-table-vltv">
              <img className="profile-two-sides-right-table-icons" src="" alt="icon" />
              <p className="profile-two-sides-right-table-title">
                <span className="profile-two-sides-right-second-table-number"> 0 </span>
                vertices
              </p>
            </div>
          </div> */}
          {/* <div className="profile-two-sides-right-table">
            <h3 className="profile-two-sides-first-tabel-title"> STATS</h3>
            <a className="profile-two-sides-first-tabel-links">
              Add your skills
            </a>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}
