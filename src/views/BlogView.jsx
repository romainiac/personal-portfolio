// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import NavBar from '../components/NavBar'

import {Row, Col} from 'antd'

class BlogView extends React.Component {

  render() {

    return (
        <div style={styles.view}>
            <Row >
                <Col xs={1} sm={1} md={4} lg={8} xl={8} />
                <Col xs={22} sm={22} md={16} lg={8} xl={8}>
                        <h1>
                            Article 3
                        </h1>
                        <p>
                            Something enlightening
                        </p>
                        <h1>
                            Article 2
                        </h1>
                        <p>
                            Something I ate that changed my life
                        </p>
                        <h1>
                            Article 1
                        </h1>
                        <p>
                            Hey look i'm starting a blog. Maybe.
                        </p>
                </Col>
                <Col xs={1} sm={1} md={4} lg={8} xl={8} />
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