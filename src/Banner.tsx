import React from 'react';
import './Banner.css';
import BannerButton from './BannerButton.tsx';

const Banner: React.FC = () => (
    <div>
        <div id="banner-container">
            <div id="title-container">
                <h1 id="banner-title">John Eddy</h1>
                <h5 id="banner-subtitle">Software Developer</h5>
            </div>
            <BannerButton ButtonText="About Me" ButtonHREF="https://google.com" />
            <BannerButton ButtonText="Projects" ButtonHREF="https://bing.com" />
            <BannerButton ButtonText="Resume" ButtonHREF="https://yahoo.com" />
            <BannerButton ButtonText="Contact Me" ButtonHREF="https://ask.com" />
        </div>
    </div>
)

export default Banner;