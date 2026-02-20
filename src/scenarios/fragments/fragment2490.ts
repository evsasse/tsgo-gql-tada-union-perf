import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2488 } from "./fragment2488";
import type { FragmentToken2489 } from "./fragment2489";

export const FRAGMENT_2490 = gql(`
  fragment Fragment2490 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult2490 = ResultOf<typeof FRAGMENT_2490>;
type FragmentSelf2490 = NonNullable<FragmentResult2490>;

export type FragmentToken2490 =
  | FragmentSelf2490["__typename"]
  | FragmentSelf2490["typenameHint"] | FragmentToken2488 | FragmentToken2489;
