import Icon, { IconProps } from '@chakra-ui/icon'
import React from 'react'

export const Logo = (props) => (
  <Icon
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="500" height="500" rx="75" fill={'#0042DA'} />
    <rect
      x="438.709"
      y="170.968"
      width="64.5161"
      height="290.323"
      rx="32.2581"
      transform="rotate(90 438.709 170.968)"
      fill="#FF8E20"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M93.5481 235.484C111.364 235.484 125.806 221.041 125.806 203.226C125.806 185.41 111.364 170.968 93.5481 170.968C75.7325 170.968 61.29 185.41 61.29 203.226C61.29 221.041 75.7325 235.484 93.5481 235.484Z"
      fill="#FF8E20"
    />
    <rect
      x="61.29"
      y="332.259"
      width="64.5161"
      height="290.323"
      rx="32.2581"
      transform="rotate(-90 61.29 332.259)"
      fill={'white'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M406.451 267.742C388.635 267.742 374.193 282.184 374.193 300C374.193 317.815 388.635 332.258 406.451 332.258C424.267 332.258 438.709 317.815 438.709 300C438.709 282.184 424.267 267.742 406.451 267.742Z"
      fill={'white'}
    />
  </Icon>
)
