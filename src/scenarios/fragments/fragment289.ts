import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken287 } from "./fragment287";
import type { FragmentToken288 } from "./fragment288";

export const FRAGMENT_289 = gql(`
  fragment Fragment289 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult289 = ResultOf<typeof FRAGMENT_289>;
type FragmentSelf289 = NonNullable<FragmentResult289>;

export type FragmentToken289 =
  | FragmentSelf289["__typename"]
  | FragmentSelf289["typenameHint"] | FragmentToken287 | FragmentToken288;
