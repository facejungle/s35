#!/bin/bash
export $(grep -v '^#' .env | xargs)

# colors
green='\033[0;32m'
blue='\033[0;34m'
red='\033[0;31m' 
clear='\033[0m'


# yarn strapi content-types:list
# yarn strapi ts:generate-types --verbose


function attach_to_container ()
{
  while
  echo ""
  echo "Attach to container:"
  echo ""
  echo -e "${green}[1]${clear} Frontend"
  echo -e "${green}[2]${clear} Backend"
  echo -e "${green}[3]${clear} Nginx"
  echo -e "${green}[4]${clear} Postges"
  echo ""
  echo -e "${green}[Any key]${clear} No attach"

  read -n 1 -s CONTAINER
  do
    if [[ $CONTAINER -eq 1 ]];then # START
      docker attach $PROJECT_SLUG"_frontend"
      break
    fi
    if [[ $CONTAINER -eq 2 ]];then # START
      docker attach $PROJECT_SLUG"_backend"
      break
    fi
    if [[ $CONTAINER -eq 3 ]];then # START
      docker attach $PROJECT_SLUG"_nginx"
      break
    fi
    if [[ $CONTAINER -eq 4 ]];then # START
      docker attach $PROJECT_SLUG"_postgres"
      break
    fi
    if [[ $CONTAINER -eq 5 ]];then # START
      break
    fi
  done
}
function first_start ()
{
  echo -e "${green}[Ctrl + C]${clear} exit"
}

while 
echo ""
echo -e "${green}[${PROJECT_SLUG}]${clear} Choise action:"
echo ""
echo -e "${green}[Docker compose]${clear}"
echo -e "${green}[1]${clear} Start / up"
echo -e "${green}[2]${clear} Stop"
echo -e "${green}[3]${clear} Down (remove)"
echo -e "${green}[4]${clear} Restart"
echo -e "${green}[5]${clear} Attach to container"
echo -e "${green}[6]${clear} Build and up docker container"
echo ""
echo -e "${blue}[yarn / npm]${clear}"
echo -e "${blue}[8]${clear} Build backend"
echo -e "${blue}[9]${clear} Build frontend"
echo ""
echo -e "${blue}[0]${clear} First run..."
echo ""
echo -e "${blue}[Ctrl+C]${clear} exit"

read -n 1 -s ACTION

do
  if [[ $ACTION -eq 1 ]];then # START
    docker compose up -d
    attach_to_container
    break
  fi

  if [[ $ACTION -eq 2 ]];then # STOP
    docker compose stop
    break
  fi

  if [[ $ACTION -eq 3 ]];then # DOWN
    docker compose down
    break
  fi

  if [[ $ACTION -eq 4 ]];then # RESTART
    docker compose stop
    docker compose up -d
    attach_to_container
    break
  fi

  if [[ $ACTION -eq 5 ]];then # ATTACH
    attach_to_container
    break
  fi

  if [[ $ACTION -eq 6 ]];then # BUILD
    docker compose build
    docker compose up -d
    attach_to_container
    break
  fi

  if [[ $ACTION -eq 8 ]];then
    cd ./backend
    yarn build
    cd ..
    continiue
  fi

  if [[ $ACTION -eq 9 ]];then
    cd ./frontend
    yarn build
    cd ..
    continiue
  fi
  if [[ $ACTION -eq 0 ]];then
    first_start
    break
  fi
done

printf "\n ${green}[All Done]${clear}\n"
