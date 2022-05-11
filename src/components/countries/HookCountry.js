import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const ALL_COUNTRIES = gql`
  query {
    countries {
      name
      code
      native
      capital
      continent {
        name
      }
      languages {
        code
        name
        native
      }
      emoji
      emojiU
      states {
        name
      }
    }
  }
`;

export const useCountries = () => {
  const result = useQuery(ALL_COUNTRIES);
  return result;
};
