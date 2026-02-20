import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2461 } from "./fragment2461";
import type { FragmentToken2462 } from "./fragment2462";

export const FRAGMENT_2463 = gql(`
  fragment Fragment2463 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult2463 = ResultOf<typeof FRAGMENT_2463>;
type FragmentSelf2463 = NonNullable<FragmentResult2463>;

export type FragmentToken2463 =
  | FragmentSelf2463["__typename"]
  | FragmentSelf2463["typenameHint"] | FragmentToken2461 | FragmentToken2462;
