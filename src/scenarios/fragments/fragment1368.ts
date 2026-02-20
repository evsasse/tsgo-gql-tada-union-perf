import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1366 } from "./fragment1366";
import type { FragmentToken1367 } from "./fragment1367";

export const FRAGMENT_1368 = gql(`
  fragment Fragment1368 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult1368 = ResultOf<typeof FRAGMENT_1368>;
type FragmentSelf1368 = NonNullable<FragmentResult1368>;

export type FragmentToken1368 =
  | FragmentSelf1368["__typename"]
  | FragmentSelf1368["typenameHint"] | FragmentToken1366 | FragmentToken1367;
