import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , Link } from '@inertiajs/react';


const reservasi = ({auth , data }) => {

  return (
    <AuthenticatedLayout 
    user={auth.user}
    header={''}
    >
    <Head title='cek reservasi' />
        <div className='flex flex-wrap p-20 gap-8'>
            {
                data.map((d) => (
                    <Link key={d.id} href="#" className=" w-64 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pemesan : {d.pemesan}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Meja : {d.no_meja}</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Pada Tanggal : {d.tanggal_reservasi}</p>
                    </Link>
                ))
            }
        </div>
    </AuthenticatedLayout>
  )
}

export default reservasi