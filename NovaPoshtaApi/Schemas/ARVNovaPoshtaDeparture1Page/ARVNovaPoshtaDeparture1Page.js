define("ARVNovaPoshtaDeparture1Page", [], function() {
	return {
		entitySchemaName: "ARVNovaPoshtaDeparture",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ARVNovaPoshtaDepartureFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ARVNovaPoshtaDeparture"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"ARVDepartment": {
				"d806be49-d081-4284-b9da-fec4024d969f": {
					"uId": "d806be49-d081-4284-b9da-fec4024d969f",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "ARVSettlementRef",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 1,
					"attribute": "ARVSettlement",
					"attributePath": "ARVRef"
				},
				"87007e5c-c7f8-4c90-8aef-8dc324d1ef2a": {
					"uId": "87007e5c-c7f8-4c90-8aef-8dc324d1ef2a",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "ARVDdepartment",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "ARVDepartmentBool"
				},
				"c6dfb2b5-f4b4-4813-9790-e0fe7cfa015e": {
					"uId": "c6dfb2b5-f4b4-4813-9790-e0fe7cfa015e",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "ARVPostomat",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "ARVPostomat"
				},
				"aa934f6e-72e6-4838-8937-1dc70037d4f4": {
					"uId": "aa934f6e-72e6-4838-8937-1dc70037d4f4",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDepartmentDefault"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVPostomat"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDepartmentBool"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVPostomat": {
				"a66c4bba-a9f3-4a20-a0b5-9c02e75c7234": {
					"uId": "a66c4bba-a9f3-4a20-a0b5-9c02e75c7234",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDepartmentBool"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVDepartmentBool": {
				"19b5be8a-fb1b-46b2-9d32-ad3af1b5cf30": {
					"uId": "19b5be8a-fb1b-46b2-9d32-ad3af1b5cf30",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVPostomat"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVPayerTypeNP": {
				"d2517b45-2751-40ab-aaab-514821d40654": {
					"uId": "d2517b45-2751-40ab-aaab-514821d40654",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVRecipient"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipient"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"1885589d-7acf-408b-bcee-6a4b3c597b33": {
					"uId": "1885589d-7acf-408b-bcee-6a4b3c597b33",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVSender"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSender"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"5d9a5ca5-3070-4dc9-8ee8-06cc0993f69a": {
					"uId": "5d9a5ca5-3070-4dc9-8ee8-06cc0993f69a",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipient"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSender"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"e464be56-13f2-4b56-aaf3-c2a20db84f73": {
					"uId": "e464be56-13f2-4b56-aaf3-c2a20db84f73",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVRecipient"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDefault"
							}
						}
					]
				}
			},
			"ARVSender": {
				"abbb99ba-a7ce-4c5f-92ee-1e2d68b89af2": {
					"uId": "abbb99ba-a7ce-4c5f-92ee-1e2d68b89af2",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipient"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVRecipient": {
				"7d700a9a-dc37-47a8-b93e-baa08a8a5ad8": {
					"uId": "7d700a9a-dc37-47a8-b93e-baa08a8a5ad8",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSender"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVPaymentMethodNP": {
				"4361ec64-f141-49a8-90e7-d2fda3d931be": {
					"uId": "4361ec64-f141-49a8-90e7-d2fda3d931be",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVCash"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVCash"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"af641c2d-1de9-40b3-a91e-eaad537ef8fd": {
					"uId": "af641c2d-1de9-40b3-a91e-eaad537ef8fd",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVNonCash"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVNoCash"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"a050fe13-b120-4a2a-8d58-e2f10c97e4db": {
					"uId": "a050fe13-b120-4a2a-8d58-e2f10c97e4db",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVCash"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVNoCash"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"c5cb7241-3fd6-48c1-92aa-fda618e332b0": {
					"uId": "c5cb7241-3fd6-48c1-92aa-fda618e332b0",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVCash"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDefault"
							}
						}
					]
				}
			},
			"ARVNoCash": {
				"69042102-054f-4e7b-a3d1-f5e11ddc9643": {
					"uId": "69042102-054f-4e7b-a3d1-f5e11ddc9643",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVCash"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVCash": {
				"f4aaa2b5-839a-4413-8f51-66fdc8b8fa30": {
					"uId": "f4aaa2b5-839a-4413-8f51-66fdc8b8fa30",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVNoCash"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVCargoTypeNP": {
				"a200e59c-e697-492d-8698-885ae43a0795": {
					"uId": "a200e59c-e697-492d-8698-885ae43a0795",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVParcel"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"7f3ec0c9-70f4-4a71-84e7-795062c994f2": {
					"uId": "7f3ec0c9-70f4-4a71-84e7-795062c994f2",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVDocuments"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"9021f3fc-e8b0-4f55-9f13-e64e88142565": {
					"uId": "9021f3fc-e8b0-4f55-9f13-e64e88142565",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"a1818ceb-36d7-49a3-9218-84ec50abcc0e": {
					"uId": "a1818ceb-36d7-49a3-9218-84ec50abcc0e",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVParcel"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDefault"
							}
						}
					]
				}
			},
			"ARVDescriptionNP": {
				"e5ab3768-7080-4433-898a-a703f6f2064d": {
					"uId": "e5ab3768-7080-4433-898a-a703f6f2064d",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVDocumentsUA"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"77f0b6d8-9d48-448a-9776-7f7164f0f12e": {
					"uId": "77f0b6d8-9d48-448a-9776-7f7164f0f12e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"395a786b-1e45-4732-b391-604b6cd1f72f": {
					"uId": "395a786b-1e45-4732-b391-604b6cd1f72f",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"6af13454-51cb-4feb-aa17-ccfa8c0d513a": {
					"uId": "6af13454-51cb-4feb-aa17-ccfa8c0d513a",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVDocuments": {
				"57415194-4f7f-49ca-9a93-35dda8ff4464": {
					"uId": "57415194-4f7f-49ca-9a93-35dda8ff4464",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVParcel": {
				"35030e28-88ce-4091-a4bf-49766822cf72": {
					"uId": "35030e28-88ce-4091-a4bf-49766822cf72",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVServiceType": {
				"aae9f0b5-3e92-4bb9-9294-862d76133d79": {
					"uId": "aae9f0b5-3e92-4bb9-9294-862d76133d79",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDepartmentBool"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVPostomat"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"c076fb27-6313-41ea-9b47-476a149831cd": {
					"uId": "c076fb27-6313-41ea-9b47-476a149831cd",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVWarehouseWarehouse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDepartmentBool"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"b1ebf227-8f16-4219-a5f6-21278328db55": {
					"uId": "b1ebf227-8f16-4219-a5f6-21278328db55",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVWarehousePostomat"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVPostomat"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"e112eb7f-2056-414c-81ed-40ee1e40fbd5": {
					"uId": "e112eb7f-2056-414c-81ed-40ee1e40fbd5",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVWarehouseWarehouse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDefault"
							}
						}
					]
				}
			},
			"ARVIntWeight": {
				"1a41e298-56fb-4d89-9290-18064e11b3f2": {
					"uId": "1a41e298-56fb-4d89-9290-18064e11b3f2",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVWeight",
							"attributePath": "ARVWeight"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVWeight"
							}
						}
					]
				},
				"80aeda60-acf4-4f15-8161-1ece78e67d92": {
					"uId": "80aeda60-acf4-4f15-8161-1ece78e67d92",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVSeatsAmountNP": {
				"082db608-d8e3-414d-9456-05630913de84": {
					"uId": "082db608-d8e3-414d-9456-05630913de84",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVSeatsAmount",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSeatsAmount"
							}
						}
					]
				},
				"2dd6a2b2-4d9c-4729-b022-b81dccfbd268": {
					"uId": "2dd6a2b2-4d9c-4729-b022-b81dccfbd268",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSeatsAmount"
							}
						}
					]
				}
			},
			"ARVAddressCounterparty": {
				"b3c2da87-70c4-44d5-9ad0-dfa32f8e1aed": {
					"uId": "b3c2da87-70c4-44d5-9ad0-dfa32f8e1aed",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "ARVARVCounterpartyNP",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "ARVSenderCounterpartyNP"
				}
			},
			"ARVRecipientsPhoneNP": {
				"12fede29-7c6a-478e-af6b-3b5d3d75b469": {
					"uId": "12fede29-7c6a-478e-af6b-3b5d3d75b469",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVRecipientContact",
							"attributePath": "MobilePhone"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipientContact"
							}
						}
					]
				}
			},
			"Tabe407c41eTabLabelGroupc0526d09": {
				"8a36a315-4658-49df-afb6-d527d59ecc44": {
					"uId": "8a36a315-4658-49df-afb6-d527d59ecc44",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntDefault"
							},
							"rightExpression": {
								"type": 0,
								"value": 0,
								"dataValueType": 4
							}
						}
					]
				}
			},
			"Tabe407c41eTabLabelGroup71a85491": {
				"1e4b2a2f-b705-421c-83df-11cd185f04f3": {
					"uId": "1e4b2a2f-b705-421c-83df-11cd185f04f3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntDefault"
							},
							"rightExpression": {
								"type": 0,
								"value": 1,
								"dataValueType": 4
							}
						}
					]
				}
			},
			"ARVNext": {
				"8b272dd8-3115-4c25-8d49-e7c780926cef": {
					"uId": "8b272dd8-3115-4c25-8d49-e7c780926cef",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleALLTrue"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVCargoTypeNP"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVPayerTypeNP"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVPaymentMethodNP"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSeatsAmountNP"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntWeight"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDescriptionNP"
							}
						}
					]
				},
				"e1122fe2-538e-42b4-baf9-b886a8de9b44": {
					"uId": "e1122fe2-538e-42b4-baf9-b886a8de9b44",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVCargoTypeNP"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVPayerTypeNP"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVPaymentMethodNP"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSeatsAmountNP"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntWeight"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDescriptionNP"
							}
						}
					]
				},
				"acc39237-7b9e-4398-b492-6718d03aeb0a": {
					"uId": "acc39237-7b9e-4398-b492-6718d03aeb0a",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVStart"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"07c48d4d-3a97-45d1-9c6c-e517446dae69": {
					"uId": "07c48d4d-3a97-45d1-9c6c-e517446dae69",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleALLTrue"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVStart"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"Tabe407c41eTabLabelGroupb4125567": {
				"c08ebe03-d505-4be8-b600-004ac157a2de": {
					"uId": "c08ebe03-d505-4be8-b600-004ac157a2de",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntDefault"
							},
							"rightExpression": {
								"type": 0,
								"value": 2,
								"dataValueType": 4
							}
						}
					]
				}
			},
			"Tabe407c41eTabLabelGroupf926a1c7": {
				"a9b471e0-8b8e-40f3-88aa-d44d8d85e916": {
					"uId": "a9b471e0-8b8e-40f3-88aa-d44d8d85e916",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntDefault"
							},
							"rightExpression": {
								"type": 0,
								"value": 0,
								"dataValueType": 4
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntDefault"
							},
							"rightExpression": {
								"type": 0,
								"value": 1,
								"dataValueType": 4
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntDefault"
							},
							"rightExpression": {
								"type": 0,
								"value": 2,
								"dataValueType": 4
							}
						}
					]
				}
			},
			"ARVSettlement": {
				"4b36fdb4-676f-4a0d-b954-971e06523cbb": {
					"uId": "4b36fdb4-676f-4a0d-b954-971e06523cbb",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVSettlementDefault"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDepartmentBool"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVPostomat"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVStart": {
				"9e643651-fa8a-45d9-9300-936625848571": {
					"uId": "9e643651-fa8a-45d9-9300-936625848571",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleALLTrue"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSenderCounterpartyNP"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVAddressCounterparty"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipientContact"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipientsPhoneNP"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSettlement"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDepartment"
							}
						}
					]
				},
				"9e9dc4af-acda-4490-ad10-0291cb90700d": {
					"uId": "9e9dc4af-acda-4490-ad10-0291cb90700d",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDepartment"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSettlement"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipientsPhoneNP"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipientContact"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVAddressCounterparty"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSenderCounterpartyNP"
							}
						}
					]
				}
			},
			"ARVBack": {
				"181ef4a8-f424-480a-bd5e-bd5bf17c5b67": {
					"uId": "181ef4a8-f424-480a-bd5e-bd5bf17c5b67",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVStart"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"259bef89-11e6-4677-a85a-716b901ef179": {
					"uId": "259bef89-11e6-4677-a85a-716b901ef179",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleALLTrue"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVStart"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVFloatVolumeWeight": {
				"34142742-dc39-4de0-b5a3-2015b526d6bf": {
					"uId": "34142742-dc39-4de0-b5a3-2015b526d6bf",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 0,
								"dataType": 4,
								"operatorType": 1,
								"leftExpression": {
									"type": 0,
									"dataType": 4,
									"operatorType": 1,
									"leftExpression": {
										"type": 0,
										"dataType": 4,
										"operatorType": 1,
										"leftExpression": {
											"type": 1,
											"dataType": 4,
											"operandType": 1,
											"columnPath": "ARVIntLength",
											"columnOperandType": 0
										},
										"rightExpression": {
											"type": 1,
											"dataType": 4,
											"operandType": 1,
											"columnPath": "ARVIntWidth",
											"columnOperandType": 0
										},
										"arithmeticOperatorType": 2
									},
									"rightExpression": {
										"type": 1,
										"dataType": 4,
										"operandType": 1,
										"columnPath": "ARVIntHeight",
										"columnOperandType": 0
									},
									"arithmeticOperatorType": 2
								},
								"rightExpression": {
									"type": 1,
									"dataType": 4,
									"operandType": 0,
									"value": "4000"
								},
								"arithmeticOperatorType": 3
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntLength"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntWidth"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVIntHeight"
							}
						}
					]
				},
				"9a19f54a-bdfc-4f76-a48c-8f98b0b860c7": {
					"uId": "9a19f54a-bdfc-4f76-a48c-8f98b0b860c7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"23679a71-eb93-4840-8866-399a220c54ee": {
					"uId": "23679a71-eb93-4840-8866-399a220c54ee",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 0,
								"dataType": 32,
								"operatorType": 1,
								"leftExpression": {
									"type": 1,
									"dataType": 32,
									"operandType": 1,
									"columnPath": "ARVFloatVolumeWeight",
									"columnOperandType": 0
								},
								"rightExpression": {
									"type": 1,
									"dataType": 4,
									"operandType": 0,
									"value": "0"
								},
								"arithmeticOperatorType": 2
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVWeight": {
				"57738ee0-c01e-4a4e-a074-03fe24bbcf4b": {
					"uId": "57738ee0-c01e-4a4e-a074-03fe24bbcf4b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVSeatsAmount": {
				"f6b9a3ff-92bc-4716-82dd-616e680ff981": {
					"uId": "f6b9a3ff-92bc-4716-82dd-616e680ff981",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVIntLength": {
				"319122a7-23dd-4213-a6b3-f9fc9b8943a2": {
					"uId": "319122a7-23dd-4213-a6b3-f9fc9b8943a2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"f35f9149-6aae-41f6-b2b1-98a9cf1bc087": {
					"uId": "f35f9149-6aae-41f6-b2b1-98a9cf1bc087",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVIntWidth": {
				"411d4b5a-2006-475d-8e6e-053ae9347922": {
					"uId": "411d4b5a-2006-475d-8e6e-053ae9347922",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"1079b04f-b702-4563-92c7-54e363588ecd": {
					"uId": "1079b04f-b702-4563-92c7-54e363588ecd",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVIntHeight": {
				"1f49e58f-b95e-49de-a934-7657aebc608c": {
					"uId": "1f49e58f-b95e-49de-a934-7657aebc608c",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"ac9c8f4c-708a-4db2-809c-21de2b5f6c05": {
					"uId": "ac9c8f4c-708a-4db2-809c-21de2b5f6c05",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVSumBack": {
				"34e7bf87-52da-4be3-8c20-5aa4ad8c6517": {
					"uId": "34e7bf87-52da-4be3-8c20-5aa4ad8c6517",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVCost"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVCost"
							}
						}
					]
				},
				"1c15e3ee-6256-4a14-8343-0d70e67c7f95": {
					"uId": "1c15e3ee-6256-4a14-8343-0d70e67c7f95",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRefundForGoods"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"3cd9f209-3537-40f2-a554-8e75b62b321b": {
					"uId": "3cd9f209-3537-40f2-a554-8e75b62b321b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRefundForGoods"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVCost": {
				"8c0302e2-b883-4e5a-9a4a-775f8a7c59bb": {
					"uId": "8c0302e2-b883-4e5a-9a4a-775f8a7c59bb",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVSumBack"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSumBack"
							}
						}
					]
				}
			},
			"ARVRecipientBack": {
				"5bd7223c-c447-4e37-8b1c-d00195e9fa97": {
					"uId": "5bd7223c-c447-4e37-8b1c-d00195e9fa97",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRefundForGoods"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"26048370-30d2-47f7-ba99-c8e156a0436a": {
					"uId": "26048370-30d2-47f7-ba99-c8e156a0436a",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSenderBack"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVSenderBack": {
				"79ac182a-d353-4f0c-af83-16737adf4eaf": {
					"uId": "79ac182a-d353-4f0c-af83-16737adf4eaf",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRefundForGoods"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"1a81cba6-31ac-48c3-8ffb-f16e38d043aa": {
					"uId": "1a81cba6-31ac-48c3-8ffb-f16e38d043aa",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVForTheRuleFalse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipientBack"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"ARVPayerTypeBackNP": {
				"2a26d6f0-b002-463c-9fc9-5f780d24bdaa": {
					"uId": "2a26d6f0-b002-463c-9fc9-5f780d24bdaa",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVRecipient"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipientBack"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"a848cdb4-28b0-4123-bf48-3e374c535eed": {
					"uId": "a848cdb4-28b0-4123-bf48-3e374c535eed",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "ARVSender"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSenderBack"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"e94ecc9f-c84b-456f-a702-e40342ed97da": {
					"uId": "e94ecc9f-c84b-456f-a702-e40342ed97da",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVRecipientBack"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVSenderBack"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			save: function(config) {
                if (config) {
                    config.isSilent = true;
                }
                else {
                    config = {
                        isSilent: true
                    }; 
                }
                this.callParent([config]);
            },
			
			onMyButtonClickBack: function() {
				var IntDefault = this.get("ARVIntDefault");
				var Default = IntDefault - 1;
				this.set("ARVIntDefault", Default);
				this.set("ARVNext", true);
				if (Default === 0){
					this.set("ARVBack", false);
					}
			},
			
			onMyButtonClickNext: function() {
				var UsrIntDefault = this.get("ARVIntDefault");
				var IntDefault = UsrIntDefault + 1;
				this.set("ARVIntDefault", IntDefault);
				this.set("ARVBack", true);
				if (IntDefault === 2){
					this.set("ARVNext", false);
					}
			},
			
			onMyButtonClickStartProces: function() {
				var contactParameter = this.get("Id");
				this.set("ARVStart", false);
				const runProcessRequest = Ext.create("Terrasoft.RunProcessRequest", {
					"schemaName": "ARVProcess_f75bdbb",
					"schemaUId": "916b636e-7f95-47ea-8ffb-42006428847a",
					"parameterValues": {
						"ProcessSchemaParameter1": contactParameter
					},
					"resultParameterNames": [
						"DocNumber",
						"Success"
					]
				});

				runProcessRequest.execute(function(response) {
					if (response.isSuccess()) {
						var DocNumber = response.resultParameterValues["DocNumber"];
						var jsonObjectDocNumber;
						try {
							jsonObjectDocNumber = JSON.parse(DocNumber);
						} catch (e) {
							Terrasoft.showInformation("Ошибка разбора JSON: " + e.message);
							return;
						}

						var success = jsonObjectDocNumber.success === true;
						if (success) {
							var data = jsonObjectDocNumber.data;
							if (data && data.length > 0) {
								var intDocNumber = data[0].IntDocNumber;
								Terrasoft.showInformation("Створено накладну: " + intDocNumber);
								this.reloadEntity();
							} else {
								Terrasoft.showInformation("Ошибка: " + jsonObjectDocNumber.errors[0]);
								this.set("ARVStart", true);
							}
						} else {
							Terrasoft.showInformation("Ошибка: " + jsonObjectDocNumber.errors[0]);
							this.set("ARVStart", true);
						}
					} else {
						Terrasoft.showInformation("Произошла ошибка в запросе. Response: " + JSON.stringify(response));
						this.reloadEntity();
					}
				}, this);
			},
			
			onMyButtonClickSuccess: function() {
				var ParameterID = this.get("Id");
				var IntDocNumber = this.get("ARVName");
                const runProcessRequest = Ext.create("Terrasoft.RunProcessRequest", {
                    "schemaName": "ARVProcess_7d93731",
                    "schemaUId": "aea87802-b40a-4953-9c9e-6802c7f2dd0a",
                    "parameterValues": {
                        "ProcessSchemaParameter1": ParameterID
                    },
                    "resultParameterNames": [
                        "apiKey"
                    ]
                    });
                runProcessRequest.execute(function(response) {
                    if (response.isSuccess()) {
                        var apiKey = response.resultParameterValues["apiKey"];
                        var urlNP = "https://my.novaposhta.ua/orders/printMarking100x100/orders[]/" + IntDocNumber + "/type/pdf/apiKey/" + apiKey + "/zebra";
						window.open(urlNP, '_blank');
                    }
                }, this);
				},
			
			getStartProces: function() {
				var Start = this.get("ARVStart");
				var result = Start;
				return result;
			},
			
			getBack: function() {
				var Back = this.get("ARVBack");
				var result = Back;
				return result;
			},
			
			getNext: function() {
				var Next = this.get("ARVNext");
				var result = Next;
				return result;
			},
			
			getSuccess: function() {
				var ARVName = this.get("ARVName");
				var result = !!ARVName;
				return result;
			},
			
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Tabe407c41eTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe407c41eTabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe407c41eTabLabelGroupc0526d09",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe407c41eTabLabelGroupc0526d09GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe407c41eTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe407c41eTabLabelGridLayout5b311016",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe407c41eTabLabelGroupc0526d09",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MyTitle",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyTitle"
					},
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					},
					"visible": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEAN967c9d41-1e51-4cb7-9fe3-d719e1c9fa87",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 1,
						"row": 1,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVParcel",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BOOLEAN7bcb08fa-7f67-477e-8e29-306a3688b5fd",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 6,
						"row": 1,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVDocuments",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGe8a1ec25-5be4-4698-8ab0-a54d5f4be2cb",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 1,
						"row": 2,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVDescriptionNP",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "INTEGER32e486b4-2c6b-4cf5-b935-a623ceffb026",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 9,
						"row": 2,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVCost",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP65f2d131-153c-423e-a144-a6d95be8186b",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 1,
						"row": 3,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVWeight",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP0b7ca2c8-f06a-413f-a466-4d5c224ead72",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 9,
						"row": 3,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVSeatsAmount",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ARVIntWeight728aa06a-033f-4b47-80f8-38117f945457",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 1,
						"row": 4,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVIntWeight",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "INTEGER6916e34d-2327-43dc-95d9-6a9aa5720748",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 5,
						"row": 4,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVIntLength",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "INTEGER4714ebfb-e44d-4679-a2d9-4dc0f70af9ec",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 9,
						"row": 4,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVIntWidth",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "INTEGER16528b32-2211-47c5-a487-e4586b32ce04",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 13,
						"row": 4,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVIntHeight",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "FLOAT2711ba2c-9dcd-4d73-b96c-992ea85a640b",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 17,
						"row": 4,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVFloatVolumeWeight",
					"enabled": false,
					"tip": {
						"content": {
							"bindTo": "Resources.Strings.FLOAT2711ba2c9dcd4d73b96c992ea85a640bTip"
						}
					}
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "MyTitle2",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyTitle2"
					},
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 5
					},
					"visible": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "BOOLEAN0391acc0-c652-4943-8630-044f67c8e011",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 1,
						"row": 6,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVRecipient",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "BOOLEAN4eb5b9d5-0bd4-4a53-a8bb-4ba8efaccf69",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 7,
						"row": 6,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVSender",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "MyTitle3",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyTitle3"
					},
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 8
					},
					"visible": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "ARVThirdPerson3ff157dc-c77b-4e36-a7f0-01f6d02c0ae5",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 1,
						"row": 9,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVCash",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "BOOLEAN2d1b13ce-4576-430b-8575-add267cc7d78",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 7,
						"row": 9,
						"layoutName": "Tabe407c41eTabLabelGridLayout5b311016"
					},
					"bindTo": "ARVNoCash",
					"enabled": true,
					"tip": {
						"content": {
							"bindTo": "Resources.Strings.BOOLEAN2d1b13ce4576430b8575add267cc7d78Tip"
						}
					}
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "MyDelimiter1",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyDelimiter1"
					},
					"layout": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 23,
						"row": 12
					},
					"visible": false
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "Tabe407c41eTabLabelGroup71a85491",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe407c41eTabLabelGroup71a85491GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe407c41eTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe407c41eTabLabelGroup71a85491",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MyTitle4",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyTitle4"
					},
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					},
					"visible": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPeddcf704-0c95-499d-a5b5-de19b1e0f2bb",
				"values": {
					"layout": {
						"colSpan": 17,
						"rowSpan": 1,
						"column": 1,
						"row": 1,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVSenderCounterpartyNP",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP167bfcc6-664e-4c7f-9d76-a51fd0038f38",
				"values": {
					"layout": {
						"colSpan": 17,
						"rowSpan": 1,
						"column": 1,
						"row": 2,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVAddressCounterparty",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MyTitle5",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyTitle5"
					},
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					},
					"visible": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP91f7928f-a3ec-4e0b-be9f-175cc164b97b",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 1,
						"row": 5,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVRecipientContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING153e3784-4c4d-4acd-9141-d53c024bf5cb",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 1,
						"row": 6,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVRecipientsPhoneNP",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "BOOLEANabed210e-a3e6-49d3-bc78-07b02b0bfbf7",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 1,
						"row": 7,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVDepartmentBool",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "BOOLEANdaf3670a-e821-4af2-9ab5-781e27f4b24f",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 9,
						"row": 7,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVPostomat",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ARVSettlement60d01175-c7ef-478e-9f48-6790bd9018f3",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 1,
						"row": 8,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVSettlement"
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ARVDepartmente2178e83-ab02-4d87-bb53-2cf78f2b2035",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 11,
						"row": 8,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVDepartment"
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "MyTitle6",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyTitle6"
					},
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 10
					},
					"visible": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "INTEGERe852532a-64a6-4a79-9902-7e10037fc5dc",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 9,
						"row": 11,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVSumBack",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "BOOLEAN2a7c4b4c-e828-4bc6-aa11-d55a59730b0d",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 14,
						"row": 11,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVRecipientBack",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "BOOLEAN12a79b70-27cc-430e-be2d-451defef1250",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 19,
						"row": 11,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVSenderBack",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "BOOLEANc4fa814a-3c9a-4c30-b2b2-d423b5cd504b",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 1,
						"row": 11,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVRefundForGoods",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "MyDelimiter2",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyDelimiter2"
					},
					"layout": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 23,
						"row": 12
					},
					"visible": false
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "DATETIME520ebdd5-af54-4aac-95a1-5c8ae46d8a11",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 1,
						"row": 12,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVDateTime",
					"enabled": true,
					"tip": {
						"content": {
							"bindTo": "Resources.Strings.DATETIME520ebdd5af544aac95a15c8ae46d8a11Tip"
						}
					}
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "Tabe407c41eTabLabelGroupb4125567",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe407c41eTabLabelGroupb4125567GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe407c41eTabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe407c41eTabLabelGroupb4125567",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ARVName1aa04463-17ed-462e-b95b-a88ceb4e1b6b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe407c41eTabLabelGridLayoute2db29d4"
					},
					"bindTo": "ARVName",
					"enabled": false
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGERb9150070-0c23-4871-8675-2618a7419ca0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe407c41eTabLabelGridLayoute2db29d4"
					},
					"bindTo": "ARVCostOnSite",
					"enabled": false
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MyButtonSuccess",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyButtonSuccess"
					},
					"click": {
						"bindTo": "onMyButtonClickSuccess"
					},
					"enabled": {
						"bindTo": "getSuccess"
					},
					"style": "BLUE",
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 14,
						"row": 2
					},
					"visible": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGd6412f55-ad9b-4e5a-ae00-ebb19716eb60",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabe407c41eTabLabelGridLayoute2db29d4"
					},
					"bindTo": "ARVEstimatedDeliveryDate",
					"enabled": false
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPb8aa2f85-8976-4896-bd26-87defdee3922",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabe407c41eTabLabelGridLayoute2db29d4"
					},
					"bindTo": "ARVStatusDocuments",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING3e64e26f-c8a8-4d46-afd8-ac3aa5c2af16",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tabe407c41eTabLabelGridLayoute2db29d4"
					},
					"bindTo": "ARVStatusDocumentsDescriptionString",
					"enabled": false,
					"contentType": 0
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "MyDelimiter3",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyDelimiter3"
					},
					"layout": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 23,
						"row": 12
					},
					"visible": false
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tabe407c41eTabLabelGroupf926a1c7",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe407c41eTabLabelGroupf926a1c7GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe407c41eTabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabe407c41eTabLabelGridLayoutcdeca942",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe407c41eTabLabelGroupf926a1c7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MyButtonBack",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyButtonBack"
					},
					"click": {
						"bindTo": "onMyButtonClickBack"
					},
					"enabled": {
						"bindTo": "getBack"
					},
					"style": "BLUE",
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					},
					"visible": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayoutcdeca942",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MyButtonNext",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyButtonCaption"
					},
					"click": {
						"bindTo": "onMyButtonClickNext"
					},
					"enabled": {
						"bindTo": "getNext"
					},
					"style": "BLUE",
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 9,
						"row": 0
					},
					"visible": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayoutcdeca942",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MyButtonStartProces",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyButtonStartProces"
					},
					"click": {
						"bindTo": "onMyButtonClickStartProces"
					},
					"enabled": {
						"bindTo": "getStartProces"
					},
					"style": "BLUE",
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 0
					},
					"visible": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayoutcdeca942",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "remove",
				"name": "ESNTab"
			},
			{
				"operation": "remove",
				"name": "ESNFeedContainer"
			},
			{
				"operation": "remove",
				"name": "ESNFeed"
			}
		]/**SCHEMA_DIFF*/
	};
});
