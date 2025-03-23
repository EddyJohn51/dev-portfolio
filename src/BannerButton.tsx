import * as React from 'react'
import './BannerButton.css'

interface BannerButtonProps {
    ButtonText: string;
    ButtonHREF: string;
}

const BannerButton: React.FC<BannerButtonProps> = ({ButtonText, ButtonHREF}) => (
        <div>
            <a href={ButtonHREF}>{ButtonText}</a>
        </div>
)

export default BannerButton;