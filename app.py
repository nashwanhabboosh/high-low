from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/update_game', methods=['POST'])
def update_game():
    # filler data
    companyAMarketCap = 100 
    companyBMarketCap = 150 
    score = 0
    timeLeft = 10

    response_data = {
        'companyAMarketCap': companyAMarketCap,
        'companyBMarketCap': companyBMarketCap,
        'score': score,
        'timeLeft': timeLeft
    }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
