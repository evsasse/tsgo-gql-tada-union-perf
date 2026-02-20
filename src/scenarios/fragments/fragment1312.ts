import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1310 } from "./fragment1310";
import type { FragmentToken1311 } from "./fragment1311";

export const FRAGMENT_1312 = gql(`
  fragment Fragment1312 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult1312 = ResultOf<typeof FRAGMENT_1312>;
type FragmentSelf1312 = NonNullable<FragmentResult1312>;

export type FragmentToken1312 =
  | FragmentSelf1312["__typename"]
  | FragmentSelf1312["typenameHint"] | FragmentToken1310 | FragmentToken1311;
