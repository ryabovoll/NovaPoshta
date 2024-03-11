define("ARVSchemacfbc23b1Page", [], function() {
	return {
		entitySchemaName: "ARVAddressCounterpartyBranch",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"ARVDepartment": {
				"c15307ca-e92d-4b80-86d2-138637a8e40b": {
					"uId": "c15307ca-e92d-4b80-86d2-138637a8e40b",
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
				"18553687-819b-415d-866e-d0758bec37b3": {
					"uId": "18553687-819b-415d-866e-d0758bec37b3",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "ARVDdepartment",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": true,
					"dataValueType": 12
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUP7bfc8655-ae28-406a-8d49-e1f07ab3ec3e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ARVSettlement",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP6cfcfa43-94ba-4755-a060-c900845c1ab7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ARVDepartment",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
