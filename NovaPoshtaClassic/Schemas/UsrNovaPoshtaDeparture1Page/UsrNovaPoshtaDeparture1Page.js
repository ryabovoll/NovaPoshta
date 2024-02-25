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
