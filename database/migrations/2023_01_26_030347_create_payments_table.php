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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();

            /**
             * foreign keys
             * 
             */
            $table->unsignedBigInteger('process_by');
            $table->foreign('process_by')->references('id')->on('users')->cascadeOnDelete();

            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('organisation_id')->constrained()->cascadeOnDelete();

            $table->unsignedBigInteger('refund_by')->nullable();
            $table->foreign('refund_by')->references('id')->on('users')->cascadeOnDelete();

            /**
             * end of foreign keys
             */

            $table->string('status');
            $table->double('amount', 8, 2);
            $table->longText('description');
            $table->date('date');
            $table->date('process_date');
            $table->boolean('refund')->nullable();
            $table->double('refund_amount', 8, 2);
            $table->string('refund_reason')->nullable();
            $table->double('credits_used', 8, 2)->nullable()->default(0.00);
            $table->string('transaction_id')->nullable();

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
        Schema::dropIfExists('payments');
    }
};
