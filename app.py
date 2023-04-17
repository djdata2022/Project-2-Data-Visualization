# Dependencies
from flask import Flask, jsonify

# Flask Setup
app = Flask(__name__)

@app.route("/api")
def data():
    # We can import the data here once we have it all cleaned up.
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)