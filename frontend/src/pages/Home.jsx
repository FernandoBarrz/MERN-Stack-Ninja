import { useEffect, useState } from "react"

const URI = "http://localhost:3000";

export default function Home() {
    

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch(`${URI}/api/workouts`)
            const json = await response.json()
            if(response.ok){
                
            }
        }
        fetchWorkouts()
    }, [])

  return (
    <div className="home">Home</div>
  )
}
