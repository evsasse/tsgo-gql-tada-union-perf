import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1386 } from "./fragment1386";
import type { FragmentToken1387 } from "./fragment1387";

export const FRAGMENT_1388 = gql(`
  fragment Fragment1388 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult1388 = ResultOf<typeof FRAGMENT_1388>;
type FragmentSelf1388 = NonNullable<FragmentResult1388>;

export type FragmentToken1388 =
  | FragmentSelf1388["__typename"]
  | FragmentSelf1388["typenameHint"] | FragmentToken1386 | FragmentToken1387;
