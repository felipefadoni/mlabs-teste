import React from 'react';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

import SocialStep from '../../components/SocialStep';

import { ContentUi } from './styles';

import GoogleBusiness from '../../assets/google-business.png';
import GoogleAnalytics from '../../assets/google-analytics.png';

const Content = () => {
  return (
    <>
      <ContentUi fluid>
        <div className="redes-sociais">
          <ul>
            <SocialStep
              icon={<FaFacebookF size={24} />}
              title="FACEBOOK"
              channel_key="facebook"
            />
            <SocialStep
              icon={<FaTwitter size={24} />}
              title="TWITTER"
              channel_key="twitter"
            />
            <SocialStep
              icon={<FaInstagram size={24} />}
              title="Instagram"
              channel_key="twitter"
            />
            <SocialStep
              img={<img src={GoogleBusiness} alt="Google Business" />}
              title="GOOGLE MEU NEGÓCIO"
              channel_key="google_business"
            />
            <SocialStep
              icon={<FaPinterest size={24} />}
              title="PINTEREST"
              channel_key="pinterest"
            />
            <SocialStep
              icon={<FaLinkedin size={24} />}
              title="Linkedin"
              channel_key="linkedin"
            />
            <SocialStep
              icon={<FaYoutube size={24} />}
              title="YOUTUBE"
              channel_key="youtube"
            />
            <SocialStep
              icon={<FaWhatsapp size={24} />}
              title="WHATSAPP"
              channel_key="whatsapp"
            />
            <SocialStep
              img={<img src={GoogleAnalytics} alt="Google analytics" />}
              title="Google Analytics"
              channel_key="google_analytics"
            />
          </ul>
        </div>
      </ContentUi>
    </>
  );
};

export default Content;
