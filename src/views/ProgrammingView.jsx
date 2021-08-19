// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';

import {Row, Col} from 'antd'
import AdaptiveCard from '../components/AdaptiveCard';


class ProgrammingView extends React.Component {

  render() {
    return (
        <div style={styles.view}>
            <AdaptiveCard>
                <h1>
                    Projects
                </h1>
                <p>
                    Place for programming projects
                </p>
            </AdaptiveCard>
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