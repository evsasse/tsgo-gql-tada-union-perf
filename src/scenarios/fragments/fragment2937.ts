import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2935 } from "./fragment2935";
import type { FragmentToken2936 } from "./fragment2936";

export const FRAGMENT_2937 = gql(`
  fragment Fragment2937 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult2937 = ResultOf<typeof FRAGMENT_2937>;
type FragmentSelf2937 = NonNullable<FragmentResult2937>;

export type FragmentToken2937 =
  | FragmentSelf2937["__typename"]
  | FragmentSelf2937["typenameHint"] | FragmentToken2935 | FragmentToken2936;
