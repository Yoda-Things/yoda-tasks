local currentTask = {
    title = "",
    count = 0,
    maxcount = 0,
    icon = "",
    color = ""
}

RegisterNetEvent("yoda-tasks:ShowProgTask")
AddEventHandler("yoda-tasks:ShowProgTask", function(title, count, maxcount, icon, color)
    showProgTask(title, count, maxcount, icon, color)
end)

RegisterNetEvent("yoda-tasks:UpdateProgTask")
AddEventHandler("yoda-tasks:UpdateProgTask", function(count)
    updateProgTask(count)
end)

function showProgTask(title, count, maxcount, icon, color)
    currentTask.title = title
    currentTask.count = count
    currentTask.maxcount = maxcount
    currentTask.icon = icon
    currentTask.color = color
    SendNUIMessage({
        action = 'showTask',
        title = title,
        count = count,
        maxcount = maxcount,
        icon = icon,
        color = color
    })
end

function updateProgTask(newcount)
        currentTask.count = newcount
        SendNUIMessage({
            action = 'showTask',
            count = currentTask.count,
            title = currentTask.title,
            maxcount = currentTask.maxcount,
            icon = currentTask.icon,
            color = currentTask.color
        })
        if newcount == currentTask.maxcount then
            currentTask = {
                title = "",
                count = 0,
                maxcount = 0,
                icon = "",
                color = ""
            }
        end
end

exports('showProgTask', function(title, count, maxcount, icon, color)
    showProgTask(title, count, maxcount, icon, color)
end)

exports('updateProgTask', function(count)
    updateProgTask(count)
end)

function showSimpleTask(message, color)
    local formattedMessage = message
    SendNUIMessage({
        action = 'showSimpleTask',
        title = formattedMessage,
    })
end

RegisterNetEvent("yoda-tasks:ShowSimpleTask")
AddEventHandler("yoda-tasks:ShowSimpleTask", function(title, message)
    showSimpleTask(title, message)
end)

RegisterNetEvent("yoda-tasks:CancelSimpleTask")
AddEventHandler("yoda-tasks:CancelSimpleTask", function()
    cancelSimpleTask()
end)

exports('showSimpleTask', function(title, message)
    showSimpleTask(title, message)
end)

exports('cancelSimpleTask', function()
    cancelSimpleTask()
end)
