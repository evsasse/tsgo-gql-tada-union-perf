import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2369 } from "./fragment2369";
import type { FragmentToken2370 } from "./fragment2370";

export const FRAGMENT_2371 = gql(`
  fragment Fragment2371 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult2371 = ResultOf<typeof FRAGMENT_2371>;
type FragmentSelf2371 = NonNullable<FragmentResult2371>;

export type FragmentToken2371 =
  | FragmentSelf2371["__typename"]
  | FragmentSelf2371["typenameHint"] | FragmentToken2369 | FragmentToken2370;
