import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2317 } from "./fragment2317";
import type { FragmentToken2318 } from "./fragment2318";

export const FRAGMENT_2319 = gql(`
  fragment Fragment2319 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult2319 = ResultOf<typeof FRAGMENT_2319>;
type FragmentSelf2319 = NonNullable<FragmentResult2319>;

export type FragmentToken2319 =
  | FragmentSelf2319["__typename"]
  | FragmentSelf2319["typenameHint"] | FragmentToken2317 | FragmentToken2318;
