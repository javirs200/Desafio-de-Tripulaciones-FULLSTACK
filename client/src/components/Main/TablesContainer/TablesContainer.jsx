import React from "react";
import { useState, useEffect } from 'react'
import TableInputFactura from "./TableInputFactura/TableInputFactura"
import SelectPropuesta from "./SelectPropuesta/SelectPropuesta";
import TablePropuesta from "./TablePropuesta/TablePropuesta"
import Nav from "../Nav/Nav"

import './TablesContainer.css'


const TablesContainer = () => {

//_________________________ ESTADOS ENERGIA ______________________________________


  //ESTADO PATA METER EL CONSUMO ANUAL (INPUTS EN TABLA, DE FORMA MANUAL SI NO HAY WEB SCRAPING DE CANDELA)
  const [inputConsumoAnual, setInputConsumoAnual] = useState({
    consumo_anual_p1 : 0,
    consumo_anual_p2 : 0,
    consumo_anual_p3 : 0,
    consumo_anual_p4 : 0,
    consumo_anual_p5 : 0,
    consumo_anual_p6 : 0
  });
 
  const [inputConsumo, setInputConsumo] = useState({
    consumo_factura_p1 : 0,
    consumo_factura_p2 : 0,
    consumo_factura_p3 : 0,
    consumo_factura_p4 : 0,
    consumo_factura_p5 : 0,
    consumo_factura_p6 : 0
  });
  //ESTADO PATA METER EL PRECIO ANUAL (INPUTS EN TABLA, DE FORMA MANUAL SI NO HAY WEB SCRAPING DE CANDELA)
  const [inputPrecioAnual, setImputPrecioAnual] = useState({
    precio_anual_p1 : 0.281599,  
    precio_anual_p2 : 0.268394,  
    precio_anual_p3 : 0.263138,  
    precio_anual_p4 : 0.242581, 
    precio_anual_p5 : 0.212685,  
    precio_anual_p6 : 0.234854  
  });


  const [inputPrecioMes, setImputPrecioMes] = useState({
    precio_factura_p1 : 0,
    precio_factura_p2 : 0,
    precio_factura_p3 : 0,
    precio_factura_p4 : 0,
    precio_factura_p5 : 0,
    precio_factura_p6 : 0
  });


//_________________________ ESTADOS POTENCIA ______________________________________

  const [inputPotenciaContratada, setPotenciaContratada] = useState({
    potencia_contratada_p1: 0,
    potencia_contratada_p2: 0,
    potencia_contratada_p3: 0,
    potencia_contratada_p4: 0,
    potencia_contratada_p5: 0,
    potencia_contratada_p6: 0,
  });
  
  const [inputPotenciaFacturada, setPotenciaFacturada] = useState({
    potencia_facturada_p1 : 0,
    potencia_facturada_p2 : 0,
    potencia_facturada_p3 : 0,
    potencia_facturada_p4 : 0,
    potencia_facturada_p5 : 0,
    potencia_facturada_p6 : 0
    
  });
  
  const [inputPrecioPotencia, setPrecioPotencia] = useState({
    precio_potencia_p1 : 0,
    precio_potencia_p2 : 0,
    precio_potencia_p3 : 0,
    precio_potencia_p4 : 0,
    precio_potencia_p5 : 0,
    precio_potencia_p6 : 0
    
  });


  //__________________ ESTADOS OTROS CAMPOS DE LA FACTURA/PROPUESTA______________________________

  const [restoDeCampos, setRestoDeCampos] = useState({
    dias_facturacion: 0,
    energia_reactiva: 0,
    impuesto_electrico:0,
    alquiler_equipo: 0,
    iva: 5
  }

  );
  const [valorOtrosMes, setValorOtrosMes] = useState(0);
  const [valorOtrosAnual, setValorOtrosAnual] = useState(0);
  const [importeTotalFactura, setImporteTotalFactura] = useState(0);


  return (
    <>
    <Nav/>
      <TableInputFactura
        inputConsumoAnual={inputConsumoAnual} 
        setInputConsumoAnual={setInputConsumoAnual}
        inputConsumo={inputConsumo}
        setInputConsumo={setInputConsumo}
        inputPrecioAnual={inputPrecioAnual}
        setImputPrecioAnual={setImputPrecioAnual}
        inputPrecioMes={inputPrecioMes}
        setImputPrecioMes={setImputPrecioMes}
        inputPotenciaContratada={inputPotenciaContratada}
        setPotenciaContratada={setPotenciaContratada}
        inputPotenciaFacturada={inputPotenciaFacturada}
        setPotenciaFacturada={setPotenciaFacturada}
        inputPrecioPotencia={inputPrecioPotencia}
        setPrecioPotencia={setPrecioPotencia}
        valorOtrosMes={valorOtrosMes}
        setValorOtrosMes={setValorOtrosMes}
        valorOtrosAnual ={valorOtrosAnual}
        setValorOtrosAnual={setValorOtrosAnual}
        restoDeCampos={restoDeCampos}
        setRestoDeCampos={setRestoDeCampos}
        importeTotalFactura={importeTotalFactura}
        setImporteTotalFactura={setImporteTotalFactura}
   
      />
      <SelectPropuesta
        importeTotalFactura={importeTotalFactura}
      />
      <TablePropuesta
        inputConsumoAnual={inputConsumoAnual} 
        inputConsumo={inputConsumo}
        inputPotenciaContratada={inputPotenciaContratada}
        inputPotenciaFacturada={inputPotenciaFacturada}
        valorOtrosMes={valorOtrosMes}
        valorOtrosAnual={valorOtrosAnual}
        restoDeCampos={restoDeCampos}
      />
      
    </>
  );
};

export default TablesContainer;
