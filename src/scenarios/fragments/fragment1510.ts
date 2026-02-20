import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1508 } from "./fragment1508";
import type { FragmentToken1509 } from "./fragment1509";

export const FRAGMENT_1510 = gql(`
  fragment Fragment1510 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult1510 = ResultOf<typeof FRAGMENT_1510>;
type FragmentSelf1510 = NonNullable<FragmentResult1510>;

export type FragmentToken1510 =
  | FragmentSelf1510["__typename"]
  | FragmentSelf1510["typenameHint"] | FragmentToken1508 | FragmentToken1509;
