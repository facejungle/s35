#!/bin/bash
export $(grep -v '^#' .env | xargs)

# colors
green='\033[0;32m'
blue='\033[0;34m'
red='\033[0;31m'
cyan='\033[0;36m'
clear='\033[0m'


# yarn strapi content-types:list
# yarn strapi ts:generate-types --verbose


function attach_to_container ()
{
  while
  printf "\n\n\n${red}[${PROJECT_SLUG}]${clear} Attach to container:\n\n"
  printf "${cyan}[1]${clear} Frontend:\n"
  printf "${cyan}[2]${clear} Backend:\n"
  printf "${cyan}[3]${clear} Nginx:\n"
  printf "${cyan}[3]${clear} Postges:\n"
  printf "\n${red}[any key]${clear} Back:\n"
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


function docker_start ()
{
  while 
    printf "\n\n\n${red}[${PROJECT_SLUG}]${clear} Select container:\n\n"
    printf "${cyan}[1]${clear} All containers:\n"
    printf "${cyan}[2]${clear} Backend + database:\n"
    printf "${cyan}[3]${clear} Frontend:\n"
    printf "\n${red}[any key]${clear} Back\n"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" up
        break
      fi
      if [[ $START_CONTAINER -eq 2 ]];then
        docker compose -f "docker-compose.yml" up backend -d
        docker container attach "${PROJECT_SLUG}_backend"
        break
      fi
      if [[ $START_CONTAINER -eq 3 ]];then
        docker compose -f "docker-compose.yml" up frontend -d
        docker container attach $PROJECT_SLUG"_frontend"
        break
      fi
      if [[ $START_CONTAINER ]];then
        break
      fi
  done
}


function docker_stop ()
{
  while 
    printf "\n\n\n${red}[${PROJECT_SLUG}]${clear} Select container:\n\n"
    printf "${cyan}[1]${clear} All containers:\n"
    printf "${cyan}[2]${clear} Backend:\n"
    printf "${cyan}[3]${clear} Frontend:\n"
    printf "\n${red}[any key]${clear} Back\n"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" stop
        break
      fi
      if [[ $START_CONTAINER -eq 2 ]];then
        docker compose -f "docker-compose.yml" stop backend
        docker container attach "${PROJECT_SLUG}_backend"
        break
      fi
      if [[ $START_CONTAINER -eq 3 ]];then
        docker compose -f "docker-compose.yml" stop frontend
        docker container attach $PROJECT_SLUG"_frontend"
        break
      fi
      if [[ $START_CONTAINER ]];then
        break
      fi
  done
}


function docker_down ()
{
  while 
    printf "\n\n\n${red}[${PROJECT_SLUG}]${clear} Select container:\n\n"
    printf "${cyan}[1]${clear} All containers:\n"
    printf "${cyan}[2]${clear} Backend:\n"
    printf "${cyan}[3]${clear} Frontend:\n"
    printf "\n${red}[any key]${clear} Back\n"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" down
        break
      fi
      if [[ $START_CONTAINER -eq 2 ]];then
        docker compose -f "docker-compose.yml" down backend -d
        docker container attach "${PROJECT_SLUG}_backend"
        break
      fi
      if [[ $START_CONTAINER -eq 3 ]];then
        docker compose -f "docker-compose.yml" down frontend -d
        docker container attach $PROJECT_SLUG"_frontend"
        break
      fi
      if [[ $START_CONTAINER ]];then
        break
      fi
  done
}


function docker_build ()
{
  while 
    printf "\n\n\n${red}[${PROJECT_SLUG}]${clear} Select container:\n\n"
    printf "${cyan}[1]${clear} All containers:\n"
    printf "${cyan}[2]${clear} Backend:\n"
    printf "${cyan}[3]${clear} Frontend:\n"
    printf "\n${red}[any key]${clear} Back\n"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" build backend
        docker compose -f "docker-compose.yml" up backend -d
        docker compose -f "docker-compose.yml" build frontend
        docker compose -f "docker-compose.yml" up frontend -d
        break
      fi
      if [[ $START_CONTAINER -eq 2 ]];then
        docker compose -f "docker-compose.yml" build backend
        docker compose -f "docker-compose.yml" up backend -d
        break
      fi
      if [[ $START_CONTAINER -eq 3 ]];then
        docker compose -f "docker-compose.yml" build frontend
        docker compose -f "docker-compose.yml" up frontend -d
        break
      fi
      if [[ $START_CONTAINER ]];then
        break
      fi
  done
}


function docker_build_no_cache ()
{
  while 
    printf "\n\n\n${red}[${PROJECT_SLUG}]${clear} Select container:\n\n"
    printf "${cyan}[1]${clear} All containers:\n"
    printf "${cyan}[2]${clear} Backend:\n"
    printf "${cyan}[3]${clear} Frontend:\n"
    printf "\n${red}[any key]${clear} Back\n"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" build --no-cache backend
        docker compose -f "docker-compose.yml" up backend -d
        docker compose -f "docker-compose.yml" build --no-cache frontend
        docker compose -f "docker-compose.yml" up frontend -d
        break
      fi
      if [[ $START_CONTAINER -eq 2 ]];then
        docker compose -f "docker-compose.yml" build --no-cache backend
        docker compose -f "docker-compose.yml" up backend -d
        break
      fi
      if [[ $START_CONTAINER -eq 3 ]];then
        docker compose -f "docker-compose.yml" build --no-cache frontend
        docker compose -f "docker-compose.yml" up frontend -d
        break
      fi
      if [[ $START_CONTAINER ]];then
        break
      fi
  done
}


while 
printf "\n\n\n${red}[${PROJECT_SLUG}]${clear} Choise action:\n"
printf "\n${green}[Docker compose]${clear}                 ${blue}[yarn / npm]${clear}\n"
printf "${green}[1]${clear} Start / Stop                 ${blue}[4]${clear} Strapi\n"
printf "${green}[2]${clear} Attach                       ${blue}[5]${clear} Next.js\n"
printf "${green}[3]${clear} Build\n"
printf "\n${cyan}[Q]${clear} First run\n"
printf "\n${red}[any key]${clear} exit\n"
read -n 1 -s ACTION
do
  if [[ $ACTION -eq 1 ]];then # START
    while
    printf "\n\n\n${red}[${PROJECT_SLUG}]${clear} Choise action:\n\n"
    printf "${cyan}[1]${clear} Start   > [docker compose up]\n"
    printf "${cyan}[2]${clear} Stop    > [docker compose stop]\n"
    printf "${cyan}[3]${clear} Down    > [docker compose down]\n"
    printf "${cyan}[4]${clear} Restart\n"
    printf "\n${red}[any key]${clear} Back\n"
    read -n 1 -s ACTION_START
    do
    if [[ $ACTION_START -eq 1 ]];then # START
      docker_start
      continue
    fi
    if [[ $ACTION_START -eq 2 ]];then # STOP
      docker_stop
      continue
    fi
    if [[ $ACTION_START -eq 3 ]];then # DOWN
      docker_down
      continue
    fi
    if [[ $ACTION_START -eq 4 ]];then # RESTART
      docker_start
      docker_stop
      continue
    fi
    if [[ $ACTION_START ]];then
      break
    fi
    done
    continue
  fi

  if [[ $ACTION -eq 2 ]];then # ATTACH
    attach_to_container
    continue
  fi

  if [[ $ACTION -eq 3 ]];then # BUILD
    while
    printf "\n\n\n${red}[${PROJECT_SLUG}]${clear} Choise action:\n\n"
    printf "${cyan}[1]${clear} Build and up [docker compose build]\n"
    printf "${cyan}[2]${clear} Build and up [docker compose build --no-cache]\n"
    printf "\n${red}[any key]${clear} Back\n"
    read -n 1 -s ACTION_BUILD
    do
      if [[ $ACTION_BUILD -eq 1 ]];then
        docker_build
      fi
      if [[ $ACTION_BUILD -eq 2 ]];then
        docker_build_no_cache
      fi
      if [[ $ACTION_BUILD ]];then
        break
      fi
    done
    continue
  fi

  if [[ $ACTION -eq 4 ]];then
    cd ./backend
    yarn build
    cd ..
    continue
  fi

  if [[ $ACTION -eq 5 ]];then
    cd ./frontend
    yarn build
    cd ..
    continue
  fi

  if [[ $ACTION = q ]];then
    printf "\n${green}[in developing]${clear}\n"
    continue
  fi

  if [[ $ACTION ]];then
    break
  fi
done

printf "\n${green}[All Done]${clear}\n"
