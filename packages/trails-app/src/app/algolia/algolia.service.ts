import {
  Inject,
  Injectable,
  InjectionToken
} from '@angular/core';

import * as algolia from 'algoliasearch';

export class AlgoliaConfig {
  appId: string;
  searchApiKey: string;
}

export const ALGOLIA_CONFIG = new InjectionToken<AlgoliaConfig>('algolia_config');

@Injectable()
export class AlgoliaService {

  client: algolia.AlgoliaClient;

  constructor(
    @Inject(ALGOLIA_CONFIG) config: AlgoliaConfig
  ) {
    this.client = algolia(config.appId, config.searchApiKey);
  }

}
