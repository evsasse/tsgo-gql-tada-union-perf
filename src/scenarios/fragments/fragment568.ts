import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken566 } from "./fragment566";
import type { FragmentToken567 } from "./fragment567";

export const FRAGMENT_568 = gql(`
  fragment Fragment568 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult568 = ResultOf<typeof FRAGMENT_568>;
type FragmentSelf568 = NonNullable<FragmentResult568>;

export type FragmentToken568 =
  | FragmentSelf568["__typename"]
  | FragmentSelf568["typenameHint"] | FragmentToken566 | FragmentToken567;
