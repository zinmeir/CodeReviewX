from flask import Flask, request, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "service": "CodeReviewX API"})

@app.route('/api/webhook', methods=['POST'])
def github_webhook():
    # This endpoint will eventually receive GitHub Webhook events when a PR is opened
    data = request.json
    print(f"Received GitHub event: {data}")
    return jsonify({"status": "queued for review"}), 202

@app.route('/api/manual-review', methods=['POST'])
def manual_review():
    # Simulated endpoint for testing the React dashboard
    data = request.json
    pr_url = data.get('pr_url', 'Unknown PR')
    
    # Simulating API calls to OpenAI and GitHub
    time.sleep(1.5)
    
    return jsonify({
        "pr": pr_url,
        "status": "success",
        "analysis": {
            "security_issues": ["Potential API Key exposure in config.py:12"],
            "performance": ["O(n^2) loop detected in data_parser.py:45"],
            "suggestions": ["Add explicit type hinting to process_data() function", "Extract inline CSS into a stylesheet"]
        }
    })

if __name__ == '__main__':
    # Running on 0.0.0.0 allows Docker to expose the port correctly
    app.run(host='0.0.0.0', port=5000, debug=True)
