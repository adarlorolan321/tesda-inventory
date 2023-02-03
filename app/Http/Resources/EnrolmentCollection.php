<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class EnrolmentCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->items(),
            'pagination-links' => [
                'current_page' => $this->currentPage(),
                'last_page' => $this->lastPage(),
                "next_page_url" => $this->nextPageUrl(),
                "per_page" => $this->perPage(),
                "prev_page_url" => $this->previousPageUrl(),
                "total" => $this->total()
            ],
        ];
    }
}
