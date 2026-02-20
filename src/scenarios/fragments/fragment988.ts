import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken986 } from "./fragment986";
import type { FragmentToken987 } from "./fragment987";

export const FRAGMENT_988 = gql(`
  fragment Fragment988 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult988 = ResultOf<typeof FRAGMENT_988>;
type FragmentSelf988 = NonNullable<FragmentResult988>;

export type FragmentToken988 =
  | FragmentSelf988["__typename"]
  | FragmentSelf988["typenameHint"] | FragmentToken986 | FragmentToken987;
