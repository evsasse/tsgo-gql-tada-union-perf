import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken388 } from "./fragment388";
import type { FragmentToken389 } from "./fragment389";

export const FRAGMENT_390 = gql(`
  fragment Fragment390 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult390 = ResultOf<typeof FRAGMENT_390>;
type FragmentSelf390 = NonNullable<FragmentResult390>;

export type FragmentToken390 =
  | FragmentSelf390["__typename"]
  | FragmentSelf390["typenameHint"] | FragmentToken388 | FragmentToken389;
