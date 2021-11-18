import React from "react";
import Itemcard from "./Itemcard";
import "./Cards.scss";

function Cards() {
  return (
    <>
      <div className="cards_travell">
        <div className="cards_text_travel">
            <div className="text_container_al"></div>
          <h2 className="text_container_cards"> Destinații Turistice. </h2>
          <div className="items_cards">
            <Itemcard
              src="images/casa_poporului.jpg"
              text="Casa Poporului"
              label="Asd"
              path=" / "
              text_locatie="Bucuresti"
            
            />
            <Itemcard
              src="images/img_castel2.jpg"
              text="Catelul Bran"
              label="Asd"
              path="/info"
              text_locatie="Brasov"
              text_pret="9999, 03 lei"
            />
            <Itemcard
              src="images/cascada_bigar.jpg"
              text="Castelul Bigar"
              label="Asd"
              path="/info"
              text_locatie="Caraș-Severin"
              text_pret="2177, 3 lei"
            />
            <Itemcard
              src="images/castelul_de_lut.jpg"
              text="Castelul de lut"
              label="Asd"
              path="/info"
              text_locatie="Sibiu"
              text_pret="1583, 33 lei"
            />
            <Itemcard
              src="images/castelul_peles.jpg"
              text="Catelul Peles"
              label="Asd"
              path="/info"
              text_locatie="Sinaia"
              text_pret="1720, 00 lei"
            />

            <Itemcard
              src="images/castelul_corvinilor.jpg"
              text="Catelul Corvinilor"
              label="Asd"
              path="/info"
              text_locatie="Hunedoara"
              text_pret="4003, 23 lei"
            />
            <Itemcard
              src="images/castelul_cantacuzino.jpg"
              text="Catelul Cantacuzino."
              label="Asd"
              path="/info"
              text_locatie="Prahova"
              text_pret="2677, 93 lei"
            />

            <Itemcard
              src="images/castelul_banffy.jpg"
              text="Castelul Banffy – Bonțida. Castele din România."
              label="Asd"
              path="/info"
              text_locatie="Cluj"
              text_pret="6789, 22 lei"
            />

            <Itemcard
              src="images/cimitirul_vesel.jpg"
              text="Cimitirul vesel din Maramures."
              label="Asd"
              path="/info"
              text_locatie="Maramures"
              text_pret="7578, 23 lei"
            />
            <Itemcard
              src="images/mocanita.jpg"
              text="Mocanita, in Maramuresul frumos."
              label="Asd"
              path="/info"
              text_locatie="Maramures"
              text_pret="2446, 12 lei"
            />
            <Itemcard
              src="images/maramureseni.jpg"
              text="Maramures"
              label="Asd"
              path="/info"
              text_locatie="Maramures"
              text_pret="2679, 56 lei"
            />
            <Itemcard
              src="images/brasov.jpg"
              text="Telefon SAMSUNG Galaxy S21+ 5G, 256GB, 8GB RAM, Dual SIM, Phantom Black"
              label="Asd"
              path="/info"
              text_locatie="Brasov"
              text_pret="24, 23 lei"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
