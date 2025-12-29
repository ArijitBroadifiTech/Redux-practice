export interface FeatureFlag {
  id: string;
  key: string;
  enabled: boolean;
  lastUpdated: string;
}

export interface FlagsState {
  entities: Record<string, FeatureFlag>;
  loading: boolean;
  error: string | null;
}
