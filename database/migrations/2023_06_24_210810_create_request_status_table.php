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
        Schema::create('request_status', function (Blueprint $table) {
            $table->id();
            $table->foreignId('request_id');
            $table->foreignId('translator_id')->nullable();
            $table->foreignId('status_id')->nullable();
            $table->timestamp('invitation_sent_at');
            $table->timestamp('revoked_at')->nullable();
            $table->timestamp('accepted_at')->nullable();
            $table->timestamp('declined_at')->nullable();
            $table->timestamp('confirmed_at')->nullable();
            $table->timestamp('turned_down_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_status');
    }
};
