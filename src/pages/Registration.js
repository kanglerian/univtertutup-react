import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../utilities/useForm';

const Registration = () => {
    const [form, setForm] = useForm({
        fullName: '',
        birthPlace: '',
        birthday: '',
        motherName: '',
        nationality: '',
        nik: '',
        typeProgram: false,
        idLevel: 0,
        idProgram: 0,
        handphone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleSubmit = (e) => {
      console.log(form);
      e.preventDefault();
    }
    return (
        <section>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='text-center py-10'>
                        <div className='mb-5'>
                            <h3 className='text-slate-900'>Sistem Informasi Akademik</h3>
                            <h1 className='font-bold text-2xl text-blue-500 my-1'>UNIVERSITAS TERTUTUP</h1>
                            <p className='text-sm text-slate-600'>Pendaftaran Mahasiswa Baru</p>
                        </div>
                        <div>
                            <div className='mb-2'>
                                <input type='text' name='fullName' value={form.fullName} onChange={(e) => setForm('fullName', e.target.value)} className='text-sm text-slate-500 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' placeholder='Nama lengkap' />
                            </div>
                            <div className='mb-2'>
                                <input type='text' name='nik' value={form.nik} onChange={(e) => setForm('nik', e.target.value)} className='text-sm text-slate-500 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' placeholder='NIK' />
                            </div>
                            <div className='mb-2'>
                                <input type='text' name='birthPlace' value={form.birthPlace} onChange={(e) => setForm('birthPlace', e.target.value)} className='text-sm text-slate-500 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' placeholder='Tempat lahir' />
                            </div>
                            <div className='mb-2'>
                                <input type='date' name='birthday' value={form.birthday} onChange={(e) => setForm('birthday', e.target.value)} className='text-sm text-slate-400 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' />
                            </div>
                            <div className='mb-2'>
                                <input type='text' name='motherName' value={form.motherName} onChange={(e) => setForm('motherName', e.target.value)} className='text-sm text-slate-500 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' placeholder='Nama Ibu Kandung' />
                            </div>
                            <div className='mb-2'>
                                <select name='nationality' value={form.nationality} onChange={(e) => setForm('nationality', e.target.value)} className='text-sm w-72 text-slate-400 border border-slate-200 focus:outline-slate-300 bg-white px-4 py-2 rounded-lg'>
                                    <option selected>Pilih Kewarganegaraan</option>
                                    <option value='WNI'>WNI</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <select name='idLevel' value={form.idLevel} onChange={(e) => setForm('idLevel', e.target.value)} className='text-sm w-72 text-slate-400 border border-slate-200 focus:outline-slate-300 bg-white px-4 py-2 rounded-lg'>
                                    <option selected>Pilih Jenjang Pendidikan</option>
                                    <option value='0'>Diploma 3</option>
                                    <option value='1'>Strata 1</option>
                                    <option value='2'>Magister</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <select name='idProgram' value={form.idProgram} onChange={(e) => setForm('idProgram', e.target.value)} className='text-sm w-72 text-slate-400 border border-slate-200 focus:outline-slate-300 bg-white px-4 py-2 rounded-lg'>
                                    <option selected>Pilih Program Studi</option>
                                    <option value='0'>Administrasi Bisnis</option>
                                    <option value='1'>Manajemen Informatika</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <input type='text' name='handphone' value={form.handphone} onChange={(e) => setForm('handphone', e.target.value)} className='text-sm text-slate-500 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' placeholder='No. Handphone' />
                            </div>
                            <div className='mb-2'>
                                <input type='email' name='email' value={form.email} onChange={(e) => setForm('email', e.target.value)} className='text-sm text-slate-500 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' placeholder='Email' />
                            </div>
                            <div className='mb-2'>
                                <input type='password' name='password' value={form.password} onChange={(e) => setForm('password', e.target.value)} className='text-sm text-slate-500 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' placeholder='Password' />
                            </div>
                            <div className='mb-4'>
                                <input type='password' name='confirmPassword' value={form.confirmPassword} onChange={(e) => setForm('confirmPassword', e.target.value)} className='text-sm text-slate-500 w-72 border border-slate-200 focus:outline-slate-300 px-4 py-2 rounded-lg' placeholder='Confirm Password' />
                            </div>
                            <div className='mb-2'>
                                <button type='submit' className='inline-block text-sm text-white py-2 bg-blue-400 hover:bg-blue-500 active:ring-1 active:ring-blue-300 w-72 rounded-lg'>Buat Akun Mahasiswa Baru <i class="fa-solid fa-arrow-right"></i></button><br />
                                <Link to='/' className='inline-block mt-2 text-sm text-slate-400 py-2 hover:text-slate-500 w-72 rounded-lg'><i class="fa-solid fa-arrow-left"></i> Kembali</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Registration