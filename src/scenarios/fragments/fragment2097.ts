import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2095 } from "./fragment2095";
import type { FragmentToken2096 } from "./fragment2096";

export const FRAGMENT_2097 = gql(`
  fragment Fragment2097 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult2097 = ResultOf<typeof FRAGMENT_2097>;
type FragmentSelf2097 = NonNullable<FragmentResult2097>;

export type FragmentToken2097 =
  | FragmentSelf2097["__typename"]
  | FragmentSelf2097["typenameHint"] | FragmentToken2095 | FragmentToken2096;
