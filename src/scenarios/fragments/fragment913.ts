import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken911 } from "./fragment911";
import type { FragmentToken912 } from "./fragment912";

export const FRAGMENT_913 = gql(`
  fragment Fragment913 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult913 = ResultOf<typeof FRAGMENT_913>;
type FragmentSelf913 = NonNullable<FragmentResult913>;

export type FragmentToken913 =
  | FragmentSelf913["__typename"]
  | FragmentSelf913["typenameHint"] | FragmentToken911 | FragmentToken912;
