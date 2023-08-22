import { DonutType } from '../../pages/Home/components/DonutCard'
import { ActionTypes, ActionsProp } from './action'
import { produce } from 'immer'

export interface RequestType {
  id: string
  donut: DonutType
  quantity: number
  value: number
}

export function requestsReducer(state: RequestType[], action: ActionsProp) {
  switch (action.type) {
    case ActionTypes.ADD_REQUEST: {
      const donutInCart =
        state.findIndex(
          (request) => request.donut.id === action.payload.newRequest.donut.id,
        ) !== -1

      if (donutInCart) {
        return state
      }

      return produce(state, (draft) => {
        draft.push(action.payload.newRequest)
      })
    }

    case ActionTypes.UPDATE_REQUEST: {
      const index = state.findIndex(
        (request) => request.id === action.payload.updatedRequest.id,
      )
      if (index === -1) {
        return state
      }

      return produce(state, (draft) => {
        draft[index] = action.payload.updatedRequest
      })
    }

    case ActionTypes.REMOVE_REQUEST: {
      const index = state.findIndex(
        (request) => request.id === action.payload.requestId,
      )
      if (index === -1) {
        return state
      }
      return produce(state, (draft) => {
        draft.splice(index, 1)
      })
    }
    case ActionTypes.FINALIZE_REQUEST:
      return []
    default:
      return state
  }
}
