import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken908 } from "./fragment908";
import type { FragmentToken909 } from "./fragment909";

export const FRAGMENT_910 = gql(`
  fragment Fragment910 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult910 = ResultOf<typeof FRAGMENT_910>;
type FragmentSelf910 = NonNullable<FragmentResult910>;

export type FragmentToken910 =
  | FragmentSelf910["__typename"]
  | FragmentSelf910["typenameHint"] | FragmentToken908 | FragmentToken909;
