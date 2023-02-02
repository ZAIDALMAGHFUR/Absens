<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\AbsensiController;
use App\Http\Controllers\JabatanController;
use App\Http\Controllers\PresensController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KariawanController;
use App\Http\Controllers\PresenceController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HariliburController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::middleware(['auth', 'OnlyAdmin', ])->group(function () {
    //dashboard route
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    //jabatan route
    Route::get('/jabatan', [JabatanController::class, 'index'])->name('jabatan');
    Route::get('/addjabatan', [JabatanController::class, 'addjabatan'])->name('addjabatan');
    Route::post('/storejabatan', [JabatanController::class, 'store'])->name('storejabatan');
    Route::get('/editjabatan/{id}', [JabatanController::class, 'edit'])->name('edit');
    Route::put('/updatejabatan/{id}', [JabatanController::class, 'update'])->name('update');
    Route::delete('/deletejabatan/{id}', [JabatanController::class, 'destroy'])->name('delete');

    //kariawan route
    Route::get('/kariawan', [KariawanController::class, 'index'])->name('kariawan');
    Route::get('/addkariawan', [KariawanController::class, 'addkariawan'])->name('addkariawan');
    Route::post('/storekariawan', [KariawanController::class, 'store'])->name('storekariawan');
    Route::get('/editkariawan/{id}', [KariawanController::class, 'edit'])->name('editkariawan');
    Route::put('/updatekariawan/{id}', [KariawanController::class, 'update'])->name('updatekariawan');
    Route::delete('/deletekariawan/{id}', [KariawanController::class, 'destroy'])->name('deletekariawan');
    Route::get('users/export/', [KariawanController::class, 'export']);

    // Route::post('/search', [SearchController::class])->name('search');


    //Hari Libur
    Route::get('/harilibur', [HariliburController::class, 'index'])->name('harilibur');
    Route::get('/addharilibur', [HariliburController::class, 'addharilibur'])->name('addharilibur');
    Route::post('/storeharilibur', [HariliburController::class, 'store'])->name('storeharilibur');
    Route::get('/editharilibur/{id}', [HariliburController::class, 'edit'])->name('editharilibur');
    Route::put('/updateharilibur/{id}', [HariliburController::class, 'update'])->name('updateharilibur');
    Route::delete('/deleteharilibur/{id}', [HariliburController::class, 'destroy'])->name('deleteharilibur');

    //Create Absensi
    Route::get('/absensi', [AbsensiController::class, 'index'])->name('absensi');
    Route::get('/AddAbsensi', [AbsensiController::class, 'AddAbsensi'])->name('AddAbsensi');
    Route::post('/storeabsensi', [AbsensiController::class, 'store'])->name('storeabsensi');
    Route::get('/editabsensi/{id}', [AbsensiController::class, 'edit'])->name('editabsensi');
    Route::put('/updateabsensi/{id}', [AbsensiController::class, 'update'])->name('updateabsensi');
    Route::delete('/deleteabsensi/{id}', [AbsensiController::class, 'destroy'])->name('deleteabsensi');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::get('/profile', [ProfileController::class, 'user'])->name('profile.user');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::patch('/profile', [ProfileController::class, 'update1'])->name('profile.update1');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'OnlyAdmin', ])->group(function () {
    // presences (kehadiran)
    Route::resource('/presences', PresenceController::class)->only(['index']);
    Route::get('/presences/{attendance}', [PresenceController::class, 'show'])->name('presences.show');
    // not present data
    Route::get('/presences/{attendance}/not-present', [PresenceController::class, 'notPresent'])->name('presences.not-present');
    Route::post('/presences/{attendance}/not-present', [PresenceController::class, 'notPresent']);
    // present (url untuk menambahkan/mengubah user yang tidak hadir menjadi hadir)
    Route::post('/presences/{attendance}/present', [PresenceController::class, 'presentUser'])->name('presences.present');
    Route::post('/presences/{attendance}/acceptPermission', [PresenceController::class, 'acceptPermission'])->name('presences.acceptPermission');
    // employees permissions

    Route::get('/presences/{attendance}/permissions', [PresenceController::class, 'permissions'])->name('presences.permissions');
    Route::get('/presences/export', [PresenceController::class, 'export'])->name('presences.export');
});

Route::middleware(['auth', 'OnlyUser'])->name('home.')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('index');
    // desctination after scan qrcode
    // Route::post('/absensi/qrcode', [HomeController::class, 'sendEnterPresenceUsingQRCode'])->name('sendEnterPresenceUsingQRCode');
    // Route::post('/absensi/qrcode/out', [HomeController::class, 'sendOutPresenceUsingQRCode'])->name('sendOutPresenceUsingQRCode');

    Route::get('/absensi/{attendance}', [HomeController::class, 'show'])->name('show');
    Route::post('/absensi/{attendance}/minta-izin', [HomeController::class, 'requestPermission'])->name('minta-izin');
    Route::post('/absensi/{attendance}/hadir', [HomeController::class, 'sendEnterPresence'])->name('sendEnterPresence');
    Route::post('/absensi/{attendance}/pulang', [HomeController::class, 'sendOutPresence'])->name('sendOutPresence');
    Route::get('/absensi/{attendance}/permission', [HomeController::class, 'permission'])->name('permission');
});

require __DIR__ . '/auth.php';