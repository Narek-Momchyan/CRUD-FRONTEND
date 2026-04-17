"use client"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import axios from "@/lib/axios"
import style from './edit.module.css'
export default function EditPage() {
    const { id } = useParams()
    const router = useRouter()

    const [student, setStudent] = useState({
        fullName: "",
        facultet: "",
        age: "",
        phone: "",
        email: "",
        about: ""
    })

    useEffect(() => {
        if (!id) return;
        const loadingData = async () => {
            try {
                const res = await axios.get(`students/${id}/`)
                setStudent(res.data)
            } catch (err) {
                console.error("Error loading student:", err);
            }
        }
        loadingData()
    }, [id])

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault(); 
        try {
            await axios.put(`students/${id}/`, student);
            router.push("/");
        } catch (err) {
            let errorMsg = "Something went wrong";
            if (err.response?.data) {
                if (typeof err.response.data === 'object') {
                    errorMsg = Object.entries(err.response.data)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(" | ");
                } else {
                    errorMsg = err.response.data.message || errorMsg;
                }
            }
            alert(errorMsg); 
        }
    }

    return (
        <div className={style.container}>
            <h2 className={style.heading}>Edit Student</h2>
            <form onSubmit={onSubmit} className={style.form}>
                
                <div>Name: 
                    <input type="text" name="fullName" value={student.fullName} onChange={onInputChange}/>
                </div>
                <div>Faculty: 
                    <input type="text" name="facultet" value={student.facultet} onChange={onInputChange}/>
                </div>
                <div>Age: 
                    <input type="text" name="age" value={student.age} onChange={onInputChange}/>
                </div>
                <div>Phone: 
                    <input type="text" name="phone" value={student.phone} onChange={onInputChange}/>
                </div>
                <div>Email: 
                    <input type="text" name="email" value={student.email} onChange={onInputChange}/>
                </div>
                <div>About: 
                    <textarea type="text area" name="about" value={student.about} onChange={onInputChange}/>
                </div>
                
                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
}