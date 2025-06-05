/*
  Warnings:

  - You are about to drop the `Carrera` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarreraMateria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Docente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DocenteCarrera` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DocenteMateria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Estudiante` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EstudianteCarrera` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EstudianteMateria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Materia` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "RoleName" AS ENUM ('ADMIN', 'TEACHER', 'STUDENT');

-- DropForeignKey
ALTER TABLE "CarreraMateria" DROP CONSTRAINT "CarreraMateria_carreraId_fkey";

-- DropForeignKey
ALTER TABLE "CarreraMateria" DROP CONSTRAINT "CarreraMateria_materiaId_fkey";

-- DropForeignKey
ALTER TABLE "DocenteCarrera" DROP CONSTRAINT "DocenteCarrera_carreraId_fkey";

-- DropForeignKey
ALTER TABLE "DocenteCarrera" DROP CONSTRAINT "DocenteCarrera_docenteId_fkey";

-- DropForeignKey
ALTER TABLE "DocenteMateria" DROP CONSTRAINT "DocenteMateria_docenteId_fkey";

-- DropForeignKey
ALTER TABLE "DocenteMateria" DROP CONSTRAINT "DocenteMateria_materiaId_fkey";

-- DropForeignKey
ALTER TABLE "EstudianteCarrera" DROP CONSTRAINT "EstudianteCarrera_carreraId_fkey";

-- DropForeignKey
ALTER TABLE "EstudianteCarrera" DROP CONSTRAINT "EstudianteCarrera_estudianteId_fkey";

-- DropForeignKey
ALTER TABLE "EstudianteMateria" DROP CONSTRAINT "EstudianteMateria_estudianteId_fkey";

-- DropForeignKey
ALTER TABLE "EstudianteMateria" DROP CONSTRAINT "EstudianteMateria_materiaId_fkey";

-- DropTable
DROP TABLE "Carrera";

-- DropTable
DROP TABLE "CarreraMateria";

-- DropTable
DROP TABLE "Docente";

-- DropTable
DROP TABLE "DocenteCarrera";

-- DropTable
DROP TABLE "DocenteMateria";

-- DropTable
DROP TABLE "Estudiante";

-- DropTable
DROP TABLE "EstudianteCarrera";

-- DropTable
DROP TABLE "EstudianteMateria";

-- DropTable
DROP TABLE "Materia";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" "RoleName" NOT NULL DEFAULT 'STUDENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentId" INTEGER,
    "teacherId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" "RoleName" NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolePermission" (
    "roleId" INTEGER NOT NULL,
    "permissionId" INTEGER NOT NULL,

    CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("roleId","permissionId")
);

-- CreateTable
CREATE TABLE "Major" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Major_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentMajor" (
    "studentId" INTEGER NOT NULL,
    "majorId" INTEGER NOT NULL,

    CONSTRAINT "StudentMajor_pkey" PRIMARY KEY ("studentId","majorId")
);

-- CreateTable
CREATE TABLE "StudentSubject" (
    "studentId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "StudentSubject_pkey" PRIMARY KEY ("studentId","subjectId")
);

-- CreateTable
CREATE TABLE "MajorSubject" (
    "majorId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "MajorSubject_pkey" PRIMARY KEY ("majorId","subjectId")
);

-- CreateTable
CREATE TABLE "TeacherMajor" (
    "teacherId" INTEGER NOT NULL,
    "majorId" INTEGER NOT NULL,

    CONSTRAINT "TeacherMajor_pkey" PRIMARY KEY ("teacherId","majorId")
);

-- CreateTable
CREATE TABLE "TeacherSubject" (
    "teacherId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "TeacherSubject_pkey" PRIMARY KEY ("teacherId","subjectId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_studentId_key" ON "User"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "User_teacherId_key" ON "User"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_name_key" ON "Permission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Major_name_key" ON "Major"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentMajor" ADD CONSTRAINT "StudentMajor_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentMajor" ADD CONSTRAINT "StudentMajor_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSubject" ADD CONSTRAINT "StudentSubject_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSubject" ADD CONSTRAINT "StudentSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MajorSubject" ADD CONSTRAINT "MajorSubject_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MajorSubject" ADD CONSTRAINT "MajorSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherMajor" ADD CONSTRAINT "TeacherMajor_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherMajor" ADD CONSTRAINT "TeacherMajor_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherSubject" ADD CONSTRAINT "TeacherSubject_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherSubject" ADD CONSTRAINT "TeacherSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
