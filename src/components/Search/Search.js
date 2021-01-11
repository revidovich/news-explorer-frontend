import React, { useState } from 'react';
import './Search.css';

function Search(props) {
  return (
    <section className='header__content section'>
        <h1 className={'header__title'}>
          Что творится в мире?</h1>
        <p className='header__caption'>
          Находите самые свежие статьи на любую тему и 
          сохраняйте в своём личном кабинете.</p>
        <form className='search-form'>
            <input type='text' 
                className='search-form__input'
                placeholder='Введите тему новости'
                required
            />
            <button type='submit' 
                    className='search-form__search-button'>
                    Искать
            </button>
        </form>
    </section>
  );
}

export default Search;