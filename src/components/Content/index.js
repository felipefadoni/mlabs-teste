import React, { useState, useEffect } from 'react';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

import { Modal, Form } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

import api from '../../services/api';
import SocialStep from '../../components/SocialStep';

import { ContentUi, ModalUi } from './styles';

import GoogleBusiness from '../../assets/google-business.png';
import GoogleAnalytics from '../../assets/google-analytics.png';

const Content = () => {
  const [title, setTitle] = useState('');
  const [iconModal, setIconModal] = useState('');
  const [tipoIcon, setTipoIcon] = useState(null);
  const [modal, setModal] = useState(false);
  const [pages, setPages] = useState([]);
  const [arraySocial, setArraySocial] = useState([]);

  const openModal = (tipoIcon, iconModal, channel_key, title) => {
    setTipoIcon(tipoIcon);
    setIconModal(iconModal);
    setModal(true);
    const newArraySocial = pages.filter(
      (page) => page.channel_key === channel_key,
    );
    setArraySocial(newArraySocial);
    setTitle(title);
  };

  useEffect(() => {
    api.get('pages').then((response) => {
      const { data } = response.data;
      setPages(data);
    });
  }, []);

  return (
    <>
      <ContentUi fluid>
        <div className="redes-sociais">
          <ul>
            <SocialStep
              icon={<FaFacebookF size={24} />}
              title="Facebook"
              channel_key="facebook"
              openModal={openModal}
            />
            <SocialStep
              icon={<FaTwitter size={24} />}
              title="Twitter"
              channel_key="twitter"
              openModal={openModal}
            />
            <SocialStep
              icon={<FaInstagram size={24} />}
              title="Instagram"
              channel_key="twitter"
              openModal={openModal}
            />
            <SocialStep
              img={<img src={GoogleBusiness} alt="Google Business" />}
              title="Google Meu Negócio"
              channel_key="google_business"
              openModal={openModal}
            />
            <SocialStep
              icon={<FaPinterest size={24} />}
              title="Pinterest"
              channel_key="pinterest"
              openModal={openModal}
            />
          </ul>
        </div>
        <div className="redes-sociais">
          <ul>
            <SocialStep
              icon={<FaLinkedin size={24} />}
              title="Linkedin"
              channel_key="linkedin"
              openModal={openModal}
            />
            <SocialStep
              icon={<FaYoutube size={24} />}
              title="Youtube"
              channel_key="youtube"
              openModal={openModal}
            />
            <SocialStep
              icon={<FaWhatsapp size={24} />}
              title="Whatsapp"
              channel_key="whatsapp"
              openModal={openModal}
            />
            <SocialStep
              img={<img src={GoogleAnalytics} alt="Google analytics" />}
              title="Google Analytics"
              channel_key="google_analytics"
              openModal={openModal}
            />
          </ul>
        </div>
      </ContentUi>
      <ModalUi show={modal} onHide={() => setModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="header-modal">
              <div className={tipoIcon ? 'icon-title-img' : 'icon-title'}>
                {iconModal}
              </div>
              <h2>Vincular página do {title}</h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">
          <h4>Selecione a página que você deseja vincular a este perfil</h4>
          <div className="list-pages">
            <ul>
              {arraySocial.length > 0
                ? arraySocial.map((social) => (
                    <li key={social.id}>
                      <div
                        className="imagem"
                        style={{
                          backgroundImage: `url(${
                            social.picture
                              ? social.picture
                              : `https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png`
                          })`,
                        }}
                      ></div>
                      <div className="info-page">
                        <h3>{social.name}</h3>
                        <p>{social.url}</p>
                      </div>
                      <div className="radio-button">
                        <label class="container">
                          <input type="radio" name="pagina-radio" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </li>
                  ))
                : 'Sem páginas definidas'}
            </ul>
          </div>
          <h6>Não encontrou sua página?</h6>
          <div>
            <a href="123123">
              Clique aqui para atualizar suas permissões do {title}
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer className="footer">
          <button className="back">VOLTAR</button>
          <button className="next">
            PRÓXIMO <BsArrowRight size={28} />
          </button>
        </Modal.Footer>
      </ModalUi>
    </>
  );
};

export default Content;
