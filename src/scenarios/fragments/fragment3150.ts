import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3148 } from "./fragment3148";
import type { FragmentToken3149 } from "./fragment3149";

export const FRAGMENT_3150 = gql(`
  fragment Fragment3150 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult3150 = ResultOf<typeof FRAGMENT_3150>;
type FragmentSelf3150 = NonNullable<FragmentResult3150>;

export type FragmentToken3150 =
  | FragmentSelf3150["__typename"]
  | FragmentSelf3150["typenameHint"] | FragmentToken3148 | FragmentToken3149;
