SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[LimitUnit](
	[LimitUnitId] [int] NOT NULL,
	[LangId] [nvarchar](3) NOT NULL,
	[LimitName] [nvarchar](100) NOT NULL,
	[UnitText] [nvarchar](20) NULL,
 CONSTRAINT [PK_LimitUnit] PRIMARY KEY CLUSTERED 
(
	[LimitUnitId] ASC,
	[LangId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'The LimitUnitId.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'LimitUnit', @level2type=N'COLUMN',@level2name=N'LimitUnitId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'The ISO 639-1 alpha 2 code.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'LimitUnit', @level2type=N'COLUMN',@level2name=N'LangId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'The Name for LimitUnit.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'LimitUnit', @level2type=N'COLUMN',@level2name=N'LimitName'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'The limit unit text.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'LimitUnit', @level2type=N'COLUMN',@level2name=N'UnitText'
GO
