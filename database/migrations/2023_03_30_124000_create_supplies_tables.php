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
            $table->string('stocks');
            $table->string('quantity');
            $table->string('unit_price');
            $table->string('total_price');
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
