import { React, useEffect } from 'react'

import Header from './sections/Header';

const Resume = () => {
    useEffect(() => {
        document.body.classList.add('resume-page');
        return () => document.body.classList.remove('resume-page'); // Clean up on unmount
    }, []);

  return (
    <>
        <Header />
        <main className="main">
                
                
                
            </main>
    </>
  )
}

export default Resume