import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2243 } from "./fragment2243";
import type { FragmentToken2244 } from "./fragment2244";

export const FRAGMENT_2245 = gql(`
  fragment Fragment2245 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult2245 = ResultOf<typeof FRAGMENT_2245>;
type FragmentSelf2245 = NonNullable<FragmentResult2245>;

export type FragmentToken2245 =
  | FragmentSelf2245["__typename"]
  | FragmentSelf2245["typenameHint"] | FragmentToken2243 | FragmentToken2244;
