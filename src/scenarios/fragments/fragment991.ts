import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken989 } from "./fragment989";
import type { FragmentToken990 } from "./fragment990";

export const FRAGMENT_991 = gql(`
  fragment Fragment991 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult991 = ResultOf<typeof FRAGMENT_991>;
type FragmentSelf991 = NonNullable<FragmentResult991>;

export type FragmentToken991 =
  | FragmentSelf991["__typename"]
  | FragmentSelf991["typenameHint"] | FragmentToken989 | FragmentToken990;
