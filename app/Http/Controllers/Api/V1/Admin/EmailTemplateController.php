<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreEmailTemplateRequest;
use App\Http\Requests\Admin\UpdateEmailTemplateRequest;
use App\Http\Resources\EmailTemplateResource;
use App\Models\EmailTemplate;
use App\Models\Organisation;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class EmailTemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        \abort_if(!auth()->user()->can('access email_template'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $perPage = $request->has('perPage') ? $request->input('perPage') : 10;

        $emailTemplateTableName = app(EmailTemplate::class)->getTable();
        $organisationTableName = app(Organisation::class)->getTable();

        return DB::table('email_templates')
            ->where(function ($query) use (
                $request,
                $emailTemplateTableName,
                $organisationTableName
            ) {
                $s = $request->input('query');
                $query->when($request->has('query'), function ($query) use (
                    $s,
                    $emailTemplateTableName,
                    $organisationTableName
                ) {
                    $query->where($emailTemplateTableName . '.status', '=', $s)
                        ->orWhere($emailTemplateTableName . '.name', 'like', '%' . $s . '%')
                        ->orWhere($emailTemplateTableName . '.subject', 'like', '%' . $s . '%')
                        ->orWhere($emailTemplateTableName . '.body', 'like', '%' . $s . '%')
                        ->orWhere($emailTemplateTableName . '.attachments', 'like', '%' . $s . '%')
                        ->orWhere(DB::raw(
                            'case when ' . $emailTemplateTableName . '.default = 1 then "true" when ' .
                                $emailTemplateTableName . '.default = 0 then "false" end'
                        ), 'like', '%' . $s . '%')
                        ->orWhere($organisationTableName . '.name', 'like', '%' . $s . '%');
                });
            })
            ->leftJoin(
                $organisationTableName . ' as organisation',
                $emailTemplateTableName . '.organisation_id',
                '=',
                'organisation.id',
            )->select([
                $emailTemplateTableName . '.*',
                'organisation.name as organisation'
            ])
            ->orderBy($emailTemplateTableName . '.subject', 'ASC')
            ->paginate($perPage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmailTemplateRequest $request)
    {
        \abort_if(!auth()->user()->can('store email_template'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $emailTemplate = EmailTemplate::create($request->validated());

        return (new EmailTemplateResource($emailTemplate))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(EmailTemplate $emailTemplate)
    {
        \abort_if(!auth()->user()->can('show email_template'), Response::HTTP_FORBIDDEN, 'Unauthorized');
        return (new EmailTemplateResource($emailTemplate->load(['organisation'])));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEmailTemplateRequest $request, EmailTemplate $emailTemplate)
    {
        \abort_if(!auth()->user()->can('update email_template'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $emailTemplate->update($request->validated());

        return (new EmailTemplateResource($emailTemplate))
            ->response()
            ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(EmailTemplate $emailTemplate)
    {
        \abort_if(!auth()->user()->can('destroy email_template'), Response::HTTP_FORBIDDEN, 'Unauthorized');

        $emailTemplate->delete();

        return response('email template deleted', 204);
    }
}
