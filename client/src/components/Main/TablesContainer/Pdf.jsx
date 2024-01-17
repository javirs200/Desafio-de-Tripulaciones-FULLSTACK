import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
const Pdf = () => {
  // Datos para la tabla
  const tableData = [
    ['Celda 1-1', 'Celda 1-2', 'Celda 1-3'],
    ['Celda 2-1', 'Celda 2-2', 'Celda 2-3'],
    ['Celda 3-1', 'Celda 3-2', 'Celda 3-3'],
  ];

  // Estilos para la tabla
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    table: {
      display: 'table',
      width: 'auto',
      borderStyle: 'solid',
      borderWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: { margin: 'auto', flexDirection: 'row' },
    tableCol: {
      width: '33.33%',
      borderStyle: 'solid',
      borderWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    cell: { margin: 5, fontSize: 10 },
    image: { width: 50, height: 50 },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Tabla de 3x3 con Imagen</Text>
          <View style={styles.table}>
            {tableData.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {row.map((cell, colIndex) => (
                  <View key={colIndex} style={styles.tableCol}>
                    <Text style={styles.cell}>{cell}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text>Imagen</Text>
          <Image style={styles.image} src="https://media.istockphoto.com/id/513133900/es/foto/oro-retriever-sentado-en-frente-de-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=0lRWImB8Y4p6X6YGt06c6q8I3AqBgKD-OGQxjLCI5EY=" />
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;