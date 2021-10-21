// Author: Roman Yefimets
// Purpose: Google UX project page
// created: Oct 6, 2021


import AdaptiveCard from '../../components/AdaptiveCard';

import {
    Card
} from 'antd'

const { Meta } = Card;

export const HomeCookedProject2 = () => {

    return (
        <div style={styles.view}>
             
           <AdaptiveCard>
                <Card
                title={"Seattle Orchestra App"}
                >
                    <p> 
                        The third project in the Google UX Design course took us through designing 
                        an application for social good. I chose to continue working on my HomeCooked
                        app, and modify it so that it would serve as a way for users to maintain a 
                        healthy lifestyle by making healthy home cooked meals.
                    </p>
                    <p>
                        Feel free to take a look at my case study and app design in Figma (I plan on transferring the designs 
                        here in the future)
                    </p>
                    <a href={"https://docs.google.com/presentation/d/1W7QkqV4bAaKDMHHZHhVPPXuYJ6J7zVDZO5qVOEKtaJA/edit?usp=sharing"}>
                        Case Study Slides
                    </a>
                    <br />
                    <a href={"https://www.figma.com/proto/HQBDf62vb6iameI9IArrKe/HomeCooked?page-id=17%3A1930&node-id=17%3A2141&viewport=241%2C48%2C0.26&scaling=scale-down&starting-point-node-id=17%3A2141"}>
                        Figma Prototype
                    </a>
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