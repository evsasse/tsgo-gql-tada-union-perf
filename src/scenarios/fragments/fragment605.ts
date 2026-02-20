import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken603 } from "./fragment603";
import type { FragmentToken604 } from "./fragment604";

export const FRAGMENT_605 = gql(`
  fragment Fragment605 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult605 = ResultOf<typeof FRAGMENT_605>;
type FragmentSelf605 = NonNullable<FragmentResult605>;

export type FragmentToken605 =
  | FragmentSelf605["__typename"]
  | FragmentSelf605["typenameHint"] | FragmentToken603 | FragmentToken604;
