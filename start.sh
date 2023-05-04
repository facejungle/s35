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
    if [[ $CONTAINER ]];then # START
      break
    fi
  done
}
function first_start ()
{
  echo -e "${green}[Ctrl + C]${clear} exit"
}
function docker_start ()
{
  while 
    echo ""
    echo -e "${green}[${PROJECT_SLUG}]${clear} Select container:"
    echo ""
    echo -e "${green}[1]${clear} All containers"
    echo -e "${green}[2]${clear} Backend + database"
    echo -e "${green}[3]${clear} Frontend"
    echo ""
    echo -e "${green}[0]${clear} Back"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" up
        break
      fi
      if [[ $START_CONTAINER -eq 2 ]];then
        docker compose -f "docker-compose.yml" up backend -d
        docker compose -f "docker-compose.yml" up nginx_back -d
        docker container attach "${PROJECT_SLUG}_backend"
        break
      fi
      if [[ $START_CONTAINER -eq 3 ]];then
        docker compose -f "docker-compose.yml" up frontend -d
        docker compose -f "docker-compose.yml" up nginx_front -d
        docker container attach $PROJECT_SLUG"_frontend"
        break
      fi
      if [[ $START_CONTAINER -eq 0 ]];then
        break
      fi
  done
}
function docker_stop ()
{
  while 
    echo ""
    echo -e "${green}[${PROJECT_SLUG}]${clear} Select container:"
    echo ""
    echo -e "${green}[1]${clear} All containers"
    echo -e "${green}[2]${clear} Backend"
    echo -e "${green}[3]${clear} Frontend"
    echo ""
    echo -e "${green}[0]${clear} Back"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" stop
        break
      fi
      if [[ $START_CONTAINER -eq 2 ]];then
        docker compose -f "docker-compose.yml" stop backend -d
        docker compose -f "docker-compose.yml" stop nginx_back -d
        docker container attach "${PROJECT_SLUG}_backend"
        break
      fi
      if [[ $START_CONTAINER -eq 3 ]];then
        docker compose -f "docker-compose.yml" stop frontend -d
        docker compose -f "docker-compose.yml" stop nginx_front -d
        docker container attach $PROJECT_SLUG"_frontend"
        break
      fi
      if [[ $START_CONTAINER -eq 0 ]];then
        break
      fi
  done
}
function docker_down ()
{
  while 
    echo ""
    echo -e "${green}[${PROJECT_SLUG}]${clear} Select container:"
    echo ""
    echo -e "${green}[1]${clear} All containers"
    echo -e "${green}[2]${clear} Backend"
    echo -e "${green}[3]${clear} Frontend"
    echo ""
    echo -e "${green}[0]${clear} Back"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" down
        break
      fi
      if [[ $START_CONTAINER -eq 2 ]];then
        docker compose -f "docker-compose.yml" down backend -d
        docker compose -f "docker-compose.yml" down nginx_back -d
        docker container attach "${PROJECT_SLUG}_backend"
        break
      fi
      if [[ $START_CONTAINER -eq 3 ]];then
        docker compose -f "docker-compose.yml" down frontend -d
        docker compose -f "docker-compose.yml" down nginx_front -d
        docker container attach $PROJECT_SLUG"_frontend"
        break
      fi
      if [[ $START_CONTAINER -eq 0 ]];then
        break
      fi
  done
}
function docker_build ()
{
  while 
    echo ""
    echo -e "${green}[${PROJECT_SLUG}]${clear} Select container:"
    echo ""
    echo -e "${green}[1]${clear} All containers"
    echo -e "${green}[2]${clear} Backend"
    echo -e "${green}[3]${clear} Frontend"
    echo ""
    echo -e "${green}[0]${clear} Back"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" build backend -d
        docker compose -f "docker-compose.yml" up backend -d
        docker compose -f "docker-compose.yml" up nginx_back -d
        docker compose -f "docker-compose.yml" build frontend
        docker compose -f "docker-compose.yml" up frontend -d
        docker compose -f "docker-compose.yml" up nginx_front -d
        break
      fi
      if [[ $START_CONTAINER -eq 2 ]];then
        docker compose -f "docker-compose.yml" build backend -d
        docker compose -f "docker-compose.yml" up backend -d
        docker compose -f "docker-compose.yml" up nginx_back -d
        break
      fi
      if [[ $START_CONTAINER -eq 3 ]];then
        docker compose -f "docker-compose.yml" build frontend
        docker compose -f "docker-compose.yml" up frontend -d
        docker compose -f "docker-compose.yml" up nginx_front -d
        break
      fi
      if [[ $START_CONTAINER -eq 0 ]];then
        break
      fi
  done
}
function docker_build_no_cache ()
{
  while 
    echo ""
    echo -e "${green}[${PROJECT_SLUG}]${clear} Select container:"
    echo ""
    echo -e "${green}[1]${clear} All containers"
    echo -e "${green}[2]${clear} Backend"
    echo -e "${green}[3]${clear} Frontend"
    echo ""
    echo -e "${green}[0]${clear} Back"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" build --no-cache backend -d
        docker compose -f "docker-compose.yml" up backend -d
        docker compose -f "docker-compose.yml" up nginx_back -d
        docker compose -f "docker-compose.yml" build --no-cache frontend
        docker compose -f "docker-compose.yml" up frontend -d
        docker compose -f "docker-compose.yml" up nginx_front -d
        break
      fi
      if [[ $START_CONTAINER -eq 2 ]];then
        docker compose -f "docker-compose.yml" build --no-cache backend -d
        docker compose -f "docker-compose.yml" up backend -d
        docker compose -f "docker-compose.yml" up nginx_back -d
        break
      fi
      if [[ $START_CONTAINER -eq 3 ]];then
        docker compose -f "docker-compose.yml" build --no-cache frontend
        docker compose -f "docker-compose.yml" up frontend -d
        docker compose -f "docker-compose.yml" up nginx_front -d
        break
      fi
      if [[ $START_CONTAINER -eq 0 ]];then
        break
      fi
  done
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
echo -e "${green}[6]${clear} Build and up"
echo -e "${green}[7]${clear} Build [--no-cache] and up"
echo ""
echo -e "${blue}[yarn / npm]${clear}"
echo -e "${blue}[8]${clear} Strapi  backend  ..."
echo -e "${blue}[9]${clear} Next.js frontend ..."
echo ""
echo -e "${blue}[0]${clear} First run..."
echo ""
echo -e "${blue}[Ctrl+C]${clear} exit"
read -n 1 -s ACTION
do
  if [[ $ACTION -eq 1 ]];then # START
    docker_start
    continiue
  fi

  if [[ $ACTION -eq 2 ]];then # STOP
    docker_stop
    continiue
  fi

  if [[ $ACTION -eq 3 ]];then # DOWN
    docker_down
    continiue
  fi

  if [[ $ACTION -eq 4 ]];then # RESTART
    docker_stop
    docker_start
    continiue
  fi

  if [[ $ACTION -eq 5 ]];then # ATTACH
    attach_to_container
    break
  fi

  if [[ $ACTION -eq 6 ]];then # BUILD
    docker_build
    continiue
  fi

  if [[ $ACTION -eq 7 ]];then # BUILD
    docker_build_no_cache
    continiue
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
