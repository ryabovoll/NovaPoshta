define("ARVCounterpartyNP1Page", [], function() {
	return {
		entitySchemaName: "ARVCounterpartyNP",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ARVCounterpartyNPFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ARVCounterpartyNP"
				}
			},
			"ARVSchemadb769e14Detail880d21de": {
				"schemaName": "ARVSchemadb769e14Detail",
				"entitySchemaName": "ARVAddressCounterpartyBranch",
				"filter": {
					"detailColumn": "ARVARVCounterpartyNP",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"ARVPhone": {
				"8daf7983-3b52-4024-98cc-1f3f533b12d7": {
					"uId": "8daf7983-3b52-4024-98cc-1f3f533b12d7",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "ARVContact",
							"attributePath": "MobilePhone"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVContact"
							}
						}
					]
				}
			},
			"ARVApiKey": {
				"1544e0d8-e9ee-4a44-a3ee-c0bbcb539077": {
					"uId": "1544e0d8-e9ee-4a44-a3ee-c0bbcb539077",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "ARVApiKey"
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
			
				onButtonREF: function() {
				var IDCounterpartyNP = this.get("Id");
                const runProcessRequest = Ext.create("Terrasoft.RunProcessRequest", {
                    "schemaName": "ARVProcess_580d254",
                    "schemaUId": "b7b0e4d8-bc1b-446e-b376-2a72f1c37521",
                    "parameterValues": {
                        "ProcessSchemaParameter1": IDCounterpartyNP
                    },
                    "resultParameterNames": [
                        "ProcessSchemaParameter2"
                    ]
                    });
                runProcessRequest.execute(function(response) {
                    if (response.isSuccess()) {
                        var respons = response.resultParameterValues["ProcessSchemaParameter2"];
                        Terrasoft.showInformation("Success");
						this.reloadEntity();
                    }
                  }, this);
				},
			
			getUsrApiKey: function() {
				var ARVApiKey = this.get("ARVApiKey");
				var result = !!ARVApiKey;
				return result;
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUP3898c6f3-d840-41ba-a529-207f6169b10d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGa9948b81-3f26-48dc-9e95-13897adde673",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVPhone",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGd563a3f7-a1dc-40e5-bac8-3e49ee778a95",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ARVApiKey",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MyButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.ButtonREF"
					},
					"click": {
						"bindTo": "onButtonREF"
					},
					"enabled": {
						"bindTo": "getUsrApiKey"
					},
					"style": "blue",
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 13,
						"row": 1,
						"layoutName": "Header"
					},
					"visible": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING2eaec8a3-fff5-47c3-9a16-fe1281183e2f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "ARVRef",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING7d10d04f-430f-42f6-a408-29b173379696",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "ARVContactSenderRef",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab6b550b43TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab6b550b43TabLabelTabCaption"
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
				"name": "ARVSchemadb769e14Detail880d21de",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab6b550b43TabLabel",
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
