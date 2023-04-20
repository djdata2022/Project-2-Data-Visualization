# Dependencies
import numpy as np
import pandas as pd
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template 
from config import pg_user_name, pg_password

# Database Setup
engine = create_engine(f"postgresql://{pg_user_name}:{pg_password}@localhost:5433/create_db")
conn = engine.connect()

# Flask Setup
app = Flask(__name__)

@app.route("/")
def index_page():
    return render_template("index.html")

@app.route("/api")
def data():
    df = pd.read_sql("SELECT * FROM schools_chars",conn)
    df_json = df.to_dict(orient="records")
    return jsonify(df_json)

if __name__ == '__main__':
    app.run(debug=True)
