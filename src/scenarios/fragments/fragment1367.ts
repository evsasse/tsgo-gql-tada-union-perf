import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1365 } from "./fragment1365";
import type { FragmentToken1366 } from "./fragment1366";

export const FRAGMENT_1367 = gql(`
  fragment Fragment1367 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult1367 = ResultOf<typeof FRAGMENT_1367>;
type FragmentSelf1367 = NonNullable<FragmentResult1367>;

export type FragmentToken1367 =
  | FragmentSelf1367["__typename"]
  | FragmentSelf1367["typenameHint"] | FragmentToken1365 | FragmentToken1366;
