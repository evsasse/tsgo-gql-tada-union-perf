import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2467 } from "./fragment2467";
import type { FragmentToken2468 } from "./fragment2468";

export const FRAGMENT_2469 = gql(`
  fragment Fragment2469 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult2469 = ResultOf<typeof FRAGMENT_2469>;
type FragmentSelf2469 = NonNullable<FragmentResult2469>;

export type FragmentToken2469 =
  | FragmentSelf2469["__typename"]
  | FragmentSelf2469["typenameHint"] | FragmentToken2467 | FragmentToken2468;
