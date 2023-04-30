#!/bin/bash
export $(grep -v '^#' .env | xargs)

# colors
green='\033[0;32m'
blue='\033[0;34m'
red='\033[0;31m' 
clear='\033[0m'

if [[ $1 ]]; then
     action=$1
fi

if [[ $2 ]]; then
     container=$2
fi

case $action in
# ACTION START
   start)
   # START
      docker compose up -d
      status=$?
      if [[ status -eq 0 ]]; then
         echo ""
         echo -e "Frontend start... ${green}DONE${clear}"
         echo ""
         echo -e "Backend address: ${green}$STRAPI_URL${clear}"
         echo -e "Frontend address: ${green}$APP_URL${clear}"
         echo ""
         if [[ $container ]]; then
            echo ""
            echo -e "Attach container > ${blue}$container${clear}"
            echo ""
            docker attach $PROJECT_SLUG"_"$container
         fi
      fi
      if [[ status -ne 0 ]]; then
         echo ""
         echo -e "Frontend start ${red}FAIL${clear}"
         echo ""
      fi
   ;;
   # START
# ACTION START

# ACTION BUILD
   start_build)
   # BUILD
      docker compose build
      docker compose up -d
      status=$?
      if [[ status -eq 0 ]]; then
         echo ""
         echo -e "Frontend build and up... ${green}DONE${clear}"
         echo ""
         echo -e "Backend address: ${green}$STRAPI_URL${clear}"
         echo -e "Frontend address: ${green}$APP_URL${clear}"
         echo ""
         if [[ $container ]]; then
         echo -e "Attach container > ${blue}$container${clear}"
         echo ""
         docker attach $PROJECT_SLUG"_"$container
         fi
      fi
      if [[ status -ne 0 ]]; then
         echo ""
         echo -e "Frontend build ${red}FAIL${clear}"
         echo ""
      fi
      ;;
   # BUILD
# ACTION BUILD

# ACTION RESTART
   restart)
      docker compose stop nginx_frontend
      docker compose stop frontend
      docker compose stop backend
      docker compose stop postgres
      echo ""
      echo -e "All conteiners... ${red}STOP${clear}"
      echo ""
      sleep 2

      docker compose up backend -d
      echo ""
      echo -e "Backend start... ${green}DONE${clear}"
      echo ""
      sleep 1

      docker compose up nginx_frontend -d
      echo ""
      echo -e "Frontend start... ${green}DONE${clear}"
      echo ""
      echo -e "Backend address: ${green}$STRAPI_URL${clear}"
      echo -e "Frontend address: ${green}$APP_URL${clear}"
      echo ""
      sleep 1

      if [[ $container ]]; then
      echo ""
      echo -e "Attach container > ${blue}$container${clear}"
      echo ""
      docker attach $PROJECT_SLUG"_"$container
      fi
      ;;
# ACTION RESTART

# ACTION STOP
   stop)
      docker compose stop nginx_frontend
      docker compose stop frontend
      docker compose stop backend
      docker compose stop postgres
      ;;
# ACTION STOP

# ACTION DOWN
   down)
      docker compose down
      ;;
# ACTION DOWN

# ACTION DEFAULT
   *)
      echo "Help"
      echo ""
      echo "_app.sh [action] [container?]"
      echo -e "example: _app.sh ${green}start_build${clear} frontend"
      echo ""
      echo -e "${blue}Containers for attach:${clear} postgers, backend, frontend, nginx"
      echo ""
      echo -e "_app.sh ${green}start${clear} container"
      echo -e "_app.sh ${green}start_build${clear} container"
      echo -e "_app.sh ${green}restart${clear} container"
      echo -e "_app.sh ${green}stop${clear} container"
      echo -e "_app.sh ${green}down${clear} container"
      ;;
# ACTION DEFAULT
esac