# Restore and Install Skills for AI (Windows PowerShell)
# Usage:
#   powershell -ExecutionPolicy Bypass -File RESTORE-AND-INSTALL.ps1
#
# What this does:
# 1. Reconstructs the original folder hierarchies (mega-ui-ux-skill, ponytail, mcp-servers)
#    into a sibling folder named "Skills-Restored" so all scripts and relative paths work.
# 2. Installs the skills (mega-ui-ux, ponytail, ponytail-audit, ponytail-debt, ponytail-gain,
#    ponytail-help, ponytail-review) and MCP servers config into Antigravity (~/.gemini),
#    Claude (~/.claude), and Agents (~/.agents).

param(
    [string]$RestoreDir = (Join-Path (Split-Path $PSScriptRoot -Parent) "Skills-Restored"),
    [switch]$RestoreOnly
)

$ErrorActionPreference = 'Stop'
New-Item -ItemType Directory -Path $RestoreDir -Force | Out-Null

$prefixes = @('mega-ui-ux-skill__', 'ponytail__', 'standalone-skills__', 'mcp-servers__')

Get-ChildItem -Path $PSScriptRoot -File | ForEach-Object {
    $name = $_.Name
    foreach ($prefix in $prefixes) {
        if ($name.StartsWith($prefix)) {
            $rootFolder = $prefix.Substring(0, $prefix.Length - 2)
            $relPart = $name.Substring($prefix.Length) -replace '__', [IO.Path]::DirectorySeparatorChar
            $targetPath = Join-Path (Join-Path $RestoreDir $rootFolder) $relPart
            $targetParent = Split-Path $targetPath -Parent
            if (-not (Test-Path $targetParent)) {
                New-Item -ItemType Directory -Path $targetParent -Force | Out-Null
            }
            Copy-Item -LiteralPath $_.FullName -Destination $targetPath -Force
            break
        }
    }
}

Write-Host "Restored folder structure to: $RestoreDir"

if (-not $RestoreOnly) {
    $skillTargets = @(
        (Join-Path $env:USERPROFILE ".gemini\config\skills"),
        (Join-Path $env:USERPROFILE ".claude\skills"),
        (Join-Path $env:USERPROFILE ".agents\skills")
    )

    foreach ($st in $skillTargets) {
        New-Item -ItemType Directory -Path $st -Force | Out-Null
        $megaSrc = Join-Path $RestoreDir "mega-ui-ux-skill\skills\mega-ui-ux"
        if (Test-Path $megaSrc) {
            $dest = Join-Path $st "mega-ui-ux"
            if (Test-Path $dest) { Remove-Item $dest -Recurse -Force }
            Copy-Item -Path $megaSrc -Destination $dest -Recurse -Force
        }
        $ponySkillsDir = Join-Path $RestoreDir "ponytail\skills"
        if (Test-Path $ponySkillsDir) {
            Get-ChildItem -Path $ponySkillsDir -Directory | ForEach-Object {
                $dest = Join-Path $st $_.Name
                if (Test-Path $dest) { Remove-Item $dest -Recurse -Force }
                Copy-Item -Path $_.FullName -Destination $dest -Recurse -Force
            }
        }
        $extraSkillsDir = Join-Path $RestoreDir "standalone-skills"
        if (Test-Path $extraSkillsDir) {
            Get-ChildItem -Path $extraSkillsDir -Directory | ForEach-Object {
                $dest = Join-Path $st $_.Name
                if (Test-Path $dest) { Remove-Item $dest -Recurse -Force }
                Copy-Item -Path $_.FullName -Destination $dest -Recurse -Force
            }
        }
        Write-Host "Installed skills to: $st"
    }

    # Install MCP servers config and schemas for Antigravity
    $agyConfigDir = Join-Path $env:USERPROFILE ".gemini\config"
    New-Item -ItemType Directory -Path $agyConfigDir -Force | Out-Null
    Copy-Item -LiteralPath (Join-Path $PSScriptRoot "mcp_config.json") -Destination (Join-Path $agyConfigDir "mcp_config.json") -Force
    Write-Host "Installed MCP config to: $(Join-Path $agyConfigDir 'mcp_config.json')"

    $agyMcpDir = Join-Path $env:USERPROFILE ".gemini\antigravity\mcp"
    $restoredMcpDir = Join-Path $RestoreDir "mcp-servers"
    if (Test-Path $restoredMcpDir) {
        New-Item -ItemType Directory -Path $agyMcpDir -Force | Out-Null
        Get-ChildItem -Path $restoredMcpDir -Directory | ForEach-Object {
            $dest = Join-Path $agyMcpDir $_.Name
            if (Test-Path $dest) { Remove-Item $dest -Recurse -Force }
            Copy-Item -Path $_.FullName -Destination $dest -Recurse -Force
        }
        Write-Host "Installed MCP tool schemas to: $agyMcpDir"
    }
}
