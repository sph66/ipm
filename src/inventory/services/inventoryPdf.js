import { ProductionQuantityLimits } from "@mui/icons-material";
import { generatePdf } from "../../core/services/pdf";
import { parsePrice } from "@/core/utils/parsers";

export const downloadPdf = (inventory) => {
  let title = `${inventory.titlu} ${inventory.an}`;
  let content = [];
  let products = [];
  let total = 0;

  const formatCurrency = (params) => {
    return Intl.NumberFormat("ro-RO", {
      style: "currency",
      currency: "RON",
    }).format(parsePrice(params));
  };

  for (let i = 0; i < inventory.products.length; i++) {
    const product = inventory.products[i];
    products.push([
      i + 1,
      product.produs,
      product.cantitate,
      formatCurrency(product.pret),
      formatCurrency(product.total),
    ]);
    total = total + product.total;

    if (products.length == 33 || i == inventory.products.length - 1) {
      content = content.concat([
        { text: title, style: "subheader" },

        {
          style: "tableExample",
          table: {
            widths: [35, 180, 60, 80, 100],
            headerRows: 1,
            body: [
              [
                { text: "NO", style: "tableHeader" },
                { text: "Produs", style: "tableHeader" },
                { text: "Cantitate", style: "tableHeader" },
                { text: "Pret", style: "tableHeader" },
                { text: "Valoare", style: "tableHeader" },
              ],

              ...products,
            ],
          },
          layout: "lightHorizontalLines",
        },

        { text: `Total: ${formatCurrency(total)}`, style: "tableFooter" },
      ]);

      products = [];
      total = 0;
    }
  }

  generatePdf({
    content,
    footer: function (currentPage, pageCount) {
      return {
        text: currentPage.toString() + " din " + pageCount,
        style: "footerAlingment",
      };
    },
    styles: {
      subheader: {
        fontSize: 25,
        bold: true,
        margin: [150, 0, 0, 30],
      },
      tableExample: {
        margin: [0, 5, 0, 15],
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: "black",
      },
      footerAlingment: {
        alignment: "right",
        margin: [0, 0, 20, 0],
      },
      tableFooter: {
        bold: true,
        fontSize: 15,
        color: "black",
        margin: [380, 5, 0, 0],
      },
    },
  });
};

export const downloadDocPdf = (inventory) => {
  let content = [];
  let products = [];
  let total = 0;
  let rows = [];
  let totalPage = 0;
  let index = 0;

  const formatCurrency = (params) => {
    return Intl.NumberFormat("ro-RO", {
      style: "currency",
      currency: "RON",
    }).format(parsePrice(params));
  };

  for (let i = 0; i < inventory.products.length; i++) {
    const product = inventory.products[i];

    total = total + product.total;
    totalPage = totalPage + product.total;

    if (i % 33 == 0 || i == inventory.products.length - 1) {
      rows.push([(index += 1), formatCurrency(total), ""]);

      total = 0;
    }
  }

  content = content.concat([
    { text: "CENTRALIZATOR LISTE INVENTAR 31.12.2021", style: "header1" },
    { text: "SC SIMPROCOM SRL", style: "header2" },
    { text: "PUNCT DE LUCRU ILVA MARE", style: "header3" },

    {
      style: "tableExample",
      table: {
        widths: [50, 200, "*"],
        body: [["PAGINA", "VALOARE", "OBSERVATII"], ...rows],
      },
    },

    { text: `Total: ${formatCurrency(totalPage)}`, style: "tableFooter" },
  ]);

  generatePdf({
    content,
    footer: function (currentPage, pageCount) {
      return {
        text: currentPage.toString() + " din " + pageCount,
        style: "footerAlingment",
      };
    },
    styles: {
      header1: {
        fontSize: 15,
        bold: true,
        margin: [100, 0, 0, 10],
      },
      header2: {
        fontSize: 15,
        bold: true,
        margin: [180, 0, 0, 10],
      },
      header3: {
        fontSize: 15,
        bold: true,
        margin: [150, 0, 0, 10],
      },
      tableExample: {
        bold: true,
        margin: [0, 20, 0, 15],
        alignment: "center",
      },
      footerAlingment: {
        alignment: "right",
        margin: [0, 0, 20, 0],
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: "black",
      },
      tableFooter: {
        bold: true,
        fontSize: 15,
        color: "black",
        margin: [20, 5, 0, 0],
      },
    },
  });
};
