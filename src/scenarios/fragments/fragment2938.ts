import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2936 } from "./fragment2936";
import type { FragmentToken2937 } from "./fragment2937";

export const FRAGMENT_2938 = gql(`
  fragment Fragment2938 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult2938 = ResultOf<typeof FRAGMENT_2938>;
type FragmentSelf2938 = NonNullable<FragmentResult2938>;

export type FragmentToken2938 =
  | FragmentSelf2938["__typename"]
  | FragmentSelf2938["typenameHint"] | FragmentToken2936 | FragmentToken2937;
