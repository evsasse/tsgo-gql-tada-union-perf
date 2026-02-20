import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken048 } from "./fragment048";
import type { FragmentToken049 } from "./fragment049";

export const FRAGMENT_050 = gql(`
  fragment Fragment050 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult050 = ResultOf<typeof FRAGMENT_050>;
type FragmentSelf050 = NonNullable<FragmentResult050>;

export type FragmentToken050 =
  | FragmentSelf050["__typename"]
  | FragmentSelf050["typenameHint"] | FragmentToken048 | FragmentToken049;
