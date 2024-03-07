namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	#region Class: UsrShowModalPageUserTask

	[DesignModeProperty(Name = "UsrDialogText", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "18995e1a4c4c4802acb626226ca89dc9", CaptionResourceItem = "Parameters.UsrDialogText.Caption", DescriptionResourceItem = "Parameters.UsrDialogText.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "UsrCommaSeparatedReturnCodes", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "18995e1a4c4c4802acb626226ca89dc9", CaptionResourceItem = "Parameters.UsrCommaSeparatedReturnCodes.Caption", DescriptionResourceItem = "Parameters.UsrCommaSeparatedReturnCodes.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "UsrReturnCode", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "18995e1a4c4c4802acb626226ca89dc9", CaptionResourceItem = "Parameters.UsrReturnCode.Caption", DescriptionResourceItem = "Parameters.UsrReturnCode.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class UsrShowModalPageUserTask : ProcessUserTask
	{

		#region Constructors: Public

		public UsrShowModalPageUserTask(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("18995e1a-4c4c-4802-acb6-26226ca89dc9");
		}

		#endregion

		#region Properties: Public

		public virtual string UsrDialogText {
			get;
			set;
		}

		public virtual string UsrCommaSeparatedReturnCodes {
			get;
			set;
		}

		public virtual string UsrReturnCode {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		public override void WritePropertiesData(DataWriter writer) {
			writer.WriteStartObject(Name);
			base.WritePropertiesData(writer);
			if (Status == Core.Process.ProcessStatus.Inactive) {
				writer.WriteFinishObject();
				return;
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("UsrDialogText")) {
					writer.WriteValue("UsrDialogText", UsrDialogText, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("UsrCommaSeparatedReturnCodes")) {
					writer.WriteValue("UsrCommaSeparatedReturnCodes", UsrCommaSeparatedReturnCodes, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("UsrReturnCode")) {
					writer.WriteValue("UsrReturnCode", UsrReturnCode, null);
				}
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "UsrDialogText":
					if (!UseFlowEngineMode) {
						break;
					}
					UsrDialogText = reader.GetStringValue();
				break;
				case "UsrCommaSeparatedReturnCodes":
					if (!UseFlowEngineMode) {
						break;
					}
					UsrCommaSeparatedReturnCodes = reader.GetStringValue();
				break;
				case "UsrReturnCode":
					if (!UseFlowEngineMode) {
						break;
					}
					UsrReturnCode = reader.GetStringValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

