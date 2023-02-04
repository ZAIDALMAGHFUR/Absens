<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Exception;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    public const ADMIN_ROLE_ID = 1;
    public const OPERATOR_ROLE_ID = 2;
    public const USER_ROLE_ID = 3;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
        'position_id',
        'phone',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    public function scopeOnlyEmployees($query)
    {
        return $query->where('role_id', self::USER_ROLE_ID);
    }

    public function isAdmin()
    {
        return $this->role_id === self::ADMIN_ROLE_ID;
    }

    public function isOperator()
    {
        return $this->role_id === self::OPERATOR_ROLE_ID;
    }

    public function isUser()
    {
        return $this->role_id === self::USER_ROLE_ID;
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            if (static::where('email', $user->email)->count() > 0) {
                throw new Exception('User email already exists');
            }
        });
    }
}