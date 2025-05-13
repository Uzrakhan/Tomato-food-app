import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext';
import { FaArrowLeft, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const { currentUser,loading,logout } = useAuth();
    const navigate = useNavigate();

    //redirect if not logged in
    useEffect(() => {
        if(!loading && !currentUser){
            navigate('/login')
        }
    }, [currentUser,loading,navigate]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
            </div>
        );
    }

    
  return (
    <div className='min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto'>
            <button 
            onClick={() => navigate(-1)}
            className='mb-8 flex items-center text-gray-600 hover:text-red-500'
            >
                <FaArrowLeft className="h-5 w-5 mr-1"/>
                Back to home
            </button>

            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <div className='relative h-40 bg-red-100'>
                    <div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2'>
                        <img 
                         src={currentUser?.photoURL || 
                            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         }
                         className='w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg'
                         alt="User avatar"
                        />
                    </div>
                </div>

                <div className='pt-20 px-6 pb-8 text-center'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                        {currentUser?.displayName || "Anonymous User"}
                    </h1>
                    <p className='text-gray-600 mb-6'>{currentUser?.email}</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-md mx-auto'>
                        <div className='flex items-center'>
                            <span className="text-sm font-medium text-gray-500 mr-2">
                                Account Created:
                            </span>
                            <span className="text-gray-700">
                                {new Date(currentUser?.metadata?.creationTime).toLocaleDateString()}
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <span className="text-sm font-medium text-gray-500 mr-2">
                                Last Sign In:
                            </span>
                            <span className="text-gray-700">
                                {new Date(currentUser?.metadata?.lastSignInTime).toLocaleDateString()}
                            </span>
                        </div>
                    </div>

                    <button 
                    onClick={async () => {
                        try{
                            await logout();
                            navigate('/login')
                        }catch(error){
                            console.error('Logout error:', error);
                        }
                    }}
                    className="
                    mt-8 mx-auto flex items-center 
                    px-6 py-2 border border-transparent 
                    text-base font-medium rounded-md text-white
                    bg-red-500 hover:bg-red-600 transition-colors duration-200"
                    >
                        <FaSignOutAlt className="h-5 w-5 mr-2"/>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile