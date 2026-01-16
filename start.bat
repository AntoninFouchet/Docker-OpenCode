@echo off

:: Tentative d'exécution via WSL
wsl ./launch.sh
if %errorlevel% equ 0 goto end

:: Si WSL échoue, tentative via bash (Git Bash)
bash launch.sh
if %errorlevel% equ 0 goto end

echo Une erreur est survenue lors du lancement de launch.sh.
echo Assurez-vous que WSL ou Git Bash est installe et dans le PATH.

:end
pause
