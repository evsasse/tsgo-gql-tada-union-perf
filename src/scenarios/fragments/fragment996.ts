import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken994 } from "./fragment994";
import type { FragmentToken995 } from "./fragment995";

export const FRAGMENT_996 = gql(`
  fragment Fragment996 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult996 = ResultOf<typeof FRAGMENT_996>;
type FragmentSelf996 = NonNullable<FragmentResult996>;

export type FragmentToken996 =
  | FragmentSelf996["__typename"]
  | FragmentSelf996["typenameHint"] | FragmentToken994 | FragmentToken995;
