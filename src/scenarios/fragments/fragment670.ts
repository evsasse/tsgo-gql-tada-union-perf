import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken668 } from "./fragment668";
import type { FragmentToken669 } from "./fragment669";

export const FRAGMENT_670 = gql(`
  fragment Fragment670 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult670 = ResultOf<typeof FRAGMENT_670>;
type FragmentSelf670 = NonNullable<FragmentResult670>;

export type FragmentToken670 =
  | FragmentSelf670["__typename"]
  | FragmentSelf670["typenameHint"] | FragmentToken668 | FragmentToken669;
