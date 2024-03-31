<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([

            'name' => 'admin',

            'email' =>'admin@gmail.com',

            'email_verified_at' => now(),

            'password' =>  '$2y$12$5PLZQpXlnS.jxLymf9prN.k.HV/X7TLqPqC/mI0G0ek4p0MAA6KO6',

            'remember_token' => Str::random(10),

        ])->assignRole('admin');
        User::create([

            'name' => 'seller',

            'email' =>'seller@gmail.com',

            'email_verified_at' => now(),

            'password' =>  '$2y$12$5PLZQpXlnS.jxLymf9prN.k.HV/X7TLqPqC/mI0G0ek4p0MAA6KO6',

            'remember_token' => Str::random(10),

        ])->assignRole('seller');
    }
}
