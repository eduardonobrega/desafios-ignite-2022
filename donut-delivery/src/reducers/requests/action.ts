import { RequestType } from './reducer'

export enum ActionTypes {
  ADD_REQUEST = 'ADD_REQUEST',
  UPDATE_REQUEST = 'UPDATE_REQUEST',
  REMOVE_REQUEST = 'REMOVE_REQUEST',
  FINALIZE_REQUEST = 'FINALIZE_REQUEST',
}

interface AddRequestActionProps {
  type: ActionTypes.ADD_REQUEST
  payload: { newRequest: RequestType }
}
interface UpdateRequestActionProps {
  type: ActionTypes.UPDATE_REQUEST
  payload: { updatedRequest: RequestType }
}
interface RemoveRequestActionProps {
  type: ActionTypes.REMOVE_REQUEST
  payload: { requestId: string }
}
interface FinalizeRequestActionProps {
  type: ActionTypes.FINALIZE_REQUEST
}

export type ActionsProp =
  | AddRequestActionProps
  | UpdateRequestActionProps
  | RemoveRequestActionProps
  | FinalizeRequestActionProps

export function addRequestAction(
  newRequest: RequestType,
): AddRequestActionProps {
  return {
    type: ActionTypes.ADD_REQUEST,
    payload: {
      newRequest,
    },
  }
}

export function updateRequestAction(
  updatedRequest: RequestType,
): UpdateRequestActionProps {
  return {
    type: ActionTypes.UPDATE_REQUEST,
    payload: {
      updatedRequest,
    },
  }
}

export function removeRequestAction(
  requestId: string,
): RemoveRequestActionProps {
  return {
    type: ActionTypes.REMOVE_REQUEST,
    payload: {
      requestId,
    },
  }
}
export function finalizeRequestAction(): FinalizeRequestActionProps {
  return {
    type: ActionTypes.FINALIZE_REQUEST,
  }
}
