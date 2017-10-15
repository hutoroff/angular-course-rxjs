#!/bin/bash

cd /var/www/angular-course-homework

if [ ! -d /var/www/angular-course-homework/node_modules ]; then
  npm cache clean -f  &&  npm install
fi;

npm start
