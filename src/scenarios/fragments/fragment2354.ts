import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2352 } from "./fragment2352";
import type { FragmentToken2353 } from "./fragment2353";

export const FRAGMENT_2354 = gql(`
  fragment Fragment2354 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult2354 = ResultOf<typeof FRAGMENT_2354>;
type FragmentSelf2354 = NonNullable<FragmentResult2354>;

export type FragmentToken2354 =
  | FragmentSelf2354["__typename"]
  | FragmentSelf2354["typenameHint"] | FragmentToken2352 | FragmentToken2353;
