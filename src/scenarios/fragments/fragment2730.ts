import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2728 } from "./fragment2728";
import type { FragmentToken2729 } from "./fragment2729";

export const FRAGMENT_2730 = gql(`
  fragment Fragment2730 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult2730 = ResultOf<typeof FRAGMENT_2730>;
type FragmentSelf2730 = NonNullable<FragmentResult2730>;

export type FragmentToken2730 =
  | FragmentSelf2730["__typename"]
  | FragmentSelf2730["typenameHint"] | FragmentToken2728 | FragmentToken2729;
