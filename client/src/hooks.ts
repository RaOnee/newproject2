
import { useQuery } from 'react-query';
import * as api from './api';

export function useWorldwideData() {
  return useQuery('worldwide', api.fetchWorldwideData);
}

export function useCountryData() {
  return useQuery('countries', api.fetchCountryData);
}

export function useGraphData() {
  return useQuery('graphData', api.fetchGraphData);
}
