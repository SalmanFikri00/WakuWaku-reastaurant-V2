<?php

namespace App\Http\Controllers;

use inertia\inertia;
use App\Models\reservasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class UserControllers extends Controller
{
    public function dashboard() {

        $status = Auth::user()->status; 

        if($status == 'pelanggan') {

            $userReservasi = reservasi::whereIn('pemesan' , [Auth::user()->name])->get();

            return inertia::render('pelanggan/Dashboard', [
                'userReservasi' => $userReservasi,
                'status' => $status,
            ]);
        }else {
            return inertia::render('admin/Dashboard', [
                'data' => 'apaa aja bolehh',
                'status' => $status,
            ]);
        }
        
    }

    
    public function reservasi() {
        
        $status = Auth::user()->status;
        
        if($status == 'pelanggan'){
            return inertia::render('pelanggan/FormReservasi');
        }else {

            $data = reservasi::all();
            return inertia::render('admin/reservasi', [
                'data' => $data
            ]);
        }

    }

    public function reservasistore (Request $request) {
        
        // dd($request->all());

        reservasi::create($request->all());

        return Redirect::route('dashboard');

    }


    public function reservasidestroy ( $id ) {
        
        $record = reservasi::find($id);
        $record->delete();

        return redirect('/dashboard');

    }
}
