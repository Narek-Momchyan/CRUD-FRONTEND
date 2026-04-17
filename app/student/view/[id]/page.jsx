"use client"

import { useState , useEffect, } from "react"
import { useParams } from "next/navigation"

import style from './page.module.css'
import axios from "@/lib/axios"
export default function viewPage() {

    const {id}= useParams()

    const [student,setStudent]=useState({})
    useEffect(() => {
        const loadingData= async()=>{
            const res = await axios.get(`students/${id}/`)
            setStudent(res.data)
        }
        loadingData()
        
    }, [id]);
  return (
    <div className={style.container}>
        <h2 className={style.heading}>student info</h2>

        <ul className={style.vanStudent}>
            <li>{student.fullName}</li>
            <li>{student.age}</li>
            <li>{student.phone}</li>
            <li>{student.email}</li>
            <li>{student.facultet}</li>
            <li>{student.about}</li>
        </ul>
    </div>
  )
}
