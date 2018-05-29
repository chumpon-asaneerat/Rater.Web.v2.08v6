SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Name: GetErrorMsg.
-- Description:	Get Error Message.
-- [== History ==]
-- <2018-04-16> :
--	- Stored Procedure Created.
-- <2018-05-29> :
--	- Add parameter langId.
--
-- [== Example ==]
--
--EXEC GetErrorMsg N'TH', 101, @errNum out, @errMsg out
-- =============================================
CREATE PROCEDURE [dbo].[GetErrorMsg]
(
  @langId as nvarchar(3)
, @errCode as int
, @errNum as int = 0 out
, @errMsg as nvarchar(MAX) = N'' out
)
AS
BEGIN
DECLARE @lId nvarchar(3);
DECLARE @iCnt int = 0;
	IF (dbo.IsNullOrEmpty(@langId) = 1)
	BEGIN
		SET @lId = N'EN';
	END
	ELSE
	BEGIN
		IF (dbo.IsLangExist(@langId) = 0)
		BEGIN
			-- LangId Not Exist.
			SET @lId = N'EN';
		END
		ELSE
		BEGIN
			-- LangId Exist.
			SET @lId = @langId;
		END
	END

	SELECT @iCnt = COUNT(*)
		FROM ErrorMessage
		WHERE ErrCode = @errCode
		  AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(@lId)));
	
	IF (@iCnt = 0)
	BEGIN
		-- LangID Is not found.
		SELECT @iCnt = COUNT(*)
		  FROM ErrorMessage
		 WHERE ErrCode = @errCode
		   AND UPPER(LTRIM(RTRIM(LangId))) = N'EN';
		IF (@iCnt = 0)
		BEGIN
			-- EN Is Not found.
			SET @errNum = @errCode;
			SET @errMsg = N'undefined error message.';
		END
		ELSE
		BEGIN
			-- EN Is found.
			SELECT @errNum = ErrCode
				 , @errMsg = ErrMsg
			  FROM ErrorMessage
			 WHERE ErrCode = @errCode
			   AND UPPER(LTRIM(RTRIM(LangId))) = N'EN';
		END
	END
	ELSE
	BEGIN
		-- LangID Is found.
		SELECT @errNum = ErrCode
			 , @errMsg = ErrMsg
			FROM ErrorMessage
			WHERE ErrCode = @errCode
			AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(@lId)));
	END
END

GO
