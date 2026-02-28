'use client';

import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Variant } from '@/theme/configs';

const ThemeExample: React.FC = () => {
  const theme = useTheme(Variant.DARK);

  return (
    <div style={theme.layout.column}>
      <h1 style={{ ...theme.fonts.size_24, ...theme.fonts.textHeadingPrimary }}>
        Theme System Demo
      </h1>
      
      {/* Colors Demo */}
      <div style={{ ...theme.layout.row, ...theme.gutters.gap_16, ...theme.gutters.marginVertical_20 }}>
        <div 
          style={{ 
            ...theme.backgrounds.primary, 
            ...theme.gutters.padding_16,
            ...theme.borders.rounded_8,
            ...theme.fonts.textWhite 
          }}
        >
          Primary Background
        </div>
        <div 
          style={{ 
            ...theme.backgrounds.secondary, 
            ...theme.gutters.padding_16,
            ...theme.borders.rounded_8,
            ...theme.fonts.textWhite 
          }}
        >
          Secondary Background
        </div>
      </div>

      {/* Layout Demo */}
      <div style={{ ...theme.layout.rowBetween, ...theme.gutters.marginVertical_16 }}>
        <div style={theme.fonts.size_16}>Left Content</div>
        <div style={theme.fonts.size_16}>Right Content</div>
      </div>

      {/* Typography Demo */}
      <div style={theme.layout.column}>
        <h2 style={{ ...theme.fonts.size_20, ...theme.fonts.bold }}>
          Typography Examples
        </h2>
        <p style={{ ...theme.fonts.size_14, ...theme.fonts.textBody }}>
          This is body text using theme typography
        </p>
        <p style={{ ...theme.fonts.size_12, ...theme.fonts.textPlaceholder }}>
          This is placeholder text
        </p>
      </div>

      {/* Spacing Demo */}
      <div style={{ ...theme.layout.column, ...theme.gutters.marginTop_24 }}>
        <h3 style={{ ...theme.fonts.size_18, ...theme.fonts.bold }}>
          Spacing Examples
        </h3>
        <div style={{ ...theme.layout.row, ...theme.gutters.gap_8 }}>
          <div style={{ ...theme.backgrounds.bgTertiary, ...theme.gutters.padding_8 }}>
            Small padding
          </div>
          <div style={{ ...theme.backgrounds.bgTertiary, ...theme.gutters.padding_16 }}>
            Medium padding
          </div>
          <div style={{ ...theme.backgrounds.bgTertiary, ...theme.gutters.padding_24 }}>
            Large padding
          </div>
        </div>
      </div>

      {/* Border Demo */}
      <div style={{ ...theme.layout.column, ...theme.gutters.marginTop_24 }}>
        <h3 style={{ ...theme.fonts.size_18, ...theme.fonts.bold }}>
          Border Examples
        </h3>
        <div style={{ ...theme.layout.row, ...theme.gutters.gap_16 }}>
          <div 
            style={{ 
              ...theme.gutters.padding_16,
              ...theme.borders.w_1,
              ...theme.borders.borderPrimary,
              ...theme.borders.rounded_4
            }}
          >
            Border with radius
          </div>
          <div 
            style={{ 
              ...theme.gutters.padding_16,
              ...theme.borders.w_2,
              ...theme.borders.borderBrand,
              ...theme.borders.rounded_8
            }}
          >
            Thick brand border
          </div>
        </div>
      </div>

      {/* Shadow Demo */}
      <div style={{ ...theme.layout.column, ...theme.gutters.marginTop_24 }}>
        <h3 style={{ ...theme.fonts.size_18, ...theme.fonts.bold }}>
          Shadow Examples
        </h3>
        <div style={{ ...theme.layout.row, ...theme.gutters.gap_16 }}>
          <div 
            style={{ 
              ...theme.gutters.padding_16,
              ...theme.backgrounds.white,
              ...theme.layout.boxShadow,
              ...theme.borders.rounded_8
            }}
          >
            Default shadow
          </div>
          <div 
            style={{ 
              ...theme.gutters.padding_16,
              ...theme.backgrounds.white,
              ...theme.layout.boxShadow3,
              ...theme.borders.rounded_8
            }}
          >
            Strong shadow
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeExample;