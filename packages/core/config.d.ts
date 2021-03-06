/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Config {
  /**
   * Generic frontend configuration.
   */
  app: {
    /**
     * The public absolute root URL that the frontend.
     * @visibility frontend
     */
    baseUrl: string;

    /**
     * The title of the app.
     * @visibility frontend
     */
    title?: string;
  };

  /**
   * Generic backend configuration.
   */
  backend: {
    /**
     * The public absolute root URL that the backend is reachable at.
     * @visibility frontend
     */
    baseUrl: string;
  };

  /**
   * Configuration that provides information about the organization that the app is for.
   */
  organization?: {
    /**
     * The name of the organization that the app belongs to.
     * @visibility frontend
     */
    name?: string;
  };

  homepage?: {
    clocks?: {
      /** @visibility frontend */
      label: string;
      /** @visibility frontend */
      timezone: string;
    }[];
  };
}
