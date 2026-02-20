import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken909 } from "./fragment909";
import type { FragmentToken910 } from "./fragment910";

export const FRAGMENT_911 = gql(`
  fragment Fragment911 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult911 = ResultOf<typeof FRAGMENT_911>;
type FragmentSelf911 = NonNullable<FragmentResult911>;

export type FragmentToken911 =
  | FragmentSelf911["__typename"]
  | FragmentSelf911["typenameHint"] | FragmentToken909 | FragmentToken910;
