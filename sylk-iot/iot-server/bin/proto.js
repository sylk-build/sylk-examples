const path = require("path");
const { execSync } = require("child_process");
const rimraf = require("rimraf");

const PROTO_DIR = path.join(__dirname, "../protos");
const MODEL_DIR = path.join(__dirname, "../services/protos");
const PROTOC_PATH = path.join(__dirname, "../node_modules/grpc-tools/bin/protoc");
const PLUGIN_PATH = path.join(__dirname, "../node_modules/.bin/protoc-gen-ts_proto");

const pkgJson = require("../sylk.json");
let protos = [];

function getUniqueStrings(arr) {
  const uniqueSet = new Set(arr);
  return Array.from(uniqueSet).filter(u => u !== undefined);
}

for (const pkg in pkgJson.packages) {
  if (Object.hasOwnProperty.call(pkgJson.packages, pkg)) {
    let files = [];
    let standaloneFile = false;
    if(pkgJson.packages[pkg].services) {
      pkgJson.packages[pkg]?.services.map(s => s.tag).map(s => files.push(s))
      if(pkgJson.packages[pkg]?.services.map(s => !s.tag).includes(true)) {
        standaloneFile = true;
      }
    }
    if(pkgJson.packages[pkg].messages) {
      pkgJson.packages[pkg]?.messages.map(m => m.tag).map(m => files.push(m))
      if(pkgJson.packages[pkg]?.messages.map(m => !m.tag).includes(true)) {
        standaloneFile = true;
      }
    }
    if(pkgJson.packages[pkg].enums) {
      pkgJson.packages[pkg]?.enums.map(e => e.tag).map(e => files.push(e))
      if(pkgJson.packages[pkg]?.enums.map(e => !e.tag).includes(true)) {
        standaloneFile = true;
      }
    }
    if(files.length>0) {
      getUniqueStrings(files).map(f => protos.push(`${pkg}/${f}.proto`))
      if(standaloneFile) {
        protos.push(`${pkg}/${pkgJson.packages[pkg].name}.proto`)  
      }
    } else {
      protos.push(`${pkg}/${pkgJson.packages[pkg].name}.proto`)
    }
  }
}
rimraf.sync(`${MODEL_DIR}/*.ts`, {
  glob: { ignore: `${MODEL_DIR}/tsconfig.json` },
});

const protoConfig = [
  `--plugin=${PLUGIN_PATH}`,

  // https://github.com/stephenh/ts-proto/blob/main/README.markdown
  "--ts_proto_opt=outputServices=grpc-js,env=node,useOptionals=messages,exportCommonSymbols=false,esModuleInterop=true",

  `--ts_proto_out=${MODEL_DIR}`,
  `--proto_path ${PROTO_DIR} ${protos.join(" ")}`,
];

// https://github.com/stephenh/ts-proto#usage
execSync(`${PROTOC_PATH} ${protoConfig.join(" ")}`);
console.log(`> Proto models created: ${MODEL_DIR}`);