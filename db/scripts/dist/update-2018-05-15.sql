/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Name: GetLanguages.
-- Description:	Gets languages.
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-16> :
--	- The @enabled parameter default value is NULL.
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column FlagId to flagId
--
-- [== Example ==]
--
--exec GetLanguages; -- for get all.
--exec GetLanguages 1; -- for only enabled language.
--exec GetLanguages 0; -- for only disabled language.
-- =============================================
ALTER PROCEDURE [dbo].[GetLanguages]
(
    @enabled bit = null
)
AS
BEGIN
    SELECT langId
		 , flagId
		 , DescriptionEN
		 , DescriptionNative 
		 , SortOrder
		 , Enabled
      FROM [dbo].[LanguageView]
     WHERE [ENABLED] = COALESCE(@enabled, [ENABLED])
     ORDER BY SortOrder
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
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
--
-- [== Example ==]
--
--exec GetMemberTypes NULL, 1;  -- for only enabled languages.
--exec GetMemberTypes;          -- for get all.
--exec GetMemberTypes N'EN';    -- for get MemberType for EN language.
--exec GetMemberTypes N'TH';    -- for get MemberType for TH language.
-- =============================================
ALTER PROCEDURE [dbo].[GetMemberTypes] 
(
  @langId nvarchar(3) = NULL
, @enabled bit = NULL
)
AS
BEGIN
	SELECT langId
		 , memberTypeId
		 , MemberTypeDescriptionEN
		 , MemberTypeDescriptionNavive
		 , SortOrder
		 , Enabled 
	  FROM MemberTypeMLView
	 WHERE [ENABLED] = COALESCE(@enabled, [ENABLED])
	   AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(COALESCE(@langId,LangId))))
	 ORDER BY SortOrder, MemberTypeId
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
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
--exec GetPeriodUnits NULL, 1;  -- for only enabled languages.
--exec GetPeriodUnits;          -- for get all.
--exec GetPeriodUnits N'EN';    -- for get PeriodUnit for EN language.
-- =============================================
ALTER PROCEDURE [dbo].[GetPeriodUnits] 
(
  @langId nvarchar(3) = NULL
, @enabled bit = NULL
)
AS
BEGIN
	SELECT langId
		 , periodUnitId
		 , PeriodUnitDescriptionEN
		 , PeriodUnitDescriptionNative
		 , SortOrder
		 , Enabled 
	  FROM PeriodUnitMLView
	 WHERE [ENABLED] = COALESCE(@enabled, [ENABLED])
	   AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(COALESCE(@langId,LangId))))
	 ORDER BY SortOrder, PeriodUnitId
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Description:	GetLimitUnits
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-16> :
--	- change language id from nvarchar(10) to nvarchar(3).
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column LimitUnitId to limitUnitId
--
-- [== Example ==]
--
--exec GetLimitUnits NULL, 1;  -- for only enabled languages.
--exec GetLimitUnits;          -- for get all.
--exec GetLimitUnits N'EN';    -- for get LimitUnit for EN language.
-- =============================================
ALTER PROCEDURE [dbo].[GetLimitUnits] 
(
  @langId nvarchar(3) = NULL
, @enabled bit = NULL
)
AS
BEGIN
	SELECT langId
		 , limitUnitId
		 , LimitUnitDescriptionEN
		 , LimitUnitDescriptionNative
		 , LimitUnitTextEN
		 , LimitUnitTextNative
		 , SortOrder
		 , Enabled
	  FROM LimitUnitMLView
	 WHERE [ENABLED] = COALESCE(@enabled, [ENABLED])
	   AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(COALESCE(@langId,LangId))))
	 ORDER BY SortOrder, LimitUnitId
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Description:	GetLicenses
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-16> :
--	- change language id from nvarchar(10) to nvarchar(3).
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column LicenseTypeId to licenseTypeId
--	- change column PeriodUnitId to periodUnitId
--
-- [== Example ==]
--
--exec GetLicenseTypes N'EN'; -- for only EN language.
--exec GetLicenseTypes;       -- for get all.
-- =============================================
ALTER PROCEDURE [dbo].[GetLicenseTypes] 
(
  @langId nvarchar(3) = null
)
AS
BEGIN
	SELECT langId
		 , licenseTypeId
		 , LicenseTypeDescriptionEn
		 , LicenseTypeDescriptionNative
		 , AdTextEN
		 , AdTextNative
		 , periodUnitId
		 , NumberOfUnit
		 , UseDefaultPrice
		 , Price
		 , CurrencySymbol
		 , CurrencyText
		 , SortOrder
		 , Enabled 
	  FROM LicenseTypeMLView
	 WHERE langId = COALESCE(@langId, langId)
	   AND Enabled = 1
	 Order By SortOrder, LangId, LicenseTypeId;
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Name: GetLicenseFeatures.
-- Description:	Get License Features.
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-16> :
--	- change language id from nvarchar(10) to nvarchar(3).
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column LicenseTypeId to licenseTypeId
--	- change column LimitUnitId to limitUnitId
--
-- [== Example ==]
--
--exec GetLicenseFeatures N'EN';    -- for only EN language.
--exec GetLicenseFeatures;          -- for get all.
--exec GetLicenseFeatures N'EN', 1; -- for all features for LicenseTypeId = 1 in EN language.
--exec GetLicenseFeatures N'TH', 0; -- for all features for LicenseTypeId = 0 in TH language.
-- =============================================
ALTER PROCEDURE [dbo].[GetLicenseFeatures] 
(
  @langId nvarchar(3) = null
, @licenseTypeId int = null
)
AS
BEGIN
	SELECT langId
		 , licenseTypeId
		 , seq
		 , limitUnitId
		 , LimitUnitDescriptionEN
		 , LimitUnitDescriptionNative
		 , NoOfLimit
		 , LimitUnitTextEN
		 , LimitUnitTextNative
		 , SortOrder
		 , Enabled 
	  FROM LicenseFeatureMLView
	 WHERE langId = COALESCE(@langId, langId)
	   AND Enabled = 1
	   AND LicenseTypeId = COALESCE(@licenseTypeId, LicenseTypeId)
	 Order By SortOrder, LangId, LicenseTypeId;
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Name: GetLicenses.
-- Description:	Get Licenses.
-- [== History ==]
-- <2018-05-09> :
--	- Stored Procedure Created.
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column LicenseTypeId to licenseTypeId
--	- change column PeriodUnitId to periodUnitId
--  - change column NumberOfUnit to NoOfUnit
--	- change column LimitUnitId to limitUnitId
--
-- [== Example ==]
--
--exec GetLicenses N'EN';    -- for only EN language.
--exec GetLicenses;          -- for get all.
-- =============================================
ALTER PROCEDURE [dbo].[GetLicenses] 
(
  @langId nvarchar(3) = null
, @licenseTypeId int = null  
)
AS
BEGIN
	SELECT langId
		 , licenseTypeId
		 , seq
		 , LicenseTypeDescriptionEn
		 , LicenseTypeDescriptionNative
		 , AdTextEN
		 , AdTextNative
		 , periodUnitId
		 , NumberOfUnit as NoOfUnit
		 , UseDefaultPrice
		 , Price
		 , CurrencySymbol
		 , CurrencyText
		 , limitUnitId
		 , LimitUnitDescriptionEN
		 , LimitUnitDescriptionNative
		 , NoOfLimit
		 , LimitUnitTextEN
		 , LimitUnitTextNative
		 , SortOrder
		 , Enabled
	  FROM LicenseMLView
	 WHERE langId = COALESCE(@langId, langId)
	   AND LicenseTypeId = COALESCE(@licenseTypeId, LicenseTypeId)
	   AND Enabled = 1
	 Order By SortOrder, LicenseTypeId, Seq
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Description:	GetUserInfos
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-16> :
--	- change language id from nvarchar(10) to nvarchar(3).
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column UserId to userId
--
-- [== Example ==]
--
--exec GetUserInfos NULL, NULL, 1;  -- for only enabled languages.
--exec GetUserInfos;                -- for get all.
--exec GetUserInfos N'EN', NULL;    -- for get UserInfo for EN language all member type.
--exec GetUserInfos N'TH', NULL;    -- for get UserInfo for TH language all member type.
--exec GetUserInfos N'EN', 100;     -- for get UserInfo for EN language member type = 100.
--exec GetUserInfos N'TH', 180;     -- for get UserInfo for TH language member type = 180.
-- =============================================
ALTER PROCEDURE [dbo].[GetUserInfos] 
(
  @langId nvarchar(3) = NULL
, @memberType int = NULL
, @enabled bit = NULL
)
AS
BEGIN
	SELECT langId
		 , userId
		 , MemberType
		 , PrefixEN
		 , FirstNameEn
		 , LastNameEn
		 , FullNameEN
		 , PrefixNative
		 , FirstNameNative
		 , LastNameNative
		 , FullNameNative
		 , UserName
		 , Password
		 , ObjectStatus
		 , SortOrder
		 , Enabled 
	  FROM UserInfoMLView
	 WHERE [ENABLED] = COALESCE(@enabled, [ENABLED])
	   AND [MemberType] = COALESCE(@memberType, [MemberType])
	   AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(COALESCE(@langId,LangId))))
	 ORDER BY SortOrder, UserId
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Description:	GetCustomers
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-> :
--	- change language id from nvarchar(10) to nvarchar(3).
-- <2018-05-15> :
--	- change column LangId to langId
--
-- [== Example ==]
--
--exec GetCustomers NULL, NULL, 1;             -- for only enabled languages.
--exec GetCustomers;                           -- for get all.
--exec GetCustomers N'EN';                     -- for get customers for EN language.
--exec GetCustomers N'TH';                     -- for get customers for TH language.
--exec GetCustomers N'TH', N'EDL-C2017060011'; -- for get customer for TH language by Customer Id.
-- =============================================
ALTER PROCEDURE [dbo].[GetCustomers] 
(
  @langId nvarchar(3) = NULL
, @customerId nvarchar(30) = NULL
, @enabled bit = NULL
)
AS
BEGIN
	SELECT langId
		 , customerId
		 , CustomerNameEN
		 , CustomerNameNative
		 , TaxCodeEN
		 , TaxCodeNative
		 , Address1EN
		 , Address1Native
		 , Address2EN
		 , Address2Native
		 , CityEN
		 , CityNative
		 , ProvinceEN
		 , ProvinceNative
		 , PostalCodeEN
		 , PostalCodeNative
		 , Phone
		 , Mobile
		 , Fax
		 , Email
		 , ObjectStatus
		 , SortOrder
		 , Enabled 
	  FROM CustomerMLView
	 WHERE [ENABLED] = COALESCE(@enabled, [ENABLED])
	   AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(COALESCE(@langId, LangId))))
	   AND UPPER(LTRIM(RTRIM(CustomerId))) = UPPER(LTRIM(RTRIM(COALESCE(@customerId, CustomerId))))
	 ORDER BY SortOrder, CustomerId
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Description:	GetMemberInfos
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-16> :
--	- change language id from nvarchar(10) to nvarchar(3).
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column CustomerId to customerId
--	- change column MemberId to memberId
--
-- [== Example ==]
--
--exec GetMemberInfos NULL, NULL, NULL, 1;                  -- for only enabled languages.
--exec GetMemberInfos;                                      -- for get all.
--exec GetMemberInfos N'EN';                                -- for get MemberInfos for EN language.
--exec GetMemberInfos N'TH';                                -- for get MemberInfos for TH language.
--exec GetMemberInfos N'TH', N'EDL-C2017060011';            -- for get MemberInfos by CustomerID.
--exec GetMemberInfos N'TH', N'EDL-C2017060011', N'M00001'; -- for get MemberInfo by CustomerID and MemberId.
-- =============================================
ALTER PROCEDURE [dbo].[GetMemberInfos] 
(
  @langId nvarchar(3) = NULL
, @customerId nvarchar(30) = NULL
, @memberId nvarchar(30) = NULL
, @enabled bit = NULL
)
AS
BEGIN
	SELECT langId
		 , customerId
		 , memberId
		 , MemberType
		 , PrefixEN
		 , FirstNameEN
		 , LastNameEN
		 , FullNameEN
		 , PrefixNative
		 , FirstNameNative
		 , LastNameNative
		 , FullNameNative
		 , IDCard
		 , TagId
		 , EmployeeCode
		 , UserName
		 , Password
		 , ObjectStatus
		 , SortOrder
		 , Enabled 
	  FROM MemberInfoMLView
	 WHERE [ENABLED] = COALESCE(@enabled, [ENABLED])
	   AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(COALESCE(@langId, LangId))))
	   AND UPPER(LTRIM(RTRIM(CustomerId))) = UPPER(LTRIM(RTRIM(COALESCE(@customerId, CustomerId))))
	   AND UPPER(LTRIM(RTRIM(MemberId))) = UPPER(LTRIM(RTRIM(COALESCE(@memberId, MemberId))))
	 ORDER BY SortOrder, LangId, CustomerId, MemberId;
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Name: GetBranchs.
-- Description:	Get Branchs.
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-16> :
--	- change language id from nvarchar(10) to nvarchar(3).
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column CustomerId to customerId
--	- change column BranchId to branchId
--
-- [== Example ==]
--
--exec GetBranchs NULL, NULL, NULL, 1;                 -- for only enabled languages.
--exec GetBranchs;                                     -- for get all.
--exec GetBranchs N'EN';                               -- for get Branchs for EN language.
--exec GetBranchs N'TH';                               -- for get Branchs for TH language.
--exec GetBranchs N'TH', N'EDL-C2017060011';           -- for get Branchs by CustomerID.
--exec GetBranchs N'TH', N'EDL-C2017060011', N'B0001'; -- for get Branch by CustomerID and BranchId.
-- =============================================
ALTER PROCEDURE [dbo].[GetBranchs] 
(
  @langId nvarchar(3) = NULL
, @customerId nvarchar(30) = NULL
, @branchId nvarchar(30) = NULL
, @enabled bit = NULL
)
AS
BEGIN
	SELECT langId
		 , customerId
		 , branchId
		 , BranchNameEN
		 , BranchNameNative
		 , ObjectStatus
		 , SortOrder
		 , Enabled 
	  FROM BranchMLView
	 WHERE [ENABLED] = COALESCE(@enabled, [ENABLED])
	   AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(COALESCE(@langId, LangId))))
	   AND UPPER(LTRIM(RTRIM(CustomerId))) = UPPER(LTRIM(RTRIM(COALESCE(@customerId, CustomerId))))
	   AND UPPER(LTRIM(RTRIM(BranchId))) = UPPER(LTRIM(RTRIM(COALESCE(@branchId, BranchId))))
	 ORDER BY SortOrder, LangId, CustomerId, BranchId;
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Name: GetOrgs
-- Description:	Get Organizations.
-- [== History ==]
-- <2017-05-31> :
--	- Stored Procedure Created.
-- <2018-04-16> :
--	- change language id from nvarchar(10) to nvarchar(3).
-- <2018-05-15> :
--	- change column LangId to langId
--	- change column CustomerId to customerId
--	- change column OrgId to orgId
--	- change column ParentId to parentId
--	- change column BranchId to branchId
--
-- [== Example ==]
--
--/* Get All */
--exec GetOrgs NULL, NULL, NULL, NULL, 1; -- enabled languages only.
--exec GetOrgs; -- all languages.
--/* With Specificed CustomerId */
--exec GetOrgs N'EN', N'EDL-C2017060008'; -- Gets Orgs EN language.
--exec GetOrgs N'TH', N'EDL-C2017060008'; -- Gets Orgs TH language.
--/* With Specificed CustomerId, BranchId */
--exec GetOrgs N'EN', N'EDL-C2017060008', N'B0001'; -- Gets EN language in Branch 1.
--exec GetOrgs N'TH', N'EDL-C2017060008', N'B0002'; -- Gets TH language in Branch 2.
-- =============================================
ALTER PROCEDURE [dbo].[GetOrgs] 
(
  @langId nvarchar(3) = NULL
, @customerId nvarchar(30) = NULL
, @branchId nvarchar(30) = NULL
, @orgId nvarchar(30) = NULL
, @enabled bit = NULL
)
AS
BEGIN
	SELECT langId
		 , customerId
		 , orgId
		 , parentId
		 , branchId
		 , OrgNameEN
		 , BranchNameEN
		 , OrgNameNative
		 , BranchNameNative
		 , OrgStatus
		 , BranchStatus
		 , SortOrder
		 , Enabled 
	  FROM OrgMLView
	 WHERE [ENABLED] = COALESCE(@enabled, [ENABLED])
	   AND UPPER(LTRIM(RTRIM(LangId))) = UPPER(LTRIM(RTRIM(COALESCE(@langId, LangId))))
	   AND UPPER(LTRIM(RTRIM(CustomerId))) = UPPER(LTRIM(RTRIM(COALESCE(@customerId, CustomerId))))
	   AND UPPER(LTRIM(RTRIM(BranchId))) = UPPER(LTRIM(RTRIM(COALESCE(@branchId, BranchId))))
	   AND UPPER(LTRIM(RTRIM(OrgId))) = UPPER(LTRIM(RTRIM(COALESCE(@orgId, OrgId))))
	 ORDER BY SortOrder, LangId, CustomerId, BranchId, OrgId
