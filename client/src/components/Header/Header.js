/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { filterModels_THUNK } from '../../redux/actions/actionFIlterSort';
import { logout } from '../../redux/actions/authActions';
import { searchModels_THUNK } from '../../redux/actions/searchAction';
import './Header.css';


export default function Header({
  setModalActive, setwind, searchQuery, setSearchQuery, setActiveSearch, setAuthCategory,
}) {
  const auth = useSelector((state) => state.auth);
  const [navSize, setnavSize] = useState('5rem');
  const [navColor, setnavColor] = useState('transparent');
  const [logo, setLogo] = useState('/logoBlack512.png');
  const [CGU, setCGU] = useState('black');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);


  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('#181921') : setnavColor('transparent');
    window.scrollY > 10 ? setnavSize('5rem') : setnavSize('5rem');
    window.scrollY > 10 ? setLogo('/logoWhite512.png') : setLogo('/logoBlack512.png');
    window.scrollY > 10 ? setCGU('#FFFFFF') : setCGU('#000');
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost:3002/api/category')
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);
  const logOutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3002/auth/logout', {
      method: 'GET',
      credentials: 'include',
    });
    if (response.ok) {
      dispatch(logout());
      navigate('/');
    }
  };
  const handlerSubmit = (q) => (setSearchQuery(q.target.value));
  const handleClick = (e) => {
    e.preventDefault();
    setAuthCategory(e.target.innerText);
    // dispatch(filterModels_THUNK(e.target.innerText));
    navigate('/page');
  };
  return (
    <header
      className="header"
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: 'all 1s',
      }}
    >
      <div className="header-container-first">
        <Link
          className="header-logo-and-name"
          to="/"
          style={{
            color: CGU,
          }}
        >
          <img
            className="header-logo"
            src={logo}
            alt="logo"
          />
          ComputerGraphicsUniverse
        </Link>
      </div>
      <div className="header-container-second">
        <ul className="header-navigation">
          <div className="header-navigation-item-dropdown1">
            <Link className="header-navigation-link-dropdown-toggle1" to="/findComand">
              Найти Команду
            </Link>
            {/* <div className="header-dropdown-menu1">
              <a className="header-dropdown-item1" href="#">11111 </a>
              <a className="header-dropdown-item1" href="#">22222 </a>
              <a className="header-dropdown-item1" href="#">33333 </a>
              <a className="header-dropdown-item1" href="#">55555 </a>
              <a className="header-dropdown-item1" href="#">66666 </a>
              <a className="header-dropdown-item1" href="#">77777 </a>
              <a className="header-dropdown-item1" href="#">88888 </a>
              <a className="header-dropdown-item1" href="#">99999 </a>
              <a className="header-dropdown-item1" href="#">11111 </a>
              <a className="header-dropdown-item1" href="#">44444 </a>

            </div> */}
          </div>
          <div className="header-navigation-item-dropdown1">
            <NavLink className="header-navigation-link-dropdown-toggle1" to="/page" onClick={() => setAuthCategory('Все категории')}>
              К покупкам
            </NavLink>
            <div className="header-dropdown-menu1">
              {category.map((categ) => (
                <a
                  key={categ.id}
                  onClick={handleClick}
                  className="header-dropdown-item1"
                  href="#"
                >
                  {categ?.name}
                  {' '}
                </a>
              ))}

            </div>
          </div>
          <div className="header-navigation-item-dropdown1">
            <a className="header-navigation-link-dropdown-toggle1" href="#">
              Для бизнеса
            </a>
            <div className="header-dropdown-menu1">
              <Link to="/forbusiness" className="header-dropdown-item1">Сотрудничество </Link>
              {/* <a className="header-dropdown-item1" href="#">22222 </a>
              <a className="header-dropdown-item1" href="#">33333 </a>
              <a className="header-dropdown-item1" href="#">44444 </a> */}
            </div>
          </div>
        </ul>
      </div>
      <div className="header-container-third">
        <a className="header-input-link" href="#">
          {/* ПОИСК */}
          <input
            // onBlur={() => { setActiveSearch(false); }}
            // onFocus={() => setActiveSearch(true)}
            value={searchQuery}
            onChange={handlerSubmit}
            className="header-form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button className="header-form-btn" type="submit">Search</button> */}
        </a>
      </div>
      {/* {search.length && (
      )} */}
      <div className="header-container-fourth">
        {/* <a className="header-right-btn" href="#">
          <span
            className="header-right-btn-text"
            onClick={() => {
              setwind('basket');
              setModalActive(true);
            }}
          >
            <img
              className="header-right-button-cart-icon"
              src="shopping-cart-svgrepo-com.svg"
              alt="Cart"
              width="20px"
              height="20px"
              type="button"
            />
          </span>
        </a> */}
        {!auth?.id
          ? (
            <>
              <a
                className="header-btn header-right-btn1"
                href="#"
                onClick={() => {
                  setwind('log');
                  setModalActive(true);
                }}
              >
                <span className="header-right-btn-text"> Войти</span>
              </a>
              <a
                className="header-btn header-right-btn2"
                href="#"
                onClick={() => {
                  setwind('reg');
                  setModalActive(true);
                }}
              >
                <span
                  className="header-right-btn-text"

                >
                  Присоединиться
                  {' '}

                </span>
              </a>
            </>
          ) : (
            <>
              <Link to="/profile">
                {
          (auth?.avatar)
            ? <img className="header-main-icon" src={`http://localhost:3002/${auth?.avatar}`} alt="пустое фото" />
            : <img className="header-main-icon" src="profile-photo.jpeg" alt="пустое фото" />
          }
              </Link>
              <Link className="header-btn header-right-btn2 heade-btn-logout" to="/">
                <span className="header-right-btn-text" onClick={logOutHandler}>Выйти</span>
              </Link>
            </>
          )}
        <a
          className="header-btn header-right-btn3"
          href="#"
          onClick={() => {
            setwind('modelUpload');
            setModalActive(true);
          }}
        >
          <span
            className="header-right-btn-text"

          >
            {' '}
            Загрузить

          </span>
        </a>
      </div>
    </header>
  );
}
