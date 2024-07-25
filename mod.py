import pygame
import sys
import os
import json
import requests
import random  
from pygame.locals import *

# Initialize Pygame
pygame.init()

# Set up the screen
screen_width = 1280
screen_height = 720
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Red Square 2")

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GRAY = (200, 200, 200)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)

# Fonts
option_font = pygame.font.Font(None, 48)
version_font = pygame.font.Font(None, 36)

# Load background image and menu text image
bg_image = pygame.image.load(os.path.join("assets", "bg.png")).convert()
bg_image = pygame.transform.scale(bg_image, (screen_width, screen_height))

# Load daily box image
box_image = pygame.image.load(os.path.join("assets", "box.png")).convert_alpha()
box_image = pygame.transform.scale(box_image, (100, 100))  

# Load shop image
shop_button_image = pygame.image.load(os.path.join("assets", "shop_1.png")).convert_alpha()
shop_button_image = pygame.transform.scale(shop_button_image, (50, 50))  

# Load safe button image
safe_button_image = pygame.image.load(os.path.join("assets", "safe.png")).convert_alpha()
safe_button_image = pygame.transform.scale(safe_button_image, (100, 100))  

# Load skin selection button images
skin_button_images = [pygame.image.load(os.path.join("assets", f"skin_{i}.png")).convert_alpha() for i in range(1, 24)]
skin_button_images = [pygame.transform.scale(image, (50, 50)) for image in skin_button_images]

# Load leaderboard button image
leaderboard_button_image = pygame.image.load(os.path.join("assets", "leaderboard.png")).convert_alpha()
leaderboard_button_image = pygame.transform.scale(leaderboard_button_image, (50, 50))  

# File paths for save data
SAVE_FILE = "save.json"

# Default values
DEFAULT_MONEY = 0
DEFAULT_XP = 0

# URL for the update JSON file
UPDATE_URL = "https://jjsal1234.github.io/Coolsite/update.json"

# Function to load data from save file
def load_data():
    if os.path.exists(SAVE_FILE):
        with open(SAVE_FILE, "r") as f:
            save_data = json.load(f)
            money = save_data.get("money", DEFAULT_MONEY)
            xp = save_data.get("xp", DEFAULT_XP)
    else:
        money = DEFAULT_MONEY
        xp = DEFAULT_XP
        save_data = {"money": money, "xp": xp}
        save_to_file(save_data)
    return money, xp

# Function to save data to save file
def save_to_file(data):
    with open(SAVE_FILE, "w") as f:
        json.dump(data, f)

# Function to fetch update data
def fetch_update_data():
    try:
        response = requests.get(UPDATE_URL)
        if response.status_code == 200:
            return response.json()
        else:
            return None
    except Exception as e:
        print("Error fetching update data:", e)
        return None

# Function to check for updates
def check_for_updates(current_version):
    update_data = fetch_update_data()
    if update_data:
        latest_version = update_data.get("version", current_version)
        if latest_version != current_version:
            return update_data
    return None

# Function to draw buttons
def draw_button(text, font, color, surface, x, y):
    text_obj = font.render(text, True, color)
    text_rect = text_obj.get_rect(center=(x, y))
    surface.blit(text_obj, text_rect)

# Function to check if a point is inside a rectangle
def is_inside_rect(point, rect):
    x, y = point
    rx, ry, rw, rh = rect
    return rx < x < rx + rw and ry < y < ry + rh

