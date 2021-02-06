import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
 query {
    launchesPast(limit: 10) {
    missionName: mission_name
    launchDate: launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      launchImages: flickr_images
    }
    rocket {
      rocketName: rocket_name
    }
    launchSuccess: launch_success
    id
  }
  }
`;
