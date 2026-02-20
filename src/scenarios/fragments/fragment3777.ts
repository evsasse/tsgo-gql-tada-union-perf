import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3775 } from "./fragment3775";
import type { FragmentToken3776 } from "./fragment3776";

export const FRAGMENT_3777 = gql(`
  fragment Fragment3777 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult3777 = ResultOf<typeof FRAGMENT_3777>;
type FragmentSelf3777 = NonNullable<FragmentResult3777>;

export type FragmentToken3777 =
  | FragmentSelf3777["__typename"]
  | FragmentSelf3777["typenameHint"] | FragmentToken3775 | FragmentToken3776;
