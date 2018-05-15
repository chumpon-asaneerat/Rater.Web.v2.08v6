SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Name: QSetMLView.
-- Description:	The QSet ML View.
-- [== History ==]
-- <2018-04-16> :
--	- View Created.
--
-- [== Example ==]
--
-- =============================================
CREATE VIEW [dbo].[QSetMLView]
AS
	SELECT QSetV.LangId
		 , QSetV.QSetId
		 , QSetV.CustomerId
		 , QSetV.BeginDate
		 , QSetV.EndDate
		 , QSetV.QSetDescriptionEN
		 , CASE 
			WHEN QSetML.Description IS NULL THEN 
				QSetV.QSetDescriptionEN 
			ELSE 
				QSetML.Description 
		   END AS QSetDescriptionNative
		 , QSetV.DisplayMode
		 , QSetV.HasRemark
		 , QSetV.IsDefault
		 , QSetV.QSetStatus
		 , QSetV.Enabled
		 , QSetV.SortOrder
		FROM dbo.QSetML AS QSetML RIGHT OUTER JOIN QSetView AS QSetV
		  ON (QSetML.LangId = QSetV.LangId 
		  AND QSetML.QSetId = QSetV.QSetId
		  AND QSetML.CustomerId = QSetV.CustomerId)

GO
