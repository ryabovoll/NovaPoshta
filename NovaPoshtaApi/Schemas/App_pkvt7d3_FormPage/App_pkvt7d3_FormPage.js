define("App_pkvt7d3_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true,
					"icon": null
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
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
					"entitySchemaName": "ARVNovaPoshtaDeparture"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "ARVNovaPoshtaDeparture",
					"columns": [
						{
							"id": "ac29cc93-c5be-4eda-aa96-15ceba92c429",
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
				"name": "GridContainer_kaljmhw",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_rfsk8po",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVCargoTypeNP_qddywqy",
					"labelPosition": "auto",
					"control": "$PDS_ARVCargoTypeNP_qddywqy"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_wmk6fik",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ARVDefault_aimb0nr",
					"labelPosition": "auto",
					"control": "$PDS_ARVDefault_aimb0nr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_f3nklex",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_f3nklex_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_wmk6fik",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_b7q93kq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVPayerTypeNP_lxl5020",
					"labelPosition": "auto",
					"control": "$PDS_ARVPayerTypeNP_lxl5020"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_dsqzsep",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVPaymentMethodNP_429n78q",
					"labelPosition": "auto",
					"control": "$PDS_ARVPaymentMethodNP_429n78q"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_x4ufeir",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_ARVIntDefault_7apy3x8",
					"labelPosition": "auto",
					"control": "$PDS_ARVIntDefault_7apy3x8"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Checkbox_qg5hsqq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVStart_47ssyec",
					"labelPosition": "auto",
					"control": "$PDS_ARVStart_47ssyec"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Checkbox_x6obdhh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVNext_dui6eph",
					"labelPosition": "auto",
					"control": "$PDS_ARVNext_dui6eph"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Checkbox_6yjc0r7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVBack_jr9qq3s",
					"labelPosition": "auto",
					"control": "$PDS_ARVBack_jr9qq3s"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_ya9vk3a",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 9,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVSeatsAmountNP_3kqzt4r",
					"labelPosition": "auto",
					"control": "$PDS_ARVSeatsAmountNP_3kqzt4r"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_jtmgcoy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 10,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVServiceType_d4jtmoi",
					"labelPosition": "auto",
					"control": "$PDS_ARVServiceType_d4jtmoi"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Input_javmjaa",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 11,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVPayerTypeBackNP_1l3perg",
					"labelPosition": "auto",
					"control": "$PDS_ARVPayerTypeBackNP_1l3perg"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "ComboBox_gsskzts",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 12,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Column68_c9wwlrt",
					"labelPosition": "auto",
					"control": "$PDS_Column68_c9wwlrt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "addRecord_zex68dw",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_zex68dw_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_gsskzts",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_t4iydc3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 13,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVRecipientsPhoneNP_8y9be3v",
					"labelPosition": "auto",
					"control": "$PDS_ARVRecipientsPhoneNP_8y9be3v"
				},
				"parentName": "GridContainer_kaljmhw",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_73rqk4e",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_73rqk4e_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": true,
					"labelColor": "#FFFFFF",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
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
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_zo9qf5z",
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
				"parentName": "ExpansionPanel_73rqk4e",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_oaadn0f",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_oaadn0f_caption)#",
					"color": "default",
					"disabled": false,
					"size": "extra-large",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "ExpansionPanel_73rqk4e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_iakua4v",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "ExpansionPanel_73rqk4e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_1toyz4h",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVParcel_3mhbhqq",
					"labelPosition": "right",
					"control": "$PDS_ARVParcel_3mhbhqq",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_iakua4v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_19bc6h1",
				"values": {
					"layoutConfig": {
						"column": 6,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVDocuments_bzfeipb",
					"labelPosition": "right",
					"control": "$PDS_ARVDocuments_bzfeipb",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_iakua4v",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_08cvck2",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVDescriptionNP_nsntye2",
					"labelPosition": "above",
					"control": "$PDS_ARVDescriptionNP_nsntye2",
					"visible": true,
					"readonly": "$IsApplicantReadonly",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_iakua4v",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_95lciqb",
				"values": {
					"layoutConfig": {
						"column": 6,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_ARVCost_hhc0kk6",
					"labelPosition": "above",
					"control": "$PDS_ARVCost_hhc0kk6",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_iakua4v",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_cn0ono0",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ARVWeight_zrli4fd",
					"labelPosition": "above",
					"control": "$PDS_ARVWeight_zrli4fd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": "$visibleWeightSeatsAmount",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_iakua4v",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_pdjmk1x",
				"values": {
					"layoutConfig": {
						"column": 6,
						"row": 3,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ARVSeatsAmount_p29ilvs",
					"labelPosition": "above",
					"control": "$PDS_ARVSeatsAmount_p29ilvs",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": "$visibleWeightSeatsAmount",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_iakua4v",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_yl20lme",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "ExpansionPanel_73rqk4e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_ha2wpct",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_ARVIntWeight_i78sglo",
					"labelPosition": "above",
					"control": "$PDS_ARVIntWeight_i78sglo",
					"visible": "$visibleARVIntWeightLengthWidthHeightWeight",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_yl20lme",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_a40pffo",
				"values": {
					"layoutConfig": {
						"column": 6,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_ARVIntWidth_k0vtuuz",
					"labelPosition": "above",
					"control": "$PDS_ARVIntWidth_k0vtuuz",
					"visible": "$visibleARVIntWeightLengthWidthHeightWeight",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_yl20lme",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_1cym8gy",
				"values": {
					"layoutConfig": {
						"column": 8,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_ARVIntHeight_nr4lt9c",
					"labelPosition": "above",
					"control": "$PDS_ARVIntHeight_nr4lt9c",
					"visible": "$visibleARVIntWeightLengthWidthHeightWeight",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_yl20lme",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_1rjs7uw",
				"values": {
					"layoutConfig": {
						"column": 10,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_ARVFloatVolumeWeight_ngrmvrp",
					"labelPosition": "above",
					"control": "$PDS_ARVFloatVolumeWeight_ngrmvrp",
					"visible": "$visibleARVIntWeightLengthWidthHeightWeight",
					"readonly": true,
					"placeholder": "",
					"tooltip": "#ResourceString(NumberInput_1rjs7uw_tooltip)#"
				},
				"parentName": "GridContainer_yl20lme",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_ykne9gl",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_ARVIntLength_8ye5aqs",
					"labelPosition": "above",
					"control": "$PDS_ARVIntLength_8ye5aqs",
					"visible": "$visibleARVIntWeightLengthWidthHeightWeight",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_yl20lme",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_tecexow",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "ExpansionPanel_73rqk4e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Button_wtrwnga",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_wtrwnga_caption)#",
					"color": "default",
					"disabled": false,
					"size": "extra-large",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "GridContainer_tecexow",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_wsuyu6l",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "ExpansionPanel_73rqk4e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Checkbox_u70d6rl",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVRecipient_bakpqgf",
					"labelPosition": "right",
					"control": "$PDS_ARVRecipient_bakpqgf",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_wsuyu6l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_5nwoqt3",
				"values": {
					"layoutConfig": {
						"column": 6,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVSender_5dba6pw",
					"labelPosition": "right",
					"control": "$PDS_ARVSender_5dba6pw",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_wsuyu6l",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_svmshac",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_svmshac_caption)#",
					"color": "default",
					"disabled": false,
					"size": "extra-large",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "ExpansionPanel_73rqk4e",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_x3p8zbw",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "ExpansionPanel_73rqk4e",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Checkbox_z6n7nrv",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVCash_c3i8fc6",
					"labelPosition": "right",
					"control": "$PDS_ARVCash_c3i8fc6",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_x3p8zbw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_rac70yx",
				"values": {
					"layoutConfig": {
						"column": 6,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVNoCash_84gfw5u",
					"labelPosition": "right",
					"control": "$PDS_ARVNoCash_84gfw5u",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "#ResourceString(Checkbox_rac70yx_tooltip)#"
				},
				"parentName": "GridContainer_x3p8zbw",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_5u3suxv",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_5u3suxv_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": false,
					"labelColor": "#FFFFFF",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
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
				"name": "GridContainer_ntminco",
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
				"parentName": "ExpansionPanel_5u3suxv",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_sh7cha8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_sh7cha8_caption)#",
					"color": "default",
					"disabled": false,
					"size": "extra-large",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "ExpansionPanel_5u3suxv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_nlnlh49",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "ExpansionPanel_5u3suxv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_upymukt",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ARVSenderCounterpartyNP_jw9gf8p",
					"labelPosition": "above",
					"control": "$PDS_ARVSenderCounterpartyNP_jw9gf8p",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 5,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_nlnlh49",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_j16ubd6",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ARVAddressCounterparty_p5607dz",
					"labelPosition": "above",
					"control": "$PDS_ARVAddressCounterparty_p5607dz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 7,
						"row": 1,
						"colSpan": 5,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_nlnlh49",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_zp6ug00",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_zp6ug00_caption)#",
					"color": "default",
					"disabled": false,
					"size": "extra-large",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "ExpansionPanel_5u3suxv",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_tyiuwrm",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "ExpansionPanel_5u3suxv",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_h02ckwe",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ARVRecipientContact_zgb7wim",
					"labelPosition": "above",
					"control": "$PDS_ARVRecipientContact_zgb7wim",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ARVRecipientsPhoneNP",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"multiline": false,
					"label": "#ResourceString(Input_ox85wpb_label)#",
					"labelPosition": "above",
					"control": "$PDS_ARVRecipientContactMobilePhone",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_tdqpob5",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVDepartmentBool_cmtju3h",
					"labelPosition": "right",
					"control": "$PDS_ARVDepartmentBool_cmtju3h",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Checkbox_b63cc8l",
				"values": {
					"layoutConfig": {
						"column": 5,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVaddressBool_89w0cg6",
					"labelPosition": "right",
					"control": "$PDS_ARVaddressBool_89w0cg6",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Checkbox_jbdvsoj",
				"values": {
					"layoutConfig": {
						"column": 8,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVPostomat_wotwgqo",
					"labelPosition": "right",
					"control": "$PDS_ARVPostomat_wotwgqo",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_uhjca2a",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ARVSettlement_6mailm8",
					"labelPosition": "above",
					"control": "$PDS_ARVSettlement_6mailm8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_5g4wdno",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 3,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ARVDepartment_bsikpbs",
					"labelPosition": "above",
					"control": "$PDS_ARVDepartment_bsikpbs",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": "$visibleARVDepartment",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_g8vqr03",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ARVStreet_jw5dl42",
					"labelPosition": "above",
					"control": "$PDS_ARVStreet_jw5dl42",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": "$visibleARVStreetARVHouseARVString1ARVRecipientAddressNote",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_0mly8x5",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVHouse_2hhuryv",
					"labelPosition": "above",
					"control": "$PDS_ARVHouse_2hhuryv",
					"visible": "$visibleARVStreetARVHouseARVString1ARVRecipientAddressNote",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_zoz607l",
				"values": {
					"layoutConfig": {
						"column": 9,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVString1_kd01dpf",
					"labelPosition": "above",
					"control": "$PDS_ARVString1_kd01dpf",
					"visible": "$visibleARVStreetARVHouseARVString1ARVRecipientAddressNote",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Input_vvwaohk",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.PDS_ARVRecipientAddressNote_9im9n51",
					"labelPosition": "above",
					"control": "$PDS_ARVRecipientAddressNote_9im9n51",
					"visible": "$visibleARVStreetARVHouseARVString1ARVRecipientAddressNote",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyiuwrm",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Button_i0izv2z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_i0izv2z_caption)#",
					"color": "default",
					"disabled": false,
					"size": "extra-large",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "ExpansionPanel_5u3suxv",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_6n7a4v5",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "ExpansionPanel_5u3suxv",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Checkbox_eqlwmov",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVRefundForGoods_pqw6rey",
					"labelPosition": "right",
					"control": "$PDS_ARVRefundForGoods_pqw6rey",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_6n7a4v5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_eww1rsx",
				"values": {
					"layoutConfig": {
						"column": 5,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_ARVSumBack_velahk4",
					"labelPosition": "above",
					"control": "$PDS_ARVSumBack_velahk4",
					"visible": "$visibleARVSumBackARVRecipientBackARVSenderBack",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_6n7a4v5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_zm5bd95",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVRecipientBack_x33isf5",
					"labelPosition": "right",
					"control": "$PDS_ARVRecipientBack_x33isf5",
					"visible": "$visibleARVSumBackARVRecipientBackARVSenderBack",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_6n7a4v5",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Checkbox_bso5hij",
				"values": {
					"layoutConfig": {
						"column": 9,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_ARVSenderBack_p5ef9lg",
					"labelPosition": "right",
					"control": "$PDS_ARVSenderBack_p5ef9lg",
					"visible": "$visibleARVSumBackARVRecipientBackARVSenderBack",
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_6n7a4v5",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_qcc9ns8",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_ARVDateTime_aj4291e",
					"labelPosition": "above",
					"control": "$PDS_ARVDateTime_aj4291e",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_6n7a4v5",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_7ibxrqh",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_7ibxrqh_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": true,
					"labelColor": "#FFFFFF",
					"fullWidthHeader": false,
					"titleWidth": "20",
					"padding": {
						"top": "small",
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_22h933d",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
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
				"parentName": "ExpansionPanel_7ibxrqh",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_6fayk7f",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "ExpansionPanel_7ibxrqh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_nedot1p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVName_ahqchae",
					"labelPosition": "above",
					"control": "$PDS_ARVName_ahqchae",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_6fayk7f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_tfmbd2d",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVEstimatedDeliveryDate_zuzdam5",
					"labelPosition": "above",
					"control": "$PDS_ARVEstimatedDeliveryDate_zuzdam5",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_6fayk7f",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_i5eo8gc",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_ARVCostOnSite_llrrr4j",
					"labelPosition": "above",
					"control": "$PDS_ARVCostOnSite_llrrr4j",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_6fayk7f",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_pdy8j1i",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ARVStatusDocumentsDescriptionString_7kxaco7",
					"labelPosition": "above",
					"control": "$PDS_ARVStatusDocumentsDescriptionString_7kxaco7",
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_6fayk7f",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Button_e7ib8yk",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_e7ib8yk_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "import-data-button-icon",
					"clicked": {
						"request": "crt.onMyButtonClickSuccess"
					},
					"clickMode": "default"
				},
				"parentName": "GridContainer_6fayk7f",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_64ec4gg",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_64ec4gg_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": true,
					"labelColor": "#FFFFFF",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
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
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ypqtqcn",
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
				"parentName": "ExpansionPanel_64ec4gg",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_7zzrgk2",
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
				"parentName": "GridContainer_ypqtqcn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ikj7n24",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "ExpansionPanel_64ec4gg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MyButtonBack",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(MyButtonBack_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.onMyButtonClickBack"
					},
					"clickMode": "default",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"icon": "back-button-icon"
				},
				"parentName": "GridContainer_ikj7n24",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MyButtonNext",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(MyButtonNext_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.onMyButtonClickNext"
					},
					"clickMode": "default",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"icon": "open-button-icon"
				},
				"parentName": "GridContainer_ikj7n24",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MyButtonStartProces",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ebye6vd_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.CreateInvoice"
					},
					"clickMode": "default",
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"icon": "process-button-icon"
				},
				"parentName": "GridContainer_ikj7n24",
				"propertyName": "items",
				"index": 2
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
					"PDS_ARVRecipientsPhoneNP_sd4w60c": {
						"modelConfig": {
							"path": "PDS.ARVRecipientsPhoneNP"
						}
					},
					"PDS_ARVRecipientContactMobilePhone": {
						"modelConfig": {
							"path": "PDS.ARVRecipientContactMobilePhone"
						}
					},
					"PDS_ARVRecipientBack_newch60": {
						"modelConfig": {
							"path": "PDS.ARVRecipientBack"
						}
					},
					"PDS_ARVDescriptionNP_nsntye2": {
						"modelConfig": {
							"path": "PDS.ARVDescriptionNP"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_Column64_0k5pr6j": {
						"modelConfig": {
							"path": "PDS.AVRParcelType"
						}
					},
					"PDS_ARVCost_hhc0kk6": {
						"modelConfig": {
							"path": "PDS.ARVCost"
						}
					},
					"PDS_ARVIntWeight_i78sglo": {
						"modelConfig": {
							"path": "PDS.ARVIntWeight"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_ARVIntLength_8ye5aqs": {
						"modelConfig": {
							"path": "PDS.ARVIntLength"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_ARVIntWidth_k0vtuuz": {
						"modelConfig": {
							"path": "PDS.ARVIntWidth"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_ARVIntHeight_nr4lt9c": {
						"modelConfig": {
							"path": "PDS.ARVIntHeight"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_ARVFloatVolumeWeight_ngrmvrp": {
						"modelConfig": {
							"path": "PDS.ARVFloatVolumeWeight"
						}
					},
					"PDS_Column65_3y2p37o": {
						"modelConfig": {
							"path": "PDS.Column65"
						}
					},
					"PDS_Column66_69ux6e0": {
						"modelConfig": {
							"path": "PDS.Column66"
						}
					},
					"PDS_Column67_3heotlj": {
						"modelConfig": {
							"path": "PDS.Column67"
						}
					},
					"PDS_Column67_avjv3y3": {
						"modelConfig": {
							"path": "PDS.Column67"
						}
					},
					"PDS_Column68_5jysyh5": {
						"modelConfig": {
							"path": "PDS.Column68"
						}
					},
					"PDS_ARVSettlement_l294myi": {
						"modelConfig": {
							"path": "PDS.ARVSettlement"
						}
					},
					"PDS_ARVHouse_gnb9hh4": {
						"modelConfig": {
							"path": "PDS.ARVHouse"
						}
					},
					"PDS_ARVString1_ecoxa89": {
						"modelConfig": {
							"path": "PDS.ARVString1"
						}
					},
					"PDS_ARVRecipientAddressNote_oebyx6g": {
						"modelConfig": {
							"path": "PDS.ARVRecipientAddressNote"
						}
					},
					"PDS_ARVRefundForGoods_327hu9z": {
						"modelConfig": {
							"path": "PDS.ARVRefundForGoods"
						}
					},
					"PDS_ARVCost_gmbvf0o": {
						"modelConfig": {
							"path": "PDS.ARVCost"
						}
					},
					"PDS_ARVRecipientBack_w71qm5o": {
						"modelConfig": {
							"path": "PDS.ARVRecipientBack"
						}
					},
					"PDS_Column64_fskussd": {
						"modelConfig": {
							"path": "PDS.AVRParcelType"
						}
					},
					"PDS_ARVStreet_6qcuvf8": {
						"modelConfig": {
							"path": "PDS.ARVStreet"
						}
					},
					"PDS_ARVSumBack_z773toi": {
						"modelConfig": {
							"path": "PDS.ARVSumBack"
						}
					},
					"PDS_ARVDateTime_82vi5kf": {
						"modelConfig": {
							"path": "PDS.ARVDateTime"
						}
					},
					"PDS_ARVSeatsAmount_p29ilvs": {
						"modelConfig": {
							"path": "PDS.ARVSeatsAmount"
						}
					},
					"PDS_AVRPayerForReturn_tu5hlwz": {
						"modelConfig": {
							"path": "PDS.AVRPayerForReturn"
						}
					},
					"PDS_AVRPayerForReturn_14dzmr5": {
						"modelConfig": {
							"path": "PDS.AVRPayerForReturn"
						}
					},
					"PDS_ARVName_ahqchae": {
						"modelConfig": {
							"path": "PDS.ARVName"
						}
					},
					"PDS_ARVCostOnSite_llrrr4j": {
						"modelConfig": {
							"path": "PDS.ARVCostOnSite"
						}
					},
					"PDS_ARVEstimatedDeliveryDate_zuzdam5": {
						"modelConfig": {
							"path": "PDS.ARVEstimatedDeliveryDate"
						}
					},
					"PDS_ARVStatusDocumentsDescriptionString_7kxaco7": {
						"modelConfig": {
							"path": "PDS.ARVStatusDocumentsDescriptionString"
						}
					},
					"PDS_ARVCargoTypeNP_qddywqy": {
						"modelConfig": {
							"path": "PDS.ARVCargoTypeNP"
						}
					},
					"PDS_ARVDefault_ozg5gq2": {
						"modelConfig": {
							"path": "PDS.ARVDefault"
						}
					},
					"PDS_ARVParcel_3mhbhqq": {
						"modelConfig": {
							"path": "PDS.ARVParcel"
						}
					},
					"PDS_ARVDocuments_bzfeipb": {
						"modelConfig": {
							"path": "PDS.ARVDocuments"
						}
					},
					"PDS_ARVDefault_aimb0nr": {
						"modelConfig": {
							"path": "PDS.ARVDefault"
						}
					},
					"PDS_ARVPayerTypeNP_lxl5020": {
						"modelConfig": {
							"path": "PDS.ARVPayerTypeNP"
						}
					},
					"PDS_ARVPaymentMethodNP_429n78q": {
						"modelConfig": {
							"path": "PDS.ARVPaymentMethodNP"
						}
					},
					"PDS_ARVSender_5dba6pw": {
						"modelConfig": {
							"path": "PDS.ARVSender"
						}
					},
					"PDS_ARVCash_c3i8fc6": {
						"modelConfig": {
							"path": "PDS.ARVCash"
						}
					},
					"PDS_ARVNoCash_84gfw5u": {
						"modelConfig": {
							"path": "PDS.ARVNoCash"
						}
					},
					"PDS_ARVIntDefault_7apy3x8": {
						"modelConfig": {
							"path": "PDS.ARVIntDefault"
						}
					},
					"PDS_ARVStart_47ssyec": {
						"modelConfig": {
							"path": "PDS.ARVStart"
						}
					},
					"PDS_ARVNext_dui6eph": {
						"modelConfig": {
							"path": "PDS.ARVNext"
						}
					},
					"PDS_ARVBack_jr9qq3s": {
						"modelConfig": {
							"path": "PDS.ARVBack"
						}
					},
					"PDS_ARVSeatsAmountNP_3kqzt4r": {
						"modelConfig": {
							"path": "PDS.ARVSeatsAmountNP"
						}
					},
					"visibleARVIntWeightLengthWidthHeightWeight": {},
					"visibleWeightSeatsAmount": {},
					"IsApplicantReadonly": {},
					"visibleARVDepartment": {},
					"visibleARVStreetARVHouseARVString1ARVRecipientAddressNote": {},
					"visibleARVSumBackARVRecipientBackARVSenderBack": {},
					"ContactID": {},
					"PDS_ARVWeight_zrli4fd": {
						"modelConfig": {
							"path": "PDS.ARVWeight"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_ARVSenderCounterpartyNP_jw9gf8p": {
						"modelConfig": {
							"path": "PDS.ARVSenderCounterpartyNP"
						}
					},
					"PDS_ARVAddressCounterparty_p5607dz": {
						"modelConfig": {
							"path": "PDS.ARVAddressCounterparty"
						}
					},
					"PDS_ARVRecipientContact_zgb7wim": {
						"modelConfig": {
							"path": "PDS.ARVRecipientContact"
						}
					},
					"PDS_ARVRecipientsPhoneNP_hva1e7o": {
						"modelConfig": {
							"path": "PDS.ARVRecipientsPhoneNP"
						}
					},
					"PDS_ARVDepartmentBool_cmtju3h": {
						"modelConfig": {
							"path": "PDS.ARVDepartmentBool"
						}
					},
					"PDS_ARVaddressBool_89w0cg6": {
						"modelConfig": {
							"path": "PDS.ARVaddressBool"
						}
					},
					"PDS_ARVPostomat_wotwgqo": {
						"modelConfig": {
							"path": "PDS.ARVPostomat"
						}
					},
					"PDS_ARVSettlement_6mailm8": {
						"modelConfig": {
							"path": "PDS.ARVSettlement"
						}
					},
					"PDS_ARVDepartment_bsikpbs": {
						"modelConfig": {
							"path": "PDS.ARVDepartment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_ARVStreet_jw5dl42": {
						"modelConfig": {
							"path": "PDS.ARVStreet"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_ARVHouse_2hhuryv": {
						"modelConfig": {
							"path": "PDS.ARVHouse"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_ARVString1_kd01dpf": {
						"modelConfig": {
							"path": "PDS.ARVString1"
						}
					},
					"PDS_ARVRecipientAddressNote_9im9n51": {
						"modelConfig": {
							"path": "PDS.ARVRecipientAddressNote"
						}
					},
					"PDS_ARVRefundForGoods_pqw6rey": {
						"modelConfig": {
							"path": "PDS.ARVRefundForGoods"
						}
					},
					"PDS_ARVSumBack_velahk4": {
						"modelConfig": {
							"path": "PDS.ARVSumBack"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_ARVRecipientBack_x33isf5": {
						"modelConfig": {
							"path": "PDS.ARVRecipientBack"
						}
					},
					"PDS_ARVSenderBack_p5ef9lg": {
						"modelConfig": {
							"path": "PDS.ARVSenderBack"
						}
					},
					"PDS_ARVDateTime_aj4291e": {
						"modelConfig": {
							"path": "PDS.ARVDateTime"
						}
					},
					"PDS_ARVServiceType_d4jtmoi": {
						"modelConfig": {
							"path": "PDS.ARVServiceType"
						}
					},
					"PDS_ARVPayerTypeBackNP_1l3perg": {
						"modelConfig": {
							"path": "PDS.ARVPayerTypeBackNP"
						}
					},
					"PDS_Column68_c9wwlrt": {
						"modelConfig": {
							"path": "PDS.Column68"
						}
					},
					"PDS_ARVRecipientsPhoneNP_8y9be3v": {
						"modelConfig": {
							"path": "PDS.ARVRecipientsPhoneNP"
						}
					},
					"PDS_ARVRecipient_bakpqgf": {
						"modelConfig": {
							"path": "PDS.ARVRecipient"
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
					"primaryDataSourceName": "PDS"
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
							"entitySchemaName": "ARVNovaPoshtaDeparture",
							"attributes": {
								"ARVRecipientContactMobilePhone": {
									"path": "ARVRecipientContact.MobilePhone",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
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
					"entitySchemaName": "ARVNovaPoshtaDepartureFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
			request: "crt.onMyButtonClickSuccess",
			handler: async (request, next) => {
				const handlerChain = sdk.HandlerChainService.instance;
				const result = await handlerChain.process({
					type: "crt.RunBusinessProcessRequest",
					processName: "ARVProcess_7d93731",
					processParameters: {
						ProcessSchemaParameter1: await request.$context.Id,
					},
					resultParameterNames: [
						"apiKey"
					],
					$context: request.$context
					});

					if (result.success) {
						var IntDocNumber = await request.$context.PDS_ARVName_ahqchae;
						var apiKey = result.resultParameterValues.apiKey;
						var urlNP = "https://my.novaposhta.ua/orders/printMarking100x100/orders[]/" + IntDocNumber + "/type/pdf/apiKey/" + apiKey + "/zebra";
						window.open(urlNP, '_blank');

					} else {
							Terrasoft.showInformation("Произошла ошибка в запросе. Response: " + JSON.stringify(response));
						}
				
				return next?.handle(request);
			}
		},
			/**{
				request: "crt.SaveRecordRequest",
				handler: async (request, next) => {
					request.preventCardClose = true;
					return next.handle(request);
				}
			},
		/**{
			request: "crt.LoadDataRequest",
			handler: async (request, next) => {
				debugger;
				// Проверяем, что фильтрация применяется только для определённого источника данных
				if (request.dataSourceName !== "PDS_ARVAddressCounterparty_p5607dz_List_DS") {
				  	return await next?.handle(request);
				}
									// Получаем значение из поля "Контакт отправителя"
				const senderCounterparty = await request.$context.PDS_ARVSenderCounterpartyNP_vp2cbpn;
				const senderCounterpartyId = senderCounterparty?.value;
				// Добавляем фильтр для "Адрес отправителя"
				request.parameters.push({
					type: "filter",
					value: {
						filterType: 6, // Группа фильтров
						isEnabled: true,
						items: {
							"ARVSenderFilter": { // Уникальный идентификатор фильтра
								filterType: 1, // Простой фильтр
								comparisonType: 3, // Тип сравнения: равно
								isEnabled: true,
								leftExpression: {
									expressionType: 0, // Колонка
									columnPath: "ARVARVCounterpartyNP" // Поле, по которому фильтруем
								},
								rightExpression: {
									expressionType: 2, // Параметр
									parameter: {
										dataValueType: 1, // Тип данных: строка (ID)
										value: senderCounterpartyId // Значение для фильтрации
									}
								}
							}
						}
					}
				});
				return await next?.handle(request);
			}
		},**/
		{
			request: "usr.onMyButtonClickNext",
			handler: async (request, next) => {
				var Default = await request.$context.PDS_ARVIntDefault_7apy3x8;
				Default += 1;
				request.$context.PDS_ARVIntDefault_7apy3x8 = Default;
				request.$context.PDS_ARVBack_jr9qq3s = true;
				if (Default === 2) {
    				request.$context.PDS_ARVNext_dui6eph = false;
					}
				return next?.handle(request);
			}
		},
				{
			request: "usr.onMyButtonClickBack",
			handler: async (request, next) => {
				var Default = await request.$context.PDS_ARVIntDefault_7apy3x8;
				Default -= 1;
				request.$context.PDS_ARVIntDefault_7apy3x8 = Default;
				request.$context.PDS_ARVNext_dui6eph = true;
				if (Default === 0) {
    				request.$context.PDS_ARVBack_jr9qq3s = false;
					}
				return next?.handle(request);
			}
		},
		{
			request: "crt.CreateInvoice",
			/* Custom implementation of a system request handler. */
			handler: async (request, next) => {
				const handlerChain = sdk.HandlerChainService.instance;
				const result = await handlerChain.process({
					type: "crt.RunBusinessProcessRequest",
					processName: "ARVProcess_f75bdbb",
					processParameters: {
						ProcessSchemaParameter1: await request.$context.Id,
					},
					resultParameterNames: [
						"DocNumber"
					],
					$context: request.$context
					});

				if (result.success) {
					var DocNumber = result.resultParameterValues.DocNumber;
					var jsonObjectDocNumber;
					try {
						jsonObjectDocNumber = JSON.parse(DocNumber);
					} catch (e) {
						Terrasoft.showInformation("Ошибка разбора JSON: " + e.message);
						return;
					}
					var success = jsonObjectDocNumber.success === true;
					if (success) {
						var data = jsonObjectDocNumber.data;
						if (data && data.length > 0) {
							var intDocNumber = data[0].IntDocNumber;
							Terrasoft.showInformation("Створено накладну: " + intDocNumber);
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
							Terrasoft.showInformation("Помилка: " + jsonObjectDocNumber.errors[0]);
							request.$context.PDS_ARVStart_47ssyec = false;
							request.$context.PDS_ARVSettlement_6mailm8 = null;
							request.$context.PDS_ARVDepartment_bsikpbs = null;
							request.$context.PDS_ARVBack_jr9qq3s = true;
						}
					} else {
						Terrasoft.showInformation("Помилка: " + jsonObjectDocNumber.errors[0]);
						request.$context.PDS_ARVStart_47ssyec = false;
						request.$context.PDS_ARVSettlement_6mailm8 = null;
						request.$context.PDS_ARVDepartment_bsikpbs = null;
						request.$context.PDS_ARVBack_jr9qq3s = true;
					}
				} else {
						Terrasoft.showInformation("Произошла ошибка в запросе. Response: " + JSON.stringify(response));
						request.$context.executeRequest({
							type: "crt.LoadDataRequest",
							$context: request.$context,
							config: {
								loadType: "reload",
								useLastLoadParameters: true
							},
							dataSourceName: (await request.$context.getPrimaryModelName()) 
                        });
					}
				
				return next?.handle(request);
			}
		},
		{
			request: "crt.HandleViewModelAttributeChangeRequest",
			handler: async (request, next) => {
				var Parcel = await request.$context.PDS_ARVParcel_3mhbhqq;
				var document = await request.$context.PDS_ARVDocuments_bzfeipb;
				var ARVRecipient = await request.$context.PDS_ARVRecipient_bakpqgf;
				var ARVSender = await request.$context.PDS_ARVSender_5dba6pw;
				var ARVCash = await request.$context.PDS_ARVCash_c3i8fc6;
				var ARVNoCash = await request.$context.PDS_ARVNoCash_84gfw5u;
				var DepartmentBool = await request.$context.PDS_ARVDepartmentBool_cmtju3h;
				var addressBool = await request.$context.PDS_ARVaddressBool_89w0cg6;
				var Postomat = await request.$context.PDS_ARVPostomat_wotwgqo;
				var ARVRecipientBack = await request.$context.PDS_ARVRecipientBack_x33isf5;
				var ARVSenderBack = await request.$context.PDS_ARVSenderBack_p5ef9lg;
				var ARVRefundForGoods = await request.$context.PDS_ARVRefundForGoods_327hu9z;
				var ARVName = await request.$context.PDS_ARVName_ahqchae;
				
				//если поля Длина см Ширина см Высота заполнены то просчитываем "объемный вес" 
				if (request.attributeName === 'PDS_ARVIntLength_8ye5aqs' || request.attributeName === 'PDS_ARVIntWidth_k0vtuuz' || request.attributeName === 'PDS_ARVIntHeight_nr4lt9c') {
					var length = await request.$context.PDS_ARVIntLength_8ye5aqs;
					var width = await request.$context.PDS_ARVIntWidth_k0vtuuz;
					var height = await request.$context.PDS_ARVIntHeight_nr4lt9c;
					if (length > 0 && width > 0 && height > 0) {
						var volumeWeight = (length * width * height) / 4000;
						request.$context.PDS_ARVFloatVolumeWeight_ngrmvrp = volumeWeight;
					}
				}
				
				// если булевское поле Документ заполнили True
				else if (request.attributeName === 'PDS_ARVDocuments_bzfeipb') {
					if (document) {
						request.$context.PDS_ARVFloatVolumeWeight_ngrmvrp = 0;
						request.$context.PDS_ARVIntLength_8ye5aqs = 0;
						request.$context.PDS_ARVIntWidth_k0vtuuz = 0;
						request.$context.PDS_ARVIntHeight_nr4lt9c = 0;
						request.$context.PDS_ARVIntWeight_i78sglo = null;
						request.$context.PDS_ARVCargoTypeNP_qddywqy = "Documents";
						request.$context.PDS_ARVDescriptionNP_nsntye2 = "Документи";
						request.$context.IsApplicantReadonly = true;
						request.$context.PDS_ARVParcel_3mhbhqq = false;
						request.$context.visibleARVIntWeightLengthWidthHeightWeight = false;
						request.$context.visibleWeightSeatsAmount = true;
						request.$context.enableAttributeValidator('PDS_ARVWeight_zrli4fd', 'required');
						request.$context.disableAttributeValidator('PDS_ARVIntLength_8ye5aqs', 'required');
						request.$context.disableAttributeValidator('PDS_ARVIntWidth_k0vtuuz', 'required');
						request.$context.disableAttributeValidator('PDS_ARVIntHeight_nr4lt9c', 'required');
						request.$context.enableAttributeValidator('PDS_ARVIntWeight_i78sglo', 'required');
						request.$context.enableAttributeValidator('PDS_ARVDescriptionNP_nsntye2', 'required');
					}
					else if (!Parcel && !document) {
						request.$context.PDS_ARVCargoTypeNP_qddywqy = null;
						request.$context.PDS_ARVDescriptionNP_nsntye2 = null;
						request.$context.IsApplicantReadonly = false;
						request.$context.PDS_ARVWeight_zrli4fd = null;
						request.$context.visibleARVIntWeightLengthWidthHeightWeight = false;
						request.$context.visibleWeightSeatsAmount = false;
					}
				}
				// Если булевское поле Посылка заполнено
				else if (request.attributeName === 'PDS_ARVParcel_3mhbhqq') {
					if (Parcel) {
						request.$context.PDS_ARVCargoTypeNP_qddywqy = "Cargo";
						request.$context.PDS_ARVDocuments_bzfeipb = false;
						request.$context.PDS_ARVDescriptionNP_nsntye2 = null;
						request.$context.IsApplicantReadonly = false;
						request.$context.visibleARVIntWeightLengthWidthHeightWeight = true;
						request.$context.visibleWeightSeatsAmount = false;
						request.$context.PDS_ARVWeight_zrli4fd = null;
						request.$context.PDS_ARVIntWeight_i78sglo = null;
						request.$context.disableAttributeValidator('PDS_ARVWeight_zrli4fd', 'required');
						request.$context.enableAttributeValidator('PDS_ARVIntLength_8ye5aqs', 'required');
						request.$context.enableAttributeValidator('PDS_ARVIntWidth_k0vtuuz', 'required');
						request.$context.enableAttributeValidator('PDS_ARVIntHeight_nr4lt9c', 'required');
						request.$context.enableAttributeValidator('PDS_ARVIntWeight_i78sglo', 'required');
						request.$context.enableAttributeValidator('PDS_ARVDescriptionNP_nsntye2', 'required');
					}
					else if (!Parcel && !document) {
						request.$context.PDS_ARVCargoTypeNP_qddywqy = null;
						request.$context.PDS_ARVDescriptionNP_nsntye2 = null;
						request.$context.IsApplicantReadonly = false;
						request.$context.PDS_ARVIntWeight_i78sglo = null;
						request.$context.visibleARVIntWeightLengthWidthHeightWeight = false;
						request.$context.visibleWeightSeatsAmount = false;
					}
				}
				//Если булевское поле Плательщик за доставку "Получатель" заполнено
				else if (request.attributeName === 'PDS_ARVRecipient_bakpqgf') {
					if (ARVRecipient) {
						request.$context.PDS_ARVPayerTypeNP_lxl5020 = "Recipient";
						request.$context.PDS_ARVSender_5dba6pw = false;
					}
					else if (!ARVRecipient && !ARVSender) {
						request.$context.PDS_ARVPayerTypeNP_lxl5020 = null;
					}
				}
				//Если булевское поле Плательщик за доставку "Отправитель" заполнено
				else if (request.attributeName === 'PDS_ARVSender_5dba6pw') {
					if (ARVSender) {
						request.$context.PDS_ARVPayerTypeNP_lxl5020 = "Sender";
						request.$context.PDS_ARVRecipient_bakpqgf = false;
					}
					else if (!ARVRecipient && !ARVSender) {
						request.$context.PDS_ARVPayerTypeNP_lxl5020 = null;
					}
				}
				//Если булевское поле Оплата за доставку "Наличные" заполнено
				else if (request.attributeName === 'PDS_ARVCash_c3i8fc6') {
					if (ARVCash) {
						
						request.$context.PDS_ARVPaymentMethodNP_429n78q = "Cash";
						request.$context.PDS_ARVNoCash_84gfw5u = false;
					}
					else if (!ARVCash && !ARVNoCash) {
						request.$context.PDS_ARVPaymentMethodNP_429n78q = null;
					}
				}
				//Если булевское поле Оплата за доставку "Безналичные" заполнено
				else if (request.attributeName === 'PDS_ARVNoCash_84gfw5u') {
					if (ARVNoCash) {
						request.$context.PDS_ARVPaymentMethodNP_429n78q = "NonCash";
						request.$context.PDS_ARVCash_c3i8fc6 = false;
					}
					else if (!ARVCash && !ARVNoCash) {
						request.$context.PDS_ARVPaymentMethodNP_429n78q = null;
					}
				}
				//Вес
				else if (request.attributeName === 'PDS_ARVWeight_zrli4fd') {
					var ARVWeight = await request.$context.PDS_ARVWeight_zrli4fd;
					var selectedARVWeight = ARVWeight?.value;
					if (selectedARVWeight === "833c555f-a036-4d78-9788-e643ca8198af"){
						request.$context.PDS_ARVIntWeight_i78sglo = 0.5;
					}
					else if (selectedARVWeight === "a6c40a53-f8a8-49f4-a273-7fd7f0d5e937"){
						request.$context.PDS_ARVIntWeight_i78sglo = 0.1;
					}
					else if (selectedARVWeight === "a1ad00a8-5470-4056-89bf-25dbd01fab50"){
						request.$context.PDS_ARVIntWeight_i78sglo = 1.0;
					}
					else{
						request.$context.PDS_ARVIntWeight_i78sglo = null;
					}
				}
				
				else if (request.attributeName === 'PDS_ARVCargoTypeNP_qddywqy' || request.attributeName === 'PDS_ARVPayerTypeNP_lxl5020' || request.attributeName === 'PDS_ARVPaymentMethodNP_429n78q' || request.attributeName === 'PDS_ARVSeatsAmountNP_3kqzt4r' || request.attributeName === 'PDS_ARVIntWeight_i78sglo' ||request.attributeName === 'PDS_ARVDescriptionNP_nsntye2') {
					var ARVCargoTypeNP = await request.$context.PDS_ARVCargoTypeNP_qddywqy;
					var ARVPayerTypeNP = await request.$context.PDS_ARVPayerTypeNP_lxl5020;
					var ARVPaymentMethodNP = await request.$context.PDS_ARVPaymentMethodNP_429n78q;
					var ARVSeatsAmountNP = await request.$context.PDS_ARVSeatsAmountNP_3kqzt4r;
					var ARVIntWeight = await request.$context.PDS_ARVIntWeight_i78sglo;
					var ARVDescriptionNP = await request.$context.PDS_ARVDescriptionNP_nsntye2;
					if (ARVCargoTypeNP != null && ARVPayerTypeNP != null && ARVPaymentMethodNP != null && ARVSeatsAmountNP != null && ARVIntWeight != null && ARVDescriptionNP != null && ARVName == ""){
						request.$context.PDS_ARVNext_dui6eph = true;
					}
					else{
						request.$context.PDS_ARVNext_dui6eph = false;
					}
				}
				else if (request.attributeName === 'PDS_ARVStart_47ssyec') {
					var ARVStart = await request.$context.PDS_ARVStart_47ssyec;
					if (ARVStart){
						request.$context.PDS_ARVNext_dui6eph = false;
						request.$context.PDS_ARVBack_jr9qq3s = false;
						
					}
				}
				else if (request.attributeName === 'PDS_ARVRecipientContactMobilePhone') {
					var RecipientContactMobilePhone = await request.$context.PDS_ARVRecipientContactMobilePhone;
					request.$context.PDS_ARVRecipientsPhoneNP_hva1e7o = RecipientContactMobilePhone;
				}
				//На отделение
				else if (request.attributeName === 'PDS_ARVDepartmentBool_cmtju3h') {
					if (DepartmentBool){
						request.$context.PDS_ARVaddressBool_89w0cg6 = false;
						request.$context.PDS_ARVPostomat_wotwgqo = false;
						request.$context.PDS_ARVServiceType_d4jtmoi = "WarehouseWarehouse";
						request.$context.enableAttributeValidator('PDS_ARVDepartment_bsikpbs', 'required');
						request.$context.visibleARVDepartment = true;
						request.$context.disableAttributeValidator('PDS_ARVStreet_jw5dl42', 'required');
						request.$context.disableAttributeValidator('PDS_ARVHouse_2hhuryv', 'required');
						request.$context.visibleARVStreetARVHouseARVString1ARVRecipientAddressNote = false;
					}
					else if (!DepartmentBool && !addressBool && !Postomat){
						request.$context.PDS_ARVServiceType_d4jtmoi = null;
						request.$context.disableAttributeValidator('PDS_ARVDepartment_bsikpbs', 'required');
						request.$context.visibleARVDepartment = false;
						request.$context.disableAttributeValidator('PDS_ARVStreet_jw5dl42', 'required');
						request.$context.disableAttributeValidator('PDS_ARVHouse_2hhuryv', 'required');
						request.$context.visibleARVStreetARVHouseARVString1ARVRecipientAddressNote = false;
					}
				}
				//На адрес
				else if (request.attributeName === 'PDS_ARVaddressBool_89w0cg6') {
					if (addressBool){
						request.$context.PDS_ARVDepartmentBool_cmtju3h = false;
						request.$context.PDS_ARVPostomat_wotwgqo = false;
						request.$context.PDS_ARVServiceType_d4jtmoi = "WarehouseDoors";
						request.$context.disableAttributeValidator('PDS_ARVDepartment_bsikpbs', 'required');
						request.$context.visibleARVDepartment = false;
						request.$context.enableAttributeValidator('PDS_ARVStreet_jw5dl42', 'required');
						request.$context.enableAttributeValidator('PDS_ARVHouse_2hhuryv', 'required');
						request.$context.visibleARVStreetARVHouseARVString1ARVRecipientAddressNote = true;
					}
					else if (!DepartmentBool && !addressBool && !Postomat){
						request.$context.PDS_ARVServiceType_d4jtmoi = null;
						request.$context.disableAttributeValidator('PDS_ARVDepartment_bsikpbs', 'required');
						request.$context.visibleARVDepartment = false;
						request.$context.disableAttributeValidator('PDS_ARVStreet_jw5dl42', 'required');
						request.$context.disableAttributeValidator('PDS_ARVHouse_2hhuryv', 'required');
						request.$context.visibleARVStreetARVHouseARVString1ARVRecipientAddressNote = false;
					}
				}
				//На почтомат
				else if (request.attributeName === 'PDS_ARVPostomat_wotwgqo') {
					if (Postomat){
						request.$context.PDS_ARVDepartmentBool_cmtju3h = false;
						request.$context.PDS_ARVaddressBool_89w0cg6 = false;
						request.$context.PDS_ARVServiceType_d4jtmoi = "WarehousePostomat";
						request.$context.enableAttributeValidator('PDS_ARVDepartment_bsikpbs', 'required');
						request.$context.visibleARVDepartment = true;
						request.$context.disableAttributeValidator('PDS_ARVStreet_jw5dl42', 'required');
						request.$context.disableAttributeValidator('PDS_ARVHouse_2hhuryv', 'required');
						request.$context.visibleARVStreetARVHouseARVString1ARVRecipientAddressNote = false;
					}
					else if (!DepartmentBool && !addressBool && !Postomat){
						request.$context.PDS_ARVServiceType_d4jtmoi = null;
						request.$context.disableAttributeValidator('PDS_ARVDepartment_bsikpbs', 'required');
						request.$context.visibleARVDepartment = false;
						request.$context.disableAttributeValidator('PDS_ARVStreet_jw5dl42', 'required');
						request.$context.disableAttributeValidator('PDS_ARVHouse_2hhuryv', 'required');
						request.$context.visibleARVStreetARVHouseARVString1ARVRecipientAddressNote = false;
					}
				}
				//плательщик за доставку средств "Получатель"
				else if (request.attributeName === 'PDS_ARVRecipientBack_x33isf5') {
					if (ARVRecipientBack){
						request.$context.PDS_ARVSenderBack_p5ef9lg = false;
						request.$context.PDS_ARVPayerTypeBackNP_1l3perg = "Recipient";
					}
				}
				//плательщик за доставку средств "Отправитель"
				else if (request.attributeName === 'PDS_ARVSenderBack_p5ef9lg') {
					if (ARVSenderBack){
						request.$context.PDS_ARVRecipientBack_x33isf5 = false;
						request.$context.PDS_ARVPayerTypeBackNP_1l3perg = "Sender";
					}
				}
				//Возврат средств
				else if (request.attributeName === 'PDS_ARVRefundForGoods_327hu9z') {
					if (ARVRefundForGoods){
						request.$context.enableAttributeValidator('PDS_ARVSumBack_velahk4', 'required');
						request.$context.visibleARVSumBackARVRecipientBackARVSenderBack = true;
					}
					else{
						request.$context.disableAttributeValidator('PDS_ARVSumBack_velahk4', 'required');
						request.$context.visibleARVSumBackARVRecipientBackARVSenderBack = false;
					}
				}
				
				else if (request.attributeName === 'PDS_ARVCost_hhc0kk6') {
					var PDS_ARVCost_hhc0kk6 = await request.$context.PDS_ARVCost_hhc0kk6;
					request.$context.PDS_ARVSumBack_velahk4 = PDS_ARVCost_hhc0kk6;
				}


     
				/** бизнес правило работаем быстрее чем прописывать условия кодом
				else if (request.attributeName === 'PDS_ARVIntDefault_7apy3x8') {
					var ARVIntDefault = await request.$context.PDS_ARVIntDefault_7apy3x8;
					if (ARVIntDefault === 0) {
						request.$context.ARVIntDefault0 = true;
						request.$context.ARVIntDefault1 = false;
						request.$context.ARVIntDefault2 = false;
					}
					else if (ARVIntDefault === 1) {
						request.$context.ARVIntDefault0 = false;
						request.$context.ARVIntDefault1 = true;
						request.$context.ARVIntDefault2 = false;
					}
					else if (ARVIntDefault === 2) {
						request.$context.ARVIntDefault0 = false;
						request.$context.ARVIntDefault1 = false;
						request.$context.ARVIntDefault2 = true;
					}
				}**/

				return next?.handle(request);
			}
		}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});