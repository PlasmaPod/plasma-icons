

## Usage:
Install the plugin and use it like in this example:

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

### Systemwide availability (Optional)
The steps above will make the icons available, but limited to the Lovelace UI only. If you want the icons to be available throughout Home Assistant, add the following to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/plasma-icons/plasma-icons.js
```

For this step, a system restart is needed.
