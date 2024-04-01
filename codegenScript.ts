const { execSync } = require("child_process");
const dotenv = require("dotenv");
const envPath = require("path");

dotenv.config({ path: envPath.resolve(__dirname, ".env") });

const endpoint =
  process.env.NEXT_PUBLIC_DUBCRAFT_ENDPOINT || "https://dev-dubcraft.speax.ai/";

const openapiCommand = `openapi-rq -i ${endpoint}apidocs/openapi.yaml -o services -c axios --useUnionTypes --request request.ts --exportSchemas generatedSchema`;

try {
  execSync(openapiCommand, { stdio: "inherit" });
} catch (error) {
  console.error("Error executing code generation script:", error);
  process.exit(1);
}
