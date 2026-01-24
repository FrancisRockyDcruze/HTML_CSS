import os
import json

# Path to your folder
folder_path = "others/fullstack_web_dev_work"

# List all HTML files in the folder
files = [f for f in os.listdir(folder_path) if f.endswith(".html")]

# Generate JS array content
js_content = f"const fullstackFiles = {json.dumps(files, indent=2)};"

# Write to fileList.js
with open("fileList.js", "w") as f:
    f.write(js_content)

print("others/fileList.js generated!")



#### for OtherHTML
folder_path = "others/my_html_cs_js"

# List all HTML files in the folder
files = [f for f in os.listdir(folder_path) if f.endswith(".html")]

# Generate JS array content
js_content = f"const fullstackFiles = {json.dumps(files, indent=2)};"

# Write to fileList.js
with open("others/fileList2.js", "w") as f:
    f.write(js_content)

print("fileList2.js generated!")
