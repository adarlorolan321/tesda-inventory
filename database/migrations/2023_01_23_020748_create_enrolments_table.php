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
        Schema::create('enrolments', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('created_by');
            $table->foreign('created_by')->references('id')->on('users')->cascadeOnDelete();

            $table->foreignId('class_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('student_id')->nullable()->constrained()->cascadeOnDelete();
            $table->foreignId('organisation_id')->constrained()->cascadeOnDelete();

            $table->string('payment_status')->nullable();
            $table->string('status');
            $table->longText('lessons')->nullable();
            $table->date('cancel_date')->nullable();
            $table->date('cancel_on')->nullable();
            $table->string('cancel_reason')->nullable();

            $table->unsignedBigInteger('cancel_by')->nullable();
            $table->foreign('cancel_by')->references('id')->on('users')->cascadeOnDelete();

            $table->string('discount_type')->nullable();
            $table->integer('discount')->nullable();

            $table->uuid()->nullable();

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
        Schema::dropIfExists('enrolments');
    }
};
