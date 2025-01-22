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
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    },
    surface: {
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
    transitionDuration: "0.2s",
    focusRing: {
      width: "1px",
      style: "solid",
      color: "{primary.300}",
      offset: "2px",
      shadow: "none"
    },
    disabledOpacity: "0.6",
    iconSize: "1.8rem",
    anchorGutter: "2px",
    formField: {
      paddingX: "1rem",
      paddingY: "0.5rem",
      sm: {
        fontSize: "1.2rem",
        paddingX: "1rem",
        paddingY: "0.3rem"
      },
      lg: {
        fontSize: "1.4rem",
        paddingX: "1rem",
        paddingY: "0.8rem"
      },
      borderRadius: "{border.radius.md}",
      focusRing: {
        width: "0",
        style: "none",
        color: "transparent",
        offset: "0",
        shadow: "none"
      },
      transitionDuration: "{transition.duration}"
    },
    list: {
      padding: "0.5rem",
      gap: "2px",
      header: {
        padding: "0.5rem 1rem 0.25rem 1rem"
      },
      option: {
        padding: "0.5rem",
        borderRadius: "{border.radius.sm}"
      },
      optionGroup: {
        padding: "0.5rem",
        fontWeight: "600"
      }
    },
    content: {
      borderRadius: "{border.radius.md}"
    },
    mask: {
      transitionDuration: "0.15s"
    },
    navigation: {
      list: {
        padding: "0.5rem",
        gap: "2px"
      },
      item: {
        padding: "0.5rem",
        borderRadius: "{border.radius.sm}",
        gap: "0.5rem"
      },
      submenuLabel: {
        padding: "0.5rem",
        fontWeight: "600"
      },
      submenuIcon: {
        size: "0.5rem"
      }
    },
    overlay: {
      select: {
        borderRadius: "{border.radius.md}",
        shadow: "{shadow.md}"
      },
      popover: {
        borderRadius: "{border.radius.md}",
        padding: "1rem",
        shadow: "{shadow.md}"
      },
      modal: {
        borderRadius: "{border.radius.xl}",
        padding: "1rem",
        shadow: "{shadow.lg}"
      },
      navigation: {
        shadow: "{shadow.md}"
      }
    },
  },
  components: {
    button: {
      padding: {
        x: '1rem',
      },
      fontSize: '1.4rem'
    },
  },
  extends: {
    shadow: {
      sm: '0 4px 8px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      md: '0 8px 12px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      lg: '0 16px 20px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
    }
  }
});