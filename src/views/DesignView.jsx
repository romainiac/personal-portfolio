// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import CardPhoto from '../assets/present-page.svg'
import AvatarPhoto from '../assets/blush/The Band - Treble Clef.svg'

import AdaptiveCard from '../components/AdaptiveCard';
import {
    Card,
    Avatar
} from 'antd'



import  {  EditOutlined, EllipsisOutlined, SettingOutlined  } from '@ant-design/icons';

const { Meta } = Card;

class DesignView extends React.Component {

  render() {
    return (
        <div style={styles.view}>
             
           <AdaptiveCard>
                <Card 
                cover={
                    <img
                        alt="card-photo"
                        src={CardPhoto}
                    />
                    }
                >

                    <Meta

                    title="Seattle Orchestra App Design"
                    description="Google UX Portfolio Project"
                    />
                </Card>
            </AdaptiveCard>

        </div>
    )
  }

}

export default DesignView;

const styles = {
    view: {
        paddingTop: "5%"

    }
}