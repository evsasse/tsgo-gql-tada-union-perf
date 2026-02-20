import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken040 } from "./fragment040";
import type { FragmentToken041 } from "./fragment041";

export const FRAGMENT_042 = gql(`
  fragment Fragment042 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult042 = ResultOf<typeof FRAGMENT_042>;
type FragmentSelf042 = NonNullable<FragmentResult042>;

export type FragmentToken042 =
  | FragmentSelf042["__typename"]
  | FragmentSelf042["typenameHint"] | FragmentToken040 | FragmentToken041;
