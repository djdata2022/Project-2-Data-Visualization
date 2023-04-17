# Dependencies
import pandas as pd

# Read data into Pandas DataFrame
file = "Public_School_Characteristics_2020-21.csv"
df = pd.read_csv(file)

# Reduce to desired columns
new_df = df[["SCH_NAME", "LSTREET1", "LCITY", "LSTATE", "LZIP", "VIRTUAL", "TOTFRL", "TOTAL", "WH", "FTE", "LATCOD", "LONCOD", "ULOCALE", "STUTERATIO","SCHOOL_TYPE_TEXT", "SY_STATUS_TEXT", "SCHOOL_LEVEL"]]

# Ensure the following columns are numeric: LZIP, TOTFRL, TOTAL, WH, FTE, LATCOD, LONCOD, STUTERATIO
new_df[["LZIP", "TOTFRL", "TOTAL", "WH", "FTE", "LATCOD", "LONCOD", "STUTERATIO"]] = new_df[["LZIP", "TOTFRL", "TOTAL", "WH", "FTE", "LATCOD", "LONCOD", "STUTERATIO"]].apply(pd.to_numeric) #errors = 'ignore'

# Save new df
new_df.to_csv("Public_Schools_2020-2021_Cleaned.csv")

new_df.dtypes









