---
outline: deep
---

# Fields

CoreCMSAPI allows 16 different field types to create your schema.

![Fields](/screenshots/fields.png)

## Field Parameters

Every field type has some default and additional settings according to its type.

- **Label**: Display name of the field
- **Field Name**: Database name of the field
- **Description (optional)**: Displays a hint for the field when creating or editing content
- **Placeholder (optional)**: Placeholder text for input fields

![Field Parameters](/screenshots/field_parameters.png)

## Validations

When creating content, validation options can help users to keep the content data consistent and clean.

- **Required**: Prevents saving content if this field is empty
- **Unique**: Prevents saving content if there is a record with the same content.
- **Character count**: Specifies a minimum and/or maximum allowed number of characters

::: info
You can write a custom error message for validations. 
:::

![Field Validations](/screenshots/field_validations.png)

## Other Options

You can also set other options for a field to control its behavior.

- **Repeatable Field**: Allows multiple entries for the field. It's available for _text_, _longtext_, _email_, _number_, _color_, _date_, _time_, and _block_ field types.
- **Hide in content list**: Field will be invisible in the content list table
- **Hidden in API**: Field will be invisible in API.

![Field Options](/screenshots/field_options.png)