import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Modal } from 'react-bootstrap';

import { FiHelpCircle } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';

import { SocialStepUi } from './styles';

const SocialStep = ({ icon, img, title, channel_key }) => {
  const [modal, setModal] = useState(false);
  const [social, setSocial] = useState(null);
  const [arraySocial, setArraySocial] = useState([]);

  useEffect(() => {
    if (modal) {
      api.get('pages').then((response) => {
        const { data } = response.data;

        const arraySocial = data.filter(
          (social) => social.channel_key === channel_key,
        );

        setArraySocial(arraySocial);

        console.log(arraySocial);
      });
    }
  }, [modal]);

  return (
    <>
      <SocialStepUi>
        <div className={`${channel_key} circle`}>{img ? img : icon}</div>
        <span>{title}</span>
        <button onClick={() => setModal(true)}>Adicionar</button>
        <div className="help">
          <button>
            <FiHelpCircle size={18} />
          </button>
        </div>
      </SocialStepUi>
      <Modal show={modal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              <div className={img ? 'icon-title-img' : 'icon-title'}>
                {img ? img : icon}
              </div>
              <h2>Vincular página do Facebook</h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>asd asd asd asdasdasd</Modal.Body>
        <Modal.Footer>
          <button className="back">VOLTAR</button>
          <button className="next">
            PRÓXIMO <BsArrowRight size={20} />
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SocialStep;
