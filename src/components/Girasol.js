import "./Girasol.css";
import Botones from "./Botones";
function Girasol() {
  return (
    <body>
      <div className="flower-container">
        <div class="flower">
          <div class="mid"></div>
          <div class="Petal1 p1"></div>
          <div class="Petal1 p2"></div>
          <div class="Petal1 p3"></div>
          <div class="Petal1 p4"></div>
          <div class="Petal2 p1"></div>
          <div class="Petal2 p2"></div>
          <div class="Petal2 p3"></div>
          <div class="Petal2 p4"></div>
          <div class="Petal3 p1"></div>
          <div class="Petal3 p2"></div>
          <div class="Petal3 p3"></div>
          <div class="Petal3 p4"></div>
          <div class="stalk"></div> {/* Nuevo elemento para el tallo */}
          <div class="leaf"></div> {/* Hoja */}
          <div class="text-below">Con Cariño, para Lu 🌻</div>
        </div>
        <Botones />
      </div>
    </body>
  );
}

export default Girasol;
