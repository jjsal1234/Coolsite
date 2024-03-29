local player = game.Players.LocalPlayer
local screenGui = Instance.new("ScreenGui")
local guiFrame = Instance.new("Frame")
local flyButton = Instance.new("TextButton")
local noclipButton = Instance.new("TextButton")
local speedSlider = Instance.new("TextButton")
local jumpSlider = Instance.new("TextButton")
local speedValue = Instance.new("TextLabel")
local jumpValue = Instance.new("TextLabel")
local notification = Instance.new("TextLabel")

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
flyButton.Size = UDim2.new(0, 180, 0, 50)
flyButton.Position = UDim2.new(0, 10, 0, 10)
flyButton.BackgroundColor3 = Color3.fromRGB(100, 150, 255)
flyButton.Text = "Fly"
flyButton.Parent = guiFrame

noclipButton.Name = "NoclipButton"
noclipButton.Size = UDim2.new(0, 180, 0, 50)
noclipButton.Position = UDim2.new(0, 10, 0, 70)
noclipButton.BackgroundColor3 = Color3.fromRGB(100, 150, 255)
noclipButton.Text = "Noclip"
noclipButton.Parent = guiFrame

speedSlider.Name = "SpeedSlider"
speedSlider.Size = UDim2.new(0, 180, 0, 50)
speedSlider.Position = UDim2.new(0, 10, 0, 130)
speedSlider.BackgroundColor3 = Color3.fromRGB(100, 150, 255)
speedSlider.Text = "Speed"
speedSlider.Parent = guiFrame

jumpSlider.Name = "JumpSlider"
jumpSlider.Size = UDim2.new(0, 180, 0, 50)
jumpSlider.Position = UDim2.new(0, 10, 0, 190)
jumpSlider.BackgroundColor3 = Color3.fromRGB(100, 150, 255)
jumpSlider.Text = "Jump"
jumpSlider.Parent = guiFrame

speedValue.Name = "SpeedValue"
speedValue.Size = UDim2.new(0, 180, 0, 20)
speedValue.Position = UDim2.new(0, 10, 0, 250)
speedValue.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
speedValue.Text = "Speed: 0"
speedValue.Parent = guiFrame

jumpValue.Name = "JumpValue"
jumpValue.Size = UDim2.new(0, 180, 0, 20)
jumpValue.Position = UDim2.new(0, 10, 0, 280)
jumpValue.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
jumpValue.Text = "Jump: 0"
jumpValue.Parent = guiFrame

notification.Name = "Notification"
notification.Size = UDim2.new(0, 200, 0, 30)
notification.Position = UDim2.new(0, 0, 1, -30)
notification.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
notification.BackgroundTransparency = 0.5
notification.Text = ""
notification.TextColor3 = Color3.fromRGB(255, 255, 255)
notification.TextSize = 20
notification.Parent = guiFrame

-- Functions to handle button clicks and slider changes
flyButton.MouseButton1Click:Connect(function()
    -- Code to toggle flying
    notification.Text = "Toggled flying"
    wait(2)
    notification.Text = ""
end)

noclipButton.MouseButton1Click:Connect(function()
    -- Code to toggle noclip
    notification.Text = "Toggled noclip"
    wait(2)
    notification.Text = ""
end)

speedSlider.MouseButton1Click:Connect(function()
    -- Code to adjust speed
    notification.Text = "Adjusted speed"
    wait(2)
    notification.Text = ""
end)

jumpSlider.MouseButton1Click:Connect(function()
    -- Code to adjust jump power
    notification.Text = "Adjusted jump power"
    wait(2)
    notification.Text = ""
end)
