<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::get('bookables', function(Request $request){
//    return Bookable::all();
//});

//{optional?}
//Route::get('bookables/{id}', function(Request $request, $id){
//    return Bookable::findOrFail($id);
//});

//Route::get('bookables', 'Api\BookableController@index');
//Route::get('bookables/{id}', 'Api\BookableController@show');

//   ->only(['index', 'show']); pwede rin except
Route::apiResource('bookables', 'Api\BookableController');
Route::get('bookables/{bookable}/availability', 'Api\BookableAvailabilityController')->name('bookables.availability.show');
Route::get('bookables/{bookable}/reviews', 'Api\BookableReviewController')->name('bookables.reviews.show');
Route::get('bookables/{bookable}/price', 'Api\BookablePriceController')->name('bookables.price.show');
Route::get('/booking-by-review/{review}', 'Api\BookingByReviewController')->name('booking.by-review.show');

Route::apiResource('reviews', 'Api\ReviewController')->only(['show', 'store']);
