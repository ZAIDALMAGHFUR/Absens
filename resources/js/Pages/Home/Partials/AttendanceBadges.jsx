import React from "react";

export default function AttendanceBadges({ attendance }) {
    return (
        <>
            {attendance.data.is_holiday_today && (
                <span className="badge badge-success">Hari Libur</span>
            )}

            {attendance.data.is_start && (
                <span className="badge badge-primary">Jam Masuk</span>
            )}
            {attendance.data.is_end && (
                <span className="badge badge-warning">Jam Pulang</span>
            )}
            {!attendance.data.is_end && !attendance.data.is_start && (
                <span className="badge badge-error">Tutup</span>
            )}
        </>
    );
}
