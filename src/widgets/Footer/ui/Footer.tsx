import classNames from 'classnames';

import { Logo } from 'shared/ui/Logo';
import { Modal } from 'shared/ui/Modal';
import Instagram from 'shared/assets/images/instagram.svg';
import Telegram from 'shared/assets/images/telegram.svg';
import Viber from 'shared/assets/images/viber.svg';
import Vk from 'shared/assets/images/vk.svg';
import Whatsapp from 'shared/assets/images/whatsapp.svg';

import { useFeedbackModal } from '../model/useFeedbackModal';

import s from './Footer.module.css';

export const Footer = () => {
  const {
    isOpen: isFeedbackModalOpen,
    open: handleOpenFeedbackModal,
    close: handleCloseFeedbackModal,
  } = useFeedbackModal();

  return (
    <>
      <footer className={s.footer}>
        <div className="container">
          <div className={s['footer__wrapper']}>
            <div className={s['footer__col']}>
              <Logo />
              <p className={s['footer__copyright']}>
                © «Интернет-магазин DogFood.ru»
              </p>
            </div>
            <div className={s['footer__col']}>
              <nav className={s['menu-bottom']}>
                <a href="/catalogue" className={s['menu-bottom__item']}>
                  Каталог
                </a>
                <a href="/catalogue" className={s['menu-bottom__item']}>
                  Акции
                </a>
                <a href="/catalogue" className={s['menu-bottom__item']}>
                  Новости
                </a>
                <a href="/catalogue" className={s['menu-bottom__item']}>
                  Отзывы
                </a>
              </nav>
            </div>
            <div className={s['footer__col']}>
              <nav className={s['menu-bottom']}>
                <a href="/catalogue" className={s['menu-bottom__item']}>
                  Оплата и доставка
                </a>
                <a href="/catalogue" className={s['menu-bottom__item']}>
                  Часто спрашивают
                </a>
                <button
                  type="button"
                  className={classNames(
                    s['menu-bottom__item'],
                    s['menu-bottom__button'],
                  )}
                  onClick={handleOpenFeedbackModal}
                >
                  Обратная связь
                </button>
                <a href="/catalogue" className={s['menu-bottom__item']}>
                  Контакты
                </a>
              </nav>
            </div>
            <div className={s['footer__col']}>
              <div className={s['contacts']}>
                <p className={s['contacts__title']}>Мы на связи</p>
                <a
                  className={classNames(
                    s['contacts__tel'],
                    s['contacts__link'],
                  )}
                  href="tel:89177172179"
                >
                  8 (999) 00-00-00
                </a>
                <a
                  className={classNames(
                    s['contacts__mail'],
                    s['contacts__link'],
                  )}
                  href="mailto:hordog.ru@gmail.com"
                >
                  dogfood.ru@gmail.com
                </a>
                <ul className={classNames(s['socials'])}>
                  <li>
                    <a className={s['socials__link']} href="/#">
                      <img src={Telegram} alt="telegram" />
                    </a>
                  </li>
                  <li>
                    <a className={s['socials__link']} href="/#">
                      <img src={Whatsapp} alt="whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a className={s['socials__link']} href="/#">
                      <img src={Viber} alt="viber" />
                    </a>
                  </li>
                  <li>
                    <a className={s['socials__link']} href="/#">
                      <img src={Instagram} alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a className={s['socials__link']} href="/#">
                      <img src={Vk} alt="vk" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Modal isOpen={isFeedbackModalOpen} onClose={handleCloseFeedbackModal}>
        <div className={s['feedback-modal']}>
          <h2 className={s['feedback-modal__title']}>Обратная связь</h2>
          <p className={s['feedback-modal__text']}>
            Напишите нам на почту или позвоните, если нужна помощь с заказом,
            оплатой или доставкой.
          </p>
          <a
            className={classNames(s['contacts__tel'], s['contacts__link'])}
            href="tel:8999000000"
          >
            8 (999) 00-00-00
          </a>
          <a
            className={classNames(s['contacts__mail'], s['contacts__link'])}
            href="mailto:dogfood.ru@gmail.com"
          >
            dogfood.ru@gmail.com
          </a>
        </div>
      </Modal>
    </>
  );
};
