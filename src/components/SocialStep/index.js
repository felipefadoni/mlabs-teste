import React, { useState, useEffect } from 'react';

import { FiHelpCircle } from 'react-icons/fi';
import { SocialStepUi } from './styles';

const SocialStep = ({
  icon,
  img,
  title,
  channel_key,
  openModal,
  pagesSelecionadas,
}) => {
  const [social, setSocial] = useState(null);

  useEffect(() => {
    const newSocial = pagesSelecionadas.filter(
      (page) => page.channel_key === channel_key,
    );
    if (newSocial.length > 0) {
      setSocial(newSocial[0]);
    } else {
      setSocial(null);
    }
  }, [pagesSelecionadas, channel_key]);

  return (
    <SocialStepUi
      className={social !== null ? `${social.channel_key}-active` : null}
    >
      {social !== null ? (
        <>
          <h3>{social.name}</h3>
          <div className="botao-renovar">
            <button onClick={() => setSocial(null)}>Renovar</button>
          </div>
        </>
      ) : (
        <>
          <div className={`${channel_key} circle`}>{img ? img : icon}</div>
          <span>{title}</span>
          <button
            onClick={() =>
              openModal(
                img ? true : false,
                img ? img : icon,
                channel_key,
                title,
              )
            }
          >
            Adicionar
          </button>
          <div className="help">
            <button>
              <FiHelpCircle size={18} />
            </button>
          </div>
        </>
      )}
    </SocialStepUi>
  );
};

export default SocialStep;
