import type { TinaField } from "tinacms";
export function authorFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "email",
      label: "email",
    },
    {
      type: "object",
      name: "social",
      label: "social",
      list: true,
      fields: [
        {
          type: "string",
          name: "icon",
          label: "icon",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
  ] as TinaField[];
}
export function eventFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "location",
      label: "location",
    },
    {
      type: "string",
      name: "fee",
      label: "fee",
    },
    {
      type: "string",
      name: "apply_url",
      label: "apply_url",
    },
    {
      type: "object",
      name: "speaker",
      label: "speaker",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "image",
          name: "image",
          label: "image",
        },
        {
          type: "string",
          name: "designation",
          label: "designation",
        },
      ],
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
  ] as TinaField[];
}
export function kirtanFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ] as TinaField[];
}
export function new_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image",
    },
  ] as TinaField[];
}
export function noticeFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "download_link",
      label: "download_link",
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
  ] as TinaField[];
}
export function researchFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
  ] as TinaField[];
}
export function scholarshipFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function teacherFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "kirtan",
      label: "kirtan",
    },
    {
      type: "string",
      name: "bio",
      label: "bio",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "interest",
      label: "interest",
      list: true,
    },
    {
      type: "object",
      name: "contact",
      label: "contact",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "icon",
          label: "icon",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
  ] as TinaField[];
}
