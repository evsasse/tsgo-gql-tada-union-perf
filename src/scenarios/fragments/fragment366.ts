import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken364 } from "./fragment364";
import type { FragmentToken365 } from "./fragment365";

export const FRAGMENT_366 = gql(`
  fragment Fragment366 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult366 = ResultOf<typeof FRAGMENT_366>;
type FragmentSelf366 = NonNullable<FragmentResult366>;

export type FragmentToken366 =
  | FragmentSelf366["__typename"]
  | FragmentSelf366["typenameHint"] | FragmentToken364 | FragmentToken365;
