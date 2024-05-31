---
slug: react-ui-libraries
title: The best React UI library
description: This article compares different React component libraries to help choose the best for your project.
authors: tonai
tags: [frontend, react, library]
---

<head>
  <link rel="canonical" href="https://smile.eu/en/publications-and-events/best-react-ui-library" />
</head>

The React community stands out as one of the largest, but navigating through the multitude of libraries to find the right one that truly adds value to your business can be a challenging task.

This article aims to facilitate this process by undertaking a comparison of various React component libraries, aiding you in selecting the most suitable UI toolkit for your project.

<!--truncate-->

To conduct this comparison, we will go through the following steps:

1. Initially, we'll compile an extensive list of React libraries that are potential candidates for the comparison.
2. Next, we'll gather statistics related to popularity, usage, and other relevant metrics.
3. Following that, we'll define a set of components that we intend to evaluate in each library.
4. Lastly, we'll compare the generated bundle size, performances and assess the licensing details of each library.

## Libraries

Here is a list of libraries that may be suitable for our case. We can categorize them accordingly:

- UI libraries: reusable and configurable components
  - [MUI](https://mui.com/) (paid version available)
  - [Ant-design](https://ant.design/)
  - [Chakra](https://chakra-ui.com/)
  - [React bootstrap](https://react-bootstrap.netlify.app/)
  - [Blueprint](https://blueprintjs.com/)
  - [Mantine](https://mantine.dev/)
  - [Fluent UI](https://react.fluentui.dev/)
  - [Semantic UI React](https://react.semantic-ui.com/)
  - [Evergreen](https://evergreen.segment.com/)
  - [reactstrap](https://reactstrap.github.io/)
  - [Next UI](https://nextui.org/)
  - [Grommet](https://v2.grommet.io/)
  - [Rebass](https://rebass-v3.vercel.app/)
  - [Carbon](https://carbondesignsystem.com/developing/frameworks/react/)
  - [ThemeUI](https://theme-ui.com/)
  - [PrimeReact](https://primereact.org/)
  - [MDB](https://mdbootstrap.com/docs/react/) (paid version available)
  - [adminkit](https://adminkit.io/) (paid version available)
  - [Park UI](https://park-ui.com/)
  - [Shards](https://designrevision.com/downloads/shards-react/) (paid version available)
  - [Foundation](https://digia.online/react-foundation-docs/)
  - [PlainAdmin](https://plainadmin.com/) (paid version available)
- Headless libraries: components that come without styling, but with all the functionalities
  - [shadcn-ui/ui](https://ui.shadcn.com/)
  - [Daisy UI](https://daisyui.com/)
  - [Headless UI](https://headlessui.com/)
  - [Radix](https://www.radix-ui.com/)
  - [React Aria](https://react-spectrum.adobe.com/react-aria/)
  - [Ark UI](https://ark-ui.com/)
  - [Tailwind UI](https://tailwindui.com/) (not free)
- Admin libraries: components that connect to the backend and manage all CRUD (Create, Read, Update, Delete) operations
  - [React-admin](https://marmelab.com/react-admin/) (paid version available)
  - [Refine](https://refine.dev/) (paid version available)
  - [adminJS](https://adminjs.co/) (paid version available)
  - [Retool](https://retool.com) (not free)

While I've made an effort to include a diverse selection of libraries, it's possible that I've overlooked some. This list is not exhaustive, but it serves as our initial foundation for the upcoming steps.

## Statistics

Below are the statistics for the libraries, accurate as of January 29, 2024:

| Libraries                                                                       | Components | Stars | Issues | PR  | weekly dl | created    | last commit |
| ------------------------------------------------------------------------------- | ---------- | ----- | ------ | --- | --------- | ---------- | ----------- |
| [MUI](https://github.com/mui/material-ui)                                       | ~74        | 90.5k | 1.6k   | 221 | 3.5M      | 18/08/2014 | 29/01/2024  |
| [Ant-design](https://github.com/ant-design/ant-design)                          | ~74        | 89.1k | 1k     | 69  | 1.3M      | 24/04/2015 | 29/01/2024  |
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui)                                 | ~46        | 46.4k | 851    | 288 | 57k       | 04/01/2023 | 28/01/2024  |
| [Chakra UI](https://github.com/chakra-ui/chakra-ui)                             | ~62        | 35.9k | 229    | 62  | 534k      | 17/08/2019 | 25/01/2024  |
| [Daisy UI](https://github.com/saadeghi/daisyui)                                 | ~55        | 28.7k | 52     | 6   | 263k      | 28/11/2020 | 29/01/2024  |
| [React-admin](https://github.com/marmelab/react-admin)                          | -          | 23.5k | 81     | 19  | 58k       | 13/07/2016 | 26/01/2024  |
| [Headless UI](https://github.com/tailwindlabs/headlessui)                       | ~10        | 23.4k | 21     | 2   | 1.6M      | 16/09/2020 | 28/01/2024  |
| [Mantine](https://github.com/mantinedev/mantine)                                | ~118       | 23.2k | 40     | 9   | 291k      | 07/01/2021 | 29/01/2024  |
| [React bootstrap](https://github.com/react-bootstrap/react-bootstrap)           | ~39        | 22.1k | 134    | 47  | 1.9M      | 27/12/2013 | 29/01/2024  |
| [Blueprint](https://github.com/palantir/blueprint)                              | ~66        | 20.3k | 642    | 35  | 202k      | 25/10/2016 | 25/01/2024  |
| [Refine](https://github.com/refinedev/refine)                                   | -          | 20.2k | 41     | 23  | 15k       | 20/01/2021 | 29/01/2024  |
| [Next UI](https://github.com/nextui-org/nextui)                                 | ~38        | 18k   | 239    | 57  | 65k       | 22/04/2021 | 05/01/2024  |
| [Fluent UI](https://github.com/microsoft/fluentui)                              | ~67        | 17.3k | 493    | 201 | 191k      | 06/06/2016 | 29/01/2024  |
| [Radix](https://github.com/radix-ui/primitives)                                 | ~36        | 13.3k | 379    | 70  | 1.3M      | 19/06/2020 | 25/09/2023  |
| [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React)          | ~49        | 13.1k | 172    | 21  | 261k      | 19/06/2015 | 30/12/2023  |
| [Evergreen](https://github.com/segmentio/evergreen)                             | ~35        | 12.3k | 40     | 37  | 12k       | 30/07/2017 | 21/06/2023  |
| [React Aria](https://github.com/adobe/react-spectrum)                           | ~37        | 10.9k | 554    | 58  | 16k       | 13/09/2019 | 27/01/2024  |
| [reactstrap](https://github.com/reactstrap/reactstrap)                          | ~29        | 10.6k | 246    | 53  | 497k      | 19/02/2016 | 20/01/2024  |
| [Grommet](https://github.com/grommet/grommet)                                   | ~82        | 8.3k  | 266    | 44  | 24k       | 24/03/2015 | 27/01/2024  |
| [Rebass](https://github.com/rebassjs/rebass)                                    | ~8         | 7.9k  | 46     | 51  | 53k       | 11/02/2015 | 03/08/2021  |
| [adminJS](https://github.com/SoftwareBrothers/adminjs)                          | -          | 7.7k  | 135    | 17  | 22k       | 23/11/2018 | 24/01/2024  |
| [Carbon](https://github.com/carbon-design-system/carbon)                        | ~41        | 7.3k  | 489    | 42  | 54k       | 13/03/2017 | 26/01/2024  |
| [ThemeUI](https://github.com/system-ui/theme-ui)                                | ~36        | 5.2k  | 50     | 8   | 74k       | 03/04/2019 | 24/01/2024  |
| [PrimeReact](https://github.com/primefaces/primereact)                          | ~89        | 5.2k  | 181    | 11  | 118k      | 16/12/2016 | 29/01/2024  |
| [Ark UI](https://github.com/chakra-ui/ark)                                      | ~36        | 2.7k  | 14     | 8   | 33k       | 26/10/2022 | 29/01/2024  |
| [MDB](https://github.com/mdbootstrap/mdb-react-ui-kit)                          | ~50        | 1.4k  | 1      | 0   | 7k        | 07/09/2017 | 29/01/2024  |
| [adminkit](https://github.com/adminkit/adminkit)                                | ~60        | 1.3k  | 0      | 0   | 5k        | 21/03/2020 | 08/06/2024  |
| [Park UI](https://github.com/cschroeter/park-ui)                                | ~41        | 903   | 13     | 5   | 3k        | 02/08/2023 | 29/01/2024  |
| [Shards](https://github.com/DesignRevision/shards-react)                        | ~27        | 755   | 34     | 15  | 1k        | 27/12/2018 | 25/02/2019  |
| [Foundation](https://github.com/digiaonline/react-foundation)                   | ~16        | 601   | -      | -   | 7k        | 21/03/2020 | 27/01/2023  |
| [PlainAdmin](https://github.com/PlainAdmin/plain-free-bootstrap-admin-template) | ~159       | 321   | 0      | 1   | -         | 30/05/2021 | 01/09/2023  |

Tailwind UI and Retool have no available data as they are not open-source solutions.

Regarding React-admin, Refine, and adminJS, the component count is not provided. This is because, being admin libraries, they primarily facilitate connections to backends rather than supplying individual components.

## Components

For the comparison we will choose the context of building some **back-office application** with a need for advanced components, so we might be interested in the following:

- A table component for presenting data
- A Date-picker component
- A standalone calendar component
- A "toast" component (utilized for displaying information or error messages, for instance)
- An upload (dropzone) component

Additionally, it would be beneficial if the libraries also include:

- Some charts components
- A Rich Text Editor component
- A document preview component

However, if these are not available, we can consider using dedicated libraries for those purposes.

Here's a table indicating the availability of these components in each library:

| Libraries         | Table                                                                          | Calendar                                                                    | Datepicker                                                                    | Toast                                                                         | Chart                                                 | Doc preview                             | Upload                                                               | RTE                                                              |
| ----------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| MUI               | [✅💵](https://mui.com/x/react-data-grid/)                                     | [🟠](https://mui.com/x/react-date-pickers/date-picker/)                     | [✅](https://mui.com/x/react-date-pickers/date-picker/)                       | [✅](https://mui.com/material-ui/react-snackbar/)                             | [✅⏳](https://mui.com/x/react-charts/)               | ❌                                      | [🟠](https://mui.com/material-ui/react-button/#file-upload)          | ❌                                                               |
| Ant-design        | [✅](https://ant.design/components/table)                                      | [🟠](https://ant.design/components/calendar)                                | [✅](https://ant.design/components/date-picker)                               | [✅](https://ant.design/components/alert)                                     | [🟠](https://charts.ant.design/en)                    | ❌                                      | [✅](https://ant.design/components/upload)                           | ❌                                                               |
| shadcn-ui/ui      | [✅](https://ui.shadcn.com/docs/components/table)                              | [🟠](https://ui.shadcn.com/docs/components/calendar)                        | [✅](https://ui.shadcn.com/docs/components/date-picker)                       | [✅](https://ui.shadcn.com/docs/components/toast)                             | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Chakra UI         | [🟠](https://chakra-ui.com/docs/components/table)                              | ❌                                                                          | ❌                                                                            | [✅](https://chakra-ui.com/docs/components/toast)                             | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Daisy UI          | [✅](https://daisyui.com/components/table/)                                    | ❌                                                                          | ❌                                                                            | [✅](https://daisyui.com/components/toast/)                                   | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Headless UI       | ❌                                                                             | ❌                                                                          | ❌                                                                            | ❌                                                                            | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Mantine           | [✅](https://ui.mantine.dev/category/tables)                                   | [🟠](https://mantine.dev/dates/calendar/)                                   | [✅](https://ui.mantine.dev/category/inputs)                                  | [✅](https://mantine.dev/others/notifications/)                               | [🟠](https://mantine.dev/charts/getting-started/)     | ❌                                      | [✅](https://ui.mantine.dev/category/dropzones)                      | [✅](https://mantine.dev/others/tiptap/)                         |
| React bootstrap   | [🟠](https://react-bootstrap.github.io/components/table/)                      | ❌                                                                          | ❌                                                                            | [✅](https://react-bootstrap.github.io/components/toasts/)                    | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Blueprint         | [✅](https://blueprintjs.com/docs/#table/features)                             | ❌                                                                          | [✅](https://blueprintjs.com/docs/#datetime/datepicker)                       | [✅](https://blueprintjs.com/docs/#core/components/toast)                     | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Next UI           | [✅](https://nextui.org/docs/components/table)                                 | ❌                                                                          | ❌                                                                            | ❌                                                                            | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Fluent UI         | [✅](https://developer.microsoft.com/en-us/fluentui#/controls/web/detailslist) | [🟠](https://developer.microsoft.com/en-us/fluentui#/controls/web/calendar) | [✅](https://developer.microsoft.com/en-us/fluentui#/controls/web/datepicker) | [🟠](https://developer.microsoft.com/en-us/fluentui#/controls/web/messagebar) | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Radix             | ❌                                                                             | ❌                                                                          | ❌                                                                            | [✅](https://www.radix-ui.com/primitives/docs/components/toast)               | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Semantic UI React | [✅](https://react.semantic-ui.com/collections/table/)                         | ❌                                                                          | ❌                                                                            | [🟠](https://react.semantic-ui.com/collections/message/)                      | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Evergreen         | [🟠](https://evergreen.segment.com/components/table)                           | ❌                                                                          | ❌                                                                            | [✅](https://evergreen.segment.com/components/toaster)                        | ❌                                                    | ❌                                      | [✅](https://evergreen.segment.com/components/file-uploader)         | ❌                                                               |
| React Aria        | [✅](https://react-spectrum.adobe.com/react-aria/Table.html)                   | [🟠](https://react-spectrum.adobe.com/react-aria/Calendar.html)             | [✅](https://react-spectrum.adobe.com/react-aria/DatePicker.html)             | [✅](https://react-spectrum.adobe.com/react-aria/useToast.html)               | ❌                                                    | ❌                                      | [✅](https://react-spectrum.adobe.com/react-aria/DropZone.html)      | ❌                                                               |
| reactstrap        | [🟠](https://reactstrap.github.io/?path=/docs/components-table--table)         | ❌                                                                          | ❌                                                                            | [🟠](https://reactstrap.github.io/?path=/docs/components-toast--toast)        | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Grommet           | [✅](https://v2.grommet.io/datatable)                                          | [🟠](https://v2.grommet.io/calendar)                                        | [✅](https://v2.grommet.io/dateinput)                                         | [🟠](https://v2.grommet.io/notification)                                      | [✅](https://v2.grommet.io/datachart)                 | ❌                                      | [✅](https://v2.grommet.io/fileinput)                                | ❌                                                               |
| Rebass            | ❌                                                                             | ❌                                                                          | ❌                                                                            | ❌                                                                            | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Carbon            | [✅](https://carbondesignsystem.com/components/data-table/usage)               | ❌                                                                          | [✅](https://carbondesignsystem.com/components/date-picker/usage/)            | [✅](https://carbondesignsystem.com/components/notification/usage/)           | ❌                                                    | ❌                                      | [✅](https://carbondesignsystem.com/components/file-uploader/usage/) | ❌                                                               |
| ThemeUI           | ❌                                                                             | ❌                                                                          | ❌                                                                            | [🟠](https://theme-ui.com/components/alert)                                   | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| PrimeReact        | [✅](https://primereact.org/datatable/)                                        | [🟠](https://primereact.org/calendar/)                                      | [✅](https://primereact.org/calendar/)                                        | [✅](https://primereact.org/toast/)                                           | [✅](https://primereact.org/chart/)                   | ❌                                      | [✅](https://primereact.org/fileupload/)                             | [✅](https://primereact.org/editor/)                             |
| Ark UI            | ❌                                                                             | [🟠](https://ark-ui.com/docs/components/date-picker)                        | [✅](https://ark-ui.com/docs/components/date-picker)                          | [✅](https://ark-ui.com/docs/components/toast)                                | ❌                                                    | ❌                                      | [✅](https://ark-ui.com/docs/components/file-upload)                 | ❌                                                               |
| MDB               | [💵](https://mdbootstrap.com/docs/react/data/datatables/)                      | [💵](https://mdbootstrap.com/docs/react/forms/datepicker/)                  | [💵](https://mdbootstrap.com/docs/react/forms/datepicker/)                    | [💵](https://mdbootstrap.com/docs/react/components/toasts/)                   | [💵](https://mdbootstrap.com/docs/react/data/charts/) | ❌                                      | [💵](https://mdbootstrap.com/docs/react/forms/file/)                 | [💵](https://mdbootstrap.com/docs/react/plugins/wysiwyg-editor/) |
| AdminKit          | [🟠](https://adminkit.io/docs/components/tables/)                              | ❌                                                                          | ❌                                                                            | [💵](https://adminkit.io/docs/components/toasts/)                             | [✅💵](https://adminkit.io/docs/charts/bar-chart/)    | ❌                                      | [🟠](https://adminkit.io/docs/forms/file-upload/)                    | ❌                                                               |
| Park UI           | [🟠](https://park-ui.com/docs/panda/components/table)                          | [🟠](https://park-ui.com/docs/panda/components/date-picker)                 | [✅](https://park-ui.com/docs/panda/components/date-picker)                   | [✅](https://park-ui.com/docs/panda/components/toast)                         | ❌                                                    | ❌                                      | [✅](https://park-ui.com/docs/panda/components/file-upload)          | ❌                                                               |
| Shards            | ❌                                                                             | ❌                                                                          | ❌                                                                            | ❌                                                                            | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| Foundation        | ❌                                                                             | ❌                                                                          | ❌                                                                            | ❌                                                                            | ❌                                                    | ❌                                      | ❌                                                                   | ❌                                                               |
| PlainAdmin        | [💵](https://demo.plainadmin.com/datatables)                                   | [💵](https://demo.plainadmin.com/calendar)                                  | ❌                                                                            | ❌                                                                            | [💵](https://demo.plainadmin.com/chart-js)            | ❌                                      | ❌                                                                   | [💵](https://demo.plainadmin.com/form-edit)                      |
| Retool            | [💵](https://retool.com/components/table)                                      | [💵](https://retool.com/components/calendar-input)                          | [💵](https://retool.com/components/date)                                      | [💵](https://retool.com/components/alert)                                     | [💵](https://retool.com/components/chart)             | [💵](https://retool.com/components/pdf) | [💵](https://retool.com/components/file-dropzone)                    | [💵](https://retool.com/components/rich-text-editor)             |

Legend:

- ✅ : OK
- ❌ : KO
- 💵 : OK in paid version
- 🟠 : Moderately OK
- ⏳ : Planned in the future

Then let's calculate a score based on the previous table where ✅=1, 🟠=0.5, 💵=0.5.

We'll then identify and focus on the libraries that score above the average for the next steps.:

| Libraries         | Score | Selected |
| ----------------- | ----- | -------- |
| PrimeReact        | 6.5/8 | ✅       |
| Mantine           | 6/8   | ✅       |
| MUI               | 5/8   | ✅       |
| Ant-design        | 5/8   | ✅       |
| Grommet           | 5/8   | ✅       |
| React Aria        | 4.5/8 | ✅       |
| Carbon            | 4/8   | ❌       |
| Park UI           | 4/8   | ❌       |
| Retool            | 4/8   | ❌       |
| shadcn-ui/ui      | 3.5/8 | ❌       |
| Ark UI            | 3.5/8 | ❌       |
| MDB               | 3.5/8 | ❌       |
| Blueprint         | 3/8   | ❌       |
| Fluent UI         | 3/8   | ❌       |
| Evergreen         | 2.5/8 | ❌       |
| adminkit          | 2.5/8 | ❌       |
| Daisy UI          | 2/8   | ❌       |
| PlainAdmin        | 2/8   | ❌       |
| Chakra UI         | 1.5/8 | ❌       |
| React bootstrap   | 1.5/8 | ❌       |
| Semantic UI React | 1.5/8 | ❌       |
| Radix             | 1/8   | ❌       |
| reactstrap        | 1/8   | ❌       |
| Next UI           | 1/8   | ❌       |
| ThemeUI           | 0.5/8 | ❌       |
| Headless UI       | 0/8   | ❌       |
| Rebass            | 0/8   | ❌       |
| Shards            | 0/8   | ❌       |
| Foundation        | 0/8   | ❌       |

## Bundle size

The bundle size comparison is down to the final six libraries.

Let's review the component table for these remaining libraries:

| Libraries  | Table | Cal. | DateP. | Toast | Chart | Doc preview | Upload | RTE | Score |
| ---------- | ----- | ---- | ------ | ----- | ----- | ----------- | ------ | --- | ----- |
| MUI        | ✅💵  | 🟠   | ✅     | ✅    | ✅⏳  | ❌          | 🟠     | ❌  | 5/8   |
| Ant-design | ✅    | 🟠   | ✅     | ✅    | 🟠    | ❌          | ✅     | ❌  | 5/8   |
| Mantine    | ✅    | 🟠   | ✅     | ✅    | 🟠    | ❌          | ✅     | ✅  | 6/8   |
| React Aria | ✅    | 🟠   | ✅     | ✅    | ❌    | ❌          | ✅     | ❌  | 4.5/8 |
| Grommet    | ✅    | 🟠   | ✅     | 🟠    | ✅    | ❌          | ✅     | ❌  | 5/8   |
| PrimeReact | ✅    | 🟠   | ✅     | ✅    | ✅    | ❌          | ✅     | ✅  | 6.5/8 |

It's notable that each of the libraries features a table, a datepicker, and a toast component.

Now, let's assess the bundle size for these components.

The corresponding code for the comparison is available [here](https://github.com/Smile-SA/react-ui-libraries-comparison).

And here are the results:

| Libraries  | Table only         | Datepicker only    | Toast only         | All 3 components   |
| ---------- | ------------------ | ------------------ | ------------------ | ------------------ |
| MUI        | 665k JS            | 468k JS            | 235k JS            | 826k JS            |
| Ant-design | 751k JS            | 479k JS            | 288k JS            | 877k JS            |
| Mantine    | 204k JS + 189k CSS | 296k JS + 199k CSS | 194k JS + 190k CSS | 334k JS + 199k CSS |
| React Aria | 299k JS            | 343k JS            | 194k JS            | 462k JS            |
| Grommet    | 373k JS            | 339k JS            | 331k JS            | 473k JS            |
| PrimeReact | 636k JS + 159k CSS | 334k JS + 159k CSS | 312k JS + 159k CSS | 767k JS + 159k CSS |

## Performance evaluation

To gauge performance, we've measured the number of times the app (utilizing the three components defined in the previous step) can render within one second.

The technical implementation is outlined as follows:

1. I introduced a counter within a button in the `App` component, which encompasses all three components.
2. Upon clicking the button, I record the current time and increment the counter state, initiating a new render of the `App` component.
3. Upon completion of the render, a `useEffect` is triggered, incrementing the counter once more and initiating another render.
4. After one second, the useEffect ceases to increment the counter, allowing us to retrieve the counter value, indicating the number of renders conducted.

The presented figures represent an average based on 10 calculations.

Here are the results, where a higher number indicates better performance:

| Libraries  | Number of render per second |
| ---------- | --------------------------- |
| MUI        | ~1210                       |
| Ant-design | ~770                        |
| Mantine    | ~1650                       |
| React Aria | ~350                        |
| Grommet    | ~820                        |
| PrimeReact | ~270                        |

## License

Finally here is the license information for our selected libraries:

- MUI: MIT
- Ant-design: MIT
- Mantine: MIT
- React Aria: Apache-2.0 license
- Grommet: Apache-2.0 license
- PrimeReact: MIT

## Conclusion

In conclusion, considering its extensive array of over a hundred components, a commendable score of 6/8, a compact JS bundle size and great performances, **Mantine** emerges as the optimal solution for our specific case.

Moreover, I believe **Mantine** stands out as an excellent choice for any project seeking a dependable UI library, because it also:

- boasts excellent documentation.
- enables customization of every component, providing flexibility when needed.
