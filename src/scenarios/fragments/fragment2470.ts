import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2468 } from "./fragment2468";
import type { FragmentToken2469 } from "./fragment2469";

export const FRAGMENT_2470 = gql(`
  fragment Fragment2470 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult2470 = ResultOf<typeof FRAGMENT_2470>;
type FragmentSelf2470 = NonNullable<FragmentResult2470>;

export type FragmentToken2470 =
  | FragmentSelf2470["__typename"]
  | FragmentSelf2470["typenameHint"] | FragmentToken2468 | FragmentToken2469;
