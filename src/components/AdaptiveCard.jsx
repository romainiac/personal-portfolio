import React from 'react'

import { isMobile} from 'react-device-detect';

import {Row, Col, Card} from 'antd'

// adaptive card layout based on the device type (mobile or not)
class AdaptiveCard extends React.Component {

    render() {

        var midColumnSpan = 8;
        var outColumnSpan = 8;
        if (isMobile) {
            midColumnSpan = 22;
            outColumnSpan = 1;
        }

        return (
            <div>
                <Row >
                    <Col span={outColumnSpan} />
                    <Col span={midColumnSpan}>
                        {this.props.children}
                    </Col>
                    <Col span={outColumnSpan} />
                </Row>
            </div>
        )
    }

}

export default AdaptiveCard