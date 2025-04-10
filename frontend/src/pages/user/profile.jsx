import { useState } from 'react';
import { User, Camera, Upload } from 'lucide-react';

const Profile  = () => {
    const [formData, setFormData] = useState({
        firstName: 'UserName',
        lastName: 'Userlastname',
        email: 'User@gmail.com',
        phone: '+503 ',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
    };

    return (
        <>
            <div className="bg-gray-50 p-6 flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
                {/* Panel lateral izquierdo */}
                <div className="bg-white rounded-lg shadow p-6 w-full md:w-1/3">
                    <div className="flex flex-col items-center">
                        <div className="rounded-full bg-gray-100 p-4 mb-4">
                            <User size={48} className="text-gray-500" />
                        </div>
                        <p className="font-medium text-gray-700">username</p>
                        <p className="text-gray-500 text-sm mb-6">useremail</p>
                    </div>

                    <div className="border-t pt-4">
                        <h3 className="font-bold mb-4">Información</h3>
                        <div className="space-y-2">
                            <div>
                                <p className="text-sm text-gray-500">Nombre:</p>
                                <p>{/*A se mostrara el nombre del usuario*/}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Correo:</p>
                                <p>{/*A se mostrara el correo del usuario*/}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Cel:</p>
                                <p>{/*A se mostrara el telefono del usuario*/}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panel principal derecho */}
                <div className="bg-white rounded-lg shadow p-6 w-full md:w-2/3">
                    <h2 className="font-bold mb-6">Detalles</h2>

                    <form onSubmit={handleSubmit}>
                        {/* Nombres */}
                        <div className="mb-4">
                            <p className="mb-2">Nombres</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full p-2 bg-gray-100 rounded border border-gray-200"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full p-2 bg-gray-100 rounded border border-gray-200"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <p className="mb-2">Email</p>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-100 rounded border border-gray-200"
                            />
                        </div>

                        {/* Número */}
                        <div className="mb-4">
                            <p className="mb-2">Número</p>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-100 rounded border border-gray-200"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-indigo-900 text-white py-2 px-4 rounded w-full md:w-auto mb-6"
                        >
                            Guardar
                        </button>

                        {/* Sección de Contraseña */}
                        <div className="border-t pt-4">
                            <h3 className="font-bold mb-4">Contraseña</h3>
                            <p className="mb-2">Cambiar la contraseña</p>
                            
                            <div className="mb-4">
                                <input
                                    type="password"
                                    name="currentPassword"
                                    placeholder="••••••••••••"
                                    value={formData.currentPassword}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-100 rounded border border-gray-200 mb-2"
                                />
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="password"
                                        name="newPassword"
                                        placeholder="••••••••••••"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        className="w-full p-2 bg-gray-100 rounded border border-gray-200"
                                    />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirmar contraseña"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full p-2 bg-gray-100 rounded border border-gray-200"
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="bg-indigo-900 text-white py-2 px-4 rounded w-full md:w-auto mb-6"
                            >
                                Guardar
                            </button>
                        </div>

                        {/* Sección de Foto */}
                        <div className="border-t pt-6 flex flex-col items-center">
                            <div className="rounded-full bg-gray-100 p-4 mb-4">
                                <User size={48} className="text-gray-500" />
                            </div>
                            
                            <button
                                type="button"
                                className="bg-indigo-900 text-white py-2 px-4 rounded w-full md:w-64 mb-2 flex items-center justify-center"
                            >
                                <Camera size={16} className="mr-2" /> Tomar foto
                            </button>
                            
                            <button
                                type="button"
                                className="bg-indigo-900 text-white py-2 px-4 rounded w-full md:w-64 flex items-center justify-center"
                            >
                                <Upload size={16} className="mr-2" /> Subir imagen
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Profile;