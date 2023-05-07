from flask import Flask, render_template, request
import numpy as np
import pandas as pd
from joblib import load

app = Flask(__name__)
model = load('model_iris.model')

@app.route("/")
def home():
    return render_template('index.html')

@app.route('/api/predict', methods=["POST"])
def predict():
    float_feature = [float(x) for x in request.form.values()]
    feature = [np.array(float_feature)]
    prediction = model.predict(feature)
    return render_template('index.html', prediction_text = '{}'.format(prediction))

if __name__ == '__main__':
    app.run(port=5000, debug=True)