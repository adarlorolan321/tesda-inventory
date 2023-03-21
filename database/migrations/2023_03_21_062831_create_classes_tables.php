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
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('service_id')->nullable()->constrained('services');
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->time('start_time')->nullable();
            $table->time('end_time')->nullable();
            $table->string('days')->nullable();
            $table->boolean('repeat')->default(0);
            $table->integer('capacity')->nullable();
            $table->string('price_type')->nullable();
            $table->decimal('price', 20, 2)->default(0);
            $table->foreignId('venue_id')->nullable()->constrained('venues');
            $table->string('status')->default('Active');
            $table->foreignId('coach_id')->nullable()->constrained('users');
            $table->string('additional_coach')->nullable();
            $table->string('default_email')->nullable();
            $table->longText('custom_email_text')->nullable();
            $table->string('custom_email_subject')->nullable();
            $table->integer('enrolments')->nullable();
            $table->longText('tags')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('classes', function (Blueprint $table) {
            Schema::dropIfExists('classes');
        });
    }
};
