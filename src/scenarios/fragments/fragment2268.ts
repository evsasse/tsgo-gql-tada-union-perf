import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2266 } from "./fragment2266";
import type { FragmentToken2267 } from "./fragment2267";

export const FRAGMENT_2268 = gql(`
  fragment Fragment2268 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult2268 = ResultOf<typeof FRAGMENT_2268>;
type FragmentSelf2268 = NonNullable<FragmentResult2268>;

export type FragmentToken2268 =
  | FragmentSelf2268["__typename"]
  | FragmentSelf2268["typenameHint"] | FragmentToken2266 | FragmentToken2267;
