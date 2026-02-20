import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken096 } from "./fragment096";
import type { FragmentToken097 } from "./fragment097";

export const FRAGMENT_098 = gql(`
  fragment Fragment098 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult098 = ResultOf<typeof FRAGMENT_098>;
type FragmentSelf098 = NonNullable<FragmentResult098>;

export type FragmentToken098 =
  | FragmentSelf098["__typename"]
  | FragmentSelf098["typenameHint"] | FragmentToken096 | FragmentToken097;
