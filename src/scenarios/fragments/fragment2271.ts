import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2269 } from "./fragment2269";
import type { FragmentToken2270 } from "./fragment2270";

export const FRAGMENT_2271 = gql(`
  fragment Fragment2271 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult2271 = ResultOf<typeof FRAGMENT_2271>;
type FragmentSelf2271 = NonNullable<FragmentResult2271>;

export type FragmentToken2271 =
  | FragmentSelf2271["__typename"]
  | FragmentSelf2271["typenameHint"] | FragmentToken2269 | FragmentToken2270;
