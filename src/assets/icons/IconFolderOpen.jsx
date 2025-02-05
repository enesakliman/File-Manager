import * as React from "react"

function FolderOpen(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M4 26V8a2 2 0 0 1 2-2h6c3 0 3 3 5 3h7a2 2 0 0 1 2 2v2M4 26l3.783-12.294A1 1 0 0 1 8.739 13H26M4 26h19.523a2 2 0 0 0 1.911-1.412l3.168-10.294A1 1 0 0 0 27.646 13H26"
        ></path>
      </svg>
    )
  }
  
  export default FolderOpen