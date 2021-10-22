// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import Project1Photo from '../assets/present-page.svg'
import Project2Photo from '../assets/blush//Stuck at Home - Home Garden.svg'
import Project3Photo from '../assets/blush/Women Power - Meditating.svg'
import CredlyBadge from '../components/CredlyBadge'
import { useNavigate } from 'react-router-dom';
import AdaptiveCard from '../components/AdaptiveCard';
import { useState } from 'react';
import {
    Card,
    Badge,
} from 'antd'

import   {
    LinkedinOutlined

  }
from   '@ant-design/icons'


const { Meta } = Card;

export const DesignView = () => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(e);
    }

    return (
        <div style={styles.view}>           
           <AdaptiveCard >
               <Badge.Ribbon style={{top: "-3%"}}text={<CredlyBadge />}>
                <Card 
                style={styles.card}
                hoverable={true}
                onClick={() => handleClick("/design/seattle-orchestra-app-design")}
                title="Seattle Orchestra App Design"
                cover={
                    <img
                        alt="card-photo"
                        src={Project1Photo}
                    />
                    }
                >

                    <Meta
                    title="Google UX Portfolio Project"
                    description="click to view more"

                    />

                </Card>
                </Badge.Ribbon>
            </AdaptiveCard>
            <br/>
            <br/>
            <AdaptiveCard>
            <Badge.Ribbon style={{top: "-3%"}}text={<CredlyBadge />}>
                <Card
                    style={styles.card}
                    hoverable={true}
                    onClick={() => handleClick("/design/homecooked-app-design")}
                    title="HomeCooked App Design"
                    cover={
                        <img
                            alt="card-photo"
                            src={Project2Photo}
                        />
                        }
                    >

                        <Meta

                        title="Google UX Portfolio Project 2"
                        description="click to view more"
                        />
                    </Card>
                </Badge.Ribbon>
            </AdaptiveCard>
            <br/>
            <br/>
            <AdaptiveCard>
            <Badge.Ribbon style={{top: "-3%"}}text={<CredlyBadge />}>
                <Card 
                    style={styles.card}

                    hoverable={true}
                    onClick={() => handleClick("/design/homecooked2-app-design")}
                    title="HomeCooked 2 App Design"
                    cover={
                        <img
                            alt="card-photo"
                            src={Project3Photo}
                        />
                        }
                    >

                        <Meta

                        title="Google UX Portfolio Project 3"
                        description="click to view more"
                        />
                    </Card>
                </Badge.Ribbon>
            </AdaptiveCard>
        </div>
    )
}

const styles = {
    view: {
        paddingTop: "5%"
    },
    card: {
        border: "3px solid #f0f0f0"
    }
}