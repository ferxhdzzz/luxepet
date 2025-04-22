import React, { useState } from 'react';

const Configuration = () => {
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        numero: '',
        contrasena: '',
        confirmarContrasena: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', userData);
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="w-full max-w-4xl flex">
                    {/* Left side - User Info */}
                    <div className="w-1/3 bg-white p-6 rounded-lg shadow mr-4">
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="mt-2 text-center">
                                <div className="font-medium">@nombreusuario</div>
                                <div className="text-sm text-gray-500">Identificación del usuario</div>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="text-sm font-medium mb-3">Información</h3>

                            <div className="mb-2">
                                <div className="text-sm font-medium">Nombre:</div>
                                <div className="text-sm">Nombre Usuario</div>
                            </div>

                            <div className="mb-2">
                                <div className="text-sm font-medium">Correo:</div>
                                <div className="text-sm">usuario@ejemplo.com</div>
                            </div>

                            <div className="mb-2">
                                <div className="text-sm font-medium">Cel:</div>
                                <div className="text-sm">XXX XXX XXXX</div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="w-2/3 bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-medium mb-4">Detalles</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                        placeholder="Nombre"
                                        value={userData.nombre}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="apellido"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                        placeholder="Apellido"
                                        value={userData.apellido}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                        placeholder="usuario@ejemplo.com"
                                        value={userData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Número</label>
                                    <input
                                        type="tel"
                                        name="numero"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                        placeholder="XXX XXX XXXX"
                                        value={userData.numero}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-indigo-900 text-white py-2 rounded mb-6">
                                Guardar
                            </button>

                            <h3 className="text-sm font-medium mb-2">Contraseña</h3>
                            <p className="text-sm mb-3">Cambiar la contraseña</p>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <input
                                        type="password"
                                        name="contrasena"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                        placeholder="••••••••••••"
                                        value={userData.contrasena}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="confirmarContrasena"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                                        placeholder="Confirmar contraseña"
                                        value={userData.confirmarContrasena}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button type="button" className="w-full bg-indigo-900 text-white py-2 rounded mb-6">
                                Guardar
                            </button>

                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 bg-white border border-gray-300 rounded-full flex items-center justify-center mb-3">
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                <button type="button" className="w-full bg-indigo-900 text-white py-2 rounded mb-2">
                                    Tomar foto
                                </button>

                                <button type="button" className="w-full bg-indigo-900 text-white py-2 rounded">
                                    Subir imagen
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Configuration;