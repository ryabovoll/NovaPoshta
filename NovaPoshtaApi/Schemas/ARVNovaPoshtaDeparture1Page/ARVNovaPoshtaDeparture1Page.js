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
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ARVName36199217-dabe-4945-b273-541969d676ab",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ARVName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0,
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": []
				}
			},
			{
				"operation": "insert",
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"name": "Files",
				"values": {
					"itemType": Terrasoft.ViewItemType.DETAIL
				}
			},
			{
				"operation": "insert",
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"name": "NotesControlGroup",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTROL_GROUP,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				}
			},
			{
				"operation": "insert",
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"name": "Notes",
				"values": {
					"bindTo": "ARVNotes",
					"dataValueType": Terrasoft.DataValueType.TEXT,
					"contentType": Terrasoft.ContentType.RICH_TEXT,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
