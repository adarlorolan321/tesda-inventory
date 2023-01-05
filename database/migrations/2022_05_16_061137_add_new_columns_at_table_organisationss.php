<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewColumnsAtTableOrganisationss extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('organisations', function (Blueprint $table) {
            $table->string('from_name')->nullable();
            $table->string('reply_to_email')->nullable();
            $table->string('signature')->nullable();
            $table->BOOLEAN('is_smtp')->nullable();
            $table->string('from_email')->nullable();
            $table->string('smtp_host')->nullable();
            $table->string('smtp_username')->nullable();
            $table->string('smtp_password')->nullable();
            $table->string('smtp_port')->nullable();
            $table->string('smtp_security')->nullable();
            $table->string('sms_from')->nullable();
            $table->string('twilio_secret_id')->nullable();
            $table->string('twilio_auth_token')->nullable();
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
            $table->dropColumn('from_name');
            $table->dropColumn('reply_to_email');
            $table->dropColumn('signature');
            $table->dropColumn('is_smtp');
            $table->dropColumn('from_email');
            $table->dropColumn('smtp_host');
            $table->dropColumn('smtp_username');
            $table->dropColumn('smtp_password');
            $table->dropColumn('smtp_port');
            $table->dropColumn('sms_from');
            $table->dropColumn('twilio_secret_id');
            $table->dropColumn('twilio_auth_token');
        });
    }
}
