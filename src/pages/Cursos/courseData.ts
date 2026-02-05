import { type ICardProps } from "@/components/CourseCard/card";

export const graduationsList : ICardProps[] = [
    {
        name:"Engenharia de Computação",
        grade:"Gradução",
        institution:"UTFPR",
        start_date: new Date(2022,2,1)
    },
    {
        name:"Técnico em Informática",
        grade:"Técnico",
        institution:"IFPR",
        start_date:new Date(2017,1,18),
        conclusion_date:new Date(2022,1,25),
    }
]

export const coursesList: ICardProps[] = [
    {
        name: "Go Developer",
        grade: "Curso",
        institution: "Digital Innovation One (DIO)",
        start_date: new Date(2025,10,1),
        conclusion_date: new Date(2025,11,28),
    },
    {
        name: "Linux Fundamentals",
        grade: "Curso",
        institution: "Digital Innovation One (DIO)",
        start_date: new Date(2025,7,15),
        conclusion_date: new Date(2025,8,19),
    },
    {
        name: "Docker Fundamentals",
        grade: "Curso",
        institution: "Digital Innovation One (DIO)",
        start_date: new Date(2025,5,10),
        conclusion_date: new Date(2025,8,10),
    },
    {
        name: "React Developer",
        grade: "Curso",
        institution: "Digital Innovation One (DIO)",
        start_date: new Date(2024,11,1),
        conclusion_date: new Date(2025,2,31),
    },
    {
        name: "DevOps Fundamentals",
        grade: "Curso",
        institution: "Digital Innovation One (DIO)",
        start_date: new Date(2024,11,20),
        conclusion_date: new Date(2025,0,21),
    },
]