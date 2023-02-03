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
            if (Schema::hasColumn('organisations', 'primary_user')) {
                $table->dropColumn('primary_user');
            }

            if (!Schema::hasColumn('organisations', 'primary_user_id')) {
                $table->unsignedBigInteger('primary_user_id');
                $table->foreign('primary_user_id')->references('id')->on('users')->cascadeOnDelete();
            }
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
            if (!Schema::hasColumn('organisations', 'primary_user')) {
                $table->string('primary_user')->nullable();
            }

            if (Schema::hasColumn('organisations', 'primary_user_id')) {
                $table->dropForeign('organisations_primary_user_id_foreign');
                $table->dropColumn('primary_user_id');
            }
        });
    }
};
