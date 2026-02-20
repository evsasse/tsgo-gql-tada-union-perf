import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3648 } from "./fragment3648";
import type { FragmentToken3649 } from "./fragment3649";

export const FRAGMENT_3650 = gql(`
  fragment Fragment3650 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult3650 = ResultOf<typeof FRAGMENT_3650>;
type FragmentSelf3650 = NonNullable<FragmentResult3650>;

export type FragmentToken3650 =
  | FragmentSelf3650["__typename"]
  | FragmentSelf3650["typenameHint"] | FragmentToken3648 | FragmentToken3649;
