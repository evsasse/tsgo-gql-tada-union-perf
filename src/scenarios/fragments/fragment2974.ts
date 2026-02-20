import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2972 } from "./fragment2972";
import type { FragmentToken2973 } from "./fragment2973";

export const FRAGMENT_2974 = gql(`
  fragment Fragment2974 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult2974 = ResultOf<typeof FRAGMENT_2974>;
type FragmentSelf2974 = NonNullable<FragmentResult2974>;

export type FragmentToken2974 =
  | FragmentSelf2974["__typename"]
  | FragmentSelf2974["typenameHint"] | FragmentToken2972 | FragmentToken2973;
