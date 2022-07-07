# webcomponent-viewer

## Properties

| Property           | Attribute          | Type                       | Default |
|--------------------|--------------------|----------------------------|---------|
| `customEventNames` | `customEventNames` | `string[]`                 | []      |
| `element`          | `element`          | `HTMLElement \| undefined` |         |

## Methods

| Method              | Type                                             |
|---------------------|--------------------------------------------------|
| `slotChanged`       | `(event: Event): void`                           |
| `toAttributeRows`   | `(arr: PropertyGuiWrapper[] \| undefined): string[][]` |
| `toCustomEventRows` | `(arr: string[] \| undefined): string[][]`       |
| `toSlotRows`        | `(arr: string[] \| undefined): string[][]`       |
