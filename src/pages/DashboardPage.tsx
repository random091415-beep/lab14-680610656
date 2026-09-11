import UserRegisterCard from "../components/UserRegisterCard";
import type { Registrant } from "../libs/Registrant";
import { useEffect, useState } from "react";

const STORAGE_KEY = "lab14.forms";

function loadForms(): Registrant[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function DashboardPage() {
  const [registrants, setRegistrants] = useState<Registrant[]>([]);

  useEffect(() => {
    setRegistrants(loadForms());
  }, []);
  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      {/* Conditional Rendering + Render Component */}
      <p>ผู้ลงทะเบียนแล้ว ({registrants.length} คน)</p>

      {registrants.length > 0 ? (
        registrants
          .sort((a, b) => a.id - b.id)
          .map((r) => <UserRegisterCard key={r.id} {...r} />)
      ) : (
        <div className="alert alert-secondary">ยังไม่มีผู้ลงทะเบียน</div>
      )}
    </div>
  );
}
