<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewColumnsAtTableUserss extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('organisation_id')->nullable();
            $table->foreign('organisation_id', 'organisation_fk_5938024')->references('id')->on('organisations');
        });
    }
}
