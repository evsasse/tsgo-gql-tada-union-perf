import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3645 } from "./fragment3645";
import type { FragmentToken3646 } from "./fragment3646";

export const FRAGMENT_3647 = gql(`
  fragment Fragment3647 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult3647 = ResultOf<typeof FRAGMENT_3647>;
type FragmentSelf3647 = NonNullable<FragmentResult3647>;

export type FragmentToken3647 =
  | FragmentSelf3647["__typename"]
  | FragmentSelf3647["typenameHint"] | FragmentToken3645 | FragmentToken3646;
