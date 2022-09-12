/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserModels from '../UserModels/UserModels';
import { getModels_THUNK } from '../../redux/actions/modelAction';
import { getLike_THUNK } from '../../redux/actions/likeAction';
import { setAuth } from '../../redux/actions/authActions';

export default function Profile() {
  const { auth } = useSelector((state) => state);
  const { like } = useSelector((state) => state);
  const { model } = useSelector((state) => state);
  const dispatch = useDispatch();

  // добавить в танк из useSelector auth
  useEffect(() => {
    dispatch(getModels_THUNK());
  }, []);


  // добавить в танк из useSelector auth
  useEffect(() => {
    dispatch(getLike_THUNK());
  }, []);

  return (
    <div className="profile-general-container">
      <div className="profile-first-container">
        <div className="profile-photo-name-and-btn">
          <img className="profile-photo" src="profile-photo.jpeg" alt="пустое фото" />
          <div className="profile-name-btn">
            <h1 className="profile-name-h1">
              <a className="profile-name-a" href="#">
                <span className="profile-name-span">{auth?.name}</span>
              </a>
            </h1>
            <div className="profile-btn-edit-profile">
              <a href="#" className="profile-btn-edit-profile-a">EDIT PROFILE</a>
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
              <a className="profile-fifth-btn-a" href="/upload">Uploads</a>
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
                {model?.map((el) => (<UserModels key={el.id} el={el} />))}
              </div>
            ) : (
              <span className="profile-two-sides-left-results"> No results </span>
            ) }
          </div>
        </div>
        <div className="profile-two-sides-right">
          <div className="profile-two-sides-right-table">
            <h3 className="profile-two-sides-first-tabel-title"> ABOUT</h3>
            <a className="profile-two-sides-first-tabel-links" href="#">
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
