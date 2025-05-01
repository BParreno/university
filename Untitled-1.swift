/*/ This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Major {
  id          Int       @id @default(autoincrement())
  name      String    @unique
  description String?
  students StudentMajor[]
  subjects    MajorSubject[]
  teachers    TeacherMajor[]
}

model Subject {
  id          Int             @id @default(autoincrement())
  name      String          @unique
  description String?
  majors    MajorSubject[]
  students StudentSubject[]
  teachers    TeacherSubject?   @relation("SubjectTeacher")
  teacherId   Int?            @unique
}

model Student {
  id        Int                 @id @default(autoincrement())
  name    String
  majors  StudentMajor[]
  subjects  StudentSubject[]
}

model Teacher {
  id       Int              @id @default(autoincrement())
  name   String
  majors TeacherMajor[]
  subjects TeacherSubject[] @relation("TeacherSubject")
}

model StudentMajor {
  studentId Int
  majorId    Int
  student   Student @relation(fields: [studentId], references: [id], onDelete: Cascade)
  major      Major    @relation(fields: [majorId], references: [id], onDelete: Cascade)

  @@id([studentId, majorId])
}

model StudentSubject {
  studentId Int
  subjectId    Int
  student   Student @relation(fields: [studentId], references: [id], onDelete: Cascade)
  subject      Subject    @relation(fields: [subjectId], references: [id], onDelete: Cascade)

  @@id([studentId, subjectId])
}

model MajorSubject {
  majorId Int
  subjectId Int
  major   Major @relation(fields: [majorId], references: [id], onDelete: Cascade)
  subject   Subject @relation(fields: [subjectId], references: [id], onDelete: Cascade)

  @@id([majorId, subjectId])
}

model TeacherMajor {
  teacherId Int
  majorId Int
  teacher   Teacher @relation(fields: [teacherId], references: [id], onDelete: Cascade)
  major   Major @relation(fields: [majorId], references: [id], onDelete: Cascade)

  @@id([teacherId, majorId])
}

model TeacherSubject {
  teacherId Int     @unique
  subjectId Int     @unique // Añadimos @unique aquí
  teacher   Teacher @relation("TeacherSubject", fields: [teacherId], references: [id], onDelete: Cascade)
  subject   Subject @relation("SubjectTeacher", fields: [subjectId], references: [id], onDelete: Cascade)

  @@id([teacherId, subjectId])
}