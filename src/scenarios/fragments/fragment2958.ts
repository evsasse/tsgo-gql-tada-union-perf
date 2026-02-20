import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2956 } from "./fragment2956";
import type { FragmentToken2957 } from "./fragment2957";

export const FRAGMENT_2958 = gql(`
  fragment Fragment2958 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult2958 = ResultOf<typeof FRAGMENT_2958>;
type FragmentSelf2958 = NonNullable<FragmentResult2958>;

export type FragmentToken2958 =
  | FragmentSelf2958["__typename"]
  | FragmentSelf2958["typenameHint"] | FragmentToken2956 | FragmentToken2957;
