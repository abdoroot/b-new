<?php

return [
    'enabled' => env('HUBSPOT_ENABLED', false),
    'access_token' => env('HUBSPOT_ACCESS_TOKEN'),
    'base_url' => env('HUBSPOT_BASE_URL', 'https://api.hubapi.com'),
    'timeout' => env('HUBSPOT_TIMEOUT', 15),
];
