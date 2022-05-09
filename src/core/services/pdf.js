export const generatePdf = (dd) => {
  window.pdfMake.createPdf(dd).getDataUrl(function (outDoc) {
    downloadPDF(outDoc);
  });
};

const downloadPDF = (pdf) => {
  const downloadLink = document.createElement("a");
  const fileName = "abc.pdf";
  downloadLink.href = pdf;
  downloadLink.download = fileName;
  downloadLink.click();
};

// var ddd = {
//   content: [
//     { text: "Lista inventar 2020", style: "subheader" },

//     { text: "", fontSize: 14, bold: true, margin: [0, 10, 0, 8] },
//     {
//       style: "tableExample",
//       table: {
//         widths: [35, 180, 60, 80, 100],
//         headerRows: 1,
//         body: [
//           [
//             { text: "NO", style: "tableHeader" },
//             { text: "Produs", style: "tableHeader" },
//             { text: "Cantitate", style: "tableHeader" },
//             { text: "Pret", style: "tableHeader" },
//             { text: "Valoare", style: "tableHeader" },
//           ],
//           ["Sample value 1", "Sample value 2", "Sample value 3", "A", "A"],
//           ["Sample value 1", "Sample value 2", "Sample value 3", "A", "A"],
//           ["Sample value 1", "Sample value 2", "Sample value 3", "A", "A"],
//           ["Sample value 1", "Sample value 2", "Sample value 3", "A", "A"],
//           ["Sample value 1", "Sample value 2", "Sample value 3", "A", "A"],

//           ["Sample value 1", "Sample value 2", "Sample value 3", "A", "A"],
//         ],
//       },
//       layout: "lightHorizontalLines",
//     },

//     { text: "Total: 12346", style: "tableFooter" },
//   ],

//   styles: {
//     subheader: {
//       fontSize: 25,
//       bold: true,
//       margin: [150, 0, 0, 30],
//     },
//     tableExample: {
//       margin: [0, 5, 0, 15],
//     },
//     tableHeader: {
//       bold: true,
//       fontSize: 13,
//       color: "black",
//     },
//     tableFooter: {
//       bold: true,
//       fontSize: 15,
//       color: "black",
//       margin: [380, 5, 0, 0],
//     },
//   },
// };

// var dd = {
//   content: [
//     { text: "CENTRALIZATOR LISTE INVENTAR 31.12.2021", style: "header1" },
//     { text: "SC SIMPROCOM SRL", style: "header2" },
//     { text: "PUNCT DE LUCRU ILVA MARE", style: "header3" },

//     { text: "", style: "subheader" },

//     {
//       style: "tableExample",
//       table: {
//         widths: [50, 200, "*"],
//         body: [
//           ["PAGINA", "VALOARE", "OBSERVATII"],
//           [
//             "1",
//             { text: "nothing interesting here", italics: true, color: "gray" },
//             { text: "nothing interesting here", italics: true, color: "gray" },
//           ],
//         ],
//       },
//     },

//     { text: "Total:  12346", style: "tableFooter" },
//   ],
//   styles: {
//     header1: {
//       fontSize: 15,
//       bold: true,
//       margin: [100, 0, 0, 10],
//     },
//     header2: {
//       fontSize: 15,
//       bold: true,
//       margin: [180, 0, 0, 10],
//     },
//     header3: {
//       fontSize: 15,
//       bold: true,
//       margin: [150, 0, 0, 10],
//     },
//     tableExample: {
//       bold: true,
//       margin: [0, 20, 0, 15],
//       alignment: "center",
//     },
//     tableHeader: {
//       bold: true,
//       fontSize: 13,
//       color: "black",
//     },
//     tableFooter: {
//       bold: true,
//       fontSize: 15,
//       color: "black",
//       margin: [20, 5, 0, 0],
//     },
//   },
// };
