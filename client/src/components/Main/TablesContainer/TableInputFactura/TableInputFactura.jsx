import { useState, useEffect } from 'react'
import './TableInputFactura.css'



function TablaInputFactura({
  inputConsumoAnual,
  setInputConsumoAnual,
  inputConsumo,
  setInputConsumo,
  inputPrecioAnual,
  setImputPrecioAnual,
  inputPrecioMes,
  setImputPrecioMes,
  inputPotenciaContratada,
  setPotenciaContratada,
  inputPotenciaFacturada,
  setPotenciaFacturada,
  inputPrecioPotencia,
  setPrecioPotencia
}) {


  //_______________________ ESTADOS ENERGIA __________________________________

  const [descuentoActual, setDescuentoActual] = useState(0);

  const [precioDescuentoActual, setPrecioDescuentoActual] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
  });

  const [totalPagoFactura, setTotalPagoFactura] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
  });

  const [totalPagoAnual, setTotalPagoAnual] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
  });

  //_______________________ ESTADOS  POTENCIA __________________________________

  const [precioPotenciaDescuento, setPrecioPotenciaDescuento] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0

  });

  const [totalPagoFacturaPotencia, setTotalPagoFacturaPotencia] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
  });

  const [totalPagoAnualPotencia, setTotalPagoAnualPotencia] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
  });

  //_________________ ESTADOS DE OTROS CAMPOS DE LA FACTURA___________________________
  const [diasFacturados, setDiasFacturados] = useState(0);


  //_______________________ FUNCIONES ENERGIA __________________________________



  const handleInputConsumo = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setInputConsumo({
      ...inputConsumo,
      [name]: value * 1,
    }

    );
  };

  const handleInputConsumoAnual = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setInputConsumoAnual({
      ...inputConsumoAnual,
      [name]: value * 1,
    }

    );
  };

  const handleInputPrecioMes = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setImputPrecioMes({
      ...inputPrecioMes,
      [name]: value * 1,
    });
  };

  const handleInputPrecioAnual = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setImputPrecioAnual({
      ...inputPrecioAnual,
      [name]: value * 1,
    });
  };

  const handleInputDescuentoActual = (e) => {
    const valor = e.target.value;

    // Actualizar el estado con el nuevo valor del input
    setDescuentoActual(valor*1);
  };

  //_______________________ FUNCIONES POTENCIA __________________________________

  const handleInputPotenciaContratada = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setPotenciaContratada({
      ...inputPotenciaContratada,
      [name]: value * 1,
    }

    );
  };

  const handleInputPotenciaFacturada = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setPotenciaFacturada({
      ...inputPotenciaFacturada,
      [name]: value * 1,
    }

    );
  };

  const handleInputPrecioPotencia = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setPrecioPotencia({
      ...inputPrecioPotencia,
      [name]: value * 1,
    }

    );
  };
  //_________________ FUNCIONES DE OTROS CAMPOS DE LA FACTURA___________________________

  const handleInputDiasFacturados = (e) => {

    const valor = e.target.value;

    // Actualizar el estado con el nuevo valor del input
    setDiasFacturados(valor*1);
  };

  // SUMATORIOS

  //__________ SUMATORIOS ENERGIA___________________

  useEffect(() => {
    setPrecioDescuentoActual({
      p1: inputPrecioMes.precio_factura_p1 - inputPrecioMes.precio_factura_p1 * (descuentoActual/100),
      p2: inputPrecioMes.precio_factura_p2 - inputPrecioMes.precio_factura_p2 * (descuentoActual/100),
      p3: inputPrecioMes.precio_factura_p3 - inputPrecioMes.precio_factura_p3 * (descuentoActual/100),
      p4: inputPrecioMes.precio_factura_p4 - inputPrecioMes.precio_factura_p4 * (descuentoActual/100),
      p5: inputPrecioMes.precio_factura_p5 - inputPrecioMes.precio_factura_p5 * (descuentoActual/100),
      p6: inputPrecioMes.precio_factura_p6 - inputPrecioMes.precio_factura_p6 * (descuentoActual/100),
    })
  }, [inputPrecioMes, descuentoActual]);

  useEffect(() => {
    setTotalPagoFactura({
      p1: inputConsumo.consumo_factura_p1 * precioDescuentoActual.p1,
      p2: inputConsumo.consumo_factura_p2 * precioDescuentoActual.p2,
      p3: inputConsumo.consumo_factura_p3 * precioDescuentoActual.p3,
      p4: inputConsumo.consumo_factura_p4 * precioDescuentoActual.p4,
      p5: inputConsumo.consumo_factura_p5 * precioDescuentoActual.p5,
      p6: inputConsumo.consumo_factura_p6 * precioDescuentoActual.p6,
    })

  }, [inputConsumo, precioDescuentoActual]);

  useEffect(() => {
    setTotalPagoAnual({
      p1: inputConsumoAnual.consumo_anual_p1 * (inputPrecioAnual.precio_anual_p1 - (inputPrecioAnual.precio_anual_p1 * (descuentoActual/100))) ,
      p2: inputConsumoAnual.consumo_anual_p2 * (inputPrecioAnual.precio_anual_p2 - (inputPrecioAnual.precio_anual_p2 * (descuentoActual/100))),
      p3: inputConsumoAnual.consumo_anual_p3 * (inputPrecioAnual.precio_anual_p3 - (inputPrecioAnual.precio_anual_p3 * (descuentoActual/100))),
      p4: inputConsumoAnual.consumo_anual_p4 * (inputPrecioAnual.precio_anual_p4 - (inputPrecioAnual.precio_anual_p4 * (descuentoActual/100))),
      p5: inputConsumoAnual.consumo_anual_p5 * (inputPrecioAnual.precio_anual_p5 - (inputPrecioAnual.precio_anual_p5 * (descuentoActual/100))),
      p6: inputConsumoAnual.consumo_anual_p6 * (inputPrecioAnual.precio_anual_p6 - (inputPrecioAnual.precio_anual_p6 * (descuentoActual/100))),
    })

  }, [inputConsumoAnual, inputPrecioAnual, descuentoActual]);


  //__________ SUMATORIOS POTENCIA___________________

  useEffect(() => {
    setPrecioPotenciaDescuento({
      p1: inputPrecioPotencia.precio_potencia_p1 * (1 - (descuentoActual/100)),
      p2: inputPrecioPotencia.precio_potencia_p2 * (1 - (descuentoActual/100)),
      p3: inputPrecioPotencia.precio_potencia_p3 * (1 - (descuentoActual/100)),
      p4: inputPrecioPotencia.precio_potencia_p4 * (1 - (descuentoActual/100)),
      p5: inputPrecioPotencia.precio_potencia_p5 * (1 - (descuentoActual/100)),
      p6: inputPrecioPotencia.precio_potencia_p6 * (1 - (descuentoActual/100)),
    })
  }, [inputPrecioPotencia, descuentoActual]);

  useEffect(() => {
    setTotalPagoFacturaPotencia({
      p1: inputPotenciaFacturada.potencia_facturada_p1 * precioPotenciaDescuento.p1 * diasFacturados,
      p2: inputPotenciaFacturada.potencia_facturada_p2 * precioPotenciaDescuento.p2 * diasFacturados,
      p3: inputPotenciaFacturada.potencia_facturada_p3 * precioPotenciaDescuento.p3 * diasFacturados,
      p4: inputPotenciaFacturada.potencia_facturada_p4 * precioPotenciaDescuento.p4 * diasFacturados,
      p5: inputPotenciaFacturada.potencia_facturada_p5 * precioPotenciaDescuento.p5 * diasFacturados,
      p6: inputPotenciaFacturada.potencia_facturada_p6 * precioPotenciaDescuento.p6 * diasFacturados
    })
  }, [inputPotenciaFacturada, precioPotenciaDescuento, diasFacturados]);

  useEffect(() => {
    setTotalPagoAnualPotencia({
      p1: inputPotenciaContratada.potencia_contratada_p1 * inputPrecioPotencia.precio_potencia_p1 * 365,
      p2: inputPotenciaContratada.potencia_contratada_p2 * inputPrecioPotencia.precio_potencia_p2 * 365,
      p3: inputPotenciaContratada.potencia_contratada_p3 * inputPrecioPotencia.precio_potencia_p3 * 365,
      p4: inputPotenciaContratada.potencia_contratada_p4 * inputPrecioPotencia.precio_potencia_p4 * 365,
      p5: inputPotenciaContratada.potencia_contratada_p5 * inputPrecioPotencia.precio_potencia_p5 * 365,
      p6: inputPotenciaContratada.potencia_contratada_p6 * inputPrecioPotencia.precio_potencia_p6 * 365
    })
  }, [inputPotenciaContratada, inputPrecioPotencia]);



  return (
    <>
      <section className='company'>
      <h4>COMPANÍA ACTUAL </h4>
    </section>

      <section >
        <table id='first_table'>
          
          <thead>
                      
            <tr>
              <th></th>
              <th className='article_title' colSpan={8}>Energía</th>
              <th className='article_title' colSpan={7}>Potencia</th>
            </tr>
          
            <tr></tr>
            {/* INPUTS ENERGIA */}
            <tr>
              <th className='tr_inputs'>FRANJA</th>
              <th className='tr_inputs'>CONSUMO ANUAL (kWh)</th>
              <th className='tr_inputs'>CONSUMO FACTURA ACTUAL (kWh)</th>
              <th className='tr_inputs'>PRECIOS ENERGIA ACTIVA MEDIA ANUAL (€/kWh)</th>
              <th className='tr_inputs'>PRECIOS ENERGIA ACTIVA MES DE FACTURACION (€/kWh)</th>
              <th className='tr_inputs'>DESCUENTO (%)</th>
              <th className='tr_inputs'>PRECIO CON DESCUENTO </th>
              <th className='tr_inputs'>TOTAL PAGO EN FACTURA</th>
              <th className='tr_inputs'>TOTAL PAGO ANUAL</th>

              {/* INPUTS POTENCIA */}

              <th className='tr_inputs'>POTENCIA CONTRATADA (kW)</th>
              <th className='tr_inputs'>POTENCIA FACTURADA (kW)</th>
              <th className='tr_inputs'>PRECIOS POTENCIA (€/kW/día)</th>
              <th className='tr_inputs'>DESCUENTO (%)</th>
              <th className='tr_inputs'>PRECIO CON DESCUENTO</th>
              <th className='tr_inputs'>TOTAL PAGO EN FACTURA	</th>
              <th className='tr_inputs'>TOTAL PAGO ANUAL</th>

            </tr>
          </thead>

          <tbody>
            <tr >
              <td>P1</td>
              <td><input type="number" name="consumo_anual_p1" step="0.000001" min="0" placeholder={inputConsumoAnual.consumo_anual_p1} onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p1" step="any" min="0" onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_anual_p1" step="any" min="0" placeholder={inputPrecioAnual.precio_anual_p1} onChange={handleInputPrecioAnual}></input> €</td>
              <td><input type="number" name="precio_factura_p1" step="any" min="0" onChange={handleInputPrecioMes}></input> €</td>
              <td className='input_descuento'><input type="number" name="descuento_actual" step="any" min="0" placeholder={descuentoActual} onChange={handleInputDescuentoActual}></input></td>
              <td>{precioDescuentoActual.p1} €</td>
              <td>{totalPagoFactura.p1} €</td>
              <td>{totalPagoAnual.p1} €</td>

              <td><input type="number" name="potencia_contratada_p1" step="any" min="0" onChange={handleInputPotenciaContratada}></input></td>
              <td><input type="number" name="potencia_facturada_p1" step="any" min="0" onChange={handleInputPotenciaFacturada}></input></td>
              <td><input type="number" name="precio_potencia_p1" step="any" min="0" onChange={handleInputPrecioPotencia}></input> €</td>
              <td className='input_descuento' ><input type="number" name="descuento_potencia" step="any" min="0" max="100" placeholder={descuentoActual} onChange={handleInputDescuentoActual}></input></td>
              <td>{precioPotenciaDescuento.p1} €</td>
              <td>{totalPagoFacturaPotencia.p1} €</td>
              <td>{totalPagoAnualPotencia.p1} €</td>
            </tr>
            <tr>
              <td>P2</td>
              <td><input type="number" name="consumo_anual_p2" step="any" min="0" placeholder={inputConsumoAnual.consumo_anual_p2} onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p2" step="any" min="0"  onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_anual_p2" step="any" min="0" placeholder={inputPrecioAnual.precio_anual_p2} onChange={handleInputPrecioAnual}></input> €</td>
              <td><input type="number" name="precio_factura_p2" step="any" min="0" onChange={handleInputPrecioMes}></input> €</td>
              <td className='input_descuento'></td>
              <td>{precioDescuentoActual.p2} €</td>
              <td>{totalPagoFactura.p2} €</td>
              <td>{totalPagoAnual.p2} €</td>

              <td><input type="number" name="potencia_contratada_p2" step="any" min="0" onChange={handleInputPotenciaContratada}></input></td>
              <td><input type="number" name="potencia_facturada_p2" step="any" min="0" onChange={handleInputPotenciaFacturada}></input></td>
              <td><input type="number" name="precio_potencia_p2" step="any" min="0" onChange={handleInputPrecioPotencia}></input> €</td>
              <td className='input_descuento'></td>
              <td>{precioPotenciaDescuento.p2} €</td>
              <td>{totalPagoFacturaPotencia.p2} €</td>
              <td>{totalPagoAnualPotencia.p2} €</td>
            </tr>
            <tr>
              <td>P3</td>
              <td><input type="number" name="consumo_anual_p3" step="any" min="0" placeholder={inputConsumoAnual.consumo_anual_p3} onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p3" step="any" min="0" onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_anual_p3" step="any" min="0" placeholder={inputPrecioAnual.precio_anual_p3} onChange={handleInputPrecioAnual}></input> €</td>
              <td><input type="number" name="precio_factura_p3" step="any" min="0" onChange={handleInputPrecioMes}></input> €</td>
              <td className='input_descuento'></td>
              <td>{precioDescuentoActual.p3} €</td>
              <td>{totalPagoFactura.p3} €</td>
              <td>{totalPagoAnual.p3} €</td>

              <td><input type="number" name="potencia_contratada_p3" step="any" min="0" onChange={handleInputPotenciaContratada}></input></td>
              <td><input type="number" name="potencia_facturada_p3" step="any" min="0" onChange={handleInputPotenciaFacturada}></input></td>
              <td><input type="number" name="precio_potencia_p3" step="any" min="0" onChange={handleInputPrecioPotencia}></input> €</td>
              <td className='input_descuento'></td>
              <td>{precioPotenciaDescuento.p3} €</td>
              <td>{totalPagoFacturaPotencia.p3} €</td>
              <td>{totalPagoAnualPotencia.p3} €</td>
            </tr>
            <tr>
              <td>P4</td>
              <td><input type="number" name="consumo_anual_p4" step="any" min="0" placeholder={inputConsumoAnual.consumo_anual_p4} onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p4" step="any" min="0" onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_anual_p4" step="any" min="0" placeholder={inputPrecioAnual.precio_anual_p4} onChange={handleInputPrecioAnual}></input> €</td>
              <td><input type="number" name="precio_factura_p4" step="any" min="0" onChange={handleInputPrecioMes}></input> €</td>
              <td className='input_descuento'></td>
              <td>{precioDescuentoActual.p4} €</td>
              <td>{totalPagoFactura.p4} €</td>
              <td>{totalPagoAnual.p4} €</td>

              <td><input type="number" name="potencia_contratada_p4" step="any" min="0" onChange={handleInputPotenciaContratada}></input></td>
              <td><input type="number" name="potencia_facturada_p4" step="any" min="0" onChange={handleInputPotenciaFacturada}></input></td>
              <td><input type="number" name="precio_potencia_p4" step="any" min="0" onChange={handleInputPrecioPotencia}></input> €</td>
              <td className='input_descuento'></td>
              <td>{precioPotenciaDescuento.p4} €</td>
              <td>{totalPagoFacturaPotencia.p4} €</td>
              <td>{totalPagoAnualPotencia.p4} €</td>
            </tr>
            <tr>
              <td>P5</td>
              <td><input type="number" name="consumo_anual_p5" step="any" min="0" placeholder={inputConsumoAnual.consumo_anual_p5} onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p5" step="any" min="0" onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_anual_p5" step="any" min="0" placeholder={inputPrecioAnual.precio_anual_p5} onChange={handleInputPrecioAnual}></input> €</td>
              <td><input type="number" name="precio_factura_p5" step="any" min="0" onChange={handleInputPrecioMes}></input> €</td>
              <td className='input_descuento'></td>
              <td>{precioDescuentoActual.p5} €</td>
              <td>{totalPagoFactura.p5} €</td>
              <td>{totalPagoAnual.p5} €</td>

              <td><input type="number" name="potencia_contratada_p5" step="any" min="0" onChange={handleInputPotenciaContratada}></input></td>
              <td><input type="number" name="potencia_facturada_p5" step="any" min="0" onChange={handleInputPotenciaFacturada}></input></td>
              <td><input type="number" name="precio_potencia_p5" step="any" min="0" onChange={handleInputPrecioPotencia}></input> €</td>
              <td className='input_descuento'></td>
              <td>{precioPotenciaDescuento.p5} €</td>
              <td>{totalPagoFacturaPotencia.p5} €</td>
              <td>{totalPagoAnualPotencia.p5} €</td>
            </tr>
            <tr>
              <td className='td_radius'>P6</td>
              <td className='td_radius'><input type="number" name="consumo_anual_p6" step="any" min="0" placeholder={inputConsumoAnual.consumo_anual_p6} onChange={handleInputConsumoAnual}></input></td>
              <td className='td_radius'><input type="number" name="consumo_factura_p6" step="any" min="0" onChange={handleInputConsumo}></input></td>
              <td className='td_radius'><input type="number" name="precio_anual_p6" step="any" min="0" placeholder={inputPrecioAnual.precio_anual_p6} onChange={handleInputPrecioAnual}></input> €</td>
              <td className='td_radius'><input type="number" name="precio_factura_p6" step="any" min="0" onChange={handleInputPrecioMes}></input> €</td>
              <td className='td_radius'></td>
              <td className='td_radius'>{precioDescuentoActual.p6} €</td>
              <td className='td_radius'>{totalPagoFactura.p6} €</td>
              <td className='td_radius'>{totalPagoAnual.p6} €</td>

              <td className='td_radius'><input type="number" name="potencia_contratada_p6" step="any" min="0" onChange={handleInputPotenciaContratada}></input></td>
              <td className='td_radius'><input type="number" name="potencia_facturada_p6" step="any" min="0" onChange={handleInputPotenciaFacturada}></input></td>
              <td className='td_radius'><input type="number" name="precio_potencia_p6" step="any" min="0" onChange={handleInputPrecioPotencia}></input> €</td>
              <td className='td_radius' ></td>
              <td className='td_radius' >{precioPotenciaDescuento.p6} €</td>
              <td className='td_radius'>{totalPagoFacturaPotencia.p6} €</td>
              <td className='td_radius'>{totalPagoAnualPotencia.p6} €</td>
            </tr>
          </tbody>


          <tfoot>
            <tr>
              <td className='total_title'>TOTAL</td>
              <td className='total_input'>{inputConsumoAnual.consumo_anual_p1 + inputConsumoAnual.consumo_anual_p2 + inputConsumoAnual.consumo_anual_p3 + inputConsumoAnual.consumo_anual_p4 + inputConsumoAnual.consumo_anual_p5 + inputConsumoAnual.consumo_anual_p6}</td>
              <td className='total_input'>{inputConsumo.consumo_factura_p1 + inputConsumo.consumo_factura_p2 + inputConsumo.consumo_factura_p3 + inputConsumo.consumo_factura_p4 + inputConsumo.consumo_factura_p5 + inputConsumo.consumo_factura_p6}</td>
              <td className='empty_input'></td>
              <td className='empty_input'></td>
              <td className='empty_input'></td>
              <td className='empty_input'></td>
              <td className='total_input'>{totalPagoFactura.p1 + totalPagoFactura.p2 + totalPagoFactura.p3 + totalPagoFactura.p4 + totalPagoFactura.p5 + totalPagoFactura.p6} €</td>
              <td className='total_input'>{totalPagoAnual.p1 + totalPagoAnual.p2 + totalPagoAnual.p3 + totalPagoAnual.p4 + totalPagoAnual.p5 + totalPagoAnual.p6} €</td>

              <td className='empty_input'></td>
              <td className='empty_input'></td>
              <td className='empty_input'></td>
              <td className='empty_input'></td>
              <td className='empty_input'></td>
              <td className='total_input'>{totalPagoFacturaPotencia.p1 + totalPagoFacturaPotencia.p2 + totalPagoFacturaPotencia.p3 + totalPagoFacturaPotencia.p4 + totalPagoFacturaPotencia.p5 + totalPagoFacturaPotencia.p6} €</td>
              <td className='total_input'>{totalPagoAnualPotencia.p1 + totalPagoAnualPotencia.p2 + totalPagoAnualPotencia.p3 + totalPagoAnualPotencia.p4 + totalPagoAnualPotencia.p5 + totalPagoAnualPotencia.p6} €</td>


            </tr>
          </tfoot>
          
        </table>
      </section>

      <section id='other_section'>
        <table id='other_table'>
          <tbody>
          <tr>
            <th>DIAS DE FACTURACION</th>
            <td><input type="number" name="dias_facturacion" onChange={handleInputDiasFacturados}></input></td>
          </tr>
        </tbody>
        </table>

        <table>
          <tbody>
          <tr>
            <th>ENERGIA REACTIVA</th>
            <td><input type="number" name="energia_reactiva"></input></td>
          </tr>
        </tbody>
        </table>

        <table >
          <tbody>
          <tr>
            <th>IMPUESTO ELÉCTRICO</th>
            <td><input type="number" name="impuesto_electrico"></input> €</td>
          </tr>
        </tbody>
        </table>

        <table >
          <tbody>
          <tr>
            <th>ALQUILER DE EQUIPO</th>
            <td><input type="number" name="alquiler_equipo"></input> €</td>
          </tr>
        </tbody>
        </table>

        <table >
          <tbody>
          <tr>
            <th id='other_table_total_title'>IMPORTE TOTAL FACTURA</th>
            <td> €</td>
          </tr>
        </tbody>
        </table>

      </section>

      <section>
        <table border="1">
          <tbody>
          <tr>
            <th>OTROS</th>
            <th><input type="number" name="otros_a"></input> €</th>
            <td>
              <select name="otros_a_status01">
                <option value="true">SI</option>
                <option value="false">NO</option>
              </select>
            </td>
            <td>
              <select name="otros_a_status02">
                <option value="true">SI</option>
                <option value="false">NO</option>
              </select>
            </td>
          </tr>
        </tbody>
        </table>

        <table border="1">
          <tbody>
            <tr>
              <th>OTROS</th>
              <th><input type="number" name="otros_b"></input> €</th>
              <td>
                <select name="otros_b_status01">
                  <option value="SI">SI</option>
                  <option value="NO">NO</option>
                </select>
              </td>
              <td>
                <select name="otros_b_status02">
                  <option value="SI">SI</option>
                  <option value="NO">NO</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <table border="1">
          <tbody>
            <tr>
              <th>IVA</th>
              <td>
                <select name="iva">
                  <option value="21" >21%</option>
                  <option value="10">10%</option>
                  <option value="5">5%</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <table border="1">
          <tbody>
            <tr>
              <th>TOTAL ANUAL ESTIMADO</th>
              <td> €</td>
            </tr>
          </tbody>
        </table>



      </section >

    </>
  )
}

export default TablaInputFactura