import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface AddUserModalProps {
  isOpen: boolean;
  newUser: { first_name: string; last_name: string; email: string; role: string };
  setNewUser: (user: { first_name: string; last_name: string; email: string; role: string }) => void;
  formErrors: { first_name: string; email: string };
  setFormErrors: (errors: { first_name: string; email: string }) => void;
  onSubmit: () => void;
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, newUser, setNewUser, formErrors, setFormErrors, onSubmit, onClose }) => {
  useEffect(() => {
    validateForm();
  }, [newUser]);

  const validateForm = () => {
    const errors = { first_name: '', email: '' };
  
    if (newUser.first_name && newUser.first_name.length < 5) {
      errors.first_name = 'El nombre debe tener al menos 5 caracteres';
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (newUser.email && !emailRegex.test(newUser.email)) {
      errors.email = 'El correo electrónico no es válido';
    }
  
    setFormErrors(errors);
  };

  return (   
      <Sheet key="right">
        <SheetTrigger asChild>
          <Button variant="default">Añadir usuario</Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[500px] sm:w-[450px]">
          <SheetHeader>
            <SheetTitle>Añadir usuario</SheetTitle>
            <SheetDescription>
              Rellene los campos
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4 mt-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nombre
              </Label>
              <Input id="name" onChange={e => setNewUser({ ...newUser, first_name: e.target.value })} value={newUser.first_name} className="col-span-3" />
              {formErrors.first_name && <p className="text-red-500 italic w-[405px] pl-4 text-right text-sm">{formErrors.first_name}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Apellido
              </Label>
              <Input id="Apellido" value={newUser.last_name} className="col-span-3" onChange={e => setNewUser({ ...newUser, last_name: e.target.value })}/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" value={newUser.email} className="col-span-3" onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
              {formErrors.email && <p className="text-red-500 italic w-[330px] pl-4 text-right text-sm">{formErrors.email}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Select>   
                <Label htmlFor="email" className="text-right">
                  Rol
                </Label>         
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Seleccina un rol"/>
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectItem value="Frontend">Frontend</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="DevOps">DevOps</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                </SelectContent>        
              </Select>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button onClick={onSubmit} variant="default" className="mt-4">
                Añadir Usuario
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
  )
}
    
    
        /*<Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
          <DrawerContent className='w-[400px]'>
            <DrawerHeader>
              <DrawerTitle>Añadir Nuevo Usuario</DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
              <div className="fixed inset-0 flex items-center justify-center w-full" onClick={onClose}>
                <div className="bg-white p-4 rounded" onClick={e => e.stopPropagation()}>
                  {formErrors.first_name && <p className="text-red-500 italic">{formErrors.first_name}</p>}
                  <input 
                    type="text"
                    placeholder="Nombre"
                    value={newUser.first_name}
                    onChange={e => setNewUser({ ...newUser, first_name: e.target.value })}
                    className="border p-2 mb-8 w-full"
                  />
                  <input 
                    type="text"
                    placeholder="Apellido"
                    value={newUser.last_name}
                    onChange={e => setNewUser({ ...newUser, last_name: e.target.value })}
                    className="border p-2 mb-8 w-full"
                  />
                  {formErrors.email && <p className="text-red-500 italic">{formErrors.email}</p>}
                  <input 
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                    className="border p-2 mb-8 w-full"
                  />
                  <select 
                    value={newUser.role}
                    onChange={e => setNewUser({ ...newUser, role: e.target.value })}
                    className="border p-2 mb-8 w-full"
                  >
                    <option value="">Seleccionar Rol</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Design">Design</option>
                  </select>
                  <div className='flex flex-row-reverse gap-2'>
                    <Button onClick={onSubmit} variant="default">
                      Añadir Usuario
                    </Button>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </div>
                </div>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>*/

export default AddUserModal;
