-- CreateTable
CREATE TABLE "Carrera" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Carrera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "docenteId" INTEGER,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudiante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Docente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Docente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EstudianteCarrera" (
    "estudianteId" INTEGER NOT NULL,
    "carreraId" INTEGER NOT NULL,

    CONSTRAINT "EstudianteCarrera_pkey" PRIMARY KEY ("estudianteId","carreraId")
);

-- CreateTable
CREATE TABLE "EstudianteMateria" (
    "estudianteId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,

    CONSTRAINT "EstudianteMateria_pkey" PRIMARY KEY ("estudianteId","materiaId")
);

-- CreateTable
CREATE TABLE "CarreraMateria" (
    "carreraId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,

    CONSTRAINT "CarreraMateria_pkey" PRIMARY KEY ("carreraId","materiaId")
);

-- CreateTable
CREATE TABLE "DocenteCarrera" (
    "docenteId" INTEGER NOT NULL,
    "carreraId" INTEGER NOT NULL,

    CONSTRAINT "DocenteCarrera_pkey" PRIMARY KEY ("docenteId","carreraId")
);

-- CreateTable
CREATE TABLE "DocenteMateria" (
    "docenteId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,

    CONSTRAINT "DocenteMateria_pkey" PRIMARY KEY ("docenteId","materiaId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carrera_nombre_key" ON "Carrera"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Materia_nombre_key" ON "Materia"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Materia_docenteId_key" ON "Materia"("docenteId");

-- CreateIndex
CREATE UNIQUE INDEX "DocenteMateria_docenteId_key" ON "DocenteMateria"("docenteId");

-- CreateIndex
CREATE UNIQUE INDEX "DocenteMateria_materiaId_key" ON "DocenteMateria"("materiaId");

-- AddForeignKey
ALTER TABLE "EstudianteCarrera" ADD CONSTRAINT "EstudianteCarrera_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstudianteCarrera" ADD CONSTRAINT "EstudianteCarrera_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstudianteMateria" ADD CONSTRAINT "EstudianteMateria_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstudianteMateria" ADD CONSTRAINT "EstudianteMateria_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarreraMateria" ADD CONSTRAINT "CarreraMateria_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarreraMateria" ADD CONSTRAINT "CarreraMateria_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocenteCarrera" ADD CONSTRAINT "DocenteCarrera_docenteId_fkey" FOREIGN KEY ("docenteId") REFERENCES "Docente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocenteCarrera" ADD CONSTRAINT "DocenteCarrera_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocenteMateria" ADD CONSTRAINT "DocenteMateria_docenteId_fkey" FOREIGN KEY ("docenteId") REFERENCES "Docente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocenteMateria" ADD CONSTRAINT "DocenteMateria_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia"("id") ON DELETE CASCADE ON UPDATE CASCADE;
