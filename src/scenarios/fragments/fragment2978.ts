import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2976 } from "./fragment2976";
import type { FragmentToken2977 } from "./fragment2977";

export const FRAGMENT_2978 = gql(`
  fragment Fragment2978 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult2978 = ResultOf<typeof FRAGMENT_2978>;
type FragmentSelf2978 = NonNullable<FragmentResult2978>;

export type FragmentToken2978 =
  | FragmentSelf2978["__typename"]
  | FragmentSelf2978["typenameHint"] | FragmentToken2976 | FragmentToken2977;
