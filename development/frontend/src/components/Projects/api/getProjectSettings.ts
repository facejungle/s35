import { fetcher } from "@/shared";
import { ProjectSettingsData } from "../model/type";

export async function getProjectSettings(): Promise<ProjectSettingsData> {
   const projectSettings = await fetcher({ host: 'API', path: 'PROJECT_SETTINGS' });
   if (!projectSettings) return {
      lengthText: 'Length',
      widthText: 'Width',
      heightText: 'Height',
      gableText: 'Gable',
      totalAreaText: 'Total area',
   }
   return {
      lengthText: projectSettings.lengthText || 'Length',
      widthText: projectSettings.widthText || 'Width',
      heightText: projectSettings.heightText || 'Height',
      gableText: projectSettings.gableText || 'Gable',
      totalAreaText: projectSettings.totalAreaText || 'Total area',
   };
}

export default getProjectSettings