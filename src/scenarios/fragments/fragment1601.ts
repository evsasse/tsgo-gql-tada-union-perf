import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1599 } from "./fragment1599";
import type { FragmentToken1600 } from "./fragment1600";

export const FRAGMENT_1601 = gql(`
  fragment Fragment1601 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult1601 = ResultOf<typeof FRAGMENT_1601>;
type FragmentSelf1601 = NonNullable<FragmentResult1601>;

export type FragmentToken1601 =
  | FragmentSelf1601["__typename"]
  | FragmentSelf1601["typenameHint"] | FragmentToken1599 | FragmentToken1600;
