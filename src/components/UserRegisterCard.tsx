import type { Registrant } from "../libs/Registrant";

export default function UserRegisterCard({
  fullName,
  gender,
  plan,
  total,
  extraItem,
}: Registrant) {
  const genderU = gender === "male" ? "👨 Male" : "👩 Female";
  const extraItemIcons: Record<string, string> = {
    bottle: "🍼 Bottle",
    shoes: "👟 Shoes",
    cap: "🧢 Cap",
  };
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="row align-items-center">
          {/* ชื่อและรายละเอียด */}
          <div className="col-lg-6">
            <h5 className="card-title m-0">{fullName}</h5>
            <p className="card-text m-0 text-muted">
              {plan} · {genderU}
            </p>

            {/* Extra Items */}
            {extraItem.length > 0 && (
              <div className="mt-1">
                {extraItem.map((item) => (
                  <span key={item} className="badge bg-light text-dark border">
                    {extraItemIcons[item]}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="col-lg-6 text-end">
            <h5 className="text m-0">{total.toLocaleString()} THB</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
