import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken931 } from "./fragment931";
import type { FragmentToken932 } from "./fragment932";

export const FRAGMENT_933 = gql(`
  fragment Fragment933 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult933 = ResultOf<typeof FRAGMENT_933>;
type FragmentSelf933 = NonNullable<FragmentResult933>;

export type FragmentToken933 =
  | FragmentSelf933["__typename"]
  | FragmentSelf933["typenameHint"] | FragmentToken931 | FragmentToken932;
