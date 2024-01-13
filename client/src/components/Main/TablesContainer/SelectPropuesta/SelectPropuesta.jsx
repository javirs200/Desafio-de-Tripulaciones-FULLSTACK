import React from 'react';
import { useState, useEffect } from 'react';

const SelectPropuesta = () => {

  
  const [seleccion, setSeleccion] = useState({

    sistema: "",
    tarifa: "",
    cia: "",
    metodo: "",
    producto: "",
    mes: "",
    fee: ""


  })

  const [productos, setProductos] = useState([]);

  const opcionesProductos = {
    ACCIONA: {
      FIJO: [
        'CIERZO', 'LEVANTE', 'LEVANTE+', 'PONIENTE', 'PONIENTE+', 'TRAMONTANA',
        'TRAMONTANA+', 'PROFESIONAL', 'ADI SENCILLA', 'ADI CLARA', 'ECO ADI',
        'PROFESIONAL', 'LOVE PLANA 24H', 'PLANA 24H', 'RESIDENCIAL PROMOCIONAL SVE',
        'ADI CLARA<10KW', 'RESIDENCIAL ESPECIAL',
      ],
    },
    AEQ: { FIJO: ['EQUILIBRIO', 'SIMETRIA'] },
    ELIA: {
      FIJO: [
        'BALANCE OF ENERGY 0', 'BALANCE OF ENERGY 1', 'BALANCE OF ENERGY 2',
        'BALANCE OF ENERGY 3', 'SIMPLEX', 'TU DECIDES 0', 'TU DECIDES 1',
        'TU DECIDES 2', 'TU DECIDES 3', 'TU ELIGES 0', 'TU ELIGES 1',
        'TU ELIGES 2', 'TU ELIGES 3', 'TU MEDIOAMBIENTE 0', 'TU MEDIOAMBIENTE 1',
        'TU MEDIOAMBIENTE 2', 'TU MEDIOAMBIENTE 3', 'BALANCE OF ENERGY 0',
        'BALANCE OF ENERGY 1', 'BALANCE OF ENERGY 2', 'BALANCE OF ENERGY 3',
      ],
    },
    ENDESA: {
      FIJO: ['TEMPO HAPPY', 'TEMPO OPEN', 'TEMPO OPEN 15≤30kW', 'TEMPO OPEN 30≤50kW',
        'TEMPO OPEN 50≤100kW', 'TEMPO OPEN >100kW', 'TEMPO LIBRE', 'TEMPO 3 PERIODOS',
        'TEMPO HAPPY'],
    },
    ENELUZ: { FIJO: ['EXCELLENT+ 1P', 'EXCELLENT+ 3P', 'EXCELLENT+'] },
    EVOLVE: { FIJO: ['GOLD', 'GOLD', 'SILVER'] },
    FACTOR: {
      FIJO: [
        'DOMESTICO_EXTRA1P', 'DOMESTICO_EXTRA3P', 'DOMESTICO_MINI', 'DOMESTICO_Precio WEB3P',
        'DOMESTICO_PRIME', 'NEGOCIO_AHORRO', 'NEGOCIO_AHORRO1P', 'NEGOCIO_EXTRA',
        'NEGOCIO_EXTRA1P', 'NEGOCIO_EXTRAPLUS', 'NEGOCIO_EXTRAPLUS1P', 'NEGOCIO_EXTRATOP',
        'NEGOCIO_EXTRATOP1P', 'NEGOCIO_MINI1P', 'NEGOCIO_PROFESIONAL', 'NEGOCIO_PROFESIONAL1P',
      ],
    },
    GANA: {
      FIJO: ['ONLINE TG', 'PRECIO ESTABLE TG', 'TARIFA 24 HORAS', 'TARIFA TRAMOS HORARIOS'],
    },
    IBERDROLA: {
      FIJO: [
        '2.0<10kW PLAN ESTABLE', '2.0<10kW Plan Exclusivo 15%TE/TP 1p',
        '2.0<10kW Plan Exclusivo 15%TE/TP 3p', '2.0>10kW Plan Estable',
        '2.0>10kW Plan Exclusivo 15%TE/TP 1p', '2.0>10kW Plan Exclusivo 15%TE/TP 3p',
        '2.0>10kW Plan Exclusivo 26/30%TE 1p', '2.0>10kW Plan Exclusivo 26/30%TE 3p',
        'PEH/API 2.0<10kW PLAN ESTABLE', 'PEH/API 2.0<10kW Plan Exclusivo 15%TE/TP 1p',
        'PEH/API 2.0<10kW Plan Exclusivo 15%TE/TP 3p', 'PEH/API 2.0>10kW Plan Estable',
        'PEH/API 2.0>10kW Plan Exclusivo 15%TE/TP 1p', 'PEH/API 2.0>10kW Plan Exclusivo 15%TE/TP 3p',
        '3.0 Plan Estable', '3.0 Plan Exclusivo 15%TE', '3.0 Plan Exclusivo 26/30%TE',
        'PEH/API 3.0 Plan Estable',
      ],
    },
    TOTAL: {
      FIJO: [
        'CLASICA LIBRE >5001', 'CLASICA LIBRE 0-1500', 'CLASICA LIBRE 1501-3000',
        'CLASICA LIBRE 3001-5000', 'CLASICA SNP', 'CLASICA SNP TE3',
        'CLASICA LIBRE >100001', 'CLASICA LIBRE 0-10000', 'CLASICA LIBRE 10001-30000',
        'CLASICA LIBRE 30001-50000', 'CLASICA LIBRE 50001-100000', 'CLASICA LIBRE >50.001',
        'CLASICA LIBRE 0-50.000', 'CLASICA ETOP', 'CLASICA ETOP UNICA', 'CLASICA',
        'CLASICA TE1', 'CLASICA TE2', 'CLASICA TE3', 'CLASICA TE4', 'CLASICA TE5',
        'CLASICA LIBRE UNICA >5001', 'CLASICA LIBRE UNICA 0-1500',
        'CLASICA LIBRE UNICA 1501-3000', 'CLASICA LIBRE UNICA 3001-5000',
        'CLASICA TE1 UNICA', 'CLASICA TE2 UNICA', 'CLASICA TE3 UNICA', 'CLASICA TE4 UNICA',
        'CLASICA TE5 UNICA',
      ],
    },
    NATURGY: {
      FIJO: [
        'RESIDENCIAL POR USO LUZ LOYAL','RESIDENCIAL NOCHE LUZ','RESIDENCIAL POR USO LUZ','PLAN FIJO LUZ 3.0','PLAN FIJO LUZ 3.0 ONE','PLAN FIJO LUZ 3.0 SUPRA','PLAN FIJO LUZ 6.1 ONE','PLAN FIJO LUZ 6.1 SUPRA',
      ],
    },
    PLENITUDE: {
      FIJO: [
        'FACIL MILAN','FACIL ROMA','FACIL VENECIA','MILAN','NAPOLES','ROMA','VENECIA'       
      ],
    },
  };

  useEffect(() => {
    // Actualizar las opciones de productos cuando cambian la CIA o el Método
    updateProductos();
  }, [seleccion.cia, seleccion.metodo]);

  const handleInputSeleccion = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setSeleccion({
      ...seleccion,
      [name]: value,
    }

    );
  };


  // const handleCiaChange = (event) => {
  //   setCia(event.target.value);
  // };

  // const handleMetodoChange = (event) => {
  //   setMetodo(event.target.value);
  // };

  const updateProductos = () => {
    if (opcionesProductos[seleccion.cia] && opcionesProductos[seleccion.cia][seleccion.metodo]) {
      setProductos(opcionesProductos[seleccion.cia][seleccion.metodo]);
    } else {
      setProductos([]);
    }
  };



  return (
    <>
      <section>
        <article>
          <table border="1">
            <thead>
              <tr>
                <th>TIPO DE SISTEMA</th>
                <th>TARIFA</th>
                <th>CIA</th>
                <th>METODO</th>
                <th>PRODUCTO CIA (POT)</th>
                <th>MES DE FACTURACION (INDEXADO)</th>
                <th>FEE (ENERGIA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select name="sistema" onChange={handleInputSeleccion}>
                    <option> </option>
                    <option value="PENINSULA">PENINSULA</option>
                    <option value="CANARIAS">CANARIAS</option>
                    <option value="VALEARES">VALEARES</option>
                  </select>
                </td>
                <td>
                  <select name="tarifa" onChange={handleInputSeleccion}>
                    <option> </option>
                    <option value="2.0TD">2.0TD</option>
                    <option value="3.0TD">3.0TD</option>
                    <option value="6.1TD">6.1TD</option>
                    <option value="6.2TD">6.2TD</option>
                  </select>
                </td>
                <td>
                  <select name="cia" onChange={handleInputSeleccion}>
                    <option> </option>
                    <option value="ACCIONA">ACCIONA</option>
                    <option value="ADI">ADI</option>
                    <option value="AEQ">AEQ</option>
                    <option value="CANDELA">CANDELA</option>
                    <option value="ELEIA">ELEIA</option>
                    <option value="ENDESA">ENDESA</option>
                    <option value="EVOLVE">EVOLVE</option>
                    <option value="FACTOR">FACTOR</option>
                    <option value="GANA">GANA</option>
                    <option value="IBERDROLA">IBERDROLA</option>
                    <option value="IGNIS">IGNIS</option>
                    <option value="MAX">MAX</option>
                    <option value="NATURGY">NATURGY</option>
                    <option value="PLENITUDE">PLENITUDE</option>
                    <option value="TOTAL">TOTAL</option>
                  </select>
                </td>
                <td>
                  <select name="metodo" onChange={handleInputSeleccion}>
                    <option> </option>
                    <option value="FIJO">FIJO</option>
                    <option value="INDEXADO">INDEXADO</option>
                  </select>
                </td>
                <td>
                  <select name="producto" onChange={handleInputSeleccion}>
                    <option> </option>
                    {/* Opciones para PRODUCTO CIA (POT) basadas en las elecciones de CIA y METODO */}
                    {productos.map((producto, index) => (
                      <option key={index} value={producto}>{producto}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
        </article>

        <article>

        </article>

        <article>

        </article>

      </section>
    </>
  );
};

export default SelectPropuesta;
