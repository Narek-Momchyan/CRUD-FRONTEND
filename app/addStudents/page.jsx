"use client"
import { useActionState } from "react"
import { useRouter } from "next/navigation"
import axios from "@/lib/axios"
import style from './add.module.css'

export default function AddStudents() {
    const router = useRouter()

    async function handleAddStudent(prevState, formData) {
        const studentData = Object.fromEntries(formData)
        try {
            await axios.post("students/", studentData)
            router.push("/") 
            return { error: null, success: true }
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
            return { 
                error: errorMsg, 
                success: false 
            }
        }
    }
    const [state, formAction, isPending] = useActionState(handleAddStudent, {
        error: null,
        success: false
    })

    return (
        <div className={style.container}>
            <h1 className={style.title}>Add New Student</h1>
            
            <form action={formAction} className={style.form}>
                <input 
                    name="fullName" 
                    placeholder="Full Name" 
                    required 
                    className={style.input} 
                />
                <input 
                    name="facultet" 
                    placeholder="Faculty" 
                    required 
                    className={style.input} 
                />
                <input 
                    name="age" 
                    type="number" 
                    placeholder="Age" 
                    required 
                    className={style.input} 
                />
                <input 
                    name="phone" 
                    placeholder="Phone Number" 
                    required
                    className={style.input} 
                />
                <input 
                    name="email" 
                    require 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    className={style.input} 
                />
                <textarea 
                    name="about" 
                    placeholder="About Student" 
                    required
                    className={style.textarea} 
                />

                <button 
                    type="submit" 
                    disabled={isPending}
                    className={style.button}
                >
                    {isPending ? "Submitting..." : "Submit"}
                </button>

                {state?.error && (
                    <p className={style.error}>{state.error}</p>
                )}
            </form>
        </div>
    )
}