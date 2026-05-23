<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Polyfill for PHP 8.4 request_parse_body
if (!function_exists('request_parse_body')) {
    function request_parse_body() {
        return [$_POST, $_FILES];
    }
}
if (!class_exists('RequestParseBodyException')) {
    class RequestParseBodyException extends Exception {}
}

// Bootstrap Laravel and handle the request...
/** @var Application $app */
$app = require_once __DIR__.'/../bootstrap/app.php';

$app->handleRequest(Request::capture());
