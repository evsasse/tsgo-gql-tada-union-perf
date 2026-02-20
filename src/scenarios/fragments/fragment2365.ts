import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2363 } from "./fragment2363";
import type { FragmentToken2364 } from "./fragment2364";

export const FRAGMENT_2365 = gql(`
  fragment Fragment2365 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult2365 = ResultOf<typeof FRAGMENT_2365>;
type FragmentSelf2365 = NonNullable<FragmentResult2365>;

export type FragmentToken2365 =
  | FragmentSelf2365["__typename"]
  | FragmentSelf2365["typenameHint"] | FragmentToken2363 | FragmentToken2364;
