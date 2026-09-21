import { BASE_URL } from "@/i18n/config";

/* The machine-readable description of the API.
 *
 * An agent that finds /api/ratio still has to guess its vocabulary. A spec is
 * what turns a URL API into something introspectable: the caller learns the
 * parameter names, the types and the shape of the answer without a human
 * reading documentation and writing a client.
 *
 * Kept in sync by being generated from the same base URL the API serves from.
 */
export const dynamic = "force-static";

const spec = {
  openapi: "3.1.0",
  info: {
    title: "Aspect Ratio Calculator API",
    version: "1.0.0",
    description:
      "Aspect ratio arithmetic and the site's reference data, as JSON. " +
      "No authentication, no rate limit beyond ordinary fair use, no state.",
    license: {
      name: "Free to use with attribution",
      url: `${BASE_URL}/terms`,
    },
    // An agent has already made the request by the time a human would have read
    // a footer. The terms belong where the caller looks before it calls.
    termsOfService: `${BASE_URL}/terms`,
  },
  servers: [{ url: BASE_URL }],
  paths: {
    "/api/ratio": {
      get: {
        summary: "Simplify dimensions to a ratio, or scale a ratio to a dimension",
        description:
          "With width and height, returns the simplified ratio. With a ratio and " +
          "exactly one of width or height, returns the other. With no parameters, " +
          "returns the catalogue of named ratios.",
        operationId: "getRatio",
        parameters: [
          {
            name: "width",
            in: "query",
            required: false,
            schema: { type: "number", exclusiveMinimum: 0 },
            example: 1920,
          },
          {
            name: "height",
            in: "query",
            required: false,
            schema: { type: "number", exclusiveMinimum: 0 },
            example: 1080,
          },
          {
            name: "ratio",
            in: "query",
            required: false,
            description: "A ratio as w:h, for example 16:9. 'x' and '/' are also accepted.",
            schema: { type: "string", pattern: "^\\d+(\\.\\d+)?\\s*[:x/]\\s*\\d+(\\.\\d+)?$" },
            example: "16:9",
          },
        ],
        responses: {
          "200": {
            description: "The computed ratio or dimensions.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/RatioResult" },
              },
            },
          },
          "400": {
            description: "The parameters were missing, unreadable, or over-specified.",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Error" } },
            },
          },
        },
      },
    },
    "/api/content": {
      get: {
        summary: "The JSON representation of a content page",
        description:
          "The same resource any page URL returns when asked for application/json " +
          "via the Accept header.",
        operationId: "getContent",
        parameters: [
          {
            name: "path",
            in: "query",
            required: false,
            description: "A site path, with or without a locale prefix.",
            schema: { type: "string", default: "/" },
            example: "/ratio/16-9",
          },
        ],
        responses: {
          "200": {
            description: "The page's structured content.",
            content: { "application/json": { schema: { type: "object" } } },
          },
          "404": {
            description: "No JSON representation exists for that path.",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Error" } },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Attribution: {
        type: "object",
        description: "Carried on every response so an answer can be traced back.",
        properties: {
          source: { type: "string" },
          canonical: { type: "string", format: "uri" },
          documentation: { type: "string", format: "uri" },
          license: { type: "string" },
        },
        required: ["source", "canonical"],
      },
      Ratio: {
        type: "object",
        properties: {
          label: { type: "string", example: "16:9" },
          width: { type: "number", example: 16 },
          height: { type: "number", example: 9 },
          decimal: { type: "number", example: 1.777778 },
          css: { type: "string", example: "16 / 9" },
          orientation: { type: "string", enum: ["landscape", "portrait", "square"] },
        },
      },
      RatioResult: {
        allOf: [
          { $ref: "#/components/schemas/Attribution" },
          {
            type: "object",
            properties: {
              input: { type: "object" },
              ratio: { $ref: "#/components/schemas/Ratio" },
              result: { type: "object" },
              known: {
                type: ["object", "null"],
                description: "The matching page in this site's catalogue, or null.",
              },
            },
          },
        ],
      },
      Error: {
        type: "object",
        properties: {
          error: { type: "string" },
          hint: { type: "string", description: "What to do instead." },
        },
        required: ["error"],
      },
    },
  },
};

export function GET() {
  return new Response(JSON.stringify(spec, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
