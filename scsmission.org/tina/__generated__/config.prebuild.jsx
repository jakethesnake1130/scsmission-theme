// tina/config.ts
import { defineConfig } from "tinacms";

// tina/templates.ts
function authorFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "image",
      name: "image",
      label: "image"
    },
    {
      type: "string",
      name: "email",
      label: "email"
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
          label: "icon"
        },
        {
          type: "string",
          name: "link",
          label: "link"
        }
      ]
    }
  ];
}
function eventFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "datetime",
      name: "date",
      label: "date"
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image"
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      name: "image",
      label: "image"
    },
    {
      type: "string",
      name: "location",
      label: "location"
    },
    {
      type: "string",
      name: "fee",
      label: "fee"
    },
    {
      type: "string",
      name: "apply_url",
      label: "apply_url"
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
          label: "name"
        },
        {
          type: "image",
          name: "image",
          label: "image"
        },
        {
          type: "string",
          name: "designation",
          label: "designation"
        }
      ]
    },
    {
      type: "string",
      name: "type",
      label: "type"
    }
  ];
}
function kirtanFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "datetime",
      name: "date",
      label: "date"
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image"
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      name: "image",
      label: "image"
    }
  ];
}
function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "datetime",
      name: "date",
      label: "date"
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image"
    },
    {
      type: "image",
      name: "image",
      label: "image"
    },
    {
      type: "string",
      name: "author",
      label: "author"
    },
    {
      type: "string",
      name: "description",
      label: "description"
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true
    },
    {
      type: "string",
      name: "type",
      label: "type"
    }
  ];
}
function teacherFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "image",
      name: "bg_image",
      label: "bg image"
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      name: "image",
      label: "image"
    },
    {
      type: "string",
      name: "kirtan",
      label: "kirtan"
    },
    {
      type: "string",
      name: "bio",
      label: "bio",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "interest",
      label: "interest",
      list: true
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
          label: "name"
        },
        {
          type: "string",
          name: "icon",
          label: "icon"
        },
        {
          type: "string",
          name: "link",
          label: "link"
        }
      ]
    },
    {
      type: "string",
      name: "type",
      label: "type"
    }
  ];
}

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Post",
        name: "post",
        path: "content/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...postFields()
        ]
      },
      {
        format: "md",
        label: "Author",
        name: "author",
        path: "content/author",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...authorFields()
        ]
      },
      {
        format: "md",
        label: "Kirtan",
        name: "kirtan",
        path: "content/kirtan",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...kirtanFields()
        ]
      },
      {
        format: "md",
        label: "Teacher",
        name: "teacher",
        path: "content/teacher",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...teacherFields()
        ]
      },
      {
        format: "md",
        label: "Event",
        name: "event",
        path: "content/event",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...eventFields()
        ]
      },
      {
        format: "md",
        label: "About",
        name: "about",
        path: "content/about",
        frontmatterFormat: "yaml",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ],
        ui: {
          allowedActions: {
            create: false
          }
        }
      },
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: "content/contact",
        frontmatterFormat: "yaml",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ],
        ui: {
          allowedActions: {
            create: false
          }
        }
      },
      {
        format: "toml",
        label: "Configuration",
        name: "configuration",
        path: "scsmission.org",
        frontmatterFormat: "yaml",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
