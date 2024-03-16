import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';



const FaqCard = ({title, answer, isVisible, setIsVisible}) =>{
    return (
        <div className={` m-2 p-2 w-[50rem] flex justify-between rounded-xl ${isVisible?"bg-pink-50":" bg-slate-100"}`} onClick={setIsVisible}> 
            <div className='flex flex-col'>
            <span className={`font-Poppins text-xl ${isVisible ? "font-semibold" : ""}`}>{title}</span>
            <span>{isVisible&&<p className='font-Poppins text-sm'>{answer}</p>}</span>
            </div>
            <div>
            <button onClick={setIsVisible}>
                {isVisible ? <ChevronUp color="#ff0088" /> : <ChevronDown color="#ff0088" />}
            </button>
            </div>
        </div>
    )
}

const FAQ = () => {
  const [visibleSection, setVisibleSection] = useState("")
  return (  
    <div className='flex flex-col p-2 items-center'>
      <FaqCard title={"Do you offer makeup trials?"}
        answer={"Yes, I offer makeup trials for clients who are preparing for special events such as weddings, proms, or photo shoots. During the trial, we can discuss your desired look, try out different styles, and make any adjustments to ensure you feel confident and beautiful on your big day."}
        isVisible={visibleSection === 'Trials'}
        setIsVisible={()=>{
          if(visibleSection === "Trials"){
            setVisibleSection('')
          }
          else{
            setVisibleSection('Trials')
          }
        }}/>

      <FaqCard title={"How do I book my makeup trial?"}
              answer={"You can either book directly via the website or contact me at my socials/contact no."}
              isVisible={visibleSection === 'trialbook'}
              setIsVisible={()=>{
                if(visibleSection === "trialbook"){
                  setVisibleSection('')
                }
                else{
                  setVisibleSection('trialbook')
                }
         }}/>

      <FaqCard title={"How long ahead should I book you for my wedding makeup?"}
              answer={"You should book me for your makeup at least 3 to 6 months in advance, especially for weddings and special events. This ensures availability and allows us to plan and customize your makeup look to perfection. However, feel free to reach out for last-minute bookings as well, as I'll do my best to accommodate your needs."}
              isVisible={visibleSection === 'Ahead Booking'}
              setIsVisible={()=>{
                if(visibleSection === "Ahead Booking"){
                  setVisibleSection('')
                }
                else{
                  setVisibleSection('Ahead Booking')
                }
         }}/>  

      <FaqCard title={"Do you Provide makeup services on-location?"}
              answer={"Yes, I offer on-location makeup services for events such as weddings, photo shoots, and special occasions. Whether you prefer to get ready at home, a hotel, or a venue, I can accommodate your needs and ensure a seamless and stress-free experience."}
              isVisible={visibleSection === 'On location'}
              setIsVisible={()=>{
                if(visibleSection === "On location"){
                  setVisibleSection('')
                }
                else{
                  setVisibleSection('On location')
                }
         }}/>
      
      <FaqCard title={"Are you available for destination weddings?"}
              answer={"Absolutely! I'm thrilled to be a part of destination weddings. Whether it's a beach, a charming town, or stunning landscapes, count me in! Just ensure accommodation arrangements are covered. Let's make your dream wedding a reality!"}
              isVisible={visibleSection === 'Destination Weddings'}
              setIsVisible={()=>{
                if(visibleSection === "Destination Weddings"){
                  setVisibleSection('')
                }
                else{
                  setVisibleSection('Destination Weddings')
                }
         }}/>

      <FaqCard title={"What happens if I have a makeup emergency or need a touch-up during the event?"}
              answer={"I am available for touch-ups and assistance throughout the event to ensure your makeup looks flawless and lasts throughout the day or night. Please feel free to reach out to me if you have any concerns or need additional assistance during the event."}
              isVisible={visibleSection === 'Emergency'}
              setIsVisible={()=>{
                if(visibleSection === "Emergency"){
                  setVisibleSection('')
                }
                else{
                  setVisibleSection('Emergency')
                }
         }}/>

      <FaqCard title={"How long will the makeup application take?"}
              answer={"The duration of the makeup application can vary depending on the complexity of the look and specific client requirements. Typically, a full-face makeup application takes around 45 minutes to an hour, but I always allocate extra time for consultations and touch-ups to ensure client satisfaction."}
              isVisible={visibleSection === 'Application'}
              setIsVisible={()=>{
                if(visibleSection === "Application"){
                  setVisibleSection('')
                }
                else{
                  setVisibleSection('Application')
                }
         }}/>

    </div>
  )
}

export default FAQ