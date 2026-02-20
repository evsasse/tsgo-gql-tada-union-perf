import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2931 } from "./fragment2931";
import type { FragmentToken2932 } from "./fragment2932";

export const FRAGMENT_2933 = gql(`
  fragment Fragment2933 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult2933 = ResultOf<typeof FRAGMENT_2933>;
type FragmentSelf2933 = NonNullable<FragmentResult2933>;

export type FragmentToken2933 =
  | FragmentSelf2933["__typename"]
  | FragmentSelf2933["typenameHint"] | FragmentToken2931 | FragmentToken2932;
