import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1509 } from "./fragment1509";
import type { FragmentToken1510 } from "./fragment1510";

export const FRAGMENT_1511 = gql(`
  fragment Fragment1511 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult1511 = ResultOf<typeof FRAGMENT_1511>;
type FragmentSelf1511 = NonNullable<FragmentResult1511>;

export type FragmentToken1511 =
  | FragmentSelf1511["__typename"]
  | FragmentSelf1511["typenameHint"] | FragmentToken1509 | FragmentToken1510;
