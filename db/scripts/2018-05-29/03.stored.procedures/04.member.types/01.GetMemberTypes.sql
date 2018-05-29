SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Description:	GetMemberTypes
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-16> :
--	- change language id from nvarchar(10) to nvarchar(3).
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column MemberTypeId to memberTypeId
-- <2018-05-29> :
--	- change column match new structure.
--
-- [== Example ==]
--
--exec GetMemberTypes;          -- for get all.
--exec GetMemberTypes N'EN';    -- for get MemberType for EN language.
--exec GetMemberTypes N'TH';    -- for get MemberType for TH language.
-- =============================================
CREATE PROCEDURE [dbo].[GetMemberTypes] 
(
  @langId nvarchar(3) = NULL
, @enabled bit = 1
)
AS
BEGIN
DECLARE @lId nvarchar(3) = NULL;
DECLARE @iCnt int = NULL;
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

	SELECT A.langId
		 , A.mTypeId
		 , A.MTypeDesc
		 --, A.LangOrder
		 --, A.LangEnabled 
	  FROM MemberType A, Language B
	 WHERE B.LangEnabled = COALESCE(@enabled, B.LangEnabled)
	   AND UPPER(LTRIM(RTRIM(B.LangId))) = UPPER(LTRIM(RTRIM(@lId)))
	   AND UPPER(LTRIM(RTRIM(A.LangId))) = UPPER(LTRIM(RTRIM(@lId)))
	 ORDER BY B.LangOrder, A.mTypeId
END

GO
