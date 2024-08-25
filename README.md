# Plasma Icon library

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)

Plasma Custom Icons
- Bedroom Icons with Numbers to indicate which Bedroom e.g. Bedroom 4

# Installation
On Hacs, install as custom repository. For manual installation, add:

```yaml
- url: /local/lovelace/resources/plasma-icons/plasma-icons.js?v=1.0.0
  type: module
```

to your resources file (adapt path to your own folder structure), or click

<a href="https://my.home-assistant.io/redirect/lovelace_resources/" target="_blank"><img src="https://my.home-assistant.io/badges/lovelace_resources.svg" alt="Open your Home Assistant instance and show your Lovelace resources." /></a>

## Usage
- In your editor, specify an icon as `plasma:icon-name`, to indicate the icon to be from this Custom Icon Libary.

### Example:

```
    - title: Master Bedroom
      path: master-bedroom
      subview: false
      icon: plasma:master-bedroom
      cards:
      type: custom:masonry-layout
    - title: Bedroom 2
      path: bed-2
      subview: false
      icon: plasma:bedroom-2
      cards:
      type: custom:masonry-layout
    - title: Bedroom 3
      path: bed-3
      subview: false
      icon: plasma:bedroom-3
      cards:
      type: custom:masonry-layout
```

## Icons
[//]: # (Start Custom Icons)

| Icon | Name |
| :--- | :--- |
| ![plasma:bedroom-1](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/docs/svgs/bedroom-1.svg)| Bedroom 1 |
| ![plasma:bedroom-2](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/docs/svgs/bedroom-2.svg)| Bedroom 2 |
| ![plasma:bedroom-3](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/docs/svgs/bedroom-3.svg)| Bedroom 3 |
| ![plasma:bedroom-4](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/docs/svgs/bedroom-4.svg)| Bedroom 4 |
| ![plasma:bedroom-5](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/docs/svgs/bedroom-5.svg)| Bedroom 5 |
| ![plasma:bedroom-6](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/docs/svgs/bedroom-6.svg)| Bedroom 6 |
| ![plasma:bedroom-7](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/docs/svgs/bedroom-7.svg)| Bedroom 7 |
| ![plasma:bedroom-8](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/docs/svgs/bedroom-8.svg)| Bedroom 8 |
| ![plasma:bedroom-9](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/docs/svgs/bedroom-9.svg)| Bedroom 9 |
| ![plasma:master-bedroom](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/docs/svgs/master-bedroom.svg)| Master Bedroom |

[//]: # (End Custom Icons)
