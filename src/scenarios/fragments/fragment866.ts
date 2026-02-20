import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken864 } from "./fragment864";
import type { FragmentToken865 } from "./fragment865";

export const FRAGMENT_866 = gql(`
  fragment Fragment866 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult866 = ResultOf<typeof FRAGMENT_866>;
type FragmentSelf866 = NonNullable<FragmentResult866>;

export type FragmentToken866 =
  | FragmentSelf866["__typename"]
  | FragmentSelf866["typenameHint"] | FragmentToken864 | FragmentToken865;
