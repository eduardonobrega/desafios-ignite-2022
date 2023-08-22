import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'
import { version } from '../../package.json'
import { RequestType, requestsReducer } from '../reducers/requests/reducer'
import {
  addRequestAction,
  finalizeRequestAction,
  removeRequestAction,
  updateRequestAction,
} from '../reducers/requests/action'

interface RequestsProviderProps {
  children: ReactNode
}

interface RequestsContextType {
  requests: RequestType[]
  addRequest: (newRequest: RequestType) => void
  updateRequest: (updatedRequest: RequestType) => void
  removeRequest: (requestId: string) => void
  finalizeRequest: () => void
}

const RequestsContext = createContext({} as RequestsContextType)

function RequestsProvider({ children }: RequestsProviderProps) {
  const [requests, dispatch] = useReducer(
    requestsReducer,
    [] as RequestType[],
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        `@donuts-delivery:requests-${version}`,
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  function addRequest(newRequest: RequestType) {
    dispatch(addRequestAction(newRequest))
  }

  function updateRequest(updatedRequest: RequestType) {
    dispatch(updateRequestAction(updatedRequest))
  }

  function removeRequest(requestId: string) {
    dispatch(removeRequestAction(requestId))
  }

  function finalizeRequest() {
    dispatch(finalizeRequestAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(requests)
    localStorage.setItem(`@donuts-delivery:requests-${version}`, stateJSON)
  }, [requests])

  return (
    <RequestsContext.Provider
      value={{
        requests,
        addRequest,
        updateRequest,
        removeRequest,
        finalizeRequest,
      }}
    >
      {children}
    </RequestsContext.Provider>
  )
}

function useRequests() {
  const context = useContext(RequestsContext)
  return context
}

export { useRequests, RequestsProvider }
