import React from "react";

const TablePropuesta = ({
  inputConsumoAnual,
  inputConsumo,
  inputPotenciaContratada,
  inputPotenciaFacturada,
  valorOtrosMes,
  valorOtrosAnual,
  
}) => {
  return (
    <>
      <section>
        <article>
          <p>ENERGIA</p>
        </article>
        <article>
          <p>POTENCIA</p>
        </article>
      </section>

      <section>
        <table border="1">
          <thead>
            <tr>
              <th>FRANJA</th>
              <th>CONSUMO ANUAL (kWh)</th>
              <th>CONSUMO FACTURA ACTUAL (kWh)</th>
              <th>PRECIOS ENERGIA ACTIVA MEDIA ANUAL (€/kWh)</th>
              <th>PRECIOS ENERGIA ACTIVA MES DE FACTURACION (€/kWh)</th>
              <th>DESCUENTO(%)</th>
              <th>PRECIO CON DESCUENTO </th>
              <th>TOTAL PAGO EN FACTURA</th>
              <th>TOTAL PAGO ANUAL</th>



              <th>POTENCIA CONTRATADA (kW)</th>
              <th>POTENCIA FACTURADA (kW)</th>
              <th>PRECIOS POTENCIA (€/kW/día)</th>
              <th>DESCUENTO (%)</th>
              <th>PRECIO CON DESCUENTO</th>
              <th>TOTAL PAGO EN FACTURA	</th>
              <th>TOTAL PAGO ANUAL</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P1</td>
              <td>{inputConsumoAnual.consumo_anual_p1}</td>
              <td>{inputConsumo.consumo_factura_p1}</td>
              <td> €</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p1}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p1}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>

            <tr>
              <td>P2</td>
              <td>{inputConsumoAnual.consumo_anual_p2}</td>
              <td>{inputConsumo.consumo_factura_p2}</td>
              <td> €</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p2}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p2}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>

            <tr>
              <td>P3</td>
              <td>{inputConsumoAnual.consumo_anual_p3}</td>
              <td>{inputConsumo.consumo_factura_p3}</td>
              <td> €</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p3}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p3}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>

            <tr>
              <td>P4</td>
              <td>{inputConsumoAnual.consumo_anual_p4}</td>
              <td>{inputConsumo.consumo_factura_p4}</td>
              <td> €</td>
              <td> €</td>
              <td> </td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p4}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p4}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>

            <tr>
              <td>P5</td>
              <td>{inputConsumoAnual.consumo_anual_p5}</td>
              <td>{inputConsumo.consumo_factura_p5}</td>
              <td> €</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p5}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p5}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>

            <tr>
              <td>p6</td>
              <td>{inputConsumoAnual.consumo_anual_p6}</td>
              <td>{inputConsumo.consumo_factura_p6}</td>
              <td> €</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p6}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p6}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>TOTAL</td>
              <td>{inputConsumoAnual.consumo_anual_p1 + inputConsumoAnual.consumo_anual_p2 + inputConsumoAnual.consumo_anual_p3 + inputConsumoAnual.consumo_anual_p4 + inputConsumoAnual.consumo_anual_p5 + inputConsumoAnual.consumo_anual_p6}</td>
              <td>{inputConsumo.consumo_factura_p1 + inputConsumo.consumo_factura_p2 + inputConsumo.consumo_factura_p3 + inputConsumo.consumo_factura_p4 + inputConsumo.consumo_factura_p5 + inputConsumo.consumo_factura_p6}</td>
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
              <td> €</td>
              <td> €</td>
            </tr>
          </tfoot>

        </table>
      </section>
      <section>
        <article>
          <table border="1">
            <tbody>
              <tr>
                <th>IMPUESTO ELÉCTRICO</th>
                <td> €</td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          <table border="1">
            <tbody>
              <tr>
                <th>IMPORTE TOTAL FACTURA</th>
                <td> €</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>


      <section>
        <article>
          <table border="1">
            <tbody>
              <tr>
                <th>OTROS</th>
                <td>{valorOtrosMes} €</td>
              </tr>
            </tbody>
          </table>

          <table border="1">
            <tbody>
              <tr>
                <th>OTROS ANUAL</th>
                <td>{valorOtrosAnual} €</td>
              </tr>
            </tbody>
          </table>

        </article>

        <article>
          <table border="1">
            <tbody>
              <tr>
                <th>TOTAL ANUAL ESTIMADO</th>
                <td> €</td>
              </tr>
            </tbody>
          </table>

        </article>

      </section>
    </>
  );
};

export default TablePropuesta;
