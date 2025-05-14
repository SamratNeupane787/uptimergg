import React from 'react'
import { HashIcon } from 'lucide-react';
function Footer() {
  return (
    <div className="flex flex-col items-center justify-between mx-16 text-md py-4 md:flex-row gap-3">
      <div className="flex items-center gap-2  font-light">
        <HashIcon />
        <span>Uptimer.GG</span>
      </div>
      <div className="flex items-center gap-2 text-md font-light">
       <h1>Developed by <span className='text-red-600' href="https://samratneupane.com.np">Samrat Neupane</span></h1>
      </div>
    </div>
  );
}

export default Footer
