import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2747 } from "./fragment2747";
import type { FragmentToken2748 } from "./fragment2748";

export const FRAGMENT_2749 = gql(`
  fragment Fragment2749 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult2749 = ResultOf<typeof FRAGMENT_2749>;
type FragmentSelf2749 = NonNullable<FragmentResult2749>;

export type FragmentToken2749 =
  | FragmentSelf2749["__typename"]
  | FragmentSelf2749["typenameHint"] | FragmentToken2747 | FragmentToken2748;
