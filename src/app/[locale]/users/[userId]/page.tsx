"use client"
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Tarjeta from "@/components/Tarjeta";

export default function UserDetails({ params } : {
    params: {
        userId: string;
    }
}) {
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/users');
    };

    return (
        <div>
            <h1 className="m-4 px-4 py-2">Id del usuario: {params.userId}</h1>
            <Button variant="default" onClick={handleBackClick} className="m-4 px-4 py-2">
                Volver a Usuarios
            </Button>
            <Tarjeta titulo="El Titulazo" descripcion="Esta sería una buena descripsión"/>
        </div>
    );
}