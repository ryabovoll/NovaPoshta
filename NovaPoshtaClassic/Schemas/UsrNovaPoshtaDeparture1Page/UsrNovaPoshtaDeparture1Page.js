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
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "STRINGaaeec792-10fa-4ed5-8def-952ef6dcef5b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPayerType",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGed4aae6d-89fd-4372-9dfe-31a0ea2aa49f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPaymentMethod",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DATETIME2f01b3f4-4e30-4bdb-9c9e-17a2c2fb7ed7",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDateTime",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGf55375bd-2f38-4b9b-90e8-191acbfb7300",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCargoType",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRINGd1c80aa7-9d9f-483a-a5fd-ad592f4dc0d8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrWeight",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING5e0eb443-277c-4a02-87a7-1d9562658916",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrServiceType",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "STRINGca8eee4f-c304-40ee-b9b9-e0a70da24b1d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrSeatsAmount",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "STRING1a744842-5b46-4c72-adf2-eec0d5c4839a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDescription",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "INTEGERb28af9ab-1e3c-4c68-88da-9343f4761ba9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrInteger1",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "STRING95053a79-da02-4ebd-ba33-6ae8c37735dd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrRecipientsPhone",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "STRING8cd81c90-6e7d-4c35-93d7-a6ef622ae2ac",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrRecipientCityName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "STRING269d61bb-8845-4c30-aa5e-cdf436907fe1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrRecipientArea",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "STRING4dd4c9ad-2156-4c21-b6bd-8d6180150534",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrRecipientAddressName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "STRINGe9b8929f-51fb-4852-8a0b-b2c914985e65",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrRecipientHouse",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "STRINGa0664819-cee3-46b8-aa99-d7c27b300b42",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 14,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrRecipientFlat",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "STRINGceef1188-0e38-4029-b392-0bb8015bb23b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 15,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrRecipientName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "STRING02b2e851-e066-4784-9bb0-4c3766746722",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 16,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrRecipientType",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "STRINGe8c3d74a-36d9-40bd-8482-2a946705e332",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 17,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrSettlementType",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "STRING6a0f777b-9a3c-4a75-9a0d-2d0dfa91c04b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 18,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrEDRPOU",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "LOOKUPd4a447ca-1385-4d60-bcd0-2e351fcd866a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrPayerTypeList",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP2c83cdf1-d430-4caa-9c70-6351b72fda89",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrPaymentMethodList",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP756056e3-29df-4264-b0c7-a90badf2cb42",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrCargoTypeList",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPd390d756-079f-408e-926b-253a5ddd7568",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrWeightList",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrPostomat71cf60a0-b017-48cc-b0f0-474f66be55dd",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 6,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrPostomat"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrDepartmenta809b3c7-dd70-4e67-9484-ce7185a152f7",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP02c54105-75f9-4b67-b660-7e7ffe6a1f16",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Header"
					},
					"bindTo": "UsrSeatsAmountList",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrCargoTypeLista9ac7dbf-39d8-46fc-adf8-01317725f70d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Header"
					},
					"bindTo": "UsrCargoTypeList"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrDepartment98a03269-caf7-4b07-85ed-97df3be01b42",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "Header"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "UsrDepartmentfc1eb336-0f27-49ad-b513-5e27391a9f3b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "Header"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "UsrDepartmenta55817eb-d25d-4844-b9ca-cc589cce363f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "Header"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "UsrDepartment07fa4e1b-88ea-4a3e-8541-f0c2fad563dd",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 17,
						"layoutName": "Header"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 11
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