# Main function for main menu
def main_menu():
    global skin_button_images  

    from selection import select_screen
    from introduction import introduction_screen
    from more import more_games
    from daily import daily_screen
    from update import update_screen
    from shop import shop_screen
    from safe import safe_screen
    from settings import open_settings_screen
    import skin  
    import leaderboard
    import account

    # Load data from save file
    money, xp = load_data()

    # Get current version
    current_version = "1.4.1"  

    # Check for updates
    update_info = check_for_updates(current_version)
    if update_info:
        update_screen(update_info)  
        return

    xp_bar_width = 200
    xp_bar_height = 20
    max_xp_level_10 = 1000  
    level = xp // (max_xp_level_10 // 10) + 1  

    # Initialize skin_color
    skin_color = BLACK

    # Initialize skin button hover state
    skin_button_hovered = False

    # Timer event for changing skin button image every 5 seconds
    SKIN_CHANGE = pygame.USEREVENT + 1
    pygame.time.set_timer(SKIN_CHANGE, 5000)

    # Initialize current skin index
    current_skin_index = 0

    # Main loop
    while True:
        screen.blit(bg_image, (0, 0))  

        # Draw menu text image
        menu_text_image = pygame.image.load(os.path.join("assets", "menu_text.png")).convert_alpha()
        menu_text_image = pygame.transform.scale(menu_text_image, (int(menu_text_image.get_width() * 1.5), int(menu_text_image.get_height() * 1.5)))
        screen.blit(menu_text_image, ((screen_width - menu_text_image.get_width()) // 2, 100))

        # Get mouse position
        mouse_x, mouse_y = pygame.mouse.get_pos()

        # Check if mouse is over the skin button
        if 50 < mouse_x < 100 and (screen_height - skin_button_images[0].get_height()) // 2 - 60 < mouse_y < (screen_height + skin_button_images[0].get_height()) // 2 - 10:
            skin_button_hovered = True
        else:
            skin_button_hovered = False

        # Draw skin selection button on the left side of the screen, above the shop button
        if skin_button_hovered:
            screen.blit(skin_button_images[current_skin_index], (50, (screen_height - skin_button_images[current_skin_index].get_height()) // 2 - 60))
        else:
            screen.blit(skin_button_images[current_skin_index], (50, (screen_height - skin_button_images[current_skin_index].get_height()) // 2 - 60))

        # Draw shop button on the left side of the screen, above the leaderboard button
        screen.blit(shop_button_image, (50, (screen_height - shop_button_image.get_height()) // 2))

        # Draw leaderboard button on the left side of the screen, under the shop button
        screen.blit(leaderboard_button_image, (50, (screen_height - leaderboard_button_image.get_height()) // 2 + 60))

        # Draw buttons and text
        play_color = GREEN if is_inside_rect((mouse_x, mouse_y), (screen_width // 2 - 50, screen_height // 2 - 70, 100, 40)) else BLACK
        settings_color = GREEN if is_inside_rect((mouse_x, mouse_y), (screen_width // 2 - 70, screen_height // 2 - 20, 140, 40)) else BLACK
        intro_color = GREEN if is_inside_rect((mouse_x, mouse_y), (screen_width // 2 - 100, screen_height // 2 + 30, 200, 40)) else BLACK
        quit_color = RED if is_inside_rect((mouse_x, mouse_y), (screen_width // 2 - 50, screen_height // 2 + 100, 100, 40)) else BLACK  # Adjusted position for quit button
        more_color = GREEN if is_inside_rect((mouse_x, mouse_y), (screen_width - 100, screen_height - 25, 100, 25)) else BLACK

        # Calculate the ratio of current XP to the maximum XP required to reach level 10
        xp_ratio = xp / max_xp_level_10

        # Calculate the width of the filled portion of the XP bar
        xp_bar_fill_width = min(xp_bar_width, int(xp_bar_width * xp_ratio))

        # Draw XP bar
        pygame.draw.rect(screen, GRAY, (screen_width - xp_bar_width - 10, 10, xp_bar_width, xp_bar_height))
        pygame.draw.rect(screen, BLUE, (screen_width - xp_bar_width - 10, 10, xp_bar_fill_width, xp_bar_height))
        pygame.draw.rect(screen, BLACK, (screen_width - xp_bar_width - 10, 10, xp_bar_width, xp_bar_height), 2)

        # Display level
        level_text = option_font.render(f"Level: {level}", True, BLACK)
        screen.blit(level_text, (screen_width - 150, 40))

        # Display version number in the bottom left corner
        version_text = version_font.render("V1.4.1 (Modded)", True, BLACK)
        screen.blit(version_text, (10, screen_height - 30))

        # Display money
        money_text = option_font.render(f"Money: ${money}", True, BLACK)
        screen.blit(money_text, (10, 10))

        # Draw buttons
        draw_button("Play", option_font, play_color, screen, screen_width // 2, screen_height // 2 - 50)
        draw_button("Settings", option_font, settings_color, screen, screen_width // 2, screen_height // 2)
        draw_button("Introduction", option_font, intro_color, screen, screen_width // 2, screen_height // 2 + 50)
        draw_button("Quit", option_font, quit_color, screen, screen_width // 2, screen_height // 2 + 100)  # Adjusted position for quit button
        draw_button("More Games", option_font, more_color, screen, screen_width - 100, screen_height - 25)

        # Draw daily box button on the right side of the screen
        screen.blit(box_image, (screen_width - 150, (screen_height - box_image.get_height()) // 2))

        # Draw safe button above the daily box
        screen.blit(safe_button_image, (screen_width - 150, (screen_height - safe_button_image.get_height()) // 2 - 150))

        # Process events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == SKIN_CHANGE:
                current_skin_index = (current_skin_index + 1) % len(skin_button_images)
            elif event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 1:
                    x, y = event.pos
                    if (screen_width // 2 - 50 < x < screen_width // 2 + 50) and (screen_height // 2 - 70 < y < screen_height // 2 - 30):
                        select_screen()  
                    elif (screen_width // 2 - 70 < x < screen_width // 2 + 70) and (screen_height // 2 - 20 < y < screen_height // 2 + 20):
                        open_settings_screen()  
                    elif (screen_width // 2 - 100 < x < screen_width // 2 + 100) and (screen_height // 2 + 30 < y < screen_height // 2 + 70):
                        introduction_screen()  
                    elif (screen_width // 2 - 50 < x < screen_width // 2 + 50) and (screen_height // 2 + 100 < y < screen_height // 2 + 140):
                        pygame.quit()  
                    elif (screen_width // 2 - 100 < x < screen_width // 2 + 100) and (screen_height // 2 + 80 < y < screen_height // 2 + 120):
                        update_screen(update_info)  # Open update screen
                    elif (screen_width - 100 < x < screen_width - 50) and (screen_height - 25 < y < screen_height):
                        more_games()  
                    elif (screen_width - 150 < x < screen_width - 100) and ((screen_height - box_image.get_height()) // 2 < y < (screen_height + box_image.get_height()) // 2):
                        daily_screen()  
                    elif (screen_width - 150 < x < screen_width - 100) and ((screen_height - safe_button_image.get_height()) // 2 - 150 < y < (screen_height + safe_button_image.get_height()) // 2 - 50):
                        safe_screen()  
                    elif (50 < x < 100) and ((screen_height - shop_button_image.get_height()) // 2 < y < (screen_height + shop_button_image.get_height()) // 2):
                        shop_screen()  
                    elif (50 < x < 100) and ((screen_height - skin_button_images[0].get_height()) // 2 - 60 < y < (screen_height + skin_button_images[0].get_height()) // 2 - 10):
                        skin.skin_screen()  
                    elif (50 < x < 100) and ((screen_height - leaderboard_button_image.get_height()) // 2 + 60 < y < (screen_height + leaderboard_button_image.get_height()) // 2 + 110):
                        leaderboard.main()  
        pygame.display.update()

if __name__ == "__main__":
    main_menu()
