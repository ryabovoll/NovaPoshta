define("CounterpartyFreedomUI_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "ARVCounterpartyNP"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "ARVCounterpartyNP",
					"columns": [
						{
							"id": "b39910a4-bc70-4e6d-9339-9dd0bf60fb8c",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ComboBox_1d10rh4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ARVContact_z1w11fj",
					"labelPosition": "auto",
					"control": "$PDS_ARVContact_z1w11fj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_ri3z37c",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ri3z37c_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_1d10rh4",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_h0g45y8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVContactMobilePhone",
					"labelPosition": "auto",
					"control": "$PDS_ARVContactMobilePhone",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_xfc7n8y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVRef_fowcalb",
					"labelPosition": "auto",
					"control": "$PDS_ARVRef_fowcalb",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_ko4plxo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVContactSenderRef_a19ydcn",
					"labelPosition": "auto",
					"control": "$PDS_ARVContactSenderRef_a19ydcn",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_59ms7qp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVEDRPOU_69wnqha",
					"labelPosition": "auto",
					"control": "$PDS_ARVEDRPOU_69wnqha",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_4q2mlo6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVPhone_aj4pwy5",
					"labelPosition": "auto",
					"control": "$PDS_ARVPhone_aj4pwy5"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_6ib2j4y",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVApiKey_zp1lq32",
					"labelPosition": "auto",
					"control": "$PDS_ARVApiKey_zp1lq32",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_f7n7ih0",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_f7n7ih0_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.LoadRef"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_h4lv13w",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_h4lv13w_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#000000",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "none",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_4qfwyss",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_h4lv13w",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_m3fogqn",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_4qfwyss",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_2mh01tl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_2mh01tl_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "ARVAddressCounterpartyBranch",
							"defaultValues": [
								{
									"attributeName": "ARVARVCounterpartyNP",
									"value": "$Id"
								}
							]
						}
					},
					"clickMode": "default",
					"menuItems": [],
					"icon": "add-button-icon"
				},
				"parentName": "FlexContainer_m3fogqn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_0g3o1to",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_0g3o1to_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_4lnrqlkDS"
						}
					}
				},
				"parentName": "FlexContainer_m3fogqn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_lymbz1g",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_lymbz1g_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_m3fogqn",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_7yko0jv",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_7yko0jv_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_4lnrqlk"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_lymbz1g",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_agbdz6o",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_agbdz6o_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "ARVAddressCounterpartyBranch"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_lymbz1g",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_6wywmj9",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_6wywmj9_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_4lnrqlk"
					]
				},
				"parentName": "FlexContainer_m3fogqn",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_h9e6ger",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_h4lv13w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_4lnrqlk",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_4lnrqlk",
					"primaryColumnName": "GridDetail_4lnrqlkDS_Id",
					"columns": [
						{
							"id": "946aef05-5fbd-ee82-e5ed-6e44ddc2e92d",
							"code": "GridDetail_4lnrqlkDS_ARVSettlement",
							"path": "ARVSettlement",
							"caption": "#ResourceString(GridDetail_4lnrqlkDS_ARVSettlement)#",
							"dataValueType": 10,
							"referenceSchemaName": "ARVSettlement",
							"width": 403
						},
						{
							"id": "0ef8b27b-9379-388a-8865-a7540763ed0e",
							"code": "GridDetail_4lnrqlkDS_ARVDepartment",
							"path": "ARVDepartment",
							"caption": "#ResourceString(GridDetail_4lnrqlkDS_ARVDepartment)#",
							"dataValueType": 10,
							"referenceSchemaName": "ARVDepartment",
							"width": 365
						}
					],
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_h9e6ger",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ARVName": {
						"modelConfig": {
							"path": "PDS.ARVName"
						}
					},
					"PDS_ARVPhone_fy9iefy": {
						"modelConfig": {
							"path": "PDS.ARVPhone"
						}
					},
					"PDS_ARVRef_fowcalb": {
						"modelConfig": {
							"path": "PDS.ARVRef"
						}
					},
					"PDS_ARVContactSenderRef_a19ydcn": {
						"modelConfig": {
							"path": "PDS.ARVContactSenderRef"
						}
					},
					"PDS_ARVEDRPOU_69wnqha": {
						"modelConfig": {
							"path": "PDS.ARVEDRPOU"
						}
					},
					"PDS_ARVApiKey_zp1lq32": {
						"modelConfig": {
							"path": "PDS.ARVApiKey"
						}
					},
					"GridDetail_4lnrqlk": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_4lnrqlkDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "ARVDepartment"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_4lnrqlk_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_4lnrqlkDS_ARVSettlement": {
									"modelConfig": {
										"path": "GridDetail_4lnrqlkDS.ARVSettlement"
									}
								},
								"GridDetail_4lnrqlkDS_ARVDepartment": {
									"modelConfig": {
										"path": "GridDetail_4lnrqlkDS.ARVDepartment"
									}
								},
								"GridDetail_4lnrqlkDS_Id": {
									"modelConfig": {
										"path": "GridDetail_4lnrqlkDS.Id"
									}
								}
							}
						}
					},
					"PDS_ARVContact_z1w11fj": {
						"modelConfig": {
							"path": "PDS.ARVContact"
						}
					},
					"GridDetail_4lnrqlk_PredefinedFilter": {
						"value": {
							"items": {},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "ARVAddressCounterpartyBranch"
						}
					},
					"PDS_ARVContactMobilePhone": {
						"modelConfig": {
							"path": "PDS.ARVContactMobilePhone"
						}
					},
					"PDS_ARVPhone_o0ylzsp": {
						"modelConfig": {
							"path": "PDS.ARVPhone"
						}
					},
					"PDS_ARVPhone_aj4pwy5": {
						"modelConfig": {
							"path": "PDS.ARVPhone"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_4lnrqlkDS": [
							{
								"attributePath": "ARVARVCounterpartyNP",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "ARVCounterpartyNP",
							"attributes": {
								"ARVContactMobilePhone": {
									"path": "ARVContact.MobilePhone",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_4lnrqlkDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ARVAddressCounterpartyBranch",
							"attributes": {
								"ARVSettlement": {
									"path": "ARVSettlement"
								},
								"ARVDepartment": {
									"path": "ARVDepartment"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"AttachmentListDS",
					"config"
				],
				"values": {
					"entitySchemaName": "ARVCounterpartyNPFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if (request.attributeName === 'PDS_ARVContactMobilePhone') {
						var RecipientContactMobilePhone = await request.$context.PDS_ARVContactMobilePhone;
						request.$context.PDS_ARVPhone_fy9iefy = RecipientContactMobilePhone;
					}
					return next?.handle(request);
				}
			},
			{
				request: "crt.LoadRef",
				/* Custom implementation of a system request handler. */
				handler: async (request, next) => {
					const handlerChain = sdk.HandlerChainService.instance;
					const result = await handlerChain.process({
						type: "crt.RunBusinessProcessRequest",
						processName: "ARVProcess_580d254",
						processParameters: {
							ProcessSchemaParameter1: await request.$context.Id,
						},
						resultParameterNames: [
							"Answer"
						],
						$context: request.$context
						});

					if (result.success) {
						var Answer = result.resultParameterValues.Answer;
						var jsonObjectAnswer = JSON.parse(Answer);
						var success = jsonObjectAnswer.success === true;
						if (success) {
							Terrasoft.showInformation("✅ REF Завантажено");
							request.$context.executeRequest({
								type: "crt.LoadDataRequest",
								$context: request.$context,
								config: {
									loadType: "reload",
									useLastLoadParameters: true
								},
								dataSourceName: (await request.$context.getPrimaryModelName()) 
							});
						} else {
							Terrasoft.showInformation("Помилка: " + jsonObjectAnswer.errors[0]);
						}
					}
				return next?.handle(request);
			}
		},
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});