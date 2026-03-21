
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-EE7A3B.svg)](https://github.com/hacs/integration)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/PlasmaPod/plasma-icons)](https://github.com/PlasmaPod/plasma-icons/releases/latest)
![GitHub file size in bytes](https://img.shields.io/github/size/PlasmaPod/plasma-icons/dist/plasma-icons.js?label=plugin%20size)
![GitHub last commit](https://img.shields.io/github/last-commit/PlasmaPod/plasma-icons)

# Plasma Icons

#### Plasma icons use the prefix `plasma:`
#### Append Name (of the icon) after `plasma:`
- Example: `plasma:starlink` <img src="/icon-svg/starlink.svg" title="Preview" alt="Preview" width="24"/>

## Available Icons

To view all available icons, you can go to the following address. The icon viewer also allows you to generate a `custom brand-icons.js` with only the icons you want, allowing you to streamline the icon pack and eliminate loading issues.
 -  [Icon Finder](https://elax46.github.io/custom-brand-icons/)

# Installation Methods

#### HACS

We recommend installing Custom brand icons card via [Home Assistant Community Store](https://hacs.xyz)
[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=PlasmaPod&repository=plasma-icons&category=frontend)

After installing through HACS:
1. Add the following lines to your `configuration.yaml`

    ```yaml
    frontend:
      extra_module_url:
        - /local/community/plasma-icons/plasma-icons.js
    ```

2. (Optional) YAML mode users. Add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml.

    ```yaml
    resources:
      - type: js
        url: /local/community/plasma-icons/plasma-icons.js
    ```

#### Manual Installation

To add custom repositories please follow [this guide](https://hacs.xyz/docs/faq/custom_repositories/). Set URL to `` and category to `Lovelace`.

1. Download `plasma-icons.js` file from the [latest release](/releases/latest).
2. Copy the `plasma-icons.js` file into `<config>/www/` the directory where your `configuration.yaml` resides.

3. Add the following to the `frontend` section of your `configuration.yaml`

    ```yaml
    frontend:
      extra_module_url:
        - /local/plasma-icons.js
    ```

4. (Optional) YAML mode users. Add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml.

    ```yaml
    resources:
      - type: js
        url: /local/plasma-icons.js
    ```

5. Restart Home Assistant.

---

# User Manual

#### Custom brand icons use the prefix `plasma:`
#### Append Name (of the icon) after `plasma:`
- Example: `plasma:starlink` <img src="/icon-svg/starlink.svg" title="Preview" alt="Preview" width="24"/>

Example of plasma icons a lovelace card:

```yaml
entities:
  - entity: sensor.starlink_status
    icon: 'plasma:starlink'
    name: Starlink Status
show_header_toggle: false
title: Plasma Icons
type: entities
```

---

# Don't see the icon?

#### Hard Reload (browser cache issue)
- Reload browser by holding CTRL and pressing F5.
- For Mac, hold ⌘ CMD and ⇧ SHIFT, then press R.

#### Redownload Integration
1. From left sidebar, select on *HACS*.
2. Select on *Integrations*.
3. From the top header bar (Integrations, Frontend), select *Frontend*.
4. Search *plasma-icons* on the search bar.
5. Select *Plasma Icons*.
6. From the top right, select the 3 vertical dots which opens a dropdown menu.
7. Select *Redownload*.
8. **Hard reload** browser.

#### Reinstall Integration
1. Open the dropdown menu from **Step 6** of **Redownload Integration**.
2. Select *Remove*, then select *Remove* again on the popup.
3. This should bring you back to /hacs/frontend
4. From the top right, select the 3 vertical dots which opens a dropdown menu.
5. Select on *Custom repositories*.
6. Find *Plasma Icons* and select it.
7. On the bottom right, select the big blue *Download* icon.
8. **Hard reload** browser.


#### Create a smaller version of the icon pack

1. Go to [icon viewer](https://elax46.github.io/custom-brand-icons/)
2. Select all the icons you want to add to your HA instance
3. Download the js file and install it manually in Home Assistant

---

# Developer Workflow

### Make your own `svg` icon

- To make an icon in svg format you can use different programs starting from illustrator, inkview, or [Inkscape](https://inkscape.org/).
- Verify `svg` icons are set properly by using text editor of your choice ([Notepad++](https://notepad-plus-plus.org/), Notepad, or Visual Studio Code).
- Rules on Icon size and contraints are ([HERE](https://github.com/elax46/custom-brand-icons/discussions/1021), 
- The `svg` code must contain **viewbox**. No transform, translate, or scale.
- Make sure to add color: **#44739e**. Every custom brand icon uses this color.
- all icons must have a nomenclature NOT in camelcase but of the type `part1name-part2name`
- Once done, add the svg file in the folder `icon-svg` found in the root of the repo.

- the icon must ***not be composed of multiple paths but a single** one as shown in the example below

Example svg file below:

```svg
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<!-- path d="..." is unique for each icon -->

<svg
   width="24"
   height="24"
   viewBox="0 0 24 24"
   version="1.1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
   <path
     style="fill:#44739e"
     d="..."
    \>
  </svg>
```

### Normalize script

> [!WARNING]  
>You need to have Node.js installed to use.

> [!NOTE]  
> This procedure can be performed locally to verify that the icons meet the required requirements and that they are compliant and minimized as best as possible.

Thanks to the work of @SoulSolistice, a `normalize-icons.mjs` has been introduced that performs the following operations:

- `viewBox="0 0 24 24"`
- geometry scaled to fit within `MAX_GEO` x `MAX_GEO` (aspect preserved), default 20x20
- geometry centered at `viewBox / 2`, default 12,12
- paths only output, baked coordinates, no transforms
- fill color is fixed to BRAND_FILL, default `#44739e`
- --clean: svgo --> normalize --> svgo (because normalization expands path data)
- --vrt: ImageMagick montage ... --> script/vrt.png as "Visual Regression Test"
- default input/output (when not specified): plasma-icons/icon-svg


#### Installation & use:
* Run `npm i` in `plasma-icons` folder to install requirements
* Run `npm run clean:vrt` to clean the current icons (will be overwritten). Also creates `vrt.png` in the `scripts` folder as "Visual Regression Test". This needs ImageMagick installed.




### Contributions and Pull Requests

After adding your svg icon in `icon-svg`. Open pull requests on the **[dev branch](https://github.com/PlasmaPod/plasma-icons/pulls)**.

