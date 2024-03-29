-- Load the Orion library
local boot, local OrionLib = loadstring(game:HttpGet(('https://raw.githubusercontent.com/shlexware/Orion/main/source')))()

-- Create a window
local Window = OrionLib:MakeWindow({
    Name = "Admin Panel",
    HidePremium = false,
    SaveConfig = true,
    ConfigFolder = "AdminPanelConfig"
})

-- Create a tab
local Tab1 = Window:MakeTab({
    Name = "Tab 1",
    Icon = "rbxassetid://4483345998",
    PremiumOnly = false
})

-- Add a section to the tab
local Section1 = Tab1:AddSection({
    Name = "Section 1"
})

-- Add a button to the section
Section1:AddButton({
    Name = "Button 1",
    Callback = function()
        print("Button 1 pressed")
    end
})

-- Create another tab
local Tab2 = Window:MakeTab({
    Name = "Tab 2",
    Icon = "rbxassetid://4483345998",
    PremiumOnly = false
})

-- Add a section to the second tab
local Section2 = Tab2:AddSection({
    Name = "Section 2"
})

-- Add a toggle to the second section
local Toggle1 = Section2:AddToggle({
    Name = "Toggle 1",
    Default = false,
    Callback = function(Value)
        print("Toggle 1 value:", Value)
    end
})
