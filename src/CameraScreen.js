import React, { Component } from 'react';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import console = require('console');


export default class CameraScreen extends Component {


  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    if(event.type === 'left'){
      this.props.onCancel()
    }else if(event.type === 'right'){
      this.props.onCancel()
    }
  }

  render() {
    return (
      <CameraKitCameraScreen
        actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
        cameraOptions={{            // off/on(default)
          ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
        }}
        onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
        flashImages={{
          on: require('./../images/flashOn.png'),
          off: require('./../images/flashOff.png'),
          auto: require('./../images/flashAuto.png')
        }}
        cameraFlipImage={require('./../images/cameraFlipIcon.png')}
        captureButtonImage={require('./../images/cameraButton.png')}
      />
    );
  }
}



