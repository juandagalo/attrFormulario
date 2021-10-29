CREATE TABLE [attrBiomarcadores]
(
	[attrBioId] INT IDENTITY(1,1) PRIMARY KEY,

	[attrPacNum] INT NOT NULL,

	[attrNtProBnp] SMALLINT,

	[attrTroponinT] FLOAT,

	[CreateDate] SMALLDATETIME NOT NULL DEFAULT getDate(),

	CONSTRAINT FK_attrPersonas_attrBiomarcadores_attrPacNum FOREIGN KEY ([attrPacNum])
		REFERENCES [attrPacientes]([attrNumero])
);
Go

Select * from [attrBiomarcadores];



DROP PROCEDURE IF EXISTS dbo.[stpCreateBiomarcadorAttr];  
GO 

CREATE PROCEDURE [stpCreateBiomarcadorAttr]
	@userId INT,

	@attrPacNum INT,
	@attrNtProBnp SMALLINT,
	@attrTroponinT FLOAT,

    @result INT OUTPUT
AS

SET NOCOUNT ON

SET @result = 0

INSERT INTO [attrBiomarcadores](
	[AttrPacNum],
	[attrNtProBnp],
	[attrTroponinT]
)VALUES(
	@attrPacNum,
	@attrNtProBnp,
	@attrTroponinT
)


IF(@@ROWCOUNT > 0 )
	SET @result = SCOPE_IDENTITY();
GO



DROP PROCEDURE IF EXISTS dbo.[stpGetBiomarcadoresByBiomarcadorId];  
GO 

CREATE PROCEDURE [stpGetBiomarcadoresByBiomarcadorId]

	@userId INT,
	@biomarcadorId INT

AS

SET NOCOUNT ON

SELECT

	[attrBioId],
	[attrPacNum],
	[attrNtProBnp],
	[attrTroponinT],
	[CreateDate]

FROM [attrBiomarcadores]
WHERE [attrBioId] = @biomarcadorId;

GO



DROP PROCEDURE IF EXISTS dbo.[stpGetBiomarcardorByPacienteId];  
GO 

CREATE PROCEDURE [stpGetBiomarcardorByPacienteId]

	@userId INT,
	@pacienteId INT

AS

SET NOCOUNT ON

SELECT

	[attrBioId],
	[attrPacNum],
	[attrNtProBnp],
	[attrTroponinT],
	[CreateDate]

FROM [attrBiomarcadores]
WHERE [AttrPacNum] = @pacienteId;

GO