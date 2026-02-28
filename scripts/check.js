import fs from 'fs';
import { execSync } from 'child_process';

const GITHUB_REPO = 'webkubor/omni-publisher-skill';
const PACKAGE_PATH = './package.json';

async function checkUpdate() {
  try {
    const localPackage = JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf-8'));
    const localVersion = localPackage.version;

    console.log(`🔍 [哨兵] 正在检查 ${localPackage.name} 远程版本...`);
    
    // 获取 GitHub 上的 package.json (通过 curl)
    const remotePackageRaw = execSync(`curl -s https://raw.githubusercontent.com/${GITHUB_REPO}/master/package.json`).toString();
    const remotePackage = JSON.parse(remotePackageRaw);
    const remoteVersion = remotePackage.version;

    if (localVersion !== remoteVersion) {
      console.log(`
🚨 [发现更新!]`);
      console.log(`本地版本: v${localVersion}`);
      console.log(`远程版本: v${remoteVersion}`);
      console.log(`
👉 老爹，建议执行: npm run update`);
    } else {
      console.log(`✅ [最新] ${localPackage.name} 已经是最新版本 (v${localVersion})。`);
    }
  } catch (err) {
    console.error('❌ [哨兵] 检查失败，请确认网络或 GitHub 仓库地址。');
  }
}

checkUpdate();
