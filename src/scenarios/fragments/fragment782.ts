import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken780 } from "./fragment780";
import type { FragmentToken781 } from "./fragment781";

export const FRAGMENT_782 = gql(`
  fragment Fragment782 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult782 = ResultOf<typeof FRAGMENT_782>;
type FragmentSelf782 = NonNullable<FragmentResult782>;

export type FragmentToken782 =
  | FragmentSelf782["__typename"]
  | FragmentSelf782["typenameHint"] | FragmentToken780 | FragmentToken781;
