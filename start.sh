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

. ./_helper/docker/deps.sh
. ./_helper/docker/actions.sh

. ./_helper/node/deps.sh
. ./_helper/node/actions.sh



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
    printf "\n\n\n${red}[${PROJECT_SLUG}]${green}[Start / Stop]${clear} Choise action:\n\n"
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
      docker compose -f "docker-compose.yml" down
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
    printf "\n\n\n${red}[${PROJECT_SLUG}]${green}[Build]${clear} Choise action:\n\n"
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

  if [[ $ACTION -eq 4 ]];then # Node > strapi
    cd ./backend
    yarn build
    cd ..
    continue
  fi

  if [[ $ACTION -eq 5 ]];then # Node > next.js
    cd ./frontend
    yarn build
    cd ..
    continue
  fi

  if [[ $ACTION = q ]];then # First run
    while
    printf "\n\n\n${red}[${PROJECT_SLUG}]${green}[First run]${clear} Choise action:\n\n"
    printf "${cyan}[1]${clear} Install Docker\n"
    printf "${cyan}[2]${clear} Insall Node v18\n"
    printf "\n${red}[any key]${clear} Back\n"
    read -n 1 -s ACTION_FIRST_RUN
    do
      if [[ $ACTION_FIRST_RUN -eq 1 ]];then
        install_docker
      fi
      if [[ $ACTION_FIRST_RUN -eq 2 ]];then
        install_node
      fi
      if [[ $ACTION_FIRST_RUN ]];then
        break
      fi
    done
    continue
  fi

  if [[ $ACTION ]];then
    break
  fi
done

printf "\n${green}[All Done]${clear}\n"