END

GO


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Description:	Get Raw Votes.
-- [== History ==]
-- <2016-10-30> :
--	- Stored Procedure Created.
-- <2016-12-14> :
--	- Add supports pagination.
-- <2018-05-14> :
--	- Add lang Id.
--
-- [== Example ==]
--
--EXEC GetRawVotes N'TH'
--				 , N'EDL-C2018040002'
--				 , N'QS2018040001', 1
--				 , N'2018-05-09 00:00:00', N'2018-05-11 23:59:59';
-- =============================================
CREATE PROCEDURE [dbo].[GetRawVotes] 
(
  @langId as nvarchar(3)
, @customerId as nvarchar(30)
, @qsetId as nvarchar(30)
, @qseq as int
, @beginDate As DateTime = null
, @endDate As DateTime = null
, @pageNum as int = 1 out
, @rowsPerPage as int = 10 out
, @totalRecords as int = 0 out
, @maxPage as int = 0 out
, @errNum as int = 0 out
, @errMsg as nvarchar(100) = N'' out
)
AS
BEGIN
	-- Error Code:
	--   0 : Success
	-- 2101 : CustomerId cannot be null or empty string.
	-- 2102 : QSetId cannot be null or empty string.
	-- 2103 : QSeq cannot be null or less than 1.
	-- 2104 : Begin Date and End Date cannot be null.
	-- 2105 : LangId Is Null Or Empty String.
	-- OTHER : SQL Error Number & Error Message.
	BEGIN TRY
		SET @pageNum = isnull(@pageNum, 1);
		SET @rowsPerPage = isnull(@rowsPerPage, 10);

		IF (@rowsPerPage <= 0) SET @rowsPerPage = 10;
		IF (@pageNum <= 0) SET @pageNum = 1;

		SET @totalRecords = 0;

		IF (dbo.IsNullOrEmpty(@customerId) = 1)
		BEGIN
			-- CustomerId cannot be null or empty string.
			EXEC GetErrorMsg 2101, @errNum out, @errMsg out
			RETURN
		END

		IF (dbo.IsNullOrEmpty(@qsetId) = 1)
		BEGIN
			-- QSetId cannot be null or empty string.
			EXEC GetErrorMsg 2102, @errNum out, @errMsg out
			RETURN
		END

		IF (@qseq IS NULL OR @qseq < 1)
		BEGIN
			-- QSeq cannot be null or less than 1.
			EXEC GetErrorMsg 2103, @errNum out, @errMsg out
			RETURN
		END
		
		IF (@beginDate IS NULL OR @endDate IS NULL)
		BEGIN
			-- Begin Date and End Date cannot be null.
			EXEC GetErrorMsg 2104, @errNum out, @errMsg out
			RETURN
		END
		
		IF (dbo.IsNullOrEmpty(@langId) = 1)
		BEGIN
			-- LangId Is Null Or Empty String.
			EXEC GetErrorMsg 2105, @errNum out, @errMsg out
			RETURN
		END

		-- calculate total record and maxpages
		SELECT @totalRecords = COUNT(*) 
		  FROM Vote
		 WHERE LOWER(CustomerId) = LOWER(RTRIM(LTRIM(@customerId)))
		   AND LOWER(QSetId) = LOWER(RTRIM(LTRIM(@qsetId)))
		   AND QSeq = @qseq
		   AND VoteDate >= @beginDate
		   AND VoteDate <= @endDate
		   AND ObjectStatus = 1;

		SELECT @maxPage = 
			CASE WHEN (@totalRecords % @rowsPerPage > 0) THEN 
				(@totalRecords / @rowsPerPage) + 1
			ELSE 
				(@totalRecords / @rowsPerPage)
			END;

		WITH SQLPaging AS
		( 
			SELECT TOP(@rowsPerPage * @pageNum) ROW_NUMBER() OVER (ORDER BY A.VoteDate) AS RowNo
				, @pageNum PageNo
				, L.LangId
				, A.VoteDate
				, A.VoteSeq
				, A.CustomerId
				, A.QSetId
				, A.QSeq
				, A.VoteValue
				, A.Remark
				, A.OrgId
				, O.OrgNameEN
				, O.OrgNameNative
				, A.BranchId
				, B.BranchNameEN
				, B.BranchNameNative
				, A.DeviceId
				--, D.[Description]
				, A.UserId
				, M.FullNameEN
				, M.FullNameNative
			FROM Vote A 
					INNER JOIN LanguageView L ON (
							L.LangId = @langId
					)
					INNER JOIN OrgMLView O ON (
							O.OrgId = A.OrgId 
						AND O.CustomerId = A.CustomerId
						AND O.LangId = L.LangId
					)
					INNER JOIN BranchMLView B ON (
							B.BranchId = A.BranchId 
						AND B.CustomerId = A.CustomerId
						AND B.LangId = L.LangId
					)
					--INNER JOIN Device D ON (
					--		D.DeviceId = A.DeviceId 
					--	AND D.CustomerId = A.CustomerId
					--)
					LEFT OUTER JOIN MemberInfoMLView M ON (
							M.MemberId = A.UserId 
						AND M.CustomerId = A.CustomerId
						AND M.LangId = L.LangId
					)
			WHERE LOWER(A.CustomerId) = LOWER(RTRIM(LTRIM(@customerId)))
				AND LOWER(A.QSetId) = LOWER(RTRIM(LTRIM(@qsetId)))
				AND A.QSeq = @qseq
				AND A.ObjectStatus = 1
				AND A.VoteDate >= @beginDate
				AND A.VoteDate <= @endDate
			ORDER BY A.VoteDate, A.VoteSeq
		)
		SELECT * FROM SQLPaging WITH (NOLOCK) 
			WHERE RowNo > ((@pageNum - 1) * @rowsPerPage);

		-- success
		EXEC GetErrorMsg 0, @errNum out, @errMsg out
	END TRY
	BEGIN CATCH
		SET @errNum = ERROR_NUMBER();
		SET @errMsg = ERROR_MESSAGE();
	END CATCH
