import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1953 } from "./fragment1953";
import type { FragmentToken1954 } from "./fragment1954";

export const FRAGMENT_1955 = gql(`
  fragment Fragment1955 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult1955 = ResultOf<typeof FRAGMENT_1955>;
type FragmentSelf1955 = NonNullable<FragmentResult1955>;

export type FragmentToken1955 =
  | FragmentSelf1955["__typename"]
  | FragmentSelf1955["typenameHint"] | FragmentToken1953 | FragmentToken1954;
