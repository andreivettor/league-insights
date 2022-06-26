import type { Locales, Region } from './index';

/**
 * Client's data dragon cache configuration.
 */
export interface CacheConfig {
  /**
   * Whether to store the data fetched from data dragon and other CDNs locally (defaults to `true`)
   */
  enable?: boolean;
  /**
   * The directory where all the data is stored with respect to your project root. (defaults to `data`)
   */
  localRoot?: string;
}

/**
 * Client's pre-fetching data from data dragon configuration
 */
export interface PreFetchConfig {
  /**
   * Whether to fetch the champions' data during initialization.
   */
  champions?: boolean;
  /**
   * Whether to fetch the items' data during initialization.
   */
  items?: boolean;
  /**
   * Whether to fetch the runes' data during initialization.
   */
  runes?: boolean;
  /**
   * Whether to fetch the summoner spells' data during initialization.
   */
  summonerSpells?: boolean;
}

/**
 * The basic configuration for the shieldbow Client.
 */
export interface ClientConfig {
  /**
   * The local caching settings.
   */
  cache?: CacheConfig;
  /**
   * The data to fetch beforehand when initializing the client.
   * This can delay the initialization but makes the rest of the processes much faster.
   */
  fetch?: PreFetchConfig;
  /**
   * The data dragon CDN version (defaults to latest as per the specified region)
   */
  version?: string;
  /**
   * The locale in which to fetch all the data (defaults to region's default)
   */
  locale?: Locales;
  /**
   * The initial region to fetch all the data from (defaults to `na`)
   */
  region?: Region;
}
