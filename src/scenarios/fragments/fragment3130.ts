import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3128 } from "./fragment3128";
import type { FragmentToken3129 } from "./fragment3129";

export const FRAGMENT_3130 = gql(`
  fragment Fragment3130 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult3130 = ResultOf<typeof FRAGMENT_3130>;
type FragmentSelf3130 = NonNullable<FragmentResult3130>;

export type FragmentToken3130 =
  | FragmentSelf3130["__typename"]
  | FragmentSelf3130["typenameHint"] | FragmentToken3128 | FragmentToken3129;
