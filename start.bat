@ECHO OFF
ECHO ==========================
ECHO Lancement du Server Lavalink
ECHO ==========================
start cmd /k java -jar ./Lavalink.jar
ECHO ==========================
@ECHO Attender 5 seconds que lavalink ce lance
ECHO ==========================
timeout /T 5 /nobreak
ECHO ==========================
@ECHO Lancement du Bot
ECHO ==========================
start cmd /k node index.js
exit /s