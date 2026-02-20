import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2279 } from "./fragment2279";
import type { FragmentToken2280 } from "./fragment2280";

export const FRAGMENT_2281 = gql(`
  fragment Fragment2281 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult2281 = ResultOf<typeof FRAGMENT_2281>;
type FragmentSelf2281 = NonNullable<FragmentResult2281>;

export type FragmentToken2281 =
  | FragmentSelf2281["__typename"]
  | FragmentSelf2281["typenameHint"] | FragmentToken2279 | FragmentToken2280;
