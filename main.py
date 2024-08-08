import json
from flask import Flask, render_template, request
import json

app = Flask(__name__)

@app.route('/',methods=['GET', 'POST'])
def index():
    return render_template('ask.html')

    
@app.route('/gate', methods=['GET','POST'])
def welcome():
    password = request.form['password']
    if password == "Mellon":
        return render_template('gate.html')
    else:
        return render_template('try.html')
    
@app.route('/open', methods=['GET','POST'])
def open_gate():
    if request.method == 'POST':
        with open('places.json',encoding='utf-8') as file:
            data = json.load(file)
        the_key = request.form['key']
        if the_key == '299':
            return render_template('open.html', places= data['places'])
        hint = "The Call of Ctulhu"
        return render_template('gate.html', hint=hint)
    


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='localhost')
