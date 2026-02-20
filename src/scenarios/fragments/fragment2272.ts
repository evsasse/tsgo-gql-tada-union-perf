import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2270 } from "./fragment2270";
import type { FragmentToken2271 } from "./fragment2271";

export const FRAGMENT_2272 = gql(`
  fragment Fragment2272 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult2272 = ResultOf<typeof FRAGMENT_2272>;
type FragmentSelf2272 = NonNullable<FragmentResult2272>;

export type FragmentToken2272 =
  | FragmentSelf2272["__typename"]
  | FragmentSelf2272["typenameHint"] | FragmentToken2270 | FragmentToken2271;
