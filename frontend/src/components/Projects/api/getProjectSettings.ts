import { fetcher } from "@/shared";
import { ProjectSettingsData } from "../model/type";

export async function getProjectSettings(): Promise<ProjectSettingsData | undefined> {
   const projectSettings = await fetcher({ host: 'api', path: 'projectsSettings' });
   if (!projectSettings) return undefined;
   return projectSettings;
}

export default getProjectSettings