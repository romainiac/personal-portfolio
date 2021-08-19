// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import NavBar from '../components/NavBar'
import { isMobile } from 'react-device-detect';

import {Row, Col, Card} from 'antd'

class BlogView extends React.Component {

  render() {

    var midColumnSpan = 8;
    var outColumnSpan = 8;
    if (isMobile) {
        midColumnSpan = 24;
        outColumnSpan = 0;
    }

    return (
        <div style={styles.view}>
            <Row >
                <Col span={outColumnSpan}></Col>
                <Col span={midColumnSpan}>
                    <Card title={"Article 3"} bordered={false}>
                        <p>
                            I read something that you should too
                        </p>
                    </Card>
                    <Card title={"Article 2"} bordered={false}>
                        <p>
                            Here is a picture of something I ate that changed my life
                        </p>
                    </Card>
                    <Card title={"Article 1"} bordered={false}>
                        <p>
                            So, I guess i decided to start a blog. I have not been doing much writing 
                            because react is a pain 
                        </p>

                    </Card>
                </Col>
                <Col span={outColumnSpan}>

                </Col>
            </Row>
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