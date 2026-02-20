import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2462 } from "./fragment2462";
import type { FragmentToken2463 } from "./fragment2463";

export const FRAGMENT_2464 = gql(`
  fragment Fragment2464 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult2464 = ResultOf<typeof FRAGMENT_2464>;
type FragmentSelf2464 = NonNullable<FragmentResult2464>;

export type FragmentToken2464 =
  | FragmentSelf2464["__typename"]
  | FragmentSelf2464["typenameHint"] | FragmentToken2462 | FragmentToken2463;
