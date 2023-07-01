<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = [
            'Confirmed', /** Both sides agreed on */
            'Turned Down', /** The offers of translators, By users */
            'Offer Sent', /** By translators */
            'Offer Extended', /** By translators */
            'Declined', /** By translators */
            'Invitation Sent', /** When invitations has been sent, By users */
            'Revoked', /** When invitations has been sent, By users */
        ];

        foreach ($statuses as $status) {
            Status::create(['status_name' => $status]);
        }
    }
}
