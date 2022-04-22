import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaDev } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

const SocialMedia = () => (
    <div className="app__social">

        <div>
            <BsLinkedin/>
        </div>
        <div>
            <FaDev/>
        </div>
        <div>
            <SiCodewars/>
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <BsYoutube />
        </div>
        <div>
            <BsTwitter />
        </div>
    </div>
);

export default SocialMedia;