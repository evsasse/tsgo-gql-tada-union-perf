import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2727 } from "./fragment2727";
import type { FragmentToken2728 } from "./fragment2728";

export const FRAGMENT_2729 = gql(`
  fragment Fragment2729 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult2729 = ResultOf<typeof FRAGMENT_2729>;
type FragmentSelf2729 = NonNullable<FragmentResult2729>;

export type FragmentToken2729 =
  | FragmentSelf2729["__typename"]
  | FragmentSelf2729["typenameHint"] | FragmentToken2727 | FragmentToken2728;
