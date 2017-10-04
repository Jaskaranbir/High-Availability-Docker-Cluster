#!/bin/sh

echo "================ Installing Node packages as required ================"

ls
echo "+++"
ls app
echo "+++"
ls app/server
echo "+++"

cd app

npm install --verbose

echo "================ Node packages installed. Running \"start\" command ================"

npm run start