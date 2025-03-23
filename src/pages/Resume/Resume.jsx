import { React, useEffect } from 'react'

const Resume = () => {
    useEffect(() => {
        document.body.classList.add('resume-page');
        return () => document.body.classList.remove('resume-page'); // Clean up on unmount
    }, []);

  return (
    <main class="main">
            
            
            
        </main>
  )
}

export default Resume