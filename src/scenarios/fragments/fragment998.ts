import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken996 } from "./fragment996";
import type { FragmentToken997 } from "./fragment997";

export const FRAGMENT_998 = gql(`
  fragment Fragment998 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult998 = ResultOf<typeof FRAGMENT_998>;
type FragmentSelf998 = NonNullable<FragmentResult998>;

export type FragmentToken998 =
  | FragmentSelf998["__typename"]
  | FragmentSelf998["typenameHint"] | FragmentToken996 | FragmentToken997;
