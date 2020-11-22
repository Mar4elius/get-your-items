<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TripController extends Controller
{
    /**
     * Show 
     */

    public function index()
    {
        return Inertia::render('Trips');
    }
}
