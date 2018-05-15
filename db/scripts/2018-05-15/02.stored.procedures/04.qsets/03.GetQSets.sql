SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Name: GetPeriodUnits.
-- Description:	Get Period Units.
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-16> :
--	- change language id from nvarchar(10) to nvarchar(3).
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column PeriodUnitId to periodUnitId
--
-- [== Example ==]
--
--EXEC GetQSets NULL, NULL, NULL, 1
--EXEC GetQSets N'EN', NULL, NULL, 1
--EXEC GetQSets NULL, N'EDL-C2018050001', NULL, 1;
--EXEC GetQSets N'EN', N'EDL-C2018050001', NULL, 1;
--EXEC GetQSets NULL, N'EDL-C2018050001', N'QS00001', 1;
--EXEC GetQSets N'EN', N'EDL-C2018050001', N'QS00001', 1;
-- =============================================
CREATE PROCEDURE [dbo].[GetQSets]
(
  @langId nvarchar(3) = NULL
, @customerId nvarchar(30) = NULL
, @qSetId nvarchar(30) = NULL
, @enabled bit = NULL
)
AS
BEGIN
	SELECT langId
		 , customerId
		 , qSetId
		 , BeginDate
		 , EndDate
		 , QSetDescriptionEN
		 , QSetDescriptionNative
		 , DisplayMode
		 , HasRemark
		 , IsDefault
		 , QSetStatus
		 , SortOrder
		 , Enabled 
	  FROM QSetMLView
	 WHERE [ENABLED] = COALESCE(@enabled, [ENABLED])
	   AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(COALESCE(@langId, LangId))))
	   AND UPPER(LTRIM(RTRIM(CustomerId))) = UPPER(LTRIM(RTRIM(COALESCE(@customerId, CustomerId))))
	   AND UPPER(LTRIM(RTRIM(QSetId))) = UPPER(LTRIM(RTRIM(COALESCE(@qSetId, QSetId))))
	 ORDER BY SortOrder, CustomerId, QSetId
END

GO
