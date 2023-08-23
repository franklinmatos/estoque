
import { format } from 'date-fns';
export class DataUtils {

  /**
     *
     * @param dataOriginal Recebe um date e retorna uma string no formato yyyy/MM/dd
     * @returns
     */
  public static formatarDatetoUsFormat(dataOriginal: Date){
    const dataObj = new Date(dataOriginal);
    return format(dataObj, 'yyyy-MM-dd');
  }

}
