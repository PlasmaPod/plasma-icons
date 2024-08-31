[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)

# plasma-icons

Custom icon pack designed for Home Assistant for personal use

## Icons
[//]: # (Start Custom Icons)

| Icon | Name |
| :--- | :--- |
| ![plasma:bedroom-1](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/svg/bedroom-1.svg)| Bedroom 1 |
| ![plasma:bedroom-2](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/svg/bedroom-2.svg)| Bedroom 2 |
| ![plasma:bedroom-3](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/svg/bedroom-3.svg)| Bedroom 3 |
| ![plasma:bedroom-4](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/svg/bedroom-4.svg)| Bedroom 4 |
| ![plasma:bedroom-5](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/svg/bedroom-5.svg)| Bedroom 5 |
| ![plasma:bedroom-6](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/svg/bedroom-6.svg)| Bedroom 6 |
| ![plasma:bedroom-7](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/svg/bedroom-7.svg)| Bedroom 7 |
| ![plasma:bedroom-8](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/svg/bedroom-8.svg)| Bedroom 8 |
| ![plasma:bedroom-9](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/svg/bedroom-9.svg)| Bedroom 9 |
| ![plasma:master-bedroom](https://raw.githubusercontent.com/PlasmaPod/plasma-icons/main/svg/master-bedroom.svg)| Master Bedroom |

[//]: # (End Custom Icons)

## Install

### HACS
Add `https://github.com/plasmapod/plasma-icons` as custom-repository for a Lovelace plugin in [HACS](https://hacs.xyz/docs/faq/custom_repositories/)

### Manual
Copy the `plasma-icons.js` file into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).

Add the folowing to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /local/plasma-icons.js
```

Or add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml if using YAML mode.

```yaml
resources:
  - type: js
    url: /local/plasma-icons.js
```

Restart home-assistant.

## Using
The icons uses the prefix `plasma:`.

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
