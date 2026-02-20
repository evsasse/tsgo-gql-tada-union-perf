import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2038 } from "./fragment2038";
import type { FragmentToken2039 } from "./fragment2039";

export const FRAGMENT_2040 = gql(`
  fragment Fragment2040 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult2040 = ResultOf<typeof FRAGMENT_2040>;
type FragmentSelf2040 = NonNullable<FragmentResult2040>;

export type FragmentToken2040 =
  | FragmentSelf2040["__typename"]
  | FragmentSelf2040["typenameHint"] | FragmentToken2038 | FragmentToken2039;
