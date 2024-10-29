



# Traffic Sign Board Recognition and Voice-Assisted System using CNN

### Table of Contents
- [Project Overview](#Project-Overview)
- [Problem Statement](#Problem-Statement)
- [Objectives](#Objectives)
- [Technologies Used](#Technologies-Used)
- [Project Features](#Project-Features)
- [Project Architecture](#Project-Architecture)
- [Team Members](#Team-Members)
- [Installation and Setup](#Installation-and-Setup)
- [How to Use](#How-to-Use)
- [Future Scope](#Future-Scope)
- [Acknowledgements](#Acknowledgements)

## Project Overview
The **Traffic Sign Board Recognition and Voice-Assisted System** is a machine learning project aimed at developing an automated solution to identify traffic signboards and provide real-time voice assistance to the driver. Using Convolutional Neural Networks (CNN), this system recognizes and interprets traffic signs, enhancing road safety and helping drivers navigate more efficiently.

## Problem Statement
With the increasing number of vehicles on roads, traffic sign recognition plays a vital role in assisting drivers. Misinterpreting or missing traffic signs can lead to severe accidents and violations. Our solution aims to minimize these risks by creating a CNN-based recognition system integrated with voice assistance to alert the driver in real-time.

## Objectives
- To recognize and classify various traffic signboards using CNN.
- To provide voice feedback to drivers for each detected sign.
- To implement a user-friendly interface for real-time detection and interaction.

## Technologies Used
- **Programming Language:** Python
- **Machine Learning Library:** TensorFlow, Keras
- **Model Architecture:** Convolutional Neural Networks (CNN)
- **Front-End Technologies:** HTML, CSS, JavaScript, Bootstrap
- **Back-End Framework:** Flask
- **Voice Module:** pyttsx3
- **Libraries for Image Processing:** OpenCV, NumPy

## Project Features
- **Real-time Traffic Sign Recognition:** Detects and identifies traffic signs through camera input.
- **Voice Assistance:** Provides real-time voice output to alert the driver.
- **Web-Based Interface:** A responsive and user-friendly front-end built using HTML, CSS, JavaScript, and Bootstrap.
- **High Accuracy:** Achieved through the use of CNN and dataset training.

## Project Architecture
1. **Data Collection and Preprocessing:** Images of traffic signs were collected and labeled.
2. **CNN Model Design and Training:** A CNN model was designed to classify traffic signs.
3. **Voice Output Integration:** Integrated voice assistance using `pyttsx3` to provide feedback.
4. **Web-Based Interface Creation:** Designed a responsive front end using HTML, CSS, JavaScript, and Bootstrap for user interaction.
5. **Backend Implementation:** Used Flask to connect the front end with the machine learning model.

## Team Members
- **Prateek Singh (Team Leader)** - [GitHub Profile](https://github.com/prateek0809)
- **Ajhar Ali** - [GitHub Profile](https://github.com/AjharAli)
- **Ishita Gupta**  
- **Vaibhav Yadav**  

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo-name.git
   cd Traffic-Sign-Recognition
   ```
2. Install Required Dependencies
   Run the following commands to install the required Python libraries:
   ```bash
   pip install tensorflow
   pip install keras
   pip install flask
   pip install opencv-python
   pip install numpy
   pip install pyttsx3
   ```
3. Run the Flask Server
   ```bash
   python app.py
   ```
   
4. Access the Web Application
Open a web browser and go to http://localhost:5500.

## How to Use
1. Launch the application by running app.py.
2. Connect your camera for real-time sign detection.
3. Open the web application in your browser.
4. The system will recognize traffic signs and provide voice feedback instantly.
5. Follow on-screen instructions for interacting with the web interface.

## Future Scope
- Enhanced Voice Feedback: More descriptive feedback to help the driver in different scenarios.
- Integration with GPS: To offer route-specific signboard recognition and guidance.
- Mobile Application: Developing a mobile version of the system for easier deployment.

## Acknowledgements
We would like to thank our project guide and all the team members for their valuable contributions and support.
