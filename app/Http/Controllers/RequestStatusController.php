<?php

namespace App\Http\Controllers;

use App\Models\Request as ModelsRequest;
use App\Models\RequestStatus;
use App\Models\Status;
use App\Models\Translator;
use Illuminate\Http\Request;

class RequestStatusController extends Controller
{
    public function store(Request $request)
    {
        $newRequestStatus = RequestStatus::create([
            'request_id' => $request->requestId,
            'translator_id' => $request->translatorId,
            'status_id' => 6,
            'invitation_sent_at' => now()
        ]);

        return 'Succesfully created.';
    }

    public function edit(Request $request)
    {
        $editedRequestStatus = RequestStatus::findOrFail($request->requestStatusId);
        $editedRequest = ModelsRequest::findOrFail($editedRequestStatus->request_id);

        switch ($request->action) {
            case 'accept': 
                $editedRequestStatus->accepted_at = now();
                $editedRequestStatus->expires_at = now()->addHours(24);
                $editedRequestStatus->status_id = 3; //Offer sent by translators
                break;
            case 'decline':
                $editedRequestStatus->declined_at = now();
                $editedRequestStatus->status_id = 5; //Invitation declined by translators
                break;
            case 'extend':
                $editedRequestStatus->expires_at = now()->addHours(24);
                $editedRequestStatus->status_id = 4; //Offer extended by translators
                break;
            case 'revoke':
                $editedRequestStatus->revoked_at = now();
                $editedRequestStatus->status_id = 7; //Invitation revoked by users
                break;
            case 'confirm':
                $editedRequestStatus->confirmed_at = now();
                $editedRequestStatus->status_id = 1; //Invitation revoked by users
                $editedRequest->status = 1;
                $editedRequest->translator_id = $editedRequestStatus->translator_id;
                break;
            case 'turn down':
                $editedRequestStatus->turned_down_at = now();
                $editedRequestStatus->status_id = 2; //Invitation revoked by users
                break;
        }

        $editedRequestStatus->save();
        $editedRequest->save();

        return 'Successfully edited';
    }
}
