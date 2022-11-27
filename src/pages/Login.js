import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section>
            <div>
                <div className='text-center py-10'>
                    <div className='mb-5'>
                        <h3 className='text-slate-900'>Sistem Informasi Akademik</h3>
                        <h1 className='font-bold text-2xl text-blue-500 my-1'>UNIVERSITAS TERTUTUP</h1>
                        <p className='text-sm text-slate-600'>Kelola proses belajar anda dengan mudah</p>
                    </div>
                    <div>
                        <div className='mb-2'>
                            <input type='email' className='text-sm text-slate-500 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' placeholder='Email' />
                        </div>
                        <div className='mb-4'>
                            <input type='password' className='text-sm text-slate-500 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' placeholder='Password' />
                        </div>
                        <div className='mb-2'>
                            <Link to="/" className='inline-block text-sm text-white py-2 bg-blue-400 hover:bg-blue-500 active:ring-1 active:ring-blue-300 w-72 rounded-lg'>Masuk</Link><br/>
                            <Link to='/registrasi' className='inline-block mt-2 text-sm text-blue-400 hover:text-blue-500 active:ring-1 active:ring-blue-200 py-2 border border-blue-400 hover:border-blue-500 w-72 rounded-lg'>Pengguna baru? Daftar disini</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login