import React from 'react'

const FloatingContact:React.FC = () => {
  return (
   <div className="fixed bottom-5 right-4 flex flex-col gap-3 z-50">
  <a href="https://wa.me/918009657788" target="_blank" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.4 0 0 5.4 0 12a11.9 11.9 0 0 0 1.7 6.17L0 24l6.33-1.67A11.94 11.94 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.19-1.24-6.19-3.48-8.52zm-8.52 18c-1.77 0-3.46-.47-4.97-1.33l-.35-.2-3.75.99 1-3.7-.23-.37A9.94 9.94 0 0 1 2 12c0-5.53 4.47-10 10-10s10 4.47 10 10-4.47 10-10 10zm5.38-7.56c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.45a8.79 8.79 0 0 1-1.6-2.02c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
    </svg>
  </a>

  <a href="tel:8009657788" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.05-.24 11.05 11.05 0 0 0 3.47.55 1 1 0 0 1 1 1v3.48a1 1 0 0 1-1 1A17.937 17.937 0 0 1 2 6a1 1 0 0 1 1-1h3.48a1 1 0 0 1 1 1c0 1.2.19 2.39.55 3.47a1.003 1.003 0 0 1-.24 1.05l-2.17 2.17z"/>
    </svg>
  </a>

   <a href="https://www.youtube.com/@Shreejituition" target="_blank" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.8-1.6-.8-2-1C17.4 2.5 12 2.5 12 2.5h-.1s-5.4 0-8.6.4c-.5 0-1.3.2-2.1 1C.7 4.6.5 6.2.5 6.2S0 8.2 0 10.2v1.6c0 2 .5 4 0 4s.2 1.6.8 2.3c.8.8 1.8.8 2.3.9 1.7.2 7.2.4 7.2.4s5.4 0 8.6-.4c.5 0 1.3-.2 2.1-1 .6-.6.8-2.3.8-2.3s.5-2 .5-4v-1.6c0-2-.5-4-.5-4zM9.8 14.9V8.9l6.3 3.1-6.3 2.9z"/>
    </svg>
  </a>
</div>

  )
}

export default FloatingContact