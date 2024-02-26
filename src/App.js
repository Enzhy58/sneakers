import './App.scss';
import logo from './images/logo.png';
import cart from './images/cart.svg';
import heart from './images/heart.svg';
import profile from './images/profile.svg';

function App() {
  return (
    <div className="wrapper">

      <header className="header">

        <div className="logo">
          <img className="logo__img" src={logo} alt="логотип" />

          <div className="logo__wrapper">
            <h1 className="logo__title">REACT SNEAKERS</h1>
            <span className="logo__subtitle">Магазин лучших кроссовок</span>
          </div>

        </div>

        <ul className="user-nav">
          <li className="user-nav__item">
            <button class="user-nav__btn" type="button">
              <img className="user-nav__img" src={cart} alt="корзина" />
              <span className="user-nav__info">1205 руб.</span>
            </button>
          </li>
          <li className="user-nav__item">
            <button class="user-nav__btn" type="button">
              <img className="user-nav__img" src={heart} alt="закладки" />
              <span className="user-nav__info">Закладки</span>
            </button>
          </li>
          <li className="user-nav__item">
            <button class="user-nav__btn" type="button">
              <img className="user-nav__img" src={profile} alt="профиль" />
              <span className="user-nav__info">Профиль</span>
            </button>
          </li>
        </ul>
      </header>

      <div className="content">
        <h2 className="title">Все кроссовки</h2>
      </div>

    </div>
  );
}

export default App;
