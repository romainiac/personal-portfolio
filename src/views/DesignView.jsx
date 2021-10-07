// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import CardPhoto from '../assets/present-page.svg'
import { useNavigate } from 'react-router-dom';
import AdaptiveCard from '../components/AdaptiveCard';
import { useState } from 'react';
import {
    Card
} from 'antd'


const { Meta } = Card;

export const DesignView = () => {

    const navigate = useNavigate();
    const handleClick = () => navigate('/design/seattle-orchestra-app-design');

    return (
        <div style={styles.view}>           
           <AdaptiveCard>
                <Card 
                hoverable={true}
                onClick={handleClick}
                title="Seattle Orchestra App Design"
                cover={
                    <img
                        alt="card-photo"
                        src={CardPhoto}
                    />
                    }
                >

                    <Meta

                    title="Google UX Portfolio Project"
                    description="click to view more"
                    />
                </Card>
            </AdaptiveCard>
        </div>
    )
}

const styles = {
    view: {
        paddingTop: "5%"
    }
}