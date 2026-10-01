import type { ImageMetadata } from 'astro';
import grid from './screens/iphone/01-poster-grid-view.jpeg';
import gridDark from './screens/iphone/dark/01-poster-grid-view.jpeg';
import gallery from './screens/iphone/02-featured-library-card.jpeg';
import galleryDark from './screens/iphone/dark/02-featured-library-card.jpeg';
import list from './screens/iphone/03-library-list-view.jpeg';
import listDark from './screens/iphone/dark/03-library-list-view.jpeg';
import detail from './screens/iphone/04-anime-detail-overview.jpeg';
import detailDark from './screens/iphone/dark/04-anime-detail-overview.jpeg';
import manage from './screens/iphone/05-watch-management-sheet.jpeg';
import manageDark from './screens/iphone/dark/05-watch-management-sheet.jpeg';
import stats from './screens/iphone/06-library-stats-overview.jpeg';
import statsDark from './screens/iphone/dark/06-library-stats-overview.jpeg';
import ipadGrid from './screens/ipad/01-grid-view-inspector.jpeg';
import ipadGridDark from './screens/ipad/dark/01-grid-view-inspector.jpeg';
import ipadStats from './screens/ipad/04-library-stats-and-settings.jpeg';
import ipadStatsDark from './screens/ipad/dark/04-library-stats-and-settings.jpeg';

/** A screenshot and its dark-mode twin, ready to spread onto `<Phone>` or `<Tablet>`. */
export interface Screen {
  src: ImageMetadata;
  dark: ImageMetadata;
}

export const screens = {
  grid: { src: grid, dark: gridDark },
  gallery: { src: gallery, dark: galleryDark },
  list: { src: list, dark: listDark },
  detail: { src: detail, dark: detailDark },
  manage: { src: manage, dark: manageDark },
  stats: { src: stats, dark: statsDark },
  ipadGrid: { src: ipadGrid, dark: ipadGridDark },
  ipadStats: { src: ipadStats, dark: ipadStatsDark },
} satisfies Record<string, Screen>;
