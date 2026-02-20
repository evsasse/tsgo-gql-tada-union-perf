import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1476 } from "./fragment1476";
import type { FragmentToken1477 } from "./fragment1477";

export const FRAGMENT_1478 = gql(`
  fragment Fragment1478 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult1478 = ResultOf<typeof FRAGMENT_1478>;
type FragmentSelf1478 = NonNullable<FragmentResult1478>;

export type FragmentToken1478 =
  | FragmentSelf1478["__typename"]
  | FragmentSelf1478["typenameHint"] | FragmentToken1476 | FragmentToken1477;
