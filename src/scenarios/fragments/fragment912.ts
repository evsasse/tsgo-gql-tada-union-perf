import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken910 } from "./fragment910";
import type { FragmentToken911 } from "./fragment911";

export const FRAGMENT_912 = gql(`
  fragment Fragment912 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult912 = ResultOf<typeof FRAGMENT_912>;
type FragmentSelf912 = NonNullable<FragmentResult912>;

export type FragmentToken912 =
  | FragmentSelf912["__typename"]
  | FragmentSelf912["typenameHint"] | FragmentToken910 | FragmentToken911;
