import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2207 } from "./fragment2207";
import type { FragmentToken2208 } from "./fragment2208";

export const FRAGMENT_2209 = gql(`
  fragment Fragment2209 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult2209 = ResultOf<typeof FRAGMENT_2209>;
type FragmentSelf2209 = NonNullable<FragmentResult2209>;

export type FragmentToken2209 =
  | FragmentSelf2209["__typename"]
  | FragmentSelf2209["typenameHint"] | FragmentToken2207 | FragmentToken2208;
