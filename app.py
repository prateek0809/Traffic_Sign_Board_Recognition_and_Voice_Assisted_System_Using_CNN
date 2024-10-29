from flask import *
import os
import numpy as np
import subprocess
import psutil

app = Flask(__name__, static_url_path = '/static', static_folder = 'static')

# Classes of trafic signs
classes = { 0:'Speed limit (20km/h)',
			1:'Speed limit (30km/h)',
			2:'Speed limit (50km/h)',
			3:'Speed limit (60km/h)',
			4:'Speed limit (70km/h)',
			5:'Speed limit (80km/h)',
			6:'End of speed limit (80km/h)',
			7:'Speed limit (100km/h)',
			8:'Speed limit (120km/h)',
			9:'No passing',
			10:'No passing veh over 3.5 tons',
			11:'Right-of-way at intersection',
			12:'Priority road',
			13:'Yield',
			14:'Stop',
			15:'No vehicles',
			16:'Vehicle > 3.5 tons prohibited',
			17:'No entry',
			18:'General caution',
			19:'Dangerous curve left',
			20:'Dangerous curve right',
			21:'Double curve',
			22:'Bumpy road',
			23:'Slippery road',
			24:'Road narrows on the right',
			25:'Road work',
			26:'Traffic signals',
			27:'Pedestrians',
			28:'Children crossing',
			29:'Bicycles crossing',
			30:'Beware of ice/snow',
			31:'Wild animals crossing',
			32:'End speed + passing limits',
			33:'Turn right ahead',
			34:'Turn left ahead',
			35:'Ahead only',
			36:'Go straight or right',
			37:'Go straight or left',
			38:'Keep right',
			39:'Keep left',
			40:'Roundabout mandatory',
			41:'End of no passing',
			42:'End no passing vehicle > 3.5 tons',
			43:'No Sign Detected'
            }

@app.route('/')
def home():
    return render_template('Home.html')

@app.route('/login.html',  methods=['GET'])
def login():
    return render_template('login.html')

@app.route('/forgetpsw.html',  methods=['GET'])
def forgetpsw():
    return render_template('forgetpsw.html')

@app.route('/register.html',  methods=['GET'])
def register():
    return render_template('register.html')

@app.route('/camera.html', methods=['GET', 'POST'])
def camera():
    return render_template('camera.html')

@app.route('/performance.html',  methods=['GET'])
def performance():
    return render_template('performance.html')

@app.route('/dataset.html',  methods=['GET'])
def dataset():
    return render_template('dataset.html')

# Endpoint to open the camera
@app.route('/open_camera', methods=['GET'])
def open_camera():
    # Run video_model_run.py script
    try:
        subprocess.run(["python", "video_model_run.py"])
        return jsonify({'message': 'Camera opened successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Function to close the camera process

def close_camera_process(process_name):
    print("Closing camera process...")
    for proc in psutil.process_iter(['pid', 'name']):
        if process_name in proc.info['name']:
            print(f"Found process: {proc.info['pid']} - {proc.info['name']}")
            proc.terminate()
            try:
                proc.wait(timeout=5)  # Wait for the process to terminate
                print("Process terminated successfully.")
                return True
            except psutil.TimeoutExpired:
                print("Termination timeout. Killing the process...")
                proc.kill()
                return True
    print("Camera process not found.")
    return False

# Endpoint to close the camera
@app.route('/close_camera', methods=['GET'])
def close_camera():
    try:
        if close_camera_process("python.exe"):
            return jsonify({'message': 'Camera closed successfully'})
        else:
            return jsonify({'error': 'No running process found'}), 404
    except Exception as e:
        print("Error:", e)  
        return jsonify({'error': 'Internal server error occurred'}), 500

if __name__ == '__main__':
    app.run(port = 5500, debug = True)
