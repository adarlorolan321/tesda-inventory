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
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('service_id')->nullable()->constrained()->cascadeOnDelete();
            $table->foreignId('organisation_id')->constrained()->cascadeOnDelete();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->time('start_time')->nullable();
            $table->time('end_time')->nullable();
            $table->string('days')->nullable();
            $table->boolean('repeat')->default(false);
            $table->integer('capacity')->nullable();
            $table->string('price_type')->nullable();
            $table->double('price', 8, 2)->default(0.00);
            $table->foreignId('venue_id')->nullable()->constrained()->cascadeOnDelete();
            $table->string('status')->default('Active');

            $table->unsignedBigInteger('coach_id')->nullable();
            $table->foreign('coach_id')->references('id')->on('users')->onDelete('cascade');

            $table->string('additional_coach')->nullable();
            $table->boolean('default_email')->default(false);
            $table->longText('custom_email_text')->nullable();
            $table->longText('custom_email_subject')->nullable();
            $table->integer('enrolments')->nullable();
            $table->text('tags')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('classes');
    }
};
