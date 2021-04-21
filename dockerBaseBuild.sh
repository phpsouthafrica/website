#!/usr/bin/env bash
export IMAGE_NAME="${IMAGE_NAME:-haakco/phpsa-website-nuxt}"
export DOCKER_FILE="${DOCKER_FILE:-Dockerfile}"
export DO_DOCKER_PUSH="${DO_DOCKER_PUSH:-FALSE}"

docker context create phpsa
docker buildx create phpsa --name phpsa --driver docker-container --use
docker buildx use phpsa
#docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
#docker run --privileged --rm tonistiigi/binfmt --install all
docker buildx inspect --bootstrap

CMD='docker buildx build --load '"${DOCKER_BUILD_TYPE}"' --platform  linux/arm/v7,linux/arm64,linux/amd64 --tag '"${IMAGE_NAME}"' .'
echo "Build command for load: "
echo "${CMD}"
echo ""
${CMD}

if [[ "${DO_DOCKER_PUSH}" = "TRUE" ]]; then
  CMD='docker buildx build --push '"${DOCKER_BUILD_TYPE}"' --platform  linux/arm/v7,linux/arm64,linux/amd64 --tag '"${IMAGE_NAME}"' .'
  echo "Build command for push: "
  echo "${CMD}"
  echo ""
  ${CMD}
fi
