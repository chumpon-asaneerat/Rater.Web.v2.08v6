SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[NewIDView] AS SELECT NEWID() NEW_ID;
GO

-- =============================================
-- Author: Chumpon Asaneerat
-- Name: NewSID.
-- Description:	New GUID in String nvarchar(80)
-- [== History ==]
-- <2018-05-29> :
--	- Stored Procedure Created.
-- <2018-06-12> :
--	- Change column size from 80 to 40.
--
-- [== Example ==]
--
-- =============================================
CREATE FUNCTION [dbo].[NewSID]()
RETURNS nvarchar(40)
AS
BEGIN
DECLARE @id uniqueidentifier;
DECLARE @result nvarchar(40);
	SELECT @id = NEW_ID FROM NewIDView;
    SELECT @result = CONVERT(nvarchar(40), @id);
    RETURN @result;
END

GO