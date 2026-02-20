import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2028 } from "./fragment2028";
import type { FragmentToken2029 } from "./fragment2029";

export const FRAGMENT_2030 = gql(`
  fragment Fragment2030 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult2030 = ResultOf<typeof FRAGMENT_2030>;
type FragmentSelf2030 = NonNullable<FragmentResult2030>;

export type FragmentToken2030 =
  | FragmentSelf2030["__typename"]
  | FragmentSelf2030["typenameHint"] | FragmentToken2028 | FragmentToken2029;
