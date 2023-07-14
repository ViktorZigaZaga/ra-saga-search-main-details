import {
    SEARCH_SKILLS_FAILURE,
    SEARCH_SKILLS_REQUEST, 
    SEARCH_SKILLS_SUCCESS, 
    CHANGE_SEARCH_FIELD, 
    DOWNLOAD_SERVICES_INIT_STATE, 
    DOWNLOAD_SERVICES_FAILURE, 
    DOWNLOAD_SERVICES_REQUEST, 
    DOWNLOAD_SERVICES_SUCCESS
} from './actionTypes'

export function searchSkillsRequest(search) {
    return {type: SEARCH_SKILLS_REQUEST, payload: {search}};
  }
  
  export function searchSkillsSuccess(items) {
    return {type: SEARCH_SKILLS_SUCCESS, payload: {items}};
  }
  
  export function searchSkillsFailure(error) {
    return {type: SEARCH_SKILLS_FAILURE, payload: {error}};
  }
  
  export function changeSearchField(search) {
    return {type: CHANGE_SEARCH_FIELD, payload: {search}};
  }
  
  
  export function servicesDownloadRequest(value) {
    return {type: DOWNLOAD_SERVICES_REQUEST, payload: {value}};
  }
  
  export function servicesDownloadSuccess(value) {
    return {type: DOWNLOAD_SERVICES_SUCCESS, payload: {value}};
  }
  
  export function servicesDownloadFailure(error) {
    return {type: DOWNLOAD_SERVICES_FAILURE, payload: {error}};
  }
  
  export function servicesInitState() {
    return {type: DOWNLOAD_SERVICES_INIT_STATE, payload: "init-state"};
  }