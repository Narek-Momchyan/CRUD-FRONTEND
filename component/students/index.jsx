import React from 'react';
import styles from './students.module.css';
import Link from 'next/link';

export default function StudentPage({ students, remove}) {
  
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headRow}>
            <th className={styles.th}>Full Name</th>
            <th className={styles.th}>Age</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Phone</th>
            <th className={styles.th}>Faculty</th>
            <th className={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
            <tr key={item.id} className={styles.row}>
              <td className={styles.td}>{item.fullName}</td>
              <td className={styles.td}>{item.age}</td>
              <td className={styles.td}>{item.email}</td>
              <td className={styles.td}>{item.phone}</td>
              <td className={styles.td}>{item.facultet}</td>
              <td className={styles.td}>
               <div className={styles.rov1}>
                 <Link href={`student/edit/${item.id}`} className={styles.editBtn}>♻️</Link>
                <Link href={`student/view/${item.id}`}  className={styles.vue}>&#128269;</Link>
                <button onClick={()=>remove(item.id)} className={styles.deleteBtn}>&#10006;</button>
               </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}