import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1348 } from "./fragment1348";
import type { FragmentToken1349 } from "./fragment1349";

export const FRAGMENT_1350 = gql(`
  fragment Fragment1350 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult1350 = ResultOf<typeof FRAGMENT_1350>;
type FragmentSelf1350 = NonNullable<FragmentResult1350>;

export type FragmentToken1350 =
  | FragmentSelf1350["__typename"]
  | FragmentSelf1350["typenameHint"] | FragmentToken1348 | FragmentToken1349;
