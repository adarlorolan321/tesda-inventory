<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewColumnsAtTableOrganisationsss extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('organisations', function (Blueprint $table) {
            $table->string('stripe_key')->nullable();
            $table->string('stripe_secret')->nullable();
            $table->string('xero_access_token')->nullable();
            $table->string('xero_refresh_token')->nullable();
            $table->string('xero_tenant_id')->nullable();
            $table->TIMESTAMP('token_last_refreshed')->nullable();
            $table->BOOLEAN('xero_connected')->nullable();
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
            $table->dropColumn('stripe_key');
            $table->dropColumn('stripe_secret');
            $table->dropColumn('xero_access_token');
            $table->dropColumn('xero_refresh_token');
            $table->dropColumn('xero_tenant_id');
            $table->dropColumn('token_last_refreshed');
            $table->dropColumn('xero_connected');
        });
    }
}
