import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1039 } from "./fragment1039";
import type { FragmentToken1040 } from "./fragment1040";

export const FRAGMENT_1041 = gql(`
  fragment Fragment1041 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult1041 = ResultOf<typeof FRAGMENT_1041>;
type FragmentSelf1041 = NonNullable<FragmentResult1041>;

export type FragmentToken1041 =
  | FragmentSelf1041["__typename"]
  | FragmentSelf1041["typenameHint"] | FragmentToken1039 | FragmentToken1040;
