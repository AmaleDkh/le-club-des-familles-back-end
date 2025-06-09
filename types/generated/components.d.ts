import type { Schema, Struct } from '@strapi/strapi';

export interface SharedThreeKeyFigures extends Struct.ComponentSchema {
  collectionName: 'components_shared_three_key_figures';
  info: {
    displayName: 'ThreeKeyFigures';
  };
  attributes: {
    FirstKeyFigureNumber: Schema.Attribute.String;
    FirstKeyFigureParagraph: Schema.Attribute.Text;
    SecondKeyFigureNumber: Schema.Attribute.String;
    SecondKeyFigureParagraph: Schema.Attribute.Text;
    SectionTitle: Schema.Attribute.String;
    ThirdKeyFigureNumber: Schema.Attribute.String;
    ThirdKeyFigureParagraph: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.three-key-figures': SharedThreeKeyFigures;
    }
  }
}
