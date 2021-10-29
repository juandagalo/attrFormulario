
CREATE TABLE [attrPacientes]
(
	     [attrPersonaId] INT IDENTITY(1,1),
         
         [attrNumero] INT NOT NULL PRIMARY KEY,

         [attrEtnia] SMALLINT NOT NULL,

         [attrOcupacion] NVARCHAR(200) NOT NULL,

         [attrFechaPrimConsul] SMALLDATETIME,

         [attrImplanteDispositivo] SMALLINT NOT NULL,

         [attrTipoImplanteDispositivo] SMALLINT NOT NULL,

         [attrFormaSindClinico] SMALLINT NOT NULL,

         [attrOtraFormaSindClinico] NVARCHAR(100),

         [attrManifestExtracardiaca] SMALLINT NOT NULL,

         [attrTipoManifestExtracardiaca] SMALLINT NOT NULL,

         [attrOtroTipoManifestExtracardiaca] NVARCHAR(200),

         [attrManifestElectro] SMALLINT NOT NULL,

         [attrGrosorVentri] SMALLINT NOT NULL,

		 [attrFracEyecc] FLOAT,

		 [attrDeformLong] FLOAT,

		 [attrResoNucleGodolinio] SMALLINT NOT NULl,

         [attrTipoAnormGadolinio] SMALLINT NOT NULL,

         [attrGammagr] SMALLINT NOT NULL,

         [attrAmiloidosis] SMALLINT NOT NULL,

         [attrAttrCm] SMALLINT NOT NULL, 

         [attrFechaAttrCm] SMALLDATETIME,

         [attrTipoAttrCm] SMALLINT NOT NULL,

		 [attrInterFamaco] SMALLINT NOT NULL,

		 [attrOtroInterFamaco] NVARCHAR(200),

         [attrDesenlace] SMALLINT,

         [attrFechaFallece] SMALLDATETIME,

         [attrEdadFallece] TINYINT,

         [CreateDate] SMALLDATETIME NOT NULL DEFAULT getDate(),

         [UpdateDate] SMALLDATETIME,

        CONSTRAINT FK_hisPacientes_attrPersonas_attrNumero FOREIGN KEY ([attrNumero])
            REFERENCES hisPacientes(pacNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrEtnia FOREIGN KEY ([attrEtnia])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrImplanteDispositivo FOREIGN KEY ([attrImplanteDispositivo])
			REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrTipoImplanteDispositivo FOREIGN KEY ([attrTipoImplanteDispositivo])
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrFormaSindClinico FOREIGN KEY ([attrFormaSindClinico])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrManifestExtracardiaca FOREIGN KEY ([attrManifestExtracardiaca])
			REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrTipoManifestExtracardiaca FOREIGN KEY ([attrTipoManifestExtracardiaca])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrManifestElectro FOREIGN KEY ([attrManifestElectro])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrGrosorVentri FOREIGN KEY ([attrGrosorVentri])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrResoNucleGodolinio FOREIGN KEY (attrResoNucleGodolinio)
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrTipoAnormGadolinio FOREIGN KEY ([attrTipoAnormGadolinio])
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrGammagr FOREIGN KEY ([attrGammagr])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrAmiloidosis FOREIGN KEY ([attrAmiloidosis])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrAttrCm FOREIGN KEY ([attrAttrCm])
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrTipoAttrCm FOREIGN KEY ([attrTipoAttrCm])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrInterFamaco FOREIGN KEY (attrInterFamaco)
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrDesenlace FOREIGN KEY ([attrDesenlace])
            REFERENCES tblConceptos(conNumero)
)




DROP PROCEDURE IF EXISTS dbo.[stpCreatePacienteAttr];  
GO 

CREATE PROCEDURE [stpCreatePacienteAttr]
    @userId INT,

	@attrNumero INT,
    @attrEtnia SMALLINT,
    @attrOcupacion NVARCHAR(200),
	@attrFechaPrimConsul SMALLDATETIME,
    @attrImplanteDispositivo SMALLINT,
    @attrTipoImplanteDispositivo SMALLINT,
    @attrFormaSindClinico SMALLINT,
    @attrOtraFormaSindClinico NVARCHAR(100),
    @attrManifestExtracardiaca SMALLINT,
    @attrTipoManifestExtracardiaca SMALLINT,
    @attrOtroTipoManifestExtracardiaca NVARCHAR(200),
    @attrManifestElectro SMALLINT,
    @attrGrosorVentri SMALLINT,
	@attrFracEyecc FLOAT,
	@attrDeformLong FLOAT,
	@attrResoNucleGodolinio SMALLINT,
    @attrTipoAnormGadolinio SMALLINT,
    @attrGammagr SMALLINT,
    @attrAmiloidosis SMALLINT,
    @attrAttrCm SMALLINT,
    @attrFechaAttrCm SMALLDATETIME = NULL,
    @attrTipoAttrCm SMALLINT,
	@attrInterFamaco SMALLINT,
	@attrOtroInterFamaco NVARCHAR(200),
    @attrDesenlace SMALLINT = NULL,
    @attrFechaFallece SMALLDATETIME = NULL,
    @attrEdadFallece TINYINT = NULL,

    @result INT OUTPUT
AS

SET NOCOUNT ON

SET @result = 0

INSERT INTO [attrPacientes] (
         [attrNumero],
         [attrEtnia],
         [attrOcupacion],
		 [attrFechaPrimConsul],
         [attrImplanteDispositivo],
         [attrTipoImplanteDispositivo],
         [attrFormaSindClinico],
         [attrOtraFormaSindClinico],
         [attrManifestExtracardiaca],
         [attrTipoManifestExtracardiaca],
         [attrOtroTipoManifestExtracardiaca],
         [attrManifestElectro],
         [attrGrosorVentri],
		 [attrFracEyecc],
		 [attrDeformLong],
		 [attrResoNucleGodolinio],
         [attrTipoAnormGadolinio],
         [attrGammagr],
         [attrAmiloidosis],
         [attrAttrCm],
         [attrFechaAttrCm],
         [attrTipoAttrCm],
		 [attrInterFamaco],
		 [attrOtroInterFamaco],
         [attrDesenlace],
         [attrFechaFallece],
         [attrEdadFallece],
		 [UpdateDate])

VALUES (    
	@attrNumero,
    @attrEtnia,
    @attrOcupacion,
	@attrFechaPrimConsul,
    @attrImplanteDispositivo,
    @attrTipoImplanteDispositivo,
    @attrFormaSindClinico,
    @attrOtraFormaSindClinico,
    @attrManifestExtracardiaca,
    @attrTipoManifestExtracardiaca,
    @attrOtroTipoManifestExtracardiaca,
    @attrManifestElectro,
    @attrGrosorVentri,
	@attrFracEyecc,
	@attrDeformLong,
	@attrResoNucleGodolinio,
    @attrTipoAnormGadolinio,
    @attrGammagr,
    @attrAmiloidosis,
    @attrAttrCm,
    @attrFechaAttrCm,
    @attrTipoAttrCm,
	@attrInterFamaco,
	@attrOtroInterFamaco,
    @attrDesenlace,
    @attrFechaFallece,
    @attrEdadFallece,
	getDate()
)

IF(@@ROWCOUNT > 0 )
	SET @result = SCOPE_IDENTITY();

GO








DROP PROCEDURE IF EXISTS dbo.[stpGetPacienteByIdentification];  
GO 

CREATE PROCEDURE [stpGetPacienteByIdentification]
    @userId INT,
	@uniqueId INT
AS

SET NOCOUNT ON

SELECT 
	@uniqueId as UserId,
    [attrNumero],
    [attrEtnia],
    [attrOcupacion],
	[attrFechaPrimConsul],
    [attrImplanteDispositivo],
    [attrTipoImplanteDispositivo],
    [attrFormaSindClinico],
    [attrOtraFormaSindClinico],
    [attrManifestExtracardiaca],
    [attrTipoManifestExtracardiaca],
    [attrOtroTipoManifestExtracardiaca],
    [attrManifestElectro],
    [attrGrosorVentri],
	[attrFracEyecc],
	[attrDeformLong],
	[attrResoNucleGodolinio],
    [attrTipoAnormGadolinio],
    [attrGammagr],
    [attrAmiloidosis],
    [attrAttrCm],
    [attrFechaAttrCm],
    [attrTipoAttrCm],
	[attrInterFamaco],
	[attrOtroInterFamaco],
    [attrDesenlace],
    [attrFechaFallece],
    [attrEdadFallece]
FROM [attrPacientes]
WHERE [AttrNumero] = @uniqueId;

GO

exec stpGetPacienteByIdentification @userId = 1 ,@uniqueId = 5;
Go







DROP PROCEDURE IF EXISTS dbo.[stpUpdatePacienteAttr];  
GO 

CREATE PROCEDURE [dbo].[stpUpdatePacienteAttr]
	@userId INT,

	@attrNumero INT,
    @attrEtnia SMALLINT,
    @attrOcupacion NVARCHAR(200),
	@attrFechaPrimConsul SMALLDATETIME,
    @attrImplanteDispositivo SMALLINT,
    @attrTipoImplanteDispositivo SMALLINT,
    @attrFormaSindClinico SMALLINT,
    @attrOtraFormaSindClinico NVARCHAR(100),
    @attrManifestExtracardiaca SMALLINT,
    @attrTipoManifestExtracardiaca SMALLINT,
    @attrOtroTipoManifestExtracardiaca NVARCHAR(200),
    @attrManifestElectro SMALLINT,
    @attrGrosorVentri SMALLINT,
	@attrFracEyecc FLOAT,
	@attrDeformLong FLOAT,
	@attrResoNucleGodolinio SMALLINT,
    @attrTipoAnormGadolinio SMALLINT,
    @attrGammagr SMALLINT,
    @attrAmiloidosis SMALLINT,
    @attrAttrCm SMALLINT,
    @attrFechaAttrCm SMALLDATETIME,
    @attrTipoAttrCm SMALLINT,
	@attrInterFamaco SMALLINT,
	@attrOtroInterFamaco NVARCHAR(200),
    @attrDesenlace SMALLINT,
    @attrFechaFallece SMALLDATETIME,
    @attrEdadFallece TINYINT,

    @result INT OUTPUT
AS

SET NOCOUNT ON
SET @result = 0
	
UPDATE [attrPacientes]
    SET
		[attrEtnia] = @attrEtnia,
		[attrOcupacion] = @attrOcupacion,
		[attrFechaPrimConsul] = @attrFechaPrimConsul,
		[attrImplanteDispositivo] = @attrImplanteDispositivo,
		[attrTipoImplanteDispositivo] = @attrTipoImplanteDispositivo,
		[attrFormaSindClinico] = @attrFormaSindClinico,
		[attrOtraFormaSindClinico] = @attrOtraFormaSindClinico,
		[attrManifestExtracardiaca] = @attrManifestExtracardiaca,
		[attrTipoManifestExtracardiaca] = @attrTipoManifestExtracardiaca,
		[attrOtroTipoManifestExtracardiaca] = @attrOtroTipoManifestExtracardiaca,
		[attrManifestElectro] = @attrManifestElectro,
		[attrGrosorVentri] = @attrGrosorVentri,
		[attrFracEyecc] = @attrFracEyecc,
		[attrDeformLong] = @attrDeformLong,
		[attrResoNucleGodolinio] = @attrResoNucleGodolinio,
		[attrTipoAnormGadolinio] = @attrTipoAnormGadolinio,
		[attrGammagr] = @attrGammagr,
		[attrAmiloidosis] = @attrAmiloidosis,
		[attrAttrCm] = @attrAttrCm,
		[attrFechaAttrCm] = @attrFechaAttrCm,
		[attrTipoAttrCm] = @attrTipoAttrCm,
		[attrInterFamaco] = @attrInterFamaco,
		[attrOtroInterFamaco] = @attrOtroInterFamaco,
		[attrDesenlace] = @attrDesenlace,
		[attrFechaFallece] = @attrFechaFallece,
		[attrEdadFallece] = @attrEdadFallece,
		[UpdateDate] = getDate()
WHERE [AttrNumero] = @AttrNumero;

IF(@@ROWCOUNT > 0 )
	SET @result = 1;
GO