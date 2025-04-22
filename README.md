# YodaTasks

A FiveM resource for displaying task UI notifications, including progress tasks and simple task notifications.

## Features

- **Progress Tasks**: Display tasks with a progress bar showing completion status
- **Simple Tasks**: Show simple task notifications with title and message
- **Gradient Border**: Sleek gradient border separating title and message
- **Customizable Colors**: Change colors to match your server's theme

## Usage

### Simple Tasks

The simple task UI now has a title above a gradient border, with the message displayed below it.

#### Basic Usage

```lua
-- Full format with title and message
exports['yoda-tasks']:showSimpleTask('Collect Items', 'Find 5 hidden packages')
```

### Progress Tasks

```lua
-- Start a progress task
exports['yoda-tasks']:showProgTask('Pickup the garbage cans', 0, 10, 'fa-solid fa-truck-field', 'rgb(0,255,170)')

-- Update the progress
exports['yoda-tasks']:updateProgTask(5) -- 5/10 completed
```

## Server Events

```lua
-- Trigger from server
TriggerClientEvent('yoda-tasks:ShowSimpleTask', playerId, 'Task Title', 'Go to this location')

-- For progress tasks
TriggerClientEvent('yoda-tasks:ShowProgTask', playerId, 'Pickup Items', 0, 10, 'fa-solid fa-box', 'rgb(0,255,170)')
TriggerClientEvent('yoda-tasks:UpdateProgTask', playerId, 5) -- Update to 5/10
```

## Cancel Task

```lua
-- Cancel a simple task
exports['yoda-tasks']:cancelSimpleTask()
```
