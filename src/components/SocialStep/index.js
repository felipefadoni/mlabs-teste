import React from 'react';

import { FiHelpCircle } from 'react-icons/fi';
import { SocialStepUi } from './styles';

const SocialStep = ({ icon, img, title, channel_key, openModal }) => {
  // const [social, setSocial] = useState(null);

  return (
    <>
      <SocialStepUi>
        <div className={`${channel_key} circle`}>{img ? img : icon}</div>
        <span>{title}</span>
        <button
          onClick={() =>
            openModal(img ? true : false, img ? img : icon, channel_key, title)
          }
        >
          Adicionar
        </button>
        <div className="help">
          <button>
            <FiHelpCircle size={18} />
          </button>
        </div>
      </SocialStepUi>
    </>
  );
};

export default SocialStep;
