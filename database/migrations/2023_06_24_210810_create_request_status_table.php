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
            $table->foreignId('translator_id');
            $table->string('status')->nullable();
            $table->timestamp('created_at');
            $table->dateTime('revoked_at')->nullable();
            $table->dateTime('accepted_at')->nullable();
            $table->dateTime('denied_at')->nullable();
            $table->dateTime('expires_at');
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
