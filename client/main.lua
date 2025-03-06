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
end

RegisterCommand("test_task", function(src, args, rawCommand)
    showProgTask('Pickup the garbage cans', 5, 10, 'fa-solid fa-truck-field', 'rgb(0,255,170)')
end)

RegisterCommand("updateTask", function(src, args, rawCommand)
    updateProgTask(tonumber(args[1]))
end)

exports('showProgTask', function(title, count, maxcount, icon, color)
    showProgTask(title, count, maxcount, icon, color)
end)

exports('updateProgTask', function(count)
    updateProgTask(count)
end)
