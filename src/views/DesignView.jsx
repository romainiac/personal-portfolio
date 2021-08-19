// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';

import AdaptiveCard from '../components/AdaptiveCard';


class DesignView extends React.Component {

  render() {
    return (
        <div style={styles.view}>
           
           <AdaptiveCard>
                <h1>
                    Projects
                </h1>
                <p>
                    Place for design projects
                </p>
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