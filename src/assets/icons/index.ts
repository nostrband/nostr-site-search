import { html } from 'lit'

export const Icons = {
  clear: html` <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="16"
    width="16"
    class="text-neutral-900 hover:text-neutral-500 h-[0.75rem] w-[0.75rem]"
  >
    <path
      stroke-linecap="round"
      stroke-width="0.4"
      fill="currentColor"
      stroke="#000000"
      stroke-linejoin="round"
      d="M.44,21.44a1.49,1.49,0,0,0,0,2.12,1.5,1.5,0,0,0,2.12,0l9.26-9.26a.25.25,0,0,1,.36,0l9.26,9.26a1.5,1.5,0,0,0,2.12,0,1.49,1.49,0,0,0,0-2.12L14.3,12.18a.25.25,0,0,1,0-.36l9.26-9.26A1.5,1.5,0,0,0,21.44.44L12.18,9.7a.25.25,0,0,1-.36,0L2.56.44A1.5,1.5,0,0,0,.44,2.56L9.7,11.82a.25.25,0,0,1,0,.36Z"
    ></path>
  </svg>`,
  search: html` <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="16"
    width="16"
    class="text-neutral-900"
    alt="Search"
  >
    <path
      d="M23.38,21.62l-6.53-6.53a9.15,9.15,0,0,0,1.9-5.59,9.27,9.27,0,1,0-3.66,7.36l6.53,6.53a1.26,1.26,0,0,0,1.76,0A1.25,1.25,0,0,0,23.38,21.62ZM2.75,9.5A6.75,6.75,0,1,1,9.5,16.25,6.76,6.76,0,0,1,2.75,9.5Z"
      fill="currentColor"
    ></path>
  </svg>`,
}
