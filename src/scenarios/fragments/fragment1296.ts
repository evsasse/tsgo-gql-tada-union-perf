import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1294 } from "./fragment1294";
import type { FragmentToken1295 } from "./fragment1295";

export const FRAGMENT_1296 = gql(`
  fragment Fragment1296 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult1296 = ResultOf<typeof FRAGMENT_1296>;
type FragmentSelf1296 = NonNullable<FragmentResult1296>;

export type FragmentToken1296 =
  | FragmentSelf1296["__typename"]
  | FragmentSelf1296["typenameHint"] | FragmentToken1294 | FragmentToken1295;
