-- Variables
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

guiFrame.Name = "PanelFrame"
guiFrame.Size = UDim2.new(0.25, 0, 0.5, 0)
guiFrame.Position = UDim2.new(0.75, 0, 0.25, 0)
guiFrame.BackgroundColor3 = Color3.new(0.2, 0.2, 0.2)
guiFrame.BorderSizePixel = 2
guiFrame.BorderColor3 = Color3.new(1, 1, 1)
guiFrame.Parent = screenGui

flyButton.Name = "FlyButton"
flyButton.Size = UDim2.new(0.8, 0, 0.1, 0)
flyButton.Position = UDim2.new(0.1, 0, 0.05, 0)
flyButton.BackgroundColor3 = Color3.new(0.5, 0.5, 0.5)
flyButton.TextColor3 = Color3.new(1, 1, 1)
flyButton.Text = "Toggle Fly"
flyButton.FontSize = Enum.FontSize.Size18
flyButton.Parent = guiFrame

noclipButton.Name = "NoclipButton"
noclipButton.Size = UDim2.new(0.8, 0, 0.1, 0)
noclipButton.Position = UDim2.new(0.1, 0, 0.2, 0)
noclipButton.BackgroundColor3 = Color3.new(0.5, 0.5, 0.5)
noclipButton.TextColor3 = Color3.new(1, 1, 1)
noclipButton.Text = "Toggle Noclip"
noclipButton.FontSize = Enum.FontSize.Size18
noclipButton.Parent = guiFrame

speedSlider.Name = "SpeedSlider"
speedSlider.Size = UDim2.new(0.8, 0, 0.1, 0)
speedSlider.Position = UDim2.new(0.1, 0, 0.35, 0)
speedSlider.BackgroundColor3 = Color3.new(0.5, 0.5, 0.5)
speedSlider.TextColor3 = Color3.new(1, 1, 1)
speedSlider.Text = "Set Speed"
speedSlider.FontSize = Enum.FontSize.Size18
speedSlider.Parent = guiFrame

jumpSlider.Name = "JumpSlider"
jumpSlider.Size = UDim2.new(0.8, 0, 0.1, 0)
jumpSlider.Position = UDim2.new(0.1, 0, 0.5, 0)
jumpSlider.BackgroundColor3 = Color3.new(0.5, 0.5, 0.5)
jumpSlider.TextColor3 = Color3.new(1, 1, 1)
jumpSlider.Text = "Set Jump Height"
jumpSlider.FontSize = Enum.FontSize.Size18
jumpSlider.Parent = guiFrame

speedValue.Name = "SpeedValue"
speedValue.Size = UDim2.new(0.8, 0, 0.05, 0)
speedValue.Position = UDim2.new(0.1, 0, 0.45, 0)
speedValue.BackgroundColor3 = Color3.new(0.5, 0.5, 0.5)
speedValue.TextColor3 = Color3.new(1, 1, 1)
speedValue.Text = "WalkSpeed: 16"
speedValue.FontSize = Enum.FontSize.Size18
speedValue.Parent = guiFrame

jumpValue.Name = "JumpValue"
jumpValue.Size = UDim2.new(0.8, 0, 0.05, 0)
jumpValue.Position = UDim2.new(0.1, 0, 0.65, 0)
jumpValue.BackgroundColor3 = Color3.new(0.5, 0.5, 0.5)
jumpValue.TextColor3 = Color3.new(1, 1, 1)
jumpValue.Text = "JumpHeight: 7.2"
jumpValue.FontSize = Enum.FontSize.Size18
jumpValue.Parent = guiFrame

notification.Name = "Notification"
notification.Size = UDim2.new(0.8, 0, 0.1, 0)
notification.Position = UDim2.new(0.1, 0, 0.8, 0)
notification.BackgroundColor3 = Color3.new(0.5, 0.5, 0.5)
notification.TextColor3 = Color3.new(1, 1, 1)
notification.Text = ""
notification.FontSize = Enum.FontSize.Size18
notification.Parent = guiFrame

-- Function to toggle fly
local function toggleFly()
    local humanoid = player.Character:FindFirstChildOfClass("Humanoid")
    if humanoid then
        humanoid.PlatformStand = not humanoid.PlatformStand
        notification.Text = "Fly " .. (humanoid.PlatformStand and "enabled" or "disabled")
        wait(3)
        notification.Text = ""
    end
end

-- Function to toggle noclip
local function toggleNoclip()
    local humanoid = player.Character:FindFirstChildOfClass("Humanoid")
    if humanoid then
        local isNoclipEnabled = humanoid:GetState() == Enum.HumanoidStateType.Physics
        humanoid:SetStateEnabled(Enum.HumanoidStateType.Physics, not isNoclipEnabled)
        notification.Text = "Noclip " .. (not isNoclipEnabled and "enabled" or "disabled")
        wait(3)
        notification.Text = ""
    end
end

-- Function to set player's speed
local function setSpeed()
    local speed = tonumber(speedValue.Text:match("%d+%.?%d*"))
    if speed then
        player.Character:FindFirstChildOfClass("Humanoid").WalkSpeed = speed
        speedValue.Text = "WalkSpeed: " .. speed
    end
end

-- Function to set player's jump height
local function setJumpHeight()
    local jumpHeight = tonumber(jumpValue.Text:match("%d+%.?%d*"))
    if jumpHeight then
        player.Character:FindFirstChildOfClass("Humanoid").JumpHeight = jumpHeight
        jumpValue.Text = "JumpHeight: " .. jumpHeight
    end
end

-- Connect button clicks to functions
flyButton.Activated:Connect(toggleFly)
noclipButton.Activated:Connect(toggleNoclip)
speedSlider.Activated:Connect(setSpeed)
jumpSlider.Activated:Connect(setJumpHeight)