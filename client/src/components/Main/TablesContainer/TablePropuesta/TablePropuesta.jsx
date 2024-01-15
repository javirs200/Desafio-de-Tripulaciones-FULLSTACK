import React from "react";
import './TablePropuesta.css'

const TablePropuesta = ({
  inputConsumoAnual,
  inputConsumo,
  inputPotenciaContratada,
  inputPotenciaFacturada
}) => {
  return (
    <>
      <table >
          <thead>
            <tr>
              <th className='tr_inputs'>FRANJA</th>
              <th className='tr_inputs'>CONSUMO ANUAL (kWh)</th>
              <th className='tr_inputs'>CONSUMO FACTURA ACTUAL (kWh)</th>
              <th className='tr_inputs'>PRECIOS ENERGIA ACTIVA MEDIA ANUAL (€/kWh)</th>
              <th className='tr_inputs'>PRECIOS ENERGIA ACTIVA MES DE FACTURACION (€/kWh)</th>
              <th className='tr_inputs'>DESCUENTO(%)</th>
              <th className='tr_inputs'>PRECIO CON DESCUENTO </th>
              <th className='tr_inputs'>TOTAL PAGO EN FACTURA</th>
              <th className='tr_inputs'>TOTAL PAGO ANUAL</th>



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
            <tr>
              <td>P1</td>
              <td>{inputConsumoAnual.consumo_anual_p1}</td>
              <td>{inputConsumo.consumo_factura_p1}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>{inputPotenciaContratada.potencia_contratada_p1}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p1}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>P2</td>
              <td>{inputConsumoAnual.consumo_anual_p2}</td>
              <td>{inputConsumo.consumo_factura_p2}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>{inputPotenciaContratada.potencia_contratada_p2}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p2}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>P3</td>
              <td>{inputConsumoAnual.consumo_anual_p3}</td>
              <td>{inputConsumo.consumo_factura_p3}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>{inputPotenciaContratada.potencia_contratada_p3}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p3}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>P4</td>
              <td>{inputConsumoAnual.consumo_anual_p4}</td>
              <td>{inputConsumo.consumo_factura_p4}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>{inputPotenciaContratada.potencia_contratada_p4}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p4}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>P5</td>
              <td>{inputConsumoAnual.consumo_anual_p5}</td>
              <td>{inputConsumo.consumo_factura_p5}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>{inputPotenciaContratada.potencia_contratada_p5}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p5}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>p6</td>
              <td>{inputConsumoAnual.consumo_anual_p6}</td>
              <td>{inputConsumo.consumo_factura_p6}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>{inputPotenciaContratada.potencia_contratada_p6}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p6}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>TOTAL</td>
              <td>{inputConsumoAnual.consumo_anual_p1+inputConsumoAnual.consumo_anual_p2+inputConsumoAnual.consumo_anual_p3+inputConsumoAnual.consumo_anual_p4+inputConsumoAnual.consumo_anual_p5+inputConsumoAnual.consumo_anual_p6}</td>
              <td>{inputConsumo.consumo_factura_p1+inputConsumo.consumo_factura_p2+inputConsumo.consumo_factura_p3+inputConsumo.consumo_factura_p4+inputConsumo.consumo_factura_p5+inputConsumo.consumo_factura_p6}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            
           
          </tbody>
        </table>
    </>
  );
};

export default TablePropuesta;
