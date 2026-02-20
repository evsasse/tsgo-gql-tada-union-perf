import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3724 } from "./fragment3724";
import type { FragmentToken3725 } from "./fragment3725";

export const FRAGMENT_3726 = gql(`
  fragment Fragment3726 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult3726 = ResultOf<typeof FRAGMENT_3726>;
type FragmentSelf3726 = NonNullable<FragmentResult3726>;

export type FragmentToken3726 =
  | FragmentSelf3726["__typename"]
  | FragmentSelf3726["typenameHint"] | FragmentToken3724 | FragmentToken3725;
