import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken754 } from "./fragment754";
import type { FragmentToken755 } from "./fragment755";

export const FRAGMENT_756 = gql(`
  fragment Fragment756 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult756 = ResultOf<typeof FRAGMENT_756>;
type FragmentSelf756 = NonNullable<FragmentResult756>;

export type FragmentToken756 =
  | FragmentSelf756["__typename"]
  | FragmentSelf756["typenameHint"] | FragmentToken754 | FragmentToken755;
