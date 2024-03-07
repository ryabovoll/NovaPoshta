namespace Terrasoft.Core.Process.Configuration
{

    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;
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
    using Terrasoft.UI.WebControls.Controls;

    /* Required for logging to operate correctly. */
    using global::Common.Logging;

    /* Required for message sending tools to operate correctly. */
    using Terrasoft.Configuration;

    #region Class: UsrShowModalPageUserTask

    /// <exclude/>
    public partial class UsrShowModalPageUserTask
    {
        /* Set up logging.
        Create an individual logger. Record the logging results to the Common.log file. */
        private static readonly ILog _log = LogManager.GetLogger("UsrShowModalPageUserTask");

        /* Define the sender in the back-end. */
        private const string MessageSender = "UsrShowModalPageUserTask";

        #region Methods: Protected

        /* The business logic of the process task. */
        protected override bool InternalExecute(ProcessExecutingContext context) {

            /* Log the information level message. */
            _log.InfoFormat("UserTask works well. UsrDialogText = {0}, UsrCommaSeparatedReturnCodes = {1}", UsrDialogText, UsrCommaSeparatedReturnCodes);
            /* Create a message. */
            var messageData = new
            {
                /* The text in the dialog box. */
                UsrDialogText = UsrDialogText,
                /* The comma-separated button return codes. */
                UsrCommaSeparatedReturnCodes = UsrCommaSeparatedReturnCodes,
                /* The service parameter. The unique ID of the element instance within the process instance. */
                procElUId = UId
            };
            /* Serialize the message body object. */
            string messageBody = JsonConvert.SerializeObject(messageData);
            /* The message body sent from the back-end to front-end. */
            MsgChannelUtilities.PostMessage(UserConnection, MessageSender, messageBody);
            return false;
        }

        #endregion

        #region Methods: Public

        public override bool CompleteExecuting(params object[] parameters) {
            return base.CompleteExecuting(parameters);
        }

        public override void CancelExecuting(params object[] parameters) {
            base.CancelExecuting(parameters);
        }

        public override string GetExecutionData() {
            return string.Empty;
        }

        public override ProcessElementNotification GetNotificationData() {
            return base.GetNotificationData();
        }

        #endregion

    }

    #endregion

}


