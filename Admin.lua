local player = game.Players.LocalPlayer
local screenGui = Instance.new("ScreenGui")
local guiFrame = Instance.new("Frame")
local flyButton = Instance.new("TextButton")
local noclipButton = Instance.new("TextButton")
local speedSlider = Instance.new("TextButton")
local jumpSlider = Instance.new("TextButton")
local speedValue = Instance.new("TextLabel")
local jumpValue = Instance.new("TextLabel")
local notificationFrame = Instance.new("Frame") -- Changed to Frame for better control
local notificationText = Instance.new("TextLabel")

-- Set properties for GUI elements
screenGui.Name = "AdminPanel"
screenGui.Parent = player.PlayerGui

guiFrame.Name = "AdminPanelFrame"
guiFrame.Size = UDim2.new(0, 200, 0, 300)
guiFrame.Position = UDim2.new(0, 10, 0, 10)
guiFrame.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
guiFrame.BackgroundTransparency = 0.5
guiFrame.BorderSizePixel = 0
guiFrame.Parent = screenGui

flyButton.Name = "FlyButton"
-- Other button setups...

-- SpeedValue and JumpValue setups...

-- Setup for notification frame and text
notificationFrame.Name = "NotificationFrame"
notificationFrame.Size = UDim2.new(0, 200, 0, 30)
notificationFrame.Position = UDim2.new(0, 0, 1, -30)
notificationFrame.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
notificationFrame.BackgroundTransparency = 0.5
notificationFrame.Visible = false -- Initially not visible
notificationFrame.Parent = guiFrame

notificationText.Name = "NotificationText"
notificationText.Size = UDim2.new(1, 0, 1, 0)
notificationText.Position = UDim2.new(0, 0, 0, 0)
notificationText.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
notificationText.Text = ""
notificationText.TextColor3 = Color3.fromRGB(0, 0, 0)
notificationText.TextSize = 20
notificationText.Parent = notificationFrame

-- Function to animate the notification
local function animateNotification(text)
    notificationText.Text = text
    notificationFrame.Visible = true

    -- Tween the notification
    notificationFrame:TweenSize(UDim2.new(0, 200, 0, 30), Enum.EasingDirection.Out, Enum.EasingStyle.Quart, 0.5, true)
    wait(2.5)
    notificationFrame:TweenSize(UDim2.new(0, 0, 0, 30), Enum.EasingDirection.Out, Enum.EasingStyle.Quart, 0.5, true)
    wait(0.5)
    notificationFrame.Visible = false
end

-- Functions to handle button clicks and slider changes
flyButton.MouseButton1Click:Connect(function()
    -- Code to toggle flying
    animateNotification("Toggled flying")
end)

noclipButton.MouseButton1Click:Connect(function()
    -- Code to toggle noclip
    animateNotification("Toggled noclip")
end)

speedSlider.MouseButton1Click:Connect(function()
    -- Code to adjust speed
    animateNotification("Adjusted speed")
end)

jumpSlider.MouseButton1Click:Connect(function()
    -- Code to adjust jump power
    animateNotification("Adjusted jump power")
end)
