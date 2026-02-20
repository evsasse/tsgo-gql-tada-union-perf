import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3508 } from "./fragment3508";
import type { FragmentToken3509 } from "./fragment3509";

export const FRAGMENT_3510 = gql(`
  fragment Fragment3510 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult3510 = ResultOf<typeof FRAGMENT_3510>;
type FragmentSelf3510 = NonNullable<FragmentResult3510>;

export type FragmentToken3510 =
  | FragmentSelf3510["__typename"]
  | FragmentSelf3510["typenameHint"] | FragmentToken3508 | FragmentToken3509;
