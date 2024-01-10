import Link from "next/link";
import styles from "@/app/style"

export default function ExerciseCard ({ exercise }) {

    return (
        <div className={`${styles.exerciseCard}`}>
            <Link href={`/exercises/${exercise.exercise_id}`}>
            <p>{exercise.name}</p>
            </Link>
        </div>
    )
}
