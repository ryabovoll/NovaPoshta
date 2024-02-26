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
				"name": "UsrPayerType98e61605-4442-4b15-899d-3a1ca0211753",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrPayerType"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPd4a447ca-1385-4d60-bcd0-2e351fcd866a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrPayerTypeList",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
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
					"bindTo": "UsrPaymentMethod"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP2c83cdf1-d430-4caa-9c70-6351b72fda89",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrPaymentMethodList",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
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
				"index": 4
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
					"bindTo": "UsrCargoType"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP756056e3-29df-4264-b0c7-a90badf2cb42",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrCargoTypeList",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
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
				"index": 7
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
				"index": 8
			},
			{
				"operation": "insert",
				"name": "UsrDepartmenta809b3c7-dd70-4e67-9484-ce7185a152f7",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
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
				"index": 10
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
				"index": 11
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
				"index": 12
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
				"index": 13
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
				"index": 14
			},
			{
				"operation": "insert",
				"name": "UsrCargoTypeLista9ac7dbf-39d8-46fc-adf8-01317725f70d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 7,
						"layoutName": "Header"
					},
					"bindTo": "UsrCargoTypeList"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "UsrInteger1ddf5b290-0e94-4225-9ad1-5d49c8e64562",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "Header"
					},
					"bindTo": "UsrInteger1"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 16
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
				"index": 17
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
				"index": 18
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
				"index": 19
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
				"index": 20
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
				"index": 21
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
				"index": 22
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
				"index": 23
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
				"index": 24
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
				"index": 25
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
				"index": 26
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
				"index": 27
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
				"index": 28
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
				"index": 29
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
				"index": 30
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
