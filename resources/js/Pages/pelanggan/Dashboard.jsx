import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , Link } from '@inertiajs/react';

export default function Dashboard({ auth , data , status , userReservasi }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">{status} kamu bisa memesan sekarang</div>
                    </div>
                
                    <Link className=' w-40 h-14 bg-gray-300 flex justify-center items-center rounded-xl' href={route('reservasi.form')}>
                        Ayo Memesan 
                    </Link>
                    <div className='flex flex-wrap p-20 gap-8'>
                    {
                        userReservasi.map((d) => (
                        <div key={d.id} className=" w-64 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pemesan : {d.pemesan}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Meja : {d.no_meja}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Pada Tanggal : {d.tanggal_reservasi}</p>
                            <div className='flex w-full'>
                                <Link method='post' href={`/reservasi/${d.id}`} h className=' w-20 h-7 bg-gray-300 flex justify-center items-center rounded-lg mt-6'>
                                    batalkan
                                </Link>
                            </div>
                        </div>
                        ))
                    }
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
