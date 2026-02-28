# Theme System cho Web

Theme system này đã được điều chỉnh từ React Native sang Web (Next.js + React) để có thể sử dụng chung cho toàn bộ ứng dụng.

## Cấu trúc thư mục

```
src/theme/
├── index.ts              # Export chính
├── configs.ts            # Cấu hình theme chính
├── layout.ts             # Layout styles (flexbox, positioning, etc.)
├── fonts.ts              # Typography system
├── backgrounds.ts        # Background colors
├── borders.ts            # Border styles
├── gutters.ts            # Spacing system (margin, padding, gap)
├── components.ts         # Component-specific styles
├── types/                # Type definitions
│   ├── theme.ts
│   ├── config.ts
│   ├── fonts.ts
│   ├── colors.ts
│   ├── backgrounds.ts
│   ├── borders.ts
│   ├── gutters.ts
│   ├── common.ts
│   └── images.ts
└── README.md            # Tài liệu này
```

## Cách sử dụng

### 1. Import theme hook

```tsx
import { useTheme } from '@/hooks/useTheme';
import { Variant } from '@/theme/configs';
```

### 2. Sử dụng trong component

```tsx
const MyComponent = () => {
  const theme = useTheme(Variant.DARK); // hoặc không truyền gì để dùng default

  return (
    <div style={theme.layout.column}>
      <h1 style={{ ...theme.fonts.size_24, ...theme.fonts.bold }}>
        Tiêu đề
      </h1>
      <p style={{ ...theme.fonts.size_16, ...theme.fonts.textBody }}>
        Nội dung
      </p>
    </div>
  );
};
```

### 3. Các hệ thống có sẵn

#### Layout System
- **Flexbox**: `theme.layout.row`, `theme.layout.column`, `theme.layout.rowCenter`, etc.
- **Positioning**: `theme.layout.absolute`, `theme.layout.relative`, `theme.layout.top0`, etc.
- **Sizing**: `theme.layout.fullWidth`, `theme.layout.fullHeight`, `theme.layout.flex_1`, etc.

#### Typography System
- **Sizes**: `theme.fonts.size_12`, `theme.fonts.size_14`, ..., `theme.fonts.size_100`
- **Colors**: `theme.fonts.textPrimary`, `theme.fonts.textSecondary`, `theme.fonts.textWhite`, etc.
- **Styles**: `theme.fonts.bold`, `theme.fonts.uppercase`, `theme.fonts.alignCenter`, etc.

#### Spacing System (Gutters)
- **Margin**: `theme.gutters.margin_8`, `theme.gutters.marginTop_16`, `theme.gutters.marginVertical_12`, etc.
- **Padding**: `theme.gutters.padding_8`, `theme.gutters.paddingHorizontal_16`, etc.
- **Gap**: `theme.gutters.gap_8`, `theme.gutters.gap_16`, etc.
- **Sizing**: `theme.gutters.width_100`, `theme.gutters.height_50`, etc.

#### Background System
- **Colors**: `theme.backgrounds.primary`, `theme.backgrounds.secondary`, `theme.backgrounds.white`, etc.

#### Border System
- **Colors**: `theme.borders.borderPrimary`, `theme.borders.borderBrand`, etc.
- **Radius**: `theme.borders.rounded_4`, `theme.borders.rounded_8`, `theme.borders.roundedTop_12`, etc.
- **Width**: `theme.borders.w_1`, `theme.borders.w_2`, `theme.borders.wTop_1`, etc.

#### Shadow System
- `theme.layout.boxShadow` - Shadow mặc định
- `theme.layout.boxShadow1` - Shadow nhẹ
- `theme.layout.boxShadow3` - Shadow đậm

### 4. Tùy chỉnh theme

Để tùy chỉnh theme, chỉnh sửa file `src/theme/configs.ts`:

```typescript
const colorsLight = {
  // Thêm hoặc chỉnh sửa màu sắc
  primary: "#002D6D",
  secondary: "#FF5050",
  // ...
};
```

### 5. Tạo variant mới

```typescript
export const config = {
  // ... existing config
  variants: {
    dark: {
      colors: colorsDark,
      // ...
    },
    // Thêm variant mới
    blue: {
      colors: {
        primary: "#0066CC",
        // ...
      }
    }
  },
};
```

## Ví dụ hoàn chỉnh

Xem file `src/components/ThemeExample.tsx` để có ví dụ chi tiết về cách sử dụng tất cả các tính năng của theme system.

## Lưu ý

- Theme system này đã được chuyển đổi hoàn toàn từ React Native sang Web CSS
- Tất cả styles đều sử dụng `React.CSSProperties` thay vì React Native styles
- Không còn dependencies với `@react-navigation/native` hay React Native components
- Tương thích hoàn toàn với Next.js và các framework React khác