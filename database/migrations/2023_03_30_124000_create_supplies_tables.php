<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('supplies', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->string('type');
            $table->string('description');
            $table->integer('stocks')->default(0);
            $table->integer('quantity')->default(0);
            $table->integer('unit_price')->default(0);
            $table->integer('total_price')->default(0);
            $table->date('date_purchased');
            $table->string('item_code')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('supplies', function (Blueprint $table) {
            Schema::dropIfExists('supplies');
        });
    }
};
