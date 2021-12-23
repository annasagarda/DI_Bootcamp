import flask
from flask import render_template

app = flask.Flask(__name__)
print(__name__)


@app.route('/')
def index():
    return render_template('Excercise.html')

@app.route('/blog')
def blog():
    return "This is a blog text"

app.run()
