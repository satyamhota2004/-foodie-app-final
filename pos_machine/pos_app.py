from flask import Flask, render_template_string

app = Flask(__name__)

@app.route("/")
def home():
    return render_template_string("""
<!DOCTYPE html>
<html>
<head>
    <title>Foodie POS</title>
    <style>
        body {
            font-family: Arial;
            background: #f5f5f5;
            padding: 30px;
        }
        .title {
            text-align: center;
            color: #ff5a00;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
        .card {
            background: white;
            padding: 25px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .emoji {
            font-size: 60px;
        }
        button {
            background: orange;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 10px;
            cursor: pointer;
        }
        .bill {
            margin-top: 30px;
            background: white;
            padding: 25px;
            border-radius: 20px;
        }
    </style>
</head>
<body>

<h1 class="title">🍔 Foodie POS Billing Machine</h1>

<div class="grid">
    <div class="card"><div class="emoji">🍕</div><h2>Pizza</h2><p>₹299</p><button onclick="addItem('Pizza',299)">Add</button></div>
    <div class="card"><div class="emoji">🍔</div><h2>Burger</h2><p>₹149</p><button onclick="addItem('Burger',149)">Add</button></div>
    <div class="card"><div class="emoji">🍛</div><h2>Biryani</h2><p>₹199</p><button onclick="addItem('Biryani',199)">Add</button></div>
    <div class="card"><div class="emoji">🥟</div><h2>Momos</h2><p>₹89</p><button onclick="addItem('Momos',89)">Add</button></div>
    <div class="card"><div class="emoji">🍟</div><h2>Fries</h2><p>₹79</p><button onclick="addItem('Fries',79)">Add</button></div>
    <div class="card"><div class="emoji">🥤</div><h2>Cold Coffee</h2><p>₹99</p><button onclick="addItem('Cold Coffee',99)">Add</button></div>
</div>

<div class="bill">
    <h2>🧾 Bill Receipt</h2>
    <div id="billItems"></div>
    <hr>
    <h2>Total: ₹<span id="total">0</span></h2>
    <button onclick="payNow()">Pay Now</button>
    <button onclick="clearBill()">Clear</button>
</div>

<script>
let total = 0;

function addItem(name, price) {
    total += price;
    document.getElementById("billItems").innerHTML += `<p>${name} - ₹${price}</p>`;
    document.getElementById("total").innerText = total;
}

function clearBill() {
    total = 0;
    document.getElementById("billItems").innerHTML = "";
    document.getElementById("total").innerText = total;
}

function payNow() {
    if (total === 0) {
        alert("Please add food first");
    } else {
        alert("Payment Successful ₹" + total);
        clearBill();
    }
}
</script>

</body>
</html>
""")

if __name__ == "__main__":
    app.run(port=8000, debug=True)