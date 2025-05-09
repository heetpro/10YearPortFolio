import React from 'react'

const Bar = () => {
  return (
    <div className=' z-[999] fixed w-fit text-white transition-all duration-300 cursor-pointer hover:text-[#4801FF] bg-main h-fit'
    style={{
      bottom: 'clamp(0.5rem, 7vw, 100rem)',
      left: 'clamp(1rem, 4vw, 100rem)',
      fontSize: 'clamp(1rem, 2.1vw, 100rem)',
    }}
    
    >
      <div className='druk-medium scale-y-110  leading-[0.95]' style={{  
        WebkitTextStroke: 'clamp(0.005rem, 0.05vw, 1rem) #ffffff',
        // transform: 'scaleX(1.1)'
      }}>
    VIRTUAL


      </div>
      <div className='druk-medium scale-y-110 leading-[0.95]' style={{ 
        WebkitTextStroke: 'clamp(0.005rem, 0.05vw, 1rem) #ffffff',
        // transform: 'scaleX(1.1)'
       }}>  
    HEET

      </div>
      <div className='druk-medium scale-y-110   leading-[0.95]' style={{  
        WebkitTextStroke: 'clamp(0.005rem, 0.05vw, 1rem) #ffffff',
        // transform: 'scaleX(1.1)'
       }}

      >
        CO{"."}
      </div>
    </div>
  )
}

export default Bar
