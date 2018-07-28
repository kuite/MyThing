@echo "FROM BAT FILE WITAM"
cd %1
cd client_oktawian
cd projekt
npm start
timeout /t 10 /nobreak >NUL