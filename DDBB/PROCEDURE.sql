



CREATE PROCEDURE SP_item_image_add  --url_colorID_itemID
    @ImageURL VARCHAR(300),
    @ColorID INT,
    @ItemID INT
AS
BEGIN
    -- Verificar si la URL de la imagen ya existe
    IF EXISTS (SELECT 1 FROM Tb_ItemImage WHERE ImageURL = @ImageURL)
    BEGIN
        SELECT -1 AS Resultado, 'La URL de la imagen ya existe' AS Mensaje;
        RETURN;
    END

    -- Verificar si el ColorID existe en la tabla Tb_ItemColor
    IF NOT EXISTS (SELECT 1 FROM Tb_ItemColor WHERE ID_Color = @ColorID)
    BEGIN
        SELECT -2 AS Resultado, 'El ColorID no existe' AS Mensaje;
        RETURN;
    END

    -- Verificar si el ItemID existe en la tabla Tb_Item
    IF NOT EXISTS (SELECT 1 FROM Tb_Item WHERE ID_Item = @ItemID)
    BEGIN
        SELECT -3 AS Resultado, 'El ItemID no existe' AS Mensaje;
        RETURN;
    END

    -- Si todas las validaciones pasan, insertar la nueva imagen
    INSERT INTO Tb_ItemImage (ImageURL, ID_Color, ID_Item)
    VALUES (@ImageURL, @ColorID, @ItemID);

	-- Verificar si la inserción fue exitosa
    IF @@ROWCOUNT > 0
    BEGIN
        SELECT 1 AS Resultado, 'Imagen insertada correctamente' AS Mensaje;
    END
    ELSE
    BEGIN
        SELECT -4 AS Resultado, 'Error al insertar la imagen' AS Mensaje;
    END
END;

go --segunda PROCEDURE

--Name_sku_Description

CREATE PROCEDURE SP_item_add
    @NameVAR VARCHAR(50),
    @skuVAR  VARCHAR(20),
    @DescriptionVAR VARCHAR(MAX)
AS
BEGIN
    -- Verificar si el nombre, SKU Y Description ya existe
    IF EXISTS (SELECT 1 FROM Tb_Item 
				WHERE Name = @NameVAR
				AND SKU = @skuVAR
				AND Description = @DescriptionVAR)
    BEGIN
        SELECT -1 AS Resultado, 'El nombre, SKU Y descripcion ya existe' AS Mensaje;
        RETURN;
    END

    -- Si todas las validaciones pasan, insertar la nueva imagen
    INSERT INTO Tb_Item (Name, SKU, Description)
    VALUES (@NameVAR, @skuVAR, @DescriptionVAR);

	-- Verificar si la inserción fue exitosa
    IF @@ROWCOUNT > 0
    BEGIN
        SELECT 1 AS Resultado, 'item insertada correctamente' AS Mensaje;
    END
    ELSE
    BEGIN
        SELECT -4 AS Resultado, 'Error al insertar la item' AS Mensaje;
    END
END;

go

--ID_PriceList, ID_Item, Price
CREATE PROCEDURE SP_item_price_list_add
    @ID_PriceList_VAR INT,
    @ID_Item_VAR  INT
    --@Price_VAR INT
AS
BEGIN

	    -- Verificar si el ID_Item existe en la tabla Tb_Item
    IF NOT EXISTS (SELECT 1 FROM Tb_Item WHERE ID_Item = @ID_Item_VAR)
    BEGIN
        SELECT -2 AS Resultado, 'El ID_item no existe' AS Mensaje;
        RETURN;
    END

		    -- Verificar si el ID_Item existe en la tabla Tb_Item
    IF NOT EXISTS (SELECT 1 FROM Tb_PriceList WHERE ID_PriceList = @ID_PriceList_VAR)
    BEGIN
        SELECT -2 AS Resultado, 'El ID_item no existe' AS Mensaje;
        RETURN;
    END

    -- Si todas las validaciones pasan, insertar 
    INSERT INTO Tb_ItemPriceList(ID_PriceList,ID_Item)
    VALUES (@ID_PriceList_VAR, @ID_Item_VAR);

	-- Verificar si la inserción fue exitosa
    IF @@ROWCOUNT > 0
    BEGIN
        SELECT 1 AS Resultado, 'precio de lista insertada correctamente' AS Mensaje;
    END
    ELSE
    BEGIN
        SELECT -4 AS Resultado, 'Error al insertar el precio de lista' AS Mensaje;
    END
END;


go


CREATE PROCEDURE sp_item_complete_add

	@ID_PriceList_VAR INT,
    @ID_Item_VAR  INT,

	@NameVAR VARCHAR(50),
    @skuVAR  VARCHAR(20),
    @DescriptionVAR VARCHAR(MAX),

	@ImageURL VARCHAR(300),
    @ColorID INT,
    @ItemID INT

AS
BEGIN

	EXEC SP_item_image_add @ImageURL ,@ColorID, @ItemID ;
	EXEC SP_item_add @NameVAR ,@skuVAR, @DescriptionVAR ;
	EXEC SP_item_price_list_add @ID_Item_VAR,@ID_PriceList_VAR ;

END;