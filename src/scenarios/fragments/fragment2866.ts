import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2864 } from "./fragment2864";
import type { FragmentToken2865 } from "./fragment2865";

export const FRAGMENT_2866 = gql(`
  fragment Fragment2866 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult2866 = ResultOf<typeof FRAGMENT_2866>;
type FragmentSelf2866 = NonNullable<FragmentResult2866>;

export type FragmentToken2866 =
  | FragmentSelf2866["__typename"]
  | FragmentSelf2866["typenameHint"] | FragmentToken2864 | FragmentToken2865;
