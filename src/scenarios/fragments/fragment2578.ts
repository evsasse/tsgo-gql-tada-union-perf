import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2576 } from "./fragment2576";
import type { FragmentToken2577 } from "./fragment2577";

export const FRAGMENT_2578 = gql(`
  fragment Fragment2578 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult2578 = ResultOf<typeof FRAGMENT_2578>;
type FragmentSelf2578 = NonNullable<FragmentResult2578>;

export type FragmentToken2578 =
  | FragmentSelf2578["__typename"]
  | FragmentSelf2578["typenameHint"] | FragmentToken2576 | FragmentToken2577;
