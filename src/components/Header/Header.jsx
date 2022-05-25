import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className='header'>
      <div className='header__icon'>Курс Валют</div>
      <div className='header__rates'>
        <div className='header__rate'>
          <div className='header__rate_name'>USD</div>
          <div className='header__rate_summ'>{props.rates[0].sale}</div>
        </div>
        <div className='header__rate'>
          <div className='header__rate_name'>EUR</div>
          <div className='header__rate_summ'>{props.rates[1].sale}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
