#!/bin/bash
function attach_to_container ()
{
  while
  printf "\n\n\n${red}[${PROJECT_SLUG}]${green}[Attach]${clear} Attach to container:\n\n"
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
    printf "\n\n\n${red}[${PROJECT_SLUG}]${green}[Start]${clear} Select container:\n\n"
    printf "${cyan}[1]${clear} All containers:\n"
    printf "${cyan}[2]${clear} Backend + database:\n"
    printf "${cyan}[3]${clear} Frontend:\n"
    printf "\n${red}[any key]${clear} Back\n"
    read -n 1 -s START_CONTAINER
  do
      if [[ $START_CONTAINER -eq 1 ]];then
        docker compose -f "docker-compose.yml" build backend
        docker compose -f "docker-compose.yml" up backend -d
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
    printf "\n\n\n${red}[${PROJECT_SLUG}]${green}[Stop]${clear} Select container:\n\n"
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


function docker_build ()
{
  while 
    printf "\n\n\n${red}[${PROJECT_SLUG}]${green}[Build]${clear} Select container:\n\n"
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
        docker compose -f "docker-compose.yml" up backend -d
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
    printf "\n\n\n${red}[${PROJECT_SLUG}]${green}[Build -> with --no-cache]${clear} Select container:\n\n"
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
        docker compose -f "docker-compose.yml" up backend -d
        docker compose -f "docker-compose.yml" build --no-cache frontend
        docker compose -f "docker-compose.yml" up frontend -d
        break
      fi
      if [[ $START_CONTAINER ]];then
        break
      fi
  done
}