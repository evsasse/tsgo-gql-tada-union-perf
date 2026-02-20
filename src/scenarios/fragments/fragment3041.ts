import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3039 } from "./fragment3039";
import type { FragmentToken3040 } from "./fragment3040";

export const FRAGMENT_3041 = gql(`
  fragment Fragment3041 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult3041 = ResultOf<typeof FRAGMENT_3041>;
type FragmentSelf3041 = NonNullable<FragmentResult3041>;

export type FragmentToken3041 =
  | FragmentSelf3041["__typename"]
  | FragmentSelf3041["typenameHint"] | FragmentToken3039 | FragmentToken3040;
