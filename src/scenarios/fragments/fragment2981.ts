import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2979 } from "./fragment2979";
import type { FragmentToken2980 } from "./fragment2980";

export const FRAGMENT_2981 = gql(`
  fragment Fragment2981 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult2981 = ResultOf<typeof FRAGMENT_2981>;
type FragmentSelf2981 = NonNullable<FragmentResult2981>;

export type FragmentToken2981 =
  | FragmentSelf2981["__typename"]
  | FragmentSelf2981["typenameHint"] | FragmentToken2979 | FragmentToken2980;
