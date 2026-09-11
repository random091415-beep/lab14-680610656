import ModalRegister from "../components/ModalRegister";
import { useState } from "react";

export default function HomePage() {
  //6.1. useState คุมการแสดง modal เริ่มที่ false (ปิดอยู่)
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="col-12 mt-4 p-0">
      <div className="container text-center">
        <h2> Wellcome To CMU Marathon</h2>
        <div>
          <img src="/marathonrun.png" alt="Logo CMU Marathon" />
        </div>
        <button
          type="button"
          className="m-4 btn btn-primary"
          onClick={() => setShowModal(true)}>
          Register
        </button>
        {showModal && <ModalRegister onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}
