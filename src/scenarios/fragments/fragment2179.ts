import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2177 } from "./fragment2177";
import type { FragmentToken2178 } from "./fragment2178";

export const FRAGMENT_2179 = gql(`
  fragment Fragment2179 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult2179 = ResultOf<typeof FRAGMENT_2179>;
type FragmentSelf2179 = NonNullable<FragmentResult2179>;

export type FragmentToken2179 =
  | FragmentSelf2179["__typename"]
  | FragmentSelf2179["typenameHint"] | FragmentToken2177 | FragmentToken2178;
