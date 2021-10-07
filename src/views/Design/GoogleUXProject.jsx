// Author: Roman Yefimets
// Purpose: Google UX project page
// created: Oct 6, 2021


import AdaptiveCard from '../../components/AdaptiveCard';

import {
    Card
} from 'antd'

const { Meta } = Card;

export const GoogleUXProject = () => {

    return (
        <div style={styles.view}>
             
           <AdaptiveCard>
                <Card
                title={"Seattle Orchestra App"}
                >
                    <p> 
                        As a full stack developer, I came to realize that I was focusing on bettering my skills as a programmer 
                        but neglecting to focus on improving the visual appeal and user experience of my designs. I decided that
                        it would be very useful for me to at least understand UX and the processes involved. This led me to take
                        the Google UX Design Course, which I do not at all regret. Although I have only scraped the surface of 
                        what it truly means to be a great “UX designer,” the skills I have learned will continue being used in all 
                        my projects.
                    </p>
                    <p>
                        Feel free to take a look at my case study and app design in Figma (I plan on transferring the designs 
                        here in the future)
                    </p>
                    <a href={"https://docs.google.com/presentation/d/1W7QkqV4bAaKDMHHZHhVPPXuYJ6J7zVDZO5qVOEKtaJA/edit?usp=sharing"}>
                        Case Study Slides
                    </a>
                    <br />
                    <a href={"https://www.figma.com/proto/lOsdurt8rywXKjaZZ9g5yF/wireframe?page-id=2%3A532&node-id=63%3A2&viewport=241%2C48%2C0.17&scaling=scale-down&starting-point-node-id=63%3A2"}>
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