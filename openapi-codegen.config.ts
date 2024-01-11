import { defineConfig } from "@openapi-codegen/cli";
import { generateReactQueryComponents, generateSchemaTypes } from "@openapi-codegen/typescript";

export default defineConfig({
  dubcraft: {
    from: {
      source: "url",
      url: "https://dev-dubcraft.speax.ai/apidocs/openapi.yaml",
    },
    outputDir: "tmp/services",
    to: async (context) => {
      const filenamePrefix = "services";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
