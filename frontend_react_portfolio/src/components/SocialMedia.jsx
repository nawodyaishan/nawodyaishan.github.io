import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube,BsNewspaper } from 'react-icons/bs';
import { FaFacebookF, FaDev } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

const SocialMedia = () => (
    <div className="app__social">

        <div>
            <a href="https://www.linkedin.com/in/nawodyaishan/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin /> </a>

        </div>
        <div>
            <a href="https://dev.to/nawodyaishan" target="_blank" rel="noopener noreferrer">
            <FaDev/>
            </a>
        </div>
        <div>
            <a href="https://www.codewars.com/users/nawodyaishan" target="_blank" rel="noopener noreferrer">
            <SiCodewars/>
            </a>
        </div>
        <div>
            <a href="https://www.facebook.com/nawodyaishan2/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/nawodya_ishan/" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
            </a>
        </div>
        <div>
            <a href="https://www.youtube.com/channel/UC6LhVOyXtXzOiWmxY-DrN0Q" target="_blank" rel="noopener noreferrer">
            <BsYoutube />
            </a>
        </div>
        <div>
            <a href="https://twitter.com/nawodyaishan" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
            </a>
        </div>
        <div>
            <a href="https://drive.google.com/drive/folders/1FsfwAqTkJjQtg2_GBzyFB3vO-nYcs5ut?usp=sharing" target="_blank" rel="noopener noreferrer">
            <BsNewspaper />
            </a>
        </div>
    </div>
);

export default SocialMedia;