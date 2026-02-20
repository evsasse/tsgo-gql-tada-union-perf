import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken092 } from "./fragment092";
import type { FragmentToken093 } from "./fragment093";

export const FRAGMENT_094 = gql(`
  fragment Fragment094 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult094 = ResultOf<typeof FRAGMENT_094>;
type FragmentSelf094 = NonNullable<FragmentResult094>;

export type FragmentToken094 =
  | FragmentSelf094["__typename"]
  | FragmentSelf094["typenameHint"] | FragmentToken092 | FragmentToken093;
