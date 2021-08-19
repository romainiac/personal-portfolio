// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';

import {Card} from 'antd'
import AdaptiveCard from '../components/AdaptiveCard';

class BlogView extends React.Component {

  render() {

    return (
        <div style={styles.view}>
            <AdaptiveCard>
                <Card title={"Article 3"} bordered={false}>
                    <p>
                        I read something that you should too
                    </p>
                </Card>
            </AdaptiveCard>
            <AdaptiveCard>
                <Card title={"Article 2"} bordered={false}>
                    <p>
                        Here is a picture of something I ate that changed my life
                    </p>
                </Card>
            </AdaptiveCard>
            <AdaptiveCard>
                <Card title={"Article 1"} bordered={false}>
                    <p>
                        So, I guess i decided to start a blog. I have not been doing much writing 
                        because react is a pain 
                    </p>

                </Card>
            </AdaptiveCard>
        </div>
    )
  }

}

export default BlogView;

const styles = {
    view: {
        paddingTop: "5%"

    }
}