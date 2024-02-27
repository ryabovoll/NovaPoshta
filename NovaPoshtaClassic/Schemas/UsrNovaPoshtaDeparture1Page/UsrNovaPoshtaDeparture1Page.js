define("UsrNovaPoshtaDeparture1Page", [], function() {
	return {
		entitySchemaName: "UsrNovaPoshtaDeparture",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrNovaPoshtaDepartureFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrNovaPoshtaDeparture"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrDepartment": {
				"ed251e0c-14e4-44a9-8b6d-83c768c9ee20": {
					"uId": "ed251e0c-14e4-44a9-8b6d-83c768c9ee20",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "UsrSettlementRef",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 1,
					"attribute": "UsrSettlement",
					"attributePath": "UsrRef"
				},
				"c84a3443-d630-4e4e-9a49-a92d40df1d5f": {
					"uId": "c84a3443-d630-4e4e-9a49-a92d40df1d5f",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "UsrDdepartment",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "UsrBranch"
				},
				"da0e5be8-ee34-4f74-8883-8ed7a0e38172": {
					"uId": "da0e5be8-ee34-4f74-8883-8ed7a0e38172",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "UsrPostomat",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "UsrPostomat"
				}
			},
			"UsrPostomat": {
				"c8cc1acb-1783-4a69-b2df-7045dd2207b6": {
					"uId": "c8cc1acb-1783-4a69-b2df-7045dd2207b6",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrBranch"
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
			"UsrBranch": {
				"ed203816-52f5-4e7c-80cd-a6d340cc367e": {
					"uId": "ed203816-52f5-4e7c-80cd-a6d340cc367e",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrPostomat"
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
			"UsrPayerType": {
				"b9a84d55-6d23-49f8-878a-3e212d604527": {
					"uId": "b9a84d55-6d23-49f8-878a-3e212d604527",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "UsrRecipient"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipient"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"00e4c56a-7d85-4e74-b89f-cc8f790b62df": {
					"uId": "00e4c56a-7d85-4e74-b89f-cc8f790b62df",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "UsrSender"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSender"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"f32633b1-c960-45c9-8a42-aea28562da3e": {
					"uId": "f32633b1-c960-45c9-8a42-aea28562da3e",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "UsrThirdPerson"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrThirdPerson"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"ea0866b6-67c9-470c-9498-d2be63e006df": {
					"uId": "ea0866b6-67c9-470c-9498-d2be63e006df",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipient"
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
								"attribute": "UsrSender"
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
								"attribute": "UsrThirdPerson"
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
			"UsrSender": {
				"2754b77d-00e4-4334-b91a-320cabd7cc3f": {
					"uId": "2754b77d-00e4-4334-b91a-320cabd7cc3f",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipient"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"0cf11215-d557-4e5c-a8e9-5761514f0110": {
					"uId": "0cf11215-d557-4e5c-a8e9-5761514f0110",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrThirdPerson"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"dd721df7-de89-46ae-a0dc-fd32dbe7d8f4": {
					"uId": "dd721df7-de89-46ae-a0dc-fd32dbe7d8f4",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSender"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"a8107c00-694a-4b25-860e-4ce3e4c45308": {
					"uId": "a8107c00-694a-4b25-860e-4ce3e4c45308",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipient"
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
								"attribute": "UsrSender"
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
								"attribute": "UsrThirdPerson"
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
			"UsrThirdPerson": {
				"7e8d67b2-c825-47b4-80f2-2f0d88d1ccfa": {
					"uId": "7e8d67b2-c825-47b4-80f2-2f0d88d1ccfa",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipient"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"b23dd925-bdcd-400e-ab7d-da50faa6d983": {
					"uId": "b23dd925-bdcd-400e-ab7d-da50faa6d983",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSender"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"0541abe0-de68-4e0f-8a4f-a1bd54aeb922": {
					"uId": "0541abe0-de68-4e0f-8a4f-a1bd54aeb922",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrThirdPerson"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"d0c7492f-128f-4abb-a0ca-075a40529039": {
					"uId": "d0c7492f-128f-4abb-a0ca-075a40529039",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipient"
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
								"attribute": "UsrSender"
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
								"attribute": "UsrThirdPerson"
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
			"UsrRecipient": {
				"53b82910-b5b4-401d-bbf3-f0352bdcf183": {
					"uId": "53b82910-b5b4-401d-bbf3-f0352bdcf183",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSender"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"1e00bf13-50cb-4aff-baa4-ea147db549d4": {
					"uId": "1e00bf13-50cb-4aff-baa4-ea147db549d4",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrThirdPerson"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"b92d8fc5-e25c-4f97-9910-a738fcfca31d": {
					"uId": "b92d8fc5-e25c-4f97-9910-a738fcfca31d",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipient"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"ca921d44-a43d-445e-b4f8-62800a1589c2": {
					"uId": "ca921d44-a43d-445e-b4f8-62800a1589c2",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipient"
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
								"attribute": "UsrSender"
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
								"attribute": "UsrThirdPerson"
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
			"UsrPaymentMethod": {
				"59a6375f-2b16-477b-95d7-9e86689e327a": {
					"uId": "59a6375f-2b16-477b-95d7-9e86689e327a",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "UsrCash"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCash"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"e206d592-77a9-4a8c-901f-02e629a5557f": {
					"uId": "e206d592-77a9-4a8c-901f-02e629a5557f",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "UsrNonCash"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrNonCash"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"8b429d1d-3f1e-429f-b005-505655f57b48": {
					"uId": "8b429d1d-3f1e-429f-b005-505655f57b48",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCash"
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
								"attribute": "UsrNonCash"
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
			"UsrNonCash": {
				"120241d7-d013-46e1-9a21-e41f1d9a0247": {
					"uId": "120241d7-d013-46e1-9a21-e41f1d9a0247",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCash"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"fbb0632b-aba6-4f53-b6fd-3ec050a00298": {
					"uId": "fbb0632b-aba6-4f53-b6fd-3ec050a00298",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrNonCash"
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
			"UsrCash": {
				"e6f56800-435b-4cbe-9038-f481124ec4f2": {
					"uId": "e6f56800-435b-4cbe-9038-f481124ec4f2",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrNonCash"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"5d2ce986-7c87-4b5a-9f4b-d1a24fa669d7": {
					"uId": "5d2ce986-7c87-4b5a-9f4b-d1a24fa669d7",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCash"
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
			"UsrCargoType": {
				"ebe43edb-8083-4945-8b0c-6102e7210c2c": {
					"uId": "ebe43edb-8083-4945-8b0c-6102e7210c2c",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "UsrParcel"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"3d216f04-3648-4b0c-ac43-cf52700909e1": {
					"uId": "3d216f04-3648-4b0c-ac43-cf52700909e1",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "UsrDocuments"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"0e0aecf4-26de-466f-9fe0-9ba2efdc2689": {
					"uId": "0e0aecf4-26de-466f-9fe0-9ba2efdc2689",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrParcel"
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
								"attribute": "UsrDocuments"
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
			"UsrDescription": {
				"06dd799d-4969-4385-afef-75b0b2ea8931": {
					"uId": "06dd799d-4969-4385-afef-75b0b2ea8931",
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
								"attribute": "UsrParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"77d50c0e-8447-4b95-8fc7-f585857a4ac1": {
					"uId": "77d50c0e-8447-4b95-8fc7-f585857a4ac1",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "UsrDocumentsUA"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"ade3a813-e920-456a-b5b2-feb65a9a4bbd": {
					"uId": "ade3a813-e920-456a-b5b2-feb65a9a4bbd",
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
								"attribute": "UsrDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"f1913cf1-4b54-497d-9648-c01b4965626d": {
					"uId": "f1913cf1-4b54-497d-9648-c01b4965626d",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"b28ebda4-94de-43d3-8cbd-fea463fd20cf": {
					"uId": "b28ebda4-94de-43d3-8cbd-fea463fd20cf",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrParcel"
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
								"attribute": "UsrDocuments"
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
			"UsrDocuments": {
				"8b5f5d12-9995-48af-af8f-abbda9b12a13": {
					"uId": "8b5f5d12-9995-48af-af8f-abbda9b12a13",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrParcel"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"41a04e89-21cb-49fc-ace1-82af87fd0757": {
					"uId": "41a04e89-21cb-49fc-ace1-82af87fd0757",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrDocuments"
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
			"UsrParcel": {
				"612e031e-067a-4664-9aa9-d2d53cd02dd6": {
					"uId": "612e031e-067a-4664-9aa9-d2d53cd02dd6",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrDocuments"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"19362e9a-b98a-42e9-bb80-62c336a4202f": {
					"uId": "19362e9a-b98a-42e9-bb80-62c336a4202f",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrParcel"
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
			"UsrServiceType": {
				"dbecbaa0-23ff-41f0-bf98-3aa9b135d0fd": {
					"uId": "dbecbaa0-23ff-41f0-bf98-3aa9b135d0fd",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrBranch"
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
								"attribute": "UsrPostomat"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"4a645b83-ccc5-4047-bc33-63a9e87dc370": {
					"uId": "4a645b83-ccc5-4047-bc33-63a9e87dc370",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "UsrWarehouseWarehouse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrBranch"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"10549e2b-c0c6-4e1e-815f-c13ec4ba5514": {
					"uId": "10549e2b-c0c6-4e1e-815f-c13ec4ba5514",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "UsrWarehousePostomat"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrPostomat"
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
			"UsrWeight": {
				"2d8f8946-8ebb-4073-b977-f5627bce340b": {
					"uId": "2d8f8946-8ebb-4073-b977-f5627bce340b",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrWeightList",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrWeightList"
							}
						}
					]
				}
			},
			"UsrSeatsAmount": {
				"2e530726-705c-40e5-9d12-c4e779859e36": {
					"uId": "2e530726-705c-40e5-9d12-c4e779859e36",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrSeatsAmountList",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSeatsAmountList"
							}
						}
					]
				},
				"4b71fd3d-402e-42cd-a6ed-17d7c26790a7": {
					"uId": "4b71fd3d-402e-42cd-a6ed-17d7c26790a7",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDefault",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSeatsAmountList"
							}
						}
					]
				}
			},
			"UsrAddressCounterparty": {
				"6760fbaf-2d29-4cf2-8a83-e2a3525b8084": {
					"uId": "6760fbaf-2d29-4cf2-8a83-e2a3525b8084",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "UsrUsrCounterpartyNP",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "UsrSenderCounterparty"
				}
			},
			"UsrRecipientsPhone": {
				"861b7aaa-518a-49f3-bb06-4eba9de57e19": {
					"uId": "861b7aaa-518a-49f3-bb06-4eba9de57e19",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrRecipientContact",
							"attributePath": "MobilePhone"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipientContact"
							}
						}
					]
				}
			},
			"UsrRecipientCityName": {
				"88a94a6c-9e2e-4910-a362-6b17d5986444": {
					"uId": "88a94a6c-9e2e-4910-a362-6b17d5986444",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDepartment",
							"attributePath": "UsrDescription"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrDepartment"
							}
						}
					]
				}
			},
			"UsrRecipientArea": {
				"4ddaae97-42e5-45e0-a781-3bad3db3a9f9": {
					"uId": "4ddaae97-42e5-45e0-a781-3bad3db3a9f9",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDepartment",
							"attributePath": "UsrSettlementAreaDescription"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrDepartment"
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
				"name": "UsrForTheRulef9c6aa54-3c69-43a2-9279-8ed45d3414b1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrForTheRule"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPe8a00c8d-bf13-4e1c-9c19-95f33b8d5abd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDefault",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP08cf6399-de2a-4352-8723-69d7ade682ae",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrSenderCounterparty",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP83b28790-7b5a-45d0-b424-0e5945833041",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrAddressCounterparty",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP9e715a80-03c8-466d-aea4-bbfc65b3c80e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrRecipientContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEAN3082c9d7-91ae-434f-a0d6-70deabf24b1c",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrRecipient",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEAN7f4f792d-0ff2-4141-8833-fcf915668bff",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 16,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrSender",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BOOLEAN57c6f71a-2862-43e8-a37e-7e80a4797370",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 20,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrThirdPerson",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrPayerType98e61605-4442-4b15-899d-3a1ca0211753",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrPayerType",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "BOOLEAN05aca756-2010-49b1-87bc-1f27b1ae9482",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrCash",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEAN884086f8-a1c2-4086-9b44-92856694e68c",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 16,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrNonCash",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrPaymentMethode59720a8-ae97-4f63-85aa-ad421cd24762",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrPaymentMethod",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrDateTime6ac72ea0-30a7-4acb-bbcd-fa71c0b6b888",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrDateTime"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "BOOLEAN09beabe4-a65a-4ecd-925b-354fceb26d82",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrParcel",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "BOOLEANb232bc2a-caac-4aaf-93e9-78f7dfa97baf",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 16,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrDocuments",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "UsrCargoType174c897f-3a45-4808-8e83-b9601187ad83",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrCargoType",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "UsrWeighta70ef7f4-4193-47ff-8633-46b01be4c5ae",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrWeight"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "LOOKUPd390d756-079f-408e-926b-253a5ddd7568",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrWeightList",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "UsrBranch5f684fd8-ef09-4240-8329-306583112dc1",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrBranch"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "UsrPostomat71cf60a0-b017-48cc-b0f0-474f66be55dd",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrPostomat"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "UsrServiceType2f75706d-9018-4e52-a7b5-09d1105c6d38",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrServiceType"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "UsrSeatsAmountc90742c3-15e3-4615-ab3c-b3fb1b5ff077",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Header"
					},
					"bindTo": "UsrSeatsAmount"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "LOOKUP02c54105-75f9-4b67-b660-7e7ffe6a1f16",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 6,
						"layoutName": "Header"
					},
					"bindTo": "UsrSeatsAmountList",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "UsrDescriptioncd706c82-1ace-4659-91a7-dd00511313ac",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Header"
					},
					"bindTo": "UsrDescription"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "UsrCostc80657b1-bab9-4049-8801-05b41512dc43",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "Header"
					},
					"bindTo": "UsrCost"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 19
			},
			{
				"operation": "insert",
				"name": "UsrRecipientsPhone0eb1cc03-7509-4a20-8636-e2d9edfe236d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "Header"
					},
					"bindTo": "UsrRecipientsPhone"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 20
			},
			{
				"operation": "insert",
				"name": "UsrRecipientCityNameab808079-f9ae-412e-98bb-cacb4470a0d1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "Header"
					},
					"bindTo": "UsrRecipientCityName"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 21
			},
			{
				"operation": "insert",
				"name": "UsrDepartment98a03269-caf7-4b07-85ed-97df3be01b42",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 10,
						"layoutName": "Header"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 22
			},
			{
				"operation": "insert",
				"name": "UsrRecipientAreae1197451-2eec-4811-83a9-05b9cc19cfec",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "Header"
					},
					"bindTo": "UsrRecipientArea"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 23
			},
			{
				"operation": "insert",
				"name": "UsrDepartmentfc1eb336-0f27-49ad-b513-5e27391a9f3b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 11,
						"layoutName": "Header"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 24
			},
			{
				"operation": "insert",
				"name": "UsrRecipientAddressNamef69db7e1-b713-45df-852f-351a3365ee2f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "Header"
					},
					"bindTo": "UsrRecipientAddressName"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 25
			},
			{
				"operation": "insert",
				"name": "UsrDepartmenta55817eb-d25d-4844-b9ca-cc589cce363f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 12,
						"layoutName": "Header"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 26
			},
			{
				"operation": "insert",
				"name": "UsrRecipientHousebd387f05-57bf-4454-b071-03773ce933b7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
						"layoutName": "Header"
					},
					"bindTo": "UsrRecipientHouse"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 27
			},
			{
				"operation": "insert",
				"name": "UsrRecipientFlat5129f42f-c909-48de-a05f-9448d2eb39c3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 14,
						"layoutName": "Header"
					},
					"bindTo": "UsrRecipientFlat"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 28
			},
			{
				"operation": "insert",
				"name": "UsrRecipientNamebeb7d599-82ce-492b-9bf5-5c962e9fe171",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 15,
						"layoutName": "Header"
					},
					"bindTo": "UsrRecipientName"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 29
			},
			{
				"operation": "insert",
				"name": "UsrRecipientType6deaf633-3d13-43b5-831a-cc90b8ecbd9f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 16,
						"layoutName": "Header"
					},
					"bindTo": "UsrRecipientType"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 30
			},
			{
				"operation": "insert",
				"name": "UsrSettlementType531747ef-c50b-4442-bcd4-4c4ce89b0f5b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 17,
						"layoutName": "Header"
					},
					"bindTo": "UsrSettlementType"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 31
			},
			{
				"operation": "insert",
				"name": "UsrDepartment07fa4e1b-88ea-4a3e-8541-f0c2fad563dd",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 17,
						"layoutName": "Header"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 32
			},
			{
				"operation": "insert",
				"name": "UsrEDRPOUa1674bf5-a73b-4ad2-a19a-d5438ea1a448",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 18,
						"layoutName": "Header"
					},
					"bindTo": "UsrEDRPOU"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 33
			},
			{
				"operation": "insert",
				"name": "Tab9959d105TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab9959d105TabLabelTabCaption"
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
				"name": "Tab9959d105TabLabelGroupaeb83c70",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab9959d105TabLabelGroupaeb83c70GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab9959d105TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab9959d105TabLabelGroupaeb83c70",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEANc1f012eb-2932-4910-ae18-c0e2749c099d",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrBranch",
					"enabled": true
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEAN91a2a16b-128d-4334-80f3-cac8ee8d3f77",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 0,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrPostomat",
					"enabled": true
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP5be2b9df-b9d5-4443-9726-b469006a740c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrSettlement",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP0dc552a7-af23-4a04-8168-b60ee8209fde",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrDepartment",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab7fd4820dTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7fd4820dTabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab7fd4820dTabLabelGroup177ff011",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7fd4820dTabLabelGroup177ff011GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab7fd4820dTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab7fd4820dTabLabelGridLayout35ccd8a3",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab7fd4820dTabLabelGroup177ff011",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING8fa79aaa-92e9-4bcd-bc79-7dcba75091f6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab7fd4820dTabLabelGridLayout35ccd8a3"
					},
					"bindTo": "UsrRef",
					"enabled": true
				},
				"parentName": "Tab7fd4820dTabLabelGridLayout35ccd8a3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGERd7180790-48ab-474e-8f38-fce1e3a70baf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab7fd4820dTabLabelGridLayout35ccd8a3"
					},
					"bindTo": "UsrCostOnSite",
					"enabled": true
				},
				"parentName": "Tab7fd4820dTabLabelGridLayout35ccd8a3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING73c2d091-e5e4-45cd-b605-0929326b2954",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab7fd4820dTabLabelGridLayout35ccd8a3"
					},
					"bindTo": "UsrEstimatedDeliveryDate",
					"enabled": true
				},
				"parentName": "Tab7fd4820dTabLabelGridLayout35ccd8a3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING9359ce80-badb-428b-8a61-644db7603c4d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab7fd4820dTabLabelGridLayout35ccd8a3"
					},
					"bindTo": "UsrIntDocNumber",
					"enabled": true
				},
				"parentName": "Tab7fd4820dTabLabelGridLayout35ccd8a3",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRING9f4d74ff-ccb4-4988-9d9f-a7134798bc4d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab7fd4820dTabLabelGridLayout35ccd8a3"
					},
					"bindTo": "UsrTypeDocument",
					"enabled": true
				},
				"parentName": "Tab7fd4820dTabLabelGridLayout35ccd8a3",
				"propertyName": "items",
				"index": 4
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
