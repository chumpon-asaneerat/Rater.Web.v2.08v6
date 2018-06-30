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
-- <2018-05-29> :
--	- Update code for new table structure.
--
-- [== Example ==]
--
--exec InitErrorMessages
-- =============================================
ALTER PROCEDURE [dbo].[InitErrorMessages]
AS
BEGIN
DECLARE @langId nvarchar(3);
	-- <<<<[================= EN =================]>>>>
	SET @langId = N'EN';
    -- SUCCESS.
    EXEC SaveErrorMsg @langId, 0000, N'Success.'
    -- LANGUAGES.
    EXEC SaveErrorMsg @langId, 1001, N'Language Id cannot be null or empty string.'
    EXEC SaveErrorMsg @langId, 1002, N'Description(EN) cannot be null or empty string.'
    EXEC SaveErrorMsg @langId, 1003, N'Language Description (en) is duplicated.'
    EXEC SaveErrorMsg @langId, 1004, N'Currency Symbol cannot be null or empty string.'
    EXEC SaveErrorMsg @langId, 1005, N'Currency Description(EN) cannot be null or empty string.'
	-- MASTER PK.
    EXEC SaveErrorMsg @langId, 1101, N'Table Name is null or empty string.'
    EXEC SaveErrorMsg @langId, 1102, N'Seed Reset Mode should be number 1-3.'
    EXEC SaveErrorMsg @langId, 1103, N'Seed Digits should be number 1-9.'
    EXEC SaveErrorMsg @langId, 1104, N'Table name is not exists in MasterPK table.'
    EXEC SaveErrorMsg @langId, 1105, N'Not supports reset mode.'
    EXEC SaveErrorMsg @langId, 1106, N'Cannot generate seed code for table:'

	-- <<<<[================= TH =================]>>>>
	SET @langId = N'TH';
    -- SUCCESS.
    EXEC SaveErrorMsg @langId, 0000, N'ดำเนินการสำเร็จ.'
    -- LANGUAGES.
    EXEC SaveErrorMsg @langId, 1001, N'รหัสภาษา ไม่สามารถใช้ค่าว่าง หรือข้อความว่างได้'
    EXEC SaveErrorMsg @langId, 1002, N'คำอธิบายภาษา (EN) ไม่สามารถใช้ค่าว่าง หรือข้อความว่างได้'
    EXEC SaveErrorMsg @langId, 1003, N'คำอธิบายภาษา (EN) ตรวจพบข้อความซ้ำ.'
    EXEC SaveErrorMsg @langId, 1004, N'รหัสสกุลเงิน ไม่สามารถใช้ค่าว่าง หรือข้อความว่างได้'
    EXEC SaveErrorMsg @langId, 1005, N'ชื่อสกุลเงิน (EN) ไม่สามารถใช้ค่าว่าง หรือข้อความว่างได้'
	-- MASTER PK.
    EXEC SaveErrorMsg @langId, 1101, N'ชื่อตาราง ไม่สามารถใช้ค่าว่าง หรือข้อความว่างได้'
    EXEC SaveErrorMsg @langId, 1102, N'รีเซ็ตโหมด มีค่าระหว่าง 1-3.'
    EXEC SaveErrorMsg @langId, 1103, N'จำนวนรหัส มีค่าระหว่าง 1-9.'
    EXEC SaveErrorMsg @langId, 1104, N'ไม่พบชื่อตาราง ใน MasterPK table.'
    EXEC SaveErrorMsg @langId, 1105, N'ไม่รองรับ รีเซ็ตโหมด.'
    EXEC SaveErrorMsg @langId, 1106, N'ไม่สามารถสร้างรหัสสำหรับตาราง :'
END

GO

EXEC InitErrorMessages;
GO
