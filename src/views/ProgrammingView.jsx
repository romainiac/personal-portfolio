// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import NavBar from '../components/NavBar'

import {Row, Col} from 'antd'

class ProgrammingView extends React.Component {

  render() {
    return (
        <div style={styles.view}>
            <Row >
                <Col xs={1} sm={1} md={4} lg={8} xl={8}>
                </Col>
                    <Col xs={22} sm={22} md={16} lg={8} xl={8}>
                        <h1>
                        Projects
                        </h1>
                        <p>
                        Place for programming projects
                    </p>
                </Col>
                <Col xs={1} sm={1} md={4} lg={8} xl={8}>
                </Col>
            </Row>
        </div>
    )
  }

}

export default ProgrammingView;

const styles = {
    view: {
        paddingTop: "5%"

    }
}