import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1347 } from "./fragment1347";
import type { FragmentToken1348 } from "./fragment1348";

export const FRAGMENT_1349 = gql(`
  fragment Fragment1349 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult1349 = ResultOf<typeof FRAGMENT_1349>;
type FragmentSelf1349 = NonNullable<FragmentResult1349>;

export type FragmentToken1349 =
  | FragmentSelf1349["__typename"]
  | FragmentSelf1349["typenameHint"] | FragmentToken1347 | FragmentToken1348;
