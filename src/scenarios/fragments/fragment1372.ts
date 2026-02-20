import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1370 } from "./fragment1370";
import type { FragmentToken1371 } from "./fragment1371";

export const FRAGMENT_1372 = gql(`
  fragment Fragment1372 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult1372 = ResultOf<typeof FRAGMENT_1372>;
type FragmentSelf1372 = NonNullable<FragmentResult1372>;

export type FragmentToken1372 =
  | FragmentSelf1372["__typename"]
  | FragmentSelf1372["typenameHint"] | FragmentToken1370 | FragmentToken1371;
