<?php

namespace App\Http\Controllers;

use App\Mail\ContactMe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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

        Mail::to($email)->send(new ContactMe($name, $email, $text));

        return redirect(route('home'))->with('message', 'Email inviata correttamente');
    }
}
