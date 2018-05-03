@echo "FROM BAT FILE WITAM"
cd %1
cd client
npm start
timeout /t 10 /nobreak >NUL