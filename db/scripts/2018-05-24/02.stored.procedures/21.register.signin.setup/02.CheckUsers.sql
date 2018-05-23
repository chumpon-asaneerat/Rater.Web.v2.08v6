SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Description:	CheckUsers
-- [== History ==]
-- <2016-12-15> :
--	- Stored Procedure Created.
-- <2016-12-16> :
--	- Add returns langId column.
--	- Change CustomerId to customerId.
--	- Change MemberId to memberId.
-- <2018-05-21> :
--	- Add returns columns CustomerNameEN and CustomerNameNative.
-- <2018-05-24> :
--	- Rename from SignIn to CheckUsers.
--	- Remove customerId parameter.
--
-- [== Example ==]
--
--exec CheckUsers N'admin@umi.co.th', N'1234';
-- =============================================
CREATE PROCEDURE [dbo].[CheckUsers] (
  @langId nvarchar(3) = null
, @userName nvarchar(50) = null
, @passWord nvarchar(20) = null
, @errNum as int = 0 out
, @errMsg as nvarchar(MAX) = N'' out)
AS
BEGIN
    -- Error Code:
    --   0 : Success
    -- OTHER : SQL Error Number & Error Message.
    BEGIN TRY
		SELECT A.langId
			 , A.customerId
             , A.FullNameEN
             , A.FullNameNative
			 , B.CustomerNameEN
			 , B.CustomerNameNative
			 , A.ObjectStatus
          FROM LogInView A, CustomerMLView B
         WHERE LOWER(A.UserName) = LOWER(LTRIM(RTRIM(@userName)))
           AND LOWER(A.[Password]) = LOWER(LTRIM(RTRIM(@passWord)))
           AND LOWER(A.LangId) = LOWER(LTRIM(RTRIM(COALESCE(@langId, A.LangId))))
		   AND B.CustomerId = A.CustomerId
		   AND B.LangId = A.LangId
         ORDER BY A.CustomerId, A.MemberId;

		EXEC GetErrorMsg 0, @errNum out, @errMsg out
	END TRY
	BEGIN CATCH
		SET @errNum = ERROR_NUMBER();
		SET @errMsg = ERROR_MESSAGE();
	END CATCH
END

GO