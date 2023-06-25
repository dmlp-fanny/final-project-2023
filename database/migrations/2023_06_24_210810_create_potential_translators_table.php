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
        Schema::create('potential_translators', function (Blueprint $table) {
            $table->id();
            $table->foreignId('request_id');
            $table->foreignId('translator_id');
            $table->string('status')->nullable();
            $table->timestamps('revoked_at');
            $table->timestamps('accepted_at');
            $table->timestamps('denied_at');
            $table->timestamps('expires_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('potential_translators');
    }
};
