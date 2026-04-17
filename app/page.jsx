"use client"
import React, { useState, useEffect } from 'react'
import StudentPage from '@/component/students'
import axios from '@/lib/axios'

export default function HomePage() {
  const [student, setStudent] = useState([])

  useEffect(() => {
    const loadingData = async () => {
      try {
        const res = await axios.get("students/") 
        setStudent(res.data)
      } catch (error) {
        console.error("Հարցման սխալ:", error)
      }
    }
    loadingData()
  }, []);

  const removeStudent = async (id) => {
    setStudent(student.filter(elem => (elem.id || elem._id) !== id));
    
    await axios.delete(`students/${id}/`) 
  }

  return (
    <div>
      {student && student.length > 0 ? (
        <StudentPage students={student} remove={removeStudent}/>
      ) : (
        <p>Բեռնվում է կամ ուսանողներ չկան...</p>
      )}
    </div>
  )
}