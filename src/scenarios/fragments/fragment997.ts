import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken995 } from "./fragment995";
import type { FragmentToken996 } from "./fragment996";

export const FRAGMENT_997 = gql(`
  fragment Fragment997 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult997 = ResultOf<typeof FRAGMENT_997>;
type FragmentSelf997 = NonNullable<FragmentResult997>;

export type FragmentToken997 =
  | FragmentSelf997["__typename"]
  | FragmentSelf997["typenameHint"] | FragmentToken995 | FragmentToken996;
