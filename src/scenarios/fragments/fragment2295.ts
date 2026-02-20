import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2293 } from "./fragment2293";
import type { FragmentToken2294 } from "./fragment2294";

export const FRAGMENT_2295 = gql(`
  fragment Fragment2295 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult2295 = ResultOf<typeof FRAGMENT_2295>;
type FragmentSelf2295 = NonNullable<FragmentResult2295>;

export type FragmentToken2295 =
  | FragmentSelf2295["__typename"]
  | FragmentSelf2295["typenameHint"] | FragmentToken2293 | FragmentToken2294;
