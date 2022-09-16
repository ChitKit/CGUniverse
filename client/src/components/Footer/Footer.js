/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './Footer.css';
import easterBreaker from '../../break';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="adc">
        <h3 onClick={easterBreaker}>Наша команда</h3>
        <h2 className="forbusiness-h2">По вопросам сотрудничества обращайтесь:</h2>
        <p className="forbusiness-p">Желтов Никита Сергеевич</p>
        <p className="forbusiness-p">телефон:</p>
        <p className="forbusiness-p">раб. +7 (800) 555-35-35</p>
        <p className="forbusiness-p">моб. +7 (800)200-50-51</p>
        <p className="forbusiness-p-2">Прочие коммерческие предложения направляйте на адрес zheltovns.62@gmail.com</p>
      </div>
    </footer>
  );
}
