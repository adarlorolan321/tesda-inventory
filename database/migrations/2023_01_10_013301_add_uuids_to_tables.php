<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('organisations', function (Blueprint $table) {
            $table->uuid()->nullable();
        });
        Schema::table('services', function (Blueprint $table) {
            $table->uuid()->nullable();
        });
        Schema::table('venues', function (Blueprint $table) {
            $table->uuid()->nullable();
        });
        Schema::table('classes', function (Blueprint $table) {
            $table->uuid()->nullable();
        });
        Schema::table('session_model', function (Blueprint $table) {
            $table->uuid()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('organisations', function (Blueprint $table) {
            $table->dropColumn('uuid');
        });
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn('uuid');
        });
        Schema::table('venues', function (Blueprint $table) {
            $table->dropColumn('uuid');
        });
        Schema::table('classes', function (Blueprint $table) {
            $table->dropColumn('uuid');
        });
        Schema::table('session_model', function (Blueprint $table) {
            $table->dropColumn('uuid');
        });
    }
};
