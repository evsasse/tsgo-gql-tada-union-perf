import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2208 } from "./fragment2208";
import type { FragmentToken2209 } from "./fragment2209";

export const FRAGMENT_2210 = gql(`
  fragment Fragment2210 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult2210 = ResultOf<typeof FRAGMENT_2210>;
type FragmentSelf2210 = NonNullable<FragmentResult2210>;

export type FragmentToken2210 =
  | FragmentSelf2210["__typename"]
  | FragmentSelf2210["typenameHint"] | FragmentToken2208 | FragmentToken2209;
