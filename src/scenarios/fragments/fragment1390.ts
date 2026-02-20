import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1388 } from "./fragment1388";
import type { FragmentToken1389 } from "./fragment1389";

export const FRAGMENT_1390 = gql(`
  fragment Fragment1390 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult1390 = ResultOf<typeof FRAGMENT_1390>;
type FragmentSelf1390 = NonNullable<FragmentResult1390>;

export type FragmentToken1390 =
  | FragmentSelf1390["__typename"]
  | FragmentSelf1390["typenameHint"] | FragmentToken1388 | FragmentToken1389;
