import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2595 } from "./fragment2595";
import type { FragmentToken2596 } from "./fragment2596";

export const FRAGMENT_2597 = gql(`
  fragment Fragment2597 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult2597 = ResultOf<typeof FRAGMENT_2597>;
type FragmentSelf2597 = NonNullable<FragmentResult2597>;

export type FragmentToken2597 =
  | FragmentSelf2597["__typename"]
  | FragmentSelf2597["typenameHint"] | FragmentToken2595 | FragmentToken2596;
