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
        // Schema::create('timeslot_translator', function (Blueprint $table) {
        //     $table->id();
        //     $table->foreignId('timeslot_id');
        //     $table->foreignId('translator_id');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('timeslot_translator');
    }
};
