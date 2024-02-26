define("UsrCounterpartyNP1Page", ['ProcessModuleUtilities'], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "UsrCounterpartyNP",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrCounterpartyNPFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrCounterpartyNP"
				}
			},
			"UsrSchemaf8e82c8eDetailfc802a1f": {
				"schemaName": "UsrSchemaf8e82c8eDetail",
				"entitySchemaName": "UsrAddressCounterpartyBranch",
				"filter": {
					"detailColumn": "UsrUsrCounterpartyNP",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrSendersPhone": {
				"2428c5bb-4ba0-4216-af37-02c5fb130a4b": {
					"uId": "2428c5bb-4ba0-4216-af37-02c5fb130a4b",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrCounterparty",
							"attributePath": "MobilePhone"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCounterparty"
							}
						}
					]
				}
			},
			"UsrApiKey": {
				"bcf6554d-7c43-4592-bf89-fcf6e6fc2316": {
					"uId": "bcf6554d-7c43-4592-bf89-fcf6e6fc2316",
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
								"attribute": "UsrApiKey"
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
			onMyButtonClick: function() {
				
				var activeRowId = this.get("Id");
				var message = "Завантаження REF з Нової Пошти розпочато";
				var args = {
					parameters: {
						ProcessSchemaParameter1: activeRowId
					}
				};
				ProcessModuleUtilities.executeProcess({
					"sysProcessName": "UsrProcess_8a4eefd",
					"parameters": args.parameters,
					"callback": function(response) {
						this.hideBodyMask();
					},
					"scope": this
				});
				this.showInformationDialog(message);
				this.reloadEntity();
				},
			
			getUsrApiKey: function() {
				var UsrApiKey = this.get("UsrApiKey");
				var result = !!UsrApiKey;
				return result;
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUP3466ad7d-c266-4a7c-a8ee-a5392f8f503d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCounterparty",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGdc6cd21f-2f66-482d-b52e-6a64b9e5320a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrSendersPhone",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGdbd8cfd5-e611-4e6c-be5c-b0f7818ba189",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrApiKey",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING0a430b5a-a555-4389-b4a4-98943ff2462c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrSenderRef",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MyButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyButtonCaption"
					},
					"click": {
						"bindTo": "onMyButtonClick"
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
					"visible": true,
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRING200bcd5a-a8bd-4fb5-990c-30c9bd99ac98",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrContactSenderRef",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab8b6952d3TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab8b6952d3TabLabelTabCaption"
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
				"name": "UsrSchemaf8e82c8eDetailfc802a1f",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab8b6952d3TabLabel",
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
