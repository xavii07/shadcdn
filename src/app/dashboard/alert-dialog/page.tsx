"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const AlertDialogs = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger>Eliminar Perfil</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Estas seguro de eliminar este item?
            </AlertDialogTitle>
            <AlertDialogDescription>
              No podras regresar al punto anterior asi que asegurate de leer
              todo correctamente
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button onClick={() => setOpen(true)}>Abrir</Button>
    </div>
  );
};

export default AlertDialogs;
