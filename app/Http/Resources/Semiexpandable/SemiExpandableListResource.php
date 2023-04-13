<?php

namespace App\Http\Resources\Semiexpandable;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SemiExpandableListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }
}
