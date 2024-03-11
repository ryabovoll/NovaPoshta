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
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVCost"
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
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVCost"
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
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "STRING07db02aa-4cfd-4163-a25d-fe5dacffd232",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVCargoTypeNP",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING5c7ca81e-a991-4791-803a-aa26f96c5d97",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVPayerTypeNP",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING7c0823ec-d3f9-4818-b078-30f9bab66bda",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVPaymentMethodNP",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING76b5657c-15dd-40c0-a2d4-93165bca7f38",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVSeatsAmountNP",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "INTEGER263a63e8-0555-4404-9796-cb9219ce964f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVIntWeight",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEAN43aef7a6-acc3-49d6-a1be-c2bc523a7a66",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVForTheRuleFalse",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "BOOLEAN4b29f4d3-d034-4b30-9696-5e207ca29f41",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVForTheRuleALLTrue",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUP3653727a-2b16-4b0f-8200-35e811693e22",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVDefault",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "INTEGER32f80b44-f644-4f62-b07a-e64d76ecec3f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVIntDefault",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "BOOLEANccc0d8d2-e08d-4c9c-94ac-d95d7cf7aaec",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVNext",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "STRING4f729f38-75ff-455e-88a4-e1d9328bf289",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVRecipientCityName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "STRINGa28a10cb-1306-4cb6-9283-5bc59cb4b403",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVRecipientFlat",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "STRINGf004046b-ae6d-4b47-846c-2f11eab64afc",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVRecipientHouse",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "STRING401e41f4-8c88-4452-a2ad-4647fc53c11b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVRecipientType",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "STRING4701c39e-85f5-458b-88bb-b5b63dc09414",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 14,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVServiceType",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "BOOLEAN11293475-3ed5-4e3d-ab61-5ac371294473",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 15,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVStart",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "BOOLEANe57f1cea-41fe-4100-ae9f-013f915bb03e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 16,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVBack",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "LOOKUP86e87c20-8d90-476e-aecb-7263e4dd0851",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 17,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVDepartmentDefault",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "LOOKUPe9c834d6-f681-47a9-8378-9c401edd0d9f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 18,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVSettlementDefault",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "LOOKUP890dcf4f-c50f-4aab-b6fd-58ee7671ef5f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 19,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVRegion",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 19
			},
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
				"index": 0
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
				"index": 1
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
				"index": 2
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
				"index": 3
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
				"index": 4
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
				"index": 5
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
				"index": 6
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
				"index": 7
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
				"index": 8
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
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout5b311016",
				"propertyName": "items",
				"index": 9
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
				"name": "LOOKUPeddcf704-0c95-499d-a5b5-de19b1e0f2bb",
				"values": {
					"layout": {
						"colSpan": 17,
						"rowSpan": 1,
						"column": 1,
						"row": 0,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVSenderCounterpartyNP",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP167bfcc6-664e-4c7f-9d76-a51fd0038f38",
				"values": {
					"layout": {
						"colSpan": 17,
						"rowSpan": 1,
						"column": 1,
						"row": 1,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVAddressCounterparty",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP91f7928f-a3ec-4e0b-be9f-175cc164b97b",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 1,
						"row": 4,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVRecipientContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING153e3784-4c4d-4acd-9141-d53c024bf5cb",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 1,
						"row": 5,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVRecipientsPhoneNP",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "BOOLEANabed210e-a3e6-49d3-bc78-07b02b0bfbf7",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 1,
						"row": 6,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVDepartmentBool",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEANdaf3670a-e821-4af2-9ab5-781e27f4b24f",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 9,
						"row": 6,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVPostomat",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ARVSettlement60d01175-c7ef-478e-9f48-6790bd9018f3",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 1,
						"row": 7,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVSettlement"
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ARVDepartmente2178e83-ab02-4d87-bb53-2cf78f2b2035",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 11,
						"row": 7,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVDepartment"
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DATETIME520ebdd5-af54-4aac-95a1-5c8ae46d8a11",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 1,
						"row": 11,
						"layoutName": "Tabe407c41eTabLabelGridLayout7d13c93e"
					},
					"bindTo": "ARVDateTime",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayout7d13c93e",
				"propertyName": "items",
				"index": 8
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
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 1
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
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING95930c8a-b3a7-45ab-9711-f22a22a114a9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabe407c41eTabLabelGridLayoute2db29d4"
					},
					"bindTo": "ARVRef",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRINGef711def-522a-48c1-a448-35a92d2860c3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tabe407c41eTabLabelGridLayoute2db29d4"
					},
					"bindTo": "ARVTypeDocument",
					"enabled": true
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPb8aa2f85-8976-4896-bd26-87defdee3922",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tabe407c41eTabLabelGridLayoute2db29d4"
					},
					"bindTo": "ARVStatusDocuments",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "Tabe407c41eTabLabelGridLayoute2db29d4",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "STRING3e64e26f-c8a8-4d46-afd8-ac3aa5c2af16",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Tabe407c41eTabLabelGridLayoute2db29d4"
					},
					"bindTo": "ARVStatusDocumentsDescriptionString",
					"enabled": true,
					"contentType": 0
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
				"name": "CreatedOn45c679a9-3ff9-4a42-9f98-2e09bf311f89",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe407c41eTabLabelGridLayoutcdeca942"
					},
					"bindTo": "CreatedOn"
				},
				"parentName": "Tabe407c41eTabLabelGridLayoutcdeca942",
				"propertyName": "items",
				"index": 0
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
