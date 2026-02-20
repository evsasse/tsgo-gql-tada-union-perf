import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1364 } from "./fragment1364";
import type { FragmentToken1365 } from "./fragment1365";

export const FRAGMENT_1366 = gql(`
  fragment Fragment1366 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult1366 = ResultOf<typeof FRAGMENT_1366>;
type FragmentSelf1366 = NonNullable<FragmentResult1366>;

export type FragmentToken1366 =
  | FragmentSelf1366["__typename"]
  | FragmentSelf1366["typenameHint"] | FragmentToken1364 | FragmentToken1365;
