import tkinter as tk
from tkinter import messagebox

foods = {
    "Pizza": 299,
    "Burger": 149,
    "Chicken Biryani": 199,
    "Veg Pulao": 129,
    "Paneer Butter Masala": 179,
    "Chicken Roll": 99,
    "Veg Fried Rice": 119,
    "Momos": 89,
    "French Fries": 79,
    "Cold Coffee": 99
}

cart = []

def add_item(name):
    price = foods[name]
    cart.append((name, price))
    update_bill()

def update_bill():
    bill_box.delete(1.0, tk.END)

    total = 0
    bill_box.insert(tk.END, "FOODIE POS BILLING MACHINE\n")
    bill_box.insert(tk.END, "-----------------------------\n")

    for item, price in cart:
        bill_box.insert(tk.END, f"{item} - ₹{price}\n")
        total += price

    bill_box.insert(tk.END, "-----------------------------\n")
    bill_box.insert(tk.END, f"Total Amount: ₹{total}\n")

def clear_bill():
    cart.clear()
    update_bill()

def payment():
    if not cart:
        messagebox.showwarning("Empty Cart", "Please select food first")
        return

    total = sum(price for item, price in cart)
    messagebox.showinfo("Payment Successful", f"Payment of ₹{total} completed")

    clear_bill()

root = tk.Tk()
root.title("Foodie POS Billing Machine")
root.geometry("1000x650")
root.config(bg="#fff4e6")

title = tk.Label(
    root,
    text="🍔 Foodie POS Billing Machine",
    font=("Arial", 28, "bold"),
    bg="#fff4e6",
    fg="#ff5a00"
)
title.pack(pady=20)

main_frame = tk.Frame(root, bg="#fff4e6")
main_frame.pack(fill="both", expand=True, padx=30, pady=10)

left_frame = tk.Frame(main_frame, bg="#fff4e6")
left_frame.pack(side="left", fill="both", expand=True)

right_frame = tk.Frame(main_frame, bg="white", bd=2, relief="ridge")
right_frame.pack(side="right", fill="both", padx=20)

food_title = tk.Label(
    left_frame,
    text="Select Food Items",
    font=("Arial", 20, "bold"),
    bg="#fff4e6"
)
food_title.pack(pady=10)

grid_frame = tk.Frame(left_frame, bg="#fff4e6")
grid_frame.pack()

row = 0
col = 0

for food, price in foods.items():
    btn = tk.Button(
        grid_frame,
        text=f"{food}\n₹{price}",
        font=("Arial", 13, "bold"),
        width=18,
        height=3,
        bg="#ff8a00",
        fg="white",
        command=lambda f=food: add_item(f)
    )
    btn.grid(row=row, column=col, padx=10, pady=10)

    col += 1
    if col == 3:
        col = 0
        row += 1

bill_title = tk.Label(
    right_frame,
    text="🧾 Bill Receipt",
    font=("Arial", 20, "bold"),
    bg="white"
)
bill_title.pack(pady=15)

bill_box = tk.Text(
    right_frame,
    width=35,
    height=22,
    font=("Courier", 12)
)
bill_box.pack(padx=15, pady=10)

pay_btn = tk.Button(
    right_frame,
    text="Pay Now",
    font=("Arial", 15, "bold"),
    bg="green",
    fg="white",
    width=20,
    command=payment
)
pay_btn.pack(pady=8)

clear_btn = tk.Button(
    right_frame,
    text="Clear Bill",
    font=("Arial", 15, "bold"),
    bg="red",
    fg="white",
    width=20,
    command=clear_bill
)
clear_btn.pack(pady=8)

update_bill()

root.mainloop()