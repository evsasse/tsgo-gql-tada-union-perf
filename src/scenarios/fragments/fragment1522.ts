import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1520 } from "./fragment1520";
import type { FragmentToken1521 } from "./fragment1521";

export const FRAGMENT_1522 = gql(`
  fragment Fragment1522 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult1522 = ResultOf<typeof FRAGMENT_1522>;
type FragmentSelf1522 = NonNullable<FragmentResult1522>;

export type FragmentToken1522 =
  | FragmentSelf1522["__typename"]
  | FragmentSelf1522["typenameHint"] | FragmentToken1520 | FragmentToken1521;
