import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken549 } from "./fragment549";
import type { FragmentToken550 } from "./fragment550";

export const FRAGMENT_551 = gql(`
  fragment Fragment551 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult551 = ResultOf<typeof FRAGMENT_551>;
type FragmentSelf551 = NonNullable<FragmentResult551>;

export type FragmentToken551 =
  | FragmentSelf551["__typename"]
  | FragmentSelf551["typenameHint"] | FragmentToken549 | FragmentToken550;
