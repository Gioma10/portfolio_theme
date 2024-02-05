<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function home() {
        return view('index');
    }

    public function contactMe(Request $request){
        // dd($request);
        $name= $request->input('name');
        $email= $request->input('email');
        $text= $request->input('text');
    }
}
