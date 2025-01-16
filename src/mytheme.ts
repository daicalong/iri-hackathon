import Aura from "@primeng/themes/aura";
import { definePreset } from "@primeng/themes";

export const primeNGTheme = definePreset(Aura, {
    primitive: {
      borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        full: '10000px'
      },
    },
    semantic: {
      primary: {
        50: '{sky.50}',
        100: '{sky.100}',
        200: '{sky.200}',
        300: '{sky.300}',
        400: '{sky.400}',
        500: '{sky.500}',
        600: '{sky.600}',
        700: '{sky.700}',
        800: '{sky.800}',
        900: '{sky.900}',
        950: '{sky.950}'
      },
      colorScheme: {
        light: {
          surface: {
            0: '#ffffff',
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}'
          },
          primary: {
            color: '{primary.500}',
            contrastColor: '#ffffff',
            hoverColor: '{primary.600}',
            activeColor: '{primary.700}'
          },
          highlight: {
            background: '{primary.50}',
            focusBackground: '{primary.100}',
            color: '{primary.700}',
            focusColor: '{primary.800}'
          },
          mask: {
            background: 'rgba(0,0,0,0.4)',
            color: '{surface.200}'
          },
          formField: {
            background: '{surface.0}',
            disabledBackground: '{surface.200}',
            filledBackground: '{surface.50}',
            filledHoverBackground: '{surface.50}',
            filledFocusBackground: '{surface.50}',
            borderColor: '{surface.300}',
            hoverBorderColor: '{surface.400}',
            focusBorderColor: '{primary.color}',
            invalidBorderColor: '{red.400}',
            color: '{surface.700}',
            disabledColor: '{surface.500}',
            placeholderColor: '{surface.500}',
            invalidPlaceholderColor: '{red.600}',
            floatLabelColor: '{surface.500}',
            floatLabelFocusColor: '{primary.600}',
            floatLabelActiveColor: '{surface.500}',
            floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
            iconColor: '{surface.400}',
            shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)'
          },
          text: {
            color: '{surface.700}',
            hoverColor: '{surface.800}',
            mutedColor: '{surface.500}',
            hoverMutedColor: '{surface.600}'
          },
          content: {
            background: '{surface.0}',
            hoverBackground: '{surface.100}',
            borderColor: '{surface.200}',
            color: '{text.color}',
            hoverColor: '{text.hover.color}'
          },
          overlay: {
            select: {
              background: '{surface.0}',
              borderColor: '{surface.200}',
              color: '{text.color}'
            },
            popover: {
              background: '{surface.0}',
              borderColor: '{surface.200}',
              color: '{text.color}'
            },
            modal: {
              background: '{surface.0}',
              borderColor: '{surface.200}',
              color: '{text.color}'
            }
          },
          list: {
            option: {
              focusBackground: '{surface.100}',
              selectedBackground: '{highlight.background}',
              selectedFocusBackground: '{highlight.focus.background}',
              color: '{text.color}',
              focusColor: '{text.hover.color}',
              selectedColor: '{highlight.color}',
              selectedFocusColor: '{highlight.focus.color}',
              icon: {
                color: '{surface.400}',
                focusColor: '{surface.500}'
              }
            },
            optionGroup: {
              background: 'transparent',
              color: '{text.muted.color}'
            }
          },
          navigation: {
            item: {
              focusBackground: '{surface.100}',
              activeBackground: '{surface.100}',
              color: '{text.color}',
              focusColor: '{text.hover.color}',
              activeColor: '{text.hover.color}',
              icon: {
                color: '{surface.400}',
                focusColor: '{surface.500}',
                activeColor: '{surface.500}'
              }
            },
            submenuLabel: {
              background: 'transparent',
              color: '{text.muted.color}'
            },
            submenuIcon: {
              color: '{surface.400}',
              focusColor: '{surface.500}',
              activeColor: '{surface.500}'
            }
          }
        },
        dark: {
          surface: {
            0: '#ffffff',
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}'
          },
          primary: {
            color: '{primary.400}',
            contrastColor: '{surface.900}',
            hoverColor: '{primary.300}',
            activeColor: '{primary.200}'
          },
          highlight: {
            background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
            focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
            color: 'rgba(255,255,255,.87)',
            focusColor: 'rgba(255,255,255,.87)'
          },
          mask: {
            background: 'rgba(0,0,0,0.6)',
            color: '{surface.200}'
          },
          formField: {
            background: '{surface.950}',
            disabledBackground: '{surface.700}',
            filledBackground: '{surface.800}',
            filledHoverBackground: '{surface.800}',
            filledFocusBackground: '{surface.800}',
            borderColor: '{surface.600}',
            hoverBorderColor: '{surface.500}',
            focusBorderColor: '{primary.color}',
            invalidBorderColor: '{red.300}',
            color: '{surface.0}',
            disabledColor: '{surface.400}',
            placeholderColor: '{surface.400}',
            invalidPlaceholderColor: '{red.400}',
            floatLabelColor: '{surface.400}',
            floatLabelFocusColor: '{primary.color}',
            floatLabelActiveColor: '{surface.400}',
            floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
            iconColor: '{surface.400}',
            shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)'
          },
          text: {
            color: '{surface.0}',
            hoverColor: '{surface.0}',
            mutedColor: '{surface.400}',
            hoverMutedColor: '{surface.300}'
          },
          content: {
            background: '{surface.900}',
            hoverBackground: '{surface.800}',
            borderColor: '{surface.700}',
            color: '{text.color}',
            hoverColor: '{text.hover.color}'
          },
          overlay: {
            select: {
              background: '{surface.900}',
              borderColor: '{surface.700}',
              color: '{text.color}'
            },
            popover: {
              background: '{surface.900}',
              borderColor: '{surface.700}',
              color: '{text.color}'
            },
            modal: {
              background: '{surface.900}',
              borderColor: '{surface.700}',
              color: '{text.color}'
            }
          },
          list: {
            option: {
              focusBackground: '{surface.800}',
              selectedBackground: '{highlight.background}',
              selectedFocusBackground: '{highlight.focus.background}',
              color: '{text.color}',
              focusColor: '{text.hover.color}',
              selectedColor: '{highlight.color}',
              selectedFocusColor: '{highlight.focus.color}',
              icon: {
                color: '{surface.500}',
                focusColor: '{surface.400}'
              }
            },
            optionGroup: {
              background: 'transparent',
              color: '{text.muted.color}'
            }
          },
          navigation: {
            item: {
              focusBackground: '{surface.800}',
              activeBackground: '{surface.800}',
              color: '{text.color}',
              focusColor: '{text.hover.color}',
              activeColor: '{text.hover.color}',
              icon: {
                color: '{surface.500}',
                focusColor: '{surface.400}',
                activeColor: '{surface.400}'
              }
            },
            submenuLabel: {
              background: 'transparent',
              color: '{text.muted.color}'
            },
            submenuIcon: {
              color: '{surface.500}',
              focusColor: '{surface.400}',
              activeColor: '{surface.400}'
            }
          }
        }
      },
      iconSize: '1.8rem',
      formField: {
        paddingX: '1rem',
        paddingY: '0.5rem',
        sm: {
          fontSize: '1.2rem',
          paddingX: '1rem',
          paddingY: '0.5rem'
        },
        lg: {
            fontSize: '1.4rem',
            paddingX: '1rem',
            paddingY: '0.5rem'
        },
        borderRadius: '{border.radius.md}',
        focusRing: {
          width: '0',
          style: 'none',
          color: 'transparent',
          offset: '0',
          shadow: 'none'
        },
        transitionDuration: '{transition.duration}'
      },
      list: {
        padding: '1rem',
        gap: '0.5rem',
        header: {
          padding: '1rem'
        },
        option: {
          padding: '0.5rem',
          borderRadius: '{border.radius.sm}'
        },
        optionGroup: {
          padding: '0.5rem',
          fontWeight: '600'
        }
      },
      content: {
        borderRadius: '{border.radius.md}'
      },
      mask: {
        transitionDuration: '0.15s'
      },
      navigation: {
        list: {
          padding: '1rem',
          gap: '2px'
        },
        item: {
          padding: '1rem',
          borderRadius: '{border.radius.sm}',
          gap: '0.5rem'
        },
        submenuLabel: {
          padding: '1rem',
          fontWeight: '600'
        },
        submenuIcon: {
          size: '1.8rem'
        }
      },
      overlay: {
        select: {
          borderRadius: '{border.radius.md}',
          shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
        },
        popover: {
          borderRadius: '{border.radius.md}',
          padding: '1rem',
          shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
        },
        modal: {
          borderRadius: '{border.radius.xl}',
          padding: '2rem',
          shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
        },
        navigation: {
          shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
        }
      },
    }
  });