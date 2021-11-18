import React from "react";
import "./SectiuneMiddle.scss";

function SectiuneMiddle() {
  return (
    <>
      <div className="container_total">
        <div className="background_color1">
        <div className="content_middle1">
          <div className="container_left">
            <div className="img">
              <img
                className="costum_popular"
                src="images/costum_popular.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="container_right">
            <div className="text">
              <h1> Costume populare autentice romanesti.</h1>
              <p className="text_costum_popular">
                {" "}
                Costumele populare românești se pot împărți în șapte regiuni
                folclorice. Mai detaliat, costumele populare românești se pot
                clasifica pe zone etnografice, numărul zonelor variind între 40
                și 120, totul depinzând de persoana care face împărțirea și de
                criteriile folosite. Confecționarea costumului popular românesc
                a pornit de la materii prime produse în gospodăriile țăranilor,
                dar a evoluat odată cu trecerea timpului, reprezentând azi o
                adevărata măiestrie atât în obținerea și decorarea țesăturilor
                cât și a broderiilor.Portul popular are aceeași structură pe tot
                teritoriul țării dar se deosebește de la o regiune la alta prin
                amănunte cum ar fi croiala, forma și culoarea. Cele șapte mari
                regiuni folclorice sunt: Transilvania Câmpiile de vest: Câmpia
                Mureșului Inferior, Câmpia Crișurilor{" "}
              </p>
            </div>
          </div>
        </div>
        </div>
        <div
          className="background_fundal_drapel"
          style={{ backgroundImage: " url('/images/cascada_bigar.jpg') " }}
        ></div>

        <div className="cabana_bran">
          <div className="content_cabana_bran">
            <h1> Tărâm de poveste la cabana Bran! </h1>
            <div className="wrap">
              <div className="text_bran">
                <p>
                  {" "}
                  Situat intr-o zona liniștită dar aprope de centrul Branului
                  dar si de centrele oraselor Zarnesti si Rasnov, Cuibul
                  Braneanului va pune la dispozitie 3 dormitoare cu bai proprii,
                  un living spatios cu semineu, o bucatarie complet utilata,
                  terasa, gratar, loc de joaca pentru copii, totul pentru a va
                  face șederea cât mai plăcută. Interiorul este luminos,
                  amenajat minimalist, în culori deschise, cu mult bun gust. Vei
                  găsi eleganță, stil și rafinament. Toate obiectele de decor
                  sunt de bună calitate și vă vor da sentimentul că mai frumos
                  de atât nu se poate: paturi din bârne, scări plutitoare.
                </p>
              </div>
              <div className="img_bran">
                <img src="images/cabana_bran.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ..... */}
    </>
  );
}

export default SectiuneMiddle;
