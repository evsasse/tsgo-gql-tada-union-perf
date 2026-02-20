import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3796 } from "./fragment3796";
import type { FragmentToken3797 } from "./fragment3797";

export const FRAGMENT_3798 = gql(`
  fragment Fragment3798 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult3798 = ResultOf<typeof FRAGMENT_3798>;
type FragmentSelf3798 = NonNullable<FragmentResult3798>;

export type FragmentToken3798 =
  | FragmentSelf3798["__typename"]
  | FragmentSelf3798["typenameHint"] | FragmentToken3796 | FragmentToken3797;