END

GO


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/


/*********** Script Update Date: 2018-05-15  ***********/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Name: InitErrorMessages.
-- Description:	Init error messages.
-- [== History ==]
-- <2017-08-06> :
--	- Stored Procedure Created.
-- <2018-05-10> :
--	- Update new error messages.
--
-- [== Example ==]
--
--exec InitErrorMessages
-- =============================================
ALTER PROCEDURE [dbo].[InitErrorMessages]
AS
BEGIN
    -- SUCCESS.
    EXEC SaveErrorMsg 0000, N'Success.'
    -- LANGUAGES.
    EXEC SaveErrorMsg 0101, N'Language Id cannot be null or empty string.'
    EXEC SaveErrorMsg 0102, N'Description(EN) cannot be null or empty string.'
    EXEC SaveErrorMsg 0103, N'Language Description (en) is duplicated.'
    -- MASTER PK.
    EXEC SaveErrorMsg 0201, N'Table Name is null or empty string.'
    EXEC SaveErrorMsg 0202, N'Seed Reset Mode should be number 1-3.'
    EXEC SaveErrorMsg 0203, N'Seed Digits should be number 1-9.'
    EXEC SaveErrorMsg 0204, N'Table name is not exists in MasterPK table.'
    EXEC SaveErrorMsg 0205, N'Not supports reset mode.'
    EXEC SaveErrorMsg 0206, N'Cannot generate seed code for table:'
    -- PERIOD UNITS.
    EXEC SaveErrorMsg 0301, N'PeriodUnit Id cannot be null.'
    EXEC SaveErrorMsg 0302, N'Description (default) cannot be null or empty string.'
    EXEC SaveErrorMsg 0303, N'Description (default) is duplicated.'
    EXEC SaveErrorMsg 0304, N'Description (ML) cannot be null or empty string.'
    EXEC SaveErrorMsg 0305, N'Cannot add new Description (ML) because the Description (ML) in same Language Id is already exists.'
    EXEC SaveErrorMsg 0306, N'Cannot change Description (ML) because the Description (ML) in same Language Id is already exists.'
    -- LIMIT UNITS.
    EXEC SaveErrorMsg 0401, N'LimitUnit Id cannot be null.'
    EXEC SaveErrorMsg 0402, N'Description (default) cannot be null or empty string.'
    EXEC SaveErrorMsg 0403, N'Description (default) is duplicated.'
    EXEC SaveErrorMsg 0404, N'UnitText (default) cannot be null or empty string.'
    EXEC SaveErrorMsg 0405, N'Language Id cannot be null or empty string.'
    EXEC SaveErrorMsg 0406, N'Language Id not found.'
    EXEC SaveErrorMsg 0407, N'Description (ML) cannot be null or empty string.'
    EXEC SaveErrorMsg 0408, N'Cannot add new Description (ML) because the Description (ML) in same Language Id is already exists.'
    EXEC SaveErrorMsg 0409, N'Cannot change Description (ML) because the Description (ML) in same Language Id is already exists.'
    -- USER INFO(S).
    EXEC SaveErrorMsg 0501, N'FirstName (default) cannot be null or empty string.'
    EXEC SaveErrorMsg 0502, N'UserName cannot be null or empty string.'
    EXEC SaveErrorMsg 0503, N'Password cannot be null or empty string.'
    EXEC SaveErrorMsg 0504, N'User Full Name (default) already exists.'
    EXEC SaveErrorMsg 0505, N'UserName already exists.'
    EXEC SaveErrorMsg 0506, N'Language Id cannot be null or empty string.'
    EXEC SaveErrorMsg 0507, N'The Language Id not exist.'
    EXEC SaveErrorMsg 0508, N'User Id cannot be null or empty string.'
    EXEC SaveErrorMsg 0509, N'FirstName (ML) cannot be null or empty string.'
    EXEC SaveErrorMsg 0510, N'No User match UserId.'
    EXEC SaveErrorMsg 0511, N'User Full Name (ML) already exists.'
    -- LICENSE TYPES.
    EXEC SaveErrorMsg 0601, N'Description (default) cannot be null or empty string.'
    EXEC SaveErrorMsg 0602, N'Advertise Text (default) cannot be null or empty string.'
    EXEC SaveErrorMsg 0603, N'PeriodUnitId cannot be null.'
    EXEC SaveErrorMsg 0604, N'PeriodUnitId not found.'
    EXEC SaveErrorMsg 0605, N'Number of Period cannot be null.'
    EXEC SaveErrorMsg 0606, N'Price cannot be null.'
    EXEC SaveErrorMsg 0607, N'Cannot add new item description because the description (default) is duplicated.'
    EXEC SaveErrorMsg 0608, N'Cannot change item description because the description (default) is duplicated.'
    EXEC SaveErrorMsg 0609, N'Cannot add new item because the period and number of period is duplicated.'
    EXEC SaveErrorMsg 0610, N'Cannot change item because the period and number of period is duplicated.'
    EXEC SaveErrorMsg 0611, N'LicenseTypeId cannot be null.'
    EXEC SaveErrorMsg 0612, N'Language Id cannot be null or empty string.'
    EXEC SaveErrorMsg 0613, N'Language Id not found.'    
    EXEC SaveErrorMsg 0614, N'Description (ML) cannot be null or empty string.'
    EXEC SaveErrorMsg 0615, N'Advertise Text (ML) cannot be null or empty string.'
    EXEC SaveErrorMsg 0616, N'Price (ML) cannot be null.'
    EXEC SaveErrorMsg 0617, N'Description (ML) is duplicated.'    
    -- LICENSE FEATURES.
    EXEC SaveErrorMsg 0701, N'LicenseType Id cannot be null.'
    EXEC SaveErrorMsg 0702, N'LicenseType Id not found.'
    EXEC SaveErrorMsg 0703, N'LimitUnit Id cannot be null.'
    EXEC SaveErrorMsg 0704, N'LimitUnit Id not found.'
    EXEC SaveErrorMsg 0705, N'LimitUnit Id already exists.'
    EXEC SaveErrorMsg 0706, N'No Of Limit cannot be null.'
    EXEC SaveErrorMsg 0707, N'No Of Limit should be zero or more.'
    EXEC SaveErrorMsg 0708, N'Invalid Seq Number.' 
    -- CUSTOMER PK.
    EXEC SaveErrorMsg 0801, N'CustomerId is null or empty string.'
    EXEC SaveErrorMsg 0802, N'Table Name is null or empty string.'
    EXEC SaveErrorMsg 0803, N'Seed Reset Mode should be number 1-4.'
    EXEC SaveErrorMsg 0804, N'Seed Digits should be number 1-9.'
    EXEC SaveErrorMsg 0805, N'Table Name not exists in CustomerPK table.'
    EXEC SaveErrorMsg 0806, N'Not supports reset mode.'
    EXEC SaveErrorMsg 0807, N'Cannot generate seed code for table:'    
    -- CUSTOMERS.
    EXEC SaveErrorMsg 0901, N'Customer Name (default) cannot be null or empty string.'
    EXEC SaveErrorMsg 0902, N'The Customer Id is not exists.'
    EXEC SaveErrorMsg 0903, N'Customer Name (default) is already exists.'
    EXEC SaveErrorMsg 0904, N'Customer Id cannot be null or empty string.'
    EXEC SaveErrorMsg 0905, N'Lang Id cannot be null or empty string.'
    EXEC SaveErrorMsg 0906, N'Lang Id not found.'
    EXEC SaveErrorMsg 0907, N'Customer Name (ML) cannot be null or empty string.'
    EXEC SaveErrorMsg 0908, N'Customer Name (ML) is already exist.'
    -- BRANCH.
    EXEC SaveErrorMsg 1001, N'Customer Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1002, N'Branch Name (default) cannot be null or empty string.'
    EXEC SaveErrorMsg 1003, N'Customer Id is not found.'
    EXEC SaveErrorMsg 1004, N'Branch Id is not found.'
    EXEC SaveErrorMsg 1005, N'Branch Name (default) already exists.'
    EXEC SaveErrorMsg 1006, N'Lang Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1007, N'Language Id not exist.'
    EXEC SaveErrorMsg 1008, N'Branch Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1009, N'Branch Id is not found.'
    EXEC SaveErrorMsg 1010, N'Branch Name (ML) is already exists.'
    -- MEMBER INTO(S).
    EXEC SaveErrorMsg 1101, N'Customer Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1102, N'Customer Id not found.'
    EXEC SaveErrorMsg 1103, N'First Name (default) cannot be null or empty string.'
    EXEC SaveErrorMsg 1104, N'User Name cannot be null or empty string.'
    EXEC SaveErrorMsg 1105, N'Password cannot be null or empty string.'
    EXEC SaveErrorMsg 1106, N'MemberType cannot be null.'
    EXEC SaveErrorMsg 1107, N'MemberType allow only value 200 admin, 210 exclusive, 280 staff, 290 Device.'
    EXEC SaveErrorMsg 1108, N'Member Full Name (default) already exists.'
    EXEC SaveErrorMsg 1109, N'User Name already exists.'
    EXEC SaveErrorMsg 1110, N'Member Id is not found.'
    EXEC SaveErrorMsg 1111, N'IDCard is already exists.'
    EXEC SaveErrorMsg 1112, N'Employee Code is already exists.'
    EXEC SaveErrorMsg 1113, N'TagId is already exists.'
    EXEC SaveErrorMsg 1114, N'Lang Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1115, N'Lang Id not exist.'
    EXEC SaveErrorMsg 1116, N'Member Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1117, N'No Member match MemberId in specificed Customer Id.'
    EXEC SaveErrorMsg 1118, N'Member Full Name (ML) already exists.'
    -- ORGS.
    EXEC SaveErrorMsg 1201, N'Customer Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1202, N'Customer Id not found.'
    EXEC SaveErrorMsg 1203, N'Branch Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1204, N'Branch Id not found.'
    EXEC SaveErrorMsg 1205, N'The Root Org already assigned.'
    EXEC SaveErrorMsg 1206, N'The Parent Org Id is not found.'
    EXEC SaveErrorMsg 1207, N'Org Name (default) cannot be null or empty string.'
    EXEC SaveErrorMsg 1208, N'Org Name (default) already exists.'
    EXEC SaveErrorMsg 1209, N'Lang Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1210, N'Lang Id not found.'
    EXEC SaveErrorMsg 1211, N'Customer Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1212, N'Customer Id not found.'
    EXEC SaveErrorMsg 1213, N'Org Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1214, N'No Org match Org Id in specificed Customer Id.'
    EXEC SaveErrorMsg 1215, N'Org Name (ML) already exists.'
    -- DEVICES.

    -- QSETS.
    EXEC SaveErrorMsg 1401, N'Customer Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1402, N'Customer Id is not found.'
    EXEC SaveErrorMsg 1403, N'QSet Id is not found.'
    EXEC SaveErrorMsg 1404, N'QSet is already used in vote table.'
    EXEC SaveErrorMsg 1405, N'Begin Date and/or End Date should not be null.'
    EXEC SaveErrorMsg 1406, N'Display Mode is null or value is not in 0 to 1.'
    EXEC SaveErrorMsg 1407, N'Begin Date should less than End Date.'
    EXEC SaveErrorMsg 1408, N'Begin Date or End Date is overlap with another Question Set.'

    -- QSLIDES.

    -- QSLIDEITEMS.

    -- VOTES.
    EXEC SaveErrorMsg 1701, N'Customer Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1702, N'Customer Id not found.'
    EXEC SaveErrorMsg 1703, N'Branch Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1704, N'Branch Id not found.'
    EXEC SaveErrorMsg 1705, N'Org Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1706, N'Org Id not found.'
    EXEC SaveErrorMsg 1707, N'QSet Id cannot be null or empty string.'
    EXEC SaveErrorMsg 1708, N'QSet Id not found.'

    -- REGISTER CUSTOMER.
    EXEC SaveErrorMsg 1801, N'CustomerName cannot be null or empty string.'
    EXEC SaveErrorMsg 1802, N'UserName and Password cannot be null or empty string.'

    -- SIGNIN.
    EXEC SaveErrorMsg 1901, N'Reserved not exist.'

    -- GET VOTE SUMMARIES.
    EXEC SaveErrorMsg 2001, N'CustomerId cannot be null or empty string.'
    EXEC SaveErrorMsg 2002, N'QSetId cannot be null or empty string.'
    EXEC SaveErrorMsg 2003, N'QSeq cannot be null.'
    EXEC SaveErrorMsg 2004, N'The default OrgId not found.'
    EXEC SaveErrorMsg 2005, N'The BranchId not found.'

    -- GET RAW VOTES
    EXEC SaveErrorMsg 2101, N'CustomerId cannot be null or empty string.'
    EXEC SaveErrorMsg 2102, N'QSetId cannot be null or empty string.'
    EXEC SaveErrorMsg 2103, N'QSeq cannot be null or less than 1.'
    EXEC SaveErrorMsg 2104, N'Begin Date and End Date cannot be null.'
    EXEC SaveErrorMsg 2105, N'LangId Is Null Or Empty String.'
END

GO

EXEC InitErrorMessages;

GO

