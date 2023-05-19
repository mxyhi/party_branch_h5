import { defHttp } from '/@/utils/http/axios';
import {
  EventAPIParams,
  EventInfoType,
  EventItem,
  EventListGetResultModel,
} from './model/eventModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  EVENT_ADD = '/event/read/add',
  EVENT_LIST = '/event/read/list',
  EVENT_FIND_ONE = '/event/read/one',
  EVENT_DELETE = '/event/read/del',
}

/**
 * @description: event info
 */
export function postEventInfo(data: EventInfoType, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<EventInfoType>(
    {
      url: Api.EVENT_ADD,
      data,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: 获取活动列表
 */
export const eventListApi = (params: EventAPIParams) =>
  defHttp.get<EventListGetResultModel>({
    url: Api.EVENT_LIST,
    params,
  });

/**
 * @description: 查询活动信息
 */
export const eventFindOneAPI = (eventId: string) =>
  defHttp.get<EventItem>({
    url: Api.EVENT_FIND_ONE,
    params: {
      eventId,
    },
  });

/**
 * @description: 删除活动
 */
export const eventDeleteAPI = (eventId: string) =>
  defHttp.get<EventItem>({
    url: Api.EVENT_DELETE,
    params: {
      eventId,
    },
  });
