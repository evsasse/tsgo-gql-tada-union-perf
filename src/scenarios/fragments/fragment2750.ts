import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2748 } from "./fragment2748";
import type { FragmentToken2749 } from "./fragment2749";

export const FRAGMENT_2750 = gql(`
  fragment Fragment2750 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult2750 = ResultOf<typeof FRAGMENT_2750>;
type FragmentSelf2750 = NonNullable<FragmentResult2750>;

export type FragmentToken2750 =
  | FragmentSelf2750["__typename"]
  | FragmentSelf2750["typenameHint"] | FragmentToken2748 | FragmentToken2749;
