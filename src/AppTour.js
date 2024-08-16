// src/AppTour.js
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const AppTour = ({ steps, visible, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onClose();
  };

  const { title, text, x, y, tipPosition } = steps[currentStep];

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity style={styles.overlay} onPress={handleNext}>
        <View style={[styles.tooltipContainer, { top: y, left: x }]}>
          <Text style={styles.tooltipTitle}>{title}</Text>
          <Text style={styles.tooltipText}>{text}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipButton}>Skip</Text>
            </TouchableOpacity>
            {currentStep > 0 && (
              <TouchableOpacity onPress={handlePrevious}>
                <Text style={styles.prevButton}>Previous</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handleNext}>
              <Text style={styles.nextButton}>Next</Text>
            </TouchableOpacity>
          </View>
          <Svg height="20" width="20" style={{ position: 'absolute', top: tipPosition === 'top' ? -20 : null, bottom: tipPosition === 'bottom' ? -20 : null }}>
            <Polygon
              points="10,0 0,20 20,20"
              fill="black"
            />
          </Svg>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    maxWidth: '80%',
  },
  tooltipTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  tooltipText: {
    color: 'black',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  skipButton: {
    color: 'green',
    fontWeight: 'bold',
  },
  prevButton: {
    color: 'orange',
    fontWeight: 'bold',
  },
  nextButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default AppTour;
