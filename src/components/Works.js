import React from 'react'
import workbg from '../assets/images/workbg.jpg'

const Works = () => {
  return (
    <div className='flex flex-col items-center'>
         <div className='w-full max-w-screen-xl px-6'>
            <div className='flex justify-between py-2 mt-16'>
                <h1 className='font-Poppins text-5xl font-extrabold'><u>My Work</u></h1>
                <h1 className='font-Poppins  bg-pink-50 rounded-3xl px-2 mt-5'><a href='https://www.instagram.com/makeoverby_simranpanchal/?igsh=OWxqb2JwZzY4cXNq'>See All</a></h1>
            </div>
        </div>
        <div className='w-full py-2 my-6 ' style={{backgroundImage: `url(${workbg})`, backgroundSize: '100vw'}} >
            <div className='p-5 rounded-md mt-4  flex justify-center' >
                <div class=" grid grid-cols-2 md:grid-cols-3 gap-10 p-5  rounded-md">
                    <div>
                        <img class="h-[420px] w-[330px] rounded-lg" src="https://lh3.googleusercontent.com/pw/AP1GczPfm9OxhfFm77Qi3vW-nyw3BvUkiw_X1QIawuzKXFOPdZHVpqvZ2mwMcRUL9D8UQtT2zer5niOosrDdrOZ81-jOJO8R58SAXtzAz1jwtZPbsC29gHRhGBGd42hfwT6iYz8OhEjTP8eEQfFPkSS3UY_UNQ=w650-h869-s-no-gm?authuser=0" alt=""/>
                    </div>
                    <div>
                        <img class="h-[420px] w-[330px] rounded-lg" src="https://lh3.googleusercontent.com/pw/AP1GczOKBzlnJ9z47Kd5jw_9SGOY5Rqcg0tz8fUdiADQf3sbHId5Tv7gwZO4ilfuLVj5ej-1yO0icMPmfZYGq-1G6LWW4e7E-agDssr0nhZdoYB3vhdSkTnHcrGGZS6uTyd-1yV1iG1EV9_Hezy-irHLl6KKmw=w650-h869-s-no-gm?authuser=0" alt=""/>
                    </div>
                    <div>
                        <img class="h-[420px] w-[330px] rounded-lg" src="https://lh3.googleusercontent.com/pw/AP1GczOmODqZEqGoOYlao8eT1ZURhz4IkGaadU1F1LnEYvSlxNOjCL7_jVy5vlbsdfNG8JJejJckF1974k0on3dC1a95aF6h7AhyikfZovnwknTW0gkBW1uKvj2r-0ntWDZLaorA8tSf_zt7coQEIdI7zUe3CA=w569-h757-s-no-gm?authuser=0" alt=""/>
                    </div>
                    <div>
                        <img class="h-[420px] w-[330px] rounded-lg" src="https://lh3.googleusercontent.com/pw/AP1GczO9d72RqRIl2wKXugKrJmWTqZu21hVyTBJVGB8Vsr5aGD1LyYgW2VUTC-_yJEDdWlnMZtCP_dzIh29rOfxuDvl9G-8eIqizbtPrn7A475jJHHCTmrkuUf-aEc5eeYlD5Iq4Eb1_oFnhQb2WJM2kaIsHiQ=w654-h869-s-no-gm?authuser=0" alt=""/>
                    </div>
                    <div>
                        <img class="h-[420px] w-[330px] rounded-lg" src="https://lh3.googleusercontent.com/pw/AP1GczPEIHMk8pP1f1dE04wtlPGr1tbgiev1XGdqxeaVcWyqBwflPwGOLA8JfV5R307XFDqnKHQ-ix5W7QpBuXVdbhS9eOdkaThnxHpnA2EFsJ-JvbZn1jJDL7QJPaI5ECxLwrPckZxBO00zUASpDTxlFk9lDQ=w650-h869-s-no-gm?authuser=0" alt=""/>
                    </div>
                    <div>
                        <img class="h-[420px] w-[330px] rounded-lg" src="https://lh3.googleusercontent.com/pw/AP1GczNKL8Z6FQJUitlE1a1w1PPLVZcN0xqbZ-xqbJUBHs5CL2VhmXDsCYbCPacZcjRsEFvA0RBIRmbm4qBiieKcLrHQUsqvLNlb7qpKd0AjN1O0dNXKexCutFnbeVWNpYqYOcedAnIZucEPdvbV0e96KZwiuw=w655-h869-s-no-gm?authuser=0" alt=""/>
                    </div>
                
                </div>  
            </div>
        </div>
        <div className='flex flex-row justify-center'>
            <h1 className='font-DancingScript font-bold text-2xl'><a href='https://www.instagram.com/makeoverby_simranpanchal/?igsh=OWxqb2JwZzY4cXNq'>More...</a></h1>
        </div>
        
    </div>
  )
}

export default Works