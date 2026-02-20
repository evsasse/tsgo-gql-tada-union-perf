import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2942 } from "./fragment2942";
import type { FragmentToken2943 } from "./fragment2943";

export const FRAGMENT_2944 = gql(`
  fragment Fragment2944 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult2944 = ResultOf<typeof FRAGMENT_2944>;
type FragmentSelf2944 = NonNullable<FragmentResult2944>;

export type FragmentToken2944 =
  | FragmentSelf2944["__typename"]
  | FragmentSelf2944["typenameHint"] | FragmentToken2942 | FragmentToken2943;
