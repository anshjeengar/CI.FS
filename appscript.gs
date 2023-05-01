function createVehicleDatabase() {
  // create a new veh_sheet spreadsheet
  const veh_sheet = SpreadsheetApp.create('Vehicle Database');

  // create the sheets and set their headers
  const vehicleSheet = veh_sheet.insertSheet('Vehicles');
  vehicleSheet.getRange('A1:O1').setValues([['S.No', 'Vehicle', 'Owner Name', 'Responsible Person', 'Vehicle No.', 'Purchase Date', 'RTO Agent', 'Pollution (6 months)', 'Next Service Date', 'Online Payment', 'Remark', 'Fitness (Annual)', 'Permit', 'Road Tax', 'Insurance']]);

  const basicDetailsSheet = veh_sheet.insertSheet('Basic Details');
  basicDetailsSheet.getRange('A1:D1').setValues([['Vehicle', 'File Name', 'Document Type', 'Valid Upto']]);

  const companyDocsSheet = veh_sheet.insertSheet('Documents in Company');
  companyDocsSheet.getRange('A1:B1').setValues([['File Name', 'Document Type']]);

  const vehicleDocsSheet = veh_sheet.insertSheet('Documents in Vehicle');
  vehicleDocsSheet.getRange('A1:N1').setValues([['S.No', 'Vehicle', 'Owner Name', 'Responsible Person', 'Vehicle No.', 'Purchase Date', 'RC Copy', 'Tax Invoice - Vehicle', 'Tax Invoice - Body', 'Insurance Copy', 'Road Permit/ Road Tax', 'Fitness', 'Pollution Certificate', 'Remark']]);

  // set up the relationships between the sheets
  const vehicleSheetId = vehicleSheet.getSheetId();
  const basicDetailsSheetId = basicDetailsSheet.getSheetId();
  const companyDocsSheetId = companyDocsSheet.getSheetId();
  const vehicleDocsSheetId = vehicleDocsSheet.getSheetId();

  veh_sheet.addEditor('bobst@mukundcorrupack.com'); // replace with your email

  const requests = [
    {
      "addSheet": {
        "properties": {
          "title": "Basic Details",
          "gridProperties": {
            "rowCount": 20,
            "columnCount": 4
          },
          "tabColor": {
            "red": 0.0,
            "green": 1.0,
            "blue": 0.0
          }
        }
      }
    },
    {
      "addSheet": {
        "properties": {
          "title": "Documents in Company",
          "gridProperties": {
            "rowCount": 20,
            "columnCount": 2
          },
          "tabColor": {
            "red": 1.0,
            "green": 0.0,
            "blue": 0.0
          }
        }
      }
    },
    {
      "addSheet": {
        "properties": {
          "title": "Documents in Vehicle",
          "gridProperties": {
            "rowCount": 20,
            "columnCount": 14
          },
          "tabColor": {
            "red": 0.0,
            "green": 0.0,
            "blue": 1.0
          }
        }
      }
    },
    {
      "updateSheetProperties": {
        "properties": {
          "sheetId": basicDetailsSheetId,
          "gridProperties": {
            "frozenRowCount": 1
          }
        },
        "fields": "gridProperties.frozenRowCount"
      }
    },
    {
      "updateSheetProperties": {
        "properties": {
          "sheetId": companyDocsSheetId,
          "gridProperties": {
            "frozenRowCount": 1
          },
          "fields": "gridProperties.frozenRowCount"
        }
      }
    },
    {
      "updateSheetProperties": {
        "properties": {
          "sheetId": vehicleDocsSheetId,
          "gridProperties": {
            "frozenRowCount": 1
          }
        },
        "fields": "gridProperties.frozenRowCount"
      }
    },
    {
      "addSheet": {
        "properties": {
          "title": "Vehicle Database",
          "index": 0,
          "gridProperties": {
            "rowCount": 100,
            "columnCount": 20
          }
        }
      }
    },
    {
      "updateSpreadsheetProperties": {
        "properties": {
          "locale": "en_US",
          "timeZone": "Asia/Kolkata",
          "title": "Vehicle Database",
          "autoRecalc": "ON_CHANGE",
          "defaultFormat": {
            "backgroundColor": {
              "red": 1.0,
              "green": 1.0,
              "blue": 1.0
            },
            "padding": {
              "top": 2,
              "right": 3,
              "bottom": 2,
              "left": 3
            },
            "verticalAlignment": "BOTTOM",
            "wrapStrategy": "OVERFLOW_CELL",
            "textFormat": {
              "foregroundColor": {},
              "fontFamily": "arial,sans,sans-serif",
              "fontSize": 10,
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false
            }
          }
        },
        "fields": "locale,timeZone,title,autoRecalc,defaultFormat"
      }
    },
    {
      "updateSheetProperties": {
        "properties": {
          "sheetId": vehicleSheetId,
          "tabColor": {
            "red": 0.0,
            "green": 0.0,
            "blue": 1.0
          }
        },
        "fields": "tabColor"
      }
    },
    {
      "addFilterView": {
        "filter": {
          "range": {
            "sheetId": vehicleSheetId,
            "startRowIndex": 0,
            "endRowIndex": 100,
            "startColumnIndex": 0,
            "endColumnIndex": 15
          },
          "criteria": {
            "0": {
              "condition": {
                "type": "NUMBER_GREATER_THAN_EQ",
                "values": [
                  {
                    "userEnteredValue": "1"
                  }
                ]
              }
            }
          }
        },
        "title": "All vehicles"
      }
    },
    {
      "updateSheetProperties": {
        "properties": {
          "sheetId": basicDetailsSheetId,
          "tabColor": {
            "red": 0.0,
            "green": 1.0,
            "blue": 0.0
          }
        },
        "fields": "tabColor"
      }
    },
    {
      "updateSheetProperties": {
        "properties": {
          "sheetId": companyDocsSheetId,
          "tabColor": {
            "red": 1.0,
            "green": 0.0,
            "blue": 0.0
          }
        },
        "fields": "tabColor"
      }
    },
    {
      "updateSheetProperties": {
        "properties": {
          "sheetId": vehicleDocsSheetId,
          "tabColor": {
            "red": 0.0,
            "green": 0.0,
            "blue": 1.0
          }
        },
        "fields": "tabColor"
      }
    },
    {
      "batchUpdate": {
        "requests": [
          {
            "updateSheetProperties": {
              "properties": {
                "sheetId": basicDetailsSheetId,
                "title": "Basic Details"
              },
              "fields": "title"
            }
          },
          {
            "updateSheetProperties": {
              "properties": {
                "sheetId": companyDocsSheetId,
                "title": "Company Docs"
              },
              "fields": "title"
            }
          },
          {
            "updateSheetProperties": {
              "properties": {
                "sheetId": vehicleDocsSheetId,
                "title": "Vehicle Docs"
              },
              "fields": "title"
            }
          }
        ]
      }
    }
  ];

  // Execute the batch update request.
  // Sheets.Spreadsheets.batchUpdate({ requests: requests }, spreadsheetId);

  // Fill sample data in the basic details sheet.
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Basic Details");
  var data = [
    ["S.No", "Vehicle", "Owner Name", "Responsible Person", "Vehicle No.", "Purchase Date", "Renewal Date", "Online Payment", "Remark"],
    [1, "Truck", "ABC Company", "Mr. X", "KA-01-AF-1234", "2022-01-01", "2023-01-01", "Yes", ""],
    [2, "Bike", "XYZ Company", "Mr. Y", "KA-02-AF-5678", "2021-05-01", "2022-05-01", "No", ""],
    [3, "Forklift", "PQR Company", "Mr. Z", "KA-03-AF-9012", "2023-04-01", "2024-04-01", "Yes", ""],
    [4, "Car", "DEF Company", "Ms. A", "KA-04-AF-3456", "2020-09-01", "2021-09-01", "Yes", ""],
    [5, "Passenger Vehicle", "GHI Company", "Ms. B", "KA-05-AF-7890", "2022-02-01", "2023-02-01", "No", ""],
    [6, "Truck", "JKL Company", "Mr. C", "KA-06-AF-2345", "2022-03-01", "2023-03-01", "Yes", ""],
    [7, "Bike", "MNO Company", "Ms. D", "KA-07-AF-6789", "2021-08-01", "2022-08-01", "No", ""],
    [8, "Forklift", "STU Company", "Ms. E", "KA-08-AF-0123", "2023-01-01", "2024-01-01", "Yes", ""],
    [9, "Car", "VWX Company", "Mr. F", "KA-09-AF-4567", "2020-11-01", "2021-11-01", "Yes", ""],
    [10, "Passenger Vehicle", "YZA Company", "Mr. G", "KA-10-AF-8901", "2022-05-01", "2023-05-01", "No", ""]
  ];

  // Fill sample data in the company docs sheet.
  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Company Docs");
  data = [
    ["S.No", "Vehicle", "Documents in Company (File)"],
    [1, "Truck", "Registration Certificate\nInsurance Certificate\nPollution Certificate\nPermit Certificate\nFitness Certificate"],
    [2, "Bike", "Registration Certificate\nInsurance Certificate\nPollution Certificate\nPermit Certificate\nFitness Certificate"],
    [3, "Forklift", "Registration Certificate\nInsurance Certificate\nPollution Certificate\nPermit Certificate\nFitness Certificate"],
    [4, "Car", "Registration Certificate\nInsurance Certificate\nPollution Certificate\nPermit Certificate\nFitness Certificate"],
    [5, "Passenger Vehicle", "Registration Certificate\nInsurance Certificate\nPollution Certificate\nPermit Certificate\nFitness Certificate"],
    [6, "Truck", "Registration Certificate\nInsurance Certificate\nPollution Certificate\nPermit Certificate\nFitness Certificate"],
    [7, "Bike", "Registration Certificate\nInsurance Certificate\nPollution Certificate\nPermit Certificate\nFitness Certificate"],
    [8, "Forklift", "Registration Certificate\nInsurance Certificate\nPollution Certificate\nPermit Certificate\nFitness Certificate"],
    [9, "Car", "Registration Certificate\nInsurance Certificate\nPollution Certificate\nPermit Certificate\nFitness Certificate"],
    [10, "Passenger Vehicle", "Registration Certificate\nInsurance Certificate\nPollution Certificate\nPermit Certificate\nFitness Certificate"]
  ];
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);

  // Fill sample data in the vehicle docs sheet.
  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vehicle Docs");
  data = [
    ["S.No", "Vehicle", "Owner Name", "Responsible Person", "Vehicle No.", "Purchase Date", "RC Copy", "Tax Invoice - Vehicle", "Tax Invoice - Body", "Insurance Copy", "Road Permit/ Road Tax", "Fitness", "Pollution Certificate"],
    [1, "Truck", "ABC Company", "Mr. X", "KA-01-AF-1234", "2022-01-01", "RC copy of the vehicle", "Tax invoice of the vehicle", "Tax invoice of the body", "Insurance copy", "Road permit/tax", "Fitness certificate", "Pollution certificate"],
    [2, "Bike", "XYZ Company", "Mr. Y", "KA-02-AF-5678", "2021-05-01", "RC copy of the vehicle", "Tax invoice of the vehicle", "Tax invoice of the body", "Insurance copy", "Road permit/tax", "Fitness certificate", "Pollution certificate"],
    [3, "Forklift", "PQR Company", "Mr. Z", "KA-03-AF-9012", "2023-04-01", "RC copy of the vehicle", "Tax invoice of the vehicle", "Tax invoice of the body", "Insurance copy", "Road permit/tax", "Fitness certificate", "Pollution certificate"],
    // [4, "Car", "DEF Company", "Ms. A", "KA-04-AF-3456", "2020-09-


    // 

    [10, "Passenger Vehicle", "YZA Company", "Mr. G", "KA-10-AF-8901", "2022-05-01", "RC copy of the vehicle", "Tax invoice of the vehicle", "Tax invoice of the body", "Insurance copy", "Road permit/tax", "Fitness certificate", "No pollution certificate"]


  ];
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);

  // Create the relationships between the sheets.
  var rel_sheet = SpreadsheetApp.getActiveSpreadsheet();
  var truckSheet = rel_sheet.getSheetByName("Truck");
  var bikeSheet = rel_sheet.getSheetByName("Bike");
  var forkliftSheet = rel_sheet.getSheetByName("Forklift");
  var carSheet = rel_sheet.getSheetByName("Car");
  var passengerVehicleSheet = rel_sheet.getSheetByName("Passenger Vehicle");
  var companyDocSheet = rel_sheet.getSheetByName("Company Docs");
  var vehicleDocSheet = rel_sheet.getSheetByName("Vehicle Docs");

  // Create the relationships between the vehicle sheets and the company docs sheet.
  var truckRange = truckSheet.getRange("A1:C11");
  var bikeRange = bikeSheet.getRange("A1:C11");
  var forkliftRange = forkliftSheet.getRange("A1:C11");
  var carRange = carSheet.getRange("A1:C11");
  var passengerVehicleRange = passengerVehicleSheet.getRange("A1:C11");
  var companyDocsRange = companyDocSheet.getRange("A1:C11");


  var truckRule = SpreadsheetApp.newDataValidation().requireValueInRange(companyDocsRange).build();
  var bikeRule = SpreadsheetApp.newDataValidation().requireValueInRange(companyDocsRange).build();
  var forkliftRule = SpreadsheetApp.newDataValidation().requireValueInRange(companyDocsRange).build();
  var carRule = SpreadsheetApp.newDataValidation().requireValueInRange(companyDocsRange).build();
  var passengerVehicleRule = SpreadsheetApp.newDataValidation().requireValueInRange(companyDocsRange).build();

  truckRange.getDataValidation().setValidationRule(truckRule);
  bikeRange.getDataValidation().setValidationRule(bikeRule);
  forkliftRange.getDataValidation().setValidationRule(forkliftRule);
  carRange.getDataValidation().setValidationRule(carRule);
  passengerVehicleRange.getDataValidation().setValidationRule(passengerVehicleRule);

  // Create the relationships between the vehicle sheets and the vehicle docs sheet.
  var vehicleDocsRange = vehicleDocSheet.getRange("A1:M11");

  var truckVehicleDocsRule = SpreadsheetApp.newDataValidation().requireValueInRange(vehicleDocsRange).build();
  var bikeVehicleDocsRule = SpreadsheetApp.newDataValidation().requireValueInRange(vehicleDocsRange).build();
  var forkliftVehicleDocsRule = SpreadsheetApp.newDataValidation().requireValueInRange(vehicleDocsRange).build();
  var carVehicleDocsRule = SpreadsheetApp.newDataValidation().requireValueInRange(vehicleDocsRange).build();
  var passengerVehicleVehicleDocsRule = SpreadsheetApp.newDataValidation().requireValueInRange(vehicleDocsRange).build();

  truckRange.offset(0, 7).getDataValidation().setValidationRule(truckVehicleDocsRule);
  bikeRange.offset(0, 7).getDataValidation().setValidationRule(bikeVehicleDocsRule);
  forkliftRange.offset(0, 7).getDataValidation().setValidationRule(forkliftVehicleDocsRule);
  carRange.offset(0, 7).getDataValidation().setValidationRule(carVehicleDocsRule);
  passengerVehicleRange.offset(0, 7).getDataValidation().setValidationRule(passengerVehicleVehicle);


  // Create the relationships between the vehicle sheets and the RTO agent sheet.
  var rtoAgentSheet = rel_sheet.getSheetByName("RTO Agent");
  var rtoAgentRange = rtoAgentSheet.getRange("A1:B11");

  var truckRtoAgentRule = SpreadsheetApp.newDataValidation().requireValueInRange(rtoAgentRange).build();
  var bikeRtoAgentRule = SpreadsheetApp.newDataValidation().requireValueInRange(rtoAgentRange).build();
  var forkliftRtoAgentRule = SpreadsheetApp.newDataValidation().requireValueInRange(rtoAgentRange).build();
  var carRtoAgentRule = SpreadsheetApp.newDataValidation().requireValueInRange(rtoAgentRange).build();
  var passengerVehicleRtoAgentRule = SpreadsheetApp.newDataValidation().requireValueInRange(rtoAgentRange).build();

  truckRange.offset(0, 1).getDataValidation().setValidationRule(truckRtoAgentRule);
  bikeRange.offset(0, 1).getDataValidation().setValidationRule(bikeRtoAgentRule);
  forkliftRange.offset(0, 1).getDataValidation().setValidationRule(forkliftRtoAgentRule);
  carRange.offset(0, 1).getDataValidation().setValidationRule(carRtoAgentRule);
  passengerVehicleRange.offset(0, 1).getDataValidation().setValidationRule(passengerVehicleRtoAgentRule);

  // Create the relationships between the vehicle sheets and the online payment sheet.
  var onlinePaymentSheet = rel_sheet.getSheetByName("Online Payment");
  var onlinePaymentRange = onlinePaymentSheet.getRange("A1:B11");

  var truckOnlinePaymentRule = SpreadsheetApp.newDataValidation().requireValueInRange(onlinePaymentRange).build();
  var bikeOnlinePaymentRule = SpreadsheetApp.newDataValidation().requireValueInRange(onlinePaymentRange).build();
  var forkliftOnlinePaymentRule = SpreadsheetApp.newDataValidation().requireValueInRange(onlinePaymentRange).build();
  var carOnlinePaymentRule = SpreadsheetApp.newDataValidation().requireValueInRange(onlinePaymentRange).build();
  var passengerVehicleOnlinePaymentRule = SpreadsheetApp.newDataValidation().requireValueInRange(onlinePaymentRange).build();

  truckRange.offset(0, 4).getDataValidation().setValidationRule(truckOnlinePaymentRule);
  bikeRange.offset(0, 4).getDataValidation().setValidationRule(bikeOnlinePaymentRule);
  forkliftRange.offset(0, 4).getDataValidation().setValidationRule(forkliftOnlinePaymentRule);
  carRange.offset(0, 4).getDataValidation().setValidationRule(carOnlinePaymentRule);
  passengerVehicleRange.offset(0, 4).getDataValidation().setValidationRule(passengerVehicleOnlinePaymentRule);

  // Create the relationships between the vehicle sheets and the remark sheet.
  var remarkSheet = rel_sheet.getSheetByName("Remark");
  var remarkRange = remarkSheet.getRange("A1:B11");

  var truckRemarkRule = SpreadsheetApp.newDataValidation().requireValueInRange(remarkRange).build();
  var bikeRemarkRule = SpreadsheetApp.newDataValidation().requireValueInRange(remarkRange).build();
  var forkliftRemarkRule = SpreadsheetApp.newDataValidation().requireValueInRange(remarkRange).build();
  var carRemarkRule = SpreadsheetApp.newDataValidation().requireValueInRange(remarkRange).build();
  var passengerVehicleRemarkRule = SpreadsheetApp.newDataValidation().requireValueInRange(remarkRange).build();

  truckRange.offset(0, 5).getDataValidation().setValidationRule(truckRemarkRule);
  bikeRange.offset(0, 5).getDataValidation().setValidationRule(bikeRemarkRule);
  forkliftRange.offset(0, 5).getDataValidation().setValidationRule(forkliftRemarkRule);
  carRange.offset(0, 5).getDataValidation().setValidationRule(carRemarkRule);
  passengerVehicleRange.offset(0, 5).getDataValidation().setValidationRule(passengerVehicleRemarkRule);

  // Create the relationships between the vehicle sheets and the fitness sheet.
  var fitnessSheet = rel_sheet.getSheetByName("Fitness");
  var fitnessRange = fitnessSheet.getRange("A1:B11");

  var truckFitnessRule = SpreadsheetApp.newDataValidation().requireValueInRange(fitnessRange).build();
  var bikeFitnessRule = SpreadsheetApp.newDataValidation().requireValueInRange(fitnessRange).build();
  var forkliftFitnessRule = SpreadsheetApp.newDataValidation().requireValueInRange(fitnessRange).build();
  var carFitnessRule = SpreadsheetApp.newDataValidation().requireValueInRange(fitnessRange).build();
  var passengerVehicleFitnessRule = SpreadsheetApp.newDataValidation().requireValueInRange(fitnessRange).build();

  truckRange.offset(0, 7).getDataValidation().setValidationRule(truckFitnessRule);
  bikeRange.offset(0, 7).getDataValidation().setValidationRule(bikeFitnessRule);
  forkliftRange.offset(0, 7).getDataValidation().setValidationRule(forkliftFitnessRule);
  carRange.offset(0, 7).getDataValidation().setValidationRule(carFitnessRule);
  passengerVehicleRange.offset(0, 7).getDataValidation().setValidationRule(passengerVehicleFitnessRule);

  // Create the relationships between the vehicle sheets and the permit sheet.
  var permitSheet = rel_sheet.getSheetByName("Permit");
  var permitRange = permitSheet.getRange("A1:B11");

  var truckPermitRule = SpreadsheetApp.newDataValidation().requireValueInRange(permitRange).build();
  var bikePermitRule = SpreadsheetApp.newDataValidation().requireValueInRange(permitRange).build();
  var forkliftPermitRule = SpreadsheetApp.newDataValidation().requireValueInRange(permitRange).build();
  var carPermitRule = SpreadsheetApp.newDataValidation().requireValueInRange(permitRange).build();
  var passengerVehiclePermitRule = SpreadsheetApp.newDataValidation().requireValueInRange(permitRange).build();

  truckRange.offset(0, 8).getDataValidation().setValidationRule(truckPermitRule);
  bikeRange.offset(0, 8).getDataValidation().setValidationRule(bikePermitRule);
  forkliftRange.offset(0, 8).getDataValidation().setValidationRule(forkliftPermitRule);
  carRange.offset(0, 8).getDataValidation().setValidationRule(carPermitRule);
  passengerVehicleRange.offset(0, 8).getDataValidation().setValidationRule(passengerVehiclePermitRule);

  // Create the relationships between the vehicle sheets and the road tax sheet.
  var roadTaxSheet = rel_sheet.getSheetByName("Road Tax");
  var roadTaxRange = roadTaxSheet.getRange("A1:B11");

  var truckRoadTaxRule = SpreadsheetApp.newDataValidation().requireValueInRange(roadTaxRange).build();
  var bikeRoadTaxRule = SpreadsheetApp.newDataValidation().requireValueInRange(roadTaxRange).build();
  var forkliftRoadTaxRule = SpreadsheetApp.newDataValidation().requireValueInRange(roadTaxRange).build();
  var carRoadTaxRule = SpreadsheetApp.newDataValidation().requireValueInRange(roadTaxRange).build();
  var passengerVehicleRoadTaxRule = SpreadsheetApp.newDataValidation().requireValueInRange(roadTaxRange).build();

  truckRange.offset(0, 9).getDataValidation().setValidationRule(truckRoadTaxRule);
  bikeRange.offset(0, 9).getDataValidation().setValidationRule(bikeRoadTaxRule);
  forkliftRange.offset(0, 9).getDataValidation().setValidationRule(forkliftRoadTaxRule);
  carRange.offset(0, 9).getDataValidation().setValidationRule(carRoadTaxRule);
  passengerVehicleRange.offset(0, 9).getDataValidation().setValidationRule(passengerVehicleRoadTaxRule);

  // Create the relationships between the vehicle sheets and the insurance sheet.
  var insuranceSheet = rel_sheet.getSheetByName("Insurance");
  var insuranceRange = insuranceSheet.getRange("A1:B11");

  var truckInsuranceRule = SpreadsheetApp.newDataValidation().requireValueInRange(insuranceRange).build();
  var bikeInsuranceRule = SpreadsheetApp.newDataValidation().requireValueInRange(insuranceRange).build();
  var forkliftInsuranceRule = SpreadsheetApp.newDataValidation().requireValueInRange(insuranceRange).build();
  var carInsuranceRule = SpreadsheetApp.newDataValidation().requireValueInRange(insuranceRange).build();
  var passengerVehicleInsuranceRule = SpreadsheetApp.newDataValidation().requireValueInRange(insuranceRange).build();

  truckRange.offset(0, 10).getDataValidation().setValidationRule(truckInsuranceRule);
  bikeRange.offset(0, 10).getDataValidation().setValidationRule(bikeInsuranceRule);
  forkliftRange.offset(0, 10).getDataValidation().setValidationRule(forkliftInsuranceRule);
  carRange.offset(0, 10).getDataValidation().setValidationRule(carInsuranceRule);
  passengerVehicleRange.offset(0, 10).getDataValidation().setValidationRule(passengerVehicleInsuranceRule);

  // Create the relationships between the vehicle sheets and the documents in vehicle sheet.
  var documentsInVehicleSheet = rel_sheet.getSheetByName("Documents in Vehicle");
  var documentsInVehicleRange = documentsInVehicleSheet.getRange("A1:B11");

  truckRange.offset(0, 11).getDataValidation().setValidationRule(SpreadsheetApp.newDataValidation().requireValueInRange(documentsInVehicleRange).build());
  bikeRange.offset(0, 11).getDataValidation().setValidationRule(SpreadsheetApp.newDataValidation().requireValueInRange(documentsInVehicleRange).build());
  forkliftRange.offset(0, 11).getDataValidation().setValidationRule(SpreadsheetApp.newDataValidation().requireValueInRange(documentsInVehicleRange).build());
  carRange.offset(0, 11).getDataValidation().setValidationRule(SpreadsheetApp.newDataValidation().requireValueInRange(documentsInVehicleRange).build());
  passengerVehicleRange.offset(0, 11).getDataValidation().setValidationRule(SpreadsheetApp.newDataValidation().requireValueInRange(documentsInVehicleRange).build());

  // Create the relationships between the vehicle sheets and the documents in company sheet.
  var documentsInCompanySheet = rel_sheet.getSheetByName("Documents in Company");
  var documentsInCompanyRange = documentsInCompanySheet.getRange("A1:B11");

  truckRange.offset(0, 12).getDataValidation().setValidationRule(SpreadsheetApp.newDataValidation().requireValueInRange(documentsInCompanyRange).build());
  bikeRange.offset(0, 12).getDataValidation().setValidationRule(SpreadsheetApp.newDataValidation().requireValueInRange(documentsInCompanyRange).build());
  forkliftRange.offset(0, 12).getDataValidation().setValidationRule(SpreadsheetApp.newDataValidation().requireValueInRange(documentsInCompanyRange).build());
  carRange.offset(0, 12).getDataValidation().setValidationRule(SpreadsheetApp.newDataValidation().requireValueInRange(documentsInCompanyRange).build());
  passengerVehicleRange.offset(0, 12).getDataValidation().setValidationRule(SpreadsheetApp.newDataValidation().requireValueInRange(documentsInCompanyRange).

    // Add sample data to the vehicle sheets.
    truckRange.offset(1, 0, 10).setValues([
      ["1", "Truck", "John Smith", "Jack", "KA02AB1234", "01/01/2020", "01/01/2021", "01/07/2021", "01/01/2022", "", "Good condition", "01/01/2022", "Company insurance", "01/01/2022"],
      ["2", "Truck", "Jane Doe", "Jill", "KA02CD5678", "02/02/2020", "02/02/2021", "02/08/2021", "02/02/2022", "", "Needs repair", "02/02/2022", "Company insurance", "02/02/2022"],
      ["3", "Truck", "Bob Johnson", "Billy", "KA02EF9101", "03/03/2020", "03/03/2021", "03/09/2021", "03/03/2022", "", "Good condition", "03/03/2022", "Company insurance", "03/03/2022"],
      ["4", "Truck", "Alice Davis", "Alex", "KA02GH1213", "04/04/2020", "04/04/2021", "04/10/2021", "04/04/2022", "", "Needs repair", "04/04/2022", "Company insurance", "04/04/2022"],
      ["5", "Truck", "Tom Smith", "Tim", "KA02IJ1415", "05/05/2020", "05/05/2021", "05/11/2021", "05/05/2022", "", "Good condition", "05/05/2022", "Company insurance", "05/05/2022"],
      ["6", "Truck", "Samantha Johnson", "Sara", "KA02KL1617", "06/06/2020", "06/06/2021", "06/12/2021", "06/06/2022", "", "Good condition", "06/06/2022", "Company insurance", "06/06/2022"],
      ["7", "Truck", "Michael Davis", "Mark", "KA02MN1819", "07/07/2020", "07/07/2021", "07/01/2022", "07/07/2022", "", "Good condition", "07/07/2022", "Company insurance", "07/07/2022"],
      ["8", "Truck", "Jessica Smith", "Julie", "KA02OP2021", "08/08/2020", "08/08/2021", "08/02/2022", "08/08/2022", "", "Good condition", "08/08/2022", "Company insurance", "08/08/2022"],
      ["9", "Truck", "David Johnson", "Doug", "KA02QR2223", "09/09/2020", "09/09/2021", "09/03/2022", "09/09/2022", "", "Good condition", "09/09/2022", "Company insurance", "09/09/2022"],
      ["10", "Truck", "Emily Davis", "Eve", "KA02ST2425", "10/10/2020", "10/10/2021", "10/04/2022", "10/10/2022", "", "Good condition", "10/10/2022", "Company insurance", "10/10/2022"]
    ]));




  // Create a "Documents" sheet to store documents related to the vehicles.
  var documentsSheet = rel_sheet.insertSheet("Documents");

  // Add the column headers for the "Documents" sheet.
  var documentsRange = documentsSheet.getRange("A1:F1");
  documentsRange.setValues([
    ["S.No", "Vehicle", "RC Copy", "Tax Invoice - Vehicle", "Tax Invoice - Body", "Insurance Copy"],
  ]);

  // Create a "Personnel" sheet to store information about personnel responsible for the vehicles.
  var personnelSheet = rel_sheet.insertSheet("Personnel");

  // Add the column headers for the "Personnel" sheet.
  var personnelRange = personnelSheet.getRange("A1:F1");
  personnelRange.setValues([
    ["S.No", "Name", "Email", "Contact No.", "Vehicle No.", "Role"],
  ]);

  // Add sample data to the personnel sheet.
  personnelRange.offset(1, 0, 4).setValues([
    ["1", "John Smith", "john.smith@example.com", "9876543210", "KA02AB1234", "Driver"],
    ["2", "Jane Doe", "jane.doe@example.com", "9876543210", "KA02CD5678", "Driver"],
    ["3", "Bob Johnson", "bob.johnson@example.com", "9876543210", "KA02EF9101", "Mechanic"],
    ["4", "Alice Davis", "alice.davis@example.com", "9876543210", "KA02GH1213", "Mechanic"]
  ]);

  // Create a "Payments" sheet to store information about payments related to the vehicles.
  var paymentsSheet = rel_sheet.insertSheet("Payments");

  // Add the column headers for the "Payments" sheet.
  var paymentsRange = paymentsSheet.getRange("A1:H1");
  paymentsRange.setValues([
    ["S.No", "Vehicle", "Owner Name", "Payment Type", "Amount", "Payment Date", "Bank Name", "Transaction ID"],
  ]);

  // Add sample data to the payments sheet.
  paymentsRange.offset(1, 0, 5).setValues([
    ["1", "Truck", "John Smith", "Road Tax", "10000", "01/01/2021", "HDFC Bank", "123456789"],
    ["2", "Car", "Jane Doe", "Insurance", "5000", "02/02/2021", "ICICI Bank", "234567890"],
    ["3", "Bike", "Bob Johnson", "Road Tax", "2000", "03/03/2021", "HDFC Bank", "345678901"],
    ["4", "Truck", "Alice Davis", "Insurance", "6000", "04/04/2021", "ICICI Bank", "456789012"],
    ["5", "Car", "Tom Smith", "Road Tax", "3000", "05/05/2021", "HDFC Bank", "567890123"]
  ]);

  // Create a "Remarks" sheet to store remarks about the vehicles.
  var remarksSheet = rel_sheet.insertSheet("Remarks");
}
