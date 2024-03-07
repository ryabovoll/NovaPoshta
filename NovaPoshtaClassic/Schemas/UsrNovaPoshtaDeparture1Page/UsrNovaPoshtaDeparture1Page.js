define("UsrNovaPoshtaDeparture1Page", ['ProcessModuleUtilities'], function(ProcessModuleUtilities) {
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
				},
				"3f2d7810-2b5c-40d8-9a91-d267e530612b": {
					"uId": "3f2d7810-2b5c-40d8-9a91-d267e530612b",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrDepartmentDefault"
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
								"value": false,
								"dataValueType": 12
							}
						},
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
						}
					]
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
					"removed": true,
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
					"removed": true,
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
					"removed": true,
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
			},
			"Tab7fd4820dTabLabel": {
				"78755f08-c978-4b97-af66-0327ff5c1ab5": {
					"uId": "78755f08-c978-4b97-af66-0327ff5c1ab5",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrIntDefault"
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
			"Tab9959d105TabLabelGroupaeb83c70": {
				"5039b750-8610-42f5-838a-feb60690b4a3": {
					"uId": "5039b750-8610-42f5-838a-feb60690b4a3",
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
								"attribute": "UsrIntDefault"
							},
							"rightExpression": {
								"type": 0,
								"value": 0,
								"dataValueType": 4
							}
						}
					]
				},
				"f5b0f08c-046d-408f-92fc-9291210afa2f": {
					"uId": "f5b0f08c-046d-408f-92fc-9291210afa2f",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSuccess"
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
			"Tab9959d105TabLabelGrouped411047": {
				"fed8d550-a9a9-4949-af10-262870ac6a1f": {
					"uId": "fed8d550-a9a9-4949-af10-262870ac6a1f",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrIntDefault"
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
			"Tab9959d105TabLabelGroup0029467f": {
				"babe20f8-ae93-4c59-beef-e7a62133e226": {
					"uId": "babe20f8-ae93-4c59-beef-e7a62133e226",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrIntDefault"
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
			"Tab9959d105TabLabelGroupeb35b941": {
				"73999f42-15ed-46f1-83c8-71caa3672339": {
					"uId": "73999f42-15ed-46f1-83c8-71caa3672339",
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
								"attribute": "UsrIntDefault"
							},
							"rightExpression": {
								"type": 0,
								"value": 1,
								"dataValueType": 4
							}
						}
					]
				},
				"1231a1b6-8589-406e-a6c4-5d1594017a6d": {
					"uId": "1231a1b6-8589-406e-a6c4-5d1594017a6d",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSuccess"
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
			"Tab9959d105TabLabelGroup6cd6fa76": {
				"078e1f04-2b48-4540-99fa-170a92cdc94e": {
					"uId": "078e1f04-2b48-4540-99fa-170a92cdc94e",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrIntDefault"
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
			"Tab9959d105TabLabelGroup1e2f0cb3": {
				"aaff904d-3af6-4ca7-a454-d2be5e818edc": {
					"uId": "aaff904d-3af6-4ca7-a454-d2be5e818edc",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrIntDefault"
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
			"UsrNext": {
				"5e6e548e-ece8-4074-a5ed-1ecb07a241ce": {
					"uId": "5e6e548e-ece8-4074-a5ed-1ecb07a241ce",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRuleALLTrue"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCargoType"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrPayerType"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrPaymentMethod"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSeatsAmount"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrWeight"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrDescription"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCost"
							}
						}
					]
				},
				"dc329827-b7ea-4e1e-8746-6b29a4c6a764": {
					"uId": "dc329827-b7ea-4e1e-8746-6b29a4c6a764",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCargoType"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrPayerType"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrPaymentMethod"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSeatsAmount"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrWeight"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrDescription"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCost"
							}
						}
					]
				},
				"1c6b3766-7779-4755-b62e-a0920f898d21": {
					"uId": "1c6b3766-7779-4755-b62e-a0920f898d21",
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
								"attribute": "UsrStart"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"966dd5ae-383e-4c9e-9d25-abbfeaef1e9b": {
					"uId": "966dd5ae-383e-4c9e-9d25-abbfeaef1e9b",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRuleALLTrue"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrStart"
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
			"Tab9959d105TabLabelGroup3f348a31": {
				"721c132e-ee35-4eba-9ab2-37f4d2c1ac9b": {
					"uId": "721c132e-ee35-4eba-9ab2-37f4d2c1ac9b",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSuccess"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"bfd86eee-c910-45a8-b79f-6350abb4091b": {
					"uId": "bfd86eee-c910-45a8-b79f-6350abb4091b",
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
								"attribute": "UsrIntDefault"
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
			"Tab9959d105TabLabelGroupee76de07": {
				"b8589cf7-f2ca-4db2-9eb3-3099f303b3c2": {
					"uId": "b8589cf7-f2ca-4db2-9eb3-3099f303b3c2",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSuccess"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"f5c2ce41-0cef-4053-b69f-88645d2d3592": {
					"uId": "f5c2ce41-0cef-4053-b69f-88645d2d3592",
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
								"attribute": "UsrIntDefault"
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
								"attribute": "UsrIntDefault"
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
								"attribute": "UsrIntDefault"
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
			"UsrSettlement": {
				"c42be879-fca2-4323-8c7e-e0ee1851df0b": {
					"uId": "c42be879-fca2-4323-8c7e-e0ee1851df0b",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrSettlementDefault"
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
				}
			},
			"UsrStart": {
				"f3363f85-4745-4e77-818d-3f580efb7e2d": {
					"uId": "f3363f85-4745-4e77-818d-3f580efb7e2d",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRuleALLTrue"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSenderCounterparty"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrAddressCounterparty"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipientContact"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipientsPhone"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSettlement"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrDepartment"
							}
						}
					]
				},
				"5135da47-5916-42c7-8b76-c8ce2dd3dca2": {
					"uId": "5135da47-5916-42c7-8b76-c8ce2dd3dca2",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRule"
						}
					},
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrDepartment"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSettlement"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipientsPhone"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRecipientContact"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrAddressCounterparty"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSenderCounterparty"
							}
						}
					]
				}
			},
			"UsrBack": {
				"5ed31b41-a043-4b03-bd8a-f5350b19f8fe": {
					"uId": "5ed31b41-a043-4b03-bd8a-f5350b19f8fe",
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
								"attribute": "UsrStart"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"94dc9659-4ef3-4282-8557-235d9b42bab4": {
					"uId": "94dc9659-4ef3-4282-8557-235d9b42bab4",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrForTheRuleALLTrue"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrStart"
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
				debugger;
				var IntDefault = this.get("UsrIntDefault");
				var Default = IntDefault - 1;
				this.set("UsrIntDefault", Default);
				this.set("UsrNext", true);
				if (Default === 0){
					this.set("UsrBack", false);
					}
			},
			
			onMyButtonClickNext: function() {
				debugger;
				var UsrIntDefault = this.get("UsrIntDefault");
				var IntDefault = UsrIntDefault + 1;
				this.set("UsrIntDefault", IntDefault);
				this.set("UsrBack", true);
				if (IntDefault === 2){
					this.set("UsrNext", false);
					}
			},
			
			onMyButtonClickStartProces: function() {
				debugger;
                var contactParameter = this.get("Id");
                const runProcessRequest = Ext.create("Terrasoft.RunProcessRequest", {
                    "schemaName": "UsrProcess_0e02c98_e9c33b4NovaPoshtaClassic1",
                    "schemaUId": "ba5f3d63-3d12-4bf0-886c-97c79c2fc12d",
                    "parameterValues": {
                        "ProcessSchemaParameter1": contactParameter
                    },
                    "resultParameterNames": [
                        "DocNumber"
                    ]
                    });
                runProcessRequest.execute(function(response) {
                    if (response.isSuccess()) {
                        var job = response.resultParameterValues["DocNumber"];
                        Terrasoft.showInformation(job);
						this.reloadEntity();
                    }
                }, this);
				//this.save(contactParameter);
				
			},
			
			getUsrStartProces: function() {
				var UsrStart = this.get("UsrStart");
				var result = UsrStart;
				return result;
			},
			
			getUsrBack: function() {
				var UsrBack = this.get("UsrBack");
				var result = UsrBack;
				return result;
			},
			
			getUsrNext: function() {
				var UsrNext = this.get("UsrNext");
				var result = UsrNext;
				return result;
			},
			
			onMyButtonClickSuccess: function() {
				var DocNumber = this.get("UsrName");
				var urlNP = "https://my.novaposhta.ua/orders/printMarking100x100/orders[]/" + DocNumber + "/type/pdf/apiKey/1e34a629cda2aa3c43e174bbaca950c6/zebra";

				// Открываем ссылку в новом окне
				window.open(urlNP, '_blank');
				},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrCargoTypef86c0b72-6295-4101-9dfd-42b1038e7016",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCargoType"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPayerType541148b1-3602-4fa7-baac-b976b5b46e78",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPayerType"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrPaymentMethod922340b8-89e0-48aa-806a-19c7d7b8d1c7",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPaymentMethod"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrSeatsAmountf7c42ac1-0741-4d39-9766-2dbbbaf5e8ca",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrSeatsAmount"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrWeighta85586bc-c729-4ec7-9e65-0f29f924a206",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrWeight"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrForTheRulef5f67385-a35c-47a9-ae33-0e41496d4185",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrForTheRule"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrForTheRuleALLTruee5642797-926e-49d9-b709-0dd12301a0f6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrForTheRuleALLTrue"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrNexta23363cc-6898-4692-a6cc-0db849ebd1d9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrNext"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrBackd5caf710-5d6c-4b5d-80d8-045159dd2e0e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrBack"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "BOOLEAN3bd78744-4b58-42e5-89e4-d3a84a2f11af",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrStart",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "BOOLEANbf921c12-9ffe-4b5d-8b2a-f9104ffd3dbf",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrSuccess",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "UsrIntDefaultbdc5a398-c6a9-4a38-adf9-54af255f4935",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrIntDefault"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "LOOKUPda703dbb-d473-42fe-ab23-6ac46d406f57",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrSettlementDefault",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "LOOKUP46f5853a-78a7-47c0-8362-01ebda2571bf",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDepartmentDefault",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 13
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
				"name": "STRING00d537d6-ffcb-4893-b47b-d5fc3e79252e",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrControlOptions",
					"labelConfig": {
						"visible": false
					},
					"enabled": false
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrParcel64acc9fc-c3f8-4365-84de-97970d1c10f5",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 1,
						"row": 1,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrParcel",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrParcel64acc9fcc3f8436584de97970d1c10f5LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrDocumentsfaaeb619-34d7-4bfd-95ef-fd3d0b20583f",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 6,
						"row": 1,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrDocuments",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrDocumentsfaaeb61934d74bfd95effd3d0b20583fLabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrDescription49baa2ee-b050-4da9-bdcf-166128be389f",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 1,
						"row": 2,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrDescription",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrDescription49baa2eeb0504da9bdcf166128be389fLabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCostaa75da9c-97c4-4094-a2b4-858661cc28bf",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 9,
						"row": 2,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrCost",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrCostaa75da9c97c44094a2b4858661cc28bfLabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrWeightList2baf618c-6053-4f87-ac68-4dfca00dbc9e",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 1,
						"row": 3,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrWeightList",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrWeightList2baf618c60534f87ac684dfca00dbc9eLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrSeatsAmountListdb25907a-f1e8-4f77-b4b2-69058f1a9e73",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 9,
						"row": 3,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrSeatsAmountList",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrSeatsAmountListdb25907af1e84f77b4b269058f1a9e73LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "STRINGf48de626-c976-44ee-80ec-08b1ef2f3984",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrPayerDelivery",
					"enabled": false,
					"labelConfig": {
						"visible": false
					}
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrRecipientc53bb54c-7c1d-4214-a791-0b91688b38a4",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 1,
						"row": 6,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrRecipient"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "UsrSenderf43098f9-fe3f-4c02-b6a9-ce3146d99ad9",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 7,
						"row": 6,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrSender"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "UsrThirdPersonc23e1fe5-0ca3-4c9b-9144-102f20a61759",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 13,
						"row": 6,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrThirdPerson"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "STRING2181c995-f892-421d-a9fb-90d07bc91ae6",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrDeliveryPaymentForm",
					"labelConfig": {
						"visible": false
					},
					"enabled": false
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "UsrCash4b629eff-c235-400d-a92e-e3b9d766db3f",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 1,
						"row": 9,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrCash"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "UsrNonCash37a88f23-0e08-4610-bcf0-14e2b2989cf6",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 7,
						"row": 9,
						"layoutName": "Tab9959d105TabLabelGridLayoutb9299c0e"
					},
					"bindTo": "UsrNonCash"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "MyButtonText",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyButtonText"
					},
					"style": "TRANSPARENT",
					"layout": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 23,
						"row": 12
					},
					"visible": false
				},
				"parentName": "Tab9959d105TabLabelGridLayoutb9299c0e",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "Tab9959d105TabLabelGroupeb35b941",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab9959d105TabLabelGroupeb35b941GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab9959d105TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab9959d105TabLabelGridLayoutc38da43a",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab9959d105TabLabelGroupeb35b941",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING869b0184-efa7-463f-a0e7-dd2b99bd82ad",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrSenderStr",
					"labelConfig": {
						"visible": false
					},
					"enabled": false
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSenderCounterparty31f5d14e-8c64-4fec-b831-2ee37520026f",
				"values": {
					"layout": {
						"colSpan": 17,
						"rowSpan": 1,
						"column": 1,
						"row": 1,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrSenderCounterparty",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrAddressCounterparty2fdbe823-645e-49dc-b36e-45fb7bee8b36",
				"values": {
					"layout": {
						"colSpan": 17,
						"rowSpan": 1,
						"column": 1,
						"row": 2,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrAddressCounterparty",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING607fe7aa-76c5-4386-b5de-7255c75b0555",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrRecipientStr",
					"labelConfig": {
						"visible": false
					},
					"enabled": false
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrRecipientContactfb350a71-57ad-4867-aac9-1783d42e4009",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 1,
						"row": 5,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrRecipientContact"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrRecipientsPhone787363d7-8a4b-48df-9034-aaaf3927aebc",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 1,
						"row": 6,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrRecipientsPhone"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrBranch71f44fda-0a1b-4aed-906f-02119eac8b8f",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 1,
						"row": 7,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrBranch"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrPostomat7ef86ce6-22c9-4b91-b485-88338589d9fc",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 9,
						"row": 7,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrPostomat"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrSettlement09e2da55-1ca2-4291-9595-31b212a2392c",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 1,
						"row": 8,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrSettlement"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "UsrDepartmentaf939135-7ea1-47e8-902b-dd97e8a37ad6",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 11,
						"row": 8,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "STRINGd19d302f-f854-4fed-ad3d-89fd4fcbf51a",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrAdditionalServicesStr",
					"labelConfig": {
						"visible": false
					},
					"enabled": false
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "UsrDateTime7a672e51-0664-4ebc-898c-b582e7746d63",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 1,
						"row": 12,
						"layoutName": "Tab9959d105TabLabelGridLayoutc38da43a"
					},
					"bindTo": "UsrDateTime"
				},
				"parentName": "Tab9959d105TabLabelGridLayoutc38da43a",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "Tab9959d105TabLabelGroup3f348a31",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab9959d105TabLabelGroup3f348a31GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab9959d105TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab9959d105TabLabelGridLayout72db1f7d",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab9959d105TabLabelGroup3f348a31",
				"propertyName": "items",
				"index": 0
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
					"style": "RED",
					"layout": {
						"colSpan": 6,
						"rowSpan": 2,
						"column": 15,
						"row": 0
					},
					"visible": true
				},
				"parentName": "Tab9959d105TabLabelGridLayout72db1f7d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName2202f265-207e-45a7-8b64-0c601cc86f64",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab9959d105TabLabelGridLayout72db1f7d"
					},
					"bindTo": "UsrName"
				},
				"parentName": "Tab9959d105TabLabelGridLayout72db1f7d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrCostOnSite39c39729-2cd5-48f0-a1a1-1c79b161a7d2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab9959d105TabLabelGridLayout72db1f7d"
					},
					"bindTo": "UsrCostOnSite"
				},
				"parentName": "Tab9959d105TabLabelGridLayout72db1f7d",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrEstimatedDeliveryDate25a3a853-6bcf-4bad-9705-e1bfedd89787",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab9959d105TabLabelGridLayout72db1f7d"
					},
					"bindTo": "UsrEstimatedDeliveryDate"
				},
				"parentName": "Tab9959d105TabLabelGridLayout72db1f7d",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrRefe10e2514-28cf-420c-bf34-bba9d0a0df0a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab9959d105TabLabelGridLayout72db1f7d"
					},
					"bindTo": "UsrRef"
				},
				"parentName": "Tab9959d105TabLabelGridLayout72db1f7d",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrTypeDocument597e9e69-d818-4e83-b579-72d81f584b1f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab9959d105TabLabelGridLayout72db1f7d"
					},
					"bindTo": "UsrTypeDocument"
				},
				"parentName": "Tab9959d105TabLabelGridLayout72db1f7d",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "MyButto",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyButto"
					},
					"style": "TRANSPARENT",
					"layout": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 23,
						"row": 12
					},
					"visible": false
				},
				"parentName": "Tab9959d105TabLabelGridLayout72db1f7d",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tab9959d105TabLabelGroupee76de07",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab9959d105TabLabelGroupee76de07GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab9959d105TabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab9959d105TabLabelGridLayout7c0cc3e5",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab9959d105TabLabelGroupee76de07",
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
						"bindTo": "getUsrBack"
					},
					"style": "BLUE",
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab9959d105TabLabelGridLayout7c0cc3e5"
					},
					"visible": true
				},
				"parentName": "Tab9959d105TabLabelGridLayout7c0cc3e5",
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
						"bindTo": "getUsrNext"
					},
					"style": "BLUE",
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 9,
						"row": 0,
						"layoutName": "Tab9959d105TabLabelGridLayout7c0cc3e5"
					},
					"visible": true
				},
				"parentName": "Tab9959d105TabLabelGridLayout7c0cc3e5",
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
						"bindTo": "getUsrStartProces"
					},
					"style": "BLUE",
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 0,
						"layoutName": "Tab9959d105TabLabelGridLayout7c0cc3e5"
					},
					"visible": true
				},
				"parentName": "Tab9959d105TabLabelGridLayout7c0cc3e5",
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
