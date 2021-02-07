import { gql } from '@apollo/client';

export const GET_LAUNCH_IMAGES = gql`
 query getLaunch ($id: ID!) {
  launch(id: $id) {
    id
    missionName: mission_name
    rocket {
      rocketName: rocket_name
    }
    launchSuccess: launch_success
    launchDate: launch_date_local
    links {
      launchImages: flickr_images
    }
  }
}
`;
