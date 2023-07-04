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
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('translator_id')->nullable();
            $table->string('title');
            $table->text('description');
            $table->foreignId('status')->nullable();
            $table->date('date');
            $table->time('from_time');
            $table->time('till_time');
            $table->foreignId('from_language_id');
            $table->foreignId('to_language_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('requests');
    }
};
