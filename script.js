IDE_Morph.prototype.setFlatDesign = function () {
    MorphicPreferences.isFlat = true;
    SpriteMorph.prototype.paletteColor = new Color(33, 37, 43);
    SpriteMorph.prototype.paletteTextColor = new Color(157, 165, 180);
    StageMorph.prototype.paletteTextColor = SpriteMorph.prototype.paletteTextColor;
    StageMorph.prototype.paletteColor = SpriteMorph.prototype.paletteColor;
    SpriteMorph.prototype.sliderColor = SpriteMorph.prototype.paletteColor;

    IDE_Morph.prototype.buttonContrast = 30;
    IDE_Morph.prototype.backgroundColor = new Color(40, 44, 52);
    IDE_Morph.prototype.frameColor = new Color(24, 26, 31);

    IDE_Morph.prototype.groupColor = new Color(44, 50, 60);
    IDE_Morph.prototype.sliderColor = SpriteMorph.prototype.sliderColor;
    IDE_Morph.prototype.buttonLabelColor = new Color(255, 255, 255);
    IDE_Morph.prototype.tabColors = [
        IDE_Morph.prototype.groupColor.lighter(60),
        IDE_Morph.prototype.groupColor.darker(10),
        IDE_Morph.prototype.groupColor
    ];
    IDE_Morph.prototype.rotationStyleColors = [
        IDE_Morph.prototype.groupColor,
        IDE_Morph.prototype.groupColor.darker(10),
        IDE_Morph.prototype.groupColor.darker(30)
    ];
    IDE_Morph.prototype.appModeColor = IDE_Morph.prototype.frameColor;
    IDE_Morph.prototype.scriptsPaneTexture = null;
    IDE_Morph.prototype.padding = 1;

    SpriteIconMorph.prototype.labelColor = IDE_Morph.prototype.buttonLabelColor;
    CostumeIconMorph.prototype.labelColor = IDE_Morph.prototype.buttonLabelColor;
    SoundIconMorph.prototype.labelColor = IDE_Morph.prototype.buttonLabelColor;
    TurtleIconMorph.prototype.labelColor = IDE_Morph.prototype.buttonLabelColor;
};

world.children[0].flatDesign();
