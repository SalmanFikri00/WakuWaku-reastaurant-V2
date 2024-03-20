import React ,{ useEffect } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head , useForm } from '@inertiajs/react';
const FormReservasi  = ({auth}) => {

  const { data , setData , post , processing , reset , error } = useForm({
    pemesan: auth.user.name,
    no_meja : '',
    tanggal_reservasi: '',
  })

  useEffect(() => {
    return () => {
      setData('pemesan', auth.user.name)
      reset('password')
    }
  }, [])
  


  const submit = (e) => {
    e.preventDefault()

    post(route('reservasi.store'))
  }

  

  return (
      <AuthenticatedLayout
      user={auth.user}
      header={'ss'}
      >
        <Head title='Reservasi'/>
          <form class="max-w-md mx-auto px-20 py-32 rounded-xl shadow-xl bg-gray-500" onSubmit={submit}>
            {/* <h2>{auth.user.name}</h2> */}
            <div class="relative z-0 w-full mb-5 group"> 
                <input
                  type="text" 
                  name="no_meja" 
                  id="no_meja" 
                  value={data.no_meja}
                  onChange={(e) => setData('no_meja' , e.target.value)}
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="no_meja" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No Meja yang di reservasi</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input
                  type="date" 
                  name="tanggal_reservasi" 
                  id="tanggal_reservasi" 
                  value={data.tanggal_reservasi}
                  onChange={(e) => setData('tanggal_reservasi' , e.target.value)}
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="tanggal_reservasi" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">waktu</label>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
      </AuthenticatedLayout>
  )
}

export default FormReservasi 