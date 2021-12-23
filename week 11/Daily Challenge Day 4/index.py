import flask

app = flask.Flask(__name__)

@app.route('/')
def index():
    return flask.render_template("homepage.html")

@app.route('/colors/<color>')
def colors_func(color):
    return flask.render_template("colors.html", color=color)


app.run()