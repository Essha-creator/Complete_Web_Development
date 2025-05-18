import tkinter as tk
from math import cos, sin, radians

def draw_rocket():
    root = tk.Tk()
    root.title("Space Rocket")
    canvas = tk.Canvas(root, width=800, height=600, bg="#000040")
    canvas.pack()

    # Rocket body (main rectangle)
    canvas.create_rectangle(300, 200, 400, 500, fill="#FF4500", outline="#FFD700", width=3)
    
    # Rocket nose cone (triangle with gradient)
    canvas.create_polygon(
        300, 200, 400, 200, 350, 100,
        fill="#FFA500", outline="#FFD700", width=3
    )

    # Rocket fins (bottom rectangles with 3D effect)
    canvas.create_rectangle(250, 400, 300, 500, fill="#4169E1", outline="#00008B", width=6)
    canvas.create_rectangle(400, 400, 450, 500, fill="#4169E1", outline="#00008B", width=6)

    # Window (circular porthole)
    canvas.create_oval(335, 250, 365, 280, fill="#00BFFF", outline="#00008B", width=2)
    
    # Body stripes
    canvas.create_rectangle(300, 300, 400, 310, fill="#FFD700", outline="")
    canvas.create_rectangle(300, 350, 400, 360, fill="#FFD700", outline="")
    
    # Engine flames
    for i in range(5):
        angle = 30 + i*15
        flame_length = 50 + i*5
        flame_x = 350 + 20 * cos(radians(angle))
        flame_y = 500 + 20 * sin(radians(angle))
        canvas.create_line(
            350, 500,
            flame_x, flame_y + flame_length,
            fill=["#FF0000", "#FF4500", "#FFA500"][i%3],
            width=3 + i
        )

    # Stars background
    for _ in range(50):
        x = 50 + 700 * (id(0)/1000000000000000000 % 1)
        y = 50 + 500 * (id(0)/1000000000000000000 % 1)
        canvas.create_oval(x, y, x+2, y+2, fill="white")

    root.mainloop()

if __name__ == "__main__":
    draw_rocket()