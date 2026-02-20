import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1424 } from "./fragment1424";
import type { FragmentToken1425 } from "./fragment1425";

export const FRAGMENT_1426 = gql(`
  fragment Fragment1426 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult1426 = ResultOf<typeof FRAGMENT_1426>;
type FragmentSelf1426 = NonNullable<FragmentResult1426>;

export type FragmentToken1426 =
  | FragmentSelf1426["__typename"]
  | FragmentSelf1426["typenameHint"] | FragmentToken1424 | FragmentToken1425;
