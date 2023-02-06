from flask import Flask, request
from flask_cors import CORS    # nodig om crossplatform connectie te maken (installatie https://flask-cors.readthedocs.io/en/latest/)
from gpiozero import LED


led = LED(17)

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Hello You!"

@app.route("/on", methods=['POST','GET'])
def ledOn():
    if request.method == 'POST':
        led.on()
        return {"message" : "Led is now turned on"}
    else:
        return "Led only available with post"

@app.route("/off", methods=['POST', 'GET'])
def ledOff():
    if request.method == 'POST':
        led.off()
        return {"message" :"Led is now turned off"}
    else:
        return "Led only available with post"


@app.route("/doStuff", methods=["POST","GET"])
def doStuff():
    if request.method == "POST":
        test = request.json
        print(test)        
        return {"message" : "Message received"}
    else:
        print(request.json())
        return "No message received"


if __name__ =="__main__":
    app.run(host='0.0.0.0',debug=True)